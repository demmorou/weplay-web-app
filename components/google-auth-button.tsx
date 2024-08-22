"use client";

import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import Image from "next/image";

export default function GoogleSignInButton() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  return (
    <Button
      className="w-full"
      variant="outline"
      type="button"
      onClick={() =>
        signIn("google", { callbackUrl: callbackUrl ?? "/dashboard" })
      }
    >
      <Image
        className="mr-2 h-5"
        width={20}
        height={20}
        src="/imgs/logo-google.png"
        alt="Google"
      />
      Entrar com o Google
    </Button>
  );
}
