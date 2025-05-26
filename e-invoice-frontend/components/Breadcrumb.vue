<template>
    <UContainer class="flex justify-between items-center">
        <div>
            <!-- Mungkin logo atau heading di sini -->
            <h1>MyApp</h1>
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

const items = [
    {
        label: 'Home',
        to: '/'
    },
    {
        slot: 'dropdown' as const,
        icon: 'i-lucide-ellipsis',
        children: [
            {
                label: 'Documentation'
            },
            {
                label: 'Themes'
            },
            {
                label: 'GitHub'
            }
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
] satisfies BreadcrumbItem[]
</script>