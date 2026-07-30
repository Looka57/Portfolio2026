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
                Politique de Confidentialité
            </h1>

            <div class="space-y-8 text-sm leading-relaxed">

                <!-- Intro -->
                <section class="bg-slate-900/40 p-6 rounded-xl border border-slate-800/80">
                    <p class="text-slate-300">
                        La présente Politique de Confidentialité décrit la manière dont <strong>Amandine
                            Napolitano</strong> traite les informations lors de votre visite sur ce site portfolio,
                        conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique
                        et Libertés.
                    </p>
                </section>

                <!-- 1. Absence de collecte directe -->
                <section class="bg-slate-900/40 p-6 rounded-xl border border-slate-800/80">
                    <h2 class="text-base font-semibold text-purple-400 mb-3">
                        1. Collecte des données personnelles
                    </h2>
                    <p class="text-slate-400 leading-relaxed mb-3">
                        Ce site est un portfolio exclusivement informatif. <strong>Aucun formulaire de contact ni aucun
                            dispositif de collecte de données</strong> n'est présent sur le site.
                    </p>
                    <p class="text-slate-400 leading-relaxed">
                        Si vous choisissez de me contacter directement via votre propre messagerie e-mail, les
                        informations transmises (nom, e-mail, message) seront uniquement utilisées pour échanger avec
                        vous et traiter votre demande. Elles ne seront <strong>jamais cédées, vendues ou partagées avec
                            des tiers</strong>.
                    </p>
                </section>

                <!-- 2. Gestion des Cookies -->
                <section class="bg-slate-900/40 p-6 rounded-xl border border-slate-800/80">
                    <h2 class="text-base font-semibold text-purple-400 mb-3">
                        2. Absence de cookies et traceurs
                    </h2>
                    <p class="text-slate-400 leading-relaxed">
                        Ce site n'utilise <strong>aucun cookie</strong> (ni cookie technique, ni cookie publicitaire, ni
                        traceur d'analyse d'audience). Votre navigation reste totalement anonyme et aucun fichier témoin
                        n'est déposé sur votre appareil.
                    </p>
                </section>

                <!-- 3. Sécurité -->
                <section class="bg-slate-900/40 p-6 rounded-xl border border-slate-800/80">
                    <h2 class="text-base font-semibold text-purple-400 mb-3">
                        3. Sécurité de la connexion
                    </h2>
                    <p class="text-slate-400 leading-relaxed">
                        L'ensemble des échanges entre votre navigateur et ce site est sécurisé par un protocole de
                        chiffrement SSL/TLS (HTTPS), garantissant la confidentialité et l'intégrité de la navigation.
                    </p>
                </section>

                <!-- 4. Vos droits (RGPD) -->
                <section class="bg-slate-900/40 p-6 rounded-xl border border-slate-800/80">
                    <h2 class="text-base font-semibold text-purple-400 mb-3">
                        4. Vos droits (RGPD)
                    </h2>
                    <p class="mb-3 text-slate-400">
                        Si vous m'avez contactée par e-mail, vous disposez à tout moment des droits suivants concernant
                        vos échanges :
                    </p>
                    <ul class="space-y-1.5 text-slate-400 list-disc list-inside pl-2 mb-4">
                        <li><strong>Droit d'accès et de rectification :</strong> Consulter ou corriger les informations
                            échangées.</li>
                        <li><strong>Droit à l'effacement :</strong> Demander la suppression définitive de nos
                            historiques de mails.</li>
                    </ul>
                    <p class="text-slate-400">
                        Pour exercer ces droits, vous pouvez me contacter à :
                        <a href="mailto:contact@domaine.com" class="text-purple-400 underline hover:text-white">[Ton
                            Email Pro]</a>.
                    </p>
                </section>

                <!-- 5. Autorité de contrôle -->
                <section class="bg-slate-900/40 p-6 rounded-xl border border-slate-800/80">
                    <h2 class="text-base font-semibold text-purple-400 mb-3">
                        5. Autorité de contrôle
                    </h2>
                    <p class="text-slate-400 leading-relaxed">
                        Si vous estimez que le traitement de vos échanges e-mails ne respecte pas le RGPD, vous avez la
                        possibilité de déposer une réclamation auprès de la CNIL (<a href="https://www.cnil.fr"
                            target="_blank" class="text-purple-300 underline">www.cnil.fr</a>).
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
/* Style géré par Tailwind CSS */
</style>