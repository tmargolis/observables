export interface Project {
  slug: string;
  title: string;
  year: string;
  medium: string;
  dimensions: string;
  weight: string;
  price?: string;
  note: string;
  heroImage: string;
  quote: string;
  description: string;
  description2: string;
  images: string[];
  videos?: string[];
  isSeries?: boolean;
  imageTitles?: string[];
  imageDescriptions?: string[]; // New field for specific descriptions per image
  contextImage?: string;
  contextCaption?: string;
}

export const projects: Project[] = [
  // 1. Bang
  {
    slug: 'bang',
    title: 'Bang',
    year: '2026',
    medium: 'Kinetic Installation (Latex, Pneumatics)',
    dimensions: '48 x 24 x 24 inches',
    weight: '25 lb',
    price: '$2,500.00',
    note: 'Requires 15A Circuit',
    heroImage: '/images/image.png',
    quote: 'A breathing universe.',
    description: 'Bang is a kinetic art installation that transforms a scientific tool into a cosmic metaphor. Using a closed-loop pneumatic system, a 100g black weather balloon cycles between a dense "singularity" (14 inches) and a massive 5.5-foot expansion.',
    description2: 'The deep black surface absorbs light, creating a silhouette that feels like a hole in the gallery space. The rhythm of inflation and deflation mimics the "cosmic breath"—a perpetual cycle of creation (Big Bang) and destruction (Big Crunch).',
    images: [
        '/images/image.png',
        '/images/Uninflated.jpg'
    ],
    videos: [
      '/images/Balloon Expanding Closeup.mp4' 
    ]
  },
  // 2. Black Hole Vision
  {
    slug: 'black-hole-vision',
    title: 'Spaghettification',
    year: '2026',
    medium: 'Virtual Reality',
    dimensions: '7 x 6 x 12 inches',
    weight: '1 lb',
    price: '$5,000.00',
    note: 'Requires power',
    heroImage: '/images/Spaghettification.jpg',
    quote: 'The tidal force of the infinite.',
    description: 'Spaghettification visualizes the theoretical process where extreme tidal forces stretch matter vertically and squeeze it horizontally. This simulation invites the viewer to witness the distortion of an object as it approaches the event horizon.',
    description2: 'Based on Einstein’s theory of general relativity, the piece demonstrates how gravity overpowers molecular cohesion, elongating form into a long, thin strand just before it vanishes into the singularity.',
    images: [
      '/images/Spaghettification.jpg',
      '/images/black-hole-vision-2.jpg'
    ]
  },
  // 3. Delayed Vision
  {
    slug: 'delayed-vision',
    title: 'Delayed Vision',
    year: '2026',
    medium: 'Android app running on  Galaxy A9+ Tablet',
    dimensions: '11 x 7 x 1 inches',
    weight: '1 lb',
    price: '$1000 each',
    note: 'Power to each tablet. Light so tablet camera can see',
    isSeries: true,
    heroImage: '/images/Sun_Previs-1.png', // Using Sun as hero
    quote: 'Light is a fossil of time.',
    description: 'A series of video mirrors that introduce a precise delay to the viewer\'s reflection, corresponding to the light-travel time from various celestial bodies. We never see the present; we only see the past.',
    description2: 'The series includes "The Moon" (1.3 seconds delay), "The Sun" (8 minutes, 20 seconds delay), and "Saturn" (approx. 79 minutes delay), forcing the viewer to confront the latency of the universe.',
    images: [
      '/images/Moon_Previs-1.png',
      '/images/Sun_Previs-1.png',
      '/images/Saturn_Previs-1.png'
    ],
    imageTitles: [
        'The Moon (1.3s delay)',
        'The Sun (8m 20s delay)',
        'Saturn (79m delay)'
    ],
    imageDescriptions: [
        'A video mirror reflecting the viewer with a 1.3-second delay, matching the light travel time from the Moon to Earth.',
        'A video mirror reflecting the viewer with an 8-minute, 20-second delay, representing the time it takes sunlight to reach our eyes.',
        'A video mirror with a 79-minute delay, corresponding to the average light travel time from Saturn.'
    ]
  },
  // 4. Star Trails
  {
    slug: 'star-trails',
    title: 'Star Trails',
    year: '2024-2026',
    medium: 'Archival Pigment Prints',
    dimensions: '20 x 30 inches each',
    weight: '5kg each',
    price: '$1,000.00 each',
    note: 'n/a',
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
    ],
    imageTitles: [
      'Geminid',
      'Dunes',
      'Goose Lake',
      'Wildcat'
    ],
    imageDescriptions: [
        'Long exposure capturing the Geminid meteor shower streaks intersecting with star trails.',
        'Star trails rising above the silhouette of sand dunes, emphasizing the earth\'s horizon.',
        'Concentric star paths reflected in the still waters of Goose Lake.',
        'Star movement captured over the equipment of fellow astrophotographers at a star party.'
    ]
  },
  // 5. 3D Horizons
  {
    slug: '3d-horizons',
    title: 'Horizons',
    year: '2026',
    medium: 'Stereoscopic View-Master',
    dimensions: '6 x 10 x 3 inches',
    weight: '0.5kg',
    price: '$1,000.00',
    note: 'n/a',
    isSeries: true,
    heroImage: '/images/View-MasterReelSm.png',
    quote: 'Stereoscopic depth in the void.',
    description: 'A custom View-Master experience presenting 7 stereoscopic images of our solar system. By utilizing parallax data from spacecraft and rotational shifts, these reels provide true 3D views of celestial objects.',
    description2: 'Features the icy mountains of Pluto (New Horizons data), the craters of Phobos (Mars Express), and Solar Coronal Mass Ejections (STEREO satellites).',
    contextImage: '/images/View-MasterReelSm.png',
    contextCaption: 'View-Master Reel',
    images: [
      '/images/Pluto-Previs_1.jpg',
      '/images/Pluto_Previs_2.png',
      '/images/Phobos-Previs_1.jpg',
      '/images/Sun.jpg',
      '/images/Asteroids.jpeg',
      '/images/Proxima_Previs1.jpeg',
      '/images/moon.gif'
    ],
    imageTitles: [
        'Pluto',
        'Pluto (Detail)',
        'Phobos',
        'The Sun',
        'Asteroids',
        'Proxima Centauri',
        'The Moon (Stereo)'
    ],
    imageDescriptions: [
        'Stereoscopic view of Pluto\'s icy mountains derived from New Horizons data.',
        'Close-up stereoscopic detail of the texture of Pluto\'s surface.',
        '3D visualization of the Martian moon Phobos, revealing its irregular shape.',
        'Stereoscopic capture of solar surface activity and coronal ejections.',
        '3D view of an asteroid field simulation.',
        'Stereoscopic rendering of Proxima Centauri, our nearest star neighbor.',
        '3D view of the lunar landscape showing depth of craters and maria.'
    ]
  },
  // 6. Audio Counter
  {
    slug: 'audio-counter',
    title: 'Audio Counter',
    year: '2026',
    medium: 'Generative Audio',
    dimensions: 'Variable',
    weight: 'N/A',
    note: 'Stereo Speakers',
    heroImage: '/images/DeepField.png',
    quote: 'The sound of 200 billion trillion.',
    description: 'An auditory experiment attempting to quantify the observable universe. With 2 trillion galaxies each holding 100 billion stars, counting them one by one would take 6.3 quadrillion years.',
    description2: 'This piece uses generative machine sound to sonify these magnitudes, creating a chorus where each Hz frequency represents the star count of a specific galaxy.',
    images: [
      '/images/Audio_Stats.png',
      '/images/DeepField.png',
      '/images/DeepField2.png'
    ]
  },
  // 7. The Edge
  {
    slug: 'the-edge',
    title: 'The Edge',
    year: '2026',
    medium: 'Laminar Flow Fog Screen',
    dimensions: '70 x 30 inches',
    weight: '30kg',
    price: '$10,000.00',
    note: 'Requires non-windy environment',
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
    title: 'Now & Then',
    year: '2021-2026',
    medium: 'Archival Prints',
    dimensions: '20 x 30 inches each',
    weight: '1 lb',
    price: '$1,000.00 each',
    note: 'n/a',
    isSeries: true,
    heroImage: '/images/1-Whirlpool.png',
    quote: 'Folding time onto itself.',
    description: 'In the Now & Then series, I explore the profound reality that astronomy is, at its core, the study of the past. Every photon captured by my lens carries a "history of travel," revealing not where a star is today, but where it was when its light began its journey across the void. To bridge the gap between human history and cosmic time, I use AI to generate contextual scenes of the specific historical era on Earth when that light first departed.',
    description2: 'By inserting the astronomical subject into these reconstructed landscapes and applying textures like fossilized rock, flaking parchment, or ancient stone etchings, I aim to materialize the "latency" of the universe, making the deep time of the cosmos tangible through the lens of human heritage.',
    images: [
      '/images/1-Whirlpool.png',
      '/images/Andromeda.jpg',
      '/images/Eagle v2.jpg',
      '/images/Orion.jpg',
      '/images/Horsehead and flame nebulas.png',
      '/images/California nebula.jpg',
      '/images/California nebula (1).jpg'
    ],
    imageTitles: [
        'Whirlpool',
        'Andromeda',
        'Eagle',
        'Orion',
        'Horsehead',
        'California',
        'Veil Nebula'
    ],
    imageDescriptions: [
        'Fossilised into the appearance of ancient rock, this image captures the galaxy as it looked 23 million years ago when the continents were only just settling into their modern positions.',
        'Rendered as a primitive stone etching, this piece portrays our neighbor as it was 2.5 million years ago, a time when Homo habilis first began fashioning primitive tools in East Africa.',
        'Presented as a Neolithic stone carving, this work depicts the nebula as it appeared 7,000 years ago while early humans were domesticating cattle in a green Sahara and building the first proto-cities.',
        'Visualized on weathered, flaking parchment, this artwork captures the nebula as it looked 1,344 years ago during the height of the classic peak of Maya civilization.',
        'Created with the aesthetic of a Migration Period tapestry, this silhouette shows the nebula as it existed 1,375 years ago while Germanic tribes reshaped Europe and the Gupta Empire thrived in India.',
        'Styled as a medieval illuminated manuscript, this image captures the nebula as it was 1,000 years ago, a moment when the Norman Conquest reshaped England and the Golden Age of Islam flourished.',
        'This intricate manuscript-style detail focuses on active star-forming regions as they appeared during the High Middle Ages, a time of Viking voyages and burgeoning global change.'
    ]
  },
  // 9. Sculpture
  {
    slug: 'sculpture',
    title: 'Neighbors',
    year: '2026',
    medium: 'Cast Material',
    dimensions: 'Variable',
    weight: 'Variable',
    note: 'Delicate packing',
    isSeries: true,
    heroImage: '/images/Spheroids-Previs1.png', 
    quote: 'Tactile astronomy.',
    description: 'A series of cast molds created from topographic data of cosmic objects. This project translates remote sensing data into tangible objects, allowing the viewer to touch the craters of the Moon, the surface of Mars, and the event horizon of a black hole.',
    description2: 'Includes reliefs of The Moon, Mars, The Milky Way structure, and Solar Flares.',
    contextImage: '/images/Flats-Previs_1.png', 
    contextCaption: 'Milky Way and Black Hole',
    images: [
      '/images/Mars-Previs_1..png',
      '/images/MilkyWay-Previs_1.png',
      '/images/Moon-Previs_1.png',
      '/images/Sun-Previs_1.png',
      '/images/BlackHole-Previs_1.png'
    ],
    imageTitles: [
        'Mars',
        'Milky Way',
        'Moon',
        'Sun',
        'Black Hole'
    ],
    imageDescriptions: [
        'Scaled ceramic relief model of the planet Mars, based on MOLA altimetry data.',
        'Tactile representation of the Milky Way galaxy structure, emphasizing the galactic plane.',
        'Topographic relief of the lunar surface, allowing the viewer to touch the craters and maria.',
        'Sculptural interpretation of solar flares and surface activity, solidified in cast material.',
        'Physical visualization of an event horizon, giving form to the invisible pull of a black hole.'
    ]
  },
  // 10. CMB VR
  {
    slug: 'cmb-vr',
    title: 'CMB',
    year: '2026',
    medium: 'Virtual Reality',
    dimensions: '7 x 6 x 12 inches',
    weight: '1 lb',
    price: '$5,000.00',
    note: 'Requires power',
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
    title: 'Redshifter',
    year: '2026',
    medium: 'Room Installation',
    dimensions: '70 x 30 inches',
    weight: 'N/A',
    price: '$10,000.00',
    note: '1 Large (ideally 12 foot diagonal) short throw projector. Camera and LIDAR ceiling mounted',
    heroImage: '/images/Redshifter.png',
    quote: 'The color of velocity.',
    description: 'An immersive room installation that simulates the Redshift effect. As viewers move through the space, the lighting shifts spectrum, mimicking how light stretches as objects recede from us at cosmic speeds.',
    description2: 'This physical manifestation of the Doppler effect transforms the gallery into an expanding universe, where distance is measured in color.',
    images: [
      '/images/Redshifter.png',
      'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop'
    ]
  }
];
