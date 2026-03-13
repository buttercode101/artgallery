export type Artwork = {
  id: string;
  title: string;
  artist: string;
  year?: string;
  medium: string;
  size: string;
  price?: string;
  image: string;
};

export interface Artist {
  slug: string;
  name: string;
  tagline: string;
  bio: string;
  statement: string;
  background: string;
  portrait: string;
  website?: string;
  instagram?: string;
  email?: string;
  artworks?: { title: string; year?: string; medium: string; size: string; edition?: string }[];
}

export const featuredArtworks: Artwork[] = [
  {
    id: 'aw1',
    title: 'Liquescent',
    artist: 'Grietjie Lee',
    year: '2022',
    medium: 'Watercolour',
    size: '297mm × 420mm',
    price: 'POA',
    image: 'https://arkcontemporary.co.za/wp-content/uploads/2023/10/Liquescent-3.jpg'
  },
  {
    id: 'aw2',
    title: 'Clockwise Regular',
    artist: 'Louis Olivier',
    medium: 'Bronze',
    size: '57 x 15 x 15 cm',
    price: 'POA',
    image: 'https://arkcontemporary.co.za/wp-content/uploads/2023/10/louis_olivier_2017_14.jpg'
  },
  {
    id: 'aw3',
    title: 'Debate',
    artist: 'Stella Olivier',
    year: '2022',
    medium: 'Charcoal and Ink',
    size: '38cm x 27.5cm',
    price: 'POA',
    image: 'https://arkcontemporary.co.za/wp-content/uploads/2023/10/Stella-Olivier.jpg'
  },
  {
    id: 'aw4',
    title: 'Limb Limbic',
    artist: 'Elsa Maritz',
    year: 'December 2022',
    medium: 'Photograph | Performance',
    size: 'N/A',
    price: 'POA',
    image: 'https://arkcontemporary.co.za/wp-content/uploads/2024/11/Limb_limbic.jpg'
  },
  {
    id: 'aw5',
    title: 'Kankerbos',
    artist: 'Wessel van Huyssteen',
    year: '2023',
    medium: 'Watercolour on paper',
    size: '300mm x 400mm',
    price: 'POA',
    image: 'https://arkcontemporary.co.za/wp-content/uploads/2023/10/Kankerbos.-2023.-300X400.-Watercolour-on-paper.jpg'
  },
  {
    id: 'aw6',
    title: 'Bedtime Stories',
    artist: 'Michèle Nigrini',
    medium: 'Mixed media on wooden canvas',
    size: '100cm x 100cm x 5cm',
    price: 'POA',
    image: 'https://arkcontemporary.co.za/wp-content/uploads/2023/10/Bed-time-stories-100-x-100cm-x-5cm-mixed-media-on-wooden-canvas.jpg'
  }
];

export const artists: Artist[] = [
  {
    slug: 'grietjie-lee',
    name: 'Grietjie Lee',
    tagline: 'Experimental and explorative artist exploring AI, consciousness, and nature.',
    bio: 'Grietjie Lee is an experimental and explorative artist based in Rosendal, South Africa. Her artistic practice is multifaceted, encompassing various mediums and conceptual artworks. Her work centers on the future and the impact of artificial intelligence on human life, human-machine entanglements, perception and states of consciousness, and tensions between ecology, technology, science, and spirituality.',
    statement: 'Lee challenges the status quo by examining whether AI might replace true human soul observations. Her work returns to the symbolism and spiritual cues of nature and folklore, notably featuring the jackal. She believes humans can identify natural frequency and immerse themselves in ritual to adapt to changing circumstances.',
    background: 'Born 1966, Mokopane, South Africa. National Diploma in Fine Arts, TUT University of Pretoria (1987). First solo exhibition "Murg en Been" at Long Street Art Lovers Gallery (November 2015). Commissioned work for The Nelson Mandela Foundation (2002). Work acquired by Modern Art Project (MAP), Richmond, Northern Cape. Permanent collections: MTN, Sasol, Sanlam, and Petro SA.',
    portrait: 'https://arkcontemporary.co.za/wp-content/uploads/2023/10/Grietjie-Lee.jpg',
    instagram: 'www.instagram.com/grietjie_lee/',
    artworks: [
      { title: 'Liquescent', year: '2022', medium: 'Watercolour', size: '297mm × 420mm' },
      { title: 'The Window of Tolerance', medium: 'Oil', size: '310mm × 180mm' },
      { title: 'Bright Boy', year: '2022', medium: 'Watercolour', size: '200mm × 200mm' },
      { title: 'Abstract Landscape 2', year: '2020', medium: 'Watercolour and pen', size: '210mm × 297mm' },
      { title: 'Tender', year: '2022', medium: 'Mixed Media (oil and encaustic wax on board)', size: '280mm × 220mm' },
      { title: 'Nocturnal', year: '2023', medium: 'Mixed media (alpha plaster and beeswax)', size: '160mm × 120mm' }
    ]
  },
  {
    slug: 'elsa-maritz',
    name: 'Elsa Maritz',
    tagline: 'Interdisciplinary artist exploring transience, grief, and vulnerability.',
    bio: 'Elsa Maritz is an interdisciplinary artist who explores themes of transience, grief, and vulnerability. Her practice involves sensory interactions with nature and meditative experiences using multimedia, allowing her art to serve as a means of grounding, flowing, and releasing. Born in KwaZulu Natal, South Africa, she completed a five-year journey as a performing artist before enrolling at the University of Stellenbosch, where she earned a BA in Visual Arts (2011).',
    statement: 'Her studies focused on relational aesthetics, social sculptures, and performance art. She engaged with the complexities of the South African societal landscape and participated in a performance piece at the Spier Contemporary in 2010, collaborating with Phillipe Kayumba.',
    background: 'Expanded her artistic repertoire over the next decade to include photography and videography in a commercial context. Also explores digital art, mixed media, drawing, painting, and performance. Selected as a finalist in the Sasol New Signatures competition (2023). Work published in Klyntjie magazine.',
    portrait: 'https://arkcontemporary.co.za/wp-content/uploads/2024/11/Elsa-Bio-1.jpg',
    website: 'https://www.elsamaritz.com',
    artworks: [
      { title: 'Limb Limbic', year: 'December 2022', medium: 'Photograph | Performance', size: 'N/A' },
      { title: 'Roots', year: 'July 2024', medium: 'Photograph | Performance', size: 'N/A' },
      { title: 'Vive Memoir Leti', year: 'August 2023', medium: 'Photograph | Performance', size: 'N/A' },
      { title: 'Clay', year: 'January 2023', medium: 'Photograph | Performance', size: 'N/A' },
      { title: 'Tomb | Womb', year: 'December 2022 – June 2023', medium: 'Photograph | Multi Media', size: 'N/A' },
      { title: 'Circle', year: '2022', medium: 'Performance Art | Photograph', size: 'N/A' }
    ]
  },
  {
    slug: 'louis-olivier',
    name: 'Louis Olivier',
    tagline: 'Sculptor exploring the human condition, mortality, and the afterlife.',
    bio: 'Louis Olivier is a sculptor based in Johannesburg, South Africa. Born in 1976 in Vereeniging and raised in Bethal, Mpumalanga, he earned a Degree in Information Technology from the University of Pretoria (1998). In 2001, he transitioned from IT to become a full-time artist. In 2012, he moved from Pretoria to Johannesburg and established Workhorse, a bronze foundry and art studio.',
    statement: 'Olivier\'s art explores the human condition, existence, mortality, and the afterlife. He works in various media including sculpture, drawing, and installations. The human body serves as a platform for exploring the known, unknown, invisible, tangible, and the mystery of humanity — delving into the space between flesh and spirit.',
    background: 'Part of Artspace Mentorship Program (2009), mentored by artist Wilma Cruise. Corporate commissions from Sasol and Rand Merchant Bank. Notable project: Sandton Benchmark Project — two life-size bronze figures on a public bench.',
    portrait: 'https://arkcontemporary.co.za/wp-content/uploads/2023/10/louis_olivier.jpg',
    artworks: [
      { title: 'Clockwise Regular', medium: 'Bronze', size: '57 x 15 x 15 cm', edition: '6' },
      { title: 'Best fit for that meaning', medium: 'Cardboard, paper and wood', size: 'N/A' },
      { title: 'Signs versus Words', medium: 'Collage, ink and charcoal on paper', size: '400 x 620 mm' },
      { title: 'A Story with a Strange Beginning', medium: 'Bronze', size: '370 x 80 x 80 mm', edition: '8' },
      { title: 'Tipping point', medium: 'Collage, paper, ink and charcoal', size: '76.5 x 112.5 cm' },
      { title: 'Hornbill', medium: 'Collage, ink and charcoal on paper', size: '1120 x 1515 mm' }
    ]
  },
  {
    slug: 'stella-olivier',
    name: 'Stella Olivier',
    tagline: 'Photographer capturing evidence of stories as they happen in real time.',
    bio: 'As a photographer, Stella Olivier is primarily interested in capturing evidence of stories as they happen in real time, which seconds later become historic. These stories can be narratives of little interest to the world, related to specific individuals in their quest for meaning, or stories carrying deeper significance about individuals influential in changing the direction of mankind.',
    statement: 'In her drawings, she explores themes similar to her photography, using her own photographs combined with vintage black and white photographs to create evidence of stories that never existed, often on silent landscapes that have witnessed multiple moments in history. Her collections present narratives that speak of her personal subliminal journey.',
    background: 'Stella works across photography and drawing, capturing both visible and invisible layers within every story.',
    portrait: 'https://arkcontemporary.co.za/wp-content/uploads/2023/10/Stella-Olivier.jpg',
    artworks: [
      { title: 'Debate', year: '2022', medium: 'Charcoal and Ink', size: '38cm x 27.5cm' },
      { title: 'Guidance', year: '2022', medium: 'Charcoal and Ink', size: '38cm x 27.5cm' },
      { title: 'Split', year: '2022', medium: 'Charcoal and Ink', size: '55cm x 75cm' },
      { title: 'Reach', year: '2022', medium: 'Charcoal and Ink', size: '75cm x 55cm' },
      { title: 'Free', year: '2021', medium: 'Charcoal and Ink', size: '38cm x 275cm' },
      { title: 'Entrada', year: '2021', medium: 'Charcoal and Ink', size: '45.5cm x 37cm' }
    ]
  },
  {
    slug: 'wessel-van-huyssteen',
    name: 'Wessel van Huyssteen',
    tagline: 'Artist, educator, curator exploring landscape and place through multiple media.',
    bio: 'Wessel van Huyssteen has been active as an artist, community arts educator, lecturer, curator, and film maker since 1986 when he graduated in Fine Arts from the UFS (University of the Free State). He completed his Masters of Art in Fine Arts at Wits University in 2017 (passed with distinction). His interest lies in landscape and its historical representation, exploring concepts of place and non-place through a variety of media.',
    statement: 'His work explores relationships, paradoxes, and possibilities between body and ground, culture and nature, extraction and conservation, space versus earth — all set in an age overshadowed by the climate crisis and species extinction.',
    background: 'Nominated and won several local and international documentary film awards. Attended several local and international residencies. Held three solo exhibitions. Selected to exhibit in the South African exhibition "NinetyOne Consignment" in London, curated by Artiq (2022-2024). Work in South African National Art Bank, Glo\'Art International (Maastricht), and Philippe and Kunga de Chandelar Petro Collection (Hungary) collections. Lives off the grid in Rosendal, Eastern Free State.',
    portrait: 'https://arkcontemporary.co.za/wp-content/uploads/2023/10/Wessel.jpeg',
    website: 'www.wesselvanhuyssteen.com',
    artworks: [
      { title: 'Kankerbos', year: '2023', medium: 'Watercolour on paper', size: '300mm x 400mm' },
      { title: 'Shortcut', year: '2023', medium: 'Embroidered Rayon and Viscose', size: '985mm x 1445mm' },
      { title: 'The hand that guides the needle', year: '2023', medium: 'Hand and machine stitched Rayon, Cotton and Viscose', size: '1200mm x 1730mm' },
      { title: 'Red Hot pokers I', year: '2023', medium: 'Watercolour on paper', size: '240mm x 320mm' },
      { title: 'Scape sans sky', year: '2023', medium: 'Rayon, Viscose, Nylon, Cotton', size: '1725mm x 1105mm' },
      { title: 'Crinum bulbispermum II', year: '2022', medium: 'Watercolour on cotton paper', size: '280mm x 380mm' }
    ]
  },
  {
    slug: 'michele-nigrini',
    name: 'Michèle Nigrini',
    tagline: 'Artist translating the essential character of things, suggesting new ways of interpreting the everyday.',
    bio: 'Michèle Nigrini attracted nationwide interest in 1994 when the Rupert Art Foundation bought all available work from her first Solo Exhibition, including her Master\'s degree installation \'Kleursimfonie\' — an extraordinary piece consisting of 300 A4-sized paintings. The installation is currently in the permanent collection of the Rupert Museum in Stellenbosch. She holds BA (Fine Arts), BA Hons (History of Art), and MA (Fine Arts) from the University of Pretoria.',
    statement: 'Michèle believes that art is a medium for the elevation of the spirit yet remains rooted in the experience of everyday life. Her aim is not to copy nature, but to translate the essential character of things, suggesting a new way of interpreting the everyday. Her approach is based on visual sensations, and mark-making is the most fundamental element in her art.',
    background: '22 solo exhibitions, more than 200 group exhibitions and Art Festivals. International projects include Ukkasie 2000, Florence Biennial (Italy 2005), Chianciano Biennial (Italy 2009), London Biennial 2013, Residency at Cite des Arts 2017. Since 2004, living and working in Rosendal, Eastern Free State.',
    portrait: 'https://arkcontemporary.co.za/wp-content/uploads/2023/10/Michele-1.jpg',
    website: 'www.michelenigrini.co.za',
    email: 'michelenigrini@gmail.com',
    artworks: [
      { title: 'Bedtime Stories', medium: 'Mixed media on wooden canvas', size: '100cm x 100cm x 5cm' },
      { title: 'Peppery Nose', medium: 'Mixed media on Hahnemuhle paper (Framed)', size: '60cm x 60cm' },
      { title: 'Fight for your Fairytale', medium: 'Mixed media on wooden canvas', size: '60cm x 60cm x 4cm' },
      { title: 'Chain Reaction', medium: 'Mixed media on wooden canvas', size: '80cm x 80cm x 4cm' },
      { title: 'Scherzi Series III', medium: 'Mixed media on wooden canvas', size: '120cm x 120cm x 5cm' },
      { title: 'A Handful of kisses from the sky', medium: 'Mixed media on wooden canvas', size: '100cm x 80cm' }
    ]
  }
];

export const galleryInfo = {
  name: 'ark. contemporary',
  tagline: 'art, rosendal, kuns',
  about: 'Established in 2021, ark.contemporary showcases the collective endeavours of a group of accomplished Rosendal-based artists. Hailing from diverse artistic backgrounds, these individuals converge at ark.contemporary to foster collaboration and showcase their unique visual perspectives. The gallery provides a dedicated exhibition space separate from their personal studios, offering visitors an opportunity to engage with their work and immerse themselves in creative expression.',
  address: '342 Kriek Street (Corner van der Merwe Street), Rosendal',
  phone: '079 587 6282',
  email: 'arkcontemporary@gmail.com',
  galleryManager: 'Heather Grundy',
  hours: [
    { day: 'Thursday', hours: '10:00 – 16:00' },
    { day: 'Friday', hours: '10:00 – 17:00' },
    { day: 'Saturday', hours: '09:00 – 17:00' },
    { day: 'Sunday', hours: '09:00 – 14:00' },
    { day: 'Monday', hours: 'By appointment only' }
  ],
  footer: 'Copyright © 2026 ark. contemporary. Site design: Hothouse.'
};

export const exhibitions = {
  current: {
    title: 'Summer 2026 Exhibition',
    dates: 'Summer 2026',
    artist: 'Group Exhibition',
    description: 'A curated selection of contemporary South African artists working across painting, drawing, printmaking, sculpture, photography, and mixed media. Reflects ongoing explorations of landscape and place, memory and perception, ecology, and material process.',
    hero: 'https://arkcontemporary.co.za/wp-content/uploads/2026/01/Ark-Summer-2026-5.jpg'
  },
  upcoming: [
    {
      title: 'Spring Exhibition 2026',
      dates: 'Spring 2026',
      description: 'Upcoming spring exhibition featuring new works from gallery artists.',
      image: 'https://arkcontemporary.co.za/wp-content/uploads/2025/04/Ark_Elsabe-Anel-1.jpg'
    }
  ],
  past: [
    {
      title: 'Spring 2025 Exhibition',
      year: '2025',
      description: 'A vibrant exhibition uniting sculpture, photography, tapestry, painting, and mixed media. Featured artists: Io Makandal, Brett Rubin, Elsa Maritz, Sarel Petrus, Louis Olivier, Grietjie Lee, Stella Olivier, and more.',
      image: 'https://arkcontemporary.co.za/wp-content/uploads/2025/04/The-Rosendal-March-2025-19.jpg'
    },
    {
      title: 'Fertile Ground',
      year: '2025',
      description: '26 July – 28 August 2025. Celebrating four years of ark. contemporary, bringing together artists working across themes of landscape, ecology, memory, and place. Curated by Wessel van Huyssteen in collaboration with Gallery 2.',
      image: 'https://arkcontemporary.co.za/wp-content/uploads/2025/04/The-Rosendal-March-2025-22.jpg'
    },
    {
      title: 'Autumn Exhibition',
      year: '2025',
      description: 'April – June 2025. Showcasing fresh new works from gallery artists, complemented by striking pieces from associate artists making their ark. contemporary debut.',
      image: 'https://arkcontemporary.co.za/wp-content/uploads/2025/04/The-Rosendal-March-2025-24.jpg'
    },
    {
      title: 'Summer Exhibition',
      year: '2025',
      description: 'January – April 2025. Celebrating the latest work from gallery artists, alongside standout pieces from associate artists making their ark. contemporary debut.',
      image: 'https://arkcontemporary.co.za/wp-content/uploads/2025/04/The-Rosendal-March-2025-29.jpg'
    },
    {
      title: 'Gallery Raffle',
      year: '2024',
      description: 'December 2024. A celebratory event featuring great conversation, fine wine, and the thrill of winning one of eight standout artworks.',
      image: 'https://arkcontemporary.co.za/wp-content/uploads/2025/04/ark-Raffle-2024-27.jpg'
    },
    {
      title: 'Equilibrium',
      year: '2022',
      description: 'April – May 2022. The first Free State Art Collective (FSAC) art exhibition following the Covid lockdown, featuring 36 artists. Curated by Karen Brusch.',
      image: 'https://arkcontemporary.co.za/wp-content/uploads/2023/10/arkexteriorBW.jpg'
    }
  ]
};
