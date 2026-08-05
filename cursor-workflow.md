# Berry Optics — Cursor/Windsurf 工作流指令

> 以下 6 个步骤按顺序在 Cursor/Windsurf 中执行。每步将对应的 prompt 复制粘贴到 AI Chat 中，等 AI 完成输出后再进入下一步。

---

## 第一步：项目分析（只读，不修改任何文件）

打开项目目录 `D:\AI_Workspace\Projects\berry-optics\website\` 后，输入：

```
请分析当前贝瑞光电官网项目。

不要修改任何文件。

输出：

1. 当前技术架构
2. 项目目录结构
3. 已完成页面
4. 未完成页面
5. 当前UI问题
6. 需要新增的组件
7. 官网国际化方案
8. 下一阶段开发计划
```

> 等待 AI 输出完整分析结果。将结果发回 WorkBuddy 确认后再进入第二步。

---

## 第二步：建立官网设计规范

```
基于成都贝瑞光电科技股份有限公司定位，
创建 Berry Optics Website Design System v1.0。

定位：
半导体
光电器件
精密制造
国际客户

视觉要求：

- 明亮科技风
- 高端工业感
- 国际化企业官网
- 光学科技元素

禁止：
- 黑色赛博朋克
- 游戏风
- 普通模板网站

输出：

1. 首页视觉方向
2. 色彩系统
3. 字体规范
4. UI组件规范
5. 动效规范
6. 图片风格规范
```

> 注意：项目根目录已有 `tailwind.config.ts`（包含 Berry Optics 色彩令牌）和 `src/styles/globals.css`（CSS 变量）。设计系统应基于这些已有令牌扩展，不要重新定义。

---

## 第三步：开发首页

```
严格参考成都贝瑞光电原官网 zzoptic.com.cn。

不要创造新的业务。

所有产品分类必须来自原官网和真实业务。

允许加入：
- AI光学动画（透镜旋转、光路模拟、光束扫描）
- 3D镜片展示
- 工业数字化效果
- 精密制造视觉

禁止：
- 虚构客户
- 虚构产品
- 虚构业务领域
- 暗黑赛博朋克设计

目标：传统光学制造企业升级为现代科技官网。

技术要求：
Next.js 14 App Router + React 18 + Tailwind CSS + Framer Motion + @react-three/fiber

首页结构（按顺序）：

1. 导航栏 — 白色背景, Logo, 中英文切换, 固定顶部
   菜单: 首页 | 产品中心 | 技术实力 | 关于贝瑞 | 联系我们

2. Hero区域 — 白色/银灰背景
   左侧: 公司全称 + "超精密光学元件与特种光电技术创新者" + [了解贝瑞] [探索产品]
   右侧: AI光学晶体动画 — 透明透镜缓慢旋转 + 光束穿过产生折射 + 参数显示(λ 632nm, Surface RMS, Precision 0.01μm)

3. 企业实力 — 4个数据卡片: 2001年成立 / 13项专利 / 5大产品体系 / 5大应用领域

4. 产品中心 — 5个分类入口卡片:
   - 超光滑元件 (平面/球面)
   - 红外元件 (平面/球面/镀膜)
   - 可见光元件 (平面/透镜/棱镜/镀膜)
   - 紫外元件 (平面/透镜/棱镜)
   - 定制光学组件 (加工/镀膜/装调)

5. 核心制造能力 — 5个 glassmorphism 卡片:
   - 超光滑抛光技术 (< 0.5Å RMS)
   - 精密加工 (< 0.1μm)
   - 光学检测 (ISO 9001)
   - 镀膜技术 (193nm-12μm, 80+层)
   - 组件装调 (< 5 arc sec)

6. 应用领域 — 5个行业标签: 航空航天 / 国防军工 / 工业 / 医疗 / 安全

7. 全球合作 — 真实合作方信息:
   - 欧美近十家光电行业领袖企业
   - 国内多所科研院所
   - 航天科技集团
   - 航天科工集团
   (不要虚构具体公司名，只描述合作领域)

8. Berry AI 光学助手 — 右下角浮窗
   光圈呼吸动画 + 光点流动
   默认显示3个建议问题

9. Footer — 公司信息 + 联系方式

色彩:
- Pure White #FFFFFF (主背景)
- Optical Silver #E8EDF2 (浅色区块背景)
- Photon Blue #0B6CFF (品牌色, 按钮, 链接)
- Crystal Cyan #00D9FF (强调色, 光学效果)
- Deep Navy #0A1628 (仅用于Footer, 按钮, 强调文字)

数据接口:
import { productCategories, applicationAreas } from '@data/index';
import { capabilities } from '@data/index';
import { company } from '@data/index';
import { cooperationAreas } from '@data/index';
import { useTranslation } from 'react-i18next';

先完成首页, 不开发其他页面。
```

> 先只做首页。等首页 UI 确认满意后再进入后续步骤。

---

## 第四步：接入 AI 图片生产

此步骤在 Cursor 外执行。使用 Visual Agent / Stable Diffusion / ComfyUI 生成：

- 首页 Hero 背景图
- 产品展示图
- 技术实验室照片
- 新闻封面图
- 社媒素材

生成后放入 `public/images/` 目录，在 Cursor 中替换占位符。

---

## 第五步：开发产品中心

```
开发产品中心页面 (src/app/products/page.tsx)。

产品分类结构：

产品中心
├ 光通信器件
├ 精密光学元件
├ 激光相关产品
├ 定制光学解决方案
└ 下载中心

每个产品页面包含：
- 产品图片 (placeholder)
- 产品名称 (中英文)
- 技术参数表格
- 应用领域
- 技术优势
- PDF规格书下载按钮
- 在线咨询按钮 (跳转AI助手)

路由结构：
/products            → 产品分类总览
/products/lenses      → 精密透镜
/products/mirrors     → 光学反射镜
/products/prisms      → 光学棱镜
/products/windows     → 光学窗口
/products/filters     → 光学滤光片
/products/coatings    → 定制镀膜
```

---

## 第六步：加入 AI 助手

AI 助手后端已就绪 (`src/app/api/ai/route.ts`)，连接到 Hermes Desktop。

在 Cursor 中完善前端交互：

```
完善 AI 助手浮窗组件 (src/components/widgets/AIAssistant.tsx)。

功能：
- 右下角固定浮窗, 默认收起 (圆形按钮)
- 点击展开聊天窗口 (玻璃拟态卡片)
- 输入框 + 发送按钮
- 消息列表 (自动滚动到底部)
- Loading 状态 (动画省略号)
- 语言: 跟随当前 i18n 语言

API 调用:
POST /api/ai
Body: { message: string, lang: 'zh' | 'en' }
Response: { reply: string }

i18n keys (已定义):
- ai.title: "Berry AI 助手" / "Berry AI Assistant"
- ai.placeholder: "请问有什么可以帮您？" / "How can we help?"
- ai.greeting: "您好！我是 Berry AI 助手..." / "Hello! I'm the Berry AI Assistant..."
```

---

## 执行顺序总览

```
Cursor分析项目 (第一步)
        ↓
设计系统 (第二步)
        ↓
首页UI (第三步)
        ↓
AI图片素材 (第四步)
        ↓
产品中心 (第五步)
        ↓
AI助手 (第六步)
        ↓
英文版完善
        ↓
部署上线
```

---

## 关键约束

1. **不要一次生成整个官网** — 每步完成后确认再继续
2. **不要使用免费图库图片** — 用占位符, 等接入 AI 生图
3. **不要使用暗色主题** — 白色/浅银主色, 仅 Footer 和深色按钮用 Deep Navy
4. **不要使用外部图标库** — 用内联 SVG, Photon Blue 描边
5. **所有颜色用 tailwind 令牌** — `text-brand-photon`, `bg-surface-silver` 等, 不要硬编码 hex
6. **i18n 已配置** — 用 `useTranslation()` hook, 不要重新搭建国际化方案
7. **严格参考老官网** — 产品分类、公司信息、应用领域必须来自 zzoptic.com.cn 真实业务
8. **禁止虚构** — 不虚构客户名、产品、业务领域
9. **AI是增强层** — 光学动画/3D/光路模拟增强体验, 但主体是精密光学制造
