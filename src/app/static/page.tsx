import { UnplashImage } from '@/models/unplash-image';
import Image from 'next/image';

export default async function page() {
  const response = await fetch(
    'https://api.unsplash.com/photos/random?client_id=' +
      process.env.UNSPLASH_ACCESS_KEY
  );
  const image: UnplashImage = await response.json();
  const myWidth = Math.min(500, image.width);
  const myHeight = (myWidth / image.width) * image.height;

  return (
    <div className="d-flex flex-column align-items-center">
      <Image
        src={image.urls.raw}
        width={myWidth}
        height={myHeight}
        alt={image.description}
      />
    </div>
  );
}
