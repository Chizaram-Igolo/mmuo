/**
 * React imports.
 */
import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery } from "react-query";

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
import { collection, getDocs, query, where } from "firebase/firestore";
import { projectFirestore } from "@firebase/config";
import LessonLoader from "@Loaders/LessonLoader";

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
  isAlpha?: boolean;
}

export default function FeedPage() {
  const router = useRouter();

  const [docs, setDocs] = useState<ILesson[][]>([]);

  const { isLoading, error, data } = useQuery("lessonDocs", () => {
    return fetchLessonsList();
  });

  async function fetchLessonsList() {
    const fetchedDocs: ILesson[] = [];

    const q = query(
      collection(projectFirestore, `lessons`),
      where("language", "==", "Igbo")
      // orderBy("timestamp", "asc")
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const { topic, language, intro, iconName, bgColor, group, isAlpha } =
        doc.data();

      fetchedDocs.push({
        id: doc.id,
        topic,
        language,
        intro,
        iconName,
        bgColor,
        group,
        isAlpha,
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

  const chainLineSVG = (
    <div className="max-w-[4rem] ml-10">
      <svg
        height="44"
        width="500"
        className="block w-[4px] sm:w-[6px] mt-2 mb-0"
      >
        <line className="vert-dash-line" x1="0" y1="0" x2="0" y2="40" />
      </svg>
    </div>
  );

  return (
    <section
      className="py-4 pb-24 px-5 md:px-18 lg:px-20 xl:px-24 z-20 
                       min-h-[28rem]"
      style={{ height: data ? "" : `calc(100vh - (90px + 60px))` }}
    >
      <div className="py-6 h-full">
        {!data && <LessonLoader />}

        {data &&
          data.map((group, groupIdx) => (
            <React.Fragment key={group[0].group + group[0].id}>
              <div
                className={`flex flex-row gap-x-12 gap-y-12 
                             md:max-w-[70%] flex-wrap ${
                               groupIdx === 0 ? "bg-[#f3fdd2]" : "bg-gray-100"
                             } pt-6 pb-4 pl-4 md:rounded-r-full ${
                  group.length === 1 ? "md:w-[18rem]" : ""
                }`}
              >
                {group.map((lesson, lessonIdx) => (
                  <Dropdown
                    classNames=""
                    isAlpha={lesson.isAlpha}
                    isGroup={true}
                    key={lesson.id}
                    langCode={router.query.pid}
                    docId={lesson.id}
                    isUnlocked={groupIdx < 2}
                  >
                    <div className="flex w-[18rem] gap-x-6 mb-0">
                      <div>
                        <div
                          className={`block cursor-pointer text-center 
                                              py-0 px-0 ring-[9px] ${
                                                groupIdx === 0
                                                  ? "ring-green-200"
                                                  : groupIdx === 1
                                                  ? "ring-purple-200"
                                                  : "ring-slate-200"
                                              } 
                                              ring-offset-2 active:outline-none 
                                              active:ring-[12px] active:ring-offset-4 
                                              min-w-[3.8rem] max-w-[3.8rem] z-20 
                                              h-[3.8rem] mb-[0.85rem] first:mt-0 
                                              rounded-full mx-auto md:ml-3`}
                          style={{
                            backgroundColor:
                              groupIdx > 1 ? "#aaaaaa" : lesson.bgColor,
                          }}
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
                            .map((item, spanIdx) => (
                              <span
                                className={`inline-block ${
                                  groupIdx === 0 && spanIdx < 3
                                    ? "text-yellow-400"
                                    : "text-gray-300"
                                } text-[1.2rem]`}
                                key={spanIdx}
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
