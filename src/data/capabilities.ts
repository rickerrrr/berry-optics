/**
 * Berry Optics - Technology Capabilities
 * Source: zzoptic.com.cn (technology.aspx pages)
 * DO NOT fabricate capabilities. Match real company business.
 */

export interface Capability {
  id: string;
  iconKey: string;
  i18nKey: string;
}

export const capabilities: Capability[] = [
  {
    id: 'research',
    iconKey: 'research',
    i18nKey: 'capabilities.items.research',
  },
  {
    id: 'inspection',
    iconKey: 'inspection',
    i18nKey: 'capabilities.items.inspection',
  },
  {
    id: 'production',
    iconKey: 'production',
    i18nKey: 'capabilities.items.production',
  },
];
