<template>
  <!-- Conteneur grille fluide et centré -->
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-8 w-full max-w-7xl mx-auto pt-10 justify-items-center">

    <!-- CARTE 1 -->
    <div class="card-temoin relative w-full max-w-[360px] bg-[#1E293B] rounded-2xl p-6 sm:p-7 pt-12 sm:pt-14 border border-[#8F98BE] shadow-xl text-center transition-transform duration-300 hover:-translate-y-1 flex flex-col justify-between">
      <!-- AVATAR EN CHEVAUCHEMENT EN HAUT -->
      <div class="absolute -top-9 left-1/2 -translate-x-1/2">
        <img 
          src="@/assets/img/portrait1.webp" 
          alt="Photo de profil du témoin 1"
          width="80" 
          height="80" 
          loading="lazy"
          class="w-18 h-18 sm:w-20 sm:h-20 object-cover  shadow-lg bg-[#0C131B] ring-2 ring-[#8F98BE]"
        />
      </div>

      <!-- CONTENU DU TÉMOIGNAGE -->
      <div class="space-y-4 mt-2 flex-1 flex flex-col justify-between">
        <blockquote class="text-sm sm:text-base text-[#D7F3F5] italic leading-relaxed font-normal">
          « Collaborer avec Amandine a été une révélation. Son mélange de créativité et de rigueur technique est rare. »
        </blockquote>

        <!-- NOM & RÔLE DU TÉMOIN -->
        <div class="pt-4 border-t border-white/10">
          <h4 class="text-[#FEE4B3] font-semibold text-base sm:text-lg">Nom du Client 1</h4>
          <p class="text-xs sm:text-sm text-slate-400">Poste / Entreprise</p>
        </div>
      </div>
    </div>

    <!-- CARTE 2 -->
    <div
      class="card-temoin relative w-full max-w-[360px] bg-[#1E293B] rounded-2xl p-6 sm:p-7 pt-12 sm:pt-14 border border-[#8F98BE] shadow-xl text-center transition-transform duration-300 hover:-translate-y-1 flex flex-col justify-between">
      <!-- AVATAR EN CHEVAUCHEMENT EN HAUT -->
      <div class="absolute -top-9 left-1/2 -translate-x-1/2">
        <img 
          src="@/assets/img/portrait2.webp" 
          alt="Photo de profil du témoin 2"
          width="80" 
          height="80" 
          loading="lazy"
          class="w-18 h-18 sm:w-20 sm:h-20 object-cover  shadow-lg bg-[#0C131B] ring-2 ring-[#8F98BE]"
        />
      </div>

      <!-- CONTENU DU TÉMOIGNAGE -->
      <div class="space-y-4 mt-2 flex-1 flex flex-col justify-between">
        <blockquote class="text-sm sm:text-base text-[#D7F3F5] italic leading-relaxed font-normal">
          « Collaborer avec Amandine a été une révélation. Son mélange de créativité et de rigueur technique est rare. »
        </blockquote>

        <!-- NOM & RÔLE DU TÉMOIN -->
        <div class="pt-4 border-t border-white/10">
          <h4 class="text-[#FEE4B3] font-semibold text-base sm:text-lg">Nom du Client 2</h4>
          <p class="text-xs sm:text-sm text-slate-400">Poste / Entreprise</p>
        </div>
      </div>
    </div>

    <!-- CARTE 3 -->
    <div
      class="card-temoin relative w-full max-w-[360px] bg-[#1E293B] rounded-2xl p-6 sm:p-7 pt-12 sm:pt-14 border border-[#8F98BE] shadow-xl text-center transition-transform duration-300 hover:-translate-y-1 flex flex-col justify-between">
      <!-- AVATAR EN CHEVAUCHEMENT EN HAUT -->
      <div class="absolute -top-9 left-1/2 -translate-x-1/2">
        <img 
          src="@/assets/img/portrait3.webp" 
          alt="Photo de profil du témoin 3"
          width="80" 
          height="80" 
          loading="lazy"
          class="w-18 h-18 sm:w-20 sm:h-20 object-cover  shadow-lg bg-[#0C131B] ring-2 ring-[#8F98BE]"
        />
      </div>

      <!-- CONTENU DU TÉMOIGNAGE -->
      <div class="space-y-4 mt-2 flex-1 flex flex-col justify-between">
        <blockquote class="text-sm sm:text-base text-[#D7F3F5] italic leading-relaxed font-normal">
          « Collaborer avec Amandine a été une révélation. Son mélange de créativité et de rigueur technique est rare. »
        </blockquote>

        <!-- NOM & RÔLE DU TÉMOIN -->
        <div class="pt-4 border-t border-white/10">
          <h4 class="text-[#FEE4B3] font-semibold text-base sm:text-lg">Nom du Client 3</h4>
          <p class="text-xs sm:text-sm text-slate-400">Poste / Entreprise</p>
        </div>
      </div>
    </div>

  </div>
</template>