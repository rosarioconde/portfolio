import Presentation from "@/components/Presentation";
import {ServiceSkills} from "@/components/ServiceSkills";

export default function Home() {
  return (
    <>
      <Presentation />
      <div className="shadow-3xl shadow-shadow-500 mx-auto mt-3 flex  max-w-2xl max-w-6xl flex-col rounded-[20px] bg-white bg-clip-border p-4">
        <h3 className="mx-auto mb-3 text-3xl font-bold leading-none text-gray-800">
          ¿Por qué elegirme para tu próximo proyecto?
        </h3>
      </div>

      <ServiceSkills />
    </>
  );
}
