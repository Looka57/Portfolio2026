import ecran1 from '@/assets/img/ecran1.webp'
import ecran2 from '@/assets/img/ecran2.webp'
import ecran3 from '@/assets/img/ecran3.webp'

import ademImg from '@/assets/img/rapportAdem.webp'
import adminImg from '@/assets/img/admin2.webp'
import aspImg from '@/assets/img/aspJudo.webp'

// Icônes SVG Devicon hébergées sur CDN (ultra-légères & vectorielles)
const htmlIcon = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'
const cssIcon = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg'
const phpIcon = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg'
const mysqlIcon = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg'
const csharpIcon = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg'
const dotnetIcon = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg'
const vueIcon = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg'
const sqlServerIcon = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg' 

          

export const projects = [
  {
    id: 'rapport-adem-2023',
    title: "Rapport d'activité 2023",
    description: 'Projet de stage réalisé pour le Ministère du travail du Luxembourg (ADEM).',
    screenFrame: ecran1,
    previewImg: ademImg,
    externalUrl: 'https://adem2023.lu/',
    externalLabel: 'Lien direct site',
    stack: [
      { name: 'HTML5', icon: htmlIcon },
      { name: 'CSS3', icon: cssIcon },
      { name: 'PHP', icon: phpIcon },
      { name: 'MySQL', icon: mysqlIcon },
    ],
  },

  {
    id: 'admin-mns',
    title: 'Admin MNS',
    description: 'Projet fil rouge développé durant la formation CDA à Metz Numeric School.',
    screenFrame: ecran2,
    previewImg: adminImg,
    externalUrl: 'https://github.com/Looka57/AdminMnsV1',
    externalLabel: 'Dépôt GitHub',
    stack: [
      { name: 'HTML5', icon: htmlIcon },
      { name: 'CSS3', icon: cssIcon },
      { name: 'C#', icon: csharpIcon },
      { name: '.NET', icon: dotnetIcon },
    ],
  },

  {
    id: 'asp-arts-martiaux',
    title: 'ASP Arts Martiaux',
    description: 'Création et gestion du site web officiel du club de Porcelette.',
    screenFrame: ecran3,
    previewImg: aspImg,
    externalUrl: 'https://asporcelette-art-martiaux.fr/',
    externalLabel: 'Lien direct site',
    stack: [
      { name: 'HTML5', icon: htmlIcon },
      { name: 'CSS3', icon: cssIcon },
      { name: 'Vue.js', icon: vueIcon },
      { name: 'C#', icon: csharpIcon },
      { name: '.NET', icon: dotnetIcon },
      { name: 'SQLServer', icon: sqlServerIcon },
    ],
  },
]
