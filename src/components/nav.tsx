"use client";
import Link from "next/link";
import Image from "next/image";
import { TextAlignJustify } from "lucide-react";

const Nav = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div
      id="home"
      className="fixed top-0 z-10 flex w-full h-fit pl-4 md:pl-8 md:pr-4 lg:px-12 py-2 justify-between items-center bg-base-100 dark:bg-linear-to-r dark:from-secondary dark:from-10% dark:via-[#0B0367] dark:via-50% dark:to-primary dark:to-90%"
    >
      <div className="flex items-center">
        <Image
          src="/logo.png"
          alt="Philomath"
          width={100}
          height={100}
          className=""
        />
      </div>
      <div className="hidden md:flex items-center md:gap-2 lg:gap-8">
        <button
          onClick={() => scrollTo("hero")}
          className="px-4 py-2 font-bold rounded-full transition-all hover:transition-all hover:bg-linear-to-r hover:from-accent hover:to-[#FF6300] hover:text-[#0B0367] hover:cursor-pointer"
        >
          Home
        </button>
        <button
          onClick={() => scrollTo("courses")}
          className="px-4 py-2 font-bold rounded-full transition-all hover:transition-all hover:bg-linear-to-r hover:from-accent hover:to-[#FF6300] hover:text-[#0B0367] hover:cursor-pointer"
        >
          Courses
        </button>
        <button
          onClick={() => scrollTo("results")}
          className="px-4 py-2 font-bold rounded-full transition-all hover:transition-all hover:bg-linear-to-r hover:from-accent hover:to-[#FF6300] hover:text-[#0B0367] hover:cursor-pointer"
        >
          Results
        </button>
        <button
          onClick={() => scrollTo("contact")}
          className="px-4 py-2 font-bold rounded-full transition-all hover:transition-all hover:bg-linear-to-r hover:from-accent hover:to-[#FF6300] hover:text-[#0B0367] hover:cursor-pointer"
        >
          Contact
        </button>
      </div>
      <div className="dropdown dropdown-end md:hidden">
        <div
          tabIndex={0}
          role="button"
          className="btn px-2 rounded-lg hover:rounded-lg m-2 btn-ghost transition-all hover:bg-linear-to-r hover:from-accent hover:to-[#FF6300] hover:text-[#0B0367] border-none focus:bg-linear-to-r focus:from-accent focus:to-[#FF6300] focus:text-[#0B0367]"
        >
          <TextAlignJustify />
        </div>
        <ul
          tabIndex={-1}
          className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 mx-2 shadow-sm"
        >
          <button
            onClick={() => scrollTo("hero")}
            className="px-4 py-2 font-bold rounded-full transition-all active:transition-all active:bg-linear-to-r active:from-accent active:to-[#FF6300] active:text-[#0B0367] active:cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => scrollTo("courses")}
            className="px-4 py-2 font-bold rounded-full transition-all active:transition-all active:bg-linear-to-r active:from-accent active:to-[#FF6300] active:text-[#0B0367] active:cursor-pointer"
          >
            Courses
          </button>
          <button
            onClick={() => scrollTo("results")}
            className="px-4 py-2 font-bold rounded-full transition-all active:transition-all active:bg-linear-to-r active:from-accent active:to-[#FF6300] active:text-[#0B0367] active:cursor-pointer"
          >
            Results
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="px-4 py-2 font-bold rounded-full transition-all active:transition-all active:bg-linear-to-r active:from-accent active:to-[#FF6300] active:text-[#0B0367] active:cursor-pointer"
          >
            Contact
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
