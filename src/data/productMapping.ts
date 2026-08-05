/**
 * 贝瑞光电 — 产品映射层 (Product Mapping Layer)
 * =============================================
 * 双层架构核心：连接官网展示层和AI知识层。
 *
 * Layer 1 — 官网展示: 客户浏览分类 (optical industry convention)
 * Layer 2 — AI知识: berry_agent 回答客户需求 (knowledge base structure)
 *
 * 数据来源: 贝瑞企业介绍PPTX (31页) + 成工精销产品目录PDF (2页)
 *
 * 原则:
 * - 不做任何虚构。所有参数、案例、应用均来自原始资料。
 * - 官网展示保持行业通用表达；AI检索使用知识库精确分类。
 * - 此文件为官网 products.ts 和 AI 知识检索的共同数据源。
 */

export interface ProductMapping {
  /** 官网展示名称 (用户友好) */
  displayName: { zh: string; en: string };
  /** 官网分类路径 */
  webCategory: string;
  webSubCategory: string;
  /** 知识库产品名称 (AI检索用) */
  kbProductName: string;
  kbCategory: string;
  kbLayer: string;
  /** 技术参数 (均来自原始资料) */
  specs: {
    material?: string;
    size?: string;
    surfaceRoughness?: string;
    surfaceQuality?: string;
    surfaceFigure?: string;
    otherSpecs?: string;
  };
  /** 应用场景 (来自PPTX原文) */
  applications: string[];
  /** SEO关键词 */
  seoKeywords: { zh: string[]; en?: string[] };
  /** 来源文件 */
  source: string;
  /** 技术水平标注 (来自原文) */
  techLevel?: string;
}

/**
 * 完整产品映射表
 * 每一行同时服务于官网渲染和AI检索
 */
export const productMappings: ProductMapping[] = [
  // ============================================================
  // 一、极端超光滑光学元件（皮米级）
  // ============================================================
  {
    displayName: { zh: 'WDM超光滑基片', en: 'WDM Ultra-Smooth Substrates' },
    webCategory: 'optical_components',
    webSubCategory: 'ultra_smooth',
    kbProductName: 'WDM超光滑基片',
    kbCategory: 'extreme_ultra_smooth',
    kbLayer: 'product',
    specs: {
      material: '光学玻璃',
      size: 'φ4″-12″，单面加工',
      surfaceRoughness: 'Ra≤0.1nm (100pm)',
      surfaceQuality: '10/5',
    },
    applications: ['AI大数据', '光通讯芯片', '人工智能', 'DWDM Filter', '100G/50G光芯片'],
    seoKeywords: {
      zh: ['WDM超光滑基片', 'DWDM Filter基片', '光芯片基片', 'AI数据中心光学元件', '光通讯基片'],
      en: ['WDM ultra-smooth substrate', 'DWDM filter substrate', 'optical chip substrate'],
    },
    source: 'PPTX Slide 10 + PDF 成工精销',
    techLevel: '国际领先',
  },
  {
    displayName: { zh: '石英超光滑元件', en: 'Fused Silica Ultra-Smooth Elements' },
    webCategory: 'optical_components',
    webSubCategory: 'ultra_smooth',
    kbProductName: '石英超光滑元件',
    kbCategory: 'extreme_ultra_smooth',
    kbLayer: 'product',
    specs: {
      material: '熔石英 (Fused Silica)',
      size: 'φ1″-3″',
      surfaceRoughness: 'Ra<0.1nm',
      surfaceQuality: '10/5',
      surfaceFigure: 'PV<λ/30',
    },
    applications: ['半导体', '光学仪器', '光刻机'],
    seoKeywords: {
      zh: ['石英超光滑元件', '熔石英光学元件', '半导体光学元件', '光刻机光学元件'],
      en: ['fused silica ultra-smooth', 'semiconductor optics'],
    },
    source: 'PPTX Slide 9 + PDF 成工精销',
    techLevel: '国际先进',
  },
  {
    displayName: { zh: 'CaF2超光滑窗口/透镜', en: 'CaF2 Ultra-Smooth Windows/Lenses' },
    webCategory: 'optical_components',
    webSubCategory: 'ultra_smooth',
    kbProductName: 'CaF2超光滑窗口/透镜',
    kbCategory: 'extreme_ultra_smooth',
    kbLayer: 'product',
    specs: {
      material: '氟化钙 (CaF2)',
      size: 'φ0.5″-2″',
      surfaceRoughness: 'Ra≤0.1nm',
      surfaceQuality: '20/10',
      surfaceFigure: 'PV≤λ/10',
      otherSpecs: '平行度 θ≤5″',
    },
    applications: ['光学仪器', '准分子激光器', '深紫外应用'],
    seoKeywords: {
      zh: ['CaF2窗口', '氟化钙光学元件', '深紫外光学元件', '准分子激光器元件'],
      en: ['CaF2 window', 'calcium fluoride optics', 'excimer laser optics'],
    },
    source: 'PPTX Slide 13,16 + PDF 成工精销',
    techLevel: '国际先进、国内领先',
  },
  {
    displayName: { zh: '球面超光滑透镜', en: 'Spherical Ultra-Smooth Lenses' },
    webCategory: 'optical_components',
    webSubCategory: 'ultra_smooth',
    kbProductName: '球面超光滑透镜',
    kbCategory: 'extreme_ultra_smooth',
    kbLayer: 'product',
    specs: {
      size: 'Φ15-80×3-12mm',
      surfaceRoughness: 'Ra≤0.2nm',
      surfaceQuality: '10/5',
    },
    applications: ['航空航天'],
    seoKeywords: {
      zh: ['球面超光滑透镜', '航天光学透镜'],
    },
    source: 'PDF 成工精销',
    techLevel: '国际先进',
  },
  {
    displayName: { zh: '石英反射镜', en: 'Fused Silica Mirrors' },
    webCategory: 'optical_components',
    webSubCategory: 'ultra_smooth',
    kbProductName: '石英反射镜',
    kbCategory: 'extreme_ultra_smooth',
    kbLayer: 'product',
    specs: {
      material: '熔石英',
      size: 'φ100-300mm',
      surfaceRoughness: 'Ra≤0.1nm',
      surfaceQuality: '5/1',
      surfaceFigure: 'PV<λ/10',
    },
    applications: ['激光', '光学仪器'],
    seoKeywords: {
      zh: ['石英反射镜', '大尺寸反射镜', '高功率激光反射镜'],
    },
    source: 'PDF 成工精销',
    techLevel: '国际先进',
  },
  {
    displayName: { zh: '硅高反镜', en: 'Silicon High-Reflection Mirrors' },
    webCategory: 'optical_components',
    webSubCategory: 'ultra_smooth',
    kbProductName: '硅高反镜',
    kbCategory: 'extreme_ultra_smooth',
    kbLayer: 'product',
    specs: {
      material: '单晶硅',
      size: 'φ1″-2″，单面精抛',
      surfaceRoughness: 'Ra<0.05nm (50pm)',
      surfaceQuality: '10/5',
      surfaceFigure: 'PV<λ/20',
    },
    applications: ['光学仪器', '高功率激光器', '万瓦级激光器'],
    seoKeywords: {
      zh: ['硅高反镜', '单晶硅反射镜', '超高功率激光反射镜', '49pm硅反射镜'],
      en: ['silicon mirror', 'ultra-smooth silicon mirror', 'high power laser mirror'],
    },
    source: 'PPTX Slide 12,15 + PDF 成工精销',
    techLevel: '国际领先',
  },
  {
    displayName: { zh: '蓝宝石窗口', en: 'Sapphire Windows' },
    webCategory: 'optical_components',
    webSubCategory: 'ultra_smooth',
    kbProductName: '蓝宝石窗口',
    kbCategory: 'extreme_ultra_smooth',
    kbLayer: 'product',
    specs: {
      material: '蓝宝石 (Sapphire)',
      size: 'D60-80×5-8mm',
      surfaceRoughness: 'Ra≤0.12nm',
      surfaceQuality: '5/0',
      surfaceFigure: 'PV<0.6fr',
    },
    applications: ['新型显示', '半导体', '准分子激光器'],
    seoKeywords: {
      zh: ['蓝宝石窗口', '蓝宝石光学元件', '新型显示光学窗口'],
    },
    source: 'PPTX Slide 16 + PDF 成工精销',
    techLevel: '国际先进',
  },
  {
    displayName: { zh: 'MgF2窗口', en: 'MgF2 Windows' },
    webCategory: 'optical_components',
    webSubCategory: 'ultra_smooth',
    kbProductName: 'MgF2窗口',
    kbCategory: 'extreme_ultra_smooth',
    kbLayer: 'product',
    specs: {
      material: '氟化镁 (MgF2)',
      size: 'D60×5mm',
      surfaceRoughness: 'Ra<0.3nm',
      surfaceQuality: '20/10',
      surfaceFigure: 'PV<λ/4',
    },
    applications: ['新型显示', '紫外光学', '准分子激光器'],
    seoKeywords: {
      zh: ['MgF2窗口', '氟化镁窗口', '紫外光学窗口'],
    },
    source: 'PPTX Slide 16 + PDF 成工精销',
    techLevel: '国际先进',
  },
  {
    displayName: { zh: '石英窗口', en: 'Fused Silica Windows' },
    webCategory: 'optical_components',
    webSubCategory: 'ultra_smooth',
    kbProductName: '石英窗口',
    kbCategory: 'extreme_ultra_smooth',
    kbLayer: 'product',
    specs: {
      material: '熔石英',
      size: 'D60-80×5-8mm',
      surfaceRoughness: 'Ra<0.2nm',
      surfaceQuality: '20/10',
      surfaceFigure: 'PV<λ/10',
    },
    applications: ['新型显示', '光学仪器'],
    seoKeywords: {
      zh: ['石英窗口', '超光滑石英', '熔石英窗口'],
    },
    source: 'PDF 成工精销',
    techLevel: '国际先进',
  },
  {
    displayName: { zh: '硅长条', en: 'Silicon Bar Elements' },
    webCategory: 'optical_components',
    webSubCategory: 'ultra_smooth',
    kbProductName: '硅长条',
    kbCategory: 'extreme_ultra_smooth',
    kbLayer: 'product',
    specs: {
      material: '单晶硅',
      size: '150-700mm，单面精抛',
      surfaceRoughness: 'Ra<0.1nm',
      surfaceQuality: '20/10',
      surfaceFigure: 'PV λ/10',
    },
    applications: ['大科学装置', '光学仪器'],
    seoKeywords: {
      zh: ['硅长条', '大科学装置光学元件', '同步辐射元件'],
    },
    source: 'PDF 成工精销',
    techLevel: '国内先进',
  },

  // ============================================================
  // 二、高精密光学元件
  // ============================================================
  {
    displayName: { zh: '大尺寸ZnS高精密元件', en: 'Large ZnS Precision Elements' },
    webCategory: 'optical_components',
    webSubCategory: 'infrared',
    kbProductName: '大尺寸ZnS高精密元件',
    kbCategory: 'high_precision',
    kbLayer: 'product',
    specs: {
      material: '硫化锌 (ZnS)',
      size: '460×460×15mm',
      surfaceRoughness: 'Ra<1nm',
      surfaceQuality: '60-40',
      surfaceFigure: 'PV≤2λ',
    },
    applications: ['航空航天', '先进飞行器'],
    seoKeywords: {
      zh: ['ZnS光学元件', '硫化锌窗口', '大尺寸红外元件', '航空航天红外窗口'],
      en: ['ZnS optics', 'large infrared optics', 'aerospace infrared window'],
    },
    source: 'PDF 成工精销 + PPTX Slide 18',
    techLevel: '国内先进',
  },
  {
    displayName: { zh: '锗高精密元件', en: 'Germanium Precision Elements' },
    webCategory: 'optical_components',
    webSubCategory: 'infrared',
    kbProductName: '锗高精密元件',
    kbCategory: 'high_precision',
    kbLayer: 'product',
    specs: {
      material: '锗 (Ge)',
      size: 'φ4-700mm',
      surfaceRoughness: 'Ra 0.3-1nm',
      surfaceQuality: '10/5',
      surfaceFigure: 'PV≤1/15λ',
    },
    applications: ['红外光学', '航空航天', '国防军工'],
    seoKeywords: {
      zh: ['锗光学元件', '红外锗镜片', '大尺寸锗元件', '红外光学元件'],
      en: ['germanium optics', 'infrared germanium lens', 'Ge optics'],
    },
    source: 'PPTX Slide 18 + PDF 成工精销',
    techLevel: '国内先进',
  },
  {
    displayName: { zh: '硅高精密元件', en: 'Silicon Precision Elements' },
    webCategory: 'optical_components',
    webSubCategory: 'infrared',
    kbProductName: '硅高精密元件',
    kbCategory: 'high_precision',
    kbLayer: 'product',
    specs: {
      material: '单晶硅 (Si)',
      size: 'φ4-700mm',
      surfaceRoughness: 'Ra 0.3-1nm',
      surfaceQuality: '10/5',
      surfaceFigure: 'PV≤1/30λ',
    },
    applications: ['红外光学', '航空航天'],
    seoKeywords: {
      zh: ['硅光学元件', '红外硅元件', '大尺寸硅窗口'],
    },
    source: 'PPTX Slide 18 + PDF 成工精销',
    techLevel: '国内先进',
  },

  // ============================================================
  // 三、PLIF诊断仪
  // ============================================================
  {
    displayName: { zh: '10kHz高速PLIF成像诊断仪', en: '10kHz High-Speed PLIF Imaging System' },
    webCategory: 'instruments',
    webSubCategory: 'diagnostic',
    kbProductName: '10kHz高速PLIF成像诊断仪',
    kbCategory: 'plif_diagnostic',
    kbLayer: 'product',
    specs: {
      size: '1060×410×270mm (激光泵浦) + 940×520×280mm (可调谐激光器)',
      surfaceRoughness: '10kHz采样间隔0.1ms',
      otherSpecs: '单脉冲能量1mJ@283nm，驱动频率1Hz-10kHz，脉冲串工作方式',
    },
    applications: [
      '高超声速飞行器', '航空航天发动机', '火箭发动机',
      '先进激光装置', '清洁能源', '内燃机', '"双碳"新能源',
    ],
    seoKeywords: {
      zh: ['PLIF成像诊断仪', '高速激光诱导荧光', '燃烧流场诊断', '航空发动机检测'],
      en: ['PLIF imaging', 'planar laser induced fluorescence', 'combustion diagnostics'],
    },
    source: 'PPTX Slide 19-21 + PDF 成工精销',
    techLevel: '国际先进、国内领先 (国内首创)',
  },
  {
    displayName: { zh: '20kHz双波长PLIF成像诊断仪', en: '20kHz Dual-Wavelength PLIF Imaging System' },
    webCategory: 'instruments',
    webSubCategory: 'diagnostic',
    kbProductName: '20kHz双波长高灵敏度高速PLIF成像诊断仪',
    kbCategory: 'plif_diagnostic',
    kbLayer: 'product',
    specs: {
      size: '1500×1200×2200mm',
      otherSpecs: '20kHz采样(间隔0.05ms)，连续测量20ms，紫外0.8mJ@283nm@20kHz，双波长同步同位检测两组分PLIF图像',
    },
    applications: ['高超声速飞行器', '航空航天发动机', '火箭发动机', '"双碳"新能源', '清洁能源'],
    seoKeywords: {
      zh: ['双波长PLIF', '20kHz高速PLIF', '高灵敏度PLIF', '双组分PLIF测量'],
    },
    source: 'PPTX Slide 22 + PDF 成工精销',
    techLevel: '国际先进、国内领先 (国内首创、首台套)',
  },
];

/**
 * 材料能力清单 (官网技术能力页 + AI检索)
 */
export const materialCapabilities = [
  '石英 (Fused Silica)',
  '光学玻璃 (Optical Glass)',
  '单晶硅 (Single Crystal Silicon)',
  '氟化钙 (CaF2)',
  '氟化镁 (MgF2)',
  '锗 (Germanium)',
  '硫化锌 (ZnS)',
  '硒化锌 (ZnSe)',
  '蓝宝石 (Sapphire)',
];

/**
 * 加工能力参数 (官网技术能力页 + AI检索)
 */
export const manufacturingCapabilities = {
  surfaceRoughness: {
    best: '40-60pm (0.04-0.06nm)',
    batch: '≤100pm (0.1nm)',
    source: 'PPTX Slide 2',
  },
  surfaceQuality: {
    best: '5-0',
    typical: '10-5 至 20-10',
    source: 'PPTX Slide 9',
  },
  surfaceFigure: {
    best: 'PV优于λ/30',
    source: 'PPTX Slide 9',
  },
  sizeRange: 'φ4-700mm',
  maxInfraredSize: 'Ø700mm',
  sourceSize: 'PPTX Slide 9,18',
};

/**
 * 应用领域 (官网导航 + AI检索场景)
 */
export const applicationDomains = [
  {
    id: 'semiconductor',
    name: { zh: '半导体', en: 'Semiconductor' },
    description: { zh: '光刻机光学元件、AI芯片基片、DWDM Filter', en: 'Lithography optics, AI chip substrates' },
    products: ['石英超光滑元件', 'WDM超光滑基片', '蓝宝石窗口'],
    seoKeywords: ['光刻机光学元件', '半导体检测', 'AI芯片基片'],
  },
  {
    id: 'aerospace',
    name: { zh: '航空航天', en: 'Aerospace' },
    description: { zh: '红外元件、PLIF诊断仪、卫星光学', en: 'Infrared optics, PLIF diagnostics' },
    products: ['ZnS元件', '锗元件', 'PLIF诊断仪', '球面超光滑透镜'],
    seoKeywords: ['航空航天光学', '航空发动机诊断', 'PLIF测量'],
  },
  {
    id: 'laser',
    name: { zh: '激光', en: 'Laser' },
    description: { zh: '高功率激光反射镜、准分子激光器元件', en: 'High power laser mirrors' },
    products: ['硅高反镜', '石英反射镜', 'CaF2窗口', 'MgF2窗口'],
    seoKeywords: ['高功率激光反射镜', '准分子激光器', '万瓦级激光器元件'],
  },
  {
    id: 'optical_comm',
    name: { zh: '光通讯/AI大数据', en: 'Optical Communication' },
    description: { zh: 'WDM基片、光通讯元件', en: 'WDM substrates' },
    products: ['WDM超光滑基片'],
    seoKeywords: ['WDM基片', '光通讯元件', 'AI数据中心光学'],
  },
  {
    id: 'big_science',
    name: { zh: '大科学装置', en: 'Big Science Facilities' },
    description: { zh: '同步辐射光源、激光核聚变装置元件', en: 'Synchrotron, fusion laser optics' },
    products: ['硅长条', '石英超光滑元件'],
    seoKeywords: ['大科学装置光学', '同步辐射元件', '神光工程元件'],
  },
  {
    id: 'display',
    name: { zh: '新型显示', en: 'Advanced Display' },
    description: { zh: '蓝宝石窗口、石英窗口、MgF2窗口', en: 'Sapphire/quartz/MgF2 windows' },
    products: ['蓝宝石窗口', '石英窗口', 'MgF2窗口'],
    seoKeywords: ['显示光学窗口', '蓝宝石窗口', '超光滑窗口'],
  },
];

/**
 * 客户问题 → 知识层路由映射
 */
export const queryToLayerMap: Record<string, string[]> = {
  // 公司类 → core_identity
  '公司': ['core_identity'],
  '贝瑞': ['core_identity'],
  '介绍': ['core_identity'],
  '历史': ['core_identity'],
  '成立': ['core_identity'],
  '优势': ['core_identity'],
  '团队': ['core_identity'],
  '董事长': ['core_identity'],

  // 产品类 → product
  '产品': ['product'],
  '元件': ['product'],
  '窗口': ['product'],
  '透镜': ['product'],
  '反射镜': ['product'],
  '基片': ['product'],
  'WDM': ['product'],
  'PLIF': ['product'],
  '诊断仪': ['product'],
  '参数': ['product'],
  '指标': ['product'],
  '精度': ['product'],
  '粗糙度': ['product'],
  '光洁度': ['product'],
  '尺寸': ['product'],
  '材料': ['product'],

  // 场景类 → application
  '应用': ['application'],
  '行业': ['application'],
  '场景': ['application'],
  '半导体': ['application'],
  '光刻': ['application'],
  '航空航天': ['application'],
  '激光': ['application'],
  '光通讯': ['application'],
  '检测': ['application'],
  '大科学': ['application'],
  '国防': ['application'],

  // 技术类 → technology
  '技术': ['technology'],
  '抛光': ['technology'],
  '超光滑': ['technology'],
  '皮米': ['technology'],
  '加工': ['technology'],
  '工艺': ['technology'],
  '原子级': ['technology'],

  // 销售类 → sales
  '价格': ['sales'],
  '报价': ['sales'],
  '多少钱': ['sales'],
  '交期': ['sales'],
  '定制': ['sales'],
  '购买': ['sales'],
  '认证': ['sales'],
  'ISO': ['sales'],
  '联系': ['sales'],
  '电话': ['sales'],

  // 案例类 → content
  '案例': ['content'],
  '客户': ['content'],
  '合作': ['content'],
  'Trumpf': ['content'],
  '通快': ['content'],
  '滨松': ['content'],
  '神光': ['content'],
  '项目': ['content'],
};
