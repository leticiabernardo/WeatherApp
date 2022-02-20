const minWidth = 1200;
const minHeight = 1000;
const topLargeImages = 3;

const getTopLargeImages = (items: app.BingImage[]): string | undefined => {
  let largestImage;
  for (let i = 0; i < items.length; i += 1) {
    if (items[i].width > minWidth && items[i].height > minHeight) {
      largestImage = items[i].contentUrl;
    }
  }

  return largestImage;
};

const getRandomLargestImage = (items: app.BingImage[]): string => {
  const topImage = getTopLargeImages(items.slice(0, topLargeImages));
  if (topImage) return topImage;

  const images = items.filter(item => item.width > minWidth);
  const randomItem = Math.floor(Math.random() * images.length);

  return images[randomItem].contentUrl;
};

const transformBackground = (bingBackground: app.BingBackgroundImage) => {
  const background = getRandomLargestImage(bingBackground.value) || '';
  return {
    background,
  };
};

export { transformBackground };
