<template>
  <div class="font-montserrat">
    <Navigation />
    <main class="container mx-auto p-4 min-h-screen">
      <slot />
    </main>

    <footer class="bg-gray-800 text-white p-4 text-center">
      © {{ new Date().getFullYear() }} Hatice Kübra Daş. Tüm Hakları Saklıdır.
    </footer>
  </div>
</template>
