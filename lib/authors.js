export const authors = [
  {
    slug: 'elena-moreau',
    name: 'Elena Moreau',
    role: 'Founding Partner — Technology',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
    bio: 'Software architect with fifteen years shipping production systems at scale. Writes on longevity in codebases, engineering culture, and the discipline of boring choices.',
  },
  {
    slug: 'javier-ruiz',
    name: 'Javier Ruiz',
    role: 'Partner — Hospitality',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    bio: 'Operator and developer of boutique hotels across the Iberian peninsula. Writes on service design, operating culture, and the craft of hospitality.',
  },
  {
    slug: 'sofia-clements',
    name: 'Sofia Clements',
    role: 'Partner — Design',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    bio: 'Designer with a background in editorial and product. Writes on the strategic role of design, the taste of restraint, and collaboration with engineers.',
  },
  {
    slug: 'marcus-aden',
    name: 'Marcus Aden',
    role: 'Partner — Finance',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    bio: 'Former investment banker turned independent advisor. Writes on financial craft, the ethics of modelling, and capital with conscience.',
  },
  {
    slug: 'ana-villar',
    name: 'Ana Villar',
    role: 'Head of Education',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    bio: 'Cohort leader and former university lecturer. Writes on practitioner education, cohort design, and the apprenticeship model updated.',
  },
  {
    slug: 'tomas-iriarte',
    name: 'Tomás Iriarte',
    role: 'Head of Real Estate',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
    bio: 'Real estate operator and developer with a thirty-year view. Writes on location, development discipline, and intergenerational assets.',
  },
];

export function getAuthor(slug) {
  return authors.find(a => a.slug === slug);
}
