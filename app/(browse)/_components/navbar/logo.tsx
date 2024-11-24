import Link from "next/link";
import Image from "next/image";
// import { Poppins } from "next/font/google";

// import { cn } from "@/lib/utils";

// const font = Poppins({
//   subsets: ["latin"],
//   weight: ["200", "300", "400", "500", "600", "700", "800"],
// });

export const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="hidden lg:flex items-center gap-x-4 hover:opacity-75 transition">
        <div className="bg-white rounded-full p-1">
          <Image src={"a2g.svg"} alt="A2G Logo" height={52} width={52} />
        </div>
      </div>
    </Link>
  );
};
