<template>
    <UApp class="h-screen overflow-hidden">
        <div class="flex h-full">
            <!-- Drawer tolak semua sekali -->
            <Drawer :open="sidebarOpen" />
            <!-- Kumpulan (Header + Content + Footer) -->
            <div class="flex flex-col flex-1 transition-all duration-300">
                <Header @toggle-sidebar="sidebarOpen = !sidebarOpen" />
                <div class="mt-4 px-4">
                    <Breadcrumb />
                </div>
                <div class="flex-1 overflow-auto">
                    <NuxtPage />
                </div>

                <Footer />
            </div>
        </div>
    </UApp>
</template>


<script setup>
import { ref } from 'vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Drawer from '~/components/Drawer.vue'
import Breadcrumb from '~/components/Breadcrumb.vue'

const sidebarOpen = ref(true)
</script>
