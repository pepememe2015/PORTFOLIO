export interface ProjectAsset {
  type: 'image' | 'video'
  url: string
}

import verdeSorted from './verde_sorted.json'

export interface Project {
  name: string
  description: string
  localPath: string
  badge?: string
  isIframe?: boolean
  iframeUrl?: string
  assets?: ProjectAsset[]
}

const PROJECTS: Project[] = [
  {
    name: 'پروژه Vibinoo (پلتفرم لایو موزیک)',
    description: 'توسعه صفر تا صد پلتفرم پخش آنلاین موسیقی با وایب کدینگ و استفاده از ابزارهای هوش مصنوعی به عنوان دستیار برنامه‌نویسی. طراحی رابط کاربری در Figma و طراحی المان‌های گرافیکی در Adobe Illustrator. (رابط کاربری واقعی پروژه در کادر زیر قابل تعامل است)',
    localPath: 'G:\\project\\music_project_final',
    badge: 'طراحی رابط کاربری و توسعه وب',
    isIframe: true,
    iframeUrl: '/frontend/vibinoo.html',
  },
  {
    name: 'طراحی پوسترهای تبلیغاتی و کمپین‌ها',
    description: 'مجموعه‌ای از پوسترهای تبلیغاتی، بنرها، رول‌آپ‌ها و طراحی‌های تی‌شرت و استوری برای برندهای مختلف نظیر استخر مفتح، Nutrilab، و Pro One.',
    localPath: 'G:\\project\\resume\\nemoone kaar\\Poster',
    badge: 'طراحی گرافیک و برندینگ',
    assets: [
      { type: 'image', url: '/nemoone kaar/Poster/poster.jpg' },
      { type: 'image', url: '/nemoone kaar/Poster/MASSAGE BANNER.jpg' },
      { type: 'image', url: '/nemoone kaar/Poster/instagramthumbnail.jpg' },
      { type: 'image', url: '/nemoone kaar/Poster/roleup_nutrilab (1).jpg' },
      { type: 'image', url: '/nemoone kaar/Poster/roleup_PHB3555N (2).jpg' },
      { type: 'image', url: '/nemoone kaar/Poster/roleup_PHB3555N_v2 (2).jpg' },
      { type: 'image', url: '/nemoone kaar/Poster/roleup_psb (4).jpg' },
      { type: 'image', url: '/nemoone kaar/Poster/story 1[edited].jpg' },
      { type: 'image', url: '/nemoone kaar/Poster/story 1[remake]0.jpg' },
      { type: 'image', url: '/nemoone kaar/Poster/story 2[edited]0.jpg' },
      { type: 'image', url: '/nemoone kaar/Poster/tshirt.jpg' },
      { type: 'image', url: '/nemoone kaar/Poster/Untitled-1.jpg' },
    ],
  },
  {
    name: 'طراحی هویت بصری و لوگو',
    description: 'طراحی لوگوهای تخصصی و متحرک‌سازی لوگوموشن برای پروژه‌ها و شرکت‌ها.',
    localPath: 'G:\\project\\resume\\nemoone kaar\\logo',
    badge: 'طراحی لوگو و لوگوموشن',
    assets: [
      { type: 'video', url: '/nemoone kaar/logomotion.mp4' },
      { type: 'image', url: '/nemoone kaar/logo/verde_logo_mark.webp' },
      { type: 'image', url: '/nemoone kaar/logo/logo.jpg' },
      { type: 'image', url: '/nemoone kaar/logo/230a829c-9d0b-4900-b9cd-29bd8ae40148.jpe' },
      { type: 'image', url: '/nemoone kaar/logo/7547a49f-9d47-4fd6-b1c0-907a0cd5e099.jpe' },
    ],
  },
  {
    name: 'تولید ویدیو آرت و شبیه‌سازی عمرانی با هوش مصنوعی',
    description: 'تولید ویدیو آرت، انیمیشن‌سازی فریم‌به‌فریم و شبیه‌سازی سه بعدی هوشمند پروژه‌های بزرگ عمرانی و راهسازی (نظیر پروژه مسیر اراک - سلفچگان - راهجرد) با استفاده از مدل‌های هوش مصنوعی پیشرفته نظیر Veo و ابزارهای گرافیکی.',
    localPath: 'G:\\project\\resume\\nemoone kaar\\AI',
    badge: 'ویدیو و تصویرسازی هوش مصنوعی (AI Content & Video)',
    assets: [
      { type: 'video', url: '/nemoone kaar/AI/با_veo_میخوام_بسازم (1) (1).mp4' },
      { type: 'image', url: '/nemoone kaar/AI/road_1.webp' },
      { type: 'image', url: '/nemoone kaar/AI/road_2.webp' },
      { type: 'image', url: '/nemoone kaar/AI/road_3.webp' },
      { type: 'image', url: '/nemoone kaar/AI/road_4.webp' },
      { type: 'image', url: '/nemoone kaar/AI/road_5.webp' },
      { type: 'image', url: '/nemoone kaar/AI/road_6.webp' },
      { type: 'image', url: '/nemoone kaar/AI/road_7.webp' },
      { type: 'image', url: '/nemoone kaar/AI/road_8.webp' },
      { type: 'image', url: '/nemoone kaar/AI/road_9.webp' },
      { type: 'image', url: '/nemoone kaar/AI/road_10.webp' },
    ],
  },
  {
    name: 'طراحی هویت برند آرین پینترز (Aryan Painters)',
    description: 'طراحی هویت بصری، بروشورها و المان‌های تبلیغاتی برند آرین پینترز با استفاده از ابزارهای گرافیکی و هوش مصنوعی.',
    localPath: 'G:\\project\\resume\\nemoone kaar\\AI',
    badge: 'طراحی برند و کاتالوگ (AI)',
    assets: [
      { type: 'image', url: '/nemoone kaar/AI/photo_5976541344685560430_w.jpg' },
      { type: 'image', url: '/nemoone kaar/AI/photo_5976541344685560431_w.jpg' },
      { type: 'image', url: '/nemoone kaar/AI/photo_5976541344685560433_w.jpg' },
      { type: 'image', url: '/nemoone kaar/AI/photo_5976541344685560435_w.jpg' },
      { type: 'image', url: '/nemoone kaar/AI/photo_5976541344685560437_w.jpg' },
      { type: 'image', url: '/nemoone kaar/AI/photo_5976541344685560440_w.jpg' },
    ],
  },
  {
    name: 'طراحی کاراکتر و محیط کارتونی با هوش مصنوعی',
    description: 'خلق کاراکترهای فانتزی و فضاسازی داستان‌های تعاملی کودکانه با مدل‌های پیشرفته تصویرساز هوش مصنوعی.',
    localPath: 'G:\\project\\resume\\nemoone kaar\\AI',
    badge: 'طراحی کاراکتر هوش مصنوعی',
    assets: [
      { type: 'image', url: '/nemoone kaar/AI/photo_5976541344685560441_w.jpg' },
      { type: 'image', url: '/nemoone kaar/AI/photo_5863766752011947603_w.jpg' },
      { type: 'image', url: '/nemoone kaar/AI/photo_5870714759261392502_w.jpg' },
      { type: 'image', url: '/nemoone kaar/AI/photo_5881704498240098521_w.jpg' },
    ],
  },
  {
    name: 'طراحی دفترچه راهنما و بروشور فنی فراری F355',
    description: 'طراحی کاتالوگ فنی و هویت برند خودروی نوستالژیک فراری F355. این پروژه شامل اینفوگرافیک‌های جزئیات مهندسی موتور V8 تخت، مقایسه تخصصی مدل‌های Challenge ،Spider ،GTS و Berlinetta، سیستم‌های انتقال قدرت گیربکس F1 و دنده‌ای دستی و راهنمای کامل سرویس و نگهداری دوره‌ای این سوپرکار افسانه‌ای دهه ۹۰ میلادی است.',
    localPath: 'G:\\project\\resume\\nemoone kaar\\Ferrari',
    badge: 'طراحی کاتالوگ و بروشور فنی',
    assets: [
      { type: 'image', url: '/nemoone kaar/Ferrari/page_1.jpg' },
      { type: 'image', url: '/nemoone kaar/Ferrari/page_2.jpg' },
      { type: 'image', url: '/nemoone kaar/Ferrari/page_3.jpg' },
      { type: 'image', url: '/nemoone kaar/Ferrari/page_4.jpg' },
      { type: 'image', url: '/nemoone kaar/Ferrari/page_5.jpg' },
      { type: 'image', url: '/nemoone kaar/Ferrari/page_6.jpg' },
    ],
  },
  {
    name: 'طراحی هویت بصری و ست اداری برند ورده (Verde)',
    description: 'طراحی کامل و جامع هویت بصری، اقلام اداری، پاکت‌نامه‌ها، سربرگ‌ها، کارت‌های ویزیت، کیسه‌های تبلیغاتی و البسه پرسنلی برند ورده.',
    localPath: 'G:\\project\\resume\\nemoone kaar\\ست اداری verde',
    badge: 'طراحی هویت بصری و برندینگ',
    assets: verdeSorted as ProjectAsset[],
  },
]

export default PROJECTS
