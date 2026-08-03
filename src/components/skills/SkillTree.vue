<script setup>
import { reactive, computed, ref, onMounted, onUnmounted } from 'vue'

/* ==========================================================
   1. CONFIGURATION DU CENTRE DE L'ARBRE
   ========================================================== */
const cx = 650, cy = 410

/* ==========================================================
   2. MÉTHODE DE GÉNÉRATION DES LOSANGES (Niveau 0)
   ========================================================== */
function getDiamondPoints(x, y, size) {
  return `${x},${y - size} ${x + size},${y} ${x},${y + size} ${x - size},${y}`
}

/* ==========================================================
   3. DONNÉES STRUCTURÉES DE L'ARBRE DE COMPÉTENCES
   ========================================================== */
const tree = reactive([
  {
    key: 'front', color: '#3ea6ff', angle: -90, label: 'Front-end', icon: '</>',
    desc: 'Interfaces web modernes, réactives et accessibles.', level: 4, expanded: false,
    projects: ['Tous'],
    children: [
      {
        label: 'JavaScript', icon: 'JS', desc: 'Logique ES6+, Async/Await, manipulation du DOM.', level: 3, expanded: false,
        children: [
          { label: 'TypeScript', icon: 'TS', desc: 'Sur ensemble typé de JS, autocomplétion et refactoring sécurisé.', locked: true },
          { label: 'Vue.js', icon: 'V', desc: 'Framework principal, Composition API, Pinia, Vue Router.', level: 3, projects: ['Portfolio2026', 'ASPPorcelette'] },
          { label: 'Nuxt.js', icon: 'N', desc: 'SSR / SSG pour Vue, optimisation SEO.', level: 2, locked: true },
        ]
      },
      { label: 'HTML / CSS', icon: 'CSS', desc: 'Structure sémantique, Flexbox, Grid, Animations CSS.', level: 5, projects: ['Tous'] },
      {
        label: 'Bootstrap', icon: 'B', desc: "Grille responsive & composants UI.", level: 4, projects: ['Adem', 'AdminMns', 'ASPPorcelette', 'Portfolio'],
        children: [
          { label: 'Tailwind CSS', icon: 'TW', desc: "Framework CSS utility-first.", level: 1, expanded: false, projects: ['Portfolio2026'] },
          { label: 'React', icon: 'R', desc: "Framework JavaScript pour l'interface utilisateur.", locked: true, },
        ],
      },
    ]
  },
  {
    key: 'back', color: '#4fd67a', angle: -18, label: 'Back-end', icon: 'DB',
    desc: 'Conception architecture serveur robuste, gestion sécurisée des données et intégration fluide avec le front-end.', level: 4, expanded: false,
    children: [
      {
        label: 'ASP.NET', icon: 'AS', desc: 'Framework applicatif Web API & Microservices.', level: 4, expanded: false,
        children: [
          { label: 'Entity Framework', icon: 'EF', desc: 'ORM, migrations, requêtes LINQ optimisées.', level: 4, projects: ['AdminMns', 'ASPPorcelette'] },
          {
            label: 'API REST', icon: '{}', desc: 'Conception d’interfaces applicatives et sécurité JWT.', level: 5, expanded: false, projects: ['AdminMns', 'ASPPorcelette'],
            children: [
              { label: 'Swagger / API', icon: '📄', desc: 'Documentation interactive et test des endpoints d\'API.', level: 3, projects: ['AdminMns', 'ASPPorcelette'] }
            ]
          }
        ]
      },
      { label: 'C#', icon: 'C#', desc: 'Langage POO principal pour la logique métier backend.', level: 4, projects: ['AdminMns', 'ASPPorcelette', 'Portfolio2026'] },
      {
        label: 'Base de données', icon: 'BDD', desc: 'Bases de données relationnelles.', level: 3,
        children: [
          { label: 'SQL Server', icon: 'SQL', desc: 'Bases relationnelles, procédures stockées, ORM (Entity Framework) et requêtes LINQ.', level: 3, projects: ['AdminMns', 'ASPPorcelette'] },
          { label: 'MySQL', icon: 'MSQL', desc: 'Modélisation relationnelle, migrations et optimisation de requêtes SQL.', level: 4, projects: ['Adem', 'Portfolio'] },
        ]
      },
    ]
  },
  {
    key: 'tools', color: '#ffb547', angle: 54, label: 'Outils', icon: '⚙',
    desc: 'Productivité, déploiement et contrôle de version.', level: 3, expanded: false,
    children: [
      {
        label: 'IDE / Éditeurs', icon: 'IDE', desc: 'Environnements de développement et éditeurs de code.', level: 4,
        children: [
          { label: 'VS Code', icon: 'VSC', desc: 'Éditeur principal pour le développement Frontend (Vue.js, Web).', level: 4 },
          { label: 'Visual Studio', icon: 'VS', desc: 'IDE principal pour le développement Backend (C#, .NET).', level: 4 },
        ]
      },
      { label: 'GitHub', icon: 'Git', desc: 'Versioning, gestion de branches, Pull Requests.', level: 3 },
      {
        label: 'Docker', icon: '🐳', desc: 'Conteneurisation des applications et environnements.', level: 2, expanded: false,
        children: [
          { label: 'CI / CD', icon: '∞', desc: 'Automatisation des tests et déploiements.', level: 2 },
          { label: 'Déploiement OVH', icon: '☁', desc: 'Mise en ligne, VPS, configuration Nginx.', level: 2 },
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
      { label: 'Illustrator', icon: 'Ai', desc: 'Création de logos et d’illustrations vectorielles.', level: 0, locked: true },
    ]
  },
  {
    key: 'soft', color: '#ff5d8f', angle: 198, label: 'Soft Skills', icon: '🧠',
    desc: 'Compétences humaines, organisation et méthode de travail.', level: 4, expanded: false,
    children: [
      { label: 'Autonomie & Initiative', icon: '🎯', desc: 'Gestion de projets en autonomie, force de proposition et auto-formation.', level: 4 },
      { label: 'Communication & Écoute', icon: '💬', desc: 'Vulgarisation technique, esprit d’équipe et restitution claire.', level: 4, locked: false },
      { label: 'Résolution de Problèmes', icon: '🧩', desc: 'Analyse critique, adaptabilité face aux imprévus et esprit logique.', level: 4 },
      {
        label: 'Gestion de Projet', icon: '📋', desc: 'Planification, méthodes agiles et organisation du travail.', level: 3,
        children: [
          { label: 'Méthodes Agiles', icon: '🔄', desc: 'Pratique de Scrum et Kanban, découpage en user stories.', level: 3 },
          { label: 'Outils de Suivi', icon: '📌', desc: 'Jira, Trello et Notion pour le suivi de sprints et la documentation.', level: 4 }
        ]
      },
    ]
  }
])

/* ==========================================================
   4. CALCUL TRIGONOMÉTRIQUE (POLAIRE -> CARTÉSIEN)
   ========================================================== */
function polar(angleDeg, r) {
  const rad = (angleDeg * Math.PI) / 180
  return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)]
}

/* ==========================================================
   5. DISTANCE RADIALE PAR NIVEAU (DEPTH)
   ========================================================== */
function getNodeRadius(depth) {
  if (depth === 0) return 220
  if (depth === 1) return 325
  if (depth === 2) return 410
  return 485
}

/* ==========================================================
   6. ÉCARTEMENT D'ANGLE DES ENFANTS
   ========================================================== */
function getSpreadAngle(depth) {
  if (depth === 0) return 36
  if (depth === 1) return 24
  return 18
}

/* ==========================================================
   7. PROPRIÉTÉ CALCULÉE : NŒUDS
   ========================================================== */
const nodes = computed(() => {
  const list = []

  function walk(node, x, y, color, angle, depth, pathKey) {
    const hasKids = !!(node.children && node.children.length)

    list.push({
      keyId: pathKey,
      label: node.label, icon: node.icon, desc: node.desc, level: node.level || 3,
      locked: !!node.locked, hasKids, expanded: !!node.expanded,
      x, y, color, depth, ref: node,
      isNew: depth > 0
    })

    if (hasKids && node.expanded && !node.locked) {
      const n = node.children.length
      const stepRadius = getNodeRadius(depth + 1)
      const totalSpread = getSpreadAngle(depth)

      node.children.forEach((child, i) => {
        const off = n === 1 ? 0 : (i - (n - 1) / 2) * (totalSpread / (n - 1))
        const childAngle = angle + off
        const [cx2, cy2] = polar(childAngle, stepRadius)

        walk(child, cx2, cy2, color, childAngle, depth + 1, `${pathKey}-${i}`)
      })
    }
  }

  tree.forEach((branch, index) => {
    const [hx, hy] = polar(branch.angle, getNodeRadius(0))
    walk(branch, hx, hy, branch.color, branch.angle, 0, `root-${index}`)
  })

  return list
})

/* ==========================================================
   8. PROPRIÉTÉ CALCULÉE : LIENS SVG
   ========================================================== */
const edges = computed(() => {
  const list = []

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

        list.push({ id: edgeKey, x1: x, y1: y, x2: cx2, y2: cy2, color, locked: !!child.locked, isNew: depth > 0 })
        walk(child, cx2, cy2, color, childAngle, depth + 1, edgeKey)
      })
    }
  }

  tree.forEach((branch, index) => {
    const [hx, hy] = polar(branch.angle, getNodeRadius(0))
    const edgeKey = `root-edge-${index}`
    list.push({ id: edgeKey, x1: cx, y1: cy, x2: hx, y2: hy, color: branch.color, locked: false, isNew: false })
    walk(branch, hx, hy, branch.color, branch.angle, 0, edgeKey)
  })

  return list
})

/* ==========================================================
   9. SIDEBAR & INTERACTION (DESKTOP)
   ========================================================== */
const activeNode = ref(null)

function selectNode(node) {
  if (node.locked) return
  activeNode.value = node
}

function closeSidebar() {
  activeNode.value = null
}

function setAllExpanded(items, state) {
  items.forEach(item => {
    if (!item.locked && item.children && item.children.length) {
      item.expanded = state
      setAllExpanded(item.children, state)
    }
  })
}

function expandAll() { setAllExpanded(tree, true) }
function collapseAllTree() {
  setAllExpanded(tree, false)
  activeNode.value = null
}

function collapseAll(children) {
  children.forEach((c) => {
    c.expanded = false
    if (c.children) collapseAll(c.children)
  })
}

function toggle(node) {
  const refNode = node.ref
  if (refNode.locked) return

  if (activeNode.value && activeNode.value.keyId === node.keyId) {
    activeNode.value = null
  } else {
    selectNode(node)
  }

  if (refNode.children && refNode.children.length) {
    refNode.expanded = !refNode.expanded
    if (!refNode.expanded) {
      collapseAll(refNode.children)

      if (activeNode.value && activeNode.value.keyId.startsWith(node.keyId)) {
        activeNode.value = null
      }
    }
  }
}

/* ==========================================================
   9-BIS. TOGGLE ACCORDÉON (MOBILE)
   Simple : pas de coordonnées à calculer, pas de sidebar,
   juste on ouvre/ferme la liste d'enfants du nœud cliqué.
   ========================================================== */
function toggleMobile(node) {
  if (node.locked) return
  if (node.children && node.children.length) {
    node.expanded = !node.expanded
  }
}

/* ==========================================================
   10. TOOLTIP (DESKTOP)
   ========================================================== */
const tip = reactive({ show: false, x: 0, y: 0, label: '', desc: '' })

function showTip(e, node) {
  tip.label = node.label
  tip.desc = node.locked ? 'À débloquer prochainement.' : node.desc || ''
  tip.x = e.clientX + 16
  tip.y = e.clientY + 12
  tip.show = true
}

function hideTip() { tip.show = false }

/* ==========================================================
   11. FERMETURE SI CLIC À L'EXTÉRIEUR (GLOBAL CLICK)
   ========================================================== */
function handleGlobalClick(e) {
  if (!activeNode.value) return

  const isInsideSvg = e.target.closest('.skill-tree-svg')
  const isInsideSidebar = e.target.closest('.skill-sidebar')
  const isInsideControls = e.target.closest('.tree-controls')

  if (!isInsideSvg && !isInsideSidebar && !isInsideControls) {
    activeNode.value = null
  }
}

/* ==========================================================
   12. DÉTECTION MOBILE (RESPONSIVE)
   En dessous de 768px, on bascule sur la vue accordéon
   au lieu de forcer le SVG radial dans un petit écran.
   ========================================================== */
const isMobile = ref(false)
function checkMobile() { isMobile.value = window.innerWidth < 768 }

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
  window.addEventListener('click', handleGlobalClick)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
  window.removeEventListener('click', handleGlobalClick)
})
</script>

<template>
  <div class="skill-tree-wrap">

    <!-- Boutons de commande rapide (desktop uniquement, inutiles sur l'accordéon mobile) -->
    <div v-if="!isMobile" class="tree-controls">
      <button @click="expandAll" class="ctrl-btn">⚡ Tout déplier</button>
      <button @click="collapseAllTree" class="ctrl-btn">↺ Replier</button>
    </div>

    <!-- ============ VUE DESKTOP : ARBRE RADIAL SVG (inchangé) ============ -->
    <template v-if="!isMobile">
      <svg viewBox="0 0 1300 820" class="skill-tree-svg">
        <defs>
          <linearGradient id="coreGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#3ea6ff" />
            <stop offset="50%" stop-color="#b073ff" />
            <stop offset="100%" stop-color="#ff5d8f" />
          </linearGradient>
        </defs>

        <g class="pcb-circuit-layer">
          <g stroke="#3ea6ff" opacity="0.35" fill="none" stroke-width="1.5">
            <path d="M 40,40 L 180,40 L 260,120 L 380,120" />
            <path d="M 40,60 L 160,60 L 230,130 L 320,130" />
            <circle cx="380" cy="120" r="4" fill="#3ea6ff" />
            <circle cx="320" cy="130" r="3.5" fill="#3ea6ff" />
            <rect x="35" y="35" width="10" height="10" fill="#3ea6ff" />
          </g>

          <g stroke="#4fd67a" opacity="0.35" fill="none" stroke-width="1.5">
            <path d="M 1260,40 L 1120,40 L 1040,120 L 920,120" />
            <path d="M 1260,65 L 1140,65 L 1070,135 L 980,135" />
            <circle cx="920" cy="120" r="4" fill="#4fd67a" />
            <circle cx="980" cy="135" r="3.5" fill="#4fd67a" />
            <rect x="1255" y="35" width="10" height="10" fill="#4fd67a" />
          </g>

          <g stroke="#ffb547" opacity="0.35" fill="none" stroke-width="1.5">
            <path d="M 1260,780 L 1100,780 L 1020,700 L 900,700" />
            <path d="M 1260,755 L 1120,755 L 1050,685 L 960,685" />
            <circle cx="900" cy="700" r="4" fill="#ffb547" />
            <circle cx="960" cy="685" r="3.5" fill="#ffb547" />
            <rect x="1255" y="775" width="10" height="10" fill="#ffb547" />
          </g>

          <g stroke="#ff5d8f" opacity="0.35" fill="none" stroke-width="1.5">
            <path d="M 40,780 L 200,780 L 280,700 L 400,700" />
            <path d="M 40,755 L 180,755 L 250,685 L 340,685" />
            <circle cx="400" cy="700" r="4" fill="#ff5d8f" />
            <circle cx="340" cy="685" r="3.5" fill="#ff5d8f" />
            <rect x="35" y="775" width="10" height="10" fill="#ff5d8f" />
          </g>

          <g stroke="#b073ff" opacity="0.3" fill="none" stroke-width="1.5">
            <path d="M 500,410 L 550,410 M 750,410 L 800,410" />
            <circle cx="500" cy="410" r="3" fill="#b073ff" />
            <circle cx="800" cy="410" r="3" fill="#b073ff" />
          </g>

          <circle cx="260" cy="120" r="3.5" fill="#3ea6ff" class="pcb-signal signal-1" />
          <circle cx="180" cy="40" r="3.5" fill="#3ea6ff" class="pcb-signal signal-2" />
          <circle cx="1040" cy="120" r="3.5" fill="#4fd67a" class="pcb-signal signal-3" />
          <circle cx="1120" cy="40" r="3.5" fill="#4fd67a" class="pcb-signal signal-4" />
          <circle cx="1020" cy="700" r="3.5" fill="#ffb547" class="pcb-signal signal-5" />
          <circle cx="1100" cy="780" r="3.5" fill="#ffb547" class="pcb-signal signal-6" />
          <circle cx="280" cy="700" r="3.5" fill="#ff5d8f" class="pcb-signal signal-7" />
          <circle cx="200" cy="780" r="3.5" fill="#ff5d8f" class="pcb-signal signal-8" />
        </g>

        <g class="edges-layer">
          <path v-for="edge in edges" :key="edge.id" class="link" :class="{ 'branch-pop': edge.isNew }"
            :stroke="edge.color" :opacity="edge.locked ? 0.25 : 0.8"
            :d="`M${edge.x1},${edge.y1} L${edge.x2},${edge.y2}`" />
        </g>

        <g class="core-group">
          <circle class="core-bg" :cx="cx" :cy="cy" r="85" />
          <circle class="core-ring" :cx="cx" :cy="cy" r="98" stroke="url(#coreGrad)" stroke-dasharray="415 200"
            :transform="`rotate(-90 ${cx} ${cy})`" />

          <image href="@/assets/sprite/marche.PNG" :x="cx - 35" :y="cy - 65" width="70" height="70"
            class="core-avatar-img" />

          <text class="core-label" :x="cx" :y="cy + 22">COMPÉTENCES</text>
          <text class="core-count" :x="cx" :y="cy + 45">18 / 24</text>
        </g>

        <g class="nodes-layer">
          <g v-for="node in nodes" :key="node.keyId" class="node-group" :class="{
            locked: node.locked,
            leaf: !node.hasKids,
            pulsing: node.hasKids && !node.expanded && !node.locked,
            'branch-pop': node.isNew
          }" :style="{ '--node-color': node.color }" @click.stop="toggle(node)" @mousemove="showTip($event, node)"
            @mouseleave="hideTip">

            <polygon v-if="node.depth === 0" class="node-shape-diamond" :points="getDiamondPoints(node.x, node.y, 24)"
              fill="#0b0f1a" :stroke="node.color" stroke-width="2" />

            <circle v-else class="node-shape-circle" :cx="node.x" :cy="node.y" r="22" fill="#0b0f1a"
              :stroke="node.color" stroke-width="2" />

            <text class="icon" :x="node.x" :y="node.y">{{ node.locked ? '🔒' : node.icon }}</text>
            <text class="label" :x="node.x" :y="node.y + (node.depth === 0 ? 38 : 34)">{{ node.label }}</text>
            <text v-if="node.hasKids && !node.locked" class="expand-hint" :x="node.x"
              :y="node.y + (node.depth === 0 ? 52 : 48)">{{ node.expanded ? '▲' : '▼' }}</text>
          </g>
        </g>
      </svg>

      <div class="tooltip" :class="{ show: tip.show }" :style="{ left: tip.x + 'px', top: tip.y + 'px' }">
        <div class="t-label">{{ tip.label }}</div>
        <div class="t-desc">{{ tip.desc }}</div>
      </div>

      <transition name="slide-panel">
        <div v-if="activeNode" class="skill-sidebar">
          <button class="close-btn" @click="closeSidebar">✕</button>

          <div class="sidebar-header" :style="{ color: activeNode.color }">
            <span class="sidebar-icon">{{ activeNode.icon }}</span>
            <h3>{{ activeNode.label }}</h3>
          </div>

          <p class="sidebar-desc">{{ activeNode.desc }}</p>

          <div class="mastery-box">
            <span class="m-title">Niveau de maîtrise</span>
            <div class="stars">
              <span v-for="i in 5" :key="i" class="star" :class="{ filled: i <= activeNode.level }">★</span>
            </div>
          </div>

          <div v-if="activeNode.ref.projects" class="projects-box">
            <h4>Projets associés :</h4>
            <ul>
              <li v-for="(p, idx) in activeNode.ref.projects" :key="idx">🚀 {{ p }}</li>
            </ul>
          </div>
        </div>
      </transition>
    </template>

    <!-- ============ VUE MOBILE : ACCORDÉON (< 768px) ============ -->
    <div v-else class="skill-accordion">
      <div v-for="branch in tree" :key="branch.key" class="branch-card" :style="{ '--branch-color': branch.color }">

        <button class="branch-header" @click="toggleMobile(branch)">
          <span class="branch-icon">{{ branch.icon }}</span>
          <span class="branch-text">
            <span class="branch-label">{{ branch.label }}</span>
            <span class="branch-desc">{{ branch.desc }}</span>
          </span>
          <span class="chevron" :class="{ open: branch.expanded }">▾</span>
        </button>

        <ul v-if="branch.expanded" class="node-list lvl-1">
          <li v-for="(child, i) in branch.children" :key="i" class="skill-node" :class="{ locked: child.locked }">

            <button class="node-row" :disabled="child.locked" @click="toggleMobile(child)"
              :style="{ '--node-color': branch.color }">
              <span class="node-icon">{{ child.locked ? '🔒' : child.icon }}</span>
              <span class="node-main">
                <span class="node-label">{{ child.label }}</span>
                <span v-if="child.level && !child.locked" class="node-stars">
                  <span v-for="s in 5" :key="s" class="star" :class="{ filled: s <= child.level }">★</span>
                </span>
              </span>
              <span v-if="child.children && child.children.length && !child.locked" class="chevron"
                :class="{ open: child.expanded }">▾</span>
            </button>

            <p v-if="child.desc && !child.locked" class="node-desc">{{ child.desc }}</p>
            <ul v-if="child.projects && !child.locked" class="node-projects">
              <li v-for="(p, idx) in child.projects" :key="idx">🚀 {{ p }}</li>
            </ul>

            <ul v-if="child.children && child.expanded && !child.locked" class="node-list lvl-2">
              <li v-for="(grandchild, j) in child.children" :key="j" class="skill-node"
                :class="{ locked: grandchild.locked }">

                <button class="node-row" :disabled="grandchild.locked" @click="toggleMobile(grandchild)"
                  :style="{ '--node-color': branch.color }">
                  <span class="node-icon">{{ grandchild.locked ? '🔒' : grandchild.icon }}</span>
                  <span class="node-main">
                    <span class="node-label">{{ grandchild.label }}</span>
                    <span v-if="grandchild.level && !grandchild.locked" class="node-stars">
                      <span v-for="s in 5" :key="s" class="star" :class="{ filled: s <= grandchild.level }">★</span>
                    </span>
                  </span>
                  <span v-if="grandchild.children && grandchild.children.length && !grandchild.locked" class="chevron"
                    :class="{ open: grandchild.expanded }">▾</span>
                </button>

                <p v-if="grandchild.desc && !grandchild.locked" class="node-desc">{{ grandchild.desc }}</p>
                <ul v-if="grandchild.projects && !grandchild.locked" class="node-projects">
                  <li v-for="(p, idx) in grandchild.projects" :key="idx">🚀 {{ p }}</li>
                </ul>

                <ul v-if="grandchild.children && grandchild.expanded && !grandchild.locked" class="node-list lvl-3">
                  <li v-for="(leaf, k) in grandchild.children" :key="k" class="skill-node">
                    <button class="node-row" @click="toggleMobile(leaf)" :style="{ '--node-color': branch.color }">
                      <span class="node-icon">{{ leaf.icon }}</span>
                      <span class="node-main">
                        <span class="node-label">{{ leaf.label }}</span>
                        <span v-if="leaf.level" class="node-stars">
                          <span v-for="s in 5" :key="s" class="star" :class="{ filled: s <= leaf.level }">★</span>
                        </span>
                      </span>
                    </button>
                    <p v-if="leaf.desc" class="node-desc">{{ leaf.desc }}</p>
                    <ul v-if="leaf.projects" class="node-projects">
                      <li v-for="(p, idx) in leaf.projects" :key="idx">🚀 {{ p }}</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<style scoped>
.skill-tree-wrap {
  --text: #e8ecf5;
  --muted: #7a86a3;
  --panel: #0b0f1a;
  position: relative;
  width: min(1300px, 100%);
  margin: 0 auto;
}

/* ==========================================================
   ANIMATIONS DES CIRCUITS PCB
   ========================================================== */
.pcb-signal {
  transform-origin: center;
  transform-box: fill-box;
  animation: pcbPulse 3s infinite ease-in-out;
}

.signal-1 {
  animation-delay: 0s;
}

.signal-2 {
  animation-delay: 0.8s;
}

.signal-3 {
  animation-delay: 0.3s;
}

.signal-4 {
  animation-delay: 1.1s;
}

.signal-5 {
  animation-delay: 0.6s;
}

.signal-6 {
  animation-delay: 1.4s;
}

.signal-7 {
  animation-delay: 0.9s;
}

.signal-8 {
  animation-delay: 1.7s;
}

@keyframes pcbPulse {
  0% {
    opacity: 0.2;
    transform: scale(0.7);
    filter: drop-shadow(0 0 0px transparent);
  }

  50% {
    opacity: 1;
    transform: scale(1.3);
    filter: drop-shadow(0 0 6px currentColor);
  }

  100% {
    opacity: 0.2;
    transform: scale(0.7);
    filter: drop-shadow(0 0 0px transparent);
  }
}

/* Controls */
.tree-controls {
  position: absolute;
  top: -15px;
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

/* SVG Base */
.skill-tree-svg {
  width: 100%;
  height: auto;
  overflow: visible;
  display: block;
}

.link {
  fill: none;
  stroke-width: 2.5;
  stroke-linecap: round;
}

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

/* Nodes */
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

.node-group:hover .node-shape-diamond,
.node-group:hover .node-shape-circle {
  stroke-width: 3.5px;
  filter: drop-shadow(0 0 8px var(--node-color));
}

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

/* Core Ring */
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

/* Tooltip & Sidebar (desktop) */
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

.skill-sidebar {
  position: absolute;
  top: 35%;
  left: -50px;
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

.slide-panel-enter-active,
.slide-panel-leave-active {
  transition: all 0.3s ease;
}

.slide-panel-enter-from,
.slide-panel-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

/* ==========================================================
   VUE MOBILE : ACCORDÉON
   ========================================================== */
.skill-accordion {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 4px;
}

.branch-card {
  background: var(--panel);
  border: 1px solid #2c3550;
  border-radius: 14px;
  overflow: hidden;
}

.branch-header {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  background: none;
  border: none;
  padding: 14px;
  cursor: pointer;
  text-align: left;
}

.branch-icon {
  flex: none;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 2px solid var(--branch-color);
  color: #fff;
  font-weight: 700;
  font-size: .85rem;
  box-shadow: 0 0 10px color-mix(in srgb, var(--branch-color) 45%, transparent);
}

.branch-text {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.branch-label {
  font-size: 1rem;
  font-weight: 700;
  color: var(--branch-color);
}

.branch-desc {
  font-size: .78rem;
  color: var(--muted);
  line-height: 1.35;
}

.chevron {
  flex: none;
  color: var(--muted);
  font-size: 1.1rem;
  transition: transform .2s ease;
}

.chevron.open {
  transform: rotate(180deg);
}

.node-list {
  margin: 0;
  padding: 0 14px 14px 14px;
  border-top: 1px solid #1c2436;
  list-style: none;
}

.node-list.lvl-2,
.node-list.lvl-3 {
  padding: 0 0 8px 14px;
  border-top: none;
  border-left: 2px solid #2c3550;
  margin-left: 15px;
}

.skill-node.locked {
  opacity: .4;
}

.node-row {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  background: none;
  border: none;
  padding: 10px 4px;
  text-align: left;
  cursor: pointer;
}

.node-row:disabled {
  cursor: not-allowed;
}

.node-icon {
  flex: none;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1.5px solid var(--node-color);
  background: var(--panel);
  font-size: .7rem;
  font-weight: 700;
  color: #fff;
}

.node-main {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.node-label {
  font-size: .88rem;
  font-weight: 600;
  color: var(--text);
}

.node-stars {
  display: flex;
  gap: 2px;
}

.node-stars .star {
  color: #2c3550;
  font-size: .7rem;
}

.node-stars .star.filled {
  color: #ffb547;
}

.node-desc {
  margin: 0 0 8px 40px;
  font-size: .78rem;
  color: var(--muted);
  line-height: 1.4;
}

.node-projects {
  margin: 0 0 8px 40px;
  padding: 0;
  list-style: none;
  font-size: .76rem;
  color: var(--muted);
}
</style>