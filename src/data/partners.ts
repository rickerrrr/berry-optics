/**
 * Berry Optics - Cooperation Partners
 * Source: zzoptic.com.cn official company profile
 *
 * NOTE: Do NOT list specific company names unless officially confirmed.
 * The company states cooperation with:
 * - Nearly 10 leading optoelectronics enterprises in Europe and America
 * - Domestic research institutes
 * - China Aerospace Science and Technology (CASC)
 * - China Aerospace Science and Industry (CASIC)
 *
 * Specific partner names are NOT published on the official website.
 * This file describes cooperation AREAS, not fabricated company names.
 */

export interface CooperationArea {
  id: string;
  category: 'international' | 'research' | 'aerospace';
  name: { zh: string; en: string };
  description: { zh: string; en: string };
}

export const cooperationAreas: CooperationArea[] = [
  {
    id: 'intl-leaders',
    category: 'international',
    name: { zh: '欧美光电行业领袖企业', en: 'European & American Optoelectronics Leaders' },
    description: {
      zh: '与欧美等近十家光电行业领袖企业建立长期合作业务',
      en: 'Long-term business cooperation with nearly 10 leading optoelectronics enterprises in Europe and America',
    },
  },
  {
    id: 'research-institutes',
    category: 'research',
    name: { zh: '国内科研院所', en: 'Domestic Research Institutes' },
    description: {
      zh: '与国内多所科研院所常年开展科研合作',
      en: 'Ongoing research collaboration with multiple domestic research institutes',
    },
  },
  {
    id: 'casc',
    category: 'aerospace',
    name: { zh: '航天科技集团', en: 'China Aerospace Science and Technology (CASC)' },
    description: {
      zh: '与中国航天科技集团常年开展科研合作',
      en: 'Ongoing research collaboration with China Aerospace Science and Technology Corporation',
    },
  },
  {
    id: 'casic',
    category: 'aerospace',
    name: { zh: '航天科工集团', en: 'China Aerospace Science and Industry (CASIC)' },
    description: {
      zh: '与中国航天科工集团常年开展科研合作',
      en: 'Ongoing research collaboration with China Aerospace Science and Industry Corporation',
    },
  },
];
