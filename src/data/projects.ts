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
  description: string;
  description2: string;
  images: string[];
  videos?: string[]; // Optional video support
  isSeries?: boolean;
}

export const projects: Project[] = [
  // 1. Bang
  {
    slug: 'bang',
    title: 'Work 01: Bang',
    year: '2026',
    medium: 'Kinetic Installation (Latex, Pneumatics)',
    dimensions: 'Variable (14" to 5.5\')',
    weight: '25kg',
    note: 'Requires 15A Circuit',
    heroImage: '/images/image.png',
    quote: 'A breathing universe.',
    description: 'Bang is a kinetic art installation that transforms a scientific tool into a cosmic metaphor. Using a closed-loop pneumatic system, a 100g black weather balloon cycles between a dense "singularity" (14 inches) and a massive 5.5-foot expansion.',
    description2: 'The deep black surface absorbs light, creating a silhouette that feels like a hole in the gallery space. The rhythm of inflation and deflation mimics the "cosmic breath"—a perpetual cycle of creation (Big Bang) and destruction (Big Crunch).',
    images: [
      '/images/image.png',
    ],
    videos: [
      '/images/Balloon Expanding Closeup.mp4' // Video of the balloon
    ]
  },
  // 2. Black Hole Vision (Spaghettification)
  {
    slug: 'black-hole-vision',
    title: 'Work 02: Black Hole Vision',
    year: '2026',
    medium: 'Digital Simulation',
    dimensions: 'Projection Variable',
    weight: 'N/A',
    note: 'Visualizing Spaghettification',
    heroImage: '/images/Spaghettification.jpg',
    quote: 'The tidal force of the infinite.',
    description: 'Spaghettification visualizes the theoretical process where extreme tidal forces stretch matter vertically and squeeze it horizontally. This simulation invites the viewer to witness the distortion of an object as it approaches the event horizon.',
    description2: 'Based on Einstein’s theory of general relativity, the piece demonstrates how gravity overpowers molecular cohesion, elongating form into a long, thin strand just before it vanishes into the singularity.',
    images: [
      '/images/Spaghettification.jpg',
      'https://images.unsplash.com/photo-1506318137071-a8bcbf6d0b36?q=80&w=2070&auto=format&fit=crop'
    ]
  },
  // 3. Delayed Vision
  {
    slug: 'delayed-vision',
    title: 'Work 03: Delayed Vision',
    year: '2026',
    medium: 'Video Mirror Series',
    dimensions: 'Variable',
    weight: 'Variable',
    note: 'Series of 3 Works',
    isSeries: true,
    heroImage: 'https://images.unsplash.com/photo-1614730341194-75c60740a073?q=80&w=2187&auto=format&fit=crop',
    quote: 'Light is a fossil of time.',
    description: 'A series of video mirrors that introduce a precise delay to the viewer\'s reflection, corresponding to the light-travel time from various celestial bodies. We never see the present; we only see the past.',
    description2: 'The series includes "The Moon" (1.3 seconds delay), "The Sun" (8 minutes, 20 seconds delay), and "Saturn" (approx. 79 minutes delay), forcing the viewer to confront the latency of the universe.',
    images: [
      'https://images.unsplash.com/photo-1614730341194-75c60740a073?q=80&w=2187&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=2068&auto=format&fit=crop'
    ]
  },
  // 4. Star Trails
  {
    slug: 'star-trails',
    title: 'Work 04: Star Trails',
    year: '2026',
    medium: 'Archival Pigment Prints',
    dimensions: '40x60cm (Framed)',
    weight: '5kg each',
    note: 'Photo Series',
    isSeries: true,
    heroImage: '/images/GeminidTrails.jpg',
    quote: 'Earth\'s rotation captured in light.',
    description: 'A photographic series capturing the apparent motion of stars as Earth rotates. Long exposure techniques transform pinpoint stars into streaks of light, revealing the geometry of our planet\'s movement through space.',
    description2: 'Includes works: "Geminid Trails", "Dunes Trails", "Goose Lake Trails", and "Wildcat Trails". Each image records hours of time compressed into a single frame.',
    images: [
      '/images/GeminidTrails.jpg',
      '/images/DunesTrails8.jpg',
      '/images/GooseLakeTrails5.jpg',
      '/images/WildcatTrails_gap_fillComet.jpg'
    ]
  },
  // 5. 3D Horizons
  {
    slug: '3d-horizons',
    title: 'Work 05: 3D Horizons',
    year: '2026',
    medium: 'Stereoscopic View-Master',
    dimensions: 'Custom Reel & Viewer',
    weight: '0.5kg',
    note: 'Interactive Object',
    heroImage: '/images/View-Master.jpg',
    quote: 'Stereoscopic depth in the void.',
    description: 'A custom View-Master experience presenting 7 stereoscopic images of our solar system. By utilizing parallax data from spacecraft and rotational shifts, these reels provide true 3D views of celestial objects.',
    description2: 'Features the icy mountains of Pluto (New Horizons data), the craters of Phobos (Mars Express), and Solar Coronal Mass Ejections (STEREO satellites).',
    images: [
      '/images/View-Master.jpg',
      'https://images.unsplash.com/photo-1454789548728-85d028b4d80b?q=80&w=2070&auto=format&fit=crop'
    ]
  },
  // 6. Audio Counter
  {
    slug: 'audio-counter',
    title: 'Work 06: Audio Counter',
    year: '2026',
    medium: 'Generative Audio',
    dimensions: 'Variable',
    weight: 'N/A',
    note: 'Aural representation',
    heroImage: 'https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?q=80&w=2023&auto=format&fit=crop',
    quote: 'The sound of 200 billion trillion.',
    description: 'An auditory experiment attempting to quantify the observable universe. With 2 trillion galaxies each holding 100 billion stars, counting them one by one would take 6.3 quadrillion years.',
    description2: 'This piece uses generative machine sound to sonify these magnitudes, creating a chorus where each Hz frequency represents the star count of a specific galaxy.',
    images: [
      'https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?q=80&w=2023&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop'
    ]
  },
  // 7. The Edge
  {
    slug: 'the-edge',
    title: 'Work 07: The Edge',
    year: '2026',
    medium: 'Laminar Flow Fog Screen',
    dimensions: '2.5m x 1.5m',
    weight: '30kg',
    note: 'Requires still air environment',
    heroImage: '/images/LaminarFlowMethod-1.png',
    quote: 'A curtain of uncertainty.',
    description: 'Using laminar flow technology to create a perfect, thin wall of fog. This intangible screen represents the edge of the observable universe—a boundary that is both visible and permeable, yet ultimately obscures what lies beyond.',
    description2: 'Two rows of precision fans sandwich the fog stream, preventing it from dissipating. The result is a smooth, touchable plane of cloud that can be walked through.',
    images: [
      '/images/LaminarFlowMethod-1.png',
      'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=2074&auto=format&fit=crop'
    ]
  },
  // 8. Now & Then
  {
    slug: 'now-and-then',
    title: 'Work 08: Now & Then',
    year: '2026',
    medium: 'Mixed Media Series',
    dimensions: 'Variable',
    weight: 'Variable',
    note: 'Composite Photography',
    isSeries: true,
    heroImage: '/images/Whirlpool.jpg',
    quote: 'Folding time onto itself.',
    description: 'A photo series combining modern astrophotography with historical imagery from the same region of the sky. By overlaying the "Then" onto the "Now," the work highlights the permanence of cosmic structures against the rapid changes of human technology.',
    description2: 'Features composites of the Whirlpool Galaxy, Andromeda, Eagle Nebula, and Orion, merging sharp modern data with grainy archival plates.',
    images: [
      '/images/Whirlpool.jpg',
      '/images/Andromeda.jpg',
      '/images/Eagle v2.jpg',
      '/images/Orion.jpg',
      '/images/Horsehead and flame nebulas.png',
      '/images/California nebula.jpg',
      '/images/California nebula (1).jpg'
    ]
  },
  // 9. Sculpture
  {
    slug: 'sculpture',
    title: 'Work 09: Sculpture Series',
    year: '2026',
    medium: 'Cast Material',
    dimensions: 'Variable',
    weight: 'Variable',
    note: 'Physical Reliefs',
    isSeries: true,
    heroImage: 'https://images.unsplash.com/photo-1614728853970-386052607f1b?q=80&w=2187&auto=format&fit=crop',
    quote: 'Tactile astronomy.',
    description: 'A series of cast molds created from topographic data of cosmic objects. This project translates remote sensing data into tangible objects, allowing the viewer to touch the craters of the Moon, the surface of Mars, and the event horizon of a black hole.',
    description2: 'Includes reliefs of The Moon, Mars, The Milky Way structure, and Solar Flares.',
    images: [
      'https://images.unsplash.com/photo-1614728853970-386052607f1b?q=80&w=2187&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1614314107768-6018061b5b72?q=80&w=2187&auto=format&fit=crop'
    ]
  },
  // 10. CMB VR
  {
    slug: 'cmb-vr',
    title: 'Work 10: CMB VR',
    year: '2026',
    medium: 'Virtual Reality',
    dimensions: 'Headset',
    weight: '0.5kg',
    note: 'Immersive Environment',
    heroImage: '/images/Screenshot_20260101-084458~2.png',
    quote: 'Inside the first light.',
    description: 'A Virtual Reality experience where the user is placed inside a sphere mapped with the Cosmic Microwave Background radiation data. You are floating inside the afterglow of the Big Bang.',
    description2: 'The audio landscape includes soundscapes representing the Doppler effect, creating a sensory connection to the oldest light in the universe.',
    images: [
      '/images/Screenshot_20260101-084458~2.png',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop'
    ]
  },
  // 11. Redshifter
  {
    slug: 'redshifter',
    title: 'Work 11: Redshifter',
    year: '2026',
    medium: 'Room Installation',
    dimensions: 'Variable Room Scale',
    weight: 'N/A',
    note: 'Lighting Environment',
    heroImage: 'https://images.unsplash.com/photo-1484589065579-248aad0d8b13?q=80&w=1959&auto=format&fit=crop',
    quote: 'The color of velocity.',
    description: 'An immersive room installation that simulates the Redshift effect. As viewers move through the space, the lighting shifts spectrum, mimicking how light stretches as objects recede from us at cosmic speeds.',
    description2: 'This physical manifestation of the Doppler effect transforms the gallery into an expanding universe, where distance is measured in color.',
    images: [
      'https://images.unsplash.com/photo-1484589065579-248aad0d8b13?q=80&w=1959&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop'
    ]
  }
];
