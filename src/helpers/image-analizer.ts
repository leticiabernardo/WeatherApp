import { app } from 'types/types';

const minWidth = 1200;
const minHeight = 1000;

function getTopLargestImages(items: app.BingImage[]): string | undefined {
  let largestImage;
  const largestWidth = minWidth;
  const largestHeight = minHeight;
  for (let i = 0; i < items.length; i += 1) {
    if (items[i].width > largestWidth && items[i].height > largestHeight) {
      largestImage = items[i].contentUrl;
    }
  }
  return largestImage;
}

function getRandomLargestImage(items: app.BingImage[]): string {
  const topImage = getTopLargestImages(items.slice(0, 3));
  if (topImage) return topImage;

  const images = items.filter(item => item.width > minWidth);
  const randomItem = Math.floor(Math.random() * images.length);
  return images[randomItem].contentUrl;
}

export { getRandomLargestImage };
