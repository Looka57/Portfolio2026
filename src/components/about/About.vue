<script setup lang="ts">
import AboutSprite from './AboutSprite.vue';

</script>

<template>
  <section class="py-12 sm:py-16 px-4 sm:px-6 w-full">
    <!-- EN-TÊTE DE SECTION -->
    <div class="flex items-center justify-center gap-3 sm:gap-6 mb-8 sm:mb-12 text-center ">
      <!-- Trait gauche (Masqué sur très petits écrans) -->
      <img class="hidden sm:inline-block h-auto max-w-[60px] md:max-w-[100px] object-contain select-none"
        src="@/assets/icons/trait.png" alt="">

      <h2 class="text-2xl sm:text-3xl md:text-4xl uppercase tracking-wider text-[#D7F3F5] font-semibold" id="about">
        A propos
      </h2>


      <!-- Trait droit (Masqué sur très petits écrans) -->
      <img src="@/assets/icons/trait1.png" alt=""
        class="hidden sm:inline-block h-auto max-w-[60px] md:max-w-[100px] object-contain select-none">
    </div>

    <!-- A Propos  -->
    <div class="aboutSprite flex justify-center items-center gap-6 mt-8 w-full" id="skills">
      <AboutSprite />
    </div>


  </section>
</template>


<style scoped>
section {
  background-color: #0f172a;
}
</style>