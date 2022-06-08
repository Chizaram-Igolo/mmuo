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
  BookmarkAltIcon,
  ChartBarIcon,
  CursorClickIcon,
  BellIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  SupportIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";

/**
 * Context provider containing application-wide state.
 */
import { useAuth } from "@contexts/AuthContext";

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
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  // {
  //   name: "Integrations",
  //   description: "Connect with third-party tools that you're already using.",
  //   href: "#",
  //   icon: ViewGridIcon,
  // },
  // {
  //   name: "Automations",
  //   description:
  //     "Build strategic funnels that will drive your customers to convert",
  //   href: "#",
  //   icon: RefreshIcon,
  // },
];
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];
const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: SupportIcon,
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BookmarkAltIcon,
  },
  // {
  //   name: "Security",
  //   description: "Understand how we take your privacy seriously.",
  //   href: "#",
  //   icon: ShieldCheckIcon,
  // },
];
const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
  },
  { id: 3, name: "Improve your customer experience", href: "#" },
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
      setError("failed to log out");
    }
  }

  const userNavigation = [
    { name: "Learn", route: "/feed" },
    { name: "Your Profile", route: "/profile" },
    { name: "Settings", route: "/settings" },
  ];

  return (
    <Popover className="sticky top-0 bg-white border-b-2 border-gray-100 z-50">
      <div className="mx-auto px-8 md:px-8 lg:px-20 xl:px-24">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a>
                <span className="sr-only">Workflow</span>
                {/* <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              /> */}
                <h2 className="text-gray-900">mmūō</h2>
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-0 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            {/* <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-600",
                      "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
                    )}
                  >
                    <span>Solutions</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-00",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <item.icon
                                className="flex-shrink-0 h-6 w-6 text-green-600"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                              >
                                <item.icon
                                  className="flex-shrink-0 h-6 w-6 text-gray-400"
                                  aria-hidden="true"
                                />
                                <span className="ml-3">{item.name}</span>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover> */}

            {/* <a
              href="#"
              className="text-base font-medium text-gray-600 hover:text-gray-900"
            >
              Pricing
            </a> */}

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-600",
                      "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
                    )}
                  >
                    <span>More</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-500",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <item.icon
                                className="flex-shrink-0 h-6 w-6 text-green-600"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                          <div>
                            <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                              Recent Posts
                            </h3>
                            <ul role="list" className="mt-4 space-y-4">
                              {recentPosts.map((post) => (
                                <li
                                  key={post.id}
                                  className="text-base truncate"
                                >
                                  <a
                                    href={post.href}
                                    className="font-medium text-gray-900 hover:text-gray-700"
                                  >
                                    {post.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-5 text-sm">
                            <a
                              href="#"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              {" "}
                              View all posts{" "}
                              <span aria-hidden="true">&rarr;</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            {!user && (
              <>
                <Link href="/signin">
                  <a
                    href="#"
                    className="whitespace-nowrap text-base font-medium px-4 py-2 border border-slate-200 rounded-md text-gray-500 hover:text-gray-900"
                  >
                    Sign in
                  </a>
                </Link>
                <Link href="/signup">
                  <a className="ml-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700">
                    Sign up
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
                {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
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
