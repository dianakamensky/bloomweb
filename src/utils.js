export function getCurrentUser() {
  const userId = localStorage.getItem("userId");
  if (userId) {
    return userId;
  }
  return null;
}

export function withCommas(list) {
  const newArray = list.filter(
    (current) => current != "" && current != undefined && current != null
  );
  return newArray.join(", ");
}
