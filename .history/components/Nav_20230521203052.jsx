"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Logo from "@public/assets/images/logo.svg";

export default function Nav() {
  const isUserLoggedIn = true;
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src={Logo}
          width={30}
          height={30}
          alt="Promptopia logo"
          className="object-contain"
        />
        <p className="logo_text">Promptopia</p>
      </Link>

      {/* Desktop Navigation  */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>
            <button className="outLine_btn">Sign Out</button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
}
