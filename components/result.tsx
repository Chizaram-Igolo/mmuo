/**
 * React imports.
 */
import Link from "next/link";

/**
 * Developer-defined UI components/hooks/constants.
 */
import ActionButtonA from "@Buttons/ActionButtonA";

interface IResult {
  currentExerciseId: number;
  totalNoExercise: number;
  hideResult: () => void;
}

const Result: React.FC<IResult> = ({
  hideResult,
  currentExerciseId,
  totalNoExercise,
}) => {
  return (
    <div className="fixed left-0 right-0 bottom-0 w-[100%] h-32 border border-t-[#86efac] bg-[#b6efac] p-4 px-8 sm:px-6 md:px-24 z-20">
      <h3 className="module-h3 text-green-900 text-3xl">Correct!</h3>

      <div className="absolute right-8 sm:right-6 md:right-24">
        <Link href={`${"/exercise/"}${currentExerciseId + 1}`}>
          <a onClick={hideResult}>
            <ActionButtonA>Continue</ActionButtonA>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Result;
