export function getCurrentUser() {
  const userId = localStorage.getItem("userId");
    if (userId) {
      return userId;
    }
    return null;
  }