type Item = {
  name: string;
  slug: string;
  description?: string;
  isDisabled?: boolean;
}

export const demos: Item[] = [
  {
    name: 'Home',
    slug: '/',
    description: 'Create UI that is shared across routes',
  },
  {
    name: 'Consulting',
    slug: 'consulting',
    description: 'Organize routes without affecting URL paths',
  },
  {
    name: 'About US',
    slug: 'aboutus',
    description:
      'Streaming data fetching from the server with React Suspense',
  }
];
