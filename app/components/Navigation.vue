<template>
  <header class="bg-gray-800 font-montserrat p-4">
    <nav class="container mx-auto flex justify-between items-center">
      <NuxtLink to="/" class="text-2xl font-bold text-white"
        >Hatice Kübra Daş'ın Portfolyosu</NuxtLink
      >
      <ul class="flex space-x-4 text-white">
        <li>
          <NuxtLink to="/" class="hover:text-blue-200">Ana Sayfa</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/hakkimda" class="hover:text-blue-200"
            >Hakkımda</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/projeler" class="hover:text-blue-200"
            >Projelerim</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/blog" class="hover:text-blue-200">Blog</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/iletisim" class="hover:text-blue-200"
            >İletişim</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </header>
</template>
