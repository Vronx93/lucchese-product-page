import { Product } from "src/interfaces";

async function fetchProduct(productSlug: string) {
  try {
    const res = await fetch("/data/products.json");

    if (!res.ok) {
      console.error(res.status, res.statusText);
      return null;
    }

    const data: Product[] = await res.json();

    return data.find((product) => product.slug === productSlug);
  } catch (error) {
    console.error((error as Error).message);
    return null;
  }
}

export function useProduct(productSlug: string) {
  return {
    isLoading: true,
    product: {
      slug: "",
      title: "",
      price: 0,
      color: "",
      styleId: '',
      desc: null,
      material: null,
      care: null,
      images: [],
    } as Product,
    init() {
      this.isLoading = true;
      fetchProduct(productSlug).then((productData) => {
        if (productData) {
          this.product = productData;
        } else {
          window.location.href = "/priscilla-suede-espresso";
        }
        this.isLoading = false;
      });
    },
  };
}
