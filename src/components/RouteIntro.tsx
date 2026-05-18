import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Car, 
  Bus, 
  Bike, 
  BookOpen, 
  Utensils, 
  Layers, 
  Heart,
  Compass,
  ChevronDown,
  ChevronUp
} from "lucide-react";

interface Station {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  summary: string;
  desc: string;
  time: string;
  icon: React.ReactNode;
  highlights: string[];
  imageUrl: string;
  tips: string;
}

export const RouteIntro = () => {
  const [expandedStation, setExpandedStation] = useState<string | null>(null);

  const stations: Station[] = [
    {
      id: "zhongli-meet",
      step: "01",
      title: "中壢火車站（集合出發）",
      subtitle: "🚉 集合接駁・開啟冒險旅程",
      summary: "冒險隊伍熱情集合，領取道具箱與專屬包車，出發前進！",
      desc: "大家於 10:00 AM 前在「中壢火車站」集合，與接待專員會合。領取精美實體線索探索包、解謎道具以及隊伍小手冊。隨後全員登上專屬遊覽包車前往客家文化探險起點，免除轉乘與開車找車位的體力負擔，帶著飽滿的好奇心，一同開啟今日的實境解謎冒險！",
      time: "10:00 AM",
      icon: <MapPin className="w-5 h-5 md:w-6 md:h-6" />,
      highlights: ["中壢車站便攜集合", "領取實體精美道具", "全員包車安心啟程"],
      imageUrl: "/行程景點照片/中壢車站.png",
      tips: "請於 09:50 前抵達集合地點，以確保全體成員順利在 10:00 準時發車喔！"
    },
    {
      id: "sankeng",
      step: "02",
      title: "三坑鐵馬道",
      subtitle: "🚴 水圳・農村・生態體驗",
      summary: "沿著古老水圳展開探索，騎自行車在微風中解鎖第一道客家謎題。",
      desc: "10:40 AM 抵達風景幽靜、平緩安全的三坑鐵馬道，沿途古老的水圳波光粼粼。全家人將換乘協力車/單車，一邊呼吸大自然芬多精，一邊沿著水圳前進。根據手卷與地圖尋找斑駁的地標線索，共同解開客家農家生態與百年水利文化的秘密謎底！",
      time: "10:40 AM",
      icon: <Bike className="w-5 h-5 md:w-6 md:h-6" />,
      highlights: ["悠閒水圳單車行", "綠意裡的尋寶任務", "探尋百年農村水利"],
      imageUrl: "/行程景點照片/三坑鐵馬道.png",
      tips: "我們會統一準備、租乘安全的單車或協力車，讓大家遊玩得安心又省力！"
    },
    {
      id: "daxi-oldstreet",
      step: "03",
      title: "大溪老街",
      subtitle: "🍢 巴洛克街區・美食午餐任務",
      summary: "在繁華迷人的巴洛克牌樓下吃喝，一邊大啖美食一邊探索線索！",
      desc: "12:00 PM 登陸享譽盛名的大溪老街。抬頭欣賞刻有複雜雕花的地標性巴洛克牌樓立面。尋寶隊在這裡要展開好玩又好吃的「美食收集大冒險」，品嚐熱騰騰的滷黑豆干、香Q客家牛汶水麻糬！原來美食的外包裝與地景可以拼出完美契合的下一關解密鑰匙！",
      time: "12:00 PM",
      icon: <Utensils className="w-5 h-5 md:w-6 md:h-6" />,
      highlights: ["巴洛克雕花牌樓巡禮", "大溪經典老阿伯豆干", "感官味蕾與謎題整合"],
      imageUrl: "/大溪老街.jpg",
      tips: "我們為名勝老街留有充足的遊玩與午餐時光，快帶著大家的尋寶食譜出發吧！"
    },
    {
      id: "woodmuseum",
      step: "04",
      title: "大溪木藝生態博物館",
      subtitle: "🪵 傳統木器・匠人工藝考驗",
      summary: "參觀溫潤木造無牆博物館，解構傳統卡榫智慧，揭開歷史真相！",
      desc: "13:30 PM 來到保存大溪傳統歷史的木藝生態博物館群。關卡引導孩子與父母一同觀察不用任何釘子便能緊密接合的「傳統榫卯卡榫」，在精妙無比的歷史大木器房與日式歷史建築中徜徉、解密，破譯木藝匠人的千古智慧！",
      time: "13:30 PM",
      icon: <Layers className="w-5 h-5 md:w-6 md:h-6" />,
      highlights: ["巧奪天工卡榫拆解", "無牆日式老房建築群", "在工藝美學中尋求解答"],
      imageUrl: "/行程景點照片/大溪木藝生態博物館.png",
      tips: "館內藏有許多精緻手工藝展品與木件，動手闖關時記得溫柔對待展館設施喔！"
    },
    {
      id: "hakka-cultural",
      step: "05",
      title: "桃園市客家文化館",
      subtitle: "🎵 影音多媒體・音樂與童趣互動",
      summary: "沉浸在多媒體影音世界裡，在歡樂的客家音樂中解題學客語！",
      desc: "15:00 PM 前進結合音樂與文學藝術的桃園市客家文化館。利用館內豐富的影音互動裝置、童趣感十足的多媒體關卡，全家人攜手破解一系列關於客家歌謠與歷史事蹟的語音謎題，在歡笑好玩的情境中輕鬆學習日常客語！",
      time: "15:00 PM",
      icon: <Compass className="w-5 h-5 md:w-6 md:h-6" />,
      highlights: ["多媒體互動數位解謎", "客家歌謠與文學探索", "童趣無窮的影音體驗"],
      imageUrl: "https://museums.moc.gov.tw/Upload/FrontPhoto/5c5970f0-ce15-4924-9d08-3b7f375b76bf.jpg",
      tips: "展示區擁有很多舒適冷氣房與趣味數位台機，下午造訪再合適不過！"
    },
    {
      id: "literary",
      step: "06",
      title: "鍾肇政文學生活園園區",
      subtitle: "✍️ 文學發源・日式宿舍檜木宿舍群",
      summary: "探訪巨著《魯冰花》寫作故居，在榻榻米檜木香中解讀最後的謎底。",
      desc: "17:00 PM 造訪巨作《魯冰花》誕生地。這裡保留並修復了當年的日式宿舍群建築。全家人漫步在檜木飄香的榻榻米及木廊下，尋找遺留在鍾大師稿紙中的筆觸和情感，將收集的一日答案拼出最後之密！並在現場榮獲專屬徽章！",
      time: "17:00 PM",
      icon: <BookOpen className="w-5 h-5 md:w-6 md:h-6" />,
      highlights: ["魯冰花文學起點", "古典日式木造宿舍群", "終極秘密揭曉與榮譽加冕"],
      imageUrl: "https://images.pexels.com/photos/33083212/pexels-photo-33083212.jpeg?_gl=1*ui41vg*_ga*NjQ5NDc2Njg1LjE3Nzg0MzY3NjM.*_ga_8JE65Q40S6*czE3NzkwMTAwNzkkbzYkZzEkdDE3NzkwMTA5ODIkajMyJGwwJGgw",
      tips: "踏上百年日宿舍群需要穿著襪子入內，請遵守館員參觀指引喔！"
    },
    {
      id: "return",
      step: "07",
      title: "啟程回中壢火車站",
      subtitle: "🚌 回程接駁・精彩交流",
      summary: "登上寬敞舒適的回程包車，輕鬆歇息並交流一整天精彩的冒險回憶。",
      desc: "18:00 PM 闖關成就集滿！大夥在返程的專屬包車上放鬆身心。回顧今日全體無間的配合，在車上看看大家一路闖關留下的搞怪、歡笑全家照，把桃園大溪的美好客家行囊溫馨帶回家！",
      time: "18:00 PM",
      icon: <Bus className="w-5 h-5 md:w-6 md:h-6" />,
      highlights: ["包車返程免去開車疲憊", "旅程冒險故事精彩回首", "夥伴溫情交流分享"],
      imageUrl: "/行程景點照片/遊覽車回程.png",
      tips: "專車預計 30 分鐘即可安全返抵，大夥可以在車上稍作小憩充電。"
    },
    {
      id: "arrive",
      step: "08",
      title: "抵達中壢火車站",
      subtitle: "🚉 滿載而歸・冒險圓滿落幕",
      summary: "大約 18:30 PM 抵達中壢火車站，收穫感動與代際歡笑、完美散會！",
      desc: "18:30 PM 包車安穩將大家送抵出發起點「中壢火車站」，這場融合歷史、美食、木藝卡榫、客語與文學的一日深度探險在暖心的笑容中歡樂成行、圓滿落幕！大人與孩子都在通力協作中看見了彼此更棒的一面！",
      time: "18:30 PM",
      icon: <Clock className="w-5 h-5 md:w-6 md:h-6" />,
      highlights: ["安全返回中壢車站", "帶走充實的文化能量", "永遠封存的親子默契"],
      imageUrl: "/行程景點照片/中壢車站.png",
      tips: "下車時別忘了隨身攜帶您的冒險包道具和特製實體金屬徽章喔，祝大家回程平順！"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 bg-hakka-cream selection:bg-hakka-red/20 text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-hakka-red font-bold mb-12 hover:translate-x-1 transition-transform">
          <ArrowLeft className="w-5 h-5" /> 返回首頁
        </Link>
        
        {/* Header Title Section */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 text-hakka-red font-bold tracking-widest uppercase mb-4"
          >
            <Compass className="w-5 h-5 animate-spin-slow" />
            <span>桃園一日遊・極致親子行程</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-black text-hakka-brown mb-6"
          >
            實境冒險 行程介紹
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium"
          >
            我們為家庭量身規劃了一條「深度文化 x 低疲勞 x 高互動」的解謎時間軸。
            不只是看景點，而是全家在對話與尋找中，與大溪的泥土、古厝、美食寫下共同對話。
          </motion.p>
        </div>

        {/* Highlight Stats / Info Bento */}
        <section className="mb-24 grid md:grid-cols-3 gap-8">
          {[
            { title: "建議出發時間", content: "建議 10:00 從中壢火車站出發，準時發車", icon: <Clock className="text-hakka-red" /> },
            { title: "全程交通服務", content: "全程提供專屬包車交通服務，免除自行開車與轉乘煩憂，輕鬆出行！", icon: <Bus className="text-hakka-green" /> },
            { title: "適合探索對象", content: "親子家庭(👑強力推薦!!)、親友出遊、公司團建，適合所有人同樂", icon: <Heart className="text-hakka-red/80" /> },
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-hakka-gold/15 shadow-md flex items-start gap-4 hover:shadow-xl transition-all"
            >
              <div className="p-3 bg-hakka-cream rounded-2xl shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="font-bold text-hakka-brown text-lg mb-1">{item.title}</h4>
                <p className="text-sm font-medium text-slate-500 leading-relaxed">{item.content}</p>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Timeline / Route Journey Cards */}
        <section className="relative mb-24">
          <h2 className="text-3xl font-serif text-hakka-brown font-black mb-12 text-center flex items-center justify-center gap-2">
            <Sparkles className="w-6 h-6 text-hakka-gold" /> 一日探險時間線 (Timeline)
          </h2>

          {/* Timeline center line for desktop */}
          <div className="absolute left-[30px] lg:left-1/2 top-10 bottom-10 w-0.5 bg-gradient-to-b from-hakka-red/60 via-hakka-gold/60 to-hakka-green/40 hidden md:block"></div>

          <div className="space-y-16">
            {stations.map((station, idx) => {
              const isEven = idx % 2 === 1;
              const isExpanded = expandedStation === station.id;

              return (
                <div 
                  key={station.id}
                  id={`route-${station.id}`}
                  className={`relative flex flex-col md:flex-row items-start lg:items-center justify-between gap-8 md:gap-16 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Left or Right Positioned Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 80 : -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="w-full md:w-[46%] z-10"
                  >
                    <div className="bg-white rounded-[2.5rem] shadow-xl hover:shadow-2xl border-2 border-hakka-red/5 p-6 md:p-8 transition-all group overflow-hidden relative">
                      {/* Accent Corner Badge for Step Number */}
                      <div className="absolute top-0 right-0 bg-hakka-red/10 text-hakka-red font-black text-xl px-5 py-3 rounded-bl-[1.5rem] tracking-widest font-mono">
                        {station.step}
                      </div>

                      {/* Station Icon and Header */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-hakka-cream rounded-2xl text-hakka-red group-hover:scale-110 transition-transform">
                          {station.icon}
                        </div>
                        <div>
                          <span className="text-xs font-black tracking-widest uppercase text-hakka-green">{station.subtitle}</span>
                          <h3 className="text-2xl mt-1 font-serif text-hakka-brown font-black">{station.title}</h3>
                        </div>
                      </div>

                      <p className="text-[15px] font-medium text-slate-500 leading-relaxed mb-4">
                        {station.summary}
                      </p>

                      {/* Display Badges */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {station.highlights.map((h, i) => (
                          <span key={i} className="text-xs font-bold text-hakka-green bg-hakka-green/5 px-3 py-1.5 rounded-full">
                            #{h}
                          </span>
                        ))}
                      </div>

                      {/* Expandable and Link Details */}
                      <div className="h-px bg-slate-100 my-4"></div>

                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-400 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" /> 建議停留：{station.time}
                        </span>

                        <button 
                          onClick={() => setExpandedStation(isExpanded ? null : station.id)}
                          className="px-4 py-2 text-xs font-black text-hakka-red hover:bg-hakka-red/5 rounded-full flex items-center gap-1 cursor-pointer transition-all border border-hakka-red/15 uppercase select-none"
                        >
                          <span>{isExpanded ? "收合內容" : "查看更多"}</span>
                          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>
                      </div>

                      {/* Collapsible Panel */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="pt-6 mt-6 border-t border-dashed border-slate-100">
                              {/* Station Inline Image */}
                              <div className="w-full h-44 rounded-2xl overflow-hidden mb-4 relative">
                                <img src={station.imageUrl} alt={station.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                              </div>
                              <p className="text-sm text-slate-600 leading-relaxed font-medium mb-4">
                                {station.desc}
                              </p>
                              {/* Parent Advisory / Tips */}
                              <div className="bg-hakka-cream/60 p-4 rounded-xl border-l-4 border-hakka-gold text-xs leading-relaxed text-slate-700 font-medium">
                                <p className="font-bold text-hakka-brown mb-1">💡 冒險小叮嚀：</p>
                                {station.tips}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>

                  {/* Desktop Timeline Node Ring */}
                  <div className="absolute left-[30px] lg:left-1/2 -translate-x-[11px] md:-translate-x-[12.5px] w-6 h-6 rounded-full bg-white border-4 border-hakka-red z-20 flex items-center justify-center pointer-events-none">
                    <div className="w-1.5 h-1.5 rounded-full bg-hakka-gold animate-ping"></div>
                  </div>

                  {/* Empty Spacer on other side for desktop */}
                  <div className="hidden md:block w-[46%]"></div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Transportation Guide Card */}
        <section className="mb-24 bg-white p-10 md:p-16 rounded-[4.5rem] border border-hakka-gold/15 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-hakka-gold/5 rounded-bl-[8rem] pointer-events-none"></div>
          
          <h3 className="text-3xl font-serif text-hakka-brown font-black mb-8 flex items-center gap-2">
            🚌 集合與全程包車服務 (Assembly & Shuttle Service)
          </h3>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-hakka-red/10 h-11 w-11 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="text-hakka-red h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-800 text-lg mb-2">準時抵達集合點</h4>
                  <p className="text-[14px] text-slate-500 font-medium leading-relaxed">
                    參與者只需在集合時間（建議 10:00 AM 前）自行抵達出發起點「中壢火車站」集合。現場將有活動接待人員為您發分實體線索探險包與道具包。
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-hakka-green/10 h-11 w-11 rounded-xl flex items-center justify-center shrink-0">
                  <Bus className="text-hakka-green h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-800 text-lg mb-2">全程專屬包車服務</h4>
                  <p className="text-[14px] text-slate-500 font-medium leading-relaxed">
                    行程中各景點間的移動皆由大會統一安排專屬包車接送。參與者集體行動，免除開車、導航與轉乘找車位的疲勞，讓整趟冒險旅途倍感輕鬆、安全又愜意！
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-hakka-cream/40 p-8 rounded-[2.5rem] border border-hakka-gold/10 flex flex-col justify-center">
              <h4 className="font-serif text-lg text-hakka-brown font-extrabold mb-3 flex items-center gap-1.5">
                <Heart className="w-5 h-5 text-hakka-red animate-pulse" /> 全程省心，全神貫注享受陪伴
              </h4>
              <p className="text-[14px] text-slate-600 font-medium leading-relaxed">
                有別於行色匆匆的傳統走馬看花或繁瑣的自由行規劃。我們為您承包全程所有的交通移動服務與道具指引。全家或親友在車上能輕鬆交流、小憩，隨後帶著最飽滿的精力前進景點，全神貫注於實境解謎的情感協作與探索樂趣！
              </p>
            </div>
          </div>
        </section>

        {/* Dynamic CTA Outro */}
        <section className="bg-hakka-brown rounded-[4rem] text-white p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#FFF_1px,transparent_1px)] [background-size:24px_24px]"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <Sparkles className="text-hakka-gold h-12 w-12 md:h-16 md:w-16 mb-6 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-serif font-black mb-6">「不是大人等小孩，是全家一起解謎！」</h2>
            <p className="text-sm md:text-base text-white/80 leading-relaxed font-bold mb-10">
              透過互動任務與文化探索，創造屬於家庭的共同回憶。現在就預訂冒險旅程，為週末刻下一段難忘的歡笑旅程！
            </p>
            
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                <Link 
                  to="/booking" 
                  className="btn-primary py-4 px-10 text-lg font-black text-white hover:scale-105 transition-transform shadow-2xl flex items-center justify-center gap-2 cursor-pointer border border-white/10"
                >
                  <span>立即預約冒險</span> <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/puzzle" 
                  className="py-4 px-10 text-lg font-bold border-2 border-white/40 hover:border-white text-white hover:bg-white/5 rounded-full transition-all flex items-center justify-center"
                >
                  探索實境玩法
                </Link>
              </div>
              <Link 
                to="/story" 
                className="py-3.5 px-10 text-base font-black border border-white/20 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all hover:scale-105 shadow-md flex items-center justify-center"
              >
                觀看故事序章
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
