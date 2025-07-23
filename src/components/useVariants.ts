import { Variant } from "src/interfaces";

async function fetchVariants() {
  try {
    const res = await fetch("/data/variants.json");

    if (!res.ok) {
      console.error(res.status, res.statusText);
      return [];
    }

    const data: Variant[] = await res.json();

    return data;
  } catch (error) {
    console.error((error as Error).message);
    return [];
  }
}

export function useVariants() {
  return {
    variants: [] as Variant[],
    async init() {
      const variantsData = await fetchVariants();
      this.variants = variantsData;
    },
  };
}
