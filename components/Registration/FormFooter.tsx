/**
 * React imports.
 */
import Link from "next/link";

/**
 * Developer-defined UI components/hooks/constants.
 */
import SocialAuthButton from "@Buttons/SocialAuthButton";

interface IFormFooter {
  authText: string;
  authRoute: string;
  termsText?: string;
  termsHyperLinkText?: string;
  termsRoute?: string;
}

const FormFooter: React.FC<IFormFooter> = ({
  authText,
  authRoute,
  termsText,
  termsRoute,
}) => {
  return (
    <>
      <div>
        <p
          className="relative text-center text-[#535772] text-sm leading-6 
                     my-6 mx-0 
                     before:block before:content-[''] before:w-1/4 
                     before:h-[1px] before:absolute before:top-1/2 
                     before:bg-[#c0c2d3] 
                     after:block after:content-[''] after:w-1/4 after:h-[1px]
                     after:absolute after:top-1/2 after:right-0 
                     after:bg-[#c0c2d3]"
        >
          or sign in with
        </p>
        <div
          className="flex flex-col gap-2 lg:gap-0 xl:gap-4 sm:flex-row 
                     md:flex-col xl:flex-row justify-between"
        >
          <SocialAuthButton type="Google" label="Google" />
          <SocialAuthButton type="Facebook" label="Facebook" />
        </div>
      </div>
      {termsText && termsRoute && (
        <p
          className="text-[#535772] text-[0.875rem] leading-6 mt-4 mb-0 mx-0 
                 text-center"
        >
          <a href={termsRoute} title="Terms of Service">
            {termsText}
          </a>
        </p>
      )}
      <hr className="mt-5" />
      <p
        className="text-slate-700 underline underline-offset-4 decoration-1 
                    text-[0.875rem] leading-6 mt-4 mb-0 mx-0 text-center"
      >
        <Link href={authRoute}>
          <a href="" title="Terms of Service">
            {authText}
          </a>
        </Link>
      </p>
    </>
  );
};

export default FormFooter;
