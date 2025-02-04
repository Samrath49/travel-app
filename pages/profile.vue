<script setup>
definePageMeta({
  middleware: "auth",
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
  <div className="max-w-2xl mx-auto p-8">
    <h1 className="text-3xl font-bold mb-8">Profile</h1>

    <div className="flex items-center gap-4 mb-12">
      <div
        className="bg-primary/35 p-3 flex justify-center items-center rounded-full"
      >
        <Icon name="weui:me-filled" class="size-6" />
      </div>
      <div>
        <div className="text-lg">{{ userEmailAddress }}</div>
        <div className="text-gray-600">
          Member since {{ formatDate(memberSince) }}
        </div>
      </div>
    </div>

    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Account Details</h2>
      <div className="flex items-center justify-between py-4 border-b">
        <div className="flex items-center gap-4">
          <Icon name="ph:envelope" className="w-6 h-6" />
          <span>Email</span>
        </div>
        <span className="text-gray-600">{{ userEmailAddress }}</span>
      </div>

      <div className="flex items-center justify-between py-4 border-b">
        <div className="flex items-center gap-4">
          <Icon name="ph:clock" className="w-6 h-6" />
          <span>Last Sign In</span>
        </div>
        <span className="text-gray-600">{{ formatDate(lastSignIn) }}</span>
      </div>
    </div>

    <div className="text-center">
      <button
        @click="logout"
        class="btn-login w-full font-medium text-center px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-300 transition-colors"
      >
        Logout
      </button>
    </div>
  </div>
</template>
