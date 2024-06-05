export const logoutMethod = (): void => {
  localStorage.removeItem("session");
  window.location.href = "/login";
};
  