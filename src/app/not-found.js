"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function NotFound() {
  const pathname = usePathname();

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex flex-col gap-5">
        <h2 className="text-3xl text-center font-bold">Page not found</h2>
        <p>
          The page <span className="underline">"{pathname}"</span> you are
          looking for does not exist.
        </p>
        <p className="text-center">
          <Link href="/" className="text-center hover:underline text-blue-500">
            Return Home
          </Link>
        </p>
      </div>
    </div>
  );
}
