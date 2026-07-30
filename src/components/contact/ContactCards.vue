<template>
    <section ref="mainSection" class="w-full flex items-center justify-center p-4 py-12 lg:py-0">

        <!-- Grid responsive : 1 colonne sur mobile, 3 colonnes dès l'écran moyen (md) -->
        <div class="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-4 text-center">

            <!-- Bloc Principal (CTA) -->
            <div
                class="col-span-1 md:col-span-3 p-6 sm:p-10 pt-10 sm:pt-12 bg-[#1E293B] rounded-2xl border border-[#8F98BE] shadow-xl flex flex-col items-center justify-center gap-3">
                <h4 class="text-[#FEE4B3] font-semibold text-xl sm:text-3xl">
                    Un projet en tête ? Parlons en !
                </h4>
                <p class="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
                    Tu as une idée, un besoin ou simplement envie d’échanger ? Je suis disponible pour discuter de ton
                    projet et trouver ensemble les meilleures solutions.
                </p>
            </div>

            <!-- Carte 1 : Email -->
            <a href="mailto:xxx@xxx.com"
                class="bg-[#1E293B] border border-[#8F98BE] rounded-2xl p-5 flex flex-col items-center justify-center gap-2 shadow-lg hover:border-[#FEE4B3] transition-colors">
                <!-- Emplacement Icône -->
                <div class="text-2xl mb-1">✉️</div>
                <h4 class="text-[#FEE4B3] font-semibold text-sm sm:text-base">Email</h4>
                <p class="text-xs text-slate-400">xxx@xxx.com</p>
            </a>

            <!-- Carte 2 : Localisation -->
            <div
                class="bg-[#1E293B] border border-[#8F98BE] rounded-2xl p-5 flex flex-col items-center justify-center gap-2 shadow-lg">
                <!-- Emplacement Icône -->
                <div class="text-2xl mb-1">📍</div>
                <h4 class="text-[#FEE4B3] font-semibold text-sm sm:text-base">Localisation</h4>
                <p class="text-xs text-slate-400">St Avold</p>
            </div>

            <!-- Carte 3 : LinkedIn -->
            <a href="https://linkedin.com" target="_blank"
                class="bg-[#1E293B] border border-[#8F98BE] rounded-2xl p-5 flex flex-col items-center justify-center gap-2 shadow-lg hover:border-[#FEE4B3] transition-colors">
                <!-- Emplacement Icône -->
                <div class="text-2xl mb-1">💼</div>
                <h4 class="text-[#FEE4B3] font-semibold text-sm sm:text-base">Linkedin</h4>
                <p class="text-xs text-slate-400">xxx@xxx.com</p>
            </a>

        </div>

    </section>
</template>