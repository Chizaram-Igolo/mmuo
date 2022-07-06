import { ReactElement } from "react";

import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import { useRouter } from "next/router";

import AnswerButton from "@Buttons/AnswerButton";
import MultipleChoice from "@components/MultipleChoice";
import Result from "@components/result";

import Layout from "@components/Layouts/layout";
import { questions } from "@components/questions/alpha";

export default function Exercise() {
  const [showResult, setShowResult] = useState(false);

  const router = useRouter();
  const { exerciseId } = router.query;
  const questionId = parseInt(exerciseId as string);

  function changeShowResult() {
    setShowResult((val) => !val);
  }

  function hideResult() {
    setShowResult(false);
  }

  return (
    <>
      <section
        className="h-[80vh] md:h-[90vh] py-4 pb-24 px-8 md:px-18 lg:px-20 
                   xl:px-24 z-20 min-h-[28rem] bg-white"
      >
        <div className="py-6 w-[100%] lg:w-[60%]">
          <h3 className="module-h3 text-[#333333] mb-5 text-2xl font-bolder">
            Select the correct sound.
          </h3>

          <span className="ml-0 mb-8 text-stone-800 hover:text-blue-600 active:text-blue-500 inline-block w-auto p-[0.2rem] px-3 pr-6 text-3xl cursor-pointer border-b-[0.18rem] border-dotted border-[#282828] transition-all duration-100">
            <FontAwesomeIcon icon={faVolumeUp} className="cursor-pointer" />
          </span>

          <div className="flex flex-row mb-12 flex-wrap gap-x-2 gap-y-4">
            {exerciseId && (
              <MultipleChoice options={questions[questionId - 1]} />
            )}
          </div>

          <div className="flex flex-row">
            <AnswerButton
              classNames="w-[100%] md:w-[100%] mx-auto text-[1.1rem]"
              onClick={changeShowResult}
            >
              Check Answer
            </AnswerButton>
          </div>
        </div>

        {showResult && (
          <Result
            hideResult={hideResult}
            currentExerciseId={questionId}
            totalNoExercise={questions.length}
          />
        )}
      </section>
    </>
  );
}

Exercise.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
