export function getCurrentUser() {
    const id = localStorage.getItem("userId");
    if (id === null) {
      return undefined;
    }
    return Number(id);
  }