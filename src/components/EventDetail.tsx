
import { motion } from "motion/react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Gift, Ticket, Users, Calendar, MapPin, Star, Sparkles, Heart } from "lucide-react";

const FallingPetals = ({ color = "bg-white/60" }) => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
    {[...Array(12)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ y: -20, x: Math.random() * 800, opacity: 0, rotate: 0 }}
        animate={{ 
          y: 600, 
          x: (Math.random() * 800) + (Math.random() * 100 - 50),
          opacity: [0, 1, 1, 0],
          rotate: 360 
        }}
        transition={{ 
          duration: 6 + Math.random() * 8, 
          repeat: Infinity, 
          delay: Math.random() * 10,
          ease: "linear"
        }}
        className={`absolute w-3 h-3 ${color} rounded-full blur-[1px]`}
        style={{ clipPath: 'path("M8 0C8 0 0 4 0 8C0 12 4 16 8 16C12 16 16 12 16 8C16 4 8 0 8 0Z")' }}
      />
    ))}
  </div>
);

export const EventDetail = () => {
  const { id } = useParams();

  // Mock event data
  const eventDetails: any = {
    "0-0": {
      name: "客家五月雪：把春天撿起來！",
      slogan: "「跟著桐花盛開，展開春日客庄冒險」",
      period: "4月底至5月中旬",
      desc: "每年春末初夏，大溪與龍潭山區的油桐花盛開，雪白花瓣覆蓋步道，帶領親子家庭走入客庄山林，感受自然的魅力。",
      longDesc: "五月是大溪與龍潭最浪漫的季節。白色的油桐花如雪片般飄落在蜿蜒的古道上，這不僅是自然的饗宴，更是一段被時光封存的旋律。在此特製的冒險中，您將在雪白步伐下尋找隱藏的客家故事。",
      img: "/客家五月雪.png",
      type: "春季限定",
      difficulty: "★★☆☆☆",
      diffNote: "親子共遊極力推薦!",
      location: "三坑鐵馬道&客家文化館",
      highlights: [
        "白色桐花花瓣飄落，如偶像劇般的浪漫步道體驗",
        "春日山林綠色＋米白色的療癒視覺氛圍",
        "超療癒的親子手作體驗!!"
      ],
      limitedEvent: {
        title: "限定活動：把春天撿起來！帶走一份浪漫的旅行記憶",
        content: "我們準備了超療癒的親子手作體驗！\n\n在探險路上，地上的白色油桐花就像天上落下的五月雪一樣!!\n別只是路過！帶上我們準備的紙板，和孩子一起畫下可愛的小花瓶\n戳個洞，把掉落的油桐花撿起輕輕插入～\n這不只是一份紀念品，更是你們在大溪留下的溫暖時光\n\n快來走訪三坑鐵馬道與桃園客家文化館的油桐花列車，和孩子一起動手吧！",
        image: "/油桐花花瓶.jpg"
      }
    },
    "0-1": {
      name: "九月雪：韭菜花季",
      slogan: "「走進純白花海，探索秋日限定的大溪風景」",
      period: "8月底至9月中旬",
      desc: "秋季限定的純白韭菜花海。結合農村故事、在地文化與拍照打卡體驗，在秋日風景中感受客庄慢旅的魅力。",
      longDesc: "當九月的風吹過大漢溪畔，三坑的田野便覆蓋上了一層薄薄的「雪」。這是韭菜花綻放的時刻，也是一段關於農村耕作與土地情感的故事開端。在此任務中，您將穿梭於花海之間，解開隱藏在農村生活細節中的謎題。",
      img: "/九月雪 韭菜花季.png",
      type: "秋季限定",
      difficulty: "★★★☆☆",
      diffNote: "推薦親子玩家",
      location: "三坑鐵馬道",
      highlights: [
        "九月限定純白花海拍照打卡熱點",
        "結合農村故事與耕作文化的地景解謎",
        "如下雪般的花瓣飄落的浪漫體驗"
      ]
    },
    "0-2": {
      name: "大龍門鱻漫遊",
      slogan: "「跟著河流與美食，展開夏日水岸冒險」",
      period: "10月中下旬",
      desc: "結合大溪、龍潭與石門周邊特色景點。透過期間限定任務、美食探索與在地故事，感受桃園山水交織的夏日魅力。",
      longDesc: "結合大溪、龍潭與石門周邊特色景點。透過期間限定任務、美食探索與在地故事，帶領旅客感受桃園山水與客庄文化交織的夏日魅力。解鎖關於水岸、美食與河流交織的動人傳說。",
      img: "/大龍門鱻漫遊.png",
      type: "夏季限定",
      difficulty: "★★★★☆",
      diffNote: "推薦青少年以上玩家",
      location: "石門大草坪&三坑自然生態公園",
      highlights: [
        "湖水藍與木頭色交織的夏日戶外感",
        "石門水庫活魚文化與水岸美食探索",
        "引領地圖航線動畫與互動水波紋視覺"
      ]
    },
  };

  const event = eventDetails[id || "0-0"] || eventDetails["0-0"];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-hakka-cream selection:bg-hakka-red/20 font-sans">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_380px] gap-16">
        
        {/* Main Content */}
        <div className="space-y-12">
          <Link to="/events" className="inline-flex items-center gap-2 text-hakka-red font-bold hover:translate-x-1 transition-transform bg-white px-6 py-3 rounded-full shadow-sm w-fit">
            <ArrowLeft className="w-5 h-5" /> 返回主題活動
          </Link>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[4rem] overflow-hidden bg-white shadow-2xl border border-hakka-gold/10"
          >
            <div className="aspect-video relative overflow-hidden">
               { (event.name.includes("五月雪") || event.name.includes("九月雪")) && <FallingPetals /> }
               <img src={event.img} className="w-full h-full object-cover" alt={event.name} />
               <div className="absolute top-8 left-8 bg-hakka-red text-white px-6 py-2 rounded-full font-bold shadow-xl">
                  {event.type}
               </div>
            </div>
            <div className="p-8 md:p-12 space-y-8">
              <div className="flex items-center gap-4 text-hakka-red font-bold tracking-widest text-sm md:text-base">
                 <Calendar className="w-6 h-6" /> {event.period}
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-serif text-hakka-brown font-black leading-tight mb-4">
                  {event.name}
                </h1>
                <p className="text-lg font-bold text-hakka-gold italic mb-6">{event.slogan}</p>
              </div>
              <p className="text-xl text-slate-600 leading-relaxed font-medium">
                 {event.longDesc || event.desc}
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 pt-8">
                <div className="p-6 bg-hakka-cream/50 rounded-3xl border border-hakka-gold/10">
                    <MapPin className="text-hakka-red w-8 h-8 mb-4" />
                    <h4 className="font-bold text-hakka-brown mb-2">活動地點</h4>
                    <p className="text-sm text-slate-500">{event.location || "大溪指定區域"}</p>
                 </div>
                 <div className="p-6 bg-hakka-cream/50 rounded-3xl border border-hakka-gold/10">
                    <Star className="text-hakka-gold w-8 h-8 mb-4" />
                    <h4 className="font-bold text-hakka-brown mb-2">挑戰難度</h4>
                    <p className="text-sm text-slate-500">{event.difficulty} ({event.diffNote})</p>
                 </div>
              </div>
            </div>
          </motion.div>
          
          <div className="bg-white rounded-[4rem] p-8 md:p-12 space-y-8 border border-hakka-gold/10 shadow-xl">
             <h2 className="text-3xl font-serif text-hakka-brown font-black flex items-center gap-3">
                <Sparkles className="text-hakka-gold" /> 活動亮點
             </h2>
             <ul className="space-y-6 text-slate-600">
                {(event.highlights || []).map((h: string, i: number) => (
                  <li key={i} className="flex gap-4 items-start">
                     <div className="w-8 h-8 rounded-xl bg-hakka-red/10 text-hakka-red flex items-center justify-center shrink-0 font-bold">{i + 1}</div>
                     <p className="text-lg">{h}</p>
                  </li>
                ))}
             </ul>
          </div>

          {event.limitedEvent && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[4rem] overflow-hidden border-2 border-hakka-gold/30 shadow-2xl relative"
            >
               <div className="absolute top-0 right-0 w-64 h-64 bg-rose-50/50 blur-[80px] rounded-full -z-10" />
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-hakka-gold/5 blur-[80px] rounded-full -z-10" />
               
               <div className="grid md:grid-cols-2">
                  <div className="p-8 md:p-14 space-y-8 flex flex-col justify-center">
                     <div className="flex items-center gap-3">
                        <div className="bg-hakka-red/10 text-hakka-red px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                           <Gift className="w-4 h-4" /> 限定活動
                        </div>
                        <div className="bg-rose-100 text-rose-500 px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                           <Heart className="w-4 h-4" /> 親子推薦
                        </div>
                     </div>
                     
                     <h2 className="text-3xl md:text-4xl font-serif text-hakka-brown font-black leading-tight">
                        {event.limitedEvent.title}
                     </h2>
                     
                     <div className="text-lg text-slate-600 leading-relaxed space-y-6 whitespace-pre-wrap font-medium">
                        {event.limitedEvent.content.split('\n\n').map((para, i) => (
                          <p key={i}>{para}</p>
                        ))}
                     </div>
                     
                     <div className="pt-4 flex items-center gap-4 text-hakka-red font-black italic border-t border-slate-100 pt-8">
                        <Sparkles className="w-6 h-6 animate-pulse" />
                        跟隨桐花的指引，一起帶走這份美好。
                     </div>
                  </div>
                  
                  <div className="relative min-h-[500px] flex items-center justify-center p-8 bg-hakka-cream/10">
                     <div className="relative w-full aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white rotate-[2deg] hover:rotate-0 transition-transform duration-700">
                        <img src={event.limitedEvent.image} className="w-full h-full object-cover" alt="Limited event" />
                        <div className="absolute inset-0 bg-gradient-to-t from-hakka-brown/30 to-transparent" />
                     </div>
                     {/* Decorative Elements */}
                     <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-4 -right-4 w-24 h-24 border-2 border-dashed border-hakka-gold/30 rounded-full" 
                     />
                  </div>
               </div>
            </motion.div>
          )}
        </div>

        {/* Sticky Sidebar */}
        <aside className="relative">
          <div className="sticky top-32 space-y-6">
            {/* Promo Cards */}
            <div className="bg-white rounded-[3rem] p-8 shadow-2xl border border-hakka-gold/20 space-y-6">
               <h3 className="text-xl font-serif text-hakka-brown font-bold flex items-center gap-2 border-b border-slate-100 pb-4">
                  <Ticket className="text-hakka-red" /> 優惠推薦
               </h3>
               
               <div className="space-y-4">
                  <div className="flex gap-4 p-4 rounded-2xl bg-hakka-red/5 border border-hakka-red/10">
                     <Users className="text-hakka-red shrink-0" />
                     <div>
                        <p className="font-bold text-hakka-red text-sm">四人同行一人免費</p>
                        <p className="text-xs text-slate-500">團體最划算，親子好友跨步走。</p>
                     </div>
                  </div>

                  <div className="flex gap-4 p-4 rounded-2xl bg-hakka-gold/5 border border-hakka-gold/10">
                     <Gift className="text-hakka-gold shrink-0" />
                     <div>
                        <p className="font-bold text-hakka-gold text-sm">新版預購早鳥價 $899</p>
                        <p className="text-xs text-slate-500">新版上線前30天預購享超值優惠。</p>
                     </div>
                  </div>

                  <div className="flex gap-4 p-4 rounded-2xl bg-hakka-green/5 border border-hakka-green/10">
                     <Sparkles className="text-hakka-green shrink-0" />
                     <div>
                        <p className="font-bold text-hakka-green text-sm">節日限定驚喜</p>
                        <p className="text-xs text-slate-500">搭配節慶紀念品，數量有限。</p>
                     </div>
                  </div>
               </div>

               <Link to="/booking" className="btn-primary w-full py-5 text-lg flex items-center justify-center gap-2 shadow-[0_10px_20px_-10px_rgba(166,75,42,0.5)]">
                  立即報名參加
               </Link>
            </div>

            <div className="bg-hakka-brown p-8 rounded-[3rem] text-white">
               <p className="text-sm opacity-60 mb-2 uppercase tracking-widest font-bold">Need Help?</p>
               <p className="font-serif text-lg mb-4">有任何疑問嗎？</p>
               <a href="https://line.me/R/ti/p/@275oznqg" target="_blank" rel="noopener noreferrer" className="text-hakka-gold font-bold hover:underline">聯繫 LINE 客服 →</a>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
};
