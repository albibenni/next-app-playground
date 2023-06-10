export const metadata = {
  title: 'Dynamic fetching - Next.js sandbox 13.4',
};

interface PageProps {
  params: {
    // [topic variable]
    topic: string;
  };
  // searchParams: { [key: string]: string | string[] | undefined },
}

// export const revalidate = 0;
export default async function page({ params: { topic } }: PageProps) {
  return <div className="d-flex flex-column align-items-center">{topic}</div>;
}
