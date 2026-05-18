import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles, Calendar, Wind, ArrowRight } from "lucide-react";

const FallingPetals = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ y: -20, x: Math.random() * 300, opacity: 0, rotate: 0 }}
        animate={{ 
          y: 400, 
          x: (Math.random() * 300) + (Math.random() * 50 - 25),
          opacity: [0, 1, 1, 0],
          rotate: 360 
        }}
        transition={{ 
          duration: 5 + Math.random() * 5, 
          repeat: Infinity, 
          delay: Math.random() * 5,
          ease: "linear"
        }}
        className="absolute w-4 h-4 bg-white/60 rounded-full blur-[1px]"
        style={{ clipPath: 'path("M8 0C8 0 0 4 0 8C0 12 4 16 8 16C12 16 16 12 16 8C16 4 8 0 8 0Z")' }}
      />
    ))}
  </div>
);

export const Events = () => {
  const categories = [
    {
      title: "期間限定：大溪四季之謎",
      subtitle: "「跟著季節，解鎖不同的大溪故事」",
      events: [
          {
          name: "客家五月雪：把春天撿起來！",
          slogan: "「跟著桐花盛開，展開春日客庄冒險」",
          period: "4月底至5月中旬",
          desc: "每年春末初夏，大溪與龍潭山區的油桐花盛開，雪白花瓣覆蓋步道，帶領親子家庭走入客庄山林，感受自然的魅力。",
          tag: "季節冒險",
          seasonTag: "春季限定",
          badge: "限定任務",
          color: "bg-white",
          accentColor: "text-rose-400",
          img: "/客家五月雪.png"
        },
        {
          name: "九月雪：韭菜花季",
          slogan: "「走進純白花海，探索秋日限定的大溪風景」",
          period: "8月底至9月中旬",
          desc: "秋季限定的純白韭菜花海。結合農村故事、在地文化與拍照打卡體驗，在秋日風景中感受客庄慢旅的魅力。",
          tag: "期間限定",
          seasonTag: "秋季限定",
          badge: "地景探索",
          color: "bg-yellow-50/30",
          accentColor: "text-amber-500",
          img: "/九月雪 韭菜花季.png"
        },
        {
          name: "大龍門鱻漫遊",
          slogan: "「跟著河流與美食，展開夏日水岸冒險」",
          period: "10月中下旬",
          desc: "結合大溪、龍潭與石門周邊特色景點。透過期間限定任務、美食探索與在地故事，感受桃園山水交織的夏日魅力。",
          tag: "季節性任務",
          seasonTag: "夏季限定",
          badge: "水岸解謎",
          color: "bg-sky-50/30",
          accentColor: "text-sky-600",
          img: "/大龍門鱻漫遊.png"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-hakka-cream selection:bg-hakka-red/20 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6 border border-hakka-gold/10"
          >
            <Sparkles className="w-4 h-4 text-hakka-gold" />
            <span className="text-xs font-bold text-hakka-red tracking-[0.2em] uppercase">Season Adventures</span>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-serif text-hakka-brown font-black mb-6">期間限定主題活動</h1>
          <p className="text-xl text-slate-600 font-medium">「跟著季節，解鎖不同的大溪故事」</p>
        </header>

        <Link to="/" className="inline-flex items-center gap-2 text-hakka-red font-bold mb-12 hover:translate-x-1 transition-transform bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm">
          <ArrowLeft className="w-5 h-5" /> 返回首頁
        </Link>

        {categories.map((cat, cIdx) => (
          <section key={cIdx} className="mb-32">
            <div className="mb-12">
              <h2 className="text-4xl font-serif text-hakka-brown font-black mb-3 flex items-center gap-4">
                <Sparkles className="text-hakka-gold w-10 h-10" /> {cat.title}
              </h2>
              <p className="text-hakka-red font-bold ml-14">{cat.subtitle}</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {cat.events.map((event: any, eIdx) => (
                <motion.div 
                  key={eIdx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`rounded-[3rem] overflow-hidden border border-hakka-gold/10 shadow-xl group hover:shadow-2xl transition-all relative ${event.color}`}
                >
                  { (event.name.includes("客家五月雪") || event.name.includes("九月雪")) && <FallingPetals /> }
                  <div className="aspect-[4/3] relative overflow-hidden">
                     <img src={event.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={event.name} />
                     {event.name === "大龍門鱻漫遊" && (
                       <div className="absolute inset-0 bg-sky-400/0 group-hover:bg-sky-400/10 transition-colors pointer-events-none flex items-center justify-center">
                          <div className="w-0 h-0 group-hover:w-64 group-hover:h-64 border-4 border-white/20 rounded-full transition-all duration-1000 animate-ping" />
                       </div>
                     )}
                     <div className="absolute top-6 left-6 flex gap-2">
                        <div className="bg-white/90 backdrop-blur-md text-hakka-brown px-4 py-1.5 rounded-full text-xs font-black shadow-lg flex items-center gap-1.5">
                           <Calendar className="w-3 h-3" /> {event.seasonTag}
                        </div>
                        <div className={`bg-hakka-red text-white px-4 py-1.5 rounded-full text-xs font-black shadow-lg`}>
                           {event.tag}
                        </div>
                     </div>
                     <div className="absolute bottom-6 right-6 bg-hakka-gold text-hakka-brown px-4 py-1.5 rounded-full text-[10px] font-black shadow-lg uppercase tracking-widest border border-white/20">
                        {event.badge}
                     </div>
                  </div>
                  <div className="p-8 space-y-4">
                    <div className={`text-xs font-black tracking-widest uppercase flex items-center gap-2 ${event.accentColor}`}>
                       <Wind className="w-4 h-4" /> {event.period}
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif text-hakka-brown group-hover:text-hakka-red transition-colors mb-1">{event.name}</h3>
                      <p className="text-sm font-bold text-hakka-gold italic">{event.slogan}</p>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                      {event.desc}
                    </p>
                    <div className="pt-4">
                      <Link to={`/event-detail/${cIdx}-${eIdx}`} className="inline-flex items-center gap-2 text-hakka-red font-bold group/btn bg-hakka-red/5 px-6 py-3 rounded-2xl hover:bg-hakka-red hover:text-white transition-all">
                         立即探索 <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        ))}

        <div className="bg-hakka-brown p-16 rounded-[4rem] text-white overflow-hidden relative">
           <img src="https://www.transparenttextures.com/patterns/rice-paper.png" className="absolute inset-0 opacity-10 pointer-events-none" />
           <div className="relative z-10 flex flex-col items-center text-center">
              <Wind className="w-16 h-16 text-hakka-gold mb-8 animate-pulse" />
              <h2 className="text-4xl font-serif font-black mb-6">客家文化，四季皆美</h2>
              <p className="max-w-2xl text-lg opacity-80 mb-12">
                每一次花開、每一場祭典，都是大溪與龍潭最鮮活的記憶展演。無論何時造訪，都有一份獨特的文化謎題在等待您解開。
              </p>
              <div className="flex gap-4">
                <Link to="/booking" className="btn-primary px-12 py-4">搶先預約冒險</Link>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
