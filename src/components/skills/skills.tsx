import { skills } from "../../data/skills";
import { motion } from "framer-motion";

export default function Skills() {
  const skillVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="h-screen" id="skills">
      <div className="max-w-7xl mx-auto px-2 xl:px-0 h-full grid sm:place-content-center">
        <header className="text-center mb-5">
          <h3 className="text-3xl capitalize font-medium bg-gradient-to-l from-indigo-700 to-red-500 bg-clip-text text-transparent">skills</h3>
          <p className="text-base font-normal text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, natus!
          </p>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-20 w-full">
          {skills.map((skill, index) => {
            return (
              <motion.div
                className="flex flex-col items-center"
                variants={skillVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.4, once: false }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={skill.name}
              >
                {skill.logo}
                <span className="text-sm font-medium text-gray-100">{skill.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
