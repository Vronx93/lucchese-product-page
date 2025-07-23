import Swiper from "swiper";
import { Thumbs } from 'swiper/modules';
import { Swiper as SwiperType } from "swiper/types";

export interface GallerySwiper {
    swiper: SwiperType | null,
    thumbsSwiper: SwiperType | null,
    currentSlideIndex: number;
    init: () => void
}

const swipersInstance: GallerySwiper = {
  swiper: null,
  thumbsSwiper: null,
  currentSlideIndex: 0,

  init() {
    this.thumbsSwiper = new Swiper('.thumbsSwiper', {
      modules: [Thumbs],
      slidesPerView: 3.5,
      spaceBetween: 1,
      loop: false,
      grabCursor: true,
      freeMode: true,
      allowTouchMove: true,
      on: {
        click: (swiper: SwiperType) => {
          this.currentSlideIndex = swiper.clickedIndex ?? 0;
        }
      }
    });

    this.swiper = new Swiper('.swiper', {
      modules: [Thumbs],
      slidesPerView: 1,
      spaceBetween: 1,
      loop: false,
      grabCursor: true,
      freeMode: true,
      allowTouchMove: true,
      thumbs: { swiper: this.thumbsSwiper },
      on: {
        slideChange: (swiper: SwiperType) => {
          this.currentSlideIndex = swiper.activeIndex ?? 0;
        }
      }
    });
  }
};

export default function useSwiper(): GallerySwiper {
  return swipersInstance;
}
