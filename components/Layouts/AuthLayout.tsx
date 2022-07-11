/**
 * React imports.
 */
import { ReactNode } from "react";

interface IAuthLayout {
  children: ReactNode;
}

const AuthLayout: React.FC<IAuthLayout> = ({ children }) => {
  return (
    <section className="px-5 md:px-18 lg:px-20 xl:px-24 z-20">
      <div
        className="min-w-[80%] px-[2%] sm:px-2 sm:min-w-[24rem] 
                   sm:max-w-[28rem] mx-auto"
      >
        <div
          className="bg-white text-[#080b2d] 
                       py-[2rem] sm:px-8 md:px-12 rounded-b-md 
                       sm:shadow-[0_5px_5px_0px_rgba(0,8,36,0.2)]"
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
