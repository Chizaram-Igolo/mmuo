import type { NextPage } from "next";

import { useAuth } from "../../contexts/AuthContext";

import { CircleFlag } from "react-circle-flags";
import Link from "next/link";

const languages = [
  {
    name: "Igbo",
    countryCode: "ng",
  },
];

const Feed: NextPage = () => {
  const { user } = useAuth();

  return (
    <>
      <section className="py-4 px-8 md:px-18 lg:px-20 xl:px-24 z-20 bg-blue-900 min-h-[28rem]">
        <div className="flex flex-col md:flex-row mb-8">
          <div className="flex-1 min-w-[20rem] max-w-[28rem] z-20 mx-auto">
            <div className="css-tsp5x1 e7kuofc1 relative bg-white rounded-lg text-[#080b2d] py-[2rem] px-6 md:px-12 shadow-[0_5px_5px_-2px_rgba(0,8,36,0.2)]">
              <p>Select a language to start learning:</p>
              <ul className="p-6 pl-0 divide-y divide-slate-200 ">
                {languages.map((language) => (
                  <Link href="feed/ig" key={language.name}>
                    <a className="block py-4 px-2 hover:bg-slate-200">
                      <li className="flex py-0 first:pt-0 last:pb-0 mx-0 w-full">
                        <CircleFlag
                          countryCode={language.countryCode}
                          height={36}
                          width={36}
                        />

                        <div className="ml-5 overflow-hidden">
                          <p className="text-2xl bold leading-10 text-slate-800">
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
};

export default Feed;
