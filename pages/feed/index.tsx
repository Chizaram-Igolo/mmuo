/**
 * React imports.
 */
import Link from "next/link";
import { useState, useEffect } from "react";
import type { ReactElement } from "react";
import Image from "next/image";

/**
 * Vendor-defined UI components/hooks/utilities/etc.
 */
import { CircleFlag } from "react-circle-flags";

/**
 * Developer-defined UI components/hooks/constants.
 */
import Layout from "@Layouts/layout";
import { languages } from "@helpers/languages";

import { collection, getDocs, query, where } from "firebase/firestore";
import { projectFirestore } from "@firebase/config";

/**
 * Image assets.
 */
import ng from "@public/images/country_flags/ng.svg";

export default function Feed() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchLessonIntro() {
      const q = query(
        collection(projectFirestore, `lessons`),
        where("language", "==", "Igbo")
      );

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " is ", doc.data());
      });
    }

    fetchLessonIntro();
  }, []);

  return (
    <>
      <section className="px-0 md:px-18 lg:px-20 xl:px-24 z-20 min-h-[28rem]">
        <div className="flex flex-col md:flex-row mb-8">
          <div className="flex-1 min-w-[20rem] max-w-[28rem] z-20 mx-auto">
            <div
              className="css-tsp5x1 e7kuofc1 relative bg-white rounded-lg 
                          text-[#080b2d] py-[2rem] px-6 md:px-12 
                            shadow-[0_5px_5px_-2px_rgba(0,8,36,0.2)]"
            >
              <p>Select a language to start learning:</p>
              <ul className="p-6 pl-0 divide-y divide-slate-200 ">
                {languages.map((language) => (
                  <Link href="feed/ig" key={language.name}>
                    <a className="block py-4 px-2 hover:bg-slate-200">
                      <li
                        className="flex py-0 first:pt-0 last:pb-0 mx-0 
                                     w-full"
                      >
                        {/* <CircleFlag
                          countryCode={language.countryCode}
                          height={36}
                          width={36}
                        /> */}

                        <Image
                          src={ng.src}
                          alt="Google Logo"
                          width={48}
                          height={48}
                        />

                        <div className="ml-5 overflow-hidden">
                          <p
                            className="text-2xl bold leading-10 mt-1 
                                      text-slate-800"
                          >
                            {language.name}
                          </p>
                        </div>
                      </li>
                    </a>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Feed.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
