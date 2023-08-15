import Image from "next/image";
import BackIcon from "@/components/icons/iconB.svg";

export default function iconBackground() {
  return (
    <div>
      <Image priority src={BackIcon} alt="my workspace" />
    </div>
  );
}
