import { UnplashImage } from '@/models/unplash-image';

export default async function page() {
  const response = await fetch(
    'https://api.unsplash.com/photos/random?client_id=' +
      process.env.UNSPLASH_ACCESS_KEY
  );
  const image: UnplashImage = await response.json();
}
