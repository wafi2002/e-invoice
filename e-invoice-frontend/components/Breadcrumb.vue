<template>
    <UContainer class="flex justify-between items-center pb-4">
        <div>
            <h1>E-Invoice</h1>
        </div>
        <UBreadcrumb :items="items">
            <template #dropdown="{ item }">
                <UDropdownMenu :items="item.children">
                    <UButton :icon="item.icon" color="neutral" variant="link" class="p-0.5" />
                </UDropdownMenu>
            </template>
        </UBreadcrumb>
    </UContainer>
</template>


<script setup lang="ts">
import type { BreadcrumbItem } from '@nuxt/ui'

type CustomBreadcrumbItem = BreadcrumbItem & {
    children?: { label: string }[]
}

const items: CustomBreadcrumbItem[] = [
    {
        label: 'Home',
        to: '/'
    },
    {
        slot: 'dropdown' as const,
        icon: 'i-lucide-ellipsis',
        children: [
            { label: 'Documentation' },
            { label: 'Themes' },
            { label: 'GitHub' }
        ]
    },
    {
        label: 'Components',
        to: '/components'
    },
    {
        label: 'Breadcrumb',
        to: '/components/breadcrumb'
    }
]
</script>