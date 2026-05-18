import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft, Puzzle, Users, Utensils, Smartphone, Sparkles, MapPin, Key, Palette, Circle, Layers, Droplets, Type } from "lucide-react";

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
  return (
    <div className="min-h-screen bg-hakka-cream selection:bg-hakka-red/20 relative">
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-0 relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 text-hakka-red font-bold hover:translate-x-1 transition-transform">
          <ArrowLeft className="w-5 h-5" /> 返回首頁
        </Link>
      </div>

      {/* 1. Banner Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/大溪老街.jpg" 
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
              src="/logo.png" 
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
                className="text-4xl md:text-8xl font-serif font-black text-hakka-brown mb-8 tracking-tight"
                style={{ marginLeft: '0px', marginBottom: '32px', marginTop: '-22px' }}
              >
                認識桃客大溪
              </h1>
              <p className="text-xl md:text-3xl text-hakka-red font-bold tracking-normal mb-6 drop-shadow-sm px-4">
                「以客家文化為世界觀的<br className="block md:hidden" />親子實境解謎旅程」
              </p>
              <p className="text-lg md:text-xl text-slate-700 font-medium max-w-2xl mx-auto leading-relaxed px-4">
                讓旅行，不只是走訪，<br className="block md:hidden" />而是一場共同完成的冒險。
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
            <h2 className="text-4xl md:text-5xl font-serif font-black text-hakka-brown">桃客大溪是什麼？</h2>
            <div className="space-y-6 text-xl text-slate-600 leading-relaxed font-medium">
              <p>
                桃客大溪是一個結合「<span className="text-hakka-red">客家文化</span>」、「<span className="text-hakka-red">親子旅遊</span>」與「<span className="text-hakka-red">實境解謎</span>」的沉浸式一日遊品牌。
              </p>
              <p>
                我們以桃園大溪與龍潭為舞台，串聯在地景點、美食與文化故事，透過互動任務與解謎體驗，讓旅客在探索中認識客家文化，也留下屬於家庭與朋友之間的共同回憶。
              </p>
              <p className="border-l-4 border-hakka-gold pl-6 py-2 italic text-hakka-brown">
                我們相信，文化不該只是被閱讀，而是能被親身感受與體驗。
              </p>
            </div>
          </motion.div>
          <div className="relative">
            <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white">
              <img src="/大家一起看地圖.jpg" alt="Adventure" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-10 -left-10 w-[162.991px] h-[162.991px] bg-hakka-gold rounded-full flex items-center justify-center text-hakka-brown font-black text-center p-6 shadow-xl rotate-[-10deg] border-4 border-white text-[18px]">
              沉浸式共同探索
            </div>
          </div>
        </section>

        {/* 3. Brand Features */}
        <section className="mb-40">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Puzzle />, title: "實境解謎", desc: "跟著線索探索大溪故事", to: "/puzzle" },
              { icon: <Users />, title: "親子共玩", desc: "適合家庭一起參與挑戰", to: "/bonding", state: { highlightFamily: true } },
              { icon: <Utensils />, title: "在地文化", desc: "結合客家美食與歷史景點", to: "/food" },
              { icon: <Smartphone />, title: "APP互動", desc: "自由探索，不受導覽限制", to: "/puzzle", state: { scrollToMethod: true } }
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
          <div style={{ width: '1012.01px', height: '61.9769px', paddingLeft: '24px', paddingRight: '24px', marginLeft: '100px', marginBottom: '0px', marginTop: '11px', marginRight: '0px' }} className="text-center mb-24 px-6 max-md:mb-[66px] flex flex-col justify-center">
            <h2 style={{ marginBottom: '17px' }} className="text-4xl md:text-5xl font-serif font-black text-hakka-brown mb-6">Logo 設計理念</h2>
            <p className="text-hakka-red font-bold tracking-widest uppercase max-md:h-[20.9931px]">符號背後的文化密碼</p>
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
                <img src="/logo.png" alt="Logo" className="w-60 h-60 object-contain drop-shadow-xl" />
                <div className="absolute inset-0 rounded-full bg-hakka-red/5 animate-pulse"></div>
              </motion.div>

              {/* Nodes */}
              <div className="absolute inset-0 pointer-events-none">
                <MindMapNode 
                  position="top-[22%] left-[17%]" 
                  title="圓形基礎" 
                  color="hakka-brown" 
                  delay={0.1} 
                  icon={<Circle className="w-5 h-5" />}
                  style={{ paddingLeft: "24px", marginLeft: "-40px", marginRight: "56px" }}
                >
                  以圓形象徵「團結」、「圓滿」與「旅程的完整性」，代表家庭在冒險中的情感連結。
                </MindMapNode>
                <MindMapNode 
                  position="top-[22%] right-[17%]" 
                  title="桃子與葉片" 
                  color="hakka-red" 
                  delay={0.2} 
                  icon={<Droplets className="w-5 h-5" />}
                  style={{ paddingTop: "24px", marginLeft: "56px", paddingLeft: "27px", marginRight: "-45px", paddingRight: "24px" }}
                >
                  融入桃園在地特色，展現自然的生命力與對這片土地的深厚情感。
                </MindMapNode>
                <MindMapNode position="top-[15%] left-1/2 -translate-x-1/2" title="鑰匙孔造型" color="hakka-gold" delay={0.3} icon={<Key className="w-5 h-5" />}>
                  象徵解謎與探索精神，引領旅客開啟埋藏在老街中的客家故事。
                </MindMapNode>
                <MindMapNode 
                  position="bottom-[22%] left-[17%]" 
                  title="拱橋與流線" 
                  color="hakka-brown" 
                  delay={0.4} 
                  icon={<Layers className="w-5 h-5" />}
                  style={{ paddingTop: "24px", marginLeft: "-50px", marginRight: "49px" }}
                >
                  靈感源自大溪老街巴洛克建築與大漢溪，勾勒出當地的人文歷史意象。
                </MindMapNode>
                <MindMapNode 
                  position="bottom-[22%] right-[17%]" 
                  title="古樸紅棕色" 
                  color="hakka-red" 
                  delay={0.5} 
                  icon={<Palette className="w-5 h-5" />}
                  style={{ paddingTop: "24px", paddingBottom: "24px", marginRight: "-50px", marginLeft: "50px" }}
                >
                  選用象徵土地、歷史記憶的色調，展現客家文化的厚實度與溫度。
                </MindMapNode>
                <MindMapNode position="bottom-[15%] left-1/2 -translate-x-1/2" title="圓潤字體" color="hakka-brown" delay={0.6} icon={<Type className="w-5 h-5" />}>
                  採用簡潔圓潤的風格，完美傳達出親子友善與品牌溫馨的冒險調性。
                </MindMapNode>
              </div>
            </div>

            {/* Mobile/Tablet View: Interactive Grid of Cards */}
            <div className="lg:hidden flex flex-col items-center gap-12 px-4 max-md:w-[308.785px] max-md:h-[1387.5px]">
              <div className="relative w-56 h-56 md:w-72 md:h-72 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-hakka-gold/10">
                <img src="/logo.png" alt="Logo" className="w-40 md:w-56 h-40 md:h-56 object-contain" />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 w-full">
                {[
                  { title: "圓形基礎", color: "border-hakka-brown", desc: "以圓形象徵「團結」、「圓滿」與「旅程的完整性」，代表家庭在冒險中的情感連結。", icon: <Circle className="w-6 h-6" /> },
                  { title: "桃子與葉片", color: "border-hakka-red", desc: "融入桃園在地特色，展現自然的生命力與對這片土地的深厚情感。", icon: <Droplets className="w-6 h-6" /> },
                  { title: "鑰匙孔造型", color: "border-hakka-gold", desc: "象徵解謎與探索精神，引領旅客開啟埋藏在老街中的客家故事。", icon: <Key className="w-6 h-6" /> },
                  { title: "拱橋與流線", color: "border-hakka-brown", desc: "靈感源自大溪老街巴洛克建築與大漢溪，勾勒出當地的人文歷史意象。", icon: <Layers className="w-6 h-6" /> },
                  { title: "古樸紅棕色", color: "border-hakka-red", desc: "選用象徵土地、歷史記憶的色調，展現客家文化的厚實度與溫度。", icon: <Palette className="w-6 h-6" /> },
                  { title: "圓潤字體", color: "border-hakka-brown", desc: "採用簡潔圓潤的風格，完美傳達出親子友善與品牌溫馨的冒險調性。", icon: <Type className="w-6 h-6" /> }
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
          <h2 className="text-4xl md:text-5xl font-serif font-black text-hakka-brown mb-10 px-6">我們想帶來的，不只是旅行</h2>
          <div className="space-y-8 text-xl text-slate-600 leading-relaxed font-medium px-6">
             <p>
               桃客大溪希望透過創新的旅遊方式，讓更多人重新認識桃園的客家文化。
             </p>
             <p>
               我們期待，每一場解謎旅程，都能成為家人、朋友之間最真實且難忘的共同回憶。
             </p>
          </div>
        </section>

        {/* 6. Page Footer CTA */}
        <div className="p-16 md:p-32 bg-hakka-brown rounded-[4rem] text-white text-center relative overflow-hidden group shadow-2xl">
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/rice-paper.png')]"></div>
           <div className="absolute top-0 right-0 w-96 h-96 bg-hakka-gold/10 blur-[100px] rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
           
           <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-3xl md:text-6xl font-serif mb-12 font-black leading-tight max-md:text-[25px] max-md:w-[228.806px]">
                準備好<br className="block md:hidden" />開始您的冒險了嗎？
              </h2>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Link 
                  to="/booking" 
                  className="px-10 md:px-16 py-6 md:py-8 bg-hakka-gold text-hakka-brown rounded-full font-black text-xl md:text-3xl hover:scale-110 active:scale-95 transition-all shadow-[0_20px_50px_rgba(212,175,55,0.3)] hover:bg-white flex items-center gap-4 md:gap-6 text-center justify-center max-md:w-[203.806px]"
                >
                   <span className="block">
                     立即開啟<br className="block md:hidden" />冒險旅程
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

