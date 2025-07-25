export function useToggle() {
  return {
    isOpen: false,
    toggle() {
      this.isOpen = !this.isOpen;
    },
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    }
  };
}
