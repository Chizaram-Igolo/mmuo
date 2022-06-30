/**
 * React imports.
 */
import { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

import * as Icons from "@fortawesome/free-solid-svg-icons";
import {
  IconDefinition,
  IconPrefix,
  IconPack,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

// Type that `library.add()` expects.
type IconDefinitionOrPack = IconDefinition | IconPack;

interface ImportedIcons {
  [key: string]: IconPrefix | IconDefinitionOrPack;
}

const iconList = Object.keys(Icons)
  .filter((key) => key != "fas" && key !== "prefix")
  .map((icon) => (Icons as ImportedIcons)[icon]);

library.add(...(iconList as IconDefinitionOrPack[]));

import Dropdown from "@Dropdowns/Dropdown";
import React, { ReactElement } from "react";

import Layout from "@components/Layouts/layout";

/**
 * Developer-defined UI components/hooks/constants.
 */
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { projectFirestore } from "@firebase/config";

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

  const { isLoading, error, data } = useQuery("lessonDocs", () => {
    return fetchLessonIntro();
  });

  async function fetchLessonIntro() {
    const fetchedDocs: ILesson[] = [];

    const q = query(
      collection(projectFirestore, `lessons`),
      where("language", "==", "Igbo"),
      orderBy("timestamp")
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

    let grouped: ILesson[][] = Object.values(
      fetchedDocs.reduce((r, o) => {
        // @ts-ignore
        (r[o.group] = r[o.group] || []).push(o);
        return r;
      }, {})
    );

    grouped.forEach((arr) => arr.reverse());

    return grouped.reverse();
  }

  useEffect(() => {}, []);

  const chainLineSVG = (
    <div className="max-w-[4rem] ml-10">
      <svg height="44" width="500" className="block w-[6px] mt-2 mb-0">
        <line className="vert-dash-line" x1="0" y1="0" x2="0" y2="40" />
      </svg>
    </div>
  );

  return (
    <section
      className="py-4 pb-24 px-8 md:px-18 lg:px-20 xl:px-24 z-20 
                      min-h-[28rem] bg-white"
    >
      <div className="py-6">
        {data &&
          data.map((group) => (
            <React.Fragment key={group[0].group + group[0].id}>
              <div
                className="flex flex-row gap-x-12 gap-y-12 
                                  md:max-w-[70%] flex-wrap bg-gray-100 
                                  pt-6 pb-4 pl-4 md:rounded-r-full"
              >
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
                          className={`block cursor-pointer text-center 
                                             py-0 px-0 ring-[9px] ring-purple-200 
                                             ring-offset-2 active:outline-none 
                                             active:ring-[12px] active:ring-offset-4 
                                             min-w-[3.8rem] max-w-[3.8rem] z-20 
                                             h-[3.8rem] mb-[0.85rem] first:mt-0 
                                             rounded-full mx-auto md:ml-3`}
                          style={{ backgroundColor: lesson.bgColor }}
                        >
                          <span className="text-[1.8rem] leading-[3.8rem]">
                            <FontAwesomeIcon
                              icon={lesson.iconName as keyof typeof iconObjTemp}
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
                            .map((item, idx) => (
                              <span
                                className="inline-block text-gray-300 
                                                  text-[1.2rem]"
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
                {data.indexOf(group) < data.length - 1 && chainLineSVG}
              </div>
              <div className="mb-0 md:hidden"></div>
            </React.Fragment>
          ))}
      </div>
    </section>
  );
}

FeedPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
