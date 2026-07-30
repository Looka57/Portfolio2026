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
                Conditions Générales d'Utilisation (CGU)
            </h1>

            <div class="space-y-8 text-sm leading-relaxed">

                <!-- Intro -->
                <section class="bg-slate-900/40 p-6 rounded-xl border border-slate-800/80">
                    <p class="text-slate-300">
                        Les présentes Conditions Générales d'Utilisation encadrent l'accès et l'utilisation du site
                        portfolio d'<strong>Amandine Napolitano</strong>. Tout accès ou utilisation du site implique
                        l'acceptation sans réserve des présentes conditions par l'utilisateur.
                    </p>
                </section>

                <!-- 1. Accès au site -->
                <section class="bg-slate-900/40 p-6 rounded-xl border border-slate-800/80">
                    <h2 class="text-base font-semibold text-purple-400 mb-3">
                        1. Accès au site
                    </h2>
                    <p class="text-slate-400 leading-relaxed">
                        Le site est accessible gratuitement en tout lieu à tout utilisateur ayant un accès à Internet.
                        Tous les frais supportés par l'utilisateur pour accéder au service (matériel informatique,
                        logiciels, connexion Internet, etc.) sont à sa charge.
                    </p>
                    <p class="text-slate-400 leading-relaxed mt-2">
                        L'éditrice met en œuvre tous les moyens raisonnables à sa disposition pour assurer un accès de
                        qualité au site, mais n'est tenue à aucune obligation d'y parvenir. L'accès peut être interrompu
                        ou suspendu à tout moment, notamment pour des raisons de maintenance, sans préavis ni
                        indemnisation.
                    </p>
                </section>

                <!-- 2. Services fournis -->
                <section class="bg-slate-900/40 p-6 rounded-xl border border-slate-800/80">
                    <h2 class="text-base font-semibold text-purple-400 mb-3">
                        2. Services fournis
                    </h2>
                    <p class="text-slate-400 leading-relaxed">
                        Le site a pour objet de présenter l'activité professionnelle d'Amandine Napolitano, Développeuse
                        Full Stack, ses projets réalisés, ses compétences ainsi que ses coordonnées pour une prise de
                        contact
                        directe par e-mail. Les informations fournies le sont à titre indicatif et sont susceptibles
                        d'évoluer.
                    </p>
                </section>

                <!-- 3. Propriété intellectuelle -->
                <section class="bg-slate-900/40 p-6 rounded-xl border border-slate-800/80">
                    <h2 class="text-base font-semibold text-purple-400 mb-3">
                        3. Propriété intellectuelle et usage du contenu
                    </h2>
                    <p class="text-slate-400 leading-relaxed mb-3">
                        Les marques, logos, graphismes, illustrations pixel art, éléments visuels et le code
                        source du site font l'objet d'une protection par le Code de la propriété intellectuelle.
                    </p>
                    <p class="text-slate-400 leading-relaxed">
                        L'utilisateur s'engage à une utilisation des contenus du site dans un cadre strictly privé.
                        Une utilisation à des fins commerciales, publicitaires ou de revente est strictement interdite
                        sauf accord écrit exprès de l'autrice.
                    </p>
                </section>

                <!-- 4. Responsabilité -->
                <section class="bg-slate-900/40 p-6 rounded-xl border border-slate-800/80">
                    <h2 class="text-base font-semibold text-purple-400 mb-3">
                        4. Limitation de responsabilité
                    </h2>
                    <p class="text-slate-400 leading-relaxed mb-2">
                        Les sources des informations diffusées sur le site sont réputées fiables, mais le site ne
                        garantit pas qu'il soit exempt de défauts, d'erreurs ou d'omissions.
                    </p>
                    <p class="text-slate-400 leading-relaxed">
                        L'éditrice ne pourra être tenue responsable des dommages directs ou indirects causés au matériel
                        de l'utilisateur lors de l'accès au site, ni des dysfonctionnements dus à l'utilisation du
                        réseau Internet (virus, dysfonctionnements du navigateur, etc.).
                    </p>
                </section>

                <!-- 5. Liens hypertextes -->
                <section class="bg-slate-900/40 p-6 rounded-xl border border-slate-800/80">
                    <h2 class="text-base font-semibold text-purple-400 mb-3">
                        5. Liens hypertextes
                    </h2>
                    <p class="text-slate-400 leading-relaxed">
                        Des liens hypertextes peuvent être présents sur le site vers des plateformes tierces (GitHub,
                        LinkedIn, démos interactives). L'utilisateur est informé qu'en cliquant sur ces liens, il
                        sortira du présent site. L'éditrice n'a pas de contrôle sur le contenu de ces sites tiers et ne
                        saurait en être tenue responsable.
                    </p>
                </section>

                <!-- 6. Modification des CGU -->
                <section class="bg-slate-900/40 p-6 rounded-xl border border-slate-800/80">
                    <h2 class="text-base font-semibold text-purple-400 mb-3">
                        6. Modification des CGU
                    </h2>
                    <p class="text-slate-400 leading-relaxed">
                        L'éditrice se réserve le droit de modifier les clauses des présentes CGU à tout moment et sans
                        préavis pour les adapter aux évolutions du site ou de la législation.
                    </p>
                </section>

                <!-- 7. Droit applicable -->
                <section class="bg-slate-900/40 p-6 rounded-xl border border-slate-800/80">
                    <h2 class="text-base font-semibold text-purple-400 mb-3">
                        7. Droit applicable et juridiction compétente
                    </h2>
                    <p class="text-slate-400 leading-relaxed">
                        Les présentes CGU sont soumises au droit français. En cas d'absence de résolution amiable d'un
                        litige né entre les parties, les tribunaux français seront seuls compétents.
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

<style scoped>
/* Le style est géré via Tailwind CSS */
</style>