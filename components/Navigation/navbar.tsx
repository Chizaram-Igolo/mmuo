/**
 * React imports.
 */
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { Fragment, useState } from "react";

/**
 * Vendor-defined UI components/hooks/utilities/etc.
 */
import { Popover, Transition, Menu } from "@headlessui/react";
import {
  ChartBarIcon,
  CursorClickIcon,
  BellIcon,
  XIcon,
} from "@heroicons/react/outline";

/**
 * Context provider containing application-wide state.
 */
import { useAuth } from "@contexts/AuthContext";

/**
 * Developer-defined UI components/hooks/constants.
 */
import NavTitle from "./NavTitle";
import NavMenu from "./NavMenu";
import HamburgerButton from "./HamburgerButton";
import ActionButtonA from "@Buttons/ActionbuttonA";

const solutions = [
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorClickIcon,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  const [error, setError] = useState("");
  const { user, signout } = useAuth();

  const router = useRouter();

  async function handleSignout() {
    setError("");

    try {
      await signout();
      router.push("/");
    } catch {
      setError("Failed to log out");
    }
  }

  const userNavigation = [
    { name: "Learn", route: "/feed" },
    { name: "Your Profile", route: "/profile" },
    { name: "Settings", route: "/settings" },
  ];

  return (
    <Popover
      className="sticky top-0 bg-white border-b-2 border-gray-100 
                 z-50"
    >
      <div className="mx-auto px-8 md:px-8 lg:px-20 xl:px-24">
        <div
          className="flex justify-between items-center py-2 
                     md:justify-start md:space-x-10"
        >
          <NavTitle />

          {/* Mobile Hamburger Button */}
          <HamburgerButton />

          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <NavMenu />
          </Popover.Group>

          <div
            className="hidden md:flex items-center justify-end 
                       md:flex-1 lg:w-0"
          >
            {!user && (
              <>
                {/* <Link href="/signin">
                  <a
                    href="#"
                    className="whitespace-nowrap text-base font-medium 
                               px-4 py-2 border border-slate-200 rounded-md 
                             text-gray-500 hover:text-gray-900"
                  >
                    Sign in
                  </a>
                </Link> */}
                {/* <a
                  className="ml-4 whitespace-nowrap inline-flex 
                               items-center justify-center px-4 py-2 border 
                               border-transparent rounded-md shadow-sm 
                               text-base font-medium text-white 
                               bg-green-600 hover:bg-green-700"
                >
                  Sign up
                </a> */}
                <Link href="/auth/signin">
                  <a>
                    <ActionButtonA>Sign in</ActionButtonA>
                  </a>
                </Link>
                <Link href="/auth/signup" className="ml-8">
                  <a>
                    <ActionButtonA>Sign up</ActionButtonA>
                  </a>
                </Link>
              </>
            )}

            {user && (
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-0">
                  <button
                    type="button"
                    className="bg-transparent p-1 rounded-full text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-600 focus:ring-white"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}

                  <Menu as="div" className="ml-6 relative">
                    <div>
                      <Menu.Button className="max-w-xs bg-transparent rounded-full flex items-center text-sm focus:outline-none active:ring-2 active:ring-offset-2 active:ring-offset-gray-800 active:ring-white">
                        <span className="sr-only">Open user menu</span>
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
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <Link href={item.route}>
                                <a
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-base text-gray-700"
                                  )}
                                >
                                  {item.name}
                                </a>
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                        <Menu.Item>
                          <span
                            className={classNames(
                              "block px-4 py-2 text-base text-gray-700 cursor-pointer"
                            )}
                            onClick={handleSignout}
                          >
                            Sign out
                          </span>
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  {/* <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  /> */}
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-0 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <item.icon
                        className="flex-shrink-0 h-6 w-6 text-green-600"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Pricing
                </a>

                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Docs
                </a>
              </div>
              <div>
                {!user && (
                  <>
                    <Link href="/signup">
                      <a
                        href="#"
                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700"
                      >
                        Sign up
                      </a>
                    </Link>

                    <Link href="/signin" passHref>
                      <p className="mt-6 text-center text-base font-medium text-gray-500">
                        Existing customer?{" "}
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-500"
                        >
                          Sign in
                        </a>
                      </p>
                    </Link>
                  </>
                )}

                {user && (
                  <>
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3"></div>
                    <div className="pt-4 pb-3 border-t-[2px] border-gray-400">
                      <div className="flex items-center px-5">
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
                        <div className="ml-3">
                          <div className="text-base font-medium leading-none">
                            {user.displayName}
                          </div>
                          <div className="text-sm font-medium leading-none">
                            {user.email}
                          </div>
                        </div>
                        <button
                          type="button"
                          className="ml-auto bg-transparent flex-shrink-0 p-1 rounded-full text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-600 focus:ring-white"
                        >
                          <span className="sr-only">View notifications</span>
                          <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                      <div className="mt-3 px-2 space-y-1 text-left">
                        {userNavigation.map((item) => (
                          <Link href={item.route} key={item.name}>
                            <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-slate-200">
                              {item.name}
                            </a>
                          </Link>
                        ))}
                        <span
                          className={classNames(
                            "block px-3 py-2 text-base text-gray-700 cursor-pointer"
                          )}
                          onClick={handleSignout}
                        >
                          Sign out
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
