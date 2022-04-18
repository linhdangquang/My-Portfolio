import sanityCLient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityCLient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-04-01',
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
  ignoreBrowserTokenWarning: true
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
}
