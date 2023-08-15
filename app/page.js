import Presentation from "@/components/Presentation";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <>
      <Presentation />
      <div className="shadow-3xl shadow-shadow-500 dark:!bg-navy-800 mx-auto mt-3 flex  max-w-2xl max-w-6xl flex-col rounded-[20px] bg-white bg-clip-border p-4 dark:text-white dark:!shadow-none">
        <h3 className="mb-3 text-3xl font-bold leading-none text-gray-800">Experience</h3>
      </div>
      <Timeline />
    </>
  );
}
