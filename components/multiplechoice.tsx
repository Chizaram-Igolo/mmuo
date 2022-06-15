/**
 * React imports.
 */
import { useState } from "react";

/**
 * Developer-defined UI components/hooks/constants.
 */
import { IOption } from "@helpers/interfaces";
import OptionButton from "@Buttons/OptionButton";

interface IMultipleChoice {
  options: IOption[];
}

const MultipleChoice: React.FC<IMultipleChoice> = ({ options }) => {
  const [selected, setSelected] = useState([false, false, false, false]);

  function changeSelected(e: React.MouseEvent<HTMLDivElement>, id: number) {
    const selState = Array(4).fill(false);

    selState[id] = true;
    setSelected(selState);
  }

  return (
    <>
      {options.map((option, id) => (
        <div
          className="flex-1 basis-[40%]"
          onClick={(e) => changeSelected(e, id)}
          key={option.name + id}
        >
          <OptionButton
            classNames={`min-w-[100%] h-[6rem] max-w-[40%] text-2xl 
                         sm:text-xl transition-all duration-[20ms] ${
                           selected[id]
                             ? "bg-blue-100 border-blue-500 text-blue-800 " +
                               "shadow-[0px_1px_0px_rgb(0,54,153)]"
                             : ""
                         }`}
          >
            {option.name}
          </OptionButton>
        </div>
      ))}
    </>
  );
};

export default MultipleChoice;
