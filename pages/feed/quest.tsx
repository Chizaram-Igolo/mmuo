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

interface IQuestion {
  id: string;
  question: string;
  options: string[];
  type: string;
  answer: string;
}

export default function Tips() {
  const router = useRouter();

  const [questions, setQuestions] = useState<IQuestion[]>([]);

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
        <div className="py-6 w-[100%] lg:w-[60%]">
          {!questions && <LoadingScreen />}

          {questions && questions[0].question}
        </div>
      </section>
    </>
  );
}

Tips.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
