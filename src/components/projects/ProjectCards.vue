<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { projects } from '@/data/Projects';

const router = useRouter();


// État de l'animation de démarrage (Boot)
const isBooting = ref(false);
const bootProgress = ref(0);
const activeProjectId = ref('');


const currentProjectName = computed(() => {
  const p = projects.find(proj => proj.id === activeProjectId.value);
  return p ? p.title.toUpperCase() : '';
});


// Déclenchement de la séquence d'allumage Terminal
const launchProject = (id) => {

  // Empêche plusieurs lancements simultanés
  if (isBooting.value) return;

  activeProjectId.value = id;
  bootProgress.value = 0;
  isBooting.value = true;


  const interval = setInterval(() => {

    bootProgress.value += Math.floor(Math.random() * 15) + 8;


    if (bootProgress.value >= 100) {

      bootProgress.value = 100;
      clearInterval(interval);


      setTimeout(() => {
        isBooting.value = false;
        router.push(`/projets/${id}`);
      }, 800);

    }

  }, 150);
};

</script>


<template>
  <section class="p-3 sticky_section sticky_section--1">
    <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">

      <!-- Container des cartes responsive -->
      <div class="container mx-auto px-4 py-8 md:py-16">
        <div
          class="w-full flex flex-wrap justify-center items-stretch gap-6 md:gap-10 lg:gap-14 max-w-7xl mx-auto px-4">

          <!-- Boucle sur chaque projet -->
          <article v-for="project in projects" :key="project.id"
            class="group relative w-full sm:w-[328px] max-w-[340px] bg-[#1E293B]/50 border-2 border-[#121137] rounded-3xl p-4 shadow-[3px_5px_15px_#121137] transition-all duration-300 hover:scale-105 hover:border-[#8F98BE]">
            <!-- Cadre écran Rétro -->
            <div
              class="relative w-full h-[200px] sm:h-[220px] flex items-center justify-center overflow-hidden rounded-xl bg-black/20">
              <img class="w-full h-full object-contain pointer-events-none select-none" :src="project.screenFrame"
                alt="Moniteur pixel">

              <!-- Aperçu du projet -->
              <div class="absolute inset-x-6 top-4 bottom-6 flex items-center justify-center overflow-hidden p-1">
                <img class="max-w-full max-h-full object-contain rounded-lg" :src="project.previewImg"
                  :alt="project.title">

                <!-- Overlay interactif au survol -->
                <div
                  class="absolute inset-0 bg-black/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 p-4">
                  <!-- Bouton d'immersion Rétro -->
                  <button @click="launchProject(project.id)"
                    class="w-full py-2 px-3 bg-[#FEE4B3] text-black font-['Kode_Mono'] text-xs font-bold rounded-lg hover:bg-[#D7F3F5] transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-[0_0_12px_rgba(254,228,179,0.4)] cursor-pointer">
                    <span>🕹️</span> EXPLORER
                  </button>

                  <!-- Lien externe rapide (Site ou GitHub) -->
                  <a :href="project.externalUrl" target="_blank"
                    class="text-xs text-[#8F98BE] hover:text-white underline font-['Kode_Mono'] transition-colors">
                    [{{ project.externalLabel }}]
                  </a>
                </div>
              </div>
            </div>

            <!-- Informations sous l'écran -->
            <div class="mt-4 text-left">
              <h3 class="text-lg sm:text-xl font-bold font-['Kode_Mono'] text-[#FEE4B3] mb-1">
                {{ project.title }}
              </h3>
              <p class="text-xs text-gray-300 line-clamp-2 mb-4">
                {{ project.description }}
              </p>

              <!-- Stack Technique -->
              <div class="flex flex-wrap items-center gap-2">
                <img v-for="(tech, index) in project.stack" :key="index" :src="tech.icon" :alt="tech.name"
                  class="h-5 sm:h-8 object-contain">
              </div>
            </div>

          </article>

        </div>
      </div>

    </div>

    <!-- Overlay de Chargement façon Terminal / CRT -->
    <Teleport to="body">
      <div v-if="isBooting"
        class="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center font-['Kode_Mono'] text-[#FEE4B3] crt-screen">
        <div class="scanlines"></div>

        <div
          class="text-left w-72 space-y-3 z-10 p-4 border border-[#FEE4B3]/30 rounded bg-black/80 shadow-[0_0_20px_rgba(254,228,179,0.2)]">
          <p class="text-xs text-green-400 font-mono animate-pulse">&gt; INITIALIZING_SYSTEM...</p>
          <p class="text-xs text-gray-400">&gt; LOADING: {{ currentProjectName }}</p>

          <!-- Barre de progression -->
          <div class="w-full bg-gray-950 border border-[#FEE4B3] h-4 p-0.5 relative overflow-hidden">
            <div class="bg-[#FEE4B3] h-full transition-all duration-100 ease-out"
              :style="{ width: bootProgress + '%' }"></div>
          </div>
          <!-- Validation du chargement -->
          <p v-if="bootProgress >= 100" class="text-xs text-green-400 animate-pulse">
            > SYSTEM_READY
          </p>

          <p v-if="bootProgress >= 100" class="text-xs text-gray-400">
            > LAUNCHING_PROJECT...
          </p>


          <div class="flex justify-between text-[10px] text-gray-400">
            <span>MEM_BOOT_OK</span>
            <span>{{ bootProgress }}%</span>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>



<style scoped>
/* Scintillement CRT */
.crt-screen {
  animation: flicker 0.15s infinite;
}

/* Lignes de balayage CRT */
.scanlines {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(rgba(18, 16, 16, 0) 50%,
      rgba(0, 0, 0, 0.35) 50%);
  background-size: 100% 4px;
  z-index: 5;
  pointer-events: none;
}

@keyframes flicker {
  0% {
    opacity: 0.96;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0.98;
  }
}
</style>