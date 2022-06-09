/**
 * React imports.
 */
import Image from "next/image";

/**
 * Image assets.
 */
import googleLogo from "@public/google-logo.svg";
import githubLogo from "@public/github-logo.svg";

interface ISocialAuthButton {
  type: string;
  label: string;
}

const SocialAuthButton: React.FC<ISocialAuthButton> = ({ type, label }) => {
  return (
    <a
      href="#"
      className="flex w-full sm:w-[80%] md:w-full xl:w-[100%] 
                       items-center justify-center self-center bg-white 
                       mb-2 border border-[#c0c2d3] rounded-lg 
                       shadow-[0_4px_0_rgb(222,225,231)] 
                       hover:shadow-[0_2px_0_rgb(222,225,231)] box-border 
                       text-[#000824] font-medium py-2 px-6 transition-all 
                       duration-200"
    >
      {type.toLowerCase() === "google" && (
        <>
          <Image src={googleLogo} alt="Google Logo" />
          &nbsp; {label}
        </>
      )}

      {type.toLowerCase() === "facebook" && (
        <>
          <Image src={githubLogo} alt="Facebook Logo" />
          &nbsp; {label}
        </>
      )}
    </a>
  );
};

export default SocialAuthButton;
