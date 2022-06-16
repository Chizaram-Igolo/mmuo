/**
 * React imports.
 */
import Link from "next/link";

export default function NavTitle() {
  return (
    <div className="flex justify-start lg:w-0 lg:flex-1">
      <Link href="/">
        <a>
          <span className="sr-only">Mmuo</span>
          <h2 className="text-gray-900">mmūō</h2>
        </a>
      </Link>
    </div>
  );
}
