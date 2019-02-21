const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Barayuda Gautama',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Barayuda Gautama',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Barayuda Gautama',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Barayuda Gautama',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Barayuda Gautama',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
