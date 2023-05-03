'use client';

import { demos } from '@/lib/demos';
import clsx from 'clsx';
import { useSelectedLayoutSegments } from 'next/navigation';
import Link from 'next/link';

export default function GlobalNav() {
  const [selectedLayoutSegments] = useSelectedLayoutSegments();

  return (
    <div className="flex">
      {demos.map((demo) => {
        return (
          <div key={demo.name}>
            <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
              <Link
                href={`/${demo.slug}`}
              >
                {demo.name}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
