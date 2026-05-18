import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { MapPin, Utensils, Camera, Heart, Info, ArrowLeft, Users, Star, Sparkles } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const PuzzleDetail = () => {
  const images = [
    "/活動精彩紀錄/活動精彩紀錄1.jpg",
    "/活動精彩紀錄/活動精彩紀錄2.jpg",
    "/活動精彩紀錄/活動精彩紀錄3.jpg",
    "/活動精彩紀錄/活動精彩紀錄4.jpg",
    "/活動精彩紀錄/活動精彩紀錄5.jpg",
    "/活動精彩紀錄/活動精彩紀錄6.jpg"
  ];
  const [currentImage, setCurrentImage] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (location.state?.scrollToMethod) {
      setTimeout(() => {
        const element = document.getElementById("adventure-method");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    }
  }, [location]);

  return (
    <div className="min-h-screen pt-32 pb-20 bg-hakka-cream selection:bg-hakka-red/20">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-hakka-red font-bold mb-12 hover:translate-x-1 transition-transform">
          <ArrowLeft className="w-5 h-5" /> 返回首頁
        </Link>
        
        {/* 1. Intro: What is real-life puzzle? */}
        <section className="mb-32">
          <div className="max-w-3xl mb-16">
            <h1 className="section-title text-left mb-8">實境解謎到底是什麼？</h1>
            <p className="text-2xl font-serif text-hakka-brown mb-8 leading-relaxed font-black">
              「城市就是您的遊戲箱，這是一場打破虛擬與現實邊界的冒險。」
            </p>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              實境解謎將遊戲場景搬到了大溪與龍潭的真實街道。您不需要坐在螢幕前，而是帶領家人走進老街、廟宇 or 古道。通過手上的解謎包道具、手機 APP 的劇情引导，以及現場景物的觀察，解開一道道與當地歷史文化緊密相連的謎題。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h3 className="text-3xl font-serif text-hakka-brown font-black">給全家的完美體驗</h3>
              <p className="text-lg text-slate-500 leading-relaxed">
                我們特別針對親子、好友群體設計，讓解謎不再只是燒腦的邏輯對抗，更是一場增進溝通、共同創造回憶的文化探索。
              </p>
              <div className="flex gap-4">
                <div className="px-6 py-3 bg-white rounded-2xl border border-hakka-gold/20 shadow-sm flex items-center gap-3">
                   <Users className="text-hakka-red" /> <span className="font-bold">親子協作</span>
                </div>
                <div className="px-6 py-3 bg-white rounded-2xl border border-hakka-gold/20 shadow-sm flex items-center gap-3">
                   <MapPin className="text-hakka-red" /> <span className="font-bold">在地文化</span>
                </div>
              </div>
            </div>
            <div className="rounded-[4rem] overflow-hidden shadow-2xl relative aspect-square border-8 border-white">
               <img src="/實境解謎示意圖.png" className="w-full h-full object-cover" alt="Real game" />
            </div>
          </div>
        </section>

        {/* 2. Adventure Method */}
        <section id="adventure-method" className="mb-32 scroll-mt-36">
           <h2 className="section-title text-center mb-16 italic">冒險進行方式</h2>
           <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "領取實體探索包", desc: "內含精美地圖、解謎必備道具與神秘古物。", icon: <MapPin className="w-8 h-8" /> },
                { step: "02", title: "下載APP解鎖探險", desc: "透過手機觀看劇情，讓大溪的故事在您眼前展開。", icon: <Info className="w-8 h-8" /> },
                { step: "03", title: "實地觀察解密", desc: "運用您的觀察力，將地景線索轉化為解謎關鍵。", icon: <Star className="w-8 h-8" /> }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-hakka-gold/10 text-center hover:scale-105 transition-transform">
                   <div className="w-16 h-16 bg-hakka-red text-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                      {item.icon}
                   </div>
                   <span className="text-hakka-red font-black tracking-widest text-xs mb-4 block">步驟 {item.step}</span>
                   <h3 className="text-2xl font-serif text-hakka-brown mb-6 font-bold">{item.title}</h3>
                   <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* 3. Activity Record Photos (Carousel) */}
        <section className="mb-32">
           <h2 className="section-title text-center mb-16 italic">活動精彩紀錄</h2>
           <div className="relative h-[600px] rounded-[4rem] overflow-hidden shadow-2xl group border-8 border-white">
              {images.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: currentImage === idx ? 1 : 0 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0"
                >
                  <img src={img} className="w-full h-full object-cover" alt={`Record ${idx}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-hakka-brown/60 to-transparent"></div>
                </motion.div>
              ))}
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4">
                {images.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${currentImage === idx ? "bg-hakka-gold w-8" : "bg-white/40"}`}
                  />
                ))}
              </div>
           </div>
        </section>

        <div className="p-20 bg-hakka-brown rounded-[4rem] text-white text-center relative overflow-hidden">
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/rice-paper.png')]"></div>
           <div className="relative z-10 flex flex-col items-center">
              <Sparkles className="w-16 h-16 text-hakka-gold mb-6" />
              <h2 className="text-4xl font-serif mb-8 font-black">準備好開始您的冒險了嗎？</h2>
              <div className="flex flex-col gap-4 mb-4 items-center">
                 <Link to="/story" className="px-12 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-black text-lg hover:scale-105 transition-all shadow-lg border border-white/20">
                    觀看故事序章
                 </Link>
                 <Link to="/booking" className="px-12 py-5 bg-hakka-gold text-hakka-brown rounded-full font-black text-xl hover:scale-110 transition-transform shadow-xl">
                    立即出發
                 </Link>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export const FoodDetail = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [zoomedIdx, setZoomedIdx] = useState<number | null>(null);
  const [showFloatBtn, setShowFloatBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowFloatBtn(true);
      } else {
        setShowFloatBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const foods = [
    { 
      id: "fish",
      name: "三坑活魚料理", 
      short: "三坑活魚是一魚多吃的現煮料理，鮮嫩彈牙，是石門水庫區最著名的美食地標。",
      desc: "大溪三坑鄰近石門水庫，活魚料理發展出超過百種吃法。由在地名廚現點、現殺、現煮，魚肉口感鮮甜紮實。不論是清蒸、豆瓣、糖醋或是炸魚塊，每一口都能品嚐到石門山泉孕育出的鮮美滋味。", 
      x: "25%", y: "45%", 
      img: "/三坑活魚料理.jpg",
      tags: ["鮮美活魚", "百種吃法", "石門名產"],
      pointStyle: { marginLeft: "-27px", marginTop: "-27px", paddingLeft: "21px", paddingTop: "27px", width: "42.9722px", height: "54.9653px", paddingBottom: "9px" }
    },
    { 
      id: "bun",
      name: "客家菜包", 
      short: "外皮Q彈有嚼勁，內餡滿滿蘿蔔絲與油蔥香，是客家人款待客人的心意。",
      desc: "客家菜包外皮以糯米製成，口感Q彈富有嚼勁。內餡包裹著爆炒過的蘿蔔丁或蘿蔔絲、香菇、蝦米、油蔥與豬肉，鹹香濃郁。因為外形像裝農作物的布袋，又被稱為「豬籠粄」，象徵著勤儉與豐收。", 
      x: "45%", y: "35%", 
      img: "/客家菜包.png",
      tags: ["Q彈米食", "鹹香內餡", "節慶好彩頭"],
      pointStyle: { marginLeft: "-49px", marginTop: "-37px", paddingLeft: "28px", paddingTop: "29px", marginRight: "-3px", marginBottom: "-3px", width: "88.914px", height: "56.9583px" }
    },
    { 
      id: "niu",
      name: "牛汶水", 
      short: "牛汶水是泡在黑糖薑汁裡的軟Q麻糬，暖甜又帶古早味的客家甜點。",
      desc: "牛汶水是客家經典米食甜點，又稱熝湯糍，口感比麻糬更軟Q。浸在黑糖薑汁裡，再撒上花生與芝麻，甜香溫潤又很療癒。名字靈感來自水牛泡在泥水中的樣子，是很有故事感的懷舊小吃。", 
      x: "32%", y: "68%", 
      img: "/牛汶水.png",
      tags: ["黑糖薑汁", "軟Q麻糬感", "客家古早甜點"],
      pointStyle: { marginLeft: "8px", marginTop: "-31px", paddingTop: "26px", paddingLeft: "23px", width: "44.9838px", height: "53.9653px" }
    },
    { 
      id: "tofu",
      name: "大溪老阿伯豆干", 
      short: "大溪老街超人氣排隊滷味，豆香入味、一口就上癮",
      desc: "創立近60年的老阿伯豆干，是大溪老街必吃排隊名店。用獨門滷汁現滷豆干與各式豆製品，香氣濃、滷得超入味。黑豆干、黃金蛋到百頁豆腐，每一口都是扎實又涮嘴的古早味。", 
      x: "78%", y: "42%", 
      img: "/大溪老阿伯豆干.png",
      tags: ["現滷超入味", "大溪必吃！", "60年經典老店"],
      pointStyle: { marginLeft: "-40px", marginTop: "-26px", paddingLeft: "42px", paddingTop: "26px", width: "84.9491px", height: "53.9653px", marginRight: "0px" },
      popupDir: "left"
    },
    { 
      id: "bamboo",
      name: "茭白筍", 
      short: "三坑茭白筍是山泉水養出的「美人腿」，清甜脆嫩、一口就上癮。",
      desc: "三坑茭白筍產自桃園龍潭石門水庫水源區，被稱為「美人腿」。在純淨山泉與肥沃土壤中生長，口感脆嫩多汁、清甜不澀。秋季盛產，是客家庄最具代表性的清爽系在地農產！", 
      x: "15%", y: "20%", 
      img: "/茭白筍.png",
      tags: ["清爽客家味！", "清甜脆嫩", "山泉直送"],
      pointStyle: { marginLeft: "-38px", marginTop: "-7px", paddingLeft: "24px", paddingTop: "29px", width: "45.9838px", height: "58.9653px" }
    },
    { 
      id: "soup",
      name: "范媽媽客家鹹湯圓", 
      short: "用雞骨湯熬出的鹹香湯圓，一碗就暖到心裡～",
      desc: "位於三坑的范媽媽客家鹹湯圓，是道地客家古早味代表。以雞骨湯為底，加入韭菜、芹菜、香菜與油蔥，香氣超濃郁。軟糯湯圓吸滿鹹香湯頭，是在地人最愛的暖心麵食。", 
      x: "60%", y: "25%", 
      img: "/范媽媽客家鹹湯圓.png",
      tags: ["鹹香暖湯", "古早客家味", "三坑必吃"],
      pointStyle: { marginLeft: "-39px", marginTop: "-32px", paddingTop: "26px", paddingLeft: "46px", width: "91.9375px", height: "52.9653px" },
      popupDir: "left"
    },
    { 
      id: "moon",
      name: "月光餅", 
      short: "金黃圓潤的地瓜餅，樸實清甜、象徵團圓的中秋古早味",
      desc: "月光餅是客家庄中秋節的傳統點心，也叫地瓜餅 or 番薯餅。用地瓜做內餡、外皮薄而柔軟，吃起來清甜又很有古早感。外型像滿月，象徵團圓與豐收，是早期生活下誕年的溫暖滋味。", 
      x: "80%", y: "70%", 
      img: "/月光餅.png",
      tags: ["清甜地瓜", "客家中秋古早味"],
      pointStyle: { marginLeft: "-10px", marginTop: "2px" },
      popupDir: "left"
    },
    { 
      id: "sauce",
      name: "客家桔醬", 
      short: "客家桔醬以酸中帶辣的獨特風味聞名，是搭配白斬雞與客家鹹豬肉的經典客家醬料。",
      desc: "桔醬是台灣客家文化中相當具有代表性的傳統醬料，以酸香風味為特色，有時還會加入辣椒增添層次。它常搭配白斬雞、豬肉 or 客家鹹豬肉一起食用，能讓料理風味更加鮮明開胃。", 
      x: "15%", y: "75%", 
      img: "/客家桔醬.png",
      tags: ["客家人的秘密武器", "酸香爆擊！", "肉類料理最佳CP"],
      pointStyle: { marginLeft: "13px", marginTop: "3px" },
      popupDir: "right-up"
    }
  ];

  const handlePointClick = (id: string, idx: number) => {
    const element = document.getElementById(`food-detail-${id}`);
    if (element) {
      const headerOffset = 120; // Adjusted for fixed header area
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      setZoomedIdx(idx);
      setTimeout(() => {
        setZoomedIdx(null);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-white selection:bg-hakka-red/20">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-hakka-red font-bold mb-12 hover:translate-x-1 transition-transform">
          <ArrowLeft className="w-5 h-5" /> 返回首頁
        </Link>
        <h1 className="section-title text-left mb-6">美食感官體驗</h1>
        <p className="text-xl text-slate-500 mb-8 font-medium leading-relaxed">邊玩邊吃，用味蕾探索客家傳統文化，滿足旅行多重享受。</p>
        <div className="text-center mb-8">
          <p className="text-sm font-bold text-hakka-red inline-block bg-hakka-red/5 px-6 py-2 rounded-full border border-hakka-red/10">
            點選地圖中美食點了解更多
          </p>
        </div>
        
        <div id="food-map" className="relative aspect-video rounded-xl md:rounded-3xl border-4 border-white shadow-2xl overflow-hidden mb-8 md:mb-20 group scroll-mt-36">
          <img src="/foods map.png" alt="Food Map" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000" referrerPolicy="no-referrer" />
          
          {foods.map((food: any, idx) => (
            <motion.div 
              key={idx}
              className={`absolute transition-all duration-300 ${hoveredIdx === idx ? "z-[100]" : "z-20"}`}
              style={{ left: food.x, top: food.y, ...food.pointStyle }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              onClick={() => handlePointClick(food.id, idx)}
            >
              <div className="relative -translate-x-1/2 -translate-y-1/2">
                {/* Desktop: Image Marker */}
                <div className={`hidden lg:block w-16 h-16 rounded-full border-4 border-white shadow-lg overflow-hidden cursor-pointer transition-all duration-300 bg-white ${hoveredIdx === idx ? "scale-150 z-50 ring-4 ring-hakka-red/20" : "scale-100"}`}>
                  <img src={food.img} className="w-full h-full object-cover" alt={food.name} />
                </div>
                
                {/* Tablet/Mobile: Pin + Label */}
                <div className="lg:hidden flex flex-col items-center gap-1 cursor-pointer">
                  <div className="w-8 h-8 bg-hakka-red rounded-full flex items-center justify-center text-white shadow-lg">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black text-hakka-brown bg-white/90 px-2 py-0.5 rounded-full shadow-sm whitespace-nowrap">
                    {food.name}
                  </span>
                </div>

                {/* Desktop Tooltip: Unified Width */}
                <div className={`absolute transition-all duration-300 pointer-events-none z-[60] hidden lg:block ${hoveredIdx === idx ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}
                  ${food.popupDir?.includes('left') ? 'right-full mr-12' : 'left-full ml-12'}
                  ${food.popupDir?.includes('up') ? 'bottom-0' : 'top-1/2 -translate-y-1/2'}
                  w-[340px] bg-white p-8 rounded-3xl shadow-2xl border border-hakka-gold/20`}
                >
                  <p className="font-black text-hakka-brown text-xl mb-3">{food.name}</p>
                  <p className="text-base text-slate-500 whitespace-normal leading-relaxed">{food.short}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="relative pt-4 md:pt-20 pb-20">
           <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 border-l-2 border-dashed border-hakka-red/20 pointer-events-none hidden md:block"></div>
           
           <h2 className="section-title mb-8 md:mb-16 relative z-10 bg-white inline-block px-12 left-1/2 -translate-x-1/2">
             美食探索詳情
           </h2>

           <div className="space-y-16 md:space-y-40">
             {foods.map((food, idx) => (
               <motion.div 
                 id={`food-detail-${food.id}`}
                 key={idx}
                 whileInView={{ opacity: 1, y: 0 }}
                 initial={{ opacity: 0, y: 50 }}
                 viewport={{ once: true, margin: "-100px" }}
                 className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 relative z-10 scroll-mt-32 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
               >
                 <div className="w-full md:w-1/2 aspect-square md:aspect-video rounded-[4rem] overflow-hidden border-8 border-hakka-cream shadow-2xl relative">
                    <motion.img 
                      src={food.img} 
                      animate={{ scale: zoomedIdx === idx ? 1.25 : 1 }}
                      transition={{ duration: 1 }}
                      className="w-full h-full object-cover" 
                      alt={food.name} 
                    />
                 </div>
                 
                 <div className="w-full md:w-1/2 space-y-8">
                    <div className="inline-flex items-center gap-3 text-hakka-red">
                       <span className="w-12 h-12 rounded-2xl border-2 border-hakka-red flex items-center justify-center font-black text-xl">0{idx + 1}</span>
                       <span className="text-xs font-black tracking-[0.3em] uppercase">美食點</span>
                    </div>
                    <h3 className="text-5xl font-serif text-hakka-brown font-black">{food.name}</h3>
                    <p className="text-xl text-slate-600 leading-relaxed font-medium">
                       {food.desc}
                    </p>
                    <div className="pt-6 flex flex-wrap gap-3">
                       {food.tags.map((tag, tIdx) => (
                         <span key={tIdx} className="px-5 py-2 bg-hakka-red/5 rounded-2xl text-xs font-bold text-hakka-red border border-hakka-red/10">#{tag}</span>
                       ))}
                    </div>
                 </div>
               </motion.div>
             ))}
           </div>
        </div>
      </div>
      {showFloatBtn && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => {
            const mapEl = document.getElementById("food-map");
            if (mapEl) {
              const headerOffset = 140; // Avoid header overlap
              const elementPosition = mapEl.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
              });
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="fixed bottom-8 right-8 z-[120] bg-hakka-red hover:bg-hakka-red/90 text-white font-bold p-5 rounded-full shadow-2xl flex items-center gap-2 hover:scale-105 transition-transform active:scale-95 text-sm md:text-base border border-white/20 select-none cursor-pointer"
        >
          <Utensils className="w-5 h-5 md:w-6 md:h-6 animate-pulse" />
          <span>回到美食地圖</span>
        </motion.button>
      )}
    </div>
  );
};

export const BondingDetail = () => {
  const location = useLocation();
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (location.state?.highlightFamily) {
      setShouldAnimate(true);
      const timer = setTimeout(() => {
        setShouldAnimate(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [location]);

  const sections = [
    {
      title: "親子專區",
      desc: "專場設計：協作解謎促進親子情感連結。",
      services: [
        "協作解謎任務包：設計需親子共同思考的關卡。",
        "挖沙趣：客家文化館提供3種專業挖沙遊戲組供現場借用。",
        "嬰兒車租借：免費提供租借（須押證件）。"
      ],
      icon: <Heart className="w-8 h-8" />,
      color: "bg-hakka-cream"
    },
    {
      title: "時尚打卡專區",
      desc: "專為愛好攝影與分享的年輕族群設計，捕捉大溪最美一面。",
      services: [
        "蝴蝶花廊：夢幻的自然光影交織。",
        "三坑泉水與水圳隧道口：復古與神祕的絕佳背景。",
        "客家老街：百年時光的影像定型。",
        "三坑鐵馬道瞭望台：俯瞰大漢溪絕佳視野。"
      ],
      icon: <Camera className="w-8 h-8" />,
      color: "bg-white"
    },
    {
      title: "大型團體專區",
      desc: "完善的場地租借服務，滿足公司團建與大型團體活動需求。",
      services: [
        "專業場地：客家文化館提供演藝廳、視聽簡報室租賃。",
        "寬廣空間：前廣場可供大型團體活動規劃使用。",
        "配套行程：供公司若有規劃團體活動可租借場地。"
      ],
      icon: <Users className="w-8 h-8" />,
      color: "bg-hakka-cream"
    },
    {
      title: "銀髮專區",
      desc: "友善無障礙環境，確保每位長輩都能舒適體驗文化之魂。",
      services: [
        "輪椅租借：客家文化館提供免費輪椅借用（須押證件）。",
        "休息點安排：密集的休憩區規劃，享受慢遊步調。"
      ],
      icon: <Heart className="w-8 h-8" />,
      color: "bg-white"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-hakka-cream">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-hakka-red font-bold mb-12 hover:translate-x-1 transition-transform">
          <ArrowLeft className="w-5 h-5" /> 返回首頁
        </Link>
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="section-title">服務專區</h1>
          <p className="text-2xl font-serif text-hakka-brown mb-8 italic font-black">「讓每位冒險家都能找到最適合的守護服務。」</p>
          <p className="text-slate-600 leading-relaxed text-lg">
            雖然我們的探險吸引了各種對文化有興趣的團隊共同參與，但我們致力於為不同需求的客群提供精準服務。無論是帶著孩子的家庭、追求完美的攝影師、銀髮長輩還是企業團隊，在此都能找到最周全的支援。
          </p>
        </div>

        <div className="space-y-12">
          {sections.map((section, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`p-12 rounded-[4rem] border-b-8 border-hakka-gold/30 shadow-2xl ${section.color} grid md:grid-cols-3 gap-12 items-center`}
            >
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <motion.div 
                  animate={shouldAnimate && section.title === "親子專區" ? {
                    scale: [1, 1.4, 1.4, 1.3, 1.3, 1],
                    rotate: [0, -12, 12, -12, 12, 0],
                  } : {}}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="w-20 h-20 bg-hakka-red text-white rounded-3xl flex items-center justify-center mb-6 shadow-xl"
                >
                  {section.icon}
                </motion.div>
                <h3 className="text-3xl font-serif text-hakka-brown font-black mb-4">{section.title}</h3>
                <p className="text-slate-500 font-medium">{section.desc}</p>
              </div>
              
              <div className="md:col-span-2 grid md:grid-cols-2 gap-6">
                {section.services.map((service, sIdx) => (
                  <div key={sIdx} className="flex gap-4 items-start p-4 bg-white/50 rounded-2xl border border-hakka-gold/10">
                    <div className="w-6 h-6 rounded-full bg-hakka-red text-white flex items-center justify-center shrink-0 text-[10px] shadow-sm font-bold">
                       {sIdx + 1}
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{service}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
