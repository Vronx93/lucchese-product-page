export function useWidth() {
  return {
    widths: ['A', 'B', 'C'],
    currentWidth: 'A',
    setWidth(width: string) {
        this.currentWidth = width
        const params = new URLSearchParams(window.location.search);
        params.set("width", width);
        const newUrl = `${window.location.pathname}?${params.toString()}`;
        window.history.replaceState({}, "", newUrl);
    },
    init() {
      const params = new URLSearchParams(window.location.search);
      const widthParam =params.get("width") || "";
      this.currentWidth = this.widths.includes(widthParam) ? widthParam : this.widths[0];
    },
}
}
