<script setup>
import TestimonialCard from "./TestimonialCard.vue"
</script>

<template>
  <section class="py-12 sm:py-16 px-4 sm:px-6 w-full">
    <div class="max-w-7xl mx-auto">

      <!-- EN-TÊTE DE SECTION -->
      <div class="flex items-center justify-center gap-3 sm:gap-6 mb-8 sm:mb-12 text-center">
        <!-- Trait gauche (Masqué sur très petits écrans pour gagner de la place) -->
        <img 
          src="@/assets/icons/trait.png" 
          alt="" 
          class="hidden sm:inline-block h-auto max-w-[60px] md:max-w-[100px] object-contain select-none"
        >

        <h2 class="text-2xl sm:text-3xl md:text-4xl uppercase tracking-wider text-[#D7F3F5] font-semibold">
          Ceux qui en parlent le mieux !
        </h2>

        <!-- Trait droit (Masqué sur très petits écrans) -->
        <img 
          src="@/assets/icons/trait1.png" 
          alt="" 
          class="hidden sm:inline-block h-auto max-w-[60px] md:max-w-[100px] object-contain select-none"
        >
      </div>

      <!-- CARTE(S) DE TÉMOIGNAGE -->
      <div class="flex flex-col sm:flex-row flex-wrap justify-center items-center sm:items-stretch gap-6">
        <TestimonialCard />
      </div>

    </div>
  </section>
</template>

<style scoped>
section {
  background-color: #0f172a;
}
</style>