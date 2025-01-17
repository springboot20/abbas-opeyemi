import data from "../../data/data.json";

export default function Projects() {
  return (
    <section id="projects">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-5">
          <h3 className="text-3xl capitalize font-medium text-gray-100">projects</h3>
          <p className="text-base font-normal text-gray-100 mt-1">
            A testament to creativity and technical prowess, these showcase my learning and
            experience roadmap.
          </p>
        </header>

        <div className="relative w-full max-w-full grid grid-cols-1 gap-5">
          {data.map((item, index) => (
            <div
              style={{
                top: `calc(96px + ${index * 40}px)`,
                height: "auto",
              }}
              className="border border-gray-600 rounded-2xl w-full sticky p-4 bg-white/10 backdrop-blur-md"
              key={index}
            >
              <header className="flex items-center justify-between">
                <h1 className="text-base font-medium text-gray-100">{`${index + 1} | ${
                  item["project-title"]
                }`}</h1>
              </header>

              <div className="grid grid-cols-1 lg:grid-cols-2 mt-3 py-2">
                <div className="col-span-1 overflow-hidden rounded-xl">
                  <img src={item.image} alt={item.alt} />
                </div>
                <div className="col-span-1"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
