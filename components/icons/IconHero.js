import React from 'react';
import Image from 'next/image';
import heroIcon from '@/components/icons/iconH.svg'

const IconHero = () => {
  return (
    <div className="w-full sm:h-64 mx-auto">
        <Image
          priority
          src={heroIcon}
          alt="my workspace"
        />
      </div>
    )
  }

  export default IconHero;