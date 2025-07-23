import "./styles/styles.css";
import 'swiper/css';
import 'swiper/css/thumbs';
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { useProduct } from "./components/useProduct";
import { useSize } from "./components/useSize";
import { useToggle } from "./components/useToggle";
import { useVariants } from "./components/useVariants";
import { useWidth } from "./components/useWidth";
import Alpine from "alpinejs";
import { Fancybox} from "@fancyapps/ui";
import useSwiper from "./components/useSwiper";
import intersect from '@alpinejs/intersect'


declare global {
  interface Window {
    Alpine: typeof Alpine; 
    useToggle: () => {
      isOpen: boolean
      toggle(): void
      open(): void
      close(): void}
  }
}

Fancybox.bind("[data-fancybox='gallery']", {
  Carousel: {Thumbs: {showOnStart: true, type: 'classic'}},
  on: {"Carousel.change": (fancybox, carousel) => {
      const newIndex = carousel.getPage().index;
      const {swiper, thumbsSwiper} = useSwiper()
      if (swiper && thumbsSwiper) {
        swiper.slideTo(newIndex)
        thumbsSwiper.slideTo(newIndex)
      }
    }}
})
window.useToggle = useToggle
window.Alpine = Alpine;
const path = window.location.pathname;
const slug = path.split("/").filter(Boolean).pop() || "";

Alpine.plugin(intersect)
Alpine.data("product", () => useProduct(slug));
Alpine.data("variants", () => useVariants());
Alpine.data("sizes", () => useSize())
Alpine.data("widths", () => useWidth())
Alpine.data("gallerySwiper", () => useSwiper());

Alpine.start();
