<script setup>
import { onMounted, onUnmounted, ref, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import montagnes from '@/assets/font/montagnes.png'
import trou from '@/assets/font/trous.png'
import ilesImg from '@/assets/font/ilesAbout.png'
import descenteImg from '@/assets/sprite/descente.png'

gsap.registerPlugin(ScrollTrigger)

const mainSection = ref(null)
const mountainsRef = ref(null)
const islandsRef = ref(null)
const characterRef = ref(null)
const ropeRef = ref(null)

const badge1 = ref(null)
const badge2 = ref(null)
const badge3 = ref(null)
const badge4 = ref(null)

const card1 = ref(null)
const card2 = ref(null)
const card3 = ref(null)

let mm = gsap.matchMedia()

function waitForImages(container) {
    if (!container) return Promise.resolve()
    const imgs = container.querySelectorAll('img')
    return Promise.all(
        Array.from(imgs).map(img =>
            img.complete
                ? Promise.resolve()
                : new Promise(resolve => {
                    img.addEventListener('load', resolve, { once: true })
                    img.addEventListener('error', resolve, { once: true })
                })
        )
    )
}

onMounted(async () => {
    await nextTick()
    await waitForImages(mainSection.value)

    // Utilisation de matchMedia pour cibler uniquement les écrans desktop (min-width: 1024px)
    mm.add('(min-width: 1024px)', () => {
        // Centrage horizontal initial
        gsap.set(characterRef.value, { xPercent: -70 })
        gsap.set(ropeRef.value, { xPercent: -50, scaleY: 0 })

        // Masquage initial des cartes
        gsap.set([card1.value, card2.value, card3.value], {
            opacity: 0,
            x: 80,
            scale: 0.95
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: mainSection.value,
                start: 'top top',
                end: '+=150%',
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
                anticipatePin: 1,
                markers: false
            }
        })

        // 1. Parallaxe
        tl.to(mountainsRef.value, { y: '-50vh', duration: 10, ease: 'none' }, 0)
        tl.to(islandsRef.value, { y: '-15vh', duration: 10, ease: 'none' }, 0)

        // 2. Badges
        tl.fromTo(
            [badge1.value, badge2.value, badge3.value, badge4.value],
            { y: '-10vh', opacity: 0 },
            { y: 0, opacity: 1, duration: 2, stagger: 0.3, ease: 'power1.out' },
            0
        )

        // 3. Cartes
        tl.to(card1.value, { opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power2.out' }, 0.6)
        tl.to(card2.value, { opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power2.out' }, 1.5)
        tl.to(card3.value, { opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power2.out' }, 2.4)

        // 4. Personnage et corde
        tl.to(characterRef.value, { y: '72vh', scale: 0.10, opacity: 0, duration: 3, ease: 'power2.in' }, 0)
        tl.to(ropeRef.value, { scaleY: 1, duration: 3, ease: 'power2.in' }, 0)
    })

    // Nettoyage/Recalcul
    ScrollTrigger.refresh()
})

onUnmounted(() => {
    if (mm) mm.revert() // Réinitialise proprement les médias et animations GSAP
})
</script>

<template>
    <section ref="mainSection" class="w-full min-h-screen lg:h-screen overflow-hidden bg-[#0C131B] relative flex flex-col lg:flex-row z-10 py-12 lg:py-0">

        <!-- ZONE VISUELLE (Masquée sur Mobile/Tablette, visible dès lg: 1024px) -->
        <div class="hidden lg:block lg:w-1/2 h-full relative overflow-hidden">
            <img ref="mountainsRef" :src="montagnes"
                class="absolute inset-0 w-full h-full object-cover z-0 scale-105" />
            <img :src="trou" class="absolute inset-0 w-full h-full object-cover z-10" />

            <div ref="islandsRef" class="absolute inset-0 w-full h-full z-20 pointer-events-none">
                <img :src="ilesImg" class="w-full h-full object-cover" />

                <!-- Étape 1 : Commerce & Management -->
                <div ref="badge1" class="absolute pointer-events-auto" style="left: 4%; top: 38%;">
                    <div class="crystal-container group float-delay-1">
                        <div class="crystal crystal-amber">
                            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L2 9l10 13 10-13-10-7zm0 3.2L18.4 9 12 18.3 5.6 9 12 5.2z" />
                            </svg>
                        </div>
                        <span class="tooltip tooltip-left">15 ans Commerce & Management</span>
                    </div>
                </div>

                <!-- Étape 2 : Reconversion -->
                <div ref="badge2" class="absolute pointer-events-auto" style="left: 28%; top: 52%;">
                    <div class="crystal-container group float-delay-2">
                        <div class="crystal crystal-emerald">
                            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L2 9l10 13 10-13-10-7zm0 3.2L18.4 9 12 18.3 5.6 9 12 5.2z" />
                            </svg>
                        </div>
                        <span class="tooltip">Reconversion & Stage Dev</span>
                    </div>
                </div>

                <!-- Étape 3 : Recherche -->
                <div ref="badge3" class="absolute pointer-events-auto" style="left: 68%; top: 50%;">
                    <div class="crystal-container group float-delay-3">
                        <div class="crystal crystal-sky">
                            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L2 9l10 13 10-13-10-7zm0 3.2L18.4 9 12 18.3 5.6 9 12 5.2z" />
                            </svg>
                        </div>
                        <span class="tooltip">Recherche active & Projets</span>
                    </div>
                </div>

                <!-- Étape 4 : Freelance -->
                <div ref="badge4" class="absolute pointer-events-auto" style="right: 2%; top: 30%;">
                    <div class="crystal-container group float-delay-4">
                        <div class="crystal crystal-purple">
                            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L2 9l10 13 10-13-10-7zm0 3.2L18.4 9 12 18.3 5.6 9 12 5.2z" />
                            </svg>
                        </div>
                        <span class="tooltip tooltip-right">Aventure Freelance</span>
                    </div>
                </div>
            </div>

            <!-- CORDE HORIZONTALE -->
            <div class="absolute top-[14%] left-0 right-0 h-2 z-20 pointer-events-none horizontal-rope"></div>

            <!-- CORDE VERTICALE -->
            <div ref="ropeRef" class="absolute left-1/2 top-[14.5%] z-25 pointer-events-none origin-top vertical-rope"
                style="height: 72vh; width: 3px;"></div>

            <!-- PERSONNAGE -->
            <div ref="characterRef" class="absolute left-1/2 z-30 pointer-events-none"
                style="top: 14%; transform-origin: top center;">
                <img :src="descenteImg" class="h-34 object-contain" />
            </div>
        </div>

        <!-- ZONE TEXTE (Pleine largeur sur mobile, demi-largeur sur Desktop) -->
        <div class="w-full lg:w-1/2 h-full flex flex-col justify-center p-6 sm:p-8 space-y-6 lg:space-y-20 z-40">

            <div ref="card1"
                class="group bg-slate-900/90 border-l-4 border-sky-400/70 border-y border-r border-slate-700 p-5 rounded-xl shadow-xl shadow-sky-500/5 hover:border-sky-400 hover:shadow-sky-500/20 hover:-translate-y-1 transition-all duration-300">
                <div class="flex items-center gap-3 mb-1">
                    <span
                        class="font-mono text-xs px-2 py-0.5 rounded bg-sky-400/10 text-sky-400 border border-sky-400/30">01</span>
                    <h3 class="text-lg font-bold text-sky-400">Une reconversion assumée</h3>
                </div>
                <p class="text-slate-300 text-sm leading-relaxed mt-1">
                    Après plus de quinze ans dans le commerce et le management, j'ai choisi de me reconvertir dans le
                    développement web.
                    <br><br>
                    Cette double expérience m'a appris à écouter les besoins réels avant de coder — et à traduire ça en
                    interfaces claires, pensées pour l'utilisateur autant que pour la technique.
                </p>
            </div>

            <div ref="card2"
                class="group bg-slate-900/90 border-l-4 border-emerald-400/70 border-y border-r border-slate-700 p-5 rounded-xl shadow-xl shadow-emerald-500/5 hover:border-emerald-400 hover:shadow-emerald-500/20 hover:-translate-y-1 transition-all duration-300">
                <div class="flex items-center gap-3 mb-1">
                    <span
                        class="font-mono text-xs px-2 py-0.5 rounded bg-emerald-400/10 text-emerald-400 border border-emerald-400/30">02</span>
                    <h3 class="text-lg font-bold text-emerald-400">Ce qui m'anime</h3>
                </div>
                <p class="text-slate-300 text-sm leading-relaxed mt-1">
                    J'aime créer des interfaces modernes, résoudre des problèmes concrets et apprendre continuellement
                    de nouvelles technologies. Chaque projet est l'occasion de progresser, d'explorer de nouvelles idées
                    et de repousser mes limites.
                    <br><br>
                    Ce qui me motive particulièrement, c'est de transformer une idée en une expérience numérique claire,
                    intuitive et agréable à utiliser. J'aime autant réfléchir à l'aspect visuel d'une application qu'à
                    sa conception technique, afin de créer des solutions qui allient performance, simplicité et
                    créativité.
                </p>
            </div>

            <div ref="card3"
                class="group bg-slate-900/90 border-l-4 border-purple-400/70 border-y border-r border-slate-700 p-5 rounded-xl shadow-xl shadow-purple-500/5 hover:border-purple-400 hover:shadow-purple-500/20 hover:-translate-y-1 transition-all duration-300">
                <div class="flex items-center gap-3 mb-1">
                    <span
                        class="font-mono text-xs px-2 py-0.5 rounded bg-purple-400/10 text-purple-400 border border-purple-400/30">03</span>
                    <h3 class="text-lg font-bold text-purple-400">Toujours plus loin</h3>
                </div>
                <p class="text-slate-300 text-sm leading-relaxed mt-1">
                    Curieuse et persévérante, je continue d'approfondir mes compétences pour livrer des solutions
                    performantes et évolutives.
                    <br><br>
                    Chaque projet est une occasion de perfectionner mon code et de créer des interfaces qui durent.
                </p>
            </div>

        </div>
    </section>
</template>

<style scoped>
/* Cordes */
.horizontal-rope {
    background: repeating-linear-gradient(90deg, #8b5a2b, #8b5a2b 6px, #5c3a1e 6px, #5c3a1e 12px);
    border-bottom: 2px solid #3d2311;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.vertical-rope {
    background: repeating-linear-gradient(0deg, #8b5a2b, #8b5a2b 6px, #5c3a1e 6px, #5c3a1e 12px);
    box-shadow: -1px 0 3px rgba(0, 0, 0, 0.5);
}

/* Conteneur cristal & Flottaison */
.crystal-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    animation: float 3.5s ease-in-out infinite;
}

.float-delay-1 {
    animation-delay: 0s;
}

.float-delay-2 {
    animation-delay: 0.8s;
}

.float-delay-3 {
    animation-delay: 1.6s;
}

.float-delay-4 {
    animation-delay: 2.4s;
}

.crystal {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #0b0f1a;
    border: 2px solid currentColor;
    box-shadow: 0 0 12px currentColor;
    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
}

.crystal-container:hover .crystal {
    transform: scale(1.2);
    box-shadow: 0 0 22px currentColor;
}

.crystal-amber {
    color: #f59e0b;
}

.crystal-emerald {
    color: #10b981;
}

.crystal-sky {
    color: #38bdf8;
}

.crystal-purple {
    color: #c084fc;
}

.tooltip {
    position: absolute;
    bottom: 120%;
    left: 50%;
    transform: translateX(-50%) translateY(5px);
    background: #0c131b;
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 5px 12px;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 600;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s ease, transform 0.2s ease;
    pointer-events: none;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
    z-index: 50;
}

.crystal-container:hover .tooltip {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(0);
}

/* Alignement spécifique pour le badge tout à gauche */
.tooltip-left {
    left: 0;
    transform: translateY(5px);
}

.crystal-container:hover .tooltip-left {
    transform: translateY(0);
}

/* Alignement spécifique pour le badge tout à droite */
.tooltip-right {
    left: auto;
    right: 0;
    transform: translateY(5px);
}

.crystal-container:hover .tooltip-right {
    transform: translateY(0);
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-7px);
    }
}
</style>