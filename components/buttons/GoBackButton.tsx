/**
 * React imports.
 */
import { useRouter } from "next/router";

export default function GoBackButton() {
  const router = useRouter();

  function goBack() {
    router.back();
  }

  return (
    <span
      className="underline decoration-dotted underline-offset-4 
               text-[#333333] cursor-pointer"
      onClick={goBack}
    >
      Go back
    </span>
  );
}
