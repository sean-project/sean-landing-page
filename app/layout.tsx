import '@/styles/globals.css';
import React from 'react';
import GlobalNav from './GlobalNav';
import Footer from '@/ui/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Next.js Turbopack App Directory Playground</title>
      </head>
      <body>
      <div>
        <GlobalNav/>
        {children}
        <Footer reactVersion={'sf'} nextVersion={'12'}/>
      </div>
      </body>
    </html>
  );
}
