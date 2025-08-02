import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'A personal GitHub portfolio site.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <aside className="w-64 bg-white dark:bg-gray-800 shadow-md p-6 fixed h-full">
          <nav className="flex flex-col gap-4 sticky top-6">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#skills" className="hover:text-blue-600">Skills</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#experience" className="hover:text-blue-600">Experience</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
          <footer className="mt-auto pt-10 text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Your Name
          </footer>
        </aside>
        <main className="ml-64 w-full px-10 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}