import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { I18nextProvider } from 'react-i18next';
import { Request } from 'express';
import { App } from './App';
import '@/assets/styles/_common.scss';

export function render(url: string, req: Request): string {
  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <I18nextProvider i18n={req.i18n}>
          <App />
        </I18nextProvider>
      </StaticRouter>
    </React.StrictMode>
  );
}
