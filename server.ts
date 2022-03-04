/* eslint-disable @typescript-eslint/no-misused-promises */
// TODO: rearrange the file, split api routes and server file, fix eslint warnings
import fs from 'fs';
import express, { Express, RequestHandler } from 'express';
import { createServer as createViteServer, ViteDevServer } from 'vite';
import serveStatic from 'serve-static';
import compression from 'compression';
import { ServerResponse } from 'http';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { handle, LanguageDetector } from 'i18next-http-middleware';
import i18next from 'i18next';
import api from './src/api';
import en from './src/locales/en.json';
import ptBR from './src/locales/pt_BR.json';

export const defaultNS = 'translations';
export const resources = {
  'en-US': {
    translations: en,
  },
  'pt-BR': {
    translations: ptBR,
  },
} as const;

const filename = require('url')
  .pathToFileURL(__filename)
  .toString() as unknown as string;

const fileNameDIR = dirname(fileURLToPath(filename));

const isTest = process.env.NODE_ENV === 'test' || !!process.env.VITE_TEST_BUILD;

const createServer = async (
  root = process.cwd(),
  isProd = process.env.NODE_ENV === 'production'
) => {
  const localResolve = (p: string) => resolve(fileNameDIR, p);

  const indexProd = isProd
    ? fs.readFileSync(localResolve('./client/index.html'), 'utf-8')
    : '';

  const lngDetector = new LanguageDetector({
    caches: false,
  });
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  i18next.use(lngDetector).init({
    fallbackLng: 'en-US',
    ns: ['translations'],
    defaultNS,
    resources,
  });

  const app: Express = express();
  app.use(express.json() as RequestHandler);
  app.use(express.urlencoded({ extended: true }) as RequestHandler);

  app.use(handle(i18next, {}));

  let vite: ViteDevServer | any | undefined;

  if (!isProd) {
    vite = await createViteServer({
      root,
      logLevel: isTest ? 'error' : 'info',
      server: {
        middlewareMode: true,
        watch: {
          usePolling: true,
          interval: 100,
        },
      },
    });
    // use vite's connect instance as middleware
    app.use(vite.middlewares);
  } else {
    app.use(compression());
    const requestHandler = serveStatic<ServerResponse>(
      localResolve('./client'),
      {
        index: false,
      }
    ) as RequestHandler;
    app.use(requestHandler);
  }

  app.use('/api', api);

  app.use('*', async (req, res) => {
    try {
      const { originalUrl } = req;
      const url = originalUrl;

      let template;
      let render;
      if (!isProd) {
        // always read fresh template in dev
        template = fs.readFileSync(localResolve('index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;
      } else {
        template = indexProd;
        const entryServer = require('./server/entry-server.js');
        render = entryServer.render;
      }

      const appHtml = render(url, req);

      const html = template.replace(`<!--app-html-->`, appHtml);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e: any) {
      !isProd && vite.ssrFixStacktrace(e);
      console.error(e.stack);
      res.status(500).end(e.stack);
    }
  });

  return { app, vite };
};

createServer().then(({ app }) => {
  const port = process.env.PORT || 7456;
  app.listen(Number(port), '0.0.0.0', () => {
    console.log(`App is listening on http://localhost:${port}`);
  });
});

// for test use
export { createServer };
