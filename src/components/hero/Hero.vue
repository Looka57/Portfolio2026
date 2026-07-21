<script setup>
import { ref, onMounted, onUnmounted } from "vue"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const spriteRef = ref(null)
let frameInterval = null

onMounted(() => {
  /* ==================================
    ANIMATION PERSONNAGE
  ================================== */
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

  const ctx = gsap.context(() => {
    // Déplacement du personnage
    gsap.delayedCall(2, () => {
      gsap.to(".character", {
        x: 800,
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

    /* ==================================
      PARALLAX DU DECOR
    ================================== */
    const parallaxLayers = [
      { selector: ".sky", y: 190 },
      { selector: ".mountains", y: 40 },
      { selector: ".islands", y: 220 },
      { selector: ".road", y: 160 },
      { selector: ".character", y: 160 }
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

  onUnmounted(() => {
    ctx.revert()
    if (frameInterval) clearInterval(frameInterval)
  })
})
</script>

<template>
  <!-- Section Hero responsive : colonne sur mobile, 2 colonnes sur desktop -->
  <section class="hero flex flex-col md:flex-row w-full h-screen h-[100dvh] overflow-hidden bg-[#0C131B]">

    <!-- COLONNE GAUCHE -->
    <div
      class="hero-col left-col w-full md:w-1/2 h-full relative flex items-center justify-start pl-[5%] md:pl-[10%] bg-cover bg-center z-[2]">
      <div class="content max-w-[500px] text-white">
        <p class="subtitle text-3xl mb-2.5">Bonjour, je suis</p>
        <h1 class="text-6xl font-bold mb-4">
          <span class="name text-[#FEE4B3] font-medium">[AMANDINE]</span>
        </h1>
        <h2 class="text-3xl mb-6">Développeuse Web Freelance</h2>
        <p class="description mb-10 leading-relaxed text-xl font-semibold text-[#FEE4B3]">
          Créatrice d'expériences digitales modernes, performantes et immersives.
        </p>
        <div class="buttons">
          <a href="#projects"
            class="btn inline-block px-[35px] py-[15px] bg-[#fee4b3ec] text-black font-medium rounded-[10px] no-underline transition-transform duration-300 ease-out hover:-translate-y-1">
            Découvrir mes projets
          </a>
        </div>
      </div>
      //TODO: <!-- TODO : ajouter la photo de  moi sans fond -->
      <!-- <div class="photoMe">
        <img src="@/assets/img/photoMe.png" alt="Photo de moi" class="absolute bottom-0 right-0 w-[200px] md:w-[400px] select-none pointer-events-none">
      </div> -->
    </div>

    <!-- COLONNE DROITE -->
    <div class="hero-col right-col w-full md:w-1/2 h-full relative overflow-hidden">
      <div class="parallax relative w-full h-full">
        <div class="layer sky absolute inset-0 z-[1]">
          <img src="@/assets/font/ciel.png" alt="Ciel"
            class="absolute bottom-0 left-0 w-full h-full object-cover object-bottom select-none pointer-events-none">
        </div>
        <div class="layer mountains absolute inset-0 z-[5]">
          <img src="@/assets/font/montagnes.png" alt="Montagnes"
            class="absolute bottom-0 left-0 w-full h-full object-cover object-bottom select-none pointer-events-none">
        </div>
        <div class="layer islands absolute inset-0 z-[10]">
          <img src="@/assets/font/iles.png" alt="Îles"
            class="absolute bottom-0 left-0 w-full h-full object-cover object-bottom select-none pointer-events-none">
        </div>
        <div class="layer road absolute inset-0 z-[15]">
          <img src="@/assets/font/route.png" alt="Route"
            class="absolute bottom-0 left-0 w-full h-full object-cover object-bottom select-none pointer-events-none">
        </div>

        <div class="character absolute inset-0 z-[20] flex justify-start items-end mb-[3%]">
          <!-- Spritesheet du personnage -->
          <div ref="spriteRef" class="character-sprite mb-[55px] ml-[5%]"></div>
        </div>

        <div class="layer foreground absolute inset-0 z-[30]">
          <img src="@/assets/font/1ert_plan.png" alt="Premier plan"
            class="w-full h-auto absolute bottom-0 top-auto object-contain select-none pointer-events-none">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.left-col {
  background-image: url("@/assets/font/Fond hero.png");
}

/* Spritesheet du personnage */
.character-sprite {
  width: 177px;
  height: 210px;
  background-image: url("@/assets/sprite/spritesheet.png");
  background-repeat: no-repeat;
  background-position: 0px 0px;
  background-size: 884px 210px;
  image-rendering: pixelated;
}
</style>