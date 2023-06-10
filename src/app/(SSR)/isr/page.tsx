import { UnplashImage } from '@/models/unplash-image';
import Image from 'next/image';
import Link from 'next/link';
import { Alert } from '@/components/bootstrap';

export const metadata = {
  title: 'Incremental Static Regeneration - Next.js sandbox 13.4',
};

export const revalidate = 15;
export default async function page() {
  const response = await fetch(
    'https://api.unsplash.com/photos/random?client_id=' +
      process.env.UNSPLASH_ACCESS_KEY,
    {
      // next: { revalidate: 15 },
    }
  );
  const image: UnplashImage = await response.json();
  const myWidth = Math.min(500, image.width);
  const myHeight = (myWidth / image.width) * image.height;

  return (
    <div className="d-flex flex-column align-items-center">
      <Alert>
        This page uses <strong>incremental static regeneration</strong>. A new
        image is fetched every 15 seconds (after refreshing the page) and then
        served from the cache for that duration.
      </Alert>
      <Image
        src={image.urls.raw}
        width={myWidth}
        height={myHeight}
        alt={image.description}
        className="rounded shadow mw-100 h-100"
      />
      by
      <Link href={'/users/' + image.user.username}>{image.user.username}</Link>
    </div>
  );
}
