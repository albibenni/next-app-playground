import { Alert } from '@/components/bootstrap';
import { Metadata } from 'next';
import { UnplashUser } from '@/models/unplash-user';
import { notFound } from 'next/navigation';

// import { cache } from 'react';

interface PageProps {
  params: {
    username: string;
  };
}
async function getUser(username: string): Promise<UnplashUser> {
  const res = await fetch(
    `https://api.unsplash.com/users/${username}?client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  );
  if (res.status === 404) notFound();
  return await res.json();
}

export async function generateMetadata({
  params: { username },
}: PageProps): Promise<Metadata> {
  const user: UnplashUser = await getUser(username);

  return {
    title:
      ([user.first_name, user.last_name].filter(Boolean).join(' ') ||
        user.username) + ' - NextJS 13.4 Image Gallery',
  };
}

// const getUserCached = cache(getUser);
export default async function page({ params: { username } }: PageProps) {
  const user: UnplashUser = await getUser(username);

  return (
    <div>
      <Alert>
        This profile page uses <strong>generateMetadata</strong> to set the{' '}
        <strong>page title</strong> dynamically from the API response.
      </Alert>
      <h1>{user.username}</h1>
      <p>First Name: {user.first_name}</p>
      <p>Last Name: {user.last_name}</p>
      <a href={`https://unplash.com/${user.username}`}>Unplash profile</a>
    </div>
  );
}
