import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft, Puzzle, Users, Utensils, Smartphone, Sparkles, MapPin, Key, Palette, Circle, Layers, Droplets, Type } from "lucide-react";
import { useTranslation } from "../App";

const MindMapNode = ({ position, title, children, color, delay, icon, style }: any) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className={`absolute ${position} w-[280px] pointer-events-auto`}
  >
    <div 
      style={style}
      className={`bg-white p-6 rounded-3xl shadow-xl border-l-8 ${color === 'hakka-brown' ? 'border-hakka-brown' : color === 'hakka-red' ? 'border-hakka-red' : 'border-hakka-gold'} hover:scale-105 transition-transform group text-left`}
    >
      <h4 className={`text-xl font-bold mb-2 flex items-center gap-2 ${color === 'hakka-brown' ? 'text-hakka-brown' : color === 'hakka-red' ? 'text-hakka-red' : 'text-hakka-gold'}`}>
        {icon} {title}
      </h4>
      <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-700 transition-colors">
        {children}
      </p>
    </div>
  </motion.div>
);

export const About = () => {
  const { t, lang } = useTranslation();

  const pageTranslations: any = {
    "zh-TW": {
      mm_circle_title: "圓形基礎",
      mm_circle_desc: "以圓形象徵「團結」、「圓滿」與「旅程的完整性」，代表家庭在冒險中的情感連結。",
      mm_peach_title: "桃子與葉片",
      mm_peach_desc: "融入桃園在地特色，展現自然的生命力與對這片土地的深厚情感。",
      mm_key_title: "鑰匙孔造型",
      mm_key_desc: "象徵解謎與探索精神，引領旅客開啟埋藏在老街中的客家故事。",
      mm_bridge_title: "拱橋與流線",
      mm_bridge_desc: "靈感源自大溪老街巴洛克建築與大漢溪，勾勒出當地的人文歷史意象。",
      mm_color_title: "古樸紅棕色",
      mm_color_desc: "選用象徵土地、歷史記憶的色調，展現客家文化的厚實度與溫度。",
      mm_font_title: "圓潤字體",
      mm_font_desc: "採用簡潔圓潤的風格，完美傳達出親子友善與品牌溫馨的冒險調性。",
      feat_puzzle: "實境解謎",
      feat_puzzle_desc: "跟著線索探索大溪故事",
      feat_family: "親子共玩",
      feat_family_desc: "適合家庭一起參與挑戰",
      feat_culture: "在地文化",
      feat_culture_desc: "結合客家美食與歷史景點",
      feat_app: "LINE Bot 互動",
      feat_app_desc: "自由探索，不受導覽限制",
      logo_concept: "Logo 設計理念",
      logo_code: "符號背後的文化密碼"
    },
    "zh-CN": {
      mm_circle_title: "圆形基础",
      mm_circle_desc: "以圆形象征“团结”、“圆满”与“旅程的完整性”，代表家庭在冒险中的情感连结。",
      mm_peach_title: "桃子与叶片",
      mm_peach_desc: "融入桃园在地特色，展现自然的生命力与对这片土地的深厚情感。",
      mm_key_title: "钥匙孔造型",
      mm_key_desc: "象征解谜与探索精神，引领旅客开启埋藏在老街中的客家故事。",
      mm_bridge_title: "拱桥与流线",
      mm_bridge_desc: "灵感源自大溪老街巴洛克建筑与大汉溪，勾勒出当地的人文历史意象。",
      mm_color_title: "古朴红棕色",
      mm_color_desc: "选用象征土地、历史记忆的色调，展现客家文化的厚实度与温度。",
      mm_font_title: "圆润字体",
      mm_font_desc: "采用简洁圆润的风格，完美传达出亲子友好与品牌温馨的冒险调性。",
      feat_puzzle: "实境解谜",
      feat_puzzle_desc: "跟着线索探索大溪故事",
      feat_family: "亲子共玩",
      feat_family_desc: "适合家庭一起参与挑战",
      feat_culture: "在地文化",
      feat_culture_desc: "结合客家美食与历史景点",
      feat_app: "LINE Bot 互动",
      feat_app_desc: "自由探索，不受导览限制",
      logo_concept: "Logo 设计理念",
      logo_code: "符号背后的文化密码"
    },
    "en": {
      mm_circle_title: "Circular Base",
      mm_circle_desc: "Symbolizing unity and journey integrity, representing the emotional bond of families.",
      mm_peach_title: "Peach & Leaf",
      mm_peach_desc: "Incorporating local Taoyuan features, showing natural vitality and local love.",
      mm_key_title: "Keyhole Shape",
      mm_key_desc: "Symbolizing the spirit of puzzle-solving, leading travelers to open Hakka stories.",
      mm_bridge_title: "Bridge & Stream",
      mm_bridge_desc: "Inspired by Daxi baroque architecture and Dahan River, outlining human history.",
      mm_color_title: "Rustic Red-Brown",
      mm_color_desc: "Choosing colors of the earth and history to show cultural depth and warmth.",
      mm_font_title: "Rounded Font",
      mm_font_desc: "Using a clean rounded style to convey parent-child friendliness and brand warmth.",
      feat_puzzle: "Real-life Puzzle",
      feat_puzzle_desc: "Follow clues to explore Daxi stories",
      feat_family: "Family Fun",
      feat_family_desc: "Suitable for families to participate in challenges",
      feat_culture: "Local Culture",
      feat_culture_desc: "Combining Hakka food and historic sites",
      feat_app: "LINE Bot Interaction",
      feat_app_desc: "Explore freely without tour guide limits",
      logo_concept: "Logo Concept",
      logo_code: "Cultural Codes Behind Symbols"
    },
    "vi": {
      mm_circle_title: "Nền tảng tròn",
      mm_circle_desc: "Biểu tượng cho sự đoàn kết và trọn vẹn của hành trình, kết nối tình cảm gia đình.",
      mm_peach_title: "Quả đào & Lá",
      mm_peach_desc: "Kết hợp đặc trưng địa phương Taoyuan, thể hiện sức sống tự nhiên.",
      mm_key_title: "Hình lỗ khóa",
      mm_key_desc: "Biểu tượng cho tinh thần giải đố, mở ra những câu chuyện Hakka cổ xưa.",
      mm_bridge_title: "Cầu & Dòng suối",
      mm_bridge_desc: "Lấy cảm hứng từ kiến trúc baroque Daxi và sông Dahan, phác họa lịch sử nhân văn.",
      mm_color_title: "Nâu đỏ mộc mạc",
      mm_color_desc: "Màu sắc của đất và lịch sử, thể hiện sự ấm áp và chiều sâu văn hóa.",
      mm_font_title: "Phông chữ tròn",
      mm_font_desc: "Phong cách bo tròn thân thiện, truyền tải sự ấm áp và tính gia đình của thương hiệu.",
      feat_puzzle: "Giải đố thực tế",
      feat_puzzle_desc: "Theo dấu manh mối khám phá truyện Daxi",
      feat_family: "Cùng chơi gia đình",
      feat_family_desc: "Phù hợp để gia đình cùng tham gia thử thách",
      feat_culture: "Văn hóa địa phương",
      feat_culture_desc: "Kết hợp ẩm thực Hakka và di tích lịch sử",
      feat_app: "Tương tác LINE Bot",
      feat_app_desc: "Tự do khám phá, không giới hạn bởi hướng dẫn",
      logo_concept: "Ý tưởng thiết kế Logo",
      logo_code: "Mã văn hóa đằng sau các ký hiệu"
    }
  };

  const pt = pageTranslations[lang] || pageTranslations["zh-TW"];

  return (
    <div className="min-h-screen bg-hakka-cream selection:bg-hakka-red/20 relative">
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-0 relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 text-hakka-red font-bold hover:translate-x-1 transition-transform">
          <ArrowLeft className="w-5 h-5" /> {t.about_back}
        </Link>
      </div>

      {/* 1. Banner Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/Public/大溪老街.jpg" 
            alt="Daxi Old Street" 
            className="w-full h-full object-cover opacity-40 grayscale-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-hakka-cream/20 via-hakka-cream/60 to-hakka-cream"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl py-20 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full flex flex-col items-center"
          >
            <img 
              src="/Public/logo.png" 
              alt="Logo" 
              className="w-40 md:w-64 mb-12 drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]" 
              style={{ marginTop: '86px' }}
            />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h1 
                className={`font-serif font-black text-hakka-brown mb-8 tracking-tight ${lang === 'en' || lang === 'vi' ? 'text-4xl md:text-7xl' : 'text-4xl md:text-8xl'}`}
                style={{ marginLeft: '0px', marginBottom: '32px', marginTop: '-22px' }}
              >
                {t.about_title}
              </h1>
              <p className="text-xl md:text-3xl text-hakka-red font-bold tracking-normal mb-6 drop-shadow-sm px-4">
                {t.about_slogan.split('<br/>').map((line: string, i: number) => (
                    <span key={i}>{line}{i === 0 && <br className="block md:hidden" />}</span>
                ))}
              </p>
              <p className="text-lg md:text-xl text-slate-700 font-medium max-w-2xl mx-auto leading-relaxed px-4">
                {t.about_intro}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-32 pt-20">
        {/* 2. Brand Introduction */}
        <section className="mb-40 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-black text-hakka-brown">{t.about_what_is}</h2>
            <div className="space-y-6 text-xl text-slate-600 leading-relaxed font-medium">
              <p>{t.about_what_is_p1}</p>
              <p>{t.about_what_is_p2}</p>
              <p className="border-l-4 border-hakka-gold pl-6 py-2 italic text-hakka-brown">
                {t.about_what_is_p3}
              </p>
            </div>
          </motion.div>
          <div className="relative">
            <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white">
              <img src="/Public/大家一起看地圖.jpg" alt="Adventure" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-10 -left-10 w-[162.991px] h-[162.991px] bg-hakka-gold rounded-full flex items-center justify-center text-hakka-brown font-black text-center p-6 shadow-xl rotate-[-10deg] border-4 border-white text-[18px]">
              {t.about_immersive}
            </div>
          </div>
        </section>

        {/* 3. Brand Features */}
        <section className="mb-40">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Puzzle />, title: pt.feat_puzzle, desc: pt.feat_puzzle_desc, to: "/puzzle" },
              { icon: <Users />, title: pt.feat_family, desc: pt.feat_family_desc, to: "/bonding", state: { highlightFamily: true } },
              { icon: <Utensils />, title: pt.feat_culture, desc: pt.feat_culture_desc, to: "/food" },
              { icon: <Smartphone />, title: pt.feat_app, desc: pt.feat_app_desc, to: "/puzzle", state: { scrollToMethod: true } }
            ].map((feature, idx) => (
              <Link key={idx} to={feature.to} state={feature.state} className="block group select-none">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-10 h-full rounded-[3rem] shadow-xl border border-hakka-gold/10 text-center hover:translate-y-[-10px] transition-transform cursor-pointer hover:border-hakka-red/30"
                >
                  <div className="w-16 h-16 bg-hakka-red/5 text-hakka-red rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-hakka-red group-hover:text-white transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-hakka-brown mb-4 group-hover:text-hakka-red transition-colors">{feature.title}</h3>
                  <p className="text-slate-500 font-medium">{feature.desc}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </section>

        {/* 4. Logo Design Concept (Interactive Mind Map) */}
        <section className="mb-40 overflow-hidden">
          <div style={{ width: '1012.01px', height: 'auto', minHeight: '61.9769px', paddingLeft: '24px', paddingRight: '24px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '0px', marginTop: '11px' }} className="text-center mb-24 px-6 max-md:mb-[66px] flex flex-col justify-center">
            <h2 style={{ marginBottom: '17px' }} className="text-4xl md:text-5xl font-serif font-black text-hakka-brown mb-6">{pt.logo_concept}</h2>
            <p className="text-hakka-red font-bold tracking-widest uppercase max-md:h-[20.9931px]">{pt.logo_code}</p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Desktop View: Mind Map */}
            <div style={{ height: '899.989px', width: '1150px' }} className="hidden lg:flex relative items-center justify-center">
              {/* Background Decorative Lines */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 1000 800" fill="none">
                  <path d="M500 400 L390 272" stroke="#8C4A32" strokeWidth="2" strokeDasharray="8 8" />
                  <path d="M500 400 L610 272" stroke="#8C4A32" strokeWidth="2" strokeDasharray="8 8" />
                  <path d="M500 400 L390 528" stroke="#8C4A32" strokeWidth="2" strokeDasharray="8 8" />
                  <path d="M500 400 L610 528" stroke="#8C4A32" strokeWidth="2" strokeDasharray="8 8" />
                  <path d="M500 400 L500 212" stroke="#8C4A32" strokeWidth="2" strokeDasharray="8 8" />
                  <path d="M500 400 L500 588" stroke="#8C4A32" strokeWidth="2" strokeDasharray="8 8" />
                </svg>
              </div>

              {/* Central Logo */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="relative z-20 w-80 h-80 bg-white rounded-full flex items-center justify-center shadow-[0_30px_100px_rgba(140,74,50,0.15)] border-4 border-hakka-gold/20"
              >
                <img src="/Public/logo.png" alt="Logo" className="w-60 h-60 object-contain drop-shadow-xl" />
                <div className="absolute inset-0 rounded-full bg-hakka-red/5 animate-pulse"></div>
              </motion.div>

              {/* Nodes */}
              <div className="absolute inset-0 pointer-events-none">
                <MindMapNode 
                  position="top-[22%] left-[17%]" 
                  title={pt.mm_circle_title} 
                  color="hakka-brown" 
                  delay={0.1} 
                  icon={<Circle className="w-5 h-5" />}
                  style={{ paddingLeft: "24px", marginLeft: "-40px", marginRight: "56px" }}
                >
                  {pt.mm_circle_desc}
                </MindMapNode>
                <MindMapNode 
                  position="top-[22%] right-[17%]" 
                  title={pt.mm_peach_title} 
                  color="hakka-red" 
                  delay={0.2} 
                  icon={<Droplets className="w-5 h-5" />}
                  style={{ paddingTop: "24px", marginLeft: "56px", paddingLeft: "27px", marginRight: "-45px", paddingRight: "24px" }}
                >
                  {pt.mm_peach_desc}
                </MindMapNode>
                <MindMapNode position="top-[15%] left-1/2 -translate-x-1/2" title={pt.mm_key_title} color="hakka-gold" delay={0.3} icon={<Key className="w-5 h-5" />}>
                  {pt.mm_key_desc}
                </MindMapNode>
                <MindMapNode 
                  position="bottom-[22%] left-[17%]" 
                  title={pt.mm_bridge_title} 
                  color="hakka-brown" 
                  delay={0.4} 
                  icon={<Layers className="w-5 h-5" />}
                  style={{ paddingTop: "24px", marginLeft: "-50px", marginRight: "49px" }}
                >
                  {pt.mm_bridge_desc}
                </MindMapNode>
                <MindMapNode 
                  position="bottom-[22%] right-[17%]" 
                  title={pt.mm_color_title} 
                  color="hakka-red" 
                  delay={0.5} 
                  icon={<Palette className="w-5 h-5" />}
                  style={{ paddingTop: "24px", paddingBottom: "24px", marginRight: "-50px", marginLeft: "50px" }}
                >
                  {pt.mm_color_desc}
                </MindMapNode>
                <MindMapNode position="bottom-[15%] left-1/2 -translate-x-1/2" title={pt.mm_font_title} color="hakka-brown" delay={0.6} icon={<Type className="w-5 h-5" />}>
                  {pt.mm_font_desc}
                </MindMapNode>
              </div>
            </div>

            {/* Mobile/Tablet View: Interactive Grid of Cards */}
            <div className="lg:hidden flex flex-col items-center gap-12 px-4 max-md:w-full">
              <div className="relative w-56 h-56 md:w-72 md:h-72 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-hakka-gold/10">
                <img src="/Public/logo.png" alt="Logo" className="w-40 md:w-56 h-40 md:h-56 object-contain" />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 w-full">
                {[
                  { title: pt.mm_circle_title, color: "border-hakka-brown", desc: pt.mm_circle_desc, icon: <Circle className="w-6 h-6" /> },
                  { title: pt.mm_peach_title, color: "border-hakka-red", desc: pt.mm_peach_desc, icon: <Droplets className="w-6 h-6" /> },
                  { title: pt.mm_key_title, color: "border-hakka-gold", desc: pt.mm_key_desc, icon: <Key className="w-6 h-6" /> },
                  { title: pt.mm_bridge_title, color: "border-hakka-brown", desc: pt.mm_bridge_desc, icon: <Layers className="w-6 h-6" /> },
                  { title: pt.mm_color_title, color: "border-hakka-red", desc: pt.mm_color_desc, icon: <Palette className="w-6 h-6" /> },
                  { title: pt.mm_font_title, color: "border-hakka-brown", desc: pt.mm_font_desc, icon: <Type className="w-6 h-6" /> }
                ].map((node, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`bg-white p-6 rounded-3xl shadow-lg border-l-8 ${node.color}`}
                  >
                    <h4 className="text-xl font-bold text-hakka-brown mb-3 flex items-center gap-2">
                      {node.icon} {node.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed">{node.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. Brand Philosophy */}
        <section className="mb-40 text-center max-w-4xl mx-auto flex flex-col items-center">
          <Sparkles 
            className="w-16 h-16 text-hakka-gold mb-8 animate-bounce" 
          />
          <h2 className="text-4xl md:text-5xl font-serif font-black text-hakka-brown mb-10 px-6">{t.about_philosophy_title}</h2>
          <div className="space-y-8 text-xl text-slate-600 leading-relaxed font-medium px-6">
             <p>{t.about_philosophy_p1}</p>
             <p>{t.about_philosophy_p2}</p>
          </div>
        </section>

        {/* 6. Page Footer CTA */}
        <div className="p-16 md:p-32 bg-hakka-brown rounded-[4rem] text-white text-center relative overflow-hidden group shadow-2xl">
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/rice-paper.png')]"></div>
           <div className="absolute top-0 right-0 w-96 h-96 bg-hakka-gold/10 blur-[100px] rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
           
           <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-3xl md:text-6xl font-serif mb-12 font-black leading-tight max-md:text-[25px]">
                {t.about_cta_title}
              </h2>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Link 
                  to="/booking" 
                  className="px-10 md:px-16 py-6 md:py-8 bg-hakka-gold text-hakka-brown rounded-full font-black text-xl md:text-3xl hover:scale-110 active:scale-95 transition-all shadow-[0_20px_50px_rgba(212,175,55,0.3)] hover:bg-white flex items-center gap-4 md:gap-6 text-center justify-center max-md:w-auto"
                >
                   <span className="block italic">
                     {t.about_cta_btn}
                   </span>
                   <Sparkles className="w-6 h-6 md:w-10 md:h-10 text-hakka-brown animate-pulse shrink-0" />
                </Link>
              </motion.div>
           </div>
        </div>
      </div>
    </div>
  );
};

