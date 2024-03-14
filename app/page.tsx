import Image from 'next/image';
import TopCarousel from './TopCarousel';
import Navbars from './Navbar';
import MainContent from './MainContent';
import GalleryContent from './GalleryContent';
import PromoContent from './PromoContent';

export default function Home() {
  return (
    <main className="">
      <Navbars />
      <TopCarousel />
      <div className="bg-white">
        <MainContent />
      </div>
      <GalleryContent />
      <PromoContent />
    </main>
  );
}
