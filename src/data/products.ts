/**
 * Berry Optics - Product Data
 * Source: zzoptic.com.cn (original website product structure)
 *
 * Categories and subcategories match the real company business.
 * DO NOT add fabricated products or categories.
 */

export interface ProductCategory {
  id: 'ultra-smooth' | 'infrared' | 'visible' | 'uv';
  name: { zh: string; en: string };
  description: { zh: string; en: string };
  subCategories: { id: string; name: { zh: string; en: string } }[];
}

export const productCategories: ProductCategory[] = [
  {
    id: 'ultra-smooth',
    name: { zh: '超光滑元件', en: 'Ultra-Smooth Elements' },
    description: {
      zh: '成都贝瑞光电科技股份有限公司专业从事超精密光学元器件研制，超光滑元件产品涵盖平面、球面等类型。',
      en: 'Chengdu Berry Optoelectronics specializes in the research and production of ultra-precision optical components, including flat and spherical ultra-smooth elements.',
    },
    subCategories: [
      { id: 'flat', name: { zh: '平面', en: 'Flat' } },
      { id: 'spherical', name: { zh: '球面', en: 'Spherical' } },
    ],
  },
  {
    id: 'infrared',
    name: { zh: '红外元件', en: 'Infrared Elements' },
    description: {
      zh: '红外元件产品包括平面、球面及镀膜产品，广泛应用于红外光学系统。',
      en: 'Infrared element products include flat, spherical, and coated products, widely used in infrared optical systems.',
    },
    subCategories: [
      { id: 'flat', name: { zh: '平面', en: 'Flat' } },
      { id: 'spherical', name: { zh: '球面', en: 'Spherical' } },
      { id: 'coated', name: { zh: '镀膜产品', en: 'Coated Products' } },
    ],
  },
  {
    id: 'visible',
    name: { zh: '可见光元件', en: 'Visible Light Elements' },
    description: {
      zh: '可见光元件产品包括平面、透镜、棱镜及镀膜产品，覆盖可见光波段应用。',
      en: 'Visible light element products include flat elements, lenses, prisms, and coated products, covering visible light band applications.',
    },
    subCategories: [
      { id: 'flat', name: { zh: '平面', en: 'Flat' } },
      { id: 'lens', name: { zh: '透镜', en: 'Lens' } },
      { id: 'prism', name: { zh: '棱镜', en: 'Prism' } },
      { id: 'coated', name: { zh: '镀膜产品', en: 'Coated Products' } },
    ],
  },
  {
    id: 'uv',
    name: { zh: '紫外元件', en: 'UV Elements' },
    description: {
      zh: '紫外元件产品包括平面、透镜、棱镜，适用于紫外光学系统。',
      en: 'UV element products include flat elements, lenses, and prisms, suitable for ultraviolet optical systems.',
    },
    subCategories: [
      { id: 'flat', name: { zh: '平面', en: 'Flat' } },
      { id: 'lens', name: { zh: '透镜', en: 'Lens' } },
      { id: 'prism', name: { zh: '棱镜', en: 'Prism' } },
    ],
  },
];

/**
 * Application areas — from company official description.
 * DO NOT add fabricated application areas.
 */
export const applicationAreas = [
  { id: 'aerospace', name: { zh: '航空航天', en: 'Aerospace' } },
  { id: 'defense', name: { zh: '国防军工', en: 'Defense & Military' } },
  { id: 'industrial', name: { zh: '工业', en: 'Industrial' } },
  { id: 'medical', name: { zh: '医疗', en: 'Medical' } },
  { id: 'security', name: { zh: '安全', en: 'Security' } },
] as const;
