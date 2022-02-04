import {
  faSortAlphaDown,
  faComments,
  faHammer,
  faRunning,
  faHourglassEnd,
  faHourglassStart,
  faBaby,
  faFillDrip,
  faUtensils,
  faTshirt,
  faPaw,
  faPlaneDeparture,
  faSeedling,
  faChargingStation,
  faTree,
  faSchool,
  faBuilding,
  faCalendarWeek,
  faBriefcaseMedical,
  faRulerCombined,
  faBacterium,
  faBirthdayCake,
  faAtom,
  faFlagUsa,
  fa1,
  fa2,
  fa3,
  faRobot,
  faBreadSlice,
  faShop,
  faCubes,
  faQuoteLeft,
  faHeart,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

export { modules };

export interface IModule {
  name: string;
  relatedToNext: false;
  bg: string;
  icon: IconDefinition;
}

const modules = [
  {
    name: "Alphabet",
    relatedToNext: false,
    bg: "bg-green-600",
    icon: faSortAlphaDown,
  },
  [
    {
      name: "Basics 1",
      relatedToNext: false,
      bg: "bg-orange-500",
      icon: faCubes,
    },
    {
      name: "Basics 2",
      relatedToNext: false,
      bg: "bg-orange-500",
      icon: faCubes,
    },
  ],
  {
    name: "Greetings 1",
    relatedToNext: false,
    bg: "bg-rose-500",
    icon: faComments,
  },
  [
    {
      name: "Phrases 1",
      relatedToNext: false,
      bg: "bg-fuchsia-700",
      icon: faQuoteLeft,
    },
    {
      name: "Phrases 2",
      relatedToNext: false,
      bg: "bg-fuchsia-700",
      icon: faQuoteLeft,
    },
  ],
  [
    {
      name: "Numbers 1",
      relatedToNext: false,
      bg: "bg-fuchsia-700",
      icon: fa1,
    },
    {
      name: "Numbers 2",
      relatedToNext: false,
      bg: "bg-green-700",
      icon: fa2,
    },
    {
      name: "Numbers 3",
      relatedToNext: false,
      bg: "bg-green-700",
      icon: fa3,
    },
  ],
  [
    {
      name: "Verb Roots",
      relatedToNext: false,
      bg: "bg-emerald-600",
      icon: faSeedling,
    },
    {
      name: "Action",
      relatedToNext: false,
      bg: "bg-violet-700",
      icon: faHammer,
    },
    {
      name: "Present",
      relatedToNext: false,
      bg: "bg-gray-600",
      icon: faRunning,
    },
    {
      name: "Past",
      relatedToNext: false,
      bg: "bg-green-700",
      icon: faHourglassEnd,
    },
    {
      name: "Future",
      relatedToNext: false,
      bg: "bg-rose-600",
      icon: faHourglassStart,
    },
  ],
  [
    {
      name: "Greetings 2",
      countryCode: "ng",
      bg: "bg-lime-600",
      icon: faComments,
    },
    {
      name: "Greetings 3",
      countryCode: "ng",
      bg: "bg-green-700",
      icon: faComments,
    },
  ],
  {
    name: "Adjectives",
    countryCode: "ng",
    bg: "bg-purple-700",
    icon: faRulerCombined,
  },
  [
    {
      name: "Family",
      relatedToNext: false,
      bg: "bg-orange-500",
      icon: faBaby,
    },
    {
      name: "Colours",
      countryCode: "ng",
      bg: "bg-purple-600",
      icon: faFillDrip,
    },
    {
      name: "Food 1",
      countryCode: "ng",
      bg: "bg-amber-500",
      icon: faBreadSlice,
    },
    {
      name: "Food 2",
      countryCode: "ng",
      bg: "bg-orange-500",
      icon: faBreadSlice,
    },
    {
      name: "Food 3",
      countryCode: "ng",
      bg: "bg-rose-600",
      icon: faBreadSlice,
    },
    {
      name: "Restaurant 1",
      countryCode: "ng",
      bg: "bg-green-600",
      icon: faUtensils,
    },
    {
      name: "Restaurant 2",
      countryCode: "ng",
      bg: "bg-lime-700",
      icon: faUtensils,
    },
    {
      name: "Clothes",
      countryCode: "ng",
      bg: "bg-teal-700",
      icon: faTshirt,
    },
  ],
  [
    {
      name: "Animals",
      relatedToNext: false,
      bg: "bg-red-600",
      icon: faPaw,
    },
    {
      name: "Animals II",
      relatedToNext: false,
      bg: "bg-rose-600",
      icon: faPaw,
    },
  ],
  [
    {
      name: "Idioms",
      relatedToNext: false,
      bg: "bg-red-600",
      icon: faQuoteLeft,
    },
  ],
  [
    {
      name: "Proverbs",
      relatedToNext: false,
      bg: "bg-red-600",
      icon: faHeart,
    },
  ],
  [
    {
      name: "Shopping",
      relatedToNext: false,
      bg: "bg-green-700",
      icon: faShop,
    },
    {
      name: "Shopping II",
      relatedToNext: false,
      bg: "bg-green-700",
      icon: faShop,
    },
  ],
  [
    {
      name: "Travel",
      relatedToNext: false,
      bg: "bg-green-700",
      icon: faPlaneDeparture,
    },
    {
      name: "Appliances",
      relatedToNext: false,
      bg: "bg-green-700",
      icon: faChargingStation,
    },
    {
      name: "Nature",
      relatedToNext: false,
      bg: "bg-green-700",
      icon: faTree,
    },
    {
      name: "Nature II",
      relatedToNext: false,
      bg: "bg-green-700",
      icon: faTree,
    },
    {
      name: "Nature III",
      relatedToNext: false,
      bg: "bg-green-700",
      icon: faTree,
    },
    {
      name: "Adjectives",
      countryCode: "ng",
      bg: "bg-green-700",
      icon: faComments,
    },
  ],
  [
    {
      name: "Holidays",
      countryCode: "ng",
      bg: "bg-green-700",
      icon: faBacterium,
    },
    {
      name: "Birthdays",
      countryCode: "ng",
      bg: "bg-green-700",
      icon: faBirthdayCake,
    },
    {
      name: "Calendar",
      countryCode: "ng",
      bg: "bg-green-700",
      icon: faCalendarWeek,
    },
    {
      name: "Work",
      relatedToNext: false,
      bg: "bg-blue-700",
      icon: faBuilding,
    },
    {
      name: "Work II",
      relatedToNext: false,
      bg: "bg-blue-800",
      icon: faBuilding,
    },
    {
      name: "School 1",
      relatedToNext: false,
      bg: "bg-orange-600",
      icon: faSchool,
    },
    {
      name: "School 2",
      relatedToNext: false,
      bg: "bg-amber-600",
      icon: faSchool,
    },
    {
      name: "Medical",
      relatedToNext: false,
      bg: "bg-green-700",
      icon: faBriefcaseMedical,
    },
    {
      name: "Science",
      relatedToNext: false,
      bg: "bg-fuchsia-600",
      icon: faAtom,
    },
    {
      name: "Technology",
      relatedToNext: false,
      bg: "bg-fuchsia-600",
      icon: faRobot,
    },
    {
      name: "Nations",
      relatedToNext: false,
      bg: "bg-green-700",
      icon: faFlagUsa,
    },
  ],
];
