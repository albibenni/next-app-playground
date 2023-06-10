import { UnplashImage } from '@/models/unplash-image';
import Image from 'next/image';
import Link from 'next/link';
import { Alert } from '@/components/bootstrap';

export const metadata = {
  title: 'Static fetching - Next.js sandbox 13.4',
};
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
      <Alert>
        This page <strong>fetches and caches data at build time</strong>. Even
        though the Unsplash API always returns a new image, we see the same
        image after refreshing the page until we compile the project again.
      </Alert>
      <Image
        src={image.urls.raw}
        width={myWidth}
        height={myHeight}
        alt={image.description}
        className="rounded shadow mw-100 h-100"
      />
      by{' '}
      <Link href={'/users/' + image.user.username}>{image.user.username}</Link>
    </div>
  );
}
