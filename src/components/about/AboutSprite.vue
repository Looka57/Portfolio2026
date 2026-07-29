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

    // Déclaration des ref pour les cartes
    const card1 = ref(null)
    const card2 = ref(null)
    const card3 = ref(null)

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
            // Centrage horizontal initial
            gsap.set(characterRef.value, { xPercent: -70 })
            gsap.set(ropeRef.value, { xPercent: -50, scaleY: 0 }) // La corde démarre rétractée en haut

            // On cache les cartes au départ
            gsap.set(
                [card1.value, card2.value, card3.value],
                {
                    opacity: 0, // Translucides
                    x: 80,      // Décalées vers la droite
                    scale: .95  // Légèrement plus petites
                }
            )

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: mainSection.value,
                    start: 'top top',
                    end: '+=200%',
                    scrub: 0.5,
                    pin: true,
                    markers: true,
                }
            })

            // 1. MONTAGNES & ÎLES : Parallaxe doux
            tl.to(mountainsRef.value, { y: '-100vh', duration: 10, ease: 'none' }, 0)
            tl.to(islandsRef.value, { y: '-15vh', duration: 10, ease: 'none' }, 0)

            // 2. BADGES : Entrée
            tl.fromTo([badge1.value, badge2.value, badge3.value, badge4.value],
                { y: '-10vh', opacity: 0 },
                { y: 0, opacity: 1, duration: 2, stagger: 0.3, ease: 'power1.out' },
                0
            )

            // 3. CARTES : Apparition progressive au scroll
            // Carte 1
            tl.to(card1.value, {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 1,
                ease: "power2.out"
            }, 0.6)

            // Carte 2
            tl.to(card2.value, {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 1,
                ease: "power2.out"
            }, 1.5)

            // Carte 3
            tl.to(card3.value, {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 1,
                ease: "power2.out"
            }, 2.4)

            // 4. PERSONNAGE ET CORDE : Descente & Allongement
            tl.to(characterRef.value, {
                y: '72vh',
                scale: 0.10,
                opacity: 0,
                duration: 3,
                ease: 'power2.in'
            }, 0)

            tl.to(ropeRef.value, {
                scaleY: 1,
                duration: 3,
                ease: 'power2.in'
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

                    <div ref="badge1" class="absolute" style="left: 2%; top: 40%;">
                        <div class="pixel-badge">✨ Vue.js</div>
                    </div>
                    <div ref="badge2" class="absolute" style="left: 27%; top: 53%;">
                        <div class="pixel-badge">⚡ C#</div>
                    </div>
                    <div ref="badge3" class="absolute" style="left: 67%; top: 50%;">
                        <div class="pixel-badge">🛠️ Tailwind</div>
                    </div>
                    <div ref="badge4" class="absolute" style="right: 0%; top:30%;">
                        <div class="pixel-badge">🚀 Node.js</div>
                    </div>
                </div>

                <!-- CORDE HORIZONTALE (Point d'ancrage en haut) -->
                <div class="absolute top-[14%] left-[0%] right-[0%] h-2 z-20 pointer-events-none horizontal-rope"></div>

                <!-- CORDE VERTICALE (Qui s'allonge) -->
                <div ref="ropeRef"
                    class="absolute left-1/2 top-[14.5%] z-25 pointer-events-none origin-top vertical-rope"
                    style="height: 72vh; width: 3px;"></div>

                <!-- PERSONNAGE -->
                <div ref="characterRef" class="absolute left-1/2 z-30 pointer-events-none"
                    style="top: 14%;  transform-origin: top center;">
                    <img :src="descenteImg" class="h-34 object-contain" />
                </div>

            </div>

            <!-- ZONE TEXTE (a droite) -->
            <div class="w-1/2 p-12 space-y-10 z-40 mt-20">

                <div ref="card1" class="group bg-slate-900/90 border-l-4 border-sky-400/70 border-y border-r border-slate-700
                p-6 rounded-xl shadow-xl shadow-sky-500/5
                hover:border-sky-400 hover:shadow-sky-500/20 hover:-translate-y-1
                transition-all duration-300">
                    <div class="flex items-center gap-3 mb-1">
                        <span
                            class="font-mono text-xs px-2 py-1 rounded bg-sky-400/10 text-sky-400 border border-sky-400/30">01</span>
                        <h3 class="text-xl font-bold text-sky-400">Une reconversion assumée</h3>
                    </div>
                    <p class="text-slate-300 mt-2">
                        Après plus de quinze ans dans le commerce et le management, j'ai choisi
                        de me reconvertir dans le développement web.
                        <br><br>
                        Cette double expérience m'a appris à écouter les besoins réels avant
                        de coder — et à traduire ça en interfaces claires, pensées pour
                        l'utilisateur autant que pour la technique.
                    </p>
                </div>

                <div ref="card2" class="group bg-slate-900/90 border-l-4 border-emerald-400/70 border-y border-r border-slate-700
                p-6 rounded-xl shadow-xl shadow-emerald-500/5
                hover:border-emerald-400 hover:shadow-emerald-500/20 hover:-translate-y-1
                transition-all duration-300">
                    <div class="flex items-center gap-3 mb-1">
                        <span
                            class="font-mono text-xs px-2 py-1 rounded bg-emerald-400/10 text-emerald-400 border border-emerald-400/30">02</span>
                        <h3 class="text-xl font-bold text-emerald-400">Ce qui m'anime</h3>
                    </div>
                    <p class="text-slate-300 mt-2">
                        J'aime créer des interfaces modernes, résoudre des problèmes concrets et apprendre
                        continuellement
                        de nouvelles technologies. Chaque projet est l'occasion de progresser, d'explorer de nouvelles
                        idées
                        et de repousser mes limites.
                        <br> <br>
                        Ce qui me motive particulièrement, c'est de transformer une idée en une expérience numérique
                        claire,
                        intuitive et agréable à utiliser. J'aime autant réfléchir à l'aspect visuel d'une application
                        qu'à
                        sa conception technique, afin de créer des solutions qui allient performance, simplicité et
                        créativité.

                    </p>
                </div>

                <div ref="card3" class="group bg-slate-900/90 border-l-4 border-purple-400/70 border-y border-r border-slate-700
                p-6 rounded-xl shadow-xl shadow-purple-500/5
                hover:border-purple-400 hover:shadow-purple-500/20 hover:-translate-y-1
                transition-all duration-300">
                    <div class="flex items-center gap-3 mb-1">
                        <span
                            class="font-mono text-xs px-2 py-1 rounded bg-purple-400/10 text-purple-400 border border-purple-400/30">03</span>
                        <h3 class="text-xl font-bold text-purple-400">Toujours plus loin</h3>
                    </div>
                    <p class="text-slate-300 mt-2">
                        Curieuse et persévérante, je continue d'approfondir mes compétences
                        pour livrer des solutions performantes et évolutives.
                        <br><br>
                        Chaque projet est une occasion de perfectionner mon code et de créer
                        des interfaces qui durent.
                    </p>
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

/* Style pixel-art / tressé pour la corde horizontale */
.horizontal-rope {
    background: repeating-linear-gradient(90deg,
            #8b5a2b,
            #8b5a2b 6px,
            #5c3a1e 6px,
            #5c3a1e 12px);
    border-bottom: 2px solid #3d2311;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

/* Style pixel-art / tressé pour la corde verticale */
.vertical-rope {
    background: repeating-linear-gradient(0deg,
            #8b5a2b,
            #8b5a2b 6px,
            #5c3a1e 6px,
            #5c3a1e 12px);
    box-shadow: -1px 0 3px rgba(0, 0, 0, 0.5);
}
</style>