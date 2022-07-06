/**
 * React imports.
 */
import Link from "next/link";
import { ReactElement } from "react";

/**
 * Developer-defined UI components/hooks/constants.
 */
import Layout from "@Layouts/layout";
import ActionButtonB from "@Buttons/ActionButtonB";
import GoBackButton from "@Buttons/GoBackButton";

const alphabet = [
  { name: "Aa" },
  { name: "Bb" },
  { name: "CHch" },
  { name: "Db" },
  { name: "Ee" },
  { name: "Ff" },
  { name: "Gg" },
  { name: "GBgb" },
  { name: "GHgh" },
  { name: "GWgw" },
  { name: "Hh" },
  { name: "Ii" },
  { name: "Iị" },
  { name: "Jj" },
  { name: "Kk" },
  { name: "KPkp" },
  { name: "KWkw" },
  { name: "Ll" },
  { name: "Mm" },
  { name: "Nn" },
  { name: "NWnw" },
  { name: "Ññ" },
  { name: "NYny" },
  { name: "Oo" },
  { name: "Ọọ" },
  { name: "Pp" },
  { name: "Rr" },
  { name: "Ss" },
  { name: "SHsh" },
  { name: "Tt" },
  { name: "Uu" },
  { name: "Ụụ" },
  { name: "Vv" },
  { name: "Ww" },
  { name: "Yy" },
  { name: "Zz" },
];

export default function Alphabet() {
  let remainderFlexBoxes = 0;

  if (alphabet.length % 7 !== 0) {
    remainderFlexBoxes = 7 - (alphabet.length % 7);
  }

  // console.log(remainderFlexBoxes);
  return (
    <>
      <section className="py-4 pb-24 px-8 md:px-18 lg:px-20 xl:px-24 z-20 min-h-[28rem] bg-white">
        <div className="py-6 w-[100%] lg:w-[60%]">
          <h2 className="text-[#333333] mb-4">The Alphabet</h2>
          <p className="mb-8">Tap on any letter to begin learning about it!</p>

          <div className="flex flex-row mb-12 flex-wrap gap-x-2 gap-y-4">
            {alphabet.map((letter) => (
              <div className="flex-1 basis-4 md:basis-8" key={letter.name}>
                <Link href="/exercise/1">
                  <a>
                    <ActionButtonB classNames="min-w-[5rem]">
                      {letter.name}
                    </ActionButtonB>
                  </a>
                </Link>
                <div className="mt-2 h-2 w-[98%] mx-auto bg-purple-200 rounded"></div>
              </div>
            ))}{" "}
            {Array(remainderFlexBoxes)
              .fill("")
              .map((idx) => (
                <div
                  className="flex-1 basis-4 md:basis-8 min-w-[5rem]"
                  key={idx}
                ></div>
              ))}
          </div>

          <div className="flex flex-row">
            <div className="flex-1 pt-4">
              <GoBackButton />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Alphabet.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
