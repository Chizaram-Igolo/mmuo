/**
 * React imports.
 */
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import * as Icons from "@fortawesome/free-solid-svg-icons";
import {
  IconDefinition,
  IconPrefix,
  IconPack,
} from "@fortawesome/free-solid-svg-icons";

// Type that `library.add()` expects.
type IconDefinitionOrPack = IconDefinition | IconPack;

interface ImportedIcons {
  [key: string]: IconPrefix | IconDefinitionOrPack;
}

const iconList = Object.keys(Icons)
  .filter((key) => key != "fas" && key !== "prefix")
  .map((icon) => (Icons as ImportedIcons)[icon]);

library.add(...(iconList as IconDefinitionOrPack[]));

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
  faRobot,
  faBreadSlice,
  faShop,
  faQuoteLeft,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import Dropdown from "@Dropdowns/Dropdown";
import React, { ReactElement } from "react";

import Layout from "@components/Layouts/layout";

/**
 * Developer-defined UI components/hooks/constants.
 */
import { collection, getDocs, query, where } from "firebase/firestore";
import { projectFirestore } from "@firebase/config";

const modules2 = [
  [
    {
      name: "Verb Roots",
      bg: "bg-emerald-600",
      icon: faSeedling,
    },
    {
      name: "Action",
      bg: "bg-violet-700",
      icon: faHammer,
    },
    {
      name: "Present",
      bg: "bg-gray-600",
      icon: faRunning,
    },
    {
      name: "Past",
      bg: "bg-green-700",
      icon: faHourglassEnd,
    },
    {
      name: "Future",
      bg: "bg-rose-600",
      icon: faHourglassStart,
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
      bg: "bg-red-600",
      icon: faPaw,
    },
    {
      name: "Animals II",
      bg: "bg-rose-600",
      icon: faPaw,
    },
  ],
  [
    {
      name: "Idioms",
      bg: "bg-red-600",
      icon: faQuoteLeft,
    },
    {
      name: "Proverbs",
      bg: "bg-red-600",
      icon: faHeart,
    },
  ],
  [
    {
      name: "Shopping",
      bg: "bg-green-700",
      icon: faShop,
    },
    {
      name: "Shopping II",
      bg: "bg-green-700",
      icon: faShop,
    },
  ],
  [
    {
      name: "Travel",
      bg: "bg-green-700",
      icon: faPlaneDeparture,
    },
    {
      name: "Appliances",
      bg: "bg-green-700",
      icon: faChargingStation,
    },
    {
      name: "Nature",
      bg: "bg-green-700",
      icon: faTree,
    },
    {
      name: "Nature II",
      bg: "bg-green-700",
      icon: faTree,
    },
    {
      name: "Nature III",
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
      bg: "bg-blue-700",
      icon: faBuilding,
    },
    {
      name: "Work II",
      bg: "bg-blue-800",
      icon: faBuilding,
    },
    {
      name: "School 1",
      bg: "bg-orange-600",
      icon: faSchool,
    },
    {
      name: "School 2",
      bg: "bg-amber-600",
      icon: faSchool,
    },
    {
      name: "Medical",
      bg: "bg-green-700",
      icon: faBriefcaseMedical,
    },
    {
      name: "Science",
      bg: "bg-fuchsia-600",
      icon: faAtom,
    },
    {
      name: "Technology",
      bg: "bg-fuchsia-600",
      icon: faRobot,
    },
    {
      name: "Nations",
      bg: "bg-green-700",
      icon: faFlagUsa,
    },
  ],
];

const iconObjTemp = {
  cubes: "cubes",
};

interface ILesson {
  id: string;
  topic: string;
  language: string;
  intro: string;
  iconName: string;
  bgColor: string;
  group: string;
}

export default function FeedPage() {
  const [docs, setDocs] = useState<ILesson[][]>([]);

  useEffect(() => {
    const fetchedDocs: ILesson[] = [];

    async function fetchLessonIntro() {
      const q = query(
        collection(projectFirestore, `lessons`),
        where("language", "==", "Igbo")
      );

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const { topic, language, intro, iconName, bgColor, group } = doc.data();

        fetchedDocs.push({
          id: doc.id,
          topic,
          language,
          intro,
          iconName,
          bgColor,
          group,
        });
      });
      console.log("dd", fetchedDocs);

      let grouped: ILesson[][] = Object.values(
        fetchedDocs.reduce((r, o) => {
          // @ts-ignore
          (r[o.group] = r[o.group] || []).push(o);
          return r;
        }, {})
      );

      console.log("grouped", grouped);

      grouped.forEach((arr) => arr.reverse());

      setDocs(grouped.reverse());
    }

    fetchLessonIntro();
  }, []);

  const modules = modules2;
  // console.log(docs);
  // const firstModule = modules[0] as IModule;

  const chainLineSVG = (
    <div className="max-w-[4rem] ml-10">
      <svg height="44" width="500" className="block w-[6px] mt-2 mb-0">
        <line className="vert-dash-line" x1="0" y1="0" x2="0" y2="40" />
      </svg>
    </div>
  );

  return (
    <>
      <section
        className="py-4 pb-24 px-8 md:px-18 lg:px-20 xl:px-24 z-20 
                   min-h-[28rem] bg-white"
      >
        <div className="py-6">
          {modules && modules.length > 0 && (
            <>
              <Dropdown classNames="md:w-fit" isAlpha={true} isGroup={false}>
                <div
                  className="flex flex-row md:w-[18rem] gap-x-6 mb-0 
                             bg-[#f3fdd2] pt-6 pb-4 pl-4 md:rounded-r-full"
                >
                  <div>
                    <div
                      className={`block cursor-pointer text-center py-0 px-0 
                                  ring-[9px] ring-green-200 ring-offset-2 
                                  active:outline-none active:ring-[12px] 
                                  active:ring-offset-4 min-w-[3.8rem] 
                                  max-w-[3.8rem] z-20 h-[3.8rem] mb-[0.85rem] 
                                  first:mt-0 rounded-full 
                                  mx-auto md:ml-3`}
                    >
                      <span className="text-[1.8rem] leading-[3.8rem]">
                        <FontAwesomeIcon
                          icon={faSortAlphaDown}
                          className="text-white cursor-pointer"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="">
                    <h3 className="w-max module-h3 text-center last:mb-0">
                      {/* {firstModule.name} */}
                    </h3>
                    <div className="flex mt-1 gap-x-1">
                      {Array(5)
                        .fill("")
                        .map((item, idx) => (
                          <span
                            className={`inline-block ${
                              idx < 3 ? "text-yellow-400" : "text-gray-300"
                            } text-[1.2rem]`}
                            key={idx}
                          >
                            <FontAwesomeIcon icon="check" />
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              </Dropdown>
              <div className="md:block">
                {/* {modules.indexOf(firstModule) < modules.length - 1 &&
                  chainLineSVG} */}
              </div>

              {docs.map((group) => (
                <React.Fragment key={group[0].group + docs.indexOf(group)}>
                  <div className="flex flex-row gap-x-12 gap-y-12 md:max-w-[70%] flex-wrap bg-gray-100 pt-6 pb-4 pl-4 md:rounded-r-full">
                    {group.map((lesson) => (
                      <Dropdown
                        classNames=""
                        isAlpha={false}
                        isGroup={true}
                        key={lesson.id}
                      >
                        <div className="flex w-[18rem] gap-x-6 mb-0">
                          <div>
                            <div
                              className={`block cursor-pointer text-center py-0 px-0 ring-[9px] ring-purple-200 ring-offset-2 active:outline-none active:ring-[12px] active:ring-offset-4 min-w-[3.8rem] max-w-[3.8rem] z-20 h-[3.8rem] mb-[0.85rem] first:mt-0 ${lesson.bgColor} rounded-full mx-auto md:ml-3`}
                            >
                              <span className="text-[1.8rem] leading-[3.8rem]">
                                <FontAwesomeIcon
                                  icon={
                                    lesson.iconName as keyof typeof iconObjTemp
                                  }
                                  color="#ffffff"
                                />
                              </span>
                            </div>
                          </div>
                          <div className="">
                            <h3 className="w-max module-h3 text-center last:mb-0">
                              {lesson.topic}
                            </h3>
                            <div className="flex mt-1 gap-x-1">
                              {Array(5)
                                .fill("")
                                .map((idx) => (
                                  <span
                                    className="inline-block text-gray-300 text-[1.2rem]"
                                    key={idx}
                                  >
                                    <FontAwesomeIcon icon="check" />
                                  </span>
                                ))}
                            </div>
                          </div>
                        </div>
                      </Dropdown>
                    ))}
                  </div>

                  <div className="md:block">
                    {docs.indexOf(group) < docs.length && chainLineSVG}
                  </div>
                  <div className="mb-0 md:hidden"></div>
                </React.Fragment>
              ))}

              {modules.map((module) => {
                if (!Array.isArray(module)) {
                  return (
                    <React.Fragment key={module.name}>
                      <Dropdown
                        classNames="md:w-fit"
                        isAlpha={false}
                        isGroup={false}
                      >
                        <div className="flex w-[18rem] gap-x-6 mb-4 bg-gray-100 pt-6 pb-4 pl-4 md:rounded-r-full">
                          <div>
                            <div
                              className={`block cursor-pointer text-center py-0 px-0 ring-[9px] ring-purple-200 ring-offset-2 active:outline-none active:ring-[12px] active:ring-offset-4 min-w-[3.8rem] max-w-[3.8rem] z-20 h-[3.8rem] mb-[0.85rem] first:mt-0 ${module.bg} rounded-full mx-auto md:ml-3`}
                            >
                              <span className="text-[1.8rem] leading-[3.8rem]">
                                <FontAwesomeIcon
                                  icon={module.icon}
                                  className="text-white cursor-pointer"
                                />
                              </span>
                            </div>
                          </div>
                          <div className="">
                            <h3 className="w-max module-h3 text-center last:mb-0">
                              {module?.name}
                            </h3>
                            <div className="flex mt-1 gap-x-1">
                              {Array(5)
                                .fill("")
                                .map((idx) => (
                                  <span
                                    className="inline-block text-gray-300 text-[1.2rem]"
                                    key={idx}
                                  >
                                    {/* <FontAwesomeIcon
                                      icon={faCrown}
                                      className=""
                                    /> */}
                                    <FontAwesomeIcon icon="check" />
                                  </span>
                                ))}
                            </div>
                          </div>
                        </div>
                      </Dropdown>

                      <div className="md:block">
                        {modules.indexOf(module) < modules.length - 1 &&
                          chainLineSVG}
                      </div>
                      <div className="mb-0 md:hidden"></div>
                    </React.Fragment>
                  );
                } else {
                  return (
                    <React.Fragment
                      key={module[0].name + modules.indexOf(module)}
                    >
                      <div className="flex flex-row gap-x-12 gap-y-12 md:max-w-[70%] flex-wrap bg-gray-100 pt-6 pb-4 pl-4 md:rounded-r-full">
                        {module.map((item) => (
                          <Dropdown
                            classNames=""
                            isAlpha={false}
                            isGroup={true}
                            key={item.name}
                          >
                            <div className="flex w-[18rem] gap-x-6 mb-0">
                              <div>
                                <div
                                  className={`block cursor-pointer text-center py-0 px-0 ring-[9px] ring-purple-200 ring-offset-2 active:outline-none active:ring-[12px] active:ring-offset-4 min-w-[3.8rem] max-w-[3.8rem] z-20 h-[3.8rem] mb-[0.85rem] first:mt-0 ${item.bg} rounded-full mx-auto md:ml-3`}
                                >
                                  <span className="text-[1.8rem] leading-[3.8rem]">
                                    <FontAwesomeIcon
                                      icon={item.icon}
                                      className="text-white cursor-pointer"
                                    />
                                  </span>
                                </div>
                              </div>
                              <div className="">
                                <h3 className="w-max module-h3 text-center last:mb-0">
                                  {item.name}
                                </h3>
                                <div className="flex mt-1 gap-x-1">
                                  {Array(5)
                                    .fill("")
                                    .map((idx) => (
                                      <span
                                        className="inline-block text-gray-300 text-[1.2rem]"
                                        key={idx}
                                      >
                                        <FontAwesomeIcon icon="check" />
                                      </span>
                                    ))}
                                </div>
                              </div>
                            </div>
                          </Dropdown>
                        ))}
                      </div>

                      <div className="md:block">
                        {modules.indexOf(module) < modules.length - 1 &&
                          chainLineSVG}
                      </div>
                      <div className="mb-0 md:hidden"></div>
                    </React.Fragment>
                  );
                }
              })}
            </>
          )}
        </div>
      </section>
    </>
  );
}

FeedPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
