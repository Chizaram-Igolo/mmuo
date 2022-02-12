import Link from "next/link";
import { useRouter } from "next/router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface ISideBarLink {
  to: string;
  title: string;
  icon: IconDefinition;
  shouldHideNavText: boolean;
}

function SideBarLink({ to, title, icon, shouldHideNavText }: ISideBarLink) {
  const router = useRouter();

  return (
    <li
      className={`border-l-4 h-[42px] ${
        router.pathname === to ? "border-gray-800" : "border-transparent"
      }`}
    >
      <Link href={to}>
        <a className={`w-[100%] inline-block flex p-[6px] px-4`}>
          <span className={`basis-[15%] text-[1.2rem] text-gray-800`}>
            <FontAwesomeIcon icon={icon} />
          </span>

          <span
            className={`basis-[85%] inline-block pb-4 pr-[10px] pl-[10px]
              ${shouldHideNavText === true ? "hidden" : ""}
            `}
          >
            {title}
          </span>
        </a>
      </Link>
    </li>
  );
}

export default SideBarLink;
