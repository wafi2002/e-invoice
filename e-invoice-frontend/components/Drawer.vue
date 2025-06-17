<template>
    <aside :class="[
        'min-h-screen transition-all duration-300 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 shadow-sm flex flex-col',
        open ? 'w-70' : 'w-0'
    ]">
        <!-- Header Drawer -->
        <div class="flex items-center h-16 px-4 border-b border-gray-200 dark:border-gray-700 shadow">
            <span class="text-lg font-semibold text-gray-800 dark:text-white">E-Invoice</span>
        </div>

        <!-- Navigation content -->
        <nav class="flex-1 overflow-y-auto mt-4" :class="open ? 'px-4' : 'px-0'">
            <UNavigationMenu orientation="vertical" :items="items" class="data-[orientation=vertical]:w-60" />
        </nav>
    </aside>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const rawMenu = [
    {
        label: 'Integration',
        icon: 'i-lucide-plug',
        children: [
            ['Manual Integration', 'i-lucide-settings', 'Fully styled and customizable components for Nuxt.'],
            ['Manual Oracle Fetch', 'i-lucide-database', 'Learn how to install and configure Nuxt UI in your application.'],
            ['Import JSON and XML', 'i-lucide-code', 'You have nothing to do, @nuxt/icon will handle it automatically.'],
            ['Import CSV (Sales)', 'i-lucide-file-spreadsheet', 'Choose a primary and a neutral color from your Tailwind CSS theme.'],
            ['Purchase Invoice', 'i-lucide-receipt', 'Customize components using `class` or `ui` props.'],
            ['Integration Log', 'i-lucide-clipboard-list', 'Customize components using `class` or `ui` props.']
        ]
    },
    {
        label: 'Dashboards',
        icon: 'i-lucide-layout-dashboard',
        children: [
            ['Group Of Companies', 'i-lucide-building-2', 'Define shortcuts for your application.', '/composables/define-shortcuts'],
            ['Company', 'i-lucide-building', 'Display a modal/slideover within your application.', '/composables/use-overlay'],
            ['Status', 'i-lucide-activity', 'Display a toast within your application.', '/composables/use-toast']
        ]
    },
    {
        label: 'Company',
        icon: 'i-lucide-building',
        to: '/components',
        active: true,
        defaultOpen: true,
        children: [
            ['Company Setup', 'i-lucide-settings', 'Use NuxtLink with superpowers.', '/components/link'],
            ['New Item Category', 'i-lucide-tags', 'Display a modal within your application.', '/components/modal'],
            ['Payment History', 'i-lucide-credit-card', 'Display a list of links.', '/components/navigation-menu']
        ]
    },
    {
        label: 'E-Invoice',
        icon: 'i-lucide-file-digit',
        to: '/components',
        class: 'pb-3 px-4 py-2',
        active: true,
        defaultOpen: true,
        children: [
            ['Sales','i-lucide-shopping-cart'],
            ['Consolidated','i-lucide-layers'],
            ['Self-Billed','i-lucide-user-check'],
            ['Debit Note','i-lucide-arrow-up-right'],
            ['Credit Note','i-lucide-arrow-down-left'],
            ['Cancellation','i-lucide-x-octagon'],
            ['Refund','i-lucide-rotate-ccw'],
        ]
    },
    {
        label: 'Customer',
        icon: 'i-lucide-user',
        to: '/components',
        class: 'pb-3 px-4 py-2',
        active: true,
        defaultOpen: true,
        children:[]
    },
    {
        label: 'Vendor',
        icon: 'i-lucide-handshake',
        to: '/components',
        class: 'pb-3 px-4 py-2',
        active: true,
        defaultOpen: true,
        children:[]
    },
    {
        label: 'Branch',
        icon: 'i-lucide-network',
        to: '/components',
        class: 'pb-3 px-4 py-2',
        active: true,
        defaultOpen: true,
        children:[]
    },
    {
        label: 'Reports',
        icon: 'i-lucide-bar-chart-3',
        to: '/components',
        class: 'pb-3 px-4 py-2',
        active: true,
        defaultOpen: true,
        children: [
            ['API Log','i-lucide-terminal'],
            ['Branches','i-lucide-building-2'],
        ]
    },
    {
        label: 'Admin',
        icon: 'i-lucide-shield-check',
        to: '/components',
        class: 'pb-3 px-4 py-2',
        active: true,
        defaultOpen: true,
        children: [
            ['FMH Data Mapping','i-lucide-map'],
            ['Seito Data Mapping', 'i-lucide-map'],
            ['User Setup', 'i-lucide-user-plus'],
            ['User Log', 'i-lucide-list'],
            ['System Log', 'i-lucide-server'],
            ['Classification Code','i-lucide-tags'],
            ['Country Code','i-lucide-globe'],
            ['Currency Code','i-lucide-dollar-sign'],
            ['Invoice Type Code', 'i-lucide-receipt'],
            ['MSIC Code','i-lucide-barcode'],
            ['Payment Mode Code', 'i-lucide-credit-card'],
            ['State Code', 'i-lucide-map-pin'],
            ['Tax Type Code', 'i-lucide-percent'],
            ['Unit Of Measurement', 'i-lucide-ruler']
        ]
    },
    {
        label: 'Documentation',
        icon: 'i-lucide-file-text',
        to: '/components',
        class: 'pb-3 px-4 py-2',
        active: true,
        defaultOpen: true,
        children: [
            ['System Flow','i-lucide-git-branch'],
            ['Faq','i-lucide-help-circle'],
            ['LHDN Guides', 'i-lucide-book-open-check'],
            ['API Updates', 'i-lucide-code'],
            ['Classification Code', 'i-lucide-tags'],
            ['Country Code', 'i-lucide-globe'],
            ['Currency Code', 'i-lucide-dollar-sign'],
            ['Invoice Type Code', 'i-lucide-receipt'],
            ['MSIC Code', 'i-lucide-barcode'],
            ['Payment Mode Code', 'i-lucide-credit-card'],
            ['State Code', 'i-lucide-map-pin'],
        ]
    }

]

const defaultChildClass = 'px-4 py-2'
const defaultParentClass = 'pb-3 px-4 py-2'


const items = ref<NavigationMenuItem[][]>([
    rawMenu.map((menu) => ({
        label: menu.label,
        icon: menu.icon,
        to: menu.to,
        active: menu.active ?? false,
        defaultOpen: menu.defaultOpen ?? false,
        class: defaultParentClass,
        children: menu.children.map(child => ({
            label: child[0],
            icon: child[1],
            description: child[2],
            to: child[3],
            class: defaultChildClass
        }))
    }))
])

const props = defineProps({
    open: {
        type: Boolean,
        required: true
    }
})

</script>
