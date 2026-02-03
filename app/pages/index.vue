<template>
  <div>
    <h1 class="text-5xl font-extrabold text-center my-8 text-blue-700">
      Merhaba! Ben Hatice Kübra.
    </h1>
    <p class="text-xl text-center text-gray-700 mb-12">
      Yaratıcı ve dinamik web deneyimleri oluşturmayı seven bir geliştiriciyim.
    </p>

    <div
      class="relative h-64 overflow-hidden mb-12 bg-gray-100 rounded-lg shadow-inner"
    >
      <img
        src="/tom.png"
        alt="Tom"
        class="absolute h-24 animate-tom"
        style="left: -100px"
      />
      <img
        src="/jerry.png"
        alt="Jerry"
        class="absolute h-16 animate-jerry"
        style="left: -50px"
      />
      <img
        src="/bugsbunny.png"
        alt="Bugs Bunny"
        class="absolute h-20 animate-bugsbunny"
        style="right: -100px; bottom: 0"
      />
    </div>

    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
      >
        <h2 class="text-2xl font-semibold text-blue-600 mb-3">Projelerim</h2>
        <p class="text-gray-600">
          Yaptığım web uygulamalarını ve kod örneklerini keşfedin.
        </p>
        <NuxtLink
          to="/projeler"
          class="text-blue-500 hover:underline mt-4 inline-block"
          >Daha Fazla Gör &rarr;</NuxtLink
        >
      </div>
      <div
        class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
      >
        <h2 class="text-2xl font-semibold text-blue-600 mb-3">
          Blog Yazılarım
        </h2>
        <p class="text-gray-600">
          Teknoloji, geliştirme ve daha fazlası hakkında yazdıklarımı okuyun.
        </p>
        <NuxtLink
          to="/blog"
          class="text-blue-500 hover:underline mt-4 inline-block"
          >Bloga Git &rarr;</NuxtLink
        >
      </div>
      <div
        class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
      >
        <h2 class="text-2xl font-semibold text-blue-600 mb-3">İletişim</h2>
        <p class="text-gray-600">
          Bir proje için mi iş birliği yapmak istersiniz? İletişime geçin!
        </p>
        <NuxtLink
          to="/iletisim"
          class="text-blue-500 hover:underline mt-4 inline-block"
          >İletişim Formu &rarr;</NuxtLink
        >
      </div>
    </section>
  </div>
</template>

<script setup>
// Bu sayfa default layout'u kullanacak
definePageMeta({
  layout: "default",
});
</script>

<style scoped>
/* Tailwind CSS Animasyonları */
@keyframes tomChase {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(calc(100vw - 150px));
  } /* Ekran genişliğine göre ayarla */
  100% {
    transform: translateX(0);
  }
}

@keyframes jerryRun {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(calc(100vw - 100px));
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes bugsBunnyEnterExit {
  0% {
    transform: translateX(0) translateY(0);
    opacity: 0;
  }
  20% {
    transform: translateX(-150px) translateY(-20px);
    opacity: 1;
  }
  80% {
    transform: translateX(-150px) translateY(-20px);
    opacity: 1;
  }
  100% {
    transform: translateX(0) translateY(0);
    opacity: 0;
  }
}

.animate-tom {
  animation: tomChase 10s linear infinite;
  z-index: 10;
}

.animate-jerry {
  animation: jerryRun 10s linear infinite 0.5s; /* Tom'dan yarım saniye sonra başla */
  z-index: 11;
}

.animate-bugsbunny {
  animation: bugsBunnyEnterExit 15s ease-in-out infinite;
  z-index: 12;
}
</style>
