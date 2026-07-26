<template>
  <section class="p-3 sticky_section sticky_section--1" >
    <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">

      <!-- Container des cartes responsive -->
      <div class="container mx-auto px-4 py-8 md:py-16 ">
        <div
        class="w-full  flex flex-wrap justify-center items-stretch gap-6 md:gap-10 lg:gap-14 w-full max-w-7xl mx-auto px-4">
        <!-- TODO: peut etre allonger le lg:gap-14 a lg:gap - 35 -->

          <!-- CARD 1: ADEM -->
          <article
            class="group relative w-full sm:w-[328px] max-w-[340px] bg-[#1E293B]/40 border-2 border-[#121137] rounded-3xl p-4 shadow-[3px_5px_15px_#121137] transition-all duration-300 hover:scale-105 hover:border-[#8F98BE] ">
            <!-- Cadre écran -->
            <div
              class="relative w-full h-[200px] sm:h-[220px] flex items-center justify-center overflow-hidden rounded-xl bg-black/20">
              <!-- Fond du moniteur -->
              <img class="w-full h-full object-contain pointer-events-none select-none" src="@/assets/img/ecran1.png"
                alt="Moniteur pixel">

              <!-- Contenu interne de l'écran (image ajustée) -->
              <div class="absolute inset-x-6 top-5 bottom-5 flex items-center justify-center overflow-hidden p-2"> 
                <img class="max-w-full max-h-full object-contain" src="@/assets/img/rapportAdem.png"
                  alt="Rapport d'activité ADEM">

                <!-- Overlay au survol avec bouton -->
                <div
                  class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a href="https://adem2023.lu/" target="_blank" class="px-4 py-2 bg-[#FEE4B3] text-black rounded-lg text-sm font-semibold hover:bg-[#D7F3F5] transition-colors shadow-lg">
                    Voir le site
                  </a>
                </div>
              </div>
            </div>
            <!-- Infos sous l'écran -->
            <div class="mt-4 text-left">
              <h3 class="text-lg sm:text-xl font-bold font-['Kode_Mono'] text-[#FEE4B3] mb-1">
                Rapport d'activité 2023
              </h3>
              <p class="text-xs text-gray-300 line-clamp-2 mb-4">
                Projet de stage réalisé pour le Ministère du travail du Luxemboourg (ADEM).
              </p>

              <!-- Logos Stack -->
              <div class="flex flex-wrap items-center gap-2">
                <img class="h-5 sm:h-9 object-contain" src="@/assets/icons/html.png" alt="HTML5">
                <img class="h-5 sm:h-9 object-contain" src="@/assets/icons/css.png" alt="CSS3">
                <img class="h-5 sm:h-9 object-contain" src="@/assets/icons/php.png" alt="PHP">
                <img class="h-5 sm:h-9 object-contain" src="@/assets/icons/mysql.png" alt="MySQL">
              </div>
            </div>

          </article>


          <!-- CARD 2: MNS -->
          <article class="group relative w-full sm:w-[328px] max-w-[340px] bg-[#1E293B]/60 border-2 border-[#121137] rounded-3xl p-4 shadow-[3px_5px_15px_#121137] transition-all duration-300 hover:scale-105 hover:border-[#8F98BE] ">

            <div class="relative w-full h-[200px] sm:h-[220px] flex items-center justify-center overflow-hidden rounded-xl bg-black/20">
              <img class="w-full h-full object-contain pointer-events-none select-none" src="@/assets/img/ecran2.png"
                alt="Moniteur pixel">

              <div class="absolute inset-x-6 top-4 bottom-9 flex items-center justify-center overflow-hidden p-2">
                <img class="max-w-full max-h-full rounded-lg object-cover" src="@/assets/img/admin.jpg" alt="Admin MNS">

                <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a href="https://github.com/Looka57/AdminMnsV1.git" target="_blank"
                    class="px-4 py-2 bg-[#FEE4B3] text-black rounded-lg text-sm font-semibold hover:bg-[#D7F3F5] transition-colors shadow-lg">
                    Voir le repo
                  </a>
                </div>
              </div>
            </div>

            <div class="mt-4 text-left">
              <h3 class="text-lg sm:text-xl font-bold font-['Kode_Mono'] text-[#FEE4B3] mb-1">
                Admin MNS
              </h3>
              <p class="text-xs text-gray-300 line-clamp-2 mb-4"> Projet fil rouge développé durant la formation CDA à Metz Numeric School.</p>

              <div class="flex flex-wrap items-center gap-2">
                <img class="h-5 sm:h-9 object-contain" src="@/assets/icons/html.png" alt="HTML5">
                <img class="h-5 sm:h-9 object-contain" src="@/assets/icons/css.png" alt="CSS3">
                <img class="h-5 sm:h-9 object-contain" src="@/assets/icons/cSharp.png" alt="C#">
                <img class="h-5 sm:h-6 object-contain" src="@/assets/icons/dotnet.PNG" alt=".NET">
              </div>
            </div>

          </article>


          <!-- CARD 3: ASP -->
          <article
            class="group relative w-full sm:w-[328px] max-w-[340px] bg-[#1E293B]/60 border-2 border-[#121137] rounded-3xl p-4 shadow-[3px_5px_15px_#121137] transition-all duration-300 hover:scale-105 hover:border-[#8F98BE]">

            <div
              class="relative w-full h-[200px] sm:h-[220px] flex items-center justify-center overflow-hidden rounded-xl bg-black/20">
              <img class="w-full h-full object-contain pointer-events-none select-none" src="@/assets/img/ecran3.png"
                alt="Moniteur pixel">

            <div class="absolute inset-x-6 top-2 bottom-5 flex items-center justify-center overflow-hidden p-1">
                <img class="max-w-full max-h-full object-contain rounded-lg" src="@/assets/img/aspJudo.png" alt="AS Porcelette Arts Martiaux">
                <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a href="https://asporcelette-art-martiaux.fr/" target="_blank" class="px-4 py-2 bg-[#8F98BE]  text-black rounded-lg text-sm font-semibold hover:bg-[#D7F3F5] transition-colors shadow-lg">
                    Voir le site
                  </a>
                </div>
              </div>
            </div>

            <div class="mt-4 text-left">
              <h3 class="text-lg sm:text-xl font-bold font-['Kode_Mono'] text-[#FEE4B3] mb-1">
                ASP Arts Martiaux
              </h3>
              <p class="text-xs text-gray-300 line-clamp-2 mb-4">
                Création et gestion du site web officiel du club de Porcelette.
              </p>

              <div class="flex flex-wrap items-center gap-2">
                <img class="h-5 sm:h-9 object-contain" src="@/assets/icons/html.png" alt="HTML5">
                <img class="h-5 sm:h-9 object-contain" src="@/assets/icons/css.png" alt="CSS3">
                <img class="h-5 sm:h-9 object-contain" src="@/assets/icons/vue.png" alt="Vue.js">
                <img class="h-5 sm:h-9 object-contain" src="@/assets/icons/cSharp.png" alt="C#">
                <img class="h-5 sm:h-6 object-contain" src="@/assets/icons/dotnet.PNG" alt=".NET">
              </div>
            </div>

          </article>

        </div>
      </div>

    </div>
  </section>
</template>