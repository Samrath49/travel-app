<script setup>
import { ref, computed } from "vue";
import { useRuntimeConfig } from "#app";
import { NuxtLink } from "#components";
import { useToast } from "vue-toastification";

const router = useRouter();
const user = useSupabaseUser();
const toast = useToast();

definePageMeta({
  layout: "custom",
  middleware: "auth",
  title: "Login",
});

const props = defineProps({
  mode: {
    type: String,
    default: "login",
    validator: (value) => ["login", "signup"].includes(value),
  },
});

const config = useRuntimeConfig();
const currentMode = ref(props.mode);
const { isLoggedIn } = useAuth();

const supabase = useSupabaseClient();
const email = ref("");
const password = ref("");
const fullName = ref("");
const loading = ref(false);
const isUsingDemo = ref(false);
const error = ref(null);

const isLogin = computed(() => currentMode.value === "login");

async function handleSubmit() {
  try {
    loading.value = true;
    error.value = null;

    if (isLogin.value || isUsingDemo.value) {
      const { error: authError } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value,
      });
      if (authError) {
        toast.error("Failed to log in. Please try again.");
        throw authError;
      } else {
        toast.success("Logged in successfully.");
      }
    } else {
      const { error: authError } = await supabase.auth.signUp({
        email: email.value,
        password: password.value,
        options: { data: { full_name: fullName.value } },
      });
      if (authError) {
        toast.error("Failed to sign up. " + authError);
        throw authError;
      } else {
        toast.success("Signed up successfully, verify your email to login.");
      }
    }

    email.value = "";
    password.value = "";
    fullName.value = "";
  } catch (e) {
    error.value = e.message;
  } finally {
    loading.value = false;
    isUsingDemo.value = false;
  }
}

async function signInWithGoogle() {
  try {
    loading.value = true;
    error.value = null;
    toast.info("Signing in with Google...");
    const { error: authError } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    });

    if (authError) throw authError;
  } catch (e) {
    error.value = e.message;
  } finally {
    loading.value = false;
  }
}

function switchTab(mode) {
  currentMode.value = mode;
}

function signInWithDemo() {
  if (!config.public?.DEMO_USER_EMAIL || !config.public?.DEMO_USER_PASSWORD) {
    throw new Error("Demo user credentials not found");
  } else {
    email.value = config.public.DEMO_USER_EMAIL;
    password.value = config.public.DEMO_USER_PASSWORD;
    isUsingDemo.value = true;
    handleSubmit();
  }
}

watch(user, (newUser) => {
  if (newUser) {
    router.push("/discover");
  }
});
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center bg-slate-100 py-6 md:py-10 px-4 lg:px-8"
  >
    <div
      class="max-w-md w-full card floating-card shadow-xl py-10 sm:py-10 px-2 sm:px-5 space-y-6"
    >
      <!-- Logo -->
      <div class="pb-0 md:pb-2">
        <NuxtLink to="/">
          <NuxtImg
            class="mx-auto h-12 w-auto"
            src="/icons/logo.svg"
            alt="Logo"
          />
        </NuxtLink>
      </div>

      <!-- Tabs -->
      <div class="flex justify-center my-4">
        <div class="rounded-full bg-gray-200 p-2">
          <button
            @click="switchTab('login')"
            :class="[
              'px-4 py-2 text-sm font-medium rounded-full',
              currentMode === 'login'
                ? 'bg-primary text-white shadow-xl'
                : 'bg-gray-200 text-gray-700',
            ]"
          >
            Login
          </button>
          <button
            @click="switchTab('signup')"
            :class="[
              'px-4 py-2 text-sm font-medium rounded-full',
              currentMode === 'signup'
                ? 'bg-primary text-white shadow-xl'
                : 'bg-gray-200 text-gray-700',
            ]"
          >
            Signup
          </button>
        </div>
      </div>

      <!-- Form -->
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div class="rounded-md shadow-sm space-y-4">
          <div v-if="!isLogin">
            <label for="full-name" class="sr-only">Full Name</label>
            <input
              id="full-name"
              v-model="fullName"
              type="text"
              required
              class="w-full px-3 py-2 border rounded-md"
              placeholder="Full Name"
            />
          </div>

          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input
              id="email-address"
              v-model="email"
              type="email"
              required
              class="w-full px-3 py-2 border rounded-md"
              placeholder="Email address"
            />
          </div>

          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              v-model="password"
              type="password"
              required
              class="w-full px-3 py-2 border rounded-md"
              placeholder="Password"
            />
          </div>
        </div>

        <div v-if="error" class="text-red-500 text-sm text-center">
          {{ error }}
        </div>

        <!-- Submit & Google Sign-In -->
        <div class="space-y-4">
          <button
            type="submit"
            :disabled="loading"
            class="w-full py-2 bg-primary text-white rounded-md disabled:opacity-50"
          >
            {{ loading ? "Loading..." : isLogin ? "Sign in" : "Sign up" }}
          </button>
          <hr />
          <button
            type="button"
            @click="signInWithDemo"
            :disabled="loading"
            class="w-full py-2 bg-white border text-gray-700 rounded-full disabled:opacity-50 flex items-center justify-center"
          >
            <Icon name="emojione:winking-face" class="h-5 w-5 mr-2" />
            Use Demo Account
          </button>
          <button
            type="button"
            @click="signInWithGoogle"
            :disabled="loading"
            class="w-full py-2 bg-white border text-gray-700 rounded-md disabled:opacity-50 flex items-center justify-center"
          >
            <Icon name="logos:google-icon" class="h-5 w-5 mr-2" />
            Continue with Google
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
