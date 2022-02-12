import Link from "next/link";
import React from "react";

import SideBarLink from "./sidebarlink";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faArrowRight,
  faArrowLeft,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

import {
  BookmarkAltIcon,
  ChartBarIcon,
  CursorClickIcon,
  BellIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";

import styles from "./sidebar.module.css";
import { useAuth } from "../../contexts/AuthContext";
import useGetModuleList from "../../helpers/hooks/useGetModuleList";
import Image from "next/image";

interface ISideBar {
  width: number;
  shouldHideNavText: boolean;
  expandIcon: string;
  handleChangeWidth: () => void;
}

export default function SideBar(props: ISideBar) {
  const { user } = useAuth();

  const { docs, error, loading, latestDoc } = useGetModuleList();

  //   console.log(docs, error, loading, latestDoc);

  const { shouldHideNavText, expandIcon } = props;

  function handleChangeWidth() {
    props.handleChangeWidth();
  }

  const routes = [
    {
      to: "/cms",
      label: "Modules",
      icon: faBox,
      childList: docs,
    },
    { to: "/settings", label: "Settings", icon: faGear },
  ];

  return (
    <nav
      className={`${styles["sidebar"]} bg-white border-r-2 border-stone-200 z-50`}
      id="navBar"
      style={{ width: props.width }}
    >
      <div className="w-[100%] flex h-[50px] pl-[10px] mb-[22px] bg-slate-900 text-white">
        {/* <div>
          <h2 className="h-[50px] p-1">
            <Link href="/cms">
              <a className={`${styles["icon-link-item"]}`}>m</a>
            </Link>
          </h2>
        </div> */}

        <div>
          {user && (
            <>
              <div className="pt-2 border-gray-400">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    {user.photoURL && (
                      <Image
                        src={user.photoURL}
                        alt="Profile Picture"
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                    )}
                    {!user.photoURL && user.displayName && (
                      <div className="inline-block h-8 w-8 text-center bg-slate-800 rounded-full">
                        {user && "displayName" in user && (
                          <span className="text-white leading-8">
                            {user.displayName[0].toUpperCase()}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  {!shouldHideNavText && (
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none">
                        {user.displayName.length > 18
                          ? user.displayName.slice(0, 18) + "..."
                          : user.displayName}
                      </div>
                      <div className="text-sm font-medium leading-none">
                        {user.email.length > 20
                          ? user.email.slice(0, 20) + "..."
                          : user.email}
                        {/* {user.email} */}
                      </div>
                    </div>
                  )}
                </div>
                <div className="mt-3 px-2 space-y-1 text-left">
                  {/* {userNavigation.map((item) => (
                    <Link href={item.route} key={item.name}>
                      <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-slate-200">
                        {item.name}
                      </a>
                    </Link>
                  ))} */}
                  {/* <span
                    className={classNames(
                      "block px-3 py-2 text-base text-gray-700 cursor-pointer"
                    )}
                    onClick={handleSignout}
                  >
                    Sign out
                  </span> */}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <div>
        <ul>
          {routes.map((item) => {
            return (
              <SideBarLink
                to={item.to}
                icon={item.icon}
                title={item.label}
                shouldHideNavText={shouldHideNavText}
                key={item.label}
                childList={item.childList}
              />
            );
          })}
        </ul>

        <div className="absolute w-[100%] bottom-5">
          <ul>
            <li>
              <span
                className="inline-block h-[42px] w-[100%] py-0.5 px-5 bg-transparent cursor-pointer text-[1.4rem]"
                onClick={handleChangeWidth}
              >
                {expandIcon === "left" && (
                  <FontAwesomeIcon icon={faArrowLeft} />
                )}

                {expandIcon === "right" && (
                  <FontAwesomeIcon icon={faArrowRight} />
                )}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
