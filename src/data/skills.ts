import {
  PenTool,
  Palette,
  Figma,
  Clapperboard,
  Terminal,
  Brain,
} from 'lucide-react'
import { type ComponentType } from 'react'

const SKILLS: { field: string; skills: { skill: string; icon: ComponentType<any> }[] }[] =
  [
    {
      field: 'طراحی گرافیک و ابزارها',
      skills: [
        { skill: 'Adobe Illustrator (۸۰٪)', icon: PenTool },
        { skill: 'Adobe Photoshop (۶۰٪)', icon: Palette },
        { skill: 'Figma (UI/UX) (۶۰٪)', icon: Figma },
        { skill: 'Adobe Premiere Pro (۶۰٪)', icon: Clapperboard },
      ],
    },
    {
      field: 'توسعه و هوش مصنوعی',
      skills: [
        { skill: 'Vibe Coding (۸۰٪)', icon: Terminal },
        { skill: 'ابزارهای هوش مصنوعی (Gemini, DeepSeek, ChatGPT...) (۸۰٪)', icon: Brain },
      ],
    },
  ]

export default SKILLS
