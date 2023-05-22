"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Logo from "@public/assets/images/logo.svg";
// import Profile from "@public/assets/images/profile.svg";

export default function Nav() {
  const isUserLoggedIn = true;

  const [provider, setProvider] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  useEffect(() => {
    const setProviders = async (providers) => {
      const response = await getProviders();
      setProvider(response);
    };
    setProviders();
  }, []);

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
            <button type="button" className="outLine_btn" onClick={signOut}>
              Sign Out
            </button>

            <Link href="/profile" className="flex gap-2 flex-center">
              <Image
                src={Logo}
                alt="Profile"
                width={37}
                height={37}
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            {provider &&
              Object.values(provider).map((provider) => (
                <button
                  type="button"
                  className="black_btn"
                  onClick={() => signIn(provider.id)}
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation  */}

      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex">
            <Image
              src={Logo}
              alt="Profile"
              width={37}
              height={37}
              className="rounded-full"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />

            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
              </div>
            )}
          </div>
        ) : (
          <>
            {provider &&
              Object.values(provider).map((provider) => (
                <button
                  type="button"
                  className="black_btn"
                  onClick={() => signIn(provider.id)}
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
}
