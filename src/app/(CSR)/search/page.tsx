import { Metadata } from 'next';
import SearchPage from '@/app/(CSR)/search/SearchPage';

export const metadata: Metadata = {
  title: 'Search - Next.js sandbox 13.4',
};

// const getUserCached = cache(getUser);
export default async function page() {
  return <SearchPage />;
}
