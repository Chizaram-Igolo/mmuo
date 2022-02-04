import type { NextPage } from "next";

import React from "react";

import InfoTip from "../../components/infotip";

const Tips: NextPage = () => {
  return (
    <>
      <section className="py-4 pb-24 px-8 md:px-18 lg:px-20 xl:px-24 z-20 min-h-[28rem] bg-white">
        <div className="py-6 w-[100%] lg:w-[60%]">
          <h2 className="text-[#333333] mb-4">Welcome</h2>
          <p className="mb-4">
            ǹdeèwo!. Welcome to the Igbo course. In Igbo, there are 5 tones that
            you need to be aware of; high tones, low tones, mid tones, rising
            tones and falling tones.
          </p>
          <ul className="list-decimal ml-5 leading-8">
            <li>
              High tone: &nbsp;
              <span className="border-b-[0.15rem] border-dotted border-[#282828] tracking-wider cursor-pointer px-2">
                á
              </span>
            </li>
            <li>
              Low tone: &nbsp;
              <span className="border-b-[0.15rem] border-dotted border-[#282828] tracking-wider cursor-pointer px-2">
                à
              </span>
            </li>
            <li>
              Mid tone: &nbsp;
              <span className="border-b-[0.15rem] border-dotted border-[#282828] tracking-wider cursor-pointer px-2">
                ā
              </span>
            </li>
            <li>
              Rising tone: &nbsp;
              <span className="border-b-[0.15rem] border-dotted border-[#282828] tracking-wider cursor-pointer px-2">
                ǎ
              </span>
            </li>
            <li>
              Falling tone: &nbsp;
              <span className="border-b-[0.15rem] border-dotted border-[#282828] tracking-wider cursor-pointer px-2">
                â
              </span>
            </li>
          </ul>

          <p>Click on each of them to hear what they sound like.</p>
          <p>
            The rising and falling tones are shortened forms of the low-high and
            high-low tones respectively:{" "}
            <span className="border-b-[0.15rem] border-dotted border-[#282828] tracking-wider cursor-pointer px-2">
              àá
            </span>
            and{" "}
            <span className="border-b-[0.15rem] border-dotted border-[#282828] tracking-wider cursor-pointer px-2">
              áà
            </span>
            .
          </p>

          <InfoTip severity="warning">
            <strong>High tones are usually not marked.</strong>
          </InfoTip>
        </div>
      </section>
    </>
  );
};

export default Tips;
