"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Nav() {
  const isUserLoggedIn = true;
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assests/images/logo.svg"
          width={30}
          height={30}
          alt="Promptopia logo"
          className="object-contain"
        />
        <p className="logo_text">Promptopia</p>
      </Link>
      {isUserLoggedIn ? (
        <div className="flex gap-3 md:gap-5">
          <Link href="/create-prompt" className="black_btn"></Link>}
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
}
