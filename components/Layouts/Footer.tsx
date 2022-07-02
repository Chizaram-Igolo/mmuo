import { FIRST_YEAR_OF_PUBLICATION } from "@utils/constants";

export default function Footer() {
  let currYear = new Date().getFullYear();

  return (
    <div className="w-full absolute bottom-100 mb-5 p-8 md:px-16">
      <div className="flex items-center justify-between py-0">
        <div>
          <p className="mt-0 text-sm md:text-base font-medium leading-6">
            &copy;
            {new Date().getFullYear() > FIRST_YEAR_OF_PUBLICATION
              ? `${FIRST_YEAR_OF_PUBLICATION} - ${currYear}`
              : `${currYear}`}
            &nbsp;Mmuo, Dibia Inc. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
