/**
 * React imports.
 */
import { ReactElement } from "react";
import Image from "next/image";

/**
 * Developer-defined UI components/hooks/constants.
 */
import Layout from "@components/Layouts/layout";
import SignInForm from "@Registration/SigninForm";
import AnimatedBackground from "@components/AnimatedBackground";

/**
 * Image assets.
 */
import ear from "@public/images/ear.svg";
import lips from "@public/images/lips.svg";
import select from "@public/images/select.svg";
import text from "@public/images/text.svg";

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
            <div className="mb-2">
              <h1>
                Language learning made easy and fun. <br />
              </h1>
              <p className="leading-text mt-6">
                Learn any language you want at your own pace in a fun and
                interactive way.
              </p>

              <div className="flex pt-8 space-x-28">
                <div>
                  <Image src={ear} width={72} height={72} />
                </div>
                <div>
                  <Image src={lips} width={72} height={72} />
                </div>
                <div>
                  <Image src={select} width={72} height={72} />
                </div>
              </div>

              <div className="flex pt-6 space-x-28">
                <div>
                  <Image src={text} width={72} height={72} />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 z-20">
            <div
              className="relative rounded-lg text-[#080b2d] 
                         py-5 px-12 "
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
