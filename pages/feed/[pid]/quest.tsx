/**
 * React imports.
 */
import Link from "next/link";
import { useRouter } from "next/router";
import type { ReactElement } from "react";
import { useState, useEffect } from "react";

/**
 * Developer-defined UI components/hooks/constants.
 */
import Layout from "@Layouts/layout";
import InfoTip from "@components/infotip";
import GoBackButton from "@Buttons/GoBackButton";
import ActionButtonB from "@Buttons/ActionButtonB";

import { collection, getDocs, query, where, limit } from "firebase/firestore";
import { projectFirestore } from "@firebase/config";
import LoadingScreen from "@Loaders/LoadingScreen";
import AnswerButton from "@components/Buttons/AnswerButton";
import ActionButtonA from "@components/Buttons/ActionButtonA";

interface IQuestion {
  id: string;
  question: string;
  options: string[];
  type: string;
  answer: string;
}

export default function Tips() {
  const router = useRouter();

  const [showResult, setShowResult] = useState(false);

  const [questions, setQuestions] = useState<IQuestion[]>([]);

  function changeShowResult() {
    setShowResult((val) => !val);
  }

  useEffect(() => {
    const docs: IQuestion[] = [];

    async function fetchLessonIntro() {
      const lessonQuery = query(
        collection(projectFirestore, `lessons/${router.query.docId}/levels`),
        where("level", "==", "1")
      );

      const levelSnapshot = await getDocs(lessonQuery);

      if (levelSnapshot.empty) return;

      const questionsQuery = query(
        collection(
          projectFirestore,
          `lessons/${router.query.docId}/levels/${levelSnapshot.docs[0].id}/questions`
        )
      );

      const questionsSnapshot = await getDocs(questionsQuery);

      if (questionsSnapshot.empty) return;

      questionsSnapshot.forEach((doc) => {
        const { question, options, type, answer } = doc.data();

        docs.push({
          id: doc.id,
          question,
          options,
          type,
          answer,
        });
      });

      // @ts-ignore
      setQuestions(docs);
    }

    fetchLessonIntro();
  }, [router.query.docId]);

  return (
    <>
      <section
        className="py-4 pb-24 px-8 md:px-18 lg:px-20 xl:px-24 
                    z-20 min-h-[28rem] bg-white"
      >
        <div className="mx-auto py-6 w-[100%] lg:w-[60%]">
          {!questions && <LoadingScreen />}

          {questions.length > 0 && (
            <>
              {questions[0].type === "select-words-translate" &&
                questions[0].question.split(" ").map((word, idx) => (
                  <>
                    <span
                      key={idx}
                      className="text-xl underline underline-offset-[8px] 
                             decoration-dotted decoration-2 decoration-slate-400 
                             cursor-pointer"
                    >
                      {word}
                    </span>
                    {idx < questions[0].question.split(" ").length - 1 && " "}
                  </>
                ))}

              <div className="flex flex-column mt-64">
                <AnswerButton
                  classNames="w-[100%] md:w-[100%] mx-auto text-[1.1rem]"
                  onClick={changeShowResult}
                >
                  Check Answer
                </AnswerButton>

                {/* <a className="cursor-pointer w-full">
                  <ActionButtonA size="lg">Check Answer</ActionButtonA>
                </a> */}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}

Tips.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
