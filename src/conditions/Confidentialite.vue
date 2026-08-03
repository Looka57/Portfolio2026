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
                🔐 Politique de Confidentialité (RGPD)
            </h1>

            <p class="text-center text-slate-400 mb-8 max-w-2xl mx-auto text-sm leading-relaxed">
                Chez <strong class="text-white">Amandine Napolitano</strong>, la protection de vos données personnelles
                est une priorité.
                Je m'engage à respecter votre vie privée et à garantir la sécurité de vos informations
                conformément au Règlement Général sur la Protection des Données (RGPD).
            </p>

            <div class="space-y-6 text-sm leading-relaxed">

                <!-- 1. Collecte des données -->
                <section
                    class="bg-slate-900/40 p-6 rounded-xl border-l-4 border-l-purple-500 border border-slate-800/80">
                    <h2 class="text-base font-semibold text-purple-400 mb-3 uppercase tracking-wider text-xs">
                        1. Collecte des données
                    </h2>
                    <p class="text-slate-300 mb-3">
                        Dans le cadre de l'utilisation de ce portfolio et des échanges directs, seules les informations
                        strictement nécessaires sont traitées :
                    </p>
                    <ul class="space-y-2 text-slate-300">
                        <li class="flex items-center gap-2"><span class="text-purple-400">🔹</span> Nom et prénom (si
                            transmis par e-mail)</li>
                        <li class="flex items-center gap-2"><span class="text-purple-400">🔹</span> Adresse e-mail de
                            contact</li>
                        <li class="flex items-center gap-2"><span class="text-purple-400">🔹</span> Contenu du message
                            et demandes de projets</li>
                    </ul>
                </section>

                <!-- 2. Finalités et non-transmission -->
                <section class="bg-slate-900/40 p-6 rounded-xl border border-slate-800/80">
                    <h2 class="text-base font-semibold text-purple-400 mb-3 uppercase tracking-wider text-xs">
                        2. Finalités du traitement et non-transmission
                    </h2>
                    <p class="mb-3">Vos données sont utilisées exclusivement pour :</p>
                    <ul class="space-y-1.5 text-slate-400 list-disc list-inside pl-2 mb-4">
                        <li>Répondre aux demandes de renseignements ou d'offres de collaboration.</li>
                        <li>Assurer le suivi des projets web freelance en cours.</li>
                        <li>Établir des propositions commerciales ou devis sur demande.</li>
                    </ul>

                    <div class="p-4 rounded-lg bg-emerald-950/30 border border-emerald-500/40 text-emerald-300 text-xs">
                        <strong class="font-bold text-emerald-200">Engagement de confidentialité :</strong> Vos données
                        ne sont ni revendues, ni transmises à des tiers, ni utilisées à des fins commerciales ou
                        publicitaires.
                    </div>
                </section>

                <!-- 3. Suivi technique et performances -->
                <section class="bg-slate-900/40 p-6 rounded-xl border border-slate-800/80">
                    <h2 class="text-base font-semibold text-purple-400 mb-3 uppercase tracking-wider text-xs">
                        3. Suivi technique et performances
                    </h2>
                    <p class="mb-2">
                        À des fins de suivi technique et d’optimisation du référencement naturel, le site utilise
                        <strong class="text-white">Google Search Console</strong>.
                    </p>
                    <p class="text-xs text-slate-400">
                        Cet outil permet de mesurer les performances globales du site sans installer de cookie sur votre
                        navigateur ni collecter de données personnelles sur les visiteurs.
                    </p>
                </section>

                <!-- 4 & 5. Grille Base légale + Conservation -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <section class="bg-slate-900/40 p-6 rounded-xl border border-slate-800/80">
                        <h2 class="text-base font-semibold text-purple-400 mb-3 uppercase tracking-wider text-xs">
                            4. Base légale
                        </h2>
                        <p class="text-slate-400 text-xs leading-relaxed">
                            Le traitement repose sur votre consentement explicite (envoi d'e-mail) et sur l'exécution de
                            mesures précontractuelles liées à vos demandes de prestation web.
                        </p>
                    </section>

                    <section class="bg-slate-900/40 p-6 rounded-xl border border-slate-800/80">
                        <h2 class="text-base font-semibold text-purple-400 mb-3 uppercase tracking-wider text-xs">
                            5. Conservation
                        </h2>
                        <p class="text-slate-400 text-xs leading-relaxed">
                            Les échanges e-mails professionnels sont conservés pendant la durée nécessaire à la gestion
                            de la relation commerciale, puis supprimés après une période d'inactivité.
                        </p>
                    </section>
                </div>

                <!-- 6. Vos droits (RGPD) -->
                <section class="bg-slate-900/40 p-6 rounded-xl border border-slate-800/80">
                    <h2 class="text-base font-semibold text-purple-400 mb-3 uppercase tracking-wider text-xs">
                        6. Vos droits (RGPD)
                    </h2>
                    <p class="mb-3">
                        Conformément au RGPD, vous disposez des droits d’accès, de rectification, d’effacement,
                        d’opposition et de portabilité de vos données.
                    </p>
                    <div class="p-4 rounded-lg bg-purple-950/30 border border-purple-500/40 text-purple-300 text-xs">
                        Toute demande peut être adressée directement par e-mail à :
                        <a href="mailto:contact@domaine.com" class="text-white underline hover:text-purple-200">[Ton
                            Email Pro]</a>. Vous pouvez également introduire une réclamation auprès de la CNIL (<a
                            href="https://www.cnil.fr" target="_blank"
                            class="underline hover:text-white">www.cnil.fr</a>).
                    </div>
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
/* Style géré intégralement par Tailwind CSS */
</style>