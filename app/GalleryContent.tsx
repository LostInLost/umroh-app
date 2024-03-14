'use client';
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import ClassNames from 'embla-carousel-class-names';
import { Image } from '@nextui-org/react';

export default function GalleryContent() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ playOnInit: true, delay: 3000 }), ClassNames()]);
  const [emblaRef2] = useEmblaCarousel({ loop: true }, [Autoplay({ playOnInit: true, delay: 3200 }), ClassNames()]);
  const [emblaRef3] = useEmblaCarousel({ loop: true }, [Autoplay({ playOnInit: true, delay: 3400 }), ClassNames()]);

  return (
    <section className="flex justify-center flex-col my-10">
      <h1 className="text-xl font-semibold text-center">Galeri Jamaah</h1>
      <div className="flex">
        <div className="embla w-[50%]">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              <div className="embla__slide flex justify-center embla__class-names" key={1}>
                <Image isZoomed className="embla__slide__img rounded " src={'https://umroh-static.s3.ap-southeast-1.amazonaws.com/gallery/9.jpg'} width={200} height={400} alt="Promo 1" />
              </div>
              <div className="embla__slide flex justify-center embla__class-names" key={2}>
                <Image isZoomed className="embla__slide__img rounded" src={'https://umroh-static.s3.ap-southeast-1.amazonaws.com/gallery/8.jpg'} width={200} height={400} alt="Promo 2" />
              </div>
            </div>
          </div>
        </div>
        <div className="embla w-[50%]">
          <div className="embla__viewport" ref={emblaRef2}>
            <div className="embla__container">
              <div className="embla__slide flex justify-center embla__class-names" key={3}>
                <Image isZoomed className="embla__slide__img rounded " src={'https://umroh-static.s3.ap-southeast-1.amazonaws.com/gallery/7.jpg'} width={200} height={400} alt="Promo 1" />
              </div>
              <div className="embla__slide flex justify-center embla__class-names" key={4}>
                <Image isZoomed className="embla__slide__img rounded" src={'https://umroh-static.s3.ap-southeast-1.amazonaws.com/gallery/6.jpg'} width={200} height={400} alt="Promo 2" />
              </div>
            </div>
          </div>
        </div>
        <div className="embla w-[50%]">
          <div className="embla__viewport" ref={emblaRef3}>
            <div className="embla__container">
              <div className="embla__slide flex justify-center embla__class-names" key={5}>
                <Image isZoomed className="embla__slide__img rounded " src={'https://umroh-static.s3.ap-southeast-1.amazonaws.com/gallery/5.jpg'} width={200} height={400} alt="Promo 1" />
              </div>
              <div className="embla__slide flex justify-center embla__class-names" key={6}>
                <Image isZoomed className="embla__slide__img rounded" src={'https://umroh-static.s3.ap-southeast-1.amazonaws.com/gallery/4.jpg'} width={200} height={400} alt="Promo 2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
