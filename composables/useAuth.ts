import { useToast } from "vue-toastification";

export const useAuth = () => {
  const user = useSupabaseUser();
  const supabase = useSupabaseClient();
  const router = useRouter();
  const toast = useToast();

  const isLoggedIn = computed(() => user.value?.aud === "authenticated");
  const userId = computed(() => user.value?.id);
  const userEmailAddress = computed(() => user.value?.email);
  const lastSignIn = computed(() => user.value?.last_sign_in_at);
  const memberSince = computed(() => user.value?.confirmed_at);

  const logout = async () => {
    try {
      await supabase.auth.signOut();
      router.push("/");
      toast.success("Logged out successfully.");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Failed to log out. Please try again.");
    }
  };

  return {
    isLoggedIn,
    userId,
    userEmailAddress,
    lastSignIn,
    memberSince,
    logout,
  };
};
