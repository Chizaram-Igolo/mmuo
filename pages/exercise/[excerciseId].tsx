import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { NextPage } from "next";
import { useState } from "react";

import ActiveButton from "../../components/buttons/answerbutton";
import MultipleChoice from "../../components/multiplechoice";
import Result from "../../components/result";

const alphabet = [{ name: "ā" }, { name: "á" }, { name: "ǎ" }, { name: "à" }];

const Exercise: NextPage = () => {
  const [showResult, setShowResult] = useState(false);

  function changeShowResult() {
    setShowResult((val) => !val);
  }

  let remainderFlexBoxes = 0;

  if (alphabet.length % 7 !== 0) {
    remainderFlexBoxes = 7 - (alphabet.length % 7);
  }

  return (
    <>
      <section className="h-[80vh] md:h-[90vh] py-4 pb-24 px-8 md:px-18 lg:px-20 xl:px-24 z-20 min-h-[28rem] bg-white">
        <div className="py-6 w-[100%] lg:w-[60%]">
          <h3 className="module-h3 text-[#333333] mb-5 text-2xl font-bolder">
            Select the correct sound.
          </h3>

          <span className="ml-0 mb-8 text-stone-800 hover:text-blue-600 active:text-blue-500 inline-block w-auto p-[0.2rem] px-3 pr-6 text-3xl cursor-pointer border-b-[0.18rem] border-dotted border-[#282828] transition-all duration-100">
            <FontAwesomeIcon icon={faVolumeUp} className="cursor-pointer" />
          </span>

          <div className="flex flex-row mb-12 flex-wrap gap-x-2 gap-y-4">
            <MultipleChoice options={alphabet} />
          </div>

          {/* <div className="flex flex-row mb-12 flex-wrap gap-x-2 gap-y-4">
            {alphabet.map((letter) => (
              <div className="flex-1 basis-[40%]" key={letter.name}>
                <ActionButton classNames="min-w-[100%] h-[6rem] max-w-[40%] text-2xl sm:text-xl">
                  {letter.name}
                </ActionButton>
              </div>
            ))}
          </div> */}

          <div className="flex flex-row">
            <ActiveButton
              classNames="w-[100%] md:w-[100%] mx-auto text-[1.1rem]"
              onClick={changeShowResult}
            >
              Check Answer
            </ActiveButton>
          </div>
        </div>

        {showResult && <Result />}
      </section>
    </>
  );
};

export default Exercise;
