import { Link } from "react-router-dom";
import data from "../../data/data.json";
import { SlideIn } from "../slide-in";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { teckstacks } from "../../data/techstacks";

export default function Projects() {
  return (
    <SlideIn direction="left">
      <section id="projects">
        <div className="max-w-7xl mx-auto px-2">
          <header className="text-center mb-5">
            <h3 className="text-3xl capitalize font-medium bg-gradient-to-l from-indigo-700 to-red-500 bg-clip-text text-transparent">
              projects
            </h3>
            <p className="text-base font-normal text-gray-500 mt-1">
              A testament to <span className="text-white">creativity</span> and{" "}
              <span className="text-white">technical prowess </span>, these showcase{" "}
              <span className="text-white">my learning </span> and
              <span className="text-white">experience</span> roadmap.
            </p>
          </header>

          <div className="relative w-full max-w-full grid grid-cols-1 gap-5">
            {data.map((item, index) => (
              <div
                style={{
                  top: `calc(96px + ${index * 40}px)`,
                  height: "auto",
                }}
                className="border border-gray-600 rounded-2xl w-full sticky p-4 bg-black/20 backdrop-blur-md"
                key={index}
              >
                <header className="flex items-center justify-between">
                  <h1 className="text-base font-medium text-gray-300">{`${((index + 1) % 10)
                    .toString()
                    .padStart(3, "00")} | ${item["project-title"]}`}</h1>

                  <Link to={item["github-url"]}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                      className="w-8 h-8 fill-purple-600 stroke-none"
                    >
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                    </svg>
                  </Link>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 mt-3 py-2 gap-4">
                  <div className="col-span-1 overflow-hidden rounded-xl">
                    <img src={item.image} alt={item.alt} />
                  </div>
                  <div className="col-span-1 space-y-2">
                    <div className="space-y-2">
                      <h3 className="text-gray-300 font-medium text-xl">{item["project-title"]}</h3>
                      <p className="text-gray-300 text-justify text-sm font-normal">
                        {item["project-description"]}
                      </p>
                    </div>

                    <div className="flex items-center w-full gap-2">
                      {teckstacks.map((s) => {
                        if (item["tech-stack"].includes(s.name)) return s.logo;
                      })}
                    </div>

                    <div className="">
                      <Link
                        to={item.url}
                        target="__blank__"
                        className="text-gray-300 font-normal capitalize"
                      >
                        <span>live preview :</span>
                        <motion.span
                          initial={{
                            x: 0,
                          }}
                          animate={{
                            x: 10,
                            transition: {
                              repeat: Infinity,
                              repeatType: "loop",
                              delay: 2.4,
                            },
                          }}
                          className="inline-flex items-center"
                        >
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="h-2 stroke-[1px] text-xl"
                          />
                        </motion.span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SlideIn>
  );
}
