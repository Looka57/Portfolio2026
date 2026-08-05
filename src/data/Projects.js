import ecran1 from '@/assets/img/ecran1.png'
import ecran2 from '@/assets/img/ecran2.png'
import ecran3 from '@/assets/img/ecran3.png'

import ademImg from '@/assets/img/rapportAdem.png'
import adminImg from '@/assets/img/admin2.png'
import aspImg from '@/assets/img/aspJudo.png'

import htmlIcon from '@/assets/icons/html.png'
import cssIcon from '@/assets/icons/css.png'
import phpIcon from '@/assets/icons/php.png'
import mysqlIcon from '@/assets/icons/mysql.png'
import csharpIcon from '@/assets/icons/cSharp.png'
import dotnetIcon from '@/assets/icons/dotnet.PNG'
import vueIcon from '@/assets/icons/vue.png'

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
    ],
  },
]
