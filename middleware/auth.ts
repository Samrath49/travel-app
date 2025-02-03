export default defineNuxtRouteMiddleware(async (to, from) => {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn?.value && to.path !== "/login") {
    return navigateTo("/login");
  }
  if (isLoggedIn?.value && to.path === "/login") {
    return navigateTo("/profile");
  }
});
