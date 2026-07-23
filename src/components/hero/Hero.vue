<script setup>
import { ref, onMounted, onUnmounted } from "vue"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const spriteRef = ref(null)
let frameInterval = null
let ctx = null

onMounted(() => {
  const frames = [
    "0px 0px",
    "-177px 0px",
    "-354px 0px",
    "-531px 0px",
    "-708px 0px"
  ]

  if (spriteRef.value) {
    spriteRef.value.style.backgroundPosition = frames[0]
  }

  ctx = gsap.context(() => {
    // Déplacement du personnage
    gsap.delayedCall(1, () => {
      gsap.to(".character", {
        x: "100%",
        duration: 8,
        repeat: -1,
        ease: "linear"
      })

      // Animation des jambes
      let currentFrame = 1
      frameInterval = setInterval(() => {
        if (spriteRef.value) {
          spriteRef.value.style.backgroundPosition = frames[currentFrame]
          currentFrame = (currentFrame % 4) + 1
        }
      }, 180)
    })

    /* PARALLAX */
    const parallaxLayers = [
      { selector: ".sky", y: 120 },
      { selector: ".mountains", y: 40 },
      { selector: ".islands", y: 150 },
      { selector: ".road", y: 100 },
      { selector: ".character", y: 100 }
    ]

    parallaxLayers.forEach((layer) => {
      gsap.to(layer.selector, {
        y: layer.y,
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      })
    })
  })
})

onUnmounted(() => {
  if (ctx) ctx.revert()
  if (frameInterval) clearInterval(frameInterval)
})
</script>

<template>
  <section id="hero" class="hero flex flex-col md:flex-row w-full min-h-screen md:h-screen overflow-hidden bg-[#0C131B] pt-24 md:pt-0">

    <!-- COLONNE GAUCHE (TEXTE) -->
    <div class="hero-col left-col w-full md:w-1/2 h-full min-h-[50vh] md:min-h-screen relative flex items-center justify-start px-6 md:pl-[10%] bg-cover bg-center z-[2] py-12 md:py-0">
      <div class="content max-w-[500px] text-white">
        <p class="subtitle text-xl md:text-3xl mb-2 text-white/90">Bonjour, je suis</p>
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
          <span class="name text-[#FEE4B3] font-semibold">[AMANDINE]</span>
        </h1>
        <h2 class="text-xl sm:text-2xl md:text-3xl mb-4 text-white/80 font-normal">Développeuse Web Freelance</h2>
        <p class="description mb-8 leading-relaxed text-base md:text-xl font-medium text-[#FEE4B3]">
          Créatrice d'expériences digitales modernes, performantes et immersives.
        </p>
        <div class="buttons">
          <a 
            href="#projects"
            class="btn inline-block px-7 py-3.5 bg-[#FEE4B3] text-[#0C131B] font-semibold rounded-xl no-underline transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-[#FEE4B3]/20"
          >
            Découvrir mes projets
          </a>
        </div>
      </div>
    </div>

    <!-- COLONNE DROITE (ANIMATION & PARALLAX) -->
    <div class="hero-col right-col w-full md:w-1/2 h-[50vh] md:h-full relative overflow-hidden">
      <div class="parallax relative w-full h-full">
        
        <div class="layer sky absolute inset-0 z-[1]">
          <img src="@/assets/font/ciel.png" alt="Ciel" class="absolute bottom-0 left-0 w-full h-full object-cover object-bottom select-none pointer-events-none">
        </div>

        <div class="layer mountains absolute inset-0 z-[5]">
          <img src="@/assets/font/montagnes.png" alt="Montagnes" class="absolute bottom-0 left-0 w-full h-full object-cover object-bottom select-none pointer-events-none">
        </div>

        <div class="layer islands absolute inset-0 z-[10]">
          <img src="@/assets/font/iles.png" alt="Îles" class="absolute bottom-0 left-0 w-full h-full object-cover object-bottom select-none pointer-events-none">
        </div>

        <div class="layer road absolute inset-0 z-[15]">
          <img src="@/assets/font/route.png" alt="Route" class="absolute bottom-0 left-0 w-full h-full object-cover object-bottom select-none pointer-events-none">
        </div>

        <!-- PERSONNAGE -->
        <div class="character absolute inset-0 z-[20] flex justify-start items-end mb-[4%]">
          <div ref="spriteRef" class="character-sprite mb-[30px] md:mb-[55px] ml-[5%]"></div>
        </div>

        <div class="layer foreground absolute inset-0 z-[30]">
          <img src="@/assets/font/1ert_plan.png" alt="Premier plan" class="w-full h-auto absolute bottom-0 top-auto object-contain select-none pointer-events-none">
        </div>

      </div>
    </div>

  </section>
</template>

<style scoped>
.left-col {
  background-image: url("@/assets/font/Fond hero.png");
}

/* Spritesheet adaptable */
.character-sprite {
  width: 177px;
  height: 210px;
  background-image: url("@/assets/sprite/spritesheet.png");
  background-repeat: no-repeat;
  background-position: 0px 0px;
  background-size: 884px 210px;
  image-rendering: pixelated;
  transform-origin: bottom left;
}

/* Scale du sprite sur petit écran */
@media (max-width: 768px) {
  .character-sprite {
    transform: scale(0.75);
  }
}
</style>