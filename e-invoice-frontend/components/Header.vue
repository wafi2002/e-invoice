<template>
    <header class="border-b bg-white dark:bg-gray-900 shadow-sm w-full" >
        <UContainer class="flex items-center h-16 w-full">
            <!-- Toggle Sidebar Button -->
            <div class="shrink-0 flex items-center gap-x-3">
                <UButton icon="i-heroicons-bars-3" color="black" variant="ghost" @click="$emit('toggle-sidebar')" />
            </div>

            <!-- Actions -->
            <div class=" flex items-center gap-2 w-full">
                <!-- Navigation -->
                <UButton icon="i-heroicons-bell" color="gray" variant="ghost" style=" margin-left: auto;" />
                <UAvatar src="https://randomuser.me/api/portraits/men/85.jpg" />
            </div>
        </UContainer>
    </header>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[][]>([
    [
        {
            label: 'Guide',
            icon: 'i-lucide-book-open',
            children: [
                {
                    label: 'Introduction',
                    description: 'Fully styled and customizable components for Nuxt.',
                    icon: 'i-lucide-house'
                },
                {
                    label: 'Installation',
                    description: 'Learn how to install and configure Nuxt UI in your application.',
                    icon: 'i-lucide-cloud-download'
                },
                {
                    label: 'Icons',
                    icon: 'i-lucide-smile',
                    description: 'You have nothing to do, @nuxt/icon will handle it automatically.'
                },
                {
                    label: 'Colors',
                    icon: 'i-lucide-swatch-book',
                    description: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
                },
                {
                    label: 'Theme',
                    icon: 'i-lucide-cog',
                    description:
                        'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
                }
            ]
        },

    ]
])
</script>