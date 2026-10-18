import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { galleryImages } from "../data/content.js";
import Lightbox from "./Lightbox.jsx";

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <section id="gallery" className="section-pad overflow-hidden bg-white">
      <div className="container section-title" data-aos="fade-up">
        <h2>Gallery</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          className="gallery-swiper mx-auto max-w-[1400px]"
          modules={[Autoplay, Pagination]}
          loop
          speed={600}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          slidesPerView="auto"
          centeredSlides
          spaceBetween={0}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 0, centeredSlides: true },
            768: { slidesPerView: 3, spaceBetween: 30, centeredSlides: true },
            992: { slidesPerView: 5, spaceBetween: 30, centeredSlides: true },
            1200: { slidesPerView: 7, spaceBetween: 30, centeredSlides: true },
          }}
        >
          {galleryImages.map((img, i) => (
            <SwiperSlide key={img.src} className="!h-auto">
              <button
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="group block w-full cursor-pointer overflow-hidden rounded-2xl"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Lightbox
        images={galleryImages}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </section>
  );
}
