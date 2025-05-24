<script lang="ts" setup>
const colorMode = useColorMode()

const color = computed(() => colorMode.value === 'dark' ? '#1b1718' : '#ffffff')

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color },
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = 'E-Invoice'
const description = 'E-Invoice is a web application for managing invoices and payments.'

useSeoMeta({
  title,
  titleTemplate: '%s - E-Invoice',
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/og-image.png',
  ogUrl: 'https://e-invoice.example.com',
  twitterCard: 'summary_large_image',
  twitterSite: '@example',
  twitterCreator: '@example'
})
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
