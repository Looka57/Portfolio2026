<template>
  <section class="hero">
    <!-- COLONNE GAUCHE : Contenu Tech -->
    <div class="hero-col left-col">
      <div class="content">
        <h1>JE SUIS <span class="name">[AMANDINE]</span></h1>
        <h2>Développeuse web freelance</h2>
        <p>Créatrice d'expériences digitales uniques & immersives</p>
        <a href="#" class="btn">Découvrir mes projets</a>
      </div>
    </div>

    <!-- COLONNE DROITE : Zone Parallax étanche -->
    <div class="hero-col right-col">
      <div class="parallax">
        <div class="layer" data-speed="0.4">
          <img src="../../assets/font/ciel.png" alt="Image Ciel" />
        </div>
        <div class="layer" data-speed="0.8">
          <img src="../../assets/font/montagnes.png" alt="Image Montagnes" />
        </div>
        <div class="layer" data-speed="0.2">
          <img src="../../assets/font/iles.png" alt=" Image Iles" />
        </div>
        <div class="layer" data-speed="0.8">
          <img src="../../assets/font/route.png" alt="Image Route" />
        </div>
        <div class="layer" data-speed="0.6">
          <img src="../../assets/font/1ert_plan.png" alt="Image 1er plan" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #0C131B;
}

/* Style commun aux deux colonnes */
.hero-col {
  width: 50%;
  height: 100%;
  position: relative;
}

/* --- COLONNE GAUCHE --- */
.left-col {
  display: flex;
  align-items: center;
  padding-left: 10%;
  background-image: url('../../assets/font/Fond\ hero.png');
  background-size: cover;
  background-position: center;
  z-index: 2;
}

.content {
  color: white;
  max-width: 450px;
}

/* --- COLONNE DROITE  --- */
.right-col {
  overflow: hidden;
  z-index: 1;
}

/* --- LE PARALLAX DANS SA BOÎTE --- */
.parallax {
  position: relative;
  width: 100%;
  height: 100%;
}

.layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.parallax img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center bottom;
  pointer-events: none;
}

/* --- TRAITEMENT SPÉCIAL PREMIER PLAN --- */
.layer:last-child img {
  width: 100%;
  height: auto;
  bottom: 0;
  top: auto;
  object-fit: contain;
  object-position: center bottom;
}
</style>