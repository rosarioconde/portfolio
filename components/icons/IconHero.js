import Image from "next/image";
import heroIcon from "@/components/icons/iconH.svg";

const IconHero = () => {
  return (
    <div className="mx-auto w-full sm:h-64">
      <Image priority src={heroIcon} alt="my workspace" />
    </div>
  );
};

export default IconHero;
