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

import { collection, getDocs, query, where, limit } from "firebase/firestore";
import { projectFirestore } from "@firebase/config";
import AnswerButton from "@components/Buttons/AnswerButton";
import ActionButtonA from "@components/Buttons/ActionButtonA";
import { useAuth } from "@contexts/AuthContext";
import LessonLoader from "@Loaders/LessonLoader";
import FeedLoader from "@Loaders/FeedLoader";
import Flip from "../flip";
import AnswerFlip from "@components/Quest/AnswerFlip";

interface IQuestion {
  id: string;
  question: string;
  options: string[];
  type: string;
  answer: string;
}

export default function Quest() {
  const { user, loading } = useAuth();

  const [notSaved] = useState(true);

  const router = useRouter();

  const [showResult, setShowResult] = useState(false);

  const [questions, setQuestions] = useState<IQuestion[]>([]);

  function changeShowResult() {
    setShowResult((val) => !val);
  }

  function moveToNext() {
    const questionsClone = [...questions.slice(1)];
    setQuestions(questionsClone);
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

        // console.log(doc.data());

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

  useEffect(() => {
    const confirmationMessage = "Changes you made may not be saved.";
    const beforeUnloadHandler = (e: BeforeUnloadEvent) => {
      (e || window.event).returnValue = confirmationMessage;
      return confirmationMessage; // Gecko + Webkit, Safari, Chrome etc.
    };
    const beforeRouteHandler = (url: string) => {
      console.log("not at all");
      if (router.pathname !== url && !confirm(confirmationMessage)) {
        // to inform NProgress or something ...
        router.events.emit("routeChangeError");
        // tslint:disable-next-line: no-string-throw
        throw `Route change to "${url}" was aborted (this error can be safely ignored). See https://github.com/zeit/next.js/issues/2476.`;
      }
    };
    if (notSaved) {
      window.addEventListener("beforeunload", beforeUnloadHandler);
      router.events.on("routeChangeStart", beforeRouteHandler);
    } else {
      window.removeEventListener("beforeunload", beforeUnloadHandler);
      router.events.off("routeChangeStart", beforeRouteHandler);
    }
    return () => {
      window.removeEventListener("beforeunload", beforeUnloadHandler);
      router.events.off("routeChangeStart", beforeRouteHandler);
    };
  }, [notSaved, router.events, router.pathname]);

  return (
    <>
      <section
        className="py-4 pb-24 px-8 md:px-18 lg:px-20 xl:px-24 
                    z-20 min-h-[28rem] bg-white"
      >
        <div className="mx-auto py-6 w-[100%] lg:w-[60%]">
          {(!questions || questions.length === 0) && <LessonLoader />}

          {questions.length > 0 && (
            <>
              {questions[0].type === "select-words-translate" && (
                <>
                  <p className="mt-0 space-x-2">
                    {questions[0].question.split(" ").map((word, wordIdx) => (
                      <>
                        <span
                          key={wordIdx}
                          className="text-xl underline underline-offset-[8px] 
                             decoration-dotted decoration-2 decoration-slate-400 
                             cursor-pointer"
                        >
                          {word}
                        </span>
                      </>
                    ))}
                  </p>

                  <AnswerFlip options={questions[0].options} />

                  {/* <div className="mt-0">
                    {questions[0].options.map((option, optionIdx) => (
                      <span
                        className="px-4 py-4 border rounded-lg mr-4 last:mr-0 
                                   cursor-pointer"
                        key={optionIdx}
                      >
                        {option}
                      </span>
                    ))}
                  </div> */}
                </>
              )}

              <div className="flex flex-column mt-4">
                <a className="cursor-pointer w-full">
                  <ActionButtonA size="lg" onClick={moveToNext}>
                    Check Answer
                  </ActionButtonA>
                </a>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}

Quest.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
