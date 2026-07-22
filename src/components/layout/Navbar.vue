<script setup>
import { ref } from "vue"
import { House, FolderKanban, Info, Sparkles, Contact } from "lucide-vue-next"

const activeLink = ref("#hero")
const setActive = (link) => {
  activeLink.value = link
}
</script>


<template>
  <nav class="absolute top-0 left-0 w-full z-50 p-4">
    <div
      class="navbar w-full md:w-[50%] mx-auto flex justify-center items-center py-2 px-4 rounded-lg shadow-md bg-[#0C131B]/40 backdrop-blur-lg border border-white/20">
      <ul class="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-md font-semibold">
        <!-- Accueil -->
        <li>
          <a href="#hero" @click="setActive('#hero')"
            class="group relative flex items-center gap-2 transition-colors duration-300"
            :class="activeLink === '#hero' ? 'text-[#FEE4B3]' : 'text-white hover:text-[#FEE4B3]'">
            <House class="w-5 h-5" />
            <span>Accueil</span>
            <span class="absolute left-0 -bottom-2 h-[2px] bg-[#FEE4B3] transition-all duration-300"
              :class="activeLink === '#hero' ? 'w-full' : 'w-0 group-hover:w-full'"></span>
          </a>
        </li>

        <!-- Projets -->
        <li>
          <a href="#projects" @click="setActive('#projects')"
            class="group relative flex items-center gap-2 transition-colors duration-300"
            :class="activeLink === '#projects' ? 'text-[#FEE4B3]' : 'text-white hover:text-[#FEE4B3]'">
            <FolderKanban class="w-5 h-5" />
            <span>Projets</span>
            <span class="absolute left-0 -bottom-2 h-[2px] bg-[#FEE4B3] transition-all duration-300"
              :class="activeLink === '#projects' ? 'w-full' : 'w-0 group-hover:w-full'"></span>
          </a>
        </li>

        <!-- Compétences -->
        <li>
          <a href="#skills" @click="setActive('#skills')"
            class="group relative flex items-center gap-2 transition-colors duration-300"
            :class="activeLink === '#skills' ? 'text-[#FEE4B3]' : 'text-white hover:text-[#FEE4B3]'">
            <Sparkles class="w-5 h-5" />
            <span>Compétences</span>
            <span class="absolute left-0 -bottom-2 h-[2px] bg-[#FEE4B3] transition-all duration-300"
              :class="activeLink === '#skills' ? 'w-full' : 'w-0 group-hover:w-full'"></span>
          </a>
        </li>

        <!-- À propos -->
        <li>
          <a href="#about" @click="setActive('#about')" class="group relative flex items-center gap-2 transition-colors duration-300"
            :class="activeLink === '#about' ? 'text-[#FEE4B3]' : 'text-white hover:text-[#FEE4B3]'">
            <Info class="w-5 h-5" />
            <span>À propos </span>
            <span class="absolute left-0 -bottom-2 h-[2px] bg-[#FEE4B3] transition-all duration-300"
              :class="activeLink === '#about' ? 'w-full' : 'w-0 group-hover:w-full'"></span>
          </a>
        </li>

        <!-- Contact -->
        <li>
          <a href="#contact" @click="setActive('#contact')"
            class="group relative flex items-center gap-2 transition-colors duration-300"
            :class="activeLink === '#contact' ? 'text-[#FEE4B3]' : 'text-white hover:text-[#FEE4B3]'">
            <Contact class="w-5 h-5" />
            <span>Contact</span>
            <span class="absolute left-0 -bottom-2 h-[2px] bg-[#FEE4B3] transition-all duration-300"
              :class="activeLink === '#contact' ? 'w-full' : 'w-0 group-hover:w-full'"></span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>