export interface Project {
  slug: string;
  title: string;
  year: string;
  medium: string;
  dimensions: string;
  weight: string;
  note: string;
  heroImage: string;
  quote: string;
  description: string; // The first text block
  description2: string; // The second text block
  images: string[];
}

export const projects: Project[] = [
  {
    slug: 'nebulae-core',
    title: 'Work 01: Nebulae Core',
    year: '2025',
    medium: 'Resin & Basalt',
    dimensions: '40x40x10cm',
    weight: '12kg',
    note: 'Internal light source',
    heroImage: 'https://images.unsplash.com/photo-1614730341194-75c60740a073?q=80&w=2187&auto=format&fit=crop',
    quote: 'A fragment of the cosmos, solidified.',
    description: 'Nebulae Core represents the solidification of gaseous states. Using a combination of chemically stabilized resin and raw basalt, this piece captures the moment a nebula collapses into a star. The internal light source pulses at a rhythm matching the Schumann resonance of Earth.',
    description2: 'The surface texture is achieved through a proprietary process of rapid cooling, mimicking the conditions of deep space. Small inclusions of pyrite and quartz catch the light, suggesting distant star systems suspended in the void.',
    images: [
      'https://images.unsplash.com/photo-1614730341194-75c60740a073?q=80&w=2187&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2022&auto=format&fit=crop', // Placeholder additional images
    ]
  },
  {
    slug: 'horizon-event',
    title: 'Work 02: Horizon Event',
    year: '2024',
    medium: 'Projection Map',
    dimensions: 'Variable',
    weight: 'N/A',
    note: 'Requires dark room',
    heroImage: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2022&auto=format&fit=crop',
    quote: 'The point of no return.',
    description: 'Horizon Event is an immersive projection mapping installation that visualizes the gravitational distortion around a black hole. Viewers are invited to step into the event horizon, where light and time seem to bend.',
    description2: 'Algorithms derived from general relativity govern the movement of the light. As viewers approach the center of the projection, the simulation accelerates, creating a sense of inescapable pull.',
    images: [
      'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2022&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop'
    ]
  },
  {
    slug: 'tectonic-drift',
    title: 'Work 03: Tectonic Drift',
    year: '2025',
    medium: 'Steel & OLED',
    dimensions: '200x100cm',
    weight: '45kg',
    note: 'Interactive sensor',
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    quote: 'Continents in motion.',
    description: 'Tectonic Drift explores the slow, violent movement of the Earth\'s crust. Steel plates are mounted over OLED screens that display shifting geological data. The piece reacts to the presence of the viewer, speeding up the drift as one approaches.',
    description2: 'The steel plates are acid-etched to reveal the grain structure of the metal, creating a map-like topography that contrasts with the digital precision of the underlying screens.',
    images: [
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1614730341194-75c60740a073?q=80&w=2187&auto=format&fit=crop'
    ]
  }
];
