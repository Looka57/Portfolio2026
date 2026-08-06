<script setup lang="ts">
import ContactCards from './ContactCards.vue';

</script>

<template>
  <section class="py-12 sm:py-16 px-4 sm:px-6 w-full">
    <!-- EN-TÊTE DE SECTION -->
    <div class="flex items-center justify-center gap-3 sm:gap-6 mb-8 sm:mb-12 text-center ">
      <!-- Trait gauche (Masqué sur très petits écrans) -->
      <img class="hidden sm:inline-block h-auto max-w-[60px] md:max-w-[100px] object-contain select-none"
         src="@/assets/icons/trait.png" alt="icons de trait décoratif">

      <h2 class="text-2xl sm:text-3xl md:text-4xl uppercase tracking-wider text-[#D7F3F5] font-semibold" id="contact">
        Contact
      </h2>


      <!-- Trait droit (Masqué sur très petits écrans) -->
      <img src="@/assets/icons/trait1.png" alt="icons de trait décoratif"
        class="hidden sm:inline-block h-auto max-w-[60px] md:max-w-[100px] object-contain select-none">
    </div>

    <!-- Contact  -->
    <div class="aboutSprite flex justify-center items-center gap-6 mt-8 w-full" id="contact">
      <ContactCards />
    </div>


  </section>
</template>




<style scoped>
section {
  background-color: #0f172a;
}
</style>