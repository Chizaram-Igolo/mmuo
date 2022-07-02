/**
 * React imports.
 */
import Image from "next/image";
import { ReactElement } from "react";

/**
 * Developer-defined UI components/hooks/constants.
 */
import Layout from "@components/Layouts/layout";
import SignInForm from "@Registration/SigninForm";
import AnimatedBackground from "@components/AnimatedBackground";

export default function Home() {
  return (
    <>
      <AnimatedBackground />

      <section className="py-4 px-8 md:px-18 lg:px-20 xl:px-24 z-20">
        <div className="flex flex-col md:flex-row mb-8">
          <div
            className="md:flex-1 lg:flex-[1.4] xl:flex-[1.6] mt-8 mb-8 
                       md:mr-12 lg:mr-16 z-20"
          >
            <div className="mb-24">
              <h1>
                Language learning made easy and fun. <br />
              </h1>
              <p className="leading-text mt-8">
                Learn any language you want at your own pace in a fun and
                interactive way.
              </p>
            </div>
          </div>
          <div className="flex-1 z-20">
            <div
              className="relative bg-white rounded-lg text-[#080b2d] 
                         py-[3.5rem] px-12 
                         shadow-[0_5px_5px_-2px_rgba(0,8,36,0.2)]"
            >
              <SignInForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
