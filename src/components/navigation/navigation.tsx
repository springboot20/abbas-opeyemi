import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog, Disclosure } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { classNames } from "../../utils";
import { motion } from "framer-motion";

const routes = [
  {
    title: "about",
    to: "#about",
  },
  {
    title: "skills",
    to: "#skills",
  },
  {
    title: "projects",
    to: "#projects",
  },
  {
    title: "contact",
    to: "#contact",
  },
];

const handleScroll = (id: string) => {
  const element = document.getElementById(id)!;

  element.scrollIntoView({
    behavior: "smooth",
    inline: "nearest",
    block: "start",
  });
};

export const Navigation: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 0);
    });

    return window.removeEventListener("scroll", () => {
      setIsScrolled(false);
    });
  }, [isScrolled]);

  const listContainer = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const listItem = (index: number) => {
    return {
      hidden: {
        opacity: 0,
        y: 10,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.35 * index,
        },
      },
    };
  };

  return (
    <Disclosure
      as="header"
      className={classNames(
        "z-20 fixed inset-x-0 flex items-center justify-center h-20 transition-all",
        isScrolled ? "sticky top-2" : "relative top-0 "
      )}
    >
      <nav className="mx-auto flex flex-1 flex-shrink-0 items-center justify-between max-w-4xl border-gray-600 border backdrop-blur rounded-full p-3 gap-8">
        <div className="flex flex-1 justify-center items-center lg:justify-start">
          <h1 className="text-xl font-bold capitalize bg-gradient-to-l from-indigo-700 to-red-500 bg-clip-text text-transparent">
            yunus abbas opeyemi
          </h1>
        </div>

        <motion.ul
          variants={listContainer}
          initial="hidden"
          animate="visible"
          className="hidden lg:flex items-center gap-x-10"
        >
          {routes.map((_route, index) => (
            <motion.li
              key={_route.title}
              variants={{ ...listItem(index) }}
              initial="hidden"
              animate="visible"
              onClick={() => handleScroll(_route.to.split("#")[1])}
            >
              <Link to={_route.to} className="text-gray-100 font-medium capitalize text-lg">
                {_route.title}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        <div className="lg:hidden">
          <button
            onClick={() => setOpen(true)}
            type="button"
            className="text-gray-100 flex items-center"
          >
            <span className="sr-only">Open menu</span>
            <FontAwesomeIcon icon={faBars} className="h-5 w-5" aria-hidden={true} />
          </button>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="mailto:abbasopeyemi148@gmail.com">
            <button className="text-sm  font-normal text-white px-4 py-1.5 flex ring-1 ring-gray-600 bg-white/20 rounded-full items-center">
              <span className="h-6 w-6 inline-block rounded-full relative before:h-3 before:w-3 before:bg-green-500 before:rounded-full bg-green-600 loader"></span>
              let's work
            </button>
          </Link>
        </div>
      </nav>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <Dialog.Backdrop className="fixed inset-0 z-10 bg-black bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0" />
        <div className="fixed inset-0 overflow-hidden z-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="fixed inset-y-0 left-0 flex max-w-full">
              <Dialog.Panel className="flex h-full flex-col bg-black shadow-xl border-r border-gray-600 w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <Dialog.Title className="text-xl font-bold capitalize bg-gradient-to-l from-indigo-700 to-red-500 bg-clip-text text-transparent">
                      yunus abbas opeyemi
                    </Dialog.Title>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        onClick={() => setOpen((prev) => !prev)}
                        className="h-10 w-10 flex items-center justify-center absolute right-4 top-4 text-gray-100"
                      >
                        <span className="sr-only">Close panel</span>
                        <FontAwesomeIcon icon={faClose} className="h-5" strokeWidth={1.5} />
                      </button>
                    </div>
                  </div>
                  <div className="mt-6 flow-root">
                    <div className="divide-y divide-gray-600 space-y-2">
                      <motion.ul
                        variants={listContainer}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col gap-y-4 sm:gap-y-6"
                      >
                        {routes.map((_route, index) => (
                          <motion.li
                            key={_route.title}
                            initial="hidden"
                            animate="visible"
                            variants={{ ...listItem(index) }}
                            onClick={() => {
                              handleScroll(_route.to.split("#")[1]);
                              setOpen(false);
                            }}
                          >
                            <Link
                              to={_route.to}
                              className="text-gray-100 font-medium capitalize text-sm rounded px-3 py-1.5 hover:text-gray-100 hover:bg-white/20"
                            >
                              {_route.title}
                            </Link>
                          </motion.li>
                        ))}
                      </motion.ul>
                      <Link to="mailto:abbasopeyemi148@gmail.com" className="block py-3">
                        <button className="text-base font-normal text-white px-4 w-full py-1.5 flex ring-1 ring-gray-600 rounded items-center">
                          <span className="h-6 w-6 inline-block rounded-full relative before:h-3 before:w-3 before:bg-green-500 before:rounded-full bg-green-600 loader"></span>
                          let's work
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </div>
      </Dialog>
    </Disclosure>
  );
};
