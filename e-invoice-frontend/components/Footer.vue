<!-- components/Footer.vue -->
<template>
  <footer class="border-t bg-white dark:bg-gray-900 text-sm py-6 mt-auto">
    <UContainer class="flex flex-col sm:flex-row justify-between items-center gap-4">
      <div class="text-gray-500 dark:text-gray-400">
        © {{ new Date().getFullYear() }} My App. All rights reserved.
      </div>

      <div class="flex gap-4">
        <UButton to="/privacy" variant="link" color="gray" label="Privacy Policy" />
        <UButton to="/terms" variant="link" color="gray" label="Terms of Service" />
      </div>
    </UContainer>
  </footer>
</template>
