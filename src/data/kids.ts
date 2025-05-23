import { assets } from "../assets/assets";
import { KidsData } from "../types/kids";

export const KIDS_DATA: KidsData = {
  whatisNew: [
    {
      id: "new001",
      title: "Paw Patrol: Mighty Mission",
      description:
        "Join Ryder and his team of pups on their newest adventure to save Adventure Bay from a mysterious weather machine!",
      posterUrl: assets.kindImage1,
      type: "movie",
      rating: 4.8,
      duration: "1h 32m",
      ageRating: "G",
      isFree: false,
    },
    {
      id: "new002",
      title: "The Magic School Bus: Space Explorers",
      description:
        "Ms. Frizzle and her class embark on an extraordinary journey through the solar system in this new animated series.",
      posterUrl: assets.kindImage2,
      type: "series",
      rating: 4.9,
      episodeCount: 24,
      currentSeason: 1,
      currentEpisode: 1,
      ageRating: "TV-Y",
      isFree: true,
    },
    {
      id: "new003",
      title: "Dinosaur Dance Party",
      description:
        "Join Rex and friends in this musical adventure where prehistoric pals learn about rhythm and friendship.",
      posterUrl: assets.kindImage3,
      type: "movie",
      rating: 4.6,
      duration: "45m",
      ageRating: "TV-Y",
      isFree: true,
    },
    {
      id: "new004",
      title: "Super Science Squad",
      description:
        "A team of young scientists solve everyday problems with the power of science!",
      posterUrl: assets.kindImage4,
      type: "series",
      rating: 4.7,
      episodeCount: 18,
      currentSeason: 1,
      currentEpisode: 1,
      ageRating: "TV-Y7",
      isFree: false,
    },
    {
      id: "new005",
      title: "Cosmic Kids Yoga Adventure",
      description:
        "Interactive yoga stories that get kids moving and having fun while learning mindfulness.",
      posterUrl: assets.kindImage5,
      type: "series",
      rating: 4.8,
      episodeCount: 30,
      currentSeason: 2,
      currentEpisode: 1,
      ageRating: "TV-Y",
      isFree: true,
    },
    {
      id: "new006",
      title: "Robot Friends",
      description:
        "Learn coding concepts with friendly robots in this educational series.",
      posterUrl: assets.kindImage6,
      type: "series",
      rating: 4.5,
      episodeCount: 26,
      currentSeason: 1,
      currentEpisode: 1,
      ageRating: "TV-Y7",
      isFree: false,
    },
    {
      id: "new007",
      title: "Ocean Explorers",
      description:
        "Dive deep into the ocean with marine biologists and discover amazing sea creatures.",
      posterUrl: assets.kindImage7,
      type: "movie",
      rating: 4.9,
      duration: "1h 15m",
      ageRating: "TV-Y",
      isFree: true,
    },
    {
      id: "new008",
      title: "Art Attack 2025",
      description:
        "Create amazing artworks with everyday materials in this creative series.",
      posterUrl: assets.kindImage8,
      type: "series",
      rating: 4.7,
      episodeCount: 20,
      currentSeason: 1,
      currentEpisode: 1,
      ageRating: "TV-Y",
      isFree: false,
    },
    {
      id: "new009",
      title: "World Kitchen Kids",
      description:
        "Young chefs learn about different cultures through cooking adventures.",
      posterUrl: assets.kindImage9,
      type: "series",
      rating: 4.6,
      episodeCount: 15,
      currentSeason: 1,
      currentEpisode: 1,
      ageRating: "TV-Y",
      isFree: true,
    },
    {
      id: "new010",
      title: "Space Pets",
      description:
        "Follow the adventures of the first animal astronauts in this exciting new movie.",
      posterUrl: assets.kindImage10,
      type: "movie",
      rating: 4.8,
      duration: "1h 28m",
      ageRating: "G",
      isFree: false,
    },
    {
      id: "new011",
      title: "Musical Mathematics",
      description:
        "Learning math becomes fun with catchy songs and musical problems to solve.",
      posterUrl: assets.kindImage11,
      type: "series",
      rating: 4.5,
      episodeCount: 22,
      currentSeason: 1,
      currentEpisode: 1,
      ageRating: "TV-Y",
      isFree: true,
    },
    {
      id: "new012",
      title: "Nature Detectives",
      description:
        "Young explorers investigate mysteries in nature and learn about wildlife.",
      posterUrl: assets.kindImage12,
      type: "series",
      rating: 4.7,
      episodeCount: 16,
      currentSeason: 1,
      currentEpisode: 1,
      ageRating: "TV-Y7",
      isFree: false,
    },
  ],
  categories: {
    watchForFree: [
      {
        id: "free001",
        title: "Learning Letters",
        description:
          "Fun alphabet adventures with animated characters making learning exciting!",
        posterUrl: assets.kindImage1,
        type: "series",
        rating: 4.7,
        episodeCount: 26,
        currentSeason: 1,
        currentEpisode: 1,
        ageRating: "TV-Y",
        isFree: true,
      },
    ],
    NightStories: [
      {
        id: "night001",
        title: "Bedtime Tales",
        description: "Soothing stories perfect for winding down before sleep.",
        posterUrl: assets.kindImage13,
        type: "series",
        rating: 4.9,
        episodeCount: 30,
        currentSeason: 2,
        currentEpisode: 15,
        ageRating: "TV-Y",
        isFree: true,
      },
      {
        id: "night002",
        title: "Dream Adventures",
        description: "Magical bedtime stories that inspire wonderful dreams.",
        posterUrl: assets.kindImage1,
        type: "series",
        rating: 4.8,
        episodeCount: 25,
        currentSeason: 1,
        currentEpisode: 12,
        ageRating: "TV-Y",
        isFree: false,
      },
      {
        id: "night003",
        title: "Sleepy Time Stories",
        description:
          "Gentle tales featuring sleepy animals getting ready for bed.",
        posterUrl: assets.kindImage2,
        type: "series",
        rating: 4.7,
        episodeCount: 20,
        currentSeason: 1,
        currentEpisode: 10,
        ageRating: "TV-Y",
        isFree: true,
      },
      {
        id: "night004",
        title: "Lullaby Lane",
        description:
          "A collection of peaceful stories accompanied by soft lullabies.",
        posterUrl: assets.kindImage3,
        type: "series",
        rating: 4.6,
        episodeCount: 28,
        currentSeason: 2,
        currentEpisode: 14,
        ageRating: "TV-Y",
        isFree: false,
      },
      {
        id: "night005",
        title: "Starlight Stories",
        description:
          "Stories about the night sky, stars, and peaceful nighttime adventures.",
        posterUrl: assets.kindImage4,
        type: "series",
        rating: 4.9,
        episodeCount: 22,
        currentSeason: 1,
        currentEpisode: 11,
        ageRating: "TV-Y",
        isFree: true,
      },
      {
        id: "night006",
        title: "Quiet Time Tales",
        description: "Calming stories perfect for quiet time before bed.",
        posterUrl: assets.kindImage5,
        type: "movie",
        rating: 4.7,
        duration: "45m",
        ageRating: "TV-Y",
        isFree: true,
      },
      {
        id: "night007",
        title: "Moon and Stars",
        description: "Enchanting bedtime stories about nighttime wonders.",
        posterUrl: assets.kindImage6,
        type: "series",
        rating: 4.8,
        episodeCount: 24,
        currentSeason: 1,
        currentEpisode: 12,
        ageRating: "TV-Y",
        isFree: false,
      },
      {
        id: "night008",
        title: "Sweet Dreams",
        description:
          "Magical stories that help children transition to bedtime.",
        posterUrl: assets.kindImage7,
        type: "series",
        rating: 4.5,
        episodeCount: 26,
        currentSeason: 2,
        currentEpisode: 13,
        ageRating: "TV-Y",
        isFree: true,
      },
      {
        id: "night009",
        title: "Bedtime Safari",
        description:
          "Peaceful stories about animals settling down for the night.",
        posterUrl: assets.kindImage8,
        type: "series",
        rating: 4.6,
        episodeCount: 20,
        currentSeason: 1,
        currentEpisode: 10,
        ageRating: "TV-Y",
        isFree: true,
      },
      {
        id: "night010",
        title: "Cozy Corner",
        description: "Warm and comforting stories for bedtime relaxation.",
        posterUrl: assets.kindImage9,
        type: "movie",
        rating: 4.7,
        duration: "40m",
        ageRating: "TV-Y",
        isFree: false,
      },
      {
        id: "night011",
        title: "Dreamy Tales",
        description: "Stories that inspire peaceful dreams and restful sleep.",
        posterUrl: assets.kindImage10,
        type: "series",
        rating: 4.8,
        episodeCount: 18,
        currentSeason: 1,
        currentEpisode: 9,
        ageRating: "TV-Y",
        isFree: true,
      },
      {
        id: "night012",
        title: "Goodnight Stories",
        description: "Classic bedtime stories reimagined for modern children.",
        posterUrl: assets.kindImage11,
        type: "series",
        rating: 4.9,
        episodeCount: 25,
        currentSeason: 2,
        currentEpisode: 12,
        ageRating: "TV-Y",
        isFree: true,
      },
    ],
    ListenWithMe: [
      {
        id: "listen001",
        title: "Sound Safari",
        description:
          "Explore animal sounds and learn about different habitats through audio adventures.",
        posterUrl: assets.kindImage12,
        type: "series",
        rating: 4.7,
        episodeCount: 24,
        currentSeason: 1,
        currentEpisode: 12,
        ageRating: "TV-Y",
        isFree: true,
      },
      {
        id: "listen002",
        title: "Melody Makers",
        description:
          "Interactive musical lessons teaching children about different instruments and music styles.",
        posterUrl: assets.kindImage13,
        type: "series",
        rating: 4.9,
        episodeCount: 30,
        currentSeason: 2,
        currentEpisode: 15,
        ageRating: "TV-Y",
        isFree: false,
      },
      {
        id: "listen003",
        title: "Story Time Symphonies",
        description:
          "Classic children's stories paired with beautiful orchestral music.",
        posterUrl: assets.kindImage1,
        type: "series",
        rating: 4.8,
        episodeCount: 20,
        currentSeason: 1,
        currentEpisode: 10,
        ageRating: "TV-Y",
        isFree: true,
      },
      {
        id: "listen004",
        title: "Rhythm Rangers",
        description:
          "Learn about rhythm, beat, and musical patterns through fun adventures.",
        posterUrl: assets.kindImage2,
        type: "series",
        rating: 4.6,
        episodeCount: 22,
        currentSeason: 1,
        currentEpisode: 11,
        ageRating: "TV-Y",
        isFree: false,
      },
      {
        id: "listen005",
        title: "Singing Science",
        description:
          "Learn scientific concepts through catchy, educational songs.",
        posterUrl: assets.kindImage3,
        type: "series",
        rating: 4.7,
        episodeCount: 26,
        currentSeason: 2,
        currentEpisode: 13,
        ageRating: "TV-Y7",
        isFree: true,
      },
      {
        id: "listen006",
        title: "World Music Adventure",
        description:
          "Journey around the globe exploring different musical traditions and cultures.",
        posterUrl: assets.kindImage4,
        type: "movie",
        rating: 4.8,
        duration: "55m",
        ageRating: "TV-Y",
        isFree: true,
      },
      {
        id: "listen007",
        title: "Language Beats",
        description:
          "Learn basic vocabulary in different languages through catchy songs.",
        posterUrl: assets.kindImage5,
        type: "series",
        rating: 4.9,
        episodeCount: 28,
        currentSeason: 2,
        currentEpisode: 14,
        ageRating: "TV-Y",
        isFree: false,
      },
      {
        id: "listen008",
        title: "Nature's Symphony",
        description:
          "Relaxing audio journeys through forests, oceans, and other natural environments.",
        posterUrl: assets.kindImage6,
        type: "series",
        rating: 4.7,
        episodeCount: 20,
        currentSeason: 1,
        currentEpisode: 10,
        ageRating: "TV-Y",
        isFree: true,
      },
      {
        id: "listen009",
        title: "Musical Mathematics",
        description:
          "Learn math concepts through engaging songs and musical patterns.",
        posterUrl: assets.kindImage7,
        type: "series",
        rating: 4.6,
        episodeCount: 24,
        currentSeason: 1,
        currentEpisode: 12,
        ageRating: "TV-Y7",
        isFree: false,
      },
      {
        id: "listen010",
        title: "Lullaby Collection",
        description:
          "Soothing lullabies from around the world to help children relax and sleep.",
        posterUrl: assets.kindImage8,
        type: "movie",
        rating: 4.8,
        duration: "45m",
        ageRating: "TV-Y",
        isFree: true,
      },
      {
        id: "listen011",
        title: "Sound Detectives",
        description:
          "Solve mysteries by identifying different sounds and their sources.",
        posterUrl: assets.kindImage9,
        type: "series",
        rating: 4.7,
        episodeCount: 22,
        currentSeason: 1,
        currentEpisode: 11,
        ageRating: "TV-Y7",
        isFree: true,
      },
      {
        id: "listen012",
        title: "Poetry Playtime",
        description:
          "Classic and modern children's poems brought to life through narration and music.",
        posterUrl: assets.kindImage10,
        type: "series",
        rating: 4.6,
        episodeCount: 26,
        currentSeason: 2,
        currentEpisode: 13,
        ageRating: "TV-Y",
        isFree: false,
      },
    ],
    ChildrensMusical: [
      {
        id: "musical001",
        title: "Sing & Dance Academy",
        description:
          "Interactive musical show where kids can learn dance moves and sing along to catchy tunes.",
        posterUrl: assets.kindImage11,
        type: "series",
        rating: 4.8,
        episodeCount: 30,
        currentSeason: 2,
        currentEpisode: 15,
        ageRating: "TV-Y",
        isFree: true,
      },
      {
        id: "musical002",
        title: "Little Broadway",
        description:
          "Child-friendly versions of famous Broadway musicals adapted for young audiences.",
        posterUrl: assets.kindImage12,
        type: "series",
        rating: 4.9,
        episodeCount: 25,
        currentSeason: 1,
        currentEpisode: 12,
        ageRating: "TV-Y7",
        isFree: false,
      },
      {
        id: "musical003",
        title: "Instrument Adventures",
        description:
          "Learn about different musical instruments through exciting stories and songs.",
        posterUrl: assets.kindImage13,
        type: "series",
        rating: 4.7,
        episodeCount: 26,
        currentSeason: 2,
        currentEpisode: 13,
        ageRating: "TV-Y",
        isFree: true,
      },
      {
        id: "musical004",
        title: "Rhythm & Rhyme",
        description:
          "Fun musical adventures focusing on developing rhythm skills and language through songs.",
        posterUrl: assets.kindImage1,
        type: "series",
        rating: 4.6,
        episodeCount: 22,
        currentSeason: 1,
        currentEpisode: 11,
        ageRating: "TV-Y",
        isFree: false,
      },
      {
        id: "musical005",
        title: "Musical Magic Kingdom",
        description:
          "A magical world where everything happens with song and dance.",
        posterUrl: assets.kindImage2,
        type: "movie",
        rating: 4.8,
        duration: "1h 25m",
        ageRating: "G",
        isFree: true,
      },
      {
        id: "musical006",
        title: "Song Factory",
        description:
          "See how songs are made from inspiration to final performance.",
        posterUrl: assets.kindImage3,
        type: "series",
        rating: 4.7,
        episodeCount: 20,
        currentSeason: 1,
        currentEpisode: 10,
        ageRating: "TV-Y7",
        isFree: false,
      },
      {
        id: "musical007",
        title: "Animal Chorus",
        description:
          "Singing animals teach musical concepts through forest adventures.",
        posterUrl: assets.kindImage4,
        type: "series",
        rating: 4.9,
        episodeCount: 24,
        currentSeason: 1,
        currentEpisode: 12,
        ageRating: "TV-Y",
        isFree: true,
      },
      {
        id: "musical008",
        title: "Dance Along",
        description:
          "Interactive dance show teaching different styles through simple choreography.",
        posterUrl: assets.kindImage5,
        type: "series",
        rating: 4.8,
        episodeCount: 28,
        currentSeason: 2,
        currentEpisode: 14,
        ageRating: "TV-Y",
        isFree: true,
      },
      {
        id: "musical009",
        title: "Musical Adventures in History",
        description:
          "Learning about historical events through engaging musical numbers.",
        posterUrl: assets.kindImage6,
        type: "series",
        rating: 4.6,
        episodeCount: 26,
        currentSeason: 1,
        currentEpisode: 13,
        ageRating: "TV-Y7",
        isFree: false,
      },
      {
        id: "musical010",
        title: "Little Orchestra",
        description:
          "Children learn about symphony orchestras and classical music in a fun way.",
        posterUrl: assets.kindImage7,
        type: "movie",
        rating: 4.7,
        duration: "50m",
        ageRating: "TV-Y",
        isFree: true,
      },
      {
        id: "musical011",
        title: "Sing-Along Stories",
        description:
          "Classic children's stories retold as interactive musicals.",
        posterUrl: assets.kindImage8,
        type: "series",
        rating: 4.8,
        episodeCount: 22,
        currentSeason: 1,
        currentEpisode: 11,
        ageRating: "TV-Y",
        isFree: false,
      },
      {
        id: "musical012",
        title: "Beat Explorers",
        description:
          "Learn about rhythm, tempo, and musical expression through colorful adventures.",
        posterUrl: assets.kindImage9,
        type: "series",
        rating: 4.7,
        episodeCount: 20,
        currentSeason: 1,
        currentEpisode: 10,
        ageRating: "TV-Y",
        isFree: true,
      },
    ],
    SpecialForTheDeaf: [
      {
        id: "deaf001",
        title: "Sign Language Stories",
        description:
          "Beautiful stories told through sign language with optional voiced narration.",
        posterUrl: assets.kindImage10,
        type: "series",
        rating: 4.9,
        episodeCount: 30,
        currentSeason: 2,
        currentEpisode: 15,
        ageRating: "TV-Y",
        isFree: true,
      },
      {
        id: "deaf002",
        title: "Visual Adventures",
        description:
          "Action-packed adventures with strong visual storytelling and clear subtitles.",
        posterUrl: assets.kindImage11,
        type: "series",
        rating: 4.8,
        episodeCount: 25,
        currentSeason: 1,
        currentEpisode: 12,
        ageRating: "TV-Y7",
        isFree: true,
      },
      {
        id: "deaf003",
        title: "Sign & Sing",
        description:
          "Musical program teaching basic sign language through catchy songs.",
        posterUrl: assets.kindImage12,
        type: "series",
        rating: 4.7,
        episodeCount: 24,
        currentSeason: 1,
        currentEpisode: 12,
        ageRating: "TV-Y",
        isFree: false,
      },
      {
        id: "deaf004",
        title: "Silent Explorers",
        description:
          "Adventures focusing on visual storytelling with detailed animation and sign language.",
        posterUrl: assets.kindImage13,
        type: "series",
        rating: 4.8,
        episodeCount: 26,
        currentSeason: 2,
        currentEpisode: 13,
        ageRating: "TV-Y7",
        isFree: true,
      },
      {
        id: "deaf005",
        title: "Hands That Speak",
        description:
          "Educational series teaching sign language vocabulary through fun stories.",
        posterUrl: assets.kindImage1,
        type: "series",
        rating: 4.9,
        episodeCount: 28,
        currentSeason: 2,
        currentEpisode: 14,
        ageRating: "TV-Y",
        isFree: true,
      },
      {
        id: "deaf006",
        title: "Visual Science",
        description:
          "Science concepts explained through vivid visuals and sign language.",
        posterUrl: assets.kindImage2,
        type: "series",
        rating: 4.7,
        episodeCount: 22,
        currentSeason: 1,
        currentEpisode: 11,
        ageRating: "TV-Y7",
        isFree: false,
      },
      {
        id: "deaf007",
        title: "Sign Me a Story",
        description:
          "Classic fairy tales retold with sign language and expressive animation.",
        posterUrl: assets.kindImage3,
        type: "movie",
        rating: 4.8,
        duration: "1h 10m",
        ageRating: "TV-Y",
        isFree: true,
      },
      {
        id: "deaf008",
        title: "Expressive Arts",
        description:
          "Art and creativity program designed with visual instructions and sign language.",
        posterUrl: assets.kindImage4,
        type: "series",
        rating: 4.6,
        episodeCount: 20,
        currentSeason: 1,
        currentEpisode: 10,
        ageRating: "TV-Y",
        isFree: false,
      },
      {
        id: "deaf009",
        title: "Visual Math",
        description:
          "Mathematics concepts taught through strong visual representation and sign language.",
        posterUrl: assets.kindImage5,
        type: "series",
        rating: 4.7,
        episodeCount: 24,
        currentSeason: 1,
        currentEpisode: 12,
        ageRating: "TV-Y7",
        isFree: true,
      },
      {
        id: "deaf010",
        title: "Signing Friends",
        description:
          "A group of friends communicate through sign language while having everyday adventures.",
        posterUrl: assets.kindImage6,
        type: "series",
        rating: 4.9,
        episodeCount: 30,
        currentSeason: 2,
        currentEpisode: 15,
        ageRating: "TV-Y",
        isFree: true,
      },
      {
        id: "deaf011",
        title: "Nature in Silence",
        description:
          "Explore nature's wonders through beautiful visuals without relying on sound.",
        posterUrl: assets.kindImage7,
        type: "movie",
        rating: 4.8,
        duration: "55m",
        ageRating: "TV-Y",
        isFree: false,
      },
      {
        id: "deaf012",
        title: "Visual Storytellers",
        description:
          "Learn to tell stories through visual art, body language, and sign language.",
        posterUrl: assets.kindImage8,
        type: "series",
        rating: 4.7,
        episodeCount: 22,
        currentSeason: 1,
        currentEpisode: 11,
        ageRating: "TV-Y7",
        isFree: true,
      },
    ],
    LookAndLaugh: [
      {
        id: "laugh001",
        title: "Silly Science",
        description:
          "Learn about science through wacky experiments and hilarious mishaps.",
        posterUrl: assets.kindImage9,
        type: "series",
        rating: 4.7,
        episodeCount: 26,
        currentSeason: 2,
        currentEpisode: 13,
        ageRating: "TV-Y7",
        isFree: true,
      },
      {
        id: "laugh002",
        title: "Animal Antics",
        description:
          "Funny animal characters get into mischief while teaching valuable lessons.",
        posterUrl: assets.kindImage10,
        type: "series",
        rating: 4.8,
        episodeCount: 30,
        currentSeason: 2,
        currentEpisode: 15,
        ageRating: "TV-Y",
        isFree: false,
      },
      {
        id: "laugh003",
        title: "Giggle Gang",
        description:
          "A group of friends use comedy and laughter to solve everyday problems.",
        posterUrl: assets.kindImage11,
        type: "series",
        rating: 4.6,
        episodeCount: 24,
        currentSeason: 1,
        currentEpisode: 12,
        ageRating: "TV-Y",
        isFree: true,
      },
      {
        id: "laugh004",
        title: "Funny Phonics",
        description:
          "Learn language and phonics through hilarious sketches and situations.",
        posterUrl: assets.kindImage12,
        type: "series",
        rating: 4.9,
        episodeCount: 28,
        currentSeason: 2,
        currentEpisode: 14,
        ageRating: "TV-Y",
        isFree: false,
      },
      {
        id: "laugh005",
        title: "Comedy Classroom",
        description:
          "School subjects become entertaining through comedy sketches and jokes.",
        posterUrl: assets.kindImage13,
        type: "series",
        rating: 4.7,
        episodeCount: 22,
        currentSeason: 1,
        currentEpisode: 11,
        ageRating: "TV-Y7",
        isFree: true,
      },
      {
        id: "laugh006",
        title: "Prank Masters",
        description:
          "Kid-friendly pranks and jokes that the whole family can enjoy.",
        posterUrl: assets.kindImage1,
        type: "movie",
        rating: 4.5,
        duration: "1h 15m",
        ageRating: "TV-Y7",
        isFree: true,
      },
      {
        id: "laugh007",
        title: "Wacky Weather",
        description:
          "Learn about weather patterns through comedy and silly animations.",
        posterUrl: assets.kindImage2,
        type: "series",
        rating: 4.6,
        episodeCount: 20,
        currentSeason: 1,
        currentEpisode: 10,
        ageRating: "TV-Y",
        isFree: false,
      },
      {
        id: "laugh008",
        title: "Joke Factory",
        description:
          "Kid-friendly jokes and comedy skits that educate while entertaining.",
        posterUrl: assets.kindImage3,
        type: "series",
        rating: 4.8,
        episodeCount: 25,
        currentSeason: 2,
        currentEpisode: 12,
        ageRating: "TV-Y",
        isFree: true,
      },
      {
        id: "laugh009",
        title: "Funny Fables",
        description: "Classic moral stories retold with a humorous twist.",
        posterUrl: assets.kindImage4,
        type: "series",
        rating: 4.7,
        episodeCount: 24,
        currentSeason: 1,
        currentEpisode: 12,
        ageRating: "TV-Y",
        isFree: true,
      },
      {
        id: "laugh010",
        title: "Laugh & Learn",
        description:
          "Educational concepts taught through comedy sketches and funny scenarios.",
        posterUrl: assets.kindImage5,
        type: "movie",
        rating: 4.9,
        duration: "1h 05m",
        ageRating: "TV-Y7",
        isFree: false,
      },
      {
        id: "laugh011",
        title: "Silly Songs",
        description:
          "Collection of humorous songs that teach vocabulary and concepts.",
        posterUrl: assets.kindImage6,
        type: "series",
        rating: 4.8,
        episodeCount: 22,
        currentSeason: 1,
        currentEpisode: 11,
        ageRating: "TV-Y",
        isFree: true,
      },
      {
        id: "laugh012",
        title: "Comedy Critters",
        description:
          "Talking animals tell jokes and get into funny situations while teaching lessons.",
        posterUrl: assets.kindImage7,
        type: "series",
        rating: 4.6,
        episodeCount: 26,
        currentSeason: 2,
        currentEpisode: 13,
        ageRating: "TV-Y",
        isFree: true,
      },
    ],
    Adventure: [
      {
        id: "adv001",
        title: "Explorer Kids",
        description:
          "A team of young explorers discover amazing natural wonders around the world.",
        posterUrl: assets.kindImage8,
        type: "series",
        rating: 4.8,
        episodeCount: 32,
        currentSeason: 2,
        currentEpisode: 16,
        ageRating: "TV-Y7",
        isFree: true,
      },
      {
        id: "adv002",
        title: "Space Rangers",
        description:
          "Young astronauts explore the solar system and learn about planets and stars.",
        posterUrl: assets.kindImage9,
        type: "series",
        rating: 4.9,
        episodeCount: 28,
        currentSeason: 2,
        currentEpisode: 14,
        ageRating: "TV-Y7",
        isFree: false,
      },
      {
        id: "adv003",
        title: "Jungle Journey",
        description:
          "Follow a team of wildlife researchers as they explore rainforests around the world.",
        posterUrl: assets.kindImage10,
        type: "series",
        rating: 4.7,
        episodeCount: 24,
        currentSeason: 1,
        currentEpisode: 12,
        ageRating: "TV-Y7",
        isFree: true,
      },
      {
        id: "adv004",
        title: "Ocean Odyssey",
        description:
          "Dive into the depths of the ocean and discover amazing underwater creatures.",
        posterUrl: assets.kindImage11,
        type: "movie",
        rating: 4.8,
        duration: "1h 30m",
        ageRating: "TV-Y7",
        isFree: true,
      },
      {
        id: "adv005",
        title: "Mountain Mysteries",
        description:
          "Explore the world's most impressive mountain ranges and the secrets they hold.",
        posterUrl: assets.kindImage12,
        type: "series",
        rating: 4.6,
        episodeCount: 26,
        currentSeason: 1,
        currentEpisode: 13,
        ageRating: "TV-Y7",
        isFree: false,
      },
      {
        id: "adv006",
        title: "Time Travelers",
        description:
          "An educational adventure through different historical periods and civilizations.",
        posterUrl: assets.kindImage13,
        type: "series",
        rating: 4.9,
        episodeCount: 30,
        currentSeason: 2,
        currentEpisode: 15,
        ageRating: "TV-Y7",
        isFree: true,
      },
      {
        id: "adv007",
        title: "Desert Discoveries",
        description:
          "Explore the mysteries and survival strategies in the world's most extreme deserts.",
        posterUrl: assets.kindImage1,
        type: "series",
        rating: 4.7,
        episodeCount: 22,
        currentSeason: 1,
        currentEpisode: 11,
        ageRating: "TV-Y7",
        isFree: false,
      },
      {
        id: "adv008",
        title: "Treasure Hunters",
        description:
          "Join a team of young archaeologists as they uncover ancient artifacts and treasures.",
        posterUrl: assets.kindImage2,
        type: "movie",
        rating: 4.8,
        duration: "1h 25m",
        ageRating: "TV-Y7",
        isFree: true,
      },
    ],
    Series: [
      {
        id: "series001",
        title: "Friendly Neighborhood",
        description:
          "A heartwarming series about friendship, community, and helping others.",
        posterUrl: assets.kindImage3,
        type: "series",
        rating: 4.7,
        episodeCount: 45,
        currentSeason: 3,
        currentEpisode: 15,
        ageRating: "TV-Y",
        isFree: true,
      },
      {
        id: "series002",
        title: "Eco Warriors",
        description:
          "A team of kids work together to solve environmental problems in their community.",
        posterUrl: assets.kindImage4,
        type: "series",
        rating: 4.8,
        episodeCount: 36,
        currentSeason: 2,
        currentEpisode: 18,
        ageRating: "TV-Y7",
        isFree: false,
      },
      {
        id: "series003",
        title: "Detective Kids",
        description:
          "Young detectives solve mysteries while teaching problem-solving and critical thinking.",
        posterUrl: assets.kindImage5,
        type: "series",
        rating: 4.9,
        episodeCount: 40,
        currentSeason: 3,
        currentEpisode: 12,
        ageRating: "TV-Y7",
        isFree: true,
      },
      {
        id: "series004",
        title: "Magical Academy",
        description:
          "Students learn magical skills that represent real-world STEM concepts.",
        posterUrl: assets.kindImage6,
        type: "series",
        rating: 4.7,
        episodeCount: 52,
        currentSeason: 4,
        currentEpisode: 13,
        ageRating: "TV-Y7",
        isFree: false,
      },
      {
        id: "series005",
        title: "Robot Friends",
        description:
          "A boy and his robot friends learn about technology and engineering through adventures.",
        posterUrl: assets.kindImage7,
        type: "series",
        rating: 4.6,
        episodeCount: 32,
        currentSeason: 2,
        currentEpisode: 16,
        ageRating: "TV-Y",
        isFree: true,
      },
      {
        id: "series006",
        title: "Cooking Club",
        description:
          "Kids learn about nutrition, cooking skills, and foods from around the world.",
        posterUrl: assets.kindImage8,
        type: "series",
        rating: 4.8,
        episodeCount: 35,
        currentSeason: 2,
        currentEpisode: 17,
        ageRating: "TV-Y",
        isFree: true,
      },
      {
        id: "series007",
        title: "Sports Stars",
        description:
          "Young athletes learn about different sports, teamwork, and perseverance.",
        posterUrl: assets.kindImage9,
        type: "series",
        rating: 4.7,
        episodeCount: 38,
        currentSeason: 2,
        currentEpisode: 19,
        ageRating: "TV-Y7",
        isFree: false,
      },
      {
        id: "series008",
        title: "Art Explorers",
        description:
          "Children discover different art styles and techniques while going on creative adventures.",
        posterUrl: assets.kindImage10,
        type: "series",
        rating: 4.8,
        episodeCount: 30,
        currentSeason: 2,
        currentEpisode: 15,
        ageRating: "TV-Y",
        isFree: true,
      },
    ],
    TrainingBell: [
      {
        id: "train001",
        title: "Little Scientists",
        description:
          "Basic scientific concepts explained in simple terms for young learners.",
        posterUrl: assets.kindImage11,
        type: "series",
        rating: 4.9,
        episodeCount: 36,
        currentSeason: 2,
        currentEpisode: 18,
        ageRating: "TV-Y",
        isFree: true,
      },
      {
        id: "train002",
        title: "Math Magic",
        description:
          "Making mathematics fun and accessible through engaging stories and puzzles.",
        posterUrl: assets.kindImage12,
        type: "series",
        rating: 4.8,
        episodeCount: 32,
        currentSeason: 2,
        currentEpisode: 16,
        ageRating: "TV-Y",
        isFree: false,
      },
      {
        id: "train003",
        title: "World Languages",
        description:
          "Introduction to basic vocabulary in multiple languages through fun activities.",
        posterUrl: assets.kindImage13,
        type: "series",
        rating: 4.7,
        episodeCount: 40,
        currentSeason: 3,
        currentEpisode: 12,
        ageRating: "TV-Y",
        isFree: true,
      },
      {
        id: "train004",
        title: "History Heroes",
        description:
          "Learning about important historical figures and events through engaging stories.",
        posterUrl: assets.kindImage1,
        type: "series",
        rating: 4.6,
        episodeCount: 35,
        currentSeason: 2,
        currentEpisode: 17,
        ageRating: "TV-Y7",
        isFree: false,
      },
      {
        id: "train005",
        title: "Nature Navigators",
        description:
          "Explore biology, ecology, and natural sciences through outdoor adventures.",
        posterUrl: assets.kindImage2,
        type: "series",
        rating: 4.8,
        episodeCount: 28,
        currentSeason: 1,
        currentEpisode: 14,
        ageRating: "TV-Y",
        isFree: true,
      },
      {
        id: "train006",
        title: "Coding for Kids",
        description:
          "Introduction to basic programming concepts through interactive puzzles and games.",
        posterUrl: assets.kindImage3,
        type: "series",
        rating: 4.9,
        episodeCount: 30,
        currentSeason: 2,
        currentEpisode: 15,
        ageRating: "TV-Y7",
        isFree: true,
      },
      {
        id: "train007",
        title: "Geography Explorers",
        description:
          "Learn about different countries, cultures, and geographical features.",
        posterUrl: assets.kindImage4,
        type: "movie",
        rating: 4.7,
        duration: "1h 20m",
        ageRating: "TV-Y",
        isFree: false,
      },
      {
        id: "train008",
        title: "Financial Fun",
        description:
          "Teaching basic financial literacy through stories and examples.",
        posterUrl: assets.kindImage5,
        type: "series",
        rating: 4.6,
        episodeCount: 26,
        currentSeason: 1,
        currentEpisode: 13,
        ageRating: "TV-Y7",
        isFree: true,
      },
    ],
  },
  episodes: [
    {
      id: "ep001",
      backgroundImage: assets.cardImg1,
      title: "The Great Adventure",
      category: ["Adventure", "Animation"],
      ageRestriction: 5,
      posterUrl: assets.kindImage1,
      hd: true,
      country: "Iran",
      minutes: 30,
    },
    {
      id: "ep002",
      title: "The Lost Treasure",
      backgroundImage: assets.cardImg2,
      category: ["Animation", "Fantasy"],
      ageRestriction: 6,
      posterUrl: assets.kindImage2,
      hd: true,
      country: "Iran",
      minutes: 45,
    },
    {
      id: "ep003",
      title: "The Secret Garden",
      backgroundImage: assets.cardImg3,
      category: "Animation",
      ageRestriction: 7,
      posterUrl: assets.kindImage3,
      hd: true,
      country: "Iran",
      minutes: 40,
    },
    {
      id: "ep004",
      title: "The Magic Forest",
      backgroundImage: assets.freePoster11,
      category: "Fantasy",
      ageRestriction: 5,
      posterUrl: assets.kindImage4,
      hd: true,
      country: "USA",
      minutes: 35,
    },
    {
      id: "ep005",
      title: "The Brave Knight",
      backgroundImage: assets.freePoster12,
      category: "Adventure",
      ageRestriction: 8,
      posterUrl: assets.kindImage5,
      hd: false,
      country: "USA",
      minutes: 50,
    },
  ],
};
