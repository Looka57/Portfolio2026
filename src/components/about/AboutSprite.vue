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
const badge1 = ref(null)
const badge2 = ref(null)
const badge3 = ref(null)
const badge4 = ref(null)

let ctx

function waitForImages(container) {
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

    ctx = gsap.context(() => {
        gsap.set(characterRef.value, { xPercent: -50 })

        // On donne une durée totale fictive de 10 à la timeline pour découper facilement les étapes
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: mainSection.value,
                start: 'top top',
                end: '+=200%',    // Distance de scroll idéale
                scrub: 0.5,
                pin: true,
                markers: true,
            }
        })

        // 1. MONTAGNES & ÎLES : Mouvement parallaxe doux tout au long du scroll (durée: 10)
        tl.to(mountainsRef.value, { y: '-10vh', duration: 10, ease: 'none' }, 0)
        tl.to(islandsRef.value, { y: '-15vh', duration: 10, ease: 'none' }, 0)

        // 2. BADGES : Arrivent au tout début (durée: 2)
        tl.fromTo([badge1.value, badge2.value, badge3.value, badge4.value],
            { y: '-10vh', opacity: 0 },
            { y: 0, opacity: 1, duration: 2, stagger: 0.3, ease: 'power1.out' },
            0
        )

        // 3. PERSONNAGE : DESCENTE ULTRA RAPIDE (durée: 3 sur 10)
        // Il fait TOUT son trajet dans les premiers 30% du scroll !
        tl.to(characterRef.value, {
            y: '42vh',          // Distance parfaite pour atteindre le centre du trou
            scale: 0.05,        // Devient minuscule
            opacity: 0,         // S'efface complètement
            duration: 3,        // Terminé très tôt dans le scroll !
            ease: 'power2.in'   // Accélération de chute
        }, 0)

    }, mainSection.value)

    ScrollTrigger.refresh()
})

onUnmounted(() => {
    if (ctx) ctx.revert()
})
</script>

<template>
    <section ref="mainSection" class="w-full h-screen overflow-hidden bg-[#0C131B] relative flex">

        <!-- ZONE VISUELLE (a gauche) -->
        <div class="w-1/2 h-full relative overflow-hidden">

            <img ref="mountainsRef" :src="montagnes"
                class="absolute inset-0 w-full h-full object-cover z-0 scale-105" />

            <img :src="trou" class="absolute inset-0 w-full h-full object-cover z-10" />

            <div ref="islandsRef" class="absolute inset-0 w-full h-full z-20 pointer-events-none">
                <img :src="ilesImg" class="w-full h-full object-cover" />

                <div ref="badge1" class="absolute" style="left: 12%; top: 35%;">
                    <div class="pixel-badge">✨ Vue.js</div>
                </div>
                <div ref="badge2" class="absolute" style="left: 31%; top: 46%;">
                    <div class="pixel-badge">⚡ C#</div>
                </div>
                <div ref="badge3" class="absolute" style="left: 58%; top: 44%;">
                    <div class="pixel-badge">🛠️ Tailwind</div>
                </div>
                <div ref="badge4" class="absolute" style="right: 12%; top: 26%;">
                    <div class="pixel-badge">🚀 Node.js</div>
                </div>
            </div>

            <div ref="characterRef" class="absolute left-1/2 z-30 pointer-events-none"
                style="top: 15%; transform-origin: bottom center;">
                <img :src="descenteImg" class="h-64 object-contain" />
            </div>

        </div>

        <!-- ZONE TEXTE (a droite) -->
        <!-- plus de h-full ni overflow-y-auto : sinon le scroll de la page
         ne se propage plus a ScrollTrigger -->
        <div class="w-1/2 p-12 space-y-40 z-40">
            <div class="bg-slate-900/90 border border-slate-700 p-6 rounded-xl shadow-xl">
                <h3 class="text-xl font-bold text-sky-400">01. Explorateur Frontend</h3>
                <p class="text-slate-300 mt-2">Présentation de ton parcours...</p>
            </div>
            <div class="bg-slate-900/90 border border-slate-700 p-6 rounded-xl shadow-xl">
                <h3 class="text-xl font-bold text-emerald-400">02. Stack Technique</h3>
                <p class="text-slate-300 mt-2">Détails des compétences maîtrisées...</p>
            </div>
            <div class="bg-slate-900/90 border border-slate-700 p-6 rounded-xl shadow-xl mb-20">
                <h3 class="text-xl font-bold text-purple-400">03. Profondeurs</h3>
                <p class="text-slate-300 mt-2">Projets backend et architecture...</p>
            </div>
        </div>

    </section>
</template>

<style scoped>
.pixel-badge {
    background-color: #0b0f1a;
    border: 2px solid #3ea6ff;
    color: #ffffff;
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: bold;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.8);
    white-space: nowrap;
}
</style>