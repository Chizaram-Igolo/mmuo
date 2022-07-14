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
import { BellIcon, XIcon } from "@heroicons/react/outline";

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
import NavAuthSection from "./NavAuthSection";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  const [error, setError] = useState("");
  const { user, userProfile, signout, loading } = useAuth();

  // let photoUrl: string = (user?.photoURL +
  //   "?height=500&access_token=" +
  //   user?.token) as string;
  // // user.updateProfile(photoUrl: photoUrl);

  // appAuth.updateProfile(user, {
  //   // @ts-ignore

  //   photoUrl: photoUrl,
  // });

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
      className={`sticky top-0 ${
        router.pathname === "/" || router.pathname.indexOf("auth") !== -1
          ? "shadow-[0_1px_2px_0px_rgba(0,8,36,0.2)]"
          : "border-b shadow-[0_1px_2px_0px_rgba(180,184,183,0.1)]"
      } border-slate-900/10 h-[60px] backdrop-blur-sm bg-white/90 
        supports-backdrop-blur:bg-white/90 z-[100]`}
    >
      <div className="h-full mx-auto px-5 md:px-8 lg:px-20 xl:px-24 z-[100]">
        <div
          className="flex justify-between items-center h-full 
                     md:justify-start md:space-x-10"
        >
          <NavTitle loading={loading} user={user} />

          {/* Mobile Hamburger Button */}
          <HamburgerButton />

          <div
            className="hidden md:flex items-center justify-end 
                       md:flex-1 lg:w-0"
          >
            <div className="relative">
              <Popover.Group
                as="nav"
                className="relative hidden md:flex mt-2 mr-8"
              >
                <NavMenu />
              </Popover.Group>
            </div>
            {!user && <NavAuthSection />}

            {user && (
              <div className="hidden md:block py-2">
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
                          <img
                            src={
                              user.providerData[0].providerId.indexOf(
                                "facebook"
                              ) === -1
                                ? user.photoURL
                                : userProfile
                                ? userProfile.photoURL
                                : user.photoURL
                            }
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
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <Link href={item.route}>
                                <a
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-6 py-3 text-base text-gray-700 hover:bg-gray-50"
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
                              "block px-6 py-3 text-base text-gray-700 cursor-pointer bg-gray-50 hover:bg-gray-100"
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
            </div>
            <div className="py-6 px-5 space-y-6">
              <div>
                {!user && (
                  <>
                    <Link href="/auth/signup">
                      <a
                        href="#"
                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700"
                      >
                        Sign up
                      </a>
                    </Link>

                    <Link href="/auth/signin" passHref>
                      <p className="mt-6 text-center text-base font-medium text-gray-500">
                        Already have an account?{" "}
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
                    {/* <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3"></div> */}
                    <div className="pt-0 pb-3 border-gray-400">
                      <div className="flex items-center px-5">
                        <div className="flex-shrink-0">
                          {user.photoURL && (
                            <img
                              src={
                                user.providerData[0].providerId.indexOf(
                                  "facebook"
                                ) === -1
                                  ? user.photoURL
                                  : userProfile
                                  ? userProfile.photoURL
                                  : user.photoURL
                              }
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
