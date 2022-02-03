import type { NextPage } from "next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
} from "@fortawesome/free-solid-svg-icons";
import Dropdown from "../../components/dropdown";

export { modules };

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

const FeedPage: NextPage = () => {
  return (
    <>
      <section className="py-4 pb-24 px-8 md:px-18 lg:px-20 xl:px-24 z-20 min-h-[28rem]">
        <div className="py-6">
          {modules.map((module) => {
            let elemArr;

            if (!Array.isArray(module)) {
              elemArr = (
                <>
                  <Dropdown>
                    <div
                      className={`block cursor-pointer text-center py-0 px-0 ring-[9px] ring-purple-200 ring-offset-2 active:outline-none active:ring-[12px] active:ring-offset-4 max-w-[3.8rem] z-20 h-[3.8rem] mb-[0.85rem] first:mt-0 ${module.bg} text-[#080b2d] rounded-full`}
                      key={module.name}
                    >
                      {/* <div className="overflow-hidden text-center"> */}
                      <span className="text-[1.8rem] leading-[3.8rem]">
                        <FontAwesomeIcon
                          icon={module.icon}
                          className="text-white cursor-pointer"
                        />
                      </span>
                      {/* </div> */}
                    </div>
                    <h3 className="w-max module-h3 mt-3 text-center text-[#080b2d] mb-[0.2rem] last:mb-0">
                      {module.name}
                    </h3>
                  </Dropdown>
                </>
              );
            } else {
              elemArr = (
                <>
                  <div className="flex flex-row max-w-lg gap-x-12 gap-y-6 flex-wrap">
                    {module.map((item) => (
                      <Dropdown>
                        <div className="w-[5.5rem]" key={item.name}>
                          <div
                            className={`block cursor-pointer text-center py-0 px-0 ring-[9px] ring-purple-200 ring-offset-2 active:outline-none active:ring-[12px] active:ring-offset-4 max-w-[3.8rem] z-20 h-[3.8rem] mb-[0.85rem] first:mt-0 ${item.bg} text-[#080b2d] rounded-full`}
                          >
                            {/* <div className="overflow-hidden text-center"> */}
                            <span className="text-[1.8rem] leading-[3.8rem]">
                              <FontAwesomeIcon
                                icon={item.icon}
                                className="text-white cursor-pointer"
                              />
                            </span>
                            {/* </div> */}
                          </div>
                          <h3 className="w-max module-h3 mt-3 text-center text-[#080b2d] mb-[0.2rem] last:mb-0">
                            {item.name}
                          </h3>
                        </div>
                      </Dropdown>
                    ))}
                  </div>
                </>
              );
            }

            return (
              <>
                {elemArr}
                {modules.indexOf(module) !== modules.length - 1 && (
                  <div className="max-w-[4rem]" key={modules.indexOf(module)}>
                    <svg
                      height="44"
                      width="500"
                      className="block w-[6px] mt-2 mb-3 mx-auto"
                    >
                      <line
                        className="vert-dash-line"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="40"
                      />
                    </svg>
                  </div>
                )}
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default FeedPage;