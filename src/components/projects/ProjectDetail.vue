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
import adminImg from '@/assets/img/admin2.png';
import adminVideo2 from '@/assets/videos/demo-admin2.mp4';
import adminVideo3 from '@/assets/videos/demo-admin3.mp4';
import adminVideo4 from '@/assets/videos/demo-admin.mp4';

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
    role: "Développeuse Web (Stage)",
    duration: "2 mois",
    technologies: "HTML5, CSS3, PHP, MySQL, JavaScript",
    liveUrl: "https://adem2023.lu/",
    githubUrl: null,
    screenshots: [
      { type: 'video', url: ademVideo },
      { type: 'image', url: ademImg },
      { type: 'image', url: ademImg2 },
      { type: 'video', url: ademVideo2 }
    ],

    context:
      "Conception et développement du premier rapport d'activité annuel interactif de l'ADEM (Agence pour le développement de l'emploi) au Luxembourg. Ce projet est né d'une première collaboration entre la CCI Campus METZ et l'ADEM afin de remplacer le traditionnel rapport PDF par une plateforme web moderne, interactive et accessible. L'objectif était de valoriser les données statistiques de l'année tout en offrant une expérience de consultation fluide aux citoyens, aux partenaires institutionnels et au ministère.",

    features: [
      "Développement du premier rapport annuel interactif de l'ADEM",
      "Consultation dynamique des statistiques et indicateurs clés",
      "Navigation fluide entre les différentes sections du rapport",
      "Back-office permettant aux équipes de l'ADEM de gérer le contenu en toute autonomie",
      "Gestion indépendante des sections, blocs et agencement des pages",
      "Interface responsive compatible PC, tablette et mobile",
      "Optimisation des performances et du temps de chargement",
      "Transmission du projet et du code source aux équipes de l'ADEM"
    ],

    technicalDetails:
      "Application développée en PHP avec une base de données MySQL, respectant la charte graphique officielle de l'ADEM. Le projet comprenait également un back-office sur mesure permettant aux équipes de modifier le contenu, l'organisation et les différentes sections du rapport sans intervention d'un développeur. L'architecture a été pensée pour faciliter la réutilisation et les futures éditions du rapport annuel."
  },

  'admin-mns': {
    title: "Admin MNS",
    client: "Metz Numeric School",
    lieu: "Metz",
    role: "Développeuse Full Stack",
    duration: "6 mois (Projet fil rouge)",
    technologies: "Vue.js, C#, ASP.NET Core, SQL Server",

    liveUrl: null,
    githubUrl: "https://github.com/Looka57/AdminMnsV1.git",

    screenshots: [
      { type: 'image', url: adminImg },
      { type: 'video', url: adminVideo2 },
      { type: 'video', url: adminVideo4 },
      { type: 'video', url: adminVideo3 }
    ],

    context:
      "Développement d'une application d'administration dans le cadre de la formation Concepteur Développeur d'Applications (Bac+3). Ce projet fil rouge avait pour objectif de moderniser et centraliser la gestion des étudiants de Metz Numeric School, depuis leur candidature jusqu'à leur suivi administratif une fois intégrés à l'établissement.",

    features: [
      "Gestion complète des candidatures étudiantes",
      "Validation des dossiers administratifs et des pièces justificatives",
      "Suivi en temps réel de l'avancement du dossier par l'étudiant",
      "Notification automatique par e-mail lors de la validation du dossier",
      "Gestion des étudiants, administrateurs et enseignants",
      "Système d'authentification sécurisé avec gestion des rôles",
      "Justification des retards et des absences par les étudiants",
      "Tableaux de bord et statistiques d'administration",
      "Gestion et consultation des informations administratives"
    ],

    technicalDetails:
      "Application Full Stack développée en ASP.NET Core avec C# et SQL Server. L'architecture repose sur une gestion des rôles (administrateurs, enseignants et étudiants), un système de validation des dossiers avec contrôle des pièces justificatives, des notifications automatiques par e-mail ainsi qu'un espace personnel permettant aux étudiants de suivre leur dossier avant leur admission puis de gérer leurs justificatifs d'absence et de retard après leur intégration à l'école."
  },

  'asp-arts-martiaux': {
    title: "ASP Arts Martiaux",
    client: "Club AS Porcelette",
    lieu: "Porcelette",
    role: "Développeuse Web Full Stack",
    duration: "Projet réel - En production",
    technologies: "Vue.js, C#, ASP.NET Core, SQL Server, Entity Framework, Docker",
    liveUrl: "https://asporcelette-art-martiaux.fr/",
    githubUrl: "https://github.com/Looka57/aspPorcelette.git",
    githubUrlFront: "https://github.com/Looka57/asp-porcelette-front.git",

    screenshots: [
      { type: 'video', url: aspVideo },
      { type: 'image', url: aspImg },
      { type: 'image', url: aspImg2 },
      { type: 'video', url: aspVideo2 }
    ],

    context:
      "Conception et développement complet du site officiel de l'ASP Arts Martiaux de Porcelette. Membre du comité du club, j'ai souhaité moderniser son fonctionnement en créant une plateforme centralisant la communication, la gestion administrative et le suivi des différentes disciplines (Judo, Ju-Jitsu, Taekwondo, Aïkido et Judo Détente). L'objectif était d'offrir aux licenciés, aux parents et aux visiteurs une source d'information fiable tout en simplifiant le travail des responsables grâce à un back-office entièrement personnalisé.",

    features: [
      "Présentation des différentes disciplines du club",
      "Publication des actualités, événements et stages",
      "Gestion autonome des contenus via un back-office",
      "Administration des adhérents, enseignants et responsables",
      "Système d'inscription et de suivi des licenciés",
      "Gestion des formulaires et des demandes de contact",
      "Module de comptabilité avec tableaux de bord et graphiques",
      "Gestion des cotisations et du suivi financier",
      "Gestion des horaires, tarifs et informations du club",
      "Architecture responsive adaptée aux ordinateurs, tablettes et smartphones"
    ],

    technicalDetails:
      "Application Full Stack développée avec Vue.js pour le front-end et ASP.NET Core en C#, reposant sur SQL Server et Entity Framework. Le projet intègre une authentification par rôles (administrateur, enseignants, comptable...), un back-office complet permettant de gérer les adhérents, les actualités, les événements, les disciplines, les documents administratifs ainsi qu'un module de comptabilité avec statistiques et graphiques. L'application est déployée sur un VPS OVH à l'aide de Docker et est utilisée quotidiennement par le club."
  },
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
  <div
    class="min-h-screen bg-[#0F172A] text-gray-200 font-['Kode_Mono'] py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <!-- Overlay Scanlines pour garder le style CRT -->
    <div class="scanlines"></div>

    <!-- Conteneur principal -->
    <div class="max-w-6xl mx-auto space-y-10 relative z-10">

      <!-- Bouton Retour -->
      <router-link to="/"
        class="inline-flex items-center gap-2 text-xs text-[#8F98BE] hover:text-[#FEE4B3] transition-colors border border-[#8F98BE]/30 px-3 py-1.5 rounded-lg bg-[#1E293B]/60">
        <span>◄</span> RETOUR AUX RÉALISATIONS
      </router-link>

      <!-- En-tête Terminal / Fiche Projet -->
      <header
        class="bg-[#1E293B]/80 border-2 border-[#121137] rounded-3xl p-6 md:p-8 shadow-[0_0_20px_rgba(18,17,55,0.8)] relative">
        <div class="flex flex-wrap justify-between items-start gap-4 mb-6 border-b border-gray-700/60 pb-4">
          <div>
            <!-- Statut dynamique (Vert si liveUrl existe, Rouge sinon) -->
            <span :class="project.liveUrl ? 'text-green-400 font-mono text-xs' : 'text-rose-400 font-mono text-xs'">
              [ SYSTEM_STATUS: {{ project.liveUrl ? 'ONLINE' : 'OFFLINE' }} ]
            </span>
            <h1 class="text-2xl sm:text-4xl font-bold text-[#FEE4B3] mt-1">
              {{ project.title }}
            </h1>
          </div>

          <!-- Liens Directs -->
          <div class="flex flex-wrap gap-3 items-center">
            <!-- CAS 1 : En Ligne -->
            <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank"
              class="px-4 py-2 bg-[#FEE4B3] text-black font-bold rounded-lg text-xs hover:bg-[#D7F3F5] transition-all shadow-md flex items-center gap-1.5">
              🌐 Voir le site
            </a>

            <!-- CAS 2 : Hors Ligne -->
            <span v-else
              class="px-4 py-2 bg-rose-950/40 text-rose-400 border border-rose-500/30 font-bold rounded-lg text-xs select-none cursor-not-allowed">
              🔴 Site Hors Ligne
            </span>

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

          <!-- Grille d'aperçus -->
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