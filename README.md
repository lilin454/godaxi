<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

> **全台唯一・以客家文化為世界觀的親子 APP 實境解謎一日遊**
>
> 桃園市大溪・龍潭 ｜ IG: [@ty.ka_daxi](https://www.instagram.com/ty.ka_daxi)

---

## 目錄

- [專案簡介](#專案簡介)
- [網站架構](#網站架構)
- [技術棧](#技術棧)
- [本地啟動](#本地啟動)
- [頁面說明](#頁面說明)
- [品牌設計規範](#品牌設計規範)
- [體驗行程](#體驗行程)
- [定價方案](#定價方案)
- [團隊成員](#團隊成員)
- [聯絡方式](#聯絡方式)

---

## 專案簡介

**桃客大溪**是一個以客家文化為核心世界觀所打造的沉浸式實境解謎體驗，串聯桃園大溪、龍潭五大核心文化景點，結合自主研發 APP、實體道具包與客家主題劇情 IP，帶領親子家庭、大學生族群與各類旅客，一同踏上一段充滿文化底蘊的冒險旅程。

本 Repository 為桃客大溪官方行銷網站的前端原始碼，涵蓋品牌形象展示、體驗行程介紹、線上預訂入口，以及消費者問卷數據成果展示。

---

## 網站架構

```
ty-ka-daxi-web/
├── public/
│   ├── favicon.ico
│   ├── logo.svg                  # 桃客大溪主標誌（SVG 向量檔）
│   └── og-image.jpg              # Open Graph 社群預覽圖
│
├── src/
│   ├── assets/
│   │   ├── fonts/                # 品牌字型（Noto Serif TC、圓潤標題字）
│   │   ├── images/
│   │   │   ├── spots/            # 五大景點照片
│   │   │   ├── brand/            # 品牌識別素材
│   │   │   └── hero/             # 首頁 Hero 視覺
│   │   └── icons/
│   │
│   ├── components/
│   │   ├── Navbar.jsx            # 頂部導覽列（含 Logo + 錨點連結）
│   │   ├── HeroSection.jsx       # 首頁全版視覺區塊
│   │   ├── FeatureCards.jsx      # 四大產品特色卡片
│   │   ├── RouteTimeline.jsx     # 五站旅程時間軸
│   │   ├── PricingSection.jsx    # 定價方案區塊
│   │   ├── SurveyStats.jsx       # 消費者調查數據視覺化
│   │   ├── BookingForm.jsx       # 預訂表單入口
│   │   ├── MapSection.jsx        # 景點地圖嵌入（Google Maps）
│   │   └── Footer.jsx            # 頁尾（IG 連結 + 版權聲明）
│   │
│   ├── pages/
│   │   ├── index.jsx             # 首頁（Landing Page）
│   │   ├── experience.jsx        # 體驗詳情頁
│   │   ├── about.jsx             # 品牌故事頁
│   │   └── booking.jsx           # 預訂頁
│   │
│   ├── styles/
│   │   ├── globals.css           # 全域樣式與 CSS 變數
│   │   ├── typography.css        # 字型規範
│   │   └── animations.css        # 動畫與過渡效果
│   │
│   └── utils/
│       ├── constants.js          # 景點資料、定價資訊等常數
│       └── analytics.js          # GA4 事件追蹤工具
│
├── .env.example                  # 環境變數範本
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

---

## 技術棧

| 類別 | 工具 |
|------|------|
| 框架 | React 18 + Vite |
| 樣式 | Tailwind CSS + CSS Modules |
| 動畫 | Framer Motion |
| 地圖 | Google Maps Embed API |
| 表單 | React Hook Form |
| 部署 | Vercel |
| 圖片優化 | Next/Image 或 Vite-imagetools |
| 分析 | Google Analytics 4 |

---

## 本地啟動

### 前置需求

- Node.js `>= 18.0.0`
- npm `>= 9.0.0`

### 安裝與執行

```bash
# 1. Clone 專案
git clone https://github.com/ty-ka-daxi/website.git
cd website

# 2. 安裝套件
npm install

# 3. 複製環境變數範本
cp .env.example .env.local

# 4. 填入所需 API 金鑰（見下方說明）

# 5. 啟動開發伺服器
npm run dev
```

開發伺服器預設運行於 `http://localhost:5173`

### 環境變數說明

```env
# Google Maps Embed API
VITE_GOOGLE_MAPS_API_KEY=your_api_key_here

# Google Analytics 4
VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX

# 表單提交 Endpoint（如使用 Formspree 或自建 API）
VITE_FORM_ENDPOINT=https://formspree.io/f/xxxx
```

### 建置與部署

```bash
# 建置正式版
npm run build

# 預覽建置結果
npm run preview

# 部署至 Vercel（需先安裝 Vercel CLI）
vercel deploy --prod
```

---

## 頁面說明

### `/` 首頁

- **Hero Section**：全版客家紅棕色系視覺，主標語 + 預訂 CTA 按鈕
- **品牌數據亮點**：問卷調查關鍵數字（68%、75% 等）動態計數呈現
- **四大特色**：深度敘事世界觀 / APP 輔助解謎 / 美食文化整合 / 世代協作設計
- **行程路線預覽**：五站時間軸橫向捲動
- **定價方案**：標準 NT$999 / 早鳥 NT$899
- **IG 社群串接**：最新貼文動態嵌入

### `/experience` 體驗詳情

- 五大景點詳細介紹（含地圖標記、開放時間、謎題主題）
- APP 功能示意動畫（離線導航 / AR 互動）
- 道具包內容展示
- 用戶體驗心得輪播（上線後動態接入）

### `/about` 品牌故事

- 桃客大溪的創立初心：守護百年客家記憶
- 品牌識別設計解析（Logo 七元素說明）
- 團隊成員介紹
- 媒體報導與合作夥伴

### `/booking` 預訂

- 體驗日期選擇器
- 人數與方案選擇
- 聯絡資訊填寫
- 付款方式說明（線上轉帳 / 第三方金流）

---

## 品牌設計規範

### 主色盤

```css
:root {
  --color-primary:     #7B3A2A;   /* 古樸紅棕 — 品牌主色，象徵歷史與土地 */
  --color-primary-dark:#5C2419;   /* 深紅棕 — Hover 狀態、深色背景 */
  --color-secondary:   #C4923A;   /* 金褐 — 強調色、數字、標題點綴 */
  --color-bg-light:    #F5F0E8;   /* 米白 — 淺色背景 */
  --color-bg-dark:     #2C1810;   /* 深咖啡 — 深色背景 */
  --color-text-main:   #3D1F15;   /* 正文深棕 */
  --color-text-muted:  #8B6B5A;   /* 次要文字 */
  --color-white:       #FDFAF5;   /* 暖白 */
}
```

### 字型規範

| 用途 | 字型 | 字重 |
|------|------|------|
| 中文標題 | Noto Serif TC | 700 / 900 |
| 英文標題 | Playfair Display | 700 |
| 中文內文 | Noto Sans TC | 400 / 500 |
| 數字強調 | Cormorant Garamond | 700 |

```css
/* 引入方式（Google Fonts） */
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@700;900&family=Noto+Sans+TC:wght@400;500&family=Playfair+Display:wght@700&family=Cormorant+Garamond:wght@700&display=swap');
```

### Logo 使用規範

- 標準版：紅棕色 Logo + 「桃客大溪」字標（深色背景用白色反白版）
- 最小顯示尺寸：32px 高
- 安全留白：Logo 高度的 1/4 作為四周最小留白
- 禁止：改變比例、替換顏色、加入陰影或濾鏡

---

## 體驗行程

| 站次 | 時間 | 景點 | 體驗主題 |
|------|------|------|---------|
| 01 | 09:30 | 鍾肇政文學生活園區 | 文學 × 客家文化 × 走讀 |
| 02 | 10:30 | 桃園市客家文化館 | 客家音樂 × 文化保存 × 教育 |
| 03 | 11:30 | 三坑鐵馬道 | 水圳 × 農村 × 生態慢旅 |
| 04 | 12:30 | 大溪老街 + 老阿伯豆干 | 美食 × 歷史街區 × 木藝 |
| 05 | 13:30 | 大溪木藝生態博物館 | 木工藝 × 地方創生 |

全程約 3–4 小時，各景點間車程不超過 15 分鐘。

---

## 定價方案

| 方案 | 內容 | 價格 |
|------|------|------|
| 標準定價 | 道具包 + APP 解謎體驗 + 完關紀念品 | NT$999 / 人 |
| 早鳥優惠 | 現在開始預訂享優惠 | NT$899 / 人 |

> 💡 逾 75% 受訪者表示願意為此類體驗支付 NT$499 以上。

---

## 團隊成員

| 姓名 | 職位 | 學號 |
|------|------|------|
| 林立 | CEO | 11444210 |
| 陳玟如 | 企劃設計 | 11444219 |
| 陳采妮 | 企劃設計 | 11444221 |
| 陳冠瑾 | 行銷 | 11444216 |
| 施唯琳 | 行銷 | 11444211 |
| 童安僡 | 人事 | 11444215 |
| 劉靜玟 | 財務會計 | 11444203 |
| 孫曼芸 | 資訊技術 | 11444209 |
| 黃氏翠玲 | 資訊技術 | 11444271 |

**AI 創意行銷公司 ｜ 中原大學資訊管理系**

---

## 聯絡方式

- **Instagram**: [@ty.ka_daxi](https://www.instagram.com/ty.ka_daxi)
- **預訂諮詢**: 請透過 IG 私訊或網站預訂頁面表單聯繫
- **合作洽談**: 如有政府機關、法人團體或客家相關活動合作需求，歡迎來訊

---

## 版權聲明

© 2026 桃客大溪 × AI 創意行銷公司 × 中原大學資訊管理系

本網站所有內容、品牌識別、劇情 IP 及視覺設計均受著作權法保護，未經授權不得轉載或挪用。

---

> *「我們賣的，不是解謎，是一個家庭共同完成一件事的記憶。而那段記憶，將比豆干更香，比謎題更難忘。」*
>
> — 桃客大溪
