/**
 * React imports.
 */
import Link from "next/link";

import { Auth } from "firebase/auth";

interface INavTitle {
  loading: boolean;
  user: Auth;
}

const NavTitle: React.FC<INavTitle> = ({ loading, user }) => {
  return (
    <div className="flex justify-start items-center h-full lg:w-0 lg:flex-1">
      <Link href={!loading && user ? "/feed/ig" : "/"}>
        <a>
          <span className="sr-only">Mmuo</span>
          <h2 className="text-gray-800 app-title text-[2rem] space-x-8">
            mmuo
          </h2>
        </a>
      </Link>
    </div>
  );
};

export default NavTitle;
