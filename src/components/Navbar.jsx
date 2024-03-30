"use client";
import React, { useEffect } from "react";
import { notification } from "../Consonants";
import Image from "next/image";
import { motion, stagger, useAnimate } from "framer-motion";

function Navbar({ name, img, statement }) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "div",
      { x: 0, opacity: 1 },
      { duration: 1, type: "spring", delay: stagger(0.5) }
    );
  }, []);
  return (
    <div className="w-full flex justify-between items-center px-9 py-8  small:px-5 smallest:px-3 overflow-hidden">
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 50, opacity: 0 }}
        className="flex justify-center items-start flex-col"
      >
        <p className="font-pm text-3xl leading-[3rem] font-med small:text-2xl Smob:text-[1.2rem]  ">
          Welcome !
        </p>
        <p className="font-px text-1xl small:text-[0.95rem] Smob:text-[0.8rem]">
          Lets Finish your task today!
        </p>
      </motion.div>
      <div ref={scope} className="flex justify-center items-center gap-9">
        <motion.div initial={{ x: 100, opacity: 0 }}>{notification}</motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          className="flex justify-center items-center rounded-full overflow-hidden cursor-pointer"
        >
          <Image
            className="w-[2.5rem] h-[2.5rem]"
            width="50"
            height="50"
            src={img ? img : `/user.webp`}
            alt="user"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Navbar;
