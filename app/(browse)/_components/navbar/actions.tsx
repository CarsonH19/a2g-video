import { SignInButton, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

import { Button } from "@/components/ui/button";
import { Clapperboard } from "lucide-react";
import Link from "next/link";

export const Actions = async () => {
  const user = await currentUser();

  return (
    <div className="flex items-center justify-end gap-x-2 ml-4 lg:ml-0">
      {!user && (
        <SignInButton>
          <Button size={"sm"} variant={"primary"}>
            Login
          </Button>
        </SignInButton>
      )}
      {!!user && (
        <div className="flex items-center gap-x-4">
          <Button
            size={"sm"}
            variant={"ghost"}
            className="text-muted-foreground hover:text-primary"
          >
            <Link href={`/u/${user.username}`} className="flex">
              <Clapperboard className="h-5 w-5 lg:mr-2 " />
              <span className="hidden lg:block">Dashboard</span>
            </Link>
          </Button>
          <UserButton />
        </div>
      )}
    </div>
  );
};