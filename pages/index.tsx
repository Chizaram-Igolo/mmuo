import dynamic from "next/dynamic";
import { useState } from "react";

/**
 * Developer-defined UI components/hooks/constants.
 */
import Layout from "@components/Layouts/layout";
import SignInForm from "@Registration/SigninForm";
const AnimatedBackground = dynamic(
  () => import("@components/AnimatedBackground")
);

import H1 from "@TextComponents/H1";
import Para from "@TextComponents/Para";
import Link from "next/link";

const FormHeader = dynamic(() => import("@Registration/FormHeader"));
import FormFooter from "@Registration/FormFooter";
import AuthButtonSection from "@Registration/AuthButtonSection";

export default function Home() {
  const [error, setError] = useState("");

  return (
    <>
      <div className="hidden md:block">
        <AnimatedBackground />
      </div>

      <section className="px-5 sm:px-8 md:px-18 lg:px-20 xl:px-24 z-20">
        <div className="flex flex-col md:flex-row">
          <div
            className="md:flex-1 lg:flex-[1.3] xl:flex-[1.6] mt-8 mb-8 
                       md:mr-12 lg:mr-16 z-20"
          >
            <div className="mb-2 pt-4">
              <H1>Language learning made easy and fun.</H1>

              <Para
                className="text-base md:text-xl leading-normal md:leading-[1.6] text-zinc-600 
                           mt-6"
              >
                Learn any language you want at your own pace in a fun and
                interactive way.
              </Para>

              {/* Mobile Signin form */}
              <div className="md:hidden">
                {error && <FormHeader error={error} />}
              </div>

              <div className="md:hidden">
                <AuthButtonSection />
              </div>

              <div className="md:hidden">
                <FormFooter
                  setError={setError}
                  authText={
                    <Link href="/auth/signup">
                      <a className="underline underline-offset-4 decoration-1">
                        New here? Sign up for Mmuo.
                      </a>
                    </Link>
                  }
                />
              </div>
              {/* End of Mobile Signin form */}
            </div>
          </div>

          <div className="flex-1 z-20">
            <div
              className="relative text-[#080b2d] 
                         md:ml-8 lg:ml-12 hidden md:block bg-white  
                         py-8 px-2 md:px-8 xl:px-9 rounded-b-md
                         sm:shadow-[0_5px_5px_0px_rgba(0,8,36,0.2)]"
            >
              <SignInForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
