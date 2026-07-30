<template>
  <main class="min-h-screen bg-[#0A0D18] text-slate-300 py-12 px-6">
    <div class="max-w-4xl mx-auto">

      <!-- Bouton Retour -->
      <router-link to="/"
        class="inline-flex items-center gap-2 text-xs text-purple-400 hover:text-white transition mb-8 group">
        <span class="group-hover:-translate-x-1 transition-transform">←</span> Retour à l'accueil
      </router-link>

      <!-- Titre principal -->
      <h1 class="text-3xl font-bold text-white mb-8 border-b border-purple-500/30 pb-4">
        Mentions Légales
      </h1>

      <div class="space-y-8 text-sm leading-relaxed">

        <!-- 1. Éditeur -->
        <section class="bg-slate-900/40 p-6 rounded-xl border border-slate-800/80">
          <h2 class="text-base font-semibold text-purple-400 mb-3 flex items-center gap-2">
            1. Éditeur du site
          </h2>
          <p class="mb-3">
            Le présent site internet, accessible à l'adresse
            <a href="https://www.amandinenapolitano.fr" target="_blank"
              class="text-purple-300 underline hover:text-white">
              [URL de ton site]
            </a>, est édité par :
          </p>
          <ul class="space-y-1.5 text-slate-400 list-disc list-inside pl-2">
            <li><strong>Nom & Prénom :</strong> Amandine Napolitano</li>
            <li><strong>Activité :</strong> Développeuse Web Freelance / Full Stack</li>
            <li><strong>Statut :</strong> En cours de création / Micro-entreprise</li>
            <li><strong>SIRET :</strong> [En cours]</li>
            <li><strong>Adresse professionnelle :</strong> Porcelette </li>
            <li><strong>Email de contact :</strong> <a href="mailto:contact@domaine.com"
                class="text-purple-400 hover:underline">[Ton Email Pro]</a></li>
            <li><strong>Directrice de publication :</strong> Amandine Napolitano</li>
          </ul>
        </section>

        <!-- 2. Hébergement -->
        <section class="bg-slate-900/40 p-6 rounded-xl border border-slate-800/80">
          <h2 class="text-base font-semibold text-purple-400 mb-3">
            2. Hébergement
          </h2>
          <p class="mb-2">Le site est hébergé par :</p>
          <ul class="space-y-1.5 text-slate-400 list-disc list-inside pl-2">
            <li><strong>Hébergeur :</strong> GIT</li>
            <li><strong>Adresse :</strong> xxx </li>
            <li><strong>Site web :</strong> <a href="#" target="_blank" class="text-purple-300 underline">[URL de l'hébergeur]</a></li>
          </ul>
        </section>

        <!-- 3. Propriété intellectuelle -->
        <section class="bg-slate-900/40 p-6 rounded-xl border border-slate-800/80">
          <h2 class="text-base font-semibold text-purple-400 mb-3">
            3. Propriété intellectuelle
          </h2>
          <p class="mb-3">
            L'ensemble des contenus présents sur ce site (textes, graphismes, illustrations, images, logos, sprites,
            animations pixel-art, univers visuel et code source) est la propriété exclusive d'<strong>Amandine Napolitano</strong>,
            sauf mention contraire.
          </p>
          <p class="text-slate-400">
            Toute reproduction, distribution, modification ou publication, même partielle, est strictly interdite
            sans l'accord écrit préalable d'Amandine Napolitano. Les projets présentés peuvent contenir des visuels appartenant à
            leurs propriétaires respectifs.
          </p>
        </section>

        <!-- 4. Responsabilité -->
        <section class="bg-slate-900/40 p-6 rounded-xl border border-slate-800/80">
          <h2 class="text-base font-semibold text-purple-400 mb-3">
            4. Responsabilité
          </h2>
          <p class="text-slate-400 leading-relaxed">
            L'éditrice s'efforce de fournir des informations exactes et régulièrement mises à jour. Cependant, elle ne
            peut garantir l'exactitude ou la complétude de l'ensemble des informations. L'utilisation du site relève de la
            responsabilité exclusive de l'utilisateur.
          </p>
        </section>

        <!-- 5. Données personnelles -->
        <section class="bg-slate-900/40 p-6 rounded-xl border border-slate-800/80">
          <h2 class="text-base font-semibold text-purple-400 mb-3">
            5. Données personnelles (RGPD)
          </h2>
          <p class="text-slate-400 leading-relaxed">
            Ce site est un portfolio purement informatif et ne collecte aucune donnée personnelle. Aucun formulaire de collecte
            n'est présent sur le site. Si vous choisissez de me contacter directement par e-mail, votre adresse e-mail sera uniquement 
            utilisée pour répondre à votre message et ne sera jamais cédée ou vendue à des tiers.
          </p>
        </section>

        <!-- 6. Cookies -->
        <section class="bg-slate-900/40 p-6 rounded-xl border border-slate-800/80">
          <h2 class="text-base font-semibold text-purple-400 mb-3">
            6. Cookies
          </h2>
          <p class="text-slate-400 leading-relaxed">
            Ce site n'utilise aucun cookie, ni aucun outil de traçage publicitaire ou d'analyse d'audience. La navigation sur le site se fait sans aucun dépôt de fichier témoin sur votre appareil.
          </p>
        </section>

        <!-- 7. Liens externes -->
        <section class="bg-slate-900/40 p-6 rounded-xl border border-slate-800/80">
          <h2 class="text-base font-semibold text-purple-400 mb-3">
            7. Liens externes
          </h2>
          <p class="text-slate-400">
            Le site peut contenir des liens vers des plateformes externes (GitHub, LinkedIn, démos de projets).
            L'éditrice ne peut être tenue responsable du contenu ou des pratiques de confidentialité de ces sites tiers.
          </p>
        </section>

        <!-- Footer / Date -->
        <div class="text-xs text-slate-500 pt-4 text-right">
          Dernière mise à jour : {{ new Date().toLocaleDateString('fr-FR') }}
        </div>

      </div>
    </div>
  </main>
</template>