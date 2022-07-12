/**
 * React imports.
 */
import Image from "next/image";

/**
 * Image assets.
 */
import googleLogo from "@public/images/google-logo.svg";
import githubLogo from "@public/images/github-logo.svg";

interface ISocialAuthButton {
  type: string;
  label: string;
  onClick?: () => void;
}

const SocialAuthButton: React.FC<ISocialAuthButton> = ({
  type,
  label,
  onClick,
}) => {
  return (
    <button
      type="button"
      className="flex w-full sm:w-[80%] md:w-full xl:w-[100%] 
                       items-center justify-center self-center bg-white 
                       mb-2 border border-[#c0c2d3] rounded-lg 
                       shadow-[0_4px_0_rgb(222,225,231)] 
                       hover:shadow-[0_2px_0_rgb(222,225,231)] box-border 
                       text-[#000824] font-medium py-2 px-2 transition-all 
                       duration-200"
      onClick={onClick}
    >
      {type.toLowerCase() === "google" && (
        <>
          <Image
            src={"/" + googleLogo.src}
            alt="Google Logo"
            width={24}
            height={24}
          />
          &nbsp; {label}
        </>
      )}

      {type.toLowerCase() === "facebook" && (
        <>
          <Image
            src={"/" + githubLogo.src}
            alt="Facebook Logo"
            width={24}
            height={24}
          />
          &nbsp; {label}
        </>
      )}
    </button>
  );
};

export default SocialAuthButton;
