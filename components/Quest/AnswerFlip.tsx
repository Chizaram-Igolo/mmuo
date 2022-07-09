/**
 * React imports.
 */
import { useRouter } from "next/router";
import Script from "next/script";

import styles from "./AnswerFlip.module.css";
import OptionButton from "./OptionButton";

interface IFlip {
  options: string[];
}

const AnswerFlip: React.FC<IFlip> = ({ options }) => {
  const router = useRouter();

  const words = ["Marc", "horse", "speak", "woman", "I", "American", "An"];

  return (
    <>
      <div
        className={`wrapper m-0 py-8 px-0 flex flex-col grow-0 shrink-0 
                    basis-full items-center justify-center bg-transparent text-lg`}
      >
        <div
          className={`words flex flex-col p-8 px-0 border-[#596265] 
                      rounded-2xl w-full max-w-full`}
        >
          <div
            className={`destination ${styles["flip-destination"]} min-h-[100px] md:min-h-[50px] 
                        mt-0 mb-16 mx-0 flex flex-row flex-wrap items-start 
                        content-start bg-gradient-to-br`}
          ></div>

          <div
            className={`origin my-0 mx-auto flex flex-row flex-wrap 
                             justify-center items-start max-w-full`}
          >
            {options.map((option, optionIdx) => (
              <div
                className={`btn-container h-[42px] mt-0 mb-[0.25rem] mx-[1px] 
                            pb-[0.25rem] flex flex-col justify-start 
                            rounded-lg bg-[#ddd] box-content 
                            duration-[250] ease-in`}
                key={optionIdx}
              >
                {/* <button
                  className={`word appearance-none none mt-0 mb-[0.25rem] 
                              mx-[0.125rem] p-2 bg-white border 
                              border-[#596265] rounded-lg cursor-pointer 
                              select-none text-inherit`}
                >
                  {option}
                </button> */}
                <OptionButton>{option}</OptionButton>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Script src="/quest.js" strategy="lazyOnload"></Script>
    </>
  );
};

export default AnswerFlip;
