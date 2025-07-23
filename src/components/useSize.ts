
export function useSize() {
  return {
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 11],
    currentSize: 6,
        setSize(size: number) {
      this.currentSize = size;
      const params = new URLSearchParams(window.location.search);
      params.set("size", size.toString());
      const newUrl = `${window.location.pathname}?${params.toString()}`;
      window.history.replaceState({}, "", newUrl);
    },
    init() {
      const params = new URLSearchParams(window.location.search);
      const sizeParam = parseFloat(params.get("size") || "");
      this.currentSize = this.sizes.includes(sizeParam) ? sizeParam : this.sizes[0];
    },
}
}
