<script setup>
import { reactive, computed, ref } from 'vue'

/* ==========================================================
   1. CONFIGURATION DU CENTRE DE L'ARBRE
   ==========================================================
   Coordonnées du cœur de l'arbre de compétences.
   Tous les calculs de position radiale utilisent ce point.
========================================================== */
const cx = 650, cy = 410

/* ==========================================================
   2. MÉTHODE DE GÉNÉRATION DES LOSANGES (Niveau 0)
   ==========================================================
   Calcule les 4 points SVG (Haut, Droite, Bas, Gauche) 
   pour dessiner le losange principal des catégories.
========================================================== */
function getDiamondPoints(x, y, size) {
  return `${x},${y - size} ${x + size},${y} ${x},${y + size} ${x - size},${y}`
}

/* ==========================================================
   3. DONNÉES STRUCTURÉES DE L'ARBRE DE COMPÉTENCES
   ==========================================================
   Contient la hiérarchie complète (branches, sous-branches,
   statuts verrouillés, descriptions, niveaux et projets).
========================================================== */
const tree = reactive([
  {
    key: 'front', color: '#3ea6ff', angle: -90, label: 'Front-end', icon: '</>',
    desc: 'Interfaces web modernes, réactives et accessibles.', level: 4, expanded: false,
    projects: ['Portfolio', 'ASPPorcelette', 'Admin Mns', 'Adem'],
    children: [
      { label: 'HTML / CSS', icon: 'CSS', desc: 'Structure sémantique, Flexbox, Grid, Animations CSS.', level: 5 },
      {
        label: 'JavaScript', icon: 'JS', desc: 'Logique ES6+, Async/Await, manipulation du DOM.', level: 3, expanded: false,
        children: [
          { label: 'Vue.js', icon: 'V', desc: 'Framework principal, Composition API, Pinia, Vue Router.', level: 3, projects: ['Portfolio', 'ASPPorcelette'] },
          { label: 'Nuxt.js', icon: 'N', desc: 'SSR / SSG pour Vue, optimisation SEO.', level: 2, locked: true },
        ]
      },
      {
        label: 'Bootstrap', icon: 'B', desc: "Grille responsive & composants UI.", level: 4,
        children: [
          { label: 'Tailwind CSS', icon: 'TW', desc: "Framework CSS utility-first.", level: 1, expanded: false, projects: ['Portfolio Vue 3'] },
        ],
      },

    ]
  },
  {
    key: 'back', color: '#4fd67a', angle: -18, label: 'Back-end', icon: 'DB',
    desc: 'Architecture serveur robuste et gestion des données.', level: 4, expanded: false,
    children: [
      { label: 'C#', icon: 'C#', desc: 'Langage Poo principal pour la logique métier backend.', level: 4 },
      {
        label: 'ASP.NET', icon: 'AS', desc: 'Framework applicatif Web API & Microservices.', level: 4, expanded: false,
        children: [
          { label: 'Entity Framework', icon: 'EF', desc: 'ORM, migrations, requêtes LINQ optimisées.', level: 4 },
          { label: 'API REST', icon: '{}', desc: "Conception, documentation Swagger et sécurité JWT.", level: 5, projects: ['API Gestion Stock'] },
        ]
      },
      { label: 'SQL Server', icon: 'SQL', desc: 'Bases de données relationnelles, procédures stockées.', level: 3 },
    ]
  },
  {
    key: 'tools', color: '#ffb547', angle: 54, label: 'Outils', icon: '⚙',
    desc: 'Productivité, déploiement et contrôle de version.', level: 4, expanded: false,
    children: [
      { label: 'Git / GitHub', icon: 'Git', desc: 'Versioning, gestion de branches, Pull Requests.', level: 4 },
      { label: 'VS Code', icon: 'VS', desc: 'Environnement de développement principal.', level: 5 },
      {
        label: 'Docker', icon: '🐳', desc: 'Conteneurisation des applications et environnements.', level: 3, expanded: false,
        children: [
          { label: 'CI / CD', icon: '∞', desc: 'Automatisation des tests et déploiements.', level: 2, locked: true },
          { label: 'Déploiement OVH', icon: '☁', desc: 'Mise en ligne, VPS, configuration Nginx.', level: 3 },
        ]
      },
    ]
  },
  {
    key: 'design', color: '#b073ff', angle: 126, label: 'Design & UX', icon: '✎',
    desc: 'Création d’interfaces fonctionnelles et attrayantes.', level: 3, expanded: false,
    children: [
      {
        label: 'Figma', icon: 'Fg', desc: 'Maquettage UI, prototypage interactif & Design Systems.', level: 4, expanded: false,
        children: [
          { label: 'UI / UX', icon: '☺', desc: 'Conception centrée utilisateur et wireframing.', level: 4 },
          { label: 'Maquettes', icon: '▤', desc: 'Prototypage hi-fi pour validation client.', level: 4 },
        ]
      },
      { label: 'Photoshop', icon: 'Ps', desc: 'Retouche d’images et création d’assets graphiques.', level: 3 },
      { label: 'Illustrator', icon: 'Ai', desc: 'Création de logos et d’illustrations vectorielles.', level: 2, locked: true },
    ]
  },
  {
    key: 'soft', color: '#ff5d8f', angle: 198, label: 'Soft skills', icon: '♥',
    desc: 'Compétences humaines, organisation et méthode.', level: 5, expanded: false,
    children: [
      { label: 'Autonomie', icon: '!', desc: 'Gestion de projets en solo, prise d’initiative.', level: 5 },
      {
        label: 'Gestion de projet', icon: '👥', desc: 'Priorisation des tâches et méthodologies agiles.', level: 4, expanded: false,
        children: [
          { label: 'Adaptabilité', icon: '⇄', desc: "Apprentissage rapide et flexibilité face aux changements.", level: 5 },
          { label: 'Résolution de problèmes', icon: '💡', desc: 'Débogage & analyse.', level: 5 },
        ]
      },
      { label: 'Communication', icon: '💬', desc: 'Vulgarisation technique et travail en équipe.', level: 3, locked: true },
    ]
  },
])

/* ==========================================================
   4. CALCUL TRIGONOMÉTRIQUE (POLAIRE -> CARTÉSIEN)
   ==========================================================
   Transforme un angle (en degrés) et un rayon (distance) 
   en coordonnées [X, Y] par rapport au centre (cx, cy).
========================================================== */
function polar(angleDeg, r) {
  const rad = (angleDeg * Math.PI) / 180
  return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)]
}

/* ==========================================================
   5. DISTANCE RADIALE PAR NIVEAU (DEPTH)
   ==========================================================
   Définit l'éloignement en pixels depuis le centre 
   pour chaque profondeur dans l'arbre.
========================================================== */
function getNodeRadius(depth) {
  if (depth === 0) return 220 // Niveau 1 (Branches principales)
  if (depth === 1) return 325 // Niveau 2 (Sous-compétences)
  return 425                  // Niveau 3 (Feuilles finales)
}

/* ==========================================================
   6. ÉCARTEMENT D'ANGLE DES ENFANTS
   ==========================================================
   Définit l'angle total d'éventail utilisé pour répartir 
   les enfants autour de la direction de leur parent.
========================================================== */
function getSpreadAngle(depth) {
  return depth === 0 ? 36 : 24
}

/* ==========================================================
   7. PROPRIÉTÉ CALCULÉE : GÉNÉRATION DES NŒUDS AFFICHER
   ==========================================================
   Parcourt récursivement 'tree' pour générer une liste à plat
   de tous les nœuds visibles à l'écran avec leurs positions X/Y.
========================================================== */
const nodes = computed(() => {
  const list = []

  // Fonction récursive d'exploration des enfants
  function walk(node, x, y, color, angle, depth, pathKey) {
    const hasKids = !!(node.children && node.children.length)

    // Ajout du nœud courant à la liste à afficher
    list.push({
      keyId: pathKey,
      label: node.label, icon: node.icon, desc: node.desc, level: node.level || 3,
      locked: !!node.locked, hasKids, expanded: !!node.expanded,
      x, y, color, depth, ref: node,
      isNew: depth > 0 // Active l'animation d'apparition pour les enfants
    })

    // Si le nœud est ouvert, débloqué et possède des enfants, on calcule leur position
    if (hasKids && node.expanded && !node.locked) {
      const n = node.children.length
      const stepRadius = getNodeRadius(depth + 1)
      const totalSpread = getSpreadAngle(depth)

      node.children.forEach((child, i) => {
        // Calcul du décalage d'angle individuel pour chaque enfant
        const off = n === 1 ? 0 : (i - (n - 1) / 2) * (totalSpread / (n - 1))
        const childAngle = angle + off
        const [cx2, cy2] = polar(childAngle, stepRadius)

        // Appel récursif pour l'enfant
        walk(child, cx2, cy2, color, childAngle, depth + 1, `${pathKey}-${i}`)
      })
    }
  }

  // Initialisation du parcours depuis la racine pour chaque branche principale
  tree.forEach((branch, index) => {
    const [hx, hy] = polar(branch.angle, getNodeRadius(0))
    walk(branch, hx, hy, branch.color, branch.angle, 0, `root-${index}`)
  })

  return list
})

/* ==========================================================
   8. PROPRIÉTÉ CALCULÉE : GÉNÉRATION DES TRAITS / LIENS SVG
   ==========================================================
   Construit toutes les connexions entre le centre et les nœuds,
   ainsi qu'entre les nœuds parents et leurs enfants visibles.
========================================================== */
const edges = computed(() => {
  const list = []

  // Fonction récursive d'exploration des connexions
  function walk(node, x, y, color, angle, depth, pathKey) {
    if (node.children && node.expanded && !node.locked) {
      const n = node.children.length
      const stepRadius = getNodeRadius(depth + 1)
      const totalSpread = getSpreadAngle(depth)

      node.children.forEach((child, i) => {
        const off = n === 1 ? 0 : (i - (n - 1) / 2) * (totalSpread / (n - 1))
        const childAngle = angle + off
        const [cx2, cy2] = polar(childAngle, stepRadius)
        const edgeKey = `${pathKey}-${i}`

        // Ajout de la ligne parent -> enfant
        list.push({ id: edgeKey, x1: x, y1: y, x2: cx2, y2: cy2, color, locked: !!child.locked, isNew: depth > 0 })

        // Poursuite de la recherche des liens plus bas
        walk(child, cx2, cy2, color, childAngle, depth + 1, edgeKey)
      })
    }
  }

  // Création des liens racine (du centre 'cx, cy' vers les catégories principales)
  tree.forEach((branch, index) => {
    const [hx, hy] = polar(branch.angle, getNodeRadius(0))
    const edgeKey = `root-edge-${index}`
    list.push({ id: edgeKey, x1: cx, y1: cy, x2: hx, y2: hy, color: branch.color, locked: false, isNew: false })
    walk(branch, hx, hy, branch.color, branch.angle, 0, edgeKey)
  })

  return list
})

/* ==========================================================
   9. GESTION DE LA SIDEBAR DE DÉTAILS
   ========================================================== */
const activeNode = ref(null)

// Ouvre le panneau de détails
function selectNode(node) {
  if (node.locked) return
  activeNode.value = node
}

// Ferme le panneau de détails
function closeSidebar() {
  activeNode.value = null
}

/* ==========================================================
  10. COMMANDES D'EXPANSION GLOBALE
   ========================================================== */
// Fonction récursive pour modifier l'état 'expanded' de tous les sous-éléments
function setAllExpanded(items, state) {
  items.forEach(item => {
    if (!item.locked && item.children && item.children.length) {
      item.expanded = state
      setAllExpanded(item.children, state)
    }
  })
}

// Ouvre tout l'arbre
function expandAll() {
  setAllExpanded(tree, true)
}

// Replie tout l'arbre
function collapseAllTree() {
  setAllExpanded(tree, false)
}

// Ferme récursivement les enfants lors du repliement d'un parent
function collapseAll(children) {
  children.forEach((c) => {
    c.expanded = false
    if (c.children) collapseAll(c.children)
  })
}

/* ==========================================================
   11. INTERACTION CLIC SUR UN NŒUD
   ========================================================== */
function toggle(node) {
  const refNode = node.ref
  if (refNode.locked) return

  // Si le nœud a des enfants, on inverse son état (ouvert / fermé)
  if (refNode.children && refNode.children.length) {
    refNode.expanded = !refNode.expanded
    if (!refNode.expanded) collapseAll(refNode.children)
  }

  // Ouvre le volet latéral d'informations
  selectNode(node)
}

/* ==========================================================
   12. GESTION DES TOOLTIPS AU SURVOL
   ========================================================== */
const tip = reactive({ show: false, x: 0, y: 0, label: '', desc: '' })

function showTip(e, node) {
  tip.label = node.label
  tip.desc = node.locked ? 'À débloquer prochainement.' : node.desc || ''
  tip.x = e.clientX + 16
  tip.y = e.clientY + 12
  tip.show = true
}

function hideTip() {
  tip.show = false
}
</script>

<template>
  <div class="skill-tree-wrap">

    <!-- Boutons de commande rapide (Haut Droit) -->
    <div class="tree-controls">
      <button @click="expandAll" class="ctrl-btn">⚡ Tout déplier</button>
      <button @click="collapseAllTree" class="ctrl-btn">↺ Replier</button>
    </div>

    <!-- Rendu graphique SVG principal -->
    <svg viewBox="0 0 1300 820" class="skill-tree-svg">
      <defs>
        <!-- Dégradé de couleur pour le cercle tournant du centre -->
        <linearGradient id="coreGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#3ea6ff" />
          <stop offset="50%" stop-color="#b073ff" />
          <stop offset="100%" stop-color="#ff5d8f" />
        </linearGradient>
      </defs>

      <!-- Couche 1 : Rendu des branches / liaisons -->
      <g class="edges-layer">
        <path v-for="edge in edges" :key="edge.id" class="link" :class="{ 'branch-pop': edge.isNew }"
          :stroke="edge.color" :opacity="edge.locked ? 0.25 : 0.8"
          :d="`M${edge.x1},${edge.y1} L${edge.x2},${edge.y2}`" />
      </g>

      <!-- Couche 2 : Cœur central de l'arbre -->
      <g class="core-group">
        <circle class="core-bg" :cx="cx" :cy="cy" r="85" />
        <!-- Anneau animé en rotation -->
        <circle class="core-ring" :cx="cx" :cy="cy" r="98" stroke="url(#coreGrad)" stroke-dasharray="415 200"
          :transform="`rotate(-90 ${cx} ${cy})`" />

        <!-- Avatar / Sprite au centre -->
        <image href="@/assets/sprite/marche.PNG" :x="cx - 35" :y="cy - 65" width="70" height="70"
          class="core-avatar-img" />

        <!-- Textes du centre -->
        <text class="core-label" :x="cx" :y="cy + 22">COMPÉTENCES</text>
        <text class="core-count" :x="cx" :y="cy + 45">18 / 24</text>
      </g>

      <!-- Couche 3 : Rendu des nœuds (Formes, Icônes et Textes) -->
      <g class="nodes-layer">
        <g v-for="node in nodes" :key="node.keyId" class="node-group" :class="{
          locked: node.locked,
          leaf: !node.hasKids,
          pulsing: node.hasKids && !node.expanded && !node.locked,
          'branch-pop': node.isNew
        }" :style="{ '--node-color': node.color }" @click="toggle(node)" @mousemove="showTip($event, node)"
          @mouseleave="hideTip">

          <!-- Forme LOSANGE (Racines / Niveaux 0) -->
          <polygon v-if="node.depth === 0" class="node-shape-diamond" :points="getDiamondPoints(node.x, node.y, 24)"
            fill="#0b0f1a" :stroke="node.color" stroke-width="2" />

          <!-- Forme CERCLE (Enfants / Niveaux > 0) -->
          <circle v-else class="node-shape-circle" :cx="node.x" :cy="node.y" r="22" fill="#0b0f1a" :stroke="node.color"
            stroke-width="2" />

          <!-- Icône centrale -->
          <text class="icon" :x="node.x" :y="node.y">{{ node.locked ? '🔒' : node.icon }}</text>

          <!-- Libellé du nœud -->
          <text class="label" :x="node.x" :y="node.y + (node.depth === 0 ? 38 : 34)">{{ node.label }}</text>

          <!-- Flèche d'expansion (si le nœud a des enfants) -->
          <text v-if="node.hasKids && !node.locked" class="expand-hint" :x="node.x"
            :y="node.y + (node.depth === 0 ? 52 : 48)">{{ node.expanded ? '▲' : '▼' }}</text>
        </g>
      </g>
    </svg>

    <!-- Tooltip flottant au survol -->
    <div class="tooltip" :class="{ show: tip.show }" :style="{ left: tip.x + 'px', top: tip.y + 'px' }">
      <div class="t-label">{{ tip.label }}</div>
      <div class="t-desc">{{ tip.desc }}</div>
    </div>

    <!-- Volet latéral de détail au clic -->
    <transition name="slide-panel">
      <div v-if="activeNode" class="skill-sidebar">
        <button class="close-btn" @click="closeSidebar">✕</button>

        <div class="sidebar-header" :style="{ color: activeNode.color }">
          <span class="sidebar-icon">{{ activeNode.icon }}</span>
          <h3>{{ activeNode.label }}</h3>
        </div>

        <p class="sidebar-desc">{{ activeNode.desc }}</p>

        <!-- Notation en étoiles -->
        <div class="mastery-box">
          <span class="m-title">Niveau de maîtrise</span>
          <div class="stars">
            <span v-for="i in 5" :key="i" class="star" :class="{ filled: i <= activeNode.level }">★</span>
          </div>
        </div>

        <!-- Liste des projets liés -->
        <div v-if="activeNode.ref.projects" class="projects-box">
          <h4>Projets associés :</h4>
          <ul>
            <li v-for="(p, idx) in activeNode.ref.projects" :key="idx">🚀 {{ p }}</li>
          </ul>
        </div>
      </div>
    </transition>

  </div>
</template>

<style scoped>
/* ==========================================================
   STYLES ET VARIABLES DU COMPOSANT
   ========================================================== */
.skill-tree-wrap {
  --text: #e8ecf5;
  --muted: #7a86a3;
  --panel: #0b0f1a;
  position: relative;
  width: min(1300px, 100%);
  margin: 0 auto;
}

/* Boutons de contrôle haut-droit */
.tree-controls {
  position: absolute;
  top: 10px;
  right: 15px;
  z-index: 20;
  display: flex;
  gap: 8px;
}

.ctrl-btn {
  background: rgba(11, 15, 26, 0.85);
  border: 1px solid #2c3550;
  color: var(--text);
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  backdrop-filter: blur(4px);
  transition: all 0.2s ease;
}

.ctrl-btn:hover {
  background: #1c2436;
  border-color: #3ea6ff;
  color: #fff;
}

/* Conteneur SVG */
.skill-tree-svg {
  width: 100%;
  height: auto;
  overflow: visible;
  display: block;
}

/* Style des liens / branches */
.link {
  fill: none;
  stroke-width: 2.5;
  stroke-linecap: round;
}

/* Animation d'apparition des nouvelles branches */
.branch-pop {
  animation: popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

@keyframes popIn {
  0% {
    opacity: 0;
    transform: scale(0.85);
    transform-origin: center;
  }

  100% {
    opacity: 1;
    transform: scale(1);
    transform-origin: center;
  }
}

/* Interactivité des nœuds */
.node-group {
  cursor: pointer;
}

.node-group.locked {
  cursor: not-allowed;
  opacity: .4;
}

.node-group.leaf {
  cursor: pointer;
}

.node-shape-diamond,
.node-shape-circle {
  transition: stroke-width .2s ease, filter .2s ease;
}

/* Effet Glow au survol */
.node-group:hover .node-shape-diamond,
.node-group:hover .node-shape-circle {
  stroke-width: 3.5px;
  filter: drop-shadow(0 0 8px var(--node-color));
}

/* Animation de pulsation passive sur les nœuds dépliables */
.node-group.pulsing .node-shape-diamond,
.node-group.pulsing .node-shape-circle {
  animation: subtlePulse 2.5s ease-in-out infinite;
}

@keyframes subtlePulse {

  0%,
  100% {
    stroke-width: 2px;
    filter: drop-shadow(0 0 2px transparent);
  }

  50% {
    stroke-width: 3px;
    filter: drop-shadow(0 0 6px var(--node-color));
  }
}

/* Typographie SVG */
.icon {
  font-size: 14px;
  text-anchor: middle;
  dominant-baseline: central;
  fill: #fff;
  font-weight: 600;
  pointer-events: none;
}

.label {
  font-size: 12px;
  font-weight: 500;
  text-anchor: middle;
  fill: var(--text);
  pointer-events: none;
}

.expand-hint {
  font-size: 10px;
  text-anchor: middle;
  fill: var(--muted);
  pointer-events: none;
}

/* Style du cercle central */
.core-bg {
  fill: var(--panel);
  stroke: #1c2436;
  stroke-width: 2.5;
}

.core-ring {
  fill: none;
  stroke-width: 9;
  animation: spinRing 25s linear infinite;
  transform-origin: 650px 410px;
}

@keyframes spinRing {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.core-label {
  text-anchor: middle;
  fill: var(--muted);
  font-size: 11px;
  letter-spacing: 1.5px;
  font-weight: 600;
}

.core-count {
  text-anchor: middle;
  fill: #fff;
  font-size: 21px;
  font-weight: 700;
}

/* Style du Tooltip */
.tooltip {
  position: fixed;
  z-index: 60;
  pointer-events: none;
  background: #0b0f1aee;
  border: 1px solid #2c3550;
  border-radius: 8px;
  padding: 8px 12px;
  max-width: 220px;
  font-size: .8rem;
  color: var(--text);
  opacity: 0;
  transform: translateY(4px);
  transition: opacity .15s ease, transform .15s ease;
}

.tooltip.show {
  opacity: 1;
  transform: translateY(0);
}

.t-label {
  font-weight: 700;
  margin-bottom: 2px;
}

.t-desc {
  color: var(--muted);
}

/* Style du Panneau de Détails (Sidebar) */
.skill-sidebar {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 280px;
  background: rgba(11, 15, 26, 0.95);
  border: 1px solid #2c3550;
  border-radius: 12px;
  padding: 20px;
  color: var(--text);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  z-index: 50;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 12px;
  background: none;
  border: none;
  color: var(--muted);
  font-size: 1rem;
  cursor: pointer;
}

.close-btn:hover {
  color: #fff;
}

.sidebar-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.sidebar-icon {
  font-size: 1.4rem;
  font-weight: bold;
}

.sidebar-header h3 {
  margin: 0;
  font-size: 1.1rem;
}

.sidebar-desc {
  font-size: 0.85rem;
  color: var(--muted);
  line-height: 1.4;
  margin-bottom: 16px;
}

.mastery-box {
  margin-bottom: 16px;
  background: rgba(255, 255, 255, 0.03);
  padding: 8px 12px;
  border-radius: 8px;
}

.m-title {
  display: block;
  font-size: 0.75rem;
  color: var(--muted);
  margin-bottom: 4px;
}

.stars {
  display: flex;
  gap: 4px;
}

.star {
  color: #2c3550;
  font-size: 1.1rem;
}

.star.filled {
  color: #ffb547;
}

.projects-box h4 {
  font-size: 0.8rem;
  margin: 0 0 8px 0;
  color: var(--text);
}

.projects-box ul {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.8rem;
  color: var(--muted);
}

.projects-box li {
  margin-bottom: 4px;
}

/* Transitions Vue pour la Sidebar */
.slide-panel-enter-active,
.slide-panel-leave-active {
  transition: all 0.3s ease;
}

.slide-panel-enter-from,
.slide-panel-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>