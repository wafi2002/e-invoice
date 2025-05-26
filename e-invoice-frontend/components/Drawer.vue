<template>
    <aside :class="[
        'min-h-screen transition-all duration-300 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 shadow-sm flex flex-col',
        open ? 'w-64' : 'w-0'
    ]">
        <!-- Header Drawer -->
        <div class="flex items-center h-16 px-4 border-b border-gray-200 dark:border-gray-700 shrink-0 shadow">
            <span class="text-lg font-semibold text-gray-800 dark:text-white">MyApp</span>
        </div>

        <!-- Navigation content -->
        <nav class="flex-1 overflow-y-auto px-4 mt-4" :class="open ? 'px-4' : 'px-0'">
            <UNavigationMenu orientation="vertical" :items="itemsWithPadding"
                class="data-[orientation=vertical]:w-48" />
        </nav>
    </aside>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { computed } from 'vue'

const items = ref<NavigationMenuItem[][]>([
    [
        {
            label: 'Guide',
            icon: 'i-lucide-book-open',
            ui: {
                childItem: 'pb-3',   // padding bawah pada anak item
                link: 'px-4 py-2'   // padding kiri-kanan 4, atas-bawah 2 pada link
            },
            children: [
                {
                    label: 'Introduction',
                    description: 'Fully styled and customizable components for Nuxt.',
                    icon: 'i-lucide-house',
                    ui: {
                        link: 'px-4 py-2'  // jarakkan tiap link bawahnya
                    }
                },
                {
                    label: 'Installation',
                    description: 'Learn how to install and configure Nuxt UI in your application.',
                    icon: 'i-lucide-cloud-download',
                    ui: {
                        link: 'px-4 py-2'  // jarakkan tiap link bawahnya
                    }
                },
                {
                    label: 'Icons',
                    icon: 'i-lucide-smile',
                    description: 'You have nothing to do, @nuxt/icon will handle it automatically.',
                    ui: {
                        link: 'px-4 py-2'  // jarakkan tiap link bawahnya
                    }
                },
                {
                    label: 'Colors',
                    icon: 'i-lucide-swatch-book',
                    description: 'Choose a primary and a neutral color from your Tailwind CSS theme.',
                    ui: {
                        link: 'px-4 py-2'  // jarakkan tiap link bawahnya
                    }
                },
                {
                    label: 'Theme',
                    icon: 'i-lucide-cog',
                    description: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.',
                    ui: {
                        link: 'px-4 py-2'  // jarakkan tiap link bawahnya
                    }
                }
            ]
        },
        {
            label: 'Composables',
            icon: 'i-lucide-database',
            ui: {
                childItem: 'pb-3',   // padding bawah pada anak item
                link: 'px-4 py-2'   // padding kiri-kanan 4, atas-bawah 2 pada link
            },
            children: [
                {
                    label: 'defineShortcuts',
                    icon: 'i-lucide-file-text',
                    description: 'Define shortcuts for your application.',
                    to: '/composables/define-shortcuts',
                    ui: {
                        link: 'px-4 py-2'  // jarakkan tiap link bawahnya
                    }
                },
                {
                    label: 'useOverlay',
                    icon: 'i-lucide-file-text',
                    description: 'Display a modal/slideover within your application.',
                    to: '/composables/use-overlay',
                    ui: {
                        link: 'px-4 py-2'  // jarakkan tiap link bawahnya
                    }
                },
                {
                    label: 'useToast',
                    icon: 'i-lucide-file-text',
                    description: 'Display a toast within your application.',
                    to: '/composables/use-toast',
                    ui: {
                        link: 'px-4 py-2'  // jarakkan tiap link bawahnya
                    }
                }
            ]
        },
        {
            label: 'Components',
            icon: 'i-lucide-box',
            to: '/components',
            active: true,
            defaultOpen: true,
            ui: {
                childItem: 'pb-3',   // padding bawah pada anak item
                link: 'px-4 py-2'   // padding kiri-kanan 4, atas-bawah 2 pada link
            },
            children: [
                {
                    label: 'Link',
                    icon: 'i-lucide-file-text',
                    description: 'Use NuxtLink with superpowers.',
                    to: '/components/link',
                    ui: {
                        link: 'px-4 py-2'  // jarakkan tiap link bawahnya
                    }
                },
                {
                    label: 'Modal',
                    icon: 'i-lucide-file-text',
                    description: 'Display a modal within your application.',
                    to: '/components/modal',
                    ui: {
                        link: 'px-4 py-2'  // jarakkan tiap link bawahnya
                    }
                },
                {
                    label: 'NavigationMenu',
                    icon: 'i-lucide-file-text',
                    description: 'Display a list of links.',
                    to: '/components/navigation-menu',
                    ui: {
                        link: 'px-4 py-2'  // jarakkan tiap link bawahnya
                    }
                },
                {
                    label: 'Pagination',
                    icon: 'i-lucide-file-text',
                    description: 'Display a list of pages.',
                    to: '/components/pagination',
                    ui: {
                        link: 'px-4 py-2'  // jarakkan tiap link bawahnya
                    }
                },
                {
                    label: 'Popover',
                    icon: 'i-lucide-file-text',
                    description: 'Display a non-modal dialog that floats around a trigger element.',
                    to: '/components/popover',
                    ui: {
                        link: 'px-4 py-2'  // jarakkan tiap link bawahnya
                    }
                },
                {
                    label: 'Progress',
                    icon: 'i-lucide-file-text',
                    description: 'Show a horizontal bar to indicate task progression.',
                    to: '/components/progress',
                    ui: {
                        link: 'px-4 py-2'  // jarakkan tiap link bawahnya
                    }
                }
            ]
        }
    ],
    [
        {
            label: 'GitHub',
            icon: 'i-simple-icons-github',
            badge: '3.8k',
            to: 'https://github.com/nuxt/ui',
            target: '_blank',
            ui: {
                link: 'px-4 py-2'  // jarakkan tiap link bawahnya
            }
        },
        {
            label: 'Help',
            icon: 'i-lucide-circle-help',
            disabled: true,
            ui: {
                link: 'px-4 py-2'  // jarakkan tiap link bawahnya
            }
        }
    ]
])

const itemsWithPadding = computed(() => {
    return items.value.map(group =>
        group.map(item => {
            const newItem = { ...item }
            if (props.open) {
                newItem.ui = {
                    ...newItem.ui,
                    link: 'px-4 py-2',
                    childItem: 'pb-3'
                }
            } else {
                newItem.ui = {
                    ...newItem.ui,
                    link: 'px-0 py-0',
                    childItem: 'pb-0'
                }
            }
            if (newItem.children) {
                newItem.children = newItem.children.map(child => ({
                    ...child,
                    ui: {
                        ...child.ui,
                        link: props.open ? 'px-4 py-2' : 'px-0 py-0'
                    }
                }))
            }
            return newItem
        })
    )
})


const props = defineProps({
    open: {
        type: Boolean,
        required: true
    }
})

</script>
