/**
 * React imports.
 */
import { useRouter } from "next/router";
import { useRef } from "react";

/**
 * Developer-defined UI components/hooks/constants.
 */
import { useDetectOutsideClick } from "@helpers/hooks/useDetectOutsideClick";
import ActionButtonA from "@Buttons/ActionButtonA";

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks
 */
export default function Dropdown({
  children,
  classNames,
  isAlpha,
  isGroup,
  langCode,
  docId,
  isUnlocked,
}) {
  const router = useRouter();

  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);

  const onClick = () => {
    if (isUnlocked) setIsActive(!isActive);
  };

  const navigateToIntro = () => {
    router.push({ pathname: `/feed/${langCode}/tips`, query: { docId } });
  };

  const navigateToQuest = () => {
    if (isAlpha) router.push({ pathname: `/feed/${langCode}/alpha` });
    else router.push({ pathname: `/feed/${langCode}/quest`, query: { docId } });
  };

  let classNamesStr = classNames ? classNames : "";
  let actionText = isAlpha ? "Go to Alphabet" : "Get Started";
  let positionObj = isGroup
    ? { marginTop: "-1.6rem", marginLeft: "-1rem" }
    : {};

  return (
    <div className={`relative md:w-fit ${classNamesStr}`}>
      <div className="relative" ref={dropdownRef}>
        <div
          onClick={onClick}
          className="cursor-pointer border-none transition-shadow 
                     duration-[400] ease-in"
        >
          {children}
        </div>
        <nav
          className={`absolute w-[300px] top-[100px] left-[16px] md:left-[30px] min-h-[140px] 
                      max-h-[140px] bg-white rounded-lg 
                      shadow-[0_1px_8px_rgba(0,0,0,0.3)]  
                      transition-all ease duration-[400ms]
                      z-[50] ${
                        isActive
                          ? "opacity-100 visible -translate-y-0"
                          : " opacity-0 invisible -translate-y-5"
                      }`}
          style={positionObj}
        >
          <div
            className="absolute bottom-[calc(95%-3px)] left-[8%] w-5 h-5 -ml-[5px] bg-white
                       border-solid rotate-45 
                       shadow-[-1px_-1px_0px_0px_rgba(0,0,0,0.1)]"
          ></div>
          <ul className="text-center">
            <li className="border-b border-b-[#dddddd] font-WorkSans_SemiBold">
              <a
                onClick={navigateToIntro}
                className="block text-[#222222] pt-[14px] pb-[15px] px-[20px] text-[1.1rem]"
              >
                <span
                  className="inline-block border-b-[0.15rem] border-dotted border-[#282828] 
                             cursor-pointer px-3"
                >
                  Read Tips
                </span>
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer block pt-[14px] pb-[15px] px-[20px] text-[1.1rem]"
                onClick={navigateToQuest}
              >
                <ActionButtonA size="lg">{actionText}</ActionButtonA>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
