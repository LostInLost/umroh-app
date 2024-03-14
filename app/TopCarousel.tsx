'use client';
import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import ClassNames from 'embla-carousel-class-names';
import Promo1 from '@/public/LandingPage/6e5baa5c68429e08b0efeecd28253b9d.jpeg';
import Promo2 from '@/public/LandingPage/c27ddb8fda675548f7ff1324fedc0a7a.jpeg';
import { Image } from '@nextui-org/react';
export default function TopCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay({ playOnInit: true, delay: 5000 }), ClassNames()]);

  return (
    <div className=" container mx-auto px-10 my-3">
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide flex justify-center embla__class-names" key={1}>
              <Image isZoomed className="embla__slide__img rounded" src={Promo1.src} width={1000} height={400} alt="Promo 1" />
            </div>
            <div className="embla__slide flex justify-center embla__class-names" key={2}>
              <Image isZoomed className="embla__slide__img rounded" src={Promo2.src} width={1000} height={400} alt="Promo 2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
