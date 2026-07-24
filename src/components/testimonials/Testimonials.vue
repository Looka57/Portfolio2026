<script setup>
import LogoEntreprise from "./LogoEntreprise.vue";
import TestimonialCard from "./TestimonialCard.vue"
</script>

<template>
  <section class="py-12 sm:py-16 px-4 sm:px-6 w-full">
    <div class="max-w-7xl mx-auto">

      <!-- EN-TÊTE DE SECTION -->
      <div class="flex items-center justify-center gap-3 sm:gap-6 mb-8 sm:mb-12 text-center">
        <!-- Trait gauche (Masqué sur très petits écrans) -->
        <img src="@/assets/icons/trait.png" alt=""
          class="hidden sm:inline-block h-auto max-w-[60px] md:max-w-[100px] object-contain select-none">

        <h2 class="text-2xl sm:text-3xl md:text-4xl uppercase tracking-wider text-[#D7F3F5] font-semibold">
          Ceux qui en parlent le mieux !
        </h2>

        <!-- Trait droit (Masqué sur très petits écrans) -->
        <img src="@/assets/icons/trait1.png" alt=""
          class="hidden sm:inline-block h-auto max-w-[60px] md:max-w-[100px] object-contain select-none">
      </div>

      <!-- CARTE(S) DE TÉMOIGNAGE -->
      <div class="flex flex-col sm:flex-row flex-wrap justify-center items-center sm:items-stretch gap-6">
        <TestimonialCard />
      </div>

      <!-- LOGO DES ENTREPRISES QUI M'ONT FAIT CONFIANCE -->
      <div class="logoEntreprise flex flex-wrap justify-around gap-6 mt-8 w-full border border-2 border-[#8F98BE] rounded-lg p-4 sm:p-6 bg-[#1E293B] ">
        <LogoEntreprise />
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  background-color: #0f172a;
}
</style>