<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="modelValue"
        class="fixed inset-0 z-50 overflow-y-auto"
        role="dialog"
      >
        <div class="flex min-h-screen items-center justify-center p-4">
          <!-- Backdrop -->
          <div
            class="fixed inset-0 bg-black/50 transition-opacity"
            @click="$emit('update:modelValue', false)"
          ></div>

          <!-- Modal panel -->
          <div
            class="relative bg-white rounded-lg shadow-xl max-w-lg w-full transform transition-all"
          >
            <!-- Header -->
            <div v-if="$slots.header" class="px-6 py-4 border-b">
              <slot name="header" />
            </div>

            <!-- Body -->
            <div class="px-6 py-4">
              <slot name="body" />
            </div>

            <!-- Footer -->
            <div
              v-if="$slots.footer"
              class="px-6 py-4 border-t flex justify-end bg-slate-100 rounded-b-lg"
            >
              <slot name="footer" />
            </div>

            <!-- Close button -->
            <button
              v-if="showClose"
              @click="$emit('update:modelValue', false)"
              class="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
            >
              <span class="sr-only">Close</span>
              <Icon name="heroicons:x-mark" class="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  showClose: {
    type: Boolean,
    default: true,
  },
});

defineEmits(["update:modelValue"]);
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .transform,
.modal-leave-active .transform {
  transition: transform 0.3s ease-out;
}

.modal-enter-from .transform {
  transform: scale(0.95);
}

.modal-leave-to .transform {
  transform: scale(0.95);
}
</style>
