import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <section className="h-screen" id="skills">
      <div className="max-w-7xl mx-auto px-2 xl:px-0 h-full grid sm:place-content-center">
        <header className="text-center mb-5">
          <h3 className="text-3xl capitalize font-medium text-gray-100">skills</h3>
          <p className="text-base font-normal text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, natus!
          </p>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-20 w-full">
          {skills.map((skill) => {
            return (
              <div className="flex flex-col items-center" key={skill.name}>
                {skill.logo}
                <span className="text-sm font-medium text-gray-100">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
