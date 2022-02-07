import { useState } from "react";
import Loader from "./loader";

interface IActionButton {
  classNames?: string;
}

const ActionButton: React.FC<IActionButton> = ({ children, classNames }) => {
  const [loading] = useState();

  let cNs = "";

  if (classNames) {
    cNs = classNames;
  }

  return (
    <button
      disabled={loading}
      id="form_button_test_variant"
      type="submit"
      className={`css-swdcx8 e7kuofc5 w-full flex items-center bg-blue-100 border border-[#003f99] rounded-lg text-[#003f99] transition-all duration-[100ms] ${cNs} ${
        loading
          ? "cursor-default shadow-[0px_4px_0px_rgb(120,124,183)]"
          : "cursor-pointer shadow-[0px_4px_0px_rgb(0,54,153)] active:shadow-[0px_1px_0px_rgb(0,54,153)]"
      } cursor-pointer text-base font-semibold justify-center py-[0.55rem] px-[1.5rem]`}
    >
      {loading ? <Loader /> : children}
    </button>
  );
};

export default ActionButton;
