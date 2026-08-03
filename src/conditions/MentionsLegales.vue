<template>
  <main class="min-h-screen bg-[#0A0D18] text-slate-300 py-12 px-6">
    <div class="max-w-4xl mx-auto">

      <!-- Bouton Retour -->
      <router-link to="/"
        class="inline-flex items-center gap-2 text-xs text-purple-400 hover:text-white transition mb-8 group">
        <span class="group-hover:-translate-x-1 transition-transform">←</span> Retour à l'accueil
      </router-link>

      <!-- Titre principal -->
      <h1 class="text-3xl font-bold text-white mb-8 border-b border-purple-500/30 pb-4 text-center">
        🧾 Mentions Légales
      </h1>

      <p class="text-center text-slate-400 mb-8 max-w-2xl mx-auto text-sm leading-relaxed">
        Conformément aux dispositions de la loi pour la confiance dans l'économie numérique,
        voici les informations relatives à l'Éditrice et à l'Hébergeur du site portfolio d'
        <strong class="text-white">Amandine Napolitano</strong>.
      </p>

      <div class="space-y-6 text-sm leading-relaxed">

        <!-- 1. Éditeur -->
        <section class="bg-slate-900/40 p-6 rounded-xl border-l-4 border-l-purple-500 border border-slate-800/80">
          <h2 class="text-base font-semibold text-purple-400 mb-3 uppercase tracking-wider text-xs">
            1. Éditeur du site
          </h2>
          <ul class="space-y-2 text-slate-300">
            <li><strong class="text-white">Nom & Prénom :</strong> Amandine Napolitano</li>
            <li><strong class="text-white">Activité :</strong> Développeuse Web Freelance / Full Stack</li>
            <li><strong class="text-white">Statut :</strong> En cours de création / Micro-entreprise</li>
            <li><strong class="text-white">SIRET :</strong> [En cours]</li>
            <li><strong class="text-white">Adresse professionnelle :</strong> Porcelette, France</li>
            <li><strong class="text-white">Email de contact :</strong>
              <a href="mailto:contact@domaine.com" class="text-purple-400 hover:underline">[Ton Email Pro]</a>
            </li>
            <li><strong class="text-white">Directrice de publication :</strong> Amandine Napolitano</li>
          </ul>
        </section>

        <!-- 2. Hébergement -->
        <section class="bg-slate-900/40 p-6 rounded-xl border-l-4 border-l-purple-500 border border-slate-800/80">
          <h2 class="text-base font-semibold text-purple-400 mb-3 uppercase tracking-wider text-xs">
            2. Hébergement
          </h2>
          <ul class="space-y-2 text-slate-300">
            <li><strong class="text-white">Hébergeur :</strong> GIT</li>
            <li><strong class="text-white">Adresse :</strong> xxx</li>
            <li><strong class="text-white">Site web :</strong>
              <a href="#" target="_blank" class="text-purple-400 underline hover:text-white">[URL de l'hébergeur]</a>
            </li>
          </ul>
        </section>

        <!-- 3. Propriété intellectuelle -->
        <section class="bg-slate-900/40 p-6 rounded-xl border border-slate-800/80">
          <h2 class="text-base font-semibold text-purple-400 mb-3 uppercase tracking-wider text-xs">
            3. Propriété intellectuelle
          </h2>
          <p class="mb-4">
            L'ensemble des contenus présents sur ce site (textes, graphismes, illustrations, images, logos, sprites,
            animations pixel-art, univers visuel et code source) est la propriété exclusive d'<strong
              class="text-white">Amandine Napolitano</strong>,
            sauf mention contraire.
          </p>
          <div class="p-4 rounded-lg bg-red-950/30 border border-red-500/40 text-red-300 text-xs">
            <strong class="font-bold text-red-200">Interdiction :</strong> Toute reproduction, distribution,
            modification ou publication, même partielle, est strictement interdite sans l'accord écrit préalable
            d'Amandine Napolitano. Les projets présentés peuvent contenir des visuels appartenant à leurs propriétaires
            respectifs.
          </div>
        </section>

        <!-- 4. Responsabilité -->
        <section class="bg-slate-900/40 p-6 rounded-xl border border-slate-800/80">
          <h2 class="text-base font-semibold text-purple-400 mb-3 uppercase tracking-wider text-xs">
            4. Responsabilité
          </h2>
          <p class="text-slate-400 leading-relaxed">
            L'éditrice s'efforce de fournir des informations exactes et régulièrement mises à jour. Cependant, elle ne
            peut garantir l'exactitude ou la complétude de l'ensemble des informations. L'utilisation du site relève de
            la
            responsabilité exclusive de l'utilisateur.
          </p>
        </section>

        <!-- 5. Données personnelles -->
        <section class="bg-slate-900/40 p-6 rounded-xl border border-slate-800/80">
          <h2 class="text-base font-semibold text-purple-400 mb-3 uppercase tracking-wider text-xs">
            5. Données personnelles (RGPD)
          </h2>
          <p class="text-slate-400 leading-relaxed">
            Ce site est un portfolio purement informatif et ne collecte aucune donnée personnelle. Aucun formulaire de
            collecte
            n'est présent sur le site. Si vous choisissez de me contacter directement par e-mail, votre adresse e-mail
            sera uniquement
            utilisée pour répondre à votre message et ne sera jamais cédée ou vendue à des tiers.
          </p>
        </section>

        <!-- 6. Cookies -->
        <section class="bg-slate-900/40 p-6 rounded-xl border border-slate-800/80">
          <h2 class="text-base font-semibold text-purple-400 mb-3 uppercase tracking-wider text-xs">
            6. Cookies
          </h2>
          <p class="text-slate-400 leading-relaxed">
            Ce site n'utilise aucun cookie, ni aucun outil de traçage publicitaire ou d'analyse d'audience. La
            navigation sur le site se fait sans aucun dépôt de fichier témoin sur votre appareil.
          </p>
        </section>

        <!-- 7. Liens externes -->
        <section class="bg-slate-900/40 p-6 rounded-xl border border-slate-800/80">
          <h2 class="text-base font-semibold text-purple-400 mb-3 uppercase tracking-wider text-xs">
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