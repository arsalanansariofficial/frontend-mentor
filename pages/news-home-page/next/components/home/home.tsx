'use client';

import Header from '@/components/header';
import Hero from '@/components/home/_hero';
import Details from '@/components/home/_details';
import Articles from '@/components/home/_articles';

export default function Home() {
  return (
    <div id="root" className="root md:container p-4 md:px-16 md:py-8">
      <Header />
      <main className="main space-y-12 py-4">
        <section className="space-y-8 md:flex md:gap-8 md:space-y-0">
          <Hero />
          <Details />
        </section>
        <Articles />
      </main>
    </div>
  );
}
