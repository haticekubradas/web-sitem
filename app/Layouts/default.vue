<template>
  <div class="font-montserrat">
    <header class="bg-special-blue text-white p-4">
      <nav class="container mx-auto flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-bold"
          >Hatice Kübra'nın Portfolyosu</NuxtLink
        >
        <ul class="flex space-x-4">
          <li>
            <NuxtLink to="/" class="hover:text-blue-200">Ana Sayfa</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/hakkimda" class="hover:text-white"
              >Hakkımda</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/projeler" class="hover:text-white"
              >Projelerim</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/blog" class="hover:text-white">Blog</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/iletisim" class="hover:text-white"
              >İletişim</NuxtLink
            >
          </li>
        </ul>
      </nav>
    </header>

    <main class="container mx-auto p-4 min-h-screen">
      <slot />
    </main>

    <footer class="bg-gray-800 text-white p-4 text-center">
      © {{ new Date().getFullYear() }} Hatice Kübra. Tüm Hakları Saklıdır.
    </footer>
  </div>
</template>
