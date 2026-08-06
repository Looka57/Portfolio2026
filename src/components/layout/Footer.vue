<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import fondFooter from "@/assets/font/fondFooter.png"

// Gestion de l'accordéon sur mobile
const openSection = ref(null)

const toggleSection = (section) => {
  openSection.value = openSection.value === section ? null : section
}
</script>

<template>
  <footer class="w-full bg-[#0A0D18] text-slate-300 relative overflow-hidden">

    <!-- Décor Pixel Art & Feu de camp (Visibles uniquement sur Desktop) -->
    <div class="hidden md:block absolute inset-0 z-0 bg-bottom bg-no-repeat pointer-events-none" :style="{
      backgroundImage: `url(${fondFooter})`,
      backgroundSize: '100%',
    }">
      <div class="fire-glow pointer-events-none"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 pt-8 pb-6 md:py-12">

      <!-- ================= ACCORDÉONS MOBILE (< md) ================= -->
      <div class="block md:hidden space-y-4">

        <!-- Intro & Avatar -->
        <div class="flex items-center gap-3 pb-2 border-b border-slate-800/80">
          <img src="@/assets/sprite/avatar.webp" alt="Avatar d'Amandine" class="w-10 h-10 rounded-full border border-purple-500/50" />
          <div>
            <h3 class="font-bold text-white text-sm">Amandine Napolitano</h3>
            <p class="text-[11px] text-purple-400">Développeuse Full Stack</p>
          </div>
        </div>

        <!-- Dropdown 1 : Navigation -->
        <div class="border-b border-slate-800/80 pb-2">
          <button @click="toggleSection('nav')"
            class="w-full flex justify-between items-center text-xs font-semibold text-purple-400 py-1">
            <span>🗡️ NAVIGATION</span>
            <span class="text-slate-300 text-base transition-transform duration-200"
              :class="{ 'rotate-180': openSection === 'nav' }">▾</span>
          </button>
          <ul v-show="openSection === 'nav'" class="mt-2 space-y-2 text-[11px] text-slate-400 pl-4">
            <li><a href="#hero" class="hover:text-white">Accueil</a></li>
            <li><a href="#about" class="hover:text-white">À propos</a></li>
            <li><a href="#projects" class="hover:text-white">Projets</a></li>
            <li><a href="#contact" class="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <!-- Dropdown 2 : Spécialités -->
        <div class="border-b border-slate-800/80 pb-2">
          <button @click="toggleSection('spec')"
            class="w-full flex justify-between items-center text-xs font-semibold text-purple-400 py-1">
            <span>🛡️ SPÉCIALITÉS</span>
            <span class="text-slate-300 text-base transition-transform duration-200"
              :class="{ 'rotate-180': openSection === 'spec' }">▾</span>
          </button>
          <ul v-show="openSection === 'spec'" class="mt-2 space-y-2 text-[11px] text-slate-400 pl-4">
            <li>Développement Web</li>
            <li>Applications sur mesure</li>
            <li>API Back-End & Front-End</li>
          </ul>
        </div>

        <!-- Dropdown 3 : Outils & Technos -->
        <div class="border-b border-slate-800/80 pb-2">
          <button @click="toggleSection('tech')"
            class="w-full flex justify-between items-center text-xs font-semibold text-purple-400 py-1">
            <span>⛏️ OUTILS & TECHNOS</span>
            <span class="text-slate-300 text-base transition-transform duration-200"
              :class="{ 'rotate-180': openSection === 'tech' }">▾</span>
          </button>
          <p v-show="openSection === 'tech'" class="mt-2 text-[11px] text-slate-400 pl-4 leading-relaxed">
            Vue.js • Nuxt.js • JavaScript <br>
            C# • ASP.NET Core <br>
            SQL Server • Prisma • Tailwind
          </p>
        </div>
      </div>


      <!-- ================= GRILLE DESKTOP (>= md) ================= -->
      <div class="hidden md:grid grid-cols-4 gap-8">
        <!-- 1. Intro -->
        <div class="space-y-3">
          <div class="flex items-center gap-3">
            <img src="@/assets/sprite/avatar.webp" class="w-12 h-12 rounded-full border border-purple-500/50" />
            <div>
              <h3 class="font-bold text-white text-base">Amandine Napolitano</h3>
              <p class="text-xs text-purple-400">Développeuse Full Stack</p>
            </div>
          </div>
          <p class="text-xs text-slate-400 leading-relaxed">
            Je conçois et développe des applications web modernes, performantes et sur mesure.
          </p>
        </div>

        <!-- 2. Nav -->
        <div>
          <h4 class="text-sm font-semibold text-purple-400 mb-3">🗡️ NAVIGATION</h4>
          <ul class="space-y-2 text-xs text-slate-400">
            <li><a href="#hero" class="hover:text-white transition">Accueil</a></li>
            <li><a href="#about" class="hover:text-white transition">À propos</a></li>
            <li><a href="#projects" class="hover:text-white transition">Projets</a></li>
            <li><a href="#contact" class="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        <!-- 3. Spécialités -->
        <div>
          <h4 class="text-sm font-semibold text-purple-400 mb-3">🛡️ SPÉCIALITÉS</h4>
          <ul class="space-y-2 text-xs text-slate-400">
            <li>Développement Web</li>
            <li>Applications sur mesure</li>
            <li>API Back-End & Front-End</li>
          </ul>
        </div>

        <!-- 4. Technos -->
        <div>
          <h4 class="text-sm font-semibold text-purple-400 mb-3">⛏️ OUTILS & TECHNOS</h4>
          <p class="text-xs text-slate-400 leading-relaxed">
            Vue.js • Nuxt.js • JavaScript <br>
            C# • ASP.NET Core <br>
            SQL Server • Prisma • Tailwind
          </p>
        </div>
      </div>


      <!-- ================= BAS DU FOOTER (Copyright + Légal) ================= -->
   <!-- ================= BAS DU FOOTER (Copyright + Légal) ================= -->
<div
  class="mt-8 pt-4 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-300">

  <p>
    © {{ new Date().getFullYear() }} Amandine Napolitano. Tous droits réservés.
  </p>

  <!-- Liens Légaux -->
  <div class="flex items-center gap-4">

    <RouterLink 
      to="/mentions-legales"
      class="hover:text-purple-400 transition"
    >
      Mentions légales
    </RouterLink>

    <span>•</span>

    <RouterLink 
      to="/confidentialite"
      class="hover:text-purple-400 transition"
    >
      Confidentialité
    </RouterLink>

    <span>•</span>

    <RouterLink 
      to="/cgu"
      class="hover:text-purple-400 transition"
    >
      CGU
    </RouterLink>

  </div>
</div>

    </div>
  </footer>
</template>

<style scoped>
.fire-glow {
  position: absolute;
  right: 12%;
  bottom: 12%;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 140, 0, 0.6) 0%, rgba(255, 69, 0, 0.3) 40%, transparent 70%);
  animation: flicker 2.5s infinite ease-in-out;
  mix-blend-mode: screen;
}

@keyframes flicker {

  0%,
  100% {
    opacity: 0.8;
    transform: scale(1);
  }

  25% {
    opacity: 0.4;
    transform: scale(0.92);
  }

  50% {
    opacity: 1;
    transform: scale(1.08);
  }

  75% {
    opacity: 0.6;
    transform: scale(0.97);
  }
}
</style>