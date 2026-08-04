<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

// Importation des visuels
// ADEM
import ademImg from '@/assets/img/adem.png';
import ademImg2 from '@/assets/img/adem2.png';
import ademVideo from '@/assets/videos/demo-adem.mp4';
import ademVideo2 from '@/assets/videos/demo-adem2.mp4';

// ADMIN
import adminImg from '@/assets/img/admin.jpg';

// ASP
import aspImg from '@/assets/img/asp.png';
import aspImg2 from '@/assets/img/asp2.png';
import aspVideo from '@/assets/videos/demo-videoAsp.mp4';
import aspVideo2 from '@/assets/videos/demo-videoAsp2.mp4';

const route = useRoute();
const project = ref({});

// Base de données des projets
const projectsData = {
  'rapport-adem-2023': {
    title: "Rapport d'activité 2023",
    client: "ADEM (Ministère du Travail)",
    lieu: "Luxembourg",
    role: "Développeur Web (Stage)",
    duration: "2 Mois",
    technologies: "HTML5, CSS3, PHP, MySQL, JS",
    liveUrl: "https://adem2023.lu/",
    githubUrl: null,
    screenshots: [
      { type: 'video', url: ademVideo },
      { type: 'image', url: ademImg },
      { type: 'image', url: ademImg2 },
      { type: 'video', url: ademVideo2 }
    ],
    context: "Conception et développement du rapport d'activité interactif pour l'Agence pour le développement de l'emploi (ADEM) au Luxembourg. L'objectif était de rendre les chiffres annuels dynamiques, modernes et agréables à consulter pour le grand public et le ministère.",
    features: [
      "Consultation des statistiques annuelles sous forme dynamique",
      "Navigation intuitive entre les différentes sections du rapport",
      "Design entièrement responsive (PC, Tablette, Smartphone)",
      "Optimisation du temps de chargement des assets"
    ],
    technicalDetails: "Projet structuré en PHP avec une base de données MySQL. L'accent a été mis sur le respect strict de la charte graphique officielle et sur la clarté de l'intégration HTML/CSS."
  },

  'admin-mns': {
    title: "Admin MNS",
    client: "Metz Numeric School",
    lieu: "METZ",
    role: "Développeur Fullstack",
    duration: "6 Mois (Projet fil rouge)",
    technologies: "HTML/CSS, C#, .NET, SQL",
    liveUrl: null,
    githubUrl: "https://github.com/Looka57/AdminMnsV1.git",
    screenshots: [
      { type: 'video', url: ademVideo },
      { type: 'image', url: ademImg },
      { type: 'image', url: ademImg2 },
      { type: 'video', url: ademVideo2 }
    ],
    context: "Dans le cadre de la formation CDA, conception d'une application d'administration complète permettant de gérer les données de l'école Metz Numeric School (étudiants, enseignants, plannings).",
    features: [
      "Gestion CRUD complète des utilisateurs et enseignants",
      "Tableau de bord d'analyse avec statistiques visuelles",
      "Système d'authentification et gestion des rôles (RBAC)",
      "Gestion des plannings et export de données"
    ],
    technicalDetails: "L'application repose sur un backend robuste en C# / .NET permettant d'assurer la sécurité des données et des requêtes optimisées vers la base de données SQL."
  },

  'asp-arts-martiaux': {
    title: "ASP Arts Martiaux ",
    client: "Club AS Porcelette",
    lieu: "PORCELETTE",
    role: "Développeur Web",
    duration: "Projet Réel",
    technologies: "HTML/CSS, Vue.js, C#, .NET",
    liveUrl: "https://asporcelette-art-martiaux.fr/",
    githubUrl: "https://github.com/Looka57/aspPorcelette.git",
    githubUrlFront: "https://github.com/Looka57/asp-porcelette-front.git",
    screenshots: [
      { type: 'video', url: aspVideo },
      { type: 'image', url: aspImg },
      { type: 'image', url: aspImg2 },
      { type: 'video', url: aspVideo2 }
    ],
    context: "Création et gestion du site web officiel du club d'arts martiaux de Porcelette. L'objectif principal était de digitaliser le club, présenter les horaires des cours et faciliter les prises de contact.",
    features: [
      "Présentation des différentes sections (Judo, Taekwondo...)",
      "Module de contact direct pour les nouvelles inscriptions",
      "Affichage clair des horaires, tarifs et événements",
      "Interface rapide et moderne responsive"
    ],
    technicalDetails: "Développé avec Vue.js en front-end pour une navigation fluide sans rechargement de page, couplé à une architecture C# / .NET pour la gestion des informations."
  }
};

const loadProject = () => {
  const projectId = route.params.id;
  if (projectsData[projectId]) {
    project.value = projectsData[projectId];
  } else {
    project.value = projectsData['admin-mns'];
  }
};

onMounted(() => {
  loadProject();
});

watch(() => route.params.id, () => {
  loadProject();
});
</script>

<template>
  <div class="min-h-screen bg-[#0F172A] text-gray-200 font-['Kode_Mono'] py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <!-- Overlay Scanlines pour garder le style CRT -->
    <div class="scanlines"></div>

    <!-- Conteneur principale -->
    <div class="max-w-6xl mx-auto space-y-10 relative z-10">

      <!-- Bouton Retour -->
      <router-link to="/"
        class="inline-flex items-center gap-2 text-xs text-[#8F98BE] hover:text-[#FEE4B3] transition-colors border border-[#8F98BE]/30 px-3 py-1.5 rounded-lg bg-[#1E293B]/60">
        <span>◄</span> RETOUR AUX RÉALISATIONS
      </router-link>

      <!-- En-tête Terminal / Fiche Projet -->
      <header class="bg-[#1E293B]/80 border-2 border-[#121137] rounded-3xl p-6 md:p-8 shadow-[0_0_20px_rgba(18,17,55,0.8)] relative">
        <div class="flex flex-wrap justify-between items-start gap-4 mb-6 border-b border-gray-700/60 pb-4">
          <div>
            <span class="text-xs text-green-400 font-mono">[ SYSTEM_STATUS: ONLINE ]</span>
            <h1 class="text-2xl sm:text-4xl font-bold text-[#FEE4B3] mt-1">
              {{ project.title }}
            </h1>
          </div>

          <!-- Liens Directs -->
          <div class="flex flex-wrap gap-3">
            <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank"
              class="px-4 py-2 bg-[#FEE4B3] text-black font-bold rounded-lg text-xs hover:bg-[#D7F3F5] transition-all shadow-md">
              🌐 Voir le site
            </a>
            <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank"
              class="px-4 py-2 bg-[#8F98BE] text-black font-bold rounded-lg text-xs hover:bg-white transition-all shadow-md">
              💻 Dépôt GitHub (Back-End)
            </a>
            <a v-if="project.githubUrlFront" :href="project.githubUrlFront" target="_blank"
              class="px-4 py-2 bg-[#8F98BE] text-black font-bold rounded-lg text-xs hover:bg-white transition-all shadow-md">
              💻 Dépôt GitHub (Frontend)
            </a>
          </div>
        </div>

        <!-- Meta Infos -->
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4 text-xs bg-black/30 p-4 rounded-xl border border-white/5">
          <div>
            <p class="text-gray-400 uppercase">Client / Cadre</p>
            <p class="font-bold text-white mt-0.5">{{ project.client }}</p>
          </div>

          <div>
            <p class="text-gray-400 uppercase">Lieu</p>
            <p class="font-bold text-white mt-0.5">{{ project.lieu || 'N/A' }}</p>
          </div>

          <div>
            <p class="text-gray-400 uppercase">Mon Rôle</p>
            <p class="font-bold text-white mt-0.5">{{ project.role }}</p>
          </div>

          <div>
            <p class="text-gray-400 uppercase">Durée</p>
            <p class="font-bold text-white mt-0.5">{{ project.duration }}</p>
          </div>

          <div>
            <p class="text-gray-400 uppercase">Stack</p>
            <p class="font-bold text-[#FEE4B3] mt-0.5">{{ project.technologies }}</p>
          </div>
        </div>
      </header>

      <!-- Section 1 : Le Besoin & Le Défi -->
      <section class="bg-[#1E293B]/40 border border-gray-800 rounded-2xl p-6 md:p-8 space-y-3">
        <h2 class="text-lg font-bold text-[#FEE4B3] flex items-center gap-2">
          LE CONTEXTE & LE BESOIN
        </h2>
        <p class="text-sm leading-relaxed text-gray-300">
          {{ project.context }}
        </p>
      </section>

      <!-- Section 2 : La Solution & Fonctionnalités (avec Visuels) -->
      <section class="bg-[#1E293B]/40 border border-gray-800 rounded-2xl p-6 md:p-8 space-y-6">
        <h2 class="text-lg font-bold text-[#FEE4B3] flex items-center gap-2">
          LA SOLUTION DÉVELOPPÉE
        </h2>

        <!-- Galerie de Captures d'écran -->
        <div class="space-y-4">
          <h3 class="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
            APERÇUS DU PROJET
          </h3>

          <!-- Grille d'aperçus ajustée en hauteur pour la nouvelle largeur -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="(item, index) in project.screenshots" :key="index"
              class="rounded-xl overflow-hidden border border-gray-700 bg-black/40 p-2 group transition-all hover:border-[#FEE4B3]/50">
              
              <!-- Vidéo -->
              <video v-if="typeof item === 'object' && item.type === 'video'" :src="item.url" autoplay loop muted
                playsinline class="w-full h-56 md:h-72 object-cover object-top rounded-lg"></video>

              <!-- Image -->
              <img v-else :src="typeof item === 'object' ? item.url : item"
                :alt="`${project.title} - Aperçu ${index + 1}`"
                class="w-full h-56 md:h-72 object-cover object-top rounded-lg group-hover:scale-102 transition-transform duration-300" />
            </div>
          </div>
        </div>

        <!-- Liste des fonctionnalités -->
        <div class="space-y-3">
          <h3 class="text-sm font-bold text-white uppercase tracking-wider">Fonctionnalités clés :</h3>
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <li v-for="(feature, index) in project.features" :key="index"
              class="flex items-start gap-2 bg-black/20 p-3 rounded-lg border border-white/5">
              <span class="text-green-400 font-bold">✔</span>
              <span>{{ feature }}</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- Section 3 : Choix Techniques -->
      <section class="bg-[#1E293B]/40 border border-gray-800 rounded-2xl p-6 md:p-8 space-y-4">
        <h2 class="text-lg font-bold text-[#FEE4B3] flex items-center gap-2">
          CHOIX TECHNIQUES & ARCHITECTURE
        </h2>
        <p class="text-sm leading-relaxed text-gray-300">
          {{ project.technicalDetails }}
        </p>
      </section>

      <!-- Footer de page -->
      <footer class="text-center pt-6">
        <router-link to="/"
          class="inline-block px-6 py-3 bg-[#FEE4B3] text-black font-bold rounded-xl text-sm hover:bg-[#D7F3F5] transition-all shadow-lg">
          ▲ RETOURNER AU PORTFOLIO
        </router-link>
      </footer>

    </div>
  </div>
</template>

<style scoped>
.scanlines {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.15) 50%);
  background-size: 100% 4px;
  z-index: 1;
  pointer-events: none;
}
</style>