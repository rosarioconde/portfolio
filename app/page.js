import Hero from "@/components/Hero";
import Presentation from "@/components/Presentation";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <>

    {/* separar a un componente */}
    <Presentation />
    {/* <Hero /> */}

      <div className="flex flex-col rounded-[20px] mt-3 max-w-2xl max-w-6xl  mx-auto p-4 bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none">
           <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">Experience</h3>
            {/* <p className="text-sm leading-7 text-gray-500 dark:text-gray-400">
            I am open to job opportunities where I can contribute, learn, and grow. If you have a good opportunity that matches my skills and experience, please do not hesitate to contact me.
            </p> */}
          </div>
        <Timeline />
    </>
  )
}
