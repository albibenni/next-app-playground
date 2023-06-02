import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { Inter } from 'next/font/google';
import NavBar from '@/app/NavBar';
import { Container, SSRProvider } from '@/components/bootstrap';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next.js sandbox 13.4',
  description: 'My sandbox to learn new Next.js version',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SSRProvider>
          <NavBar />
          <main>
            <Container className="py-4">{children}</Container>
          </main>
        </SSRProvider>
      </body>
    </html>
  );
}
