import React from 'react';
import Hero from '@/components/Hero';
import Messages from '@/components/Messages';
import Memories from '@/components/Memories';
import Gallery from '@/components/Gallery';
import Quotes from '@/components/Quotes';
import Timeline from '@/components/Timeline';
import Footer from '@/components/Footer';

export default function Magazine() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      <Hero />
      <Messages />
      <Memories />
      <Gallery />
      <Quotes />
      <Timeline />
      <Footer />
    </main>
  );
}
