<script setup>
definePageMeta({
  middleware: "auth",
  title: "User Profile",
});

const {
  isLoggedIn,
  userId,
  userEmailAddress,
  lastSignIn,
  memberSince,
  logout,
} = useAuth();
</script>
<template>
  <div className="bg-slate-100 py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
    <div class="floating-card items-center max-w-7xl p-4 sm:p-10 mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8">Profile</h1>

      <div
        className="flex flex-col sm:flex-row items-center gap-4 mb-8 sm:mb-12"
      >
        <div
          className="bg-primary/35 p-3 flex justify-center items-center rounded-full"
        >
          <Icon name="weui:me-filled" class="size-6" />
        </div>
        <div>
          <div className="text-base sm:text-lg">{{ userEmailAddress }}</div>
          <div className="text-gray-600 text-sm sm:text-base">
            Member since {{ formatDate(memberSince) }}
          </div>
        </div>
      </div>

      <div className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-6">
          Account Details
        </h2>
        <div
          className="flex flex-col items-start sm:flex-row sm:items-center justify-between py-4 border-b"
        >
          <div className="flex items-center gap-4">
            <span>✉️ Email</span>
          </div>
          <span className="text-gray-600">{{ userEmailAddress }}</span>
        </div>

        <div
          className="flex flex-col items-start sm:flex-row sm:items-center justify-between py-4 border-b"
        >
          <div className="flex items-center gap-4">
            <span>🕒 Last Sign In</span>
          </div>
          <span className="text-gray-600">{{ formatDate(lastSignIn) }}</span>
        </div>
      </div>

      <div className="text-center">
        <button
          @click="logout"
          :disabled="!isLoggedIn"
          class="btn-login w-full font-medium text-center px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-300 transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  </div>
</template>
