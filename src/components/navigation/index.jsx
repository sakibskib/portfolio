"use client";
import { BtnList } from "@/app/data";
import React from "react";
import NavButton from "./NavButton";
import useScreenSize from "../hooks/useScreenSize";
import ResponsiveComponent from "../ResponsiveComponent";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Navigation = ({ showOrbit = true, showToggle = false }) => {
  const angleIncrement = 360 / BtnList.length; 
  const size = useScreenSize();
  const isLarge = size >= 1024;
  const isMedium = size >= 768;
  const [showSecondaryNav, setShowSecondaryNav] = React.useState(false);

  return (
    <>
      {showToggle ? (
        <div className="pointer-events-auto fixed top-4 right-16 xs:right-20 z-50 group">
          <button
            type="button"
            onClick={() => setShowSecondaryNav((current) => !current)}
            aria-expanded={showSecondaryNav}
            aria-controls="secondary-navigation"
            className="w-10 h-10 xs:w-14 xs:h-14 text-foreground rounded-full flex items-center justify-center cursor-pointer z-50 p-2.5 xs:p-4 custom-bg"
          >
            {showSecondaryNav ? (
              <X className="w-full h-full text-foreground group-hover:text-accent" strokeWidth={1.5} />
            ) : (
              <Menu className="w-full h-full text-foreground group-hover:text-accent" strokeWidth={1.5} />
            )}
            <span className="sr-only">
              {showSecondaryNav ? "Close navigation menu" : "Open navigation menu"}
            </span>
          </button>

          {showSecondaryNav ? (
            <div className="pointer-events-auto fixed right-4 top-20 z-50 w-[min(18rem,calc(100vw-2rem))] rounded-3xl border border-accent/30 bg-background/20 p-4 shadow-glass-inset backdrop-blur-[6px] xs:right-4 xs:top-24" id="secondary-navigation">
              <div className="mb-3 text-[0.65rem] uppercase tracking-[0.35em] text-muted">
                Quick navigation
              </div>
              <nav aria-label="Secondary navigation" className="space-y-2">
                {BtnList.map((btn) => (
                  <Link
                    key={btn.label}
                    href={btn.link}
                    target={btn.newTab ? "_blank" : "_self"}
                    prefetch={false}
                    scroll={false}
                    onClick={() => setShowSecondaryNav(false)}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-foreground transition-colors duration-200 hover:border-accent/60 hover:bg-accent hover:text-background"
                  >
                    <span>{btn.label}</span>
                    <span className="text-xs uppercase tracking-[0.25em] text-muted">
                      Open
                    </span>
                  </Link>
                ))}
              </nav>
            </div>
          ) : null}
        </div>
      ) : null}

      {showOrbit ? (
        <div className="pointer-events-none absolute inset-0 z-40 flex items-center justify-center">
          <ResponsiveComponent>
            {({ size }) => {
              return size && size >= 480 ? (
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="pointer-events-auto relative flex w-max items-center justify-center animate-spin-slow group"
                >
                  {BtnList.map((btn, index) => {
                    const angleRad = (index * angleIncrement * Math.PI) / 180; //angle value in radian format
                    const radius = isLarge
                      ? 170
                      : isMedium
                      ? 135
                      : 96;
                    const x = `${Math.cos(angleRad) * radius}px`;
                    const y = `${Math.sin(angleRad) * radius}px`;
                    // console.log(index, angleRad, radius, x,y)
                    return <NavButton key={btn.label} x={x} y={y} {...btn} />;
                  })}
                </motion.div>
              ) : (
                <>
                  <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="pointer-events-auto relative flex w-full flex-col space-y-4 px-2.5 item-start justify-center xs:w-max xs:p-0 xs:items-center group xs:hidden"
                  >
                    {BtnList.slice(0, BtnList.length / 2).map((btn) => {
                      return <NavButton key={btn.label} x={0} y={0} {...btn} />;
                    })}
                  </motion.div>

                  <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="pointer-events-auto relative flex w-full flex-col space-y-4 px-2.5 items-end justify-center xs:w-max xs:p-0 xs:items-center group xs:hidden"
                  >
                    {BtnList.slice(BtnList.length / 2, BtnList.length).map(
                      (btn) => {
                        return (
                          <NavButton
                            key={btn.label}
                            x={0}
                            y={0}
                            {...btn}
                            labelDirection="left"
                          />
                        );
                      }
                    )}
                  </motion.div>
                </>
              );
            }}
          </ResponsiveComponent>
        </div>
      ) : null}
    </>
  );
};

export default Navigation;
