<!-- pages/index.vue -->
<template>
    <!-- Page background -->
    <div class="min h-screen bg-gray-100 px-6 pt-6">
        <!-- Card wrapper: enable  flex-wrap so cards go to the next line -->
        <div class="flex flex-wrap gap-6 justify-start">
            <!-- Only render in client side only -->
            <ClientOnly>
                <!-- Chart with card -->
                <ChartCard />
            </ClientOnly>
            <!-- Welcome card -->
            <Card />
        </div>
    </div>
</template>
