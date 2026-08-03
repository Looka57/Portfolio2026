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
        📄 Conditions Générales d'Utilisation (CGU)
      </h1>

      <p class="text-center text-slate-400 mb-8 max-w-2xl mx-auto text-sm leading-relaxed">
        Les présentes Conditions Générales d'Utilisation encadrent l'accès et l'utilisation du site
        portfolio d'<strong class="text-white">Amandine Napolitano</strong>. Tout accès ou utilisation implique
        l'acceptation sans réserve des présentes conditions.
      </p>

      <div class="space-y-6 text-sm leading-relaxed">

        <!-- 1. Accès au site -->
        <section class="bg-slate-900/40 p-6 rounded-xl border-l-4 border-l-purple-500 border border-slate-800/80">
          <h2 class="text-base font-semibold text-purple-400 mb-3 uppercase tracking-wider text-xs">
            1. Accès au site
          </h2>
          <p class="text-slate-300 mb-2">
            Le site est accessible gratuitement en tout lieu à tout utilisateur disposant d'un accès à Internet.
            Tous les frais supportés pour y accéder (matériel informatique, logiciels, connexion Internet) sont à la charge de l'utilisateur.
          </p>
          <p class="text-slate-400 text-xs leading-relaxed">
            L'éditrice met en œuvre les moyens raisonnables à sa disposition pour assurer un accès de qualité, sans obligation de résultat. L'accès peut être interrompu ou suspendu à tout moment pour maintenance, sans préavis ni indemnisation.
          </p>
        </section>

        <!-- 2. Services fournis -->
        <section class="bg-slate-900/40 p-6 rounded-xl border border-slate-800/80">
          <h2 class="text-base font-semibold text-purple-400 mb-3 uppercase tracking-wider text-xs">
            2. Services fournis
          </h2>
          <p class="text-slate-400 leading-relaxed">
            Le site a pour objet de présenter l'activité professionnelle d'<strong class="text-white">Amandine Napolitano</strong> (Développeuse Full Stack / Freelance), ses projets réalisés, ses compétences ainsi que ses coordonnées pour une prise de contact directe par e-mail. Les informations fournies le sont à titre indicatif et sont susceptibles d'évoluer.
          </p>
        </section>

        <!-- 3. Propriété intellectuelle -->
        <section class="bg-slate-900/40 p-6 rounded-xl border border-slate-800/80">
          <h2 class="text-base font-semibold text-purple-400 mb-3 uppercase tracking-wider text-xs">
            3. Propriété intellectuelle et usage
          </h2>
          <p class="text-slate-400 mb-3">
            Les marques, logos, graphismes, illustrations pixel art, éléments visuels et le code source du site font l'objet d'une protection par le Code de la propriété intellectuelle et le droit d'auteur.
          </p>
          <div class="p-4 rounded-lg bg-red-950/30 border border-red-500/40 text-red-300 text-xs">
            <strong class="font-bold text-red-200">Avertissement :</strong> L'utilisateur s'engage à une utilisation strictement privée des contenus. Toute reproduction, revente, modification ou exploitation à des fins commerciales ou publicitaires est strictement interdite sans accord écrit préalable.
          </div>
        </section>

        <!-- 4. Limitation de responsabilité -->
        <section class="bg-slate-900/40 p-6 rounded-xl border border-slate-800/80">
          <h2 class="text-base font-semibold text-purple-400 mb-3 uppercase tracking-wider text-xs">
            4. Limitation de responsabilité
          </h2>
          <p class="text-slate-400 mb-2">
            Les informations diffusées sur le site sont réputées fiables, mais l'éditrice ne garantit pas l'absence totale d'erreurs, d'omissions ou de coquilles.
          </p>
          <p class="text-slate-400 text-xs leading-relaxed">
            L'éditrice ne pourra être tenue responsable des dommages directs ou indirects causés au matériel de l'utilisateur lors de l'accès au site, ni des dysfonctionnements liés au réseau Internet (virus, bugs, interruptions).
          </p>
        </section>

        <!-- 5. Liens hypertextes -->
        <section class="bg-slate-900/40 p-6 rounded-xl border border-slate-800/80">
          <h2 class="text-base font-semibold text-purple-400 mb-3 uppercase tracking-wider text-xs">
            5. Liens hypertextes
          </h2>
          <p class="text-slate-400 leading-relaxed">
            Des liens hypertextes peuvent rediriger vers des plateformes tierces (GitHub, LinkedIn, démos interactives). En cliquant sur ces liens, l'utilisateur quitte le présent site. L'éditrice n'exerce aucun contrôle sur le contenu de ces sites externes et ne saurait en être tenue responsable.
          </p>
        </section>

        <!-- 6 & 7. Modification + Droit applicable -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section class="bg-slate-900/40 p-6 rounded-xl border border-slate-800/80">
            <h2 class="text-base font-semibold text-purple-400 mb-3 uppercase tracking-wider text-xs">
              6. Modification des CGU
            </h2>
            <p class="text-slate-400 text-xs leading-relaxed">
              L'éditrice se réserve le droit de modifier les clauses des présentes CGU à tout moment et sans prévis afin de les adapter aux évolutions du site ou de la législation.
            </p>
          </section>

          <section class="bg-slate-900/40 p-6 rounded-xl border border-slate-800/80">
            <h2 class="text-base font-semibold text-purple-400 mb-3 uppercase tracking-wider text-xs">
              7. Droit applicable
            </h2>
            <p class="text-slate-400 text-xs leading-relaxed">
              Les présentes CGU sont soumises au droit français. En cas de litige et à défaut de résolution amiable, les tribunaux français seront seuls compétents.
            </p>
          </section>
        </div>

        <!-- Footer / Date -->
        <div class="text-xs text-slate-500 pt-4 text-right">
          Dernière mise à jour : {{ new Date().toLocaleDateString('fr-FR') }}
        </div>

      </div>
    </div>
  </main>
</template>

<style scoped>
/* Style géré intégralement par Tailwind CSS */
</style>