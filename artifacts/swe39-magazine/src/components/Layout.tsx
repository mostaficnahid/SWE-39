import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { type ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
        {children}
        <Footer />
      </main>
    </>
  );
}
