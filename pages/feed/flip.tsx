/**
 * React imports.
 */
import { useRouter } from "next/router";
import Script from "next/script";
import type { ReactElement } from "react";

/**
 * Developer-defined UI components/hooks/constants.
 */
import Layout from "@Layouts/layout";
import styles from "./flip.module.css";

interface IFlip {
  options: string[];
}

const Flip: React.FC<IFlip> = ({ options }) => {
  const router = useRouter();

  const words = ["Marc", "horse", "speak", "woman", "I", "American", "An"];

  return (
    <>
      <div className="py-6 w-[100%] lg:w-[60%]">
        <div>
          <div
            className={`wrapper m-0 py-12 px-4 flex flex-col grow-0 shrink-0 
                        basis-full items-center justify-center bg-transparent`}
          >
            <div
              className={`words flex flex-col p-8 border border-[#596265] 
                          rounded-2xl w-[350px] max-w-full`}
            >
              <div
                className={`destination ${styles["flip-destination"]} min-h-[100px] mt-0 mb-16 mx-0 flex flex-row flex-wrap items-start content-start`}
              ></div>

              <div
                className={`origin my-0 mx-auto flex flex-row flex-wrap 
                            justify-center items-start max-w-[275px]`}
              >
                {options.map((option, optionIdx) => (
                  <div
                    className={`btn-container mt-0 mb-[0.25rem] mx-[0.125rem] 
                                pb-[0.125rem] flex flex-col justify-start 
                                rounded-lg bg-[#596265] box-content 
                                duration-[250] ease-in`}
                    key={optionIdx}
                  >
                    <button
                      className={`word ${styles["flip-word"]} mt-0 mb-[0.5rem] mx-[0.125rem]`}
                    >
                      {option}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Script src="/quest.js" strategy="lazyOnload"></Script>
    </>
  );
};

export default Flip;
