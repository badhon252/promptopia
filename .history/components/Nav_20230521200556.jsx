"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Nav() {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center"></Link>
      <Image
        src="/assests/images/logo.svg"
        width={30}
        height={30}
        alt="logo"
        className="logo_text"
      />
    </nav>
  );
}
