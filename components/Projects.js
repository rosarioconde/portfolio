import projectsData from "@/data/projectsData";
import Card from "@/components/Card";

export default function Projects() {
  return (
    <>
      <div className="content-center divide-y divide-gray-200 p-4 ">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl">
            Proyectos
          </h1>
          <p className="text-sm leading-7 text-gray-500 dark:text-gray-400">
            Algunos proyectos que fueron desarrollados.
          </p>
        </div>
        <div className="content-center py-12">
          <div className="flex flex-wrap justify-center">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                tech={d.tech}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
