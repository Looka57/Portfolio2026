<script setup>
import { ref } from "vue"
import { House, FolderKanban, Info, Sparkles, Contact, Menu, X } from "lucide-vue-next"

const activeLink = ref("#hero")
const isMobileMenuOpen = ref(false)

const setActive = (link) => {
  activeLink.value = link
  isMobileMenuOpen.value = false // Ferme le menu mobile au clic
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const navItems = [
  { href: "#hero", label: "Accueil", icon: House },
  { href: "#projects", label: "Projets", icon: FolderKanban },
  { href: "#skills", label: "Compétences", icon: Sparkles },
  { href: "#about", label: "À propos", icon: Info },
  { href: "#contact", label: "Contact", icon: Contact },
]
</script>

<template>
  <nav class="fixed top-0 left-0 w-full z-50 p-4">
    <div class="navbar w-full max-w-4xl mx-auto flex justify-between md:justify-center items-center py-3 px-6 rounded-2xl shadow-lg bg-[#0C131B]/70 backdrop-blur-md border border-white/15">
      
      <!-- LOGO / NOM (Visible principalement sur Mobile) -->
      <a href="#hero" class="md:hidden text-[#FEE4B3] font-bold text-lg tracking-wide">
        [ PORTFOLIO AMANDINE ]
      </a>

      <!-- BOUTON HAMBURGER (Mobile) -->
      <button 
        @click="toggleMobileMenu" 
        class="md:hidden text-white p-1 focus:outline-none hover:text-[#FEE4B3] transition-colors"
        aria-label="Ouvrir le menu"
      >
        <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
        <X v-else class="w-6 h-6" />
      </button>

      <!-- MENU DESKTOP -->
      <ul class="hidden md:flex flex-row justify-center items-center gap-8 text-sm md:text-base font-medium">
        <li v-for="item in navItems" :key="item.href">
          <a 
            :href="item.href" 
            @click="setActive(item.href)"
            class="group relative flex items-center gap-2 py-1 transition-colors duration-300"
            :class="activeLink === item.href ? 'text-[#FEE4B3]' : 'text-white hover:text-[#FEE4B3]'"
          >
            <component :is="item.icon" class="w-4 h-4" />
            <span>{{ item.label }}</span>
            <span 
              class="absolute left-0 -bottom-1 h-[2px] bg-[#FEE4B3] transition-all duration-300"
              :class="activeLink === item.href ? 'w-full' : 'w-0 group-hover:w-full'"
            ></span>
          </a>
        </li>
      </ul>
    </div>

    <!-- MENU MOBILE (DROPDOWN / OVERLAY) -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div 
        v-if="isMobileMenuOpen" 
        class="md:hidden mt-2 w-full bg-[#0C131B]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl"
      >
        <ul class="flex flex-col gap-5 text-base font-medium">
          <li v-for="item in navItems" :key="item.href">
            <a 
              :href="item.href" 
              @click="setActive(item.href)"
              class="flex items-center gap-3 p-2 rounded-lg transition-colors"
              :class="activeLink === item.href ? 'text-[#FEE4B3] bg-white/5' : 'text-white hover:bg-white/5'"
            >
              <component :is="item.icon" class="w-5 h-5 text-[#FEE4B3]" />
              <span>{{ item.label }}</span>
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </nav>
</template>