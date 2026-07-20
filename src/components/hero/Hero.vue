<script setup>
import { onMounted } from "vue"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


onMounted(() => {


  /*
  ==================================
  ANIMATION PERSONNAGE
  SPRITESHEET 2x2
  ==================================
  */

  const sprite = document.querySelector(".character-sprite")

  const frames = [
    "0px 0px",
    "-177px 0px",
    "-354px 0px",
    "-531px 0px",
    "-708px 0px"
  ]

  sprite.style.backgroundPosition = frames[0]


  gsap.delayedCall(2, () => {
    // Le personnage commence à avancer
    gsap.to(".character", {
      x: 800,
      duration: 8,
      repeat: -1,
      ease: "linear"
    })

    // Les jambes commencent à bouger
    let currentFrame = 1
    setInterval(() => {
      sprite.style.backgroundPosition = frames[currentFrame]
      currentFrame++
      if (currentFrame > 4) {
        currentFrame = 1
      }
    }, 180)

  })

  /*
  ==================================
  PARALLAX DU DECOR
  Le personnage ne bouge pas
  ==================================
  */

  gsap.to(".sky", {
    y: 90,
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  })


  gsap.to(".mountains", {
    y: 30,
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  })


  gsap.to(".islands", {
    y: 120,
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  })


  gsap.to(".road", {
    y: 160,
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  })
})
</script>

<template>
  <section class="hero">

    <!-- ========================= -->
    <!-- COLONNE GAUCHE -->
    <!-- ========================= -->
    <div class="hero-col left-col">
      <div class="content">
        <p class="subtitle">Bonjour, je suis</p>
        <h1>
          <span class="name">[AMANDINE]</span>
        </h1>
        <h2>Développeuse Web Freelance</h2>
        <p class="description">
          Créatrice d'expériences digitales modernes, performantes
          et immersives.
        </p>
        <div class="buttons">
          <a href="#projects" class="btn">
            Découvrir mes projets
          </a>
        </div>
      </div>
    </div>

    <!-- ========================= -->
    <!-- COLONNE DROITE -->
    <!-- ========================= -->
    <div class="hero-col right-col">
      <div class="parallax">
        <!-- CIEL -->
        <div class="layer sky">
          <img src="@/assets/font/ciel.png" alt="Ciel">
        </div>

        <!-- MONTAGNES -->
        <div class="layer mountains">
          <img src="@/assets/font/montagnes.png" alt="Montagnes">
        </div>

        <!-- ÎLES -->
        <div class="layer islands">
          <img src="@/assets/font/iles.png" alt="Îles">
        </div>

        <!-- ROUTE -->
        <div class="layer road">
          <img src="@/assets/font/route.png" alt="Route">
        </div>

        <!-- PERSONNAGE -->
        <div class="character">
          <div class="character-sprite"></div>
        </div>

        <!-- PREMIER PLAN -->
        <div class="layer foreground">
          <img src="@/assets/font/1ert_plan.png" alt="Premier plan">
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
/* ===========================
   HERO
=========================== */
.hero {
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #0C131B;
}

/* ===========================
   COLONNES
=========================== */

.hero-col {
  width: 50%;
  height: 100%;
  position: relative;
}

.left-col {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10%;
  background-image: url("@/assets/font/Fond hero.png");
  background-size: cover;
  background-position: center;
  z-index: 2;
}

.right-col {
  position: relative;
  overflow: hidden;
}

/* ===========================
   TEXTE
=========================== */

.content {
  max-width: 500px;
  color: white;
}

.subtitle {
  font-size: 1rem;
  margin-bottom: 10px;
}

.name {
  color: #8b5cf6;
}

h1 {
  font-size: 4rem;
  margin-bottom: 15px;
}

h2 {
  font-size: 2rem;
  margin-bottom: 25px;
}

.description {
  margin-bottom: 40px;
  line-height: 1.8;
}

.btn {
  display: inline-block;
  padding: 15px 35px;
  background: #8b5cf6;
  color: white;
  border-radius: 10px;
  text-decoration: none;
  transition: .3s;
}

.btn:hover {
  transform: translateY(-3px);
}

/* ===========================
   PARALLAX
=========================== */

.parallax {
  position: relative;
  width: 100%;
  height: 100%;
}

/* Toutes les couches */

.layer,
.character {
  position: absolute;
  inset: 0;
}

/* Images */

.layer img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center bottom;
  user-select: none;
  pointer-events: none;
}

/* Personnage */

.character {
  display: flex;
  justify-content: start;
  align-items: flex-end;
  margin-bottom: 3%;
  z-index: 20;
}

.character-sprite {
  width: 177px;
  /* Largeur d'UNE SEULE frame */
  height: 210px;
  /* Hauteur d'UNE SEULE frame */
  margin-bottom: 55px;
  /* Ajuste pour la poser pile sur ta route */
  margin-left: 5%;
  /* Position de départ à gauche */

  /* On applique la spritesheet complète en fond */
  background-image: url("@/assets/sprite/spritesheet.png");
  background-repeat: no-repeat;
  background-position: 0px 0px;
  background-size: 884px 210px;
  /* Force la spritesheet à faire la hauteur du bloc */

  /* Rendu Pixel Art bien net */
  image-rendering: pixelated;
}

/* Premier plan */
.foreground {
  z-index: 30;
}

.foreground img {
  height: auto;
  width: 100%;
  bottom: 0;
  top: auto;
  object-fit: contain;
}

/* Z-INDEX */

.sky {
  z-index: 1;
}

.mountains {
  z-index: 5;
}

.islands {
  z-index: 10;
}

.road {
  z-index: 15;
}

.character {
  z-index: 20;
}

.foreground {
  z-index: 30;
}
</style>