import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { MapPin, Utensils, Camera, Heart, Info, ArrowLeft, Users, Star, Sparkles } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "../App";

export const PuzzleDetail = () => {
  const { lang, t } = useTranslation();
  
  const translations: any = {
    "zh-TW": {
      back: "返回首頁",
      title: "實境解謎到底是什麼？",
      quote: "「城市就是您的遊戲箱，這是一場打破虛擬與現實邊界的冒險。」",
      intro: "實境解謎將遊戲場景搬到了大溪與龍潭的真實街道。您不需要坐在螢幕前，而是帶領家人走進老街、廟宇 or 古道。通過手上的解謎包道具、LINE Bot 的劇情引導，以及現場景物的觀察，解開一道道與當地歷史文化緊密相連的謎題。",
      family_title: "給全家的完美體驗",
      family_desc: "我們特別針對親子、好友群體設計，讓解謎不再只是燒腦的邏輯對抗，更是一場增進溝通、共同創造回憶的文化探索。",
      tag1: "親子協作",
      tag2: "在地文化",
      method_title: "冒險進行方式",
      step1_title: "領取實體探索包",
      step1_desc: "內含精美地圖、解謎必備道具與神秘古物。",
      step2_title: "加入LINE Bot解鎖探險",
      step2_desc: "透過 LINE Bot 觀看劇情，讓大溪的故事在您眼前展開。",
      step3_title: "實地觀察解密",
      step3_desc: "運用您的觀察力，將地景線索轉化為解謎關鍵。",
      record_title: "活動精彩紀錄",
      ready_title: "準備好開始您的冒險了嗎？",
      watch_story: "觀看故事序章",
      go_now: "立即出發",
      step_label: "步驟"
    },
    "zh-CN": {
      back: "返回首页",
      title: "实境解谜到底是什么？",
      quote: "“城市就是您的游戏箱，这是一场打破虚拟与现实边界的冒险。”",
      intro: "实境解谜将游戏场景搬到了大溪与龙潭的真实街道。您不需要坐在屏幕前，而是带领家人走进老街、庙宇或古道。通过手上的解谜包道具、LINE Bot 的剧情引导，以及现场景物的观察，解开一道道与当地历史文化紧密相连的谜题。",
      family_title: "给全家的完美体验",
      family_desc: "我们特别针对亲子、好友群体设计，让解谜不再只是烧脑的逻辑对抗，更是一场增进沟通、共同创造回忆的文化探索。",
      tag1: "亲子协作",
      tag2: "在地文化",
      method_title: "冒险进行方式",
      step1_title: "领取实体探索包",
      step1_desc: "内含精美地图、解谜必备道具与神秘古物。",
      step2_title: "加入LINE Bot解锁探险",
      step2_desc: "通过 LINE Bot 观看剧情，让大溪的故事在您眼前展开。",
      step3_title: "实地观察解密",
      step3_desc: "运用您的观察力，将地景线索转化为解谜关键。",
      record_title: "活动精彩纪录",
      ready_title: "准备好开始您的冒险了吗？",
      watch_story: "观看故事序章",
      go_now: "立即出发",
      step_label: "步骤"
    },
    "en": {
      back: "Back to Home",
      title: "What is a Real-Life Puzzle?",
      quote: " 'The city is your game box; it is an adventure that breaks the boundary between virtual and reality.' ",
      intro: "Real-life puzzles bring game scenes to the real streets of Daxi and Longtan. No screen time—take your family to old streets and ancient paths. Use physical kits, LINE Bot, and site observation to solve mysteries linked to local history.",
      family_title: "The Perfect Family Experience",
      family_desc: "Designed for families and friends, puzzles are no longer just brain-taxing logic but a cultural exploration that promotes communication and shared memories.",
      tag1: "Family Collab",
      tag2: "Local Culture",
      method_title: "How to Adventure",
      step1_title: "Get your kit",
      step1_desc: "Includes maps, essential props, and mysterious artifacts.",
      step2_title: "Unlock via LINE Bot",
      step2_desc: "Watch the story unfold on your phone as you explore Daxi.",
      step3_title: "Observation Mastery",
      step3_desc: "Use your observation skills to turn landmarks into keys.",
      record_title: "Activity Records",
      ready_title: "Ready to start?",
      watch_story: "Watch Prologue",
      go_now: "Start Journey",
      step_label: "Step"
    },
    "vi": {
      back: "Về trang chủ",
      title: "Giải đố thực tế là gì?",
      quote: " 'Thành phố là hộp trò chơi của bạn; đây là cuộc phiêu lưu phá vỡ ranh giới ảo và thực.' ",
      intro: "Giải đố thực tế mang bối cảnh trò chơi đến các con phố của Daxi và Longtan. Không cần ngồi trước màn hình, hãy đưa gia đình đến các phố cổ và đền đài. Sử dụng bộ dụng cụ, LINE Bot và quan sát thực tế để giải mã lịch sử địa phương.",
      family_title: "Trải nghiệm gia đình hoàn hảo",
      family_desc: "Được thiết kế cho gia đình và bạn bè, giải đố không chỉ là tư duy logic mà còn là khám phá văn hóa, tăng cường giao tiếp và tạo kỷ niệm chung.",
      tag1: "Hợp tác gia đình",
      tag2: "Văn hóa địa phương",
      method_title: "Cách thức tham gia",
      step1_title: "Nhận bộ công cụ",
      step1_desc: "Bao gồm bản đồ, đạo cụ cần thiết và cổ vật bí ẩn.",
      step2_title: "Mở khóa qua LINE Bot",
      step2_desc: "Theo dõi cốt truyện qua điện thoại khi bạn khám phá Daxi.",
      step3_title: "Quan sát thực tế",
      step3_desc: "Sử dụng khả năng quan sát để biến các di tích thành chìa khóa giải đố.",
      record_title: "Kỷ lục hoạt động",
      ready_title: "Sẵn sàng phiêu lưu?",
      watch_story: "Xem phần mở đầu",
      go_now: "Bắt đầu ngay",
      step_label: "Bước"
    }
  };

  const pt = translations[lang] || translations["zh-TW"];

  const images = [
    "https://i.ibb.co/xScvFB6F/1.jpg",
    "https://i.ibb.co/Lz3BsLWq/2.jpg",
    "https://i.ibb.co/Qsk3f04/3.jpg",
    "https://i.ibb.co/05p816j/4.jpg",
    "https://i.ibb.co/20LsPVWT/5.jpg",
    "https://i.ibb.co/wZY0ZNJG/6.jpg"
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
    <div className="min-h-screen pt-28 pb-20 bg-hakka-cream selection:bg-hakka-red/20 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-hakka-red font-bold mb-12 hover:translate-x-1 transition-transform">
          <ArrowLeft className="w-5 h-5" /> {pt.back}
        </Link>
        
        <section className="mb-32">
          <div className="max-w-3xl mb-16">
            <h1 className={`font-serif text-hakka-brown font-black mb-8 leading-tight ${lang === 'en' || lang === 'vi' ? 'text-3xl md:text-5xl' : 'text-4xl md:text-6xl text-left'}`}>
              {pt.title}
            </h1>
            <p className={`font-serif text-hakka-brown mb-8 leading-relaxed font-black ${lang === 'en' || lang === 'vi' ? 'text-lg md:text-2xl' : 'text-2xl'}`}>
              {pt.quote}
            </p>
            <p className={`text-slate-600 leading-relaxed font-medium ${lang === 'en' || lang === 'vi' ? 'text-lg' : 'text-xl'}`}>
              {pt.intro}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h3 className={`font-serif text-hakka-brown font-black ${lang === 'en' || lang === 'vi' ? 'text-2xl md:text-4xl' : 'text-3xl'}`}>{pt.family_title}</h3>
              <p className="text-lg text-slate-500 leading-relaxed">
                {pt.family_desc}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-6 py-3 bg-white rounded-2xl border border-hakka-gold/20 shadow-sm flex items-center gap-3">
                   <Users className="text-hakka-red shrink-0" /> <span className="font-bold">{pt.tag1}</span>
                </div>
                <div className="px-6 py-3 bg-white rounded-2xl border border-hakka-gold/20 shadow-sm flex items-center gap-3">
                   <MapPin className="text-hakka-red shrink-0" /> <span className="font-bold">{pt.tag2}</span>
                </div>
              </div>
            </div>
            <div className="rounded-[4rem] overflow-hidden shadow-2xl relative aspect-square border-8 border-white">
               <img src="https://i.ibb.co/Nd7XbjMf/image.png" className="w-full h-full object-cover" alt="Real game" />
            </div>
          </div>
        </section>

        <section id="adventure-method" className="mb-32 scroll-mt-36">
           <h2 className={`section-title text-center mb-16 italic ${lang === 'en' || lang === 'vi' ? 'text-4xl md:text-6xl' : ''}`}>{pt.method_title}</h2>
           <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "01", title: pt.step1_title, desc: pt.step1_desc, icon: <MapPin className="w-8 h-8" /> },
                { step: "02", title: pt.step2_title, desc: pt.step2_desc, icon: <Info className="w-8 h-8" /> },
                { step: "03", title: pt.step3_title, desc: pt.step3_desc, icon: <Star className="w-8 h-8" /> }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-xl border border-hakka-gold/10 text-center hover:scale-105 transition-transform flex flex-col items-center">
                   <div className="w-16 h-16 bg-hakka-red text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                      {item.icon}
                   </div>
                   <span className="text-hakka-red font-black tracking-widest text-xs mb-4 block">{pt.step_label} {item.step}</span>
                   <h3 className={`font-serif text-hakka-brown mb-6 font-bold ${lang === 'en' || lang === 'vi' ? 'text-xl md:text-2xl' : 'text-2xl'}`}>{item.title}</h3>
                   <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </section>

        <section className="mb-32">
           <h2 className={`section-title text-center mb-16 italic ${lang === 'en' || lang === 'vi' ? 'text-4xl md:text-5xl' : ''}`}>{pt.record_title}</h2>
           <div className="relative h-[400px] md:h-[600px] rounded-[4rem] overflow-hidden shadow-2xl group border-8 border-white">
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

        <div className="p-10 md:p-20 bg-hakka-brown rounded-[4rem] text-white text-center relative overflow-hidden">
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/rice-paper.png')]"></div>
           <div className="relative z-10 flex flex-col items-center">
              <Sparkles className="w-16 h-16 text-hakka-gold mb-6" />
              <h2 className={`font-serif mb-8 font-black ${lang === 'en' || lang === 'vi' ? 'text-3xl md:text-5xl' : 'text-4xl'}`}>
                {pt.ready_title}
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 mb-4 items-center">
                 <Link to="/story" className="w-full sm:w-auto px-12 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-black text-lg hover:scale-105 transition-all shadow-lg border border-white/20 whitespace-nowrap">
                    {pt.watch_story}
                 </Link>
                 <Link to="/booking" className="w-full sm:w-auto px-12 py-5 bg-hakka-gold text-hakka-brown rounded-full font-black text-xl hover:scale-110 transition-transform shadow-xl whitespace-nowrap">
                    {pt.go_now}
                 </Link>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export const FoodDetail = () => {
  const { lang, t } = useTranslation();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [zoomedIdx, setZoomedIdx] = useState<number | null>(null);
  const [showFloatBtn, setShowFloatBtn] = useState(false);

  const translations: any = {
    "zh-TW": {
      back: "返回首頁",
      title: "美食感官體驗",
      subtitle: "邊玩邊吃，用味蕾探索客家傳統文化，滿足旅行多重享受。",
      hint: "點選地圖中美食點了解更多",
      detail_title: "美食探索詳情",
      point_label: "美食點",
      float_btn: "回到美食地圖",
      food_fish_name: "三坑活魚料理",
      food_fish_short: "三坑活魚是一魚多吃的現煮料理，鮮嫩彈牙，是石門水庫區最著名的美食地標。",
      food_fish_desc: "大溪三坑鄰近石門水庫，活魚料理發展出超過百種吃法。由在地名廚現點、現殺、現煮，魚肉口感鮮甜紮實。不論是清蒸、豆瓣、糖醋或是炸魚塊，每一口都能品嚐到石門山泉孕育出的鮮美滋味。",
      food_fish_tags: ["鮮美活魚", "百種吃法", "石門名產"],
      food_bun_name: "客家菜包",
      food_bun_short: "外皮Q彈有嚼勁，內餡滿滿蘿蔔絲與油蔥香，是客家人款待客人的心意。",
      food_bun_desc: "客家菜包外皮以糯米製成，口感Q彈富有嚼勁。內餡包裹著爆炒過的蘿蔔丁或蘿蔔絲、香菇、蝦米、油蔥與豬肉，鹹香濃郁。因為外形像裝農作物的布袋，又被稱為「豬籠粄」，象徵著勤儉與豐收。",
      food_bun_tags: ["Q彈米食", "鹹香內餡", "節慶好彩頭"],
      food_niu_name: "牛汶水",
      food_niu_short: "牛汶水是泡在黑糖薑汁裡的軟Q麻糬，暖甜又帶古早味的客家甜點。",
      food_niu_desc: "牛汶水是客家經典米食甜點，又稱熝湯糍，口感比麻糬更軟Q。浸在黑糖薑汁裡，再撒上花生與芝麻，甜香溫潤又很療癒。名字靈感來自水牛泡在泥水中的樣子，是很有故事感的懷舊小吃。",
      food_niu_tags: ["黑糖薑汁", "軟Q麻糬感", "客家古早甜點"],
      food_tofu_name: "大溪老阿伯豆干",
      food_tofu_short: "大溪老街道超人氣排隊滷味，豆香入味、一口就上癮",
      food_tofu_desc: "創立近60年的老阿伯豆干，是大溪老街必吃排隊名店。用獨門滷汁現滷豆干與各式豆製品，香氣濃、滷得超入味。黑豆干、黃金蛋到百頁豆腐，每一口都是扎實又涮嘴的古早味。",
      food_tofu_tags: ["現滷超入味", "大溪必吃！", "60年經典老店"],
      food_bamboo_name: "茭白筍",
      food_bamboo_short: "三坑茭白筍是山泉水養出的「美人腿」，清甜脆嫩、一口就上癮。",
      food_bamboo_desc: "三坑茭白筍產自桃園龍潭石門水庫水源區，被稱為「美人腿」。在純淨山泉與肥沃土壤中生長，口感脆嫩多汁、清甜不澀。秋季盛產，是客家庄最具代表性的清爽系在地農產！",
      food_bamboo_tags: ["清爽客家味！", "清甜脆嫩", "山泉直送"],
      food_soup_name: "范媽媽客家鹹湯圓",
      food_soup_short: "用雞骨湯熬出的鹹香湯圓，一碗就暖到心裡～",
      food_soup_desc: "位於三坑的范媽媽客家鹹湯圓，是道地客家古早味代表。以雞骨湯為底，加入韭菜、芹菜、香菜與油蔥，香氣超濃郁。軟糯湯圓吸滿鹹香湯頭，是在地人最愛的暖心麵食。",
      food_soup_tags: ["鹹香暖湯", "古早客家味", "三坑必吃"],
      food_moon_name: "月光餅",
      food_moon_short: "金黃圓潤的地瓜餅，樸實清甜、象徵團圓的中秋古早味",
      food_moon_desc: "月光餅是客家庄中秋節的傳統點心，也叫地瓜餅 or 番薯餅。用地瓜做內餡、外皮薄而柔軟，吃起來清甜又很有古早感。外型像滿月，象徵團圓與豐收，是早期生活下誕年的溫暖滋味。",
      food_moon_tags: ["清甜地瓜", "客家中秋古早味"],
      food_sauce_name: "客家桔醬",
      food_sauce_short: "客家桔醬以酸中帶辣的獨特風味聞名，是搭配白斬雞與客家鹹豬肉的經典客家醬料。",
      food_sauce_desc: "桔醬是台灣客家文化中相當具有代表性的傳統醬料，以酸香風味為特色，有時還會加入辣椒增添層次。它常搭配白斬雞、豬肉 or 客家鹹豬肉一起食用，能讓料理風味更加鮮明開胃。",
      food_sauce_tags: ["客家人的秘密武器", "酸香爆擊！", "肉類料理最佳CP"]
    },
    "zh-CN": {
      back: "返回首页",
      title: "美食感官体验",
      subtitle: "边玩边吃，用味蕾探索客家传统文化，满足旅行多重享受。",
      hint: "点选地图中美食点了解更多",
      detail_title: "美食探索详情",
      point_label: "美食点",
      float_btn: "回到美食地图",
      food_fish_name: "三坑活鱼料理",
      food_fish_short: "三坑活鱼是一鱼多吃的现煮料理，鲜嫩弹牙，是石门水库区最著名的美食地标。",
      food_fish_desc: "大溪三坑邻近石门水库，活鱼料理发展出超过百种吃法。由在地名厨现点、现杀、现煮，鱼肉口感鲜甜扎实。不论是清蒸、豆瓣、糖醋或是炸鱼块，每一口都能品尝到石门山泉孕育出的鲜美滋味。",
      food_fish_tags: ["鲜美活鱼", "百种吃法", "石门名产"],
      food_bun_name: "客家菜包",
      food_bun_short: "外皮Q弹有嚼劲，内馅满满萝卜丝与油葱香，是客家人款待客人的心意。",
      food_bun_desc: "客家菜包外皮以糯米制成，口感Q弹富有嚼劲。内馅包裹着爆炒过的萝卜丁或萝卜丝、香菇、虾米、油葱与猪肉，咸香浓郁。因为外形像装农作物的布袋，又被称为“猪笼粄”，象征着勤俭与丰收。",
      food_bun_tags: ["Q弹米食", "咸香内馅", "节庆好彩头"],
      food_niu_name: "牛汶水",
      food_niu_short: "牛汶水是泡在黑糖姜汁里的软Q麻糬，暖甜又带古早味的客家甜点。",
      food_niu_desc: "牛汶水是客家经典米食甜点，又称熝汤糍，口感比麻糬更软Q。浸在黑糖姜汁里，再撒上花生与芝麻，甜香温润又很疗愈。名字灵感来自水牛泡在泥水中的样子，是很有故事感的怀旧小吃。",
      food_niu_tags: ["黑糖姜汁", "软Q麻糬感", "客家古早甜点"],
      food_tofu_name: "大溪老阿伯豆干",
      food_tofu_short: "大溪老街道超人气排队卤味，豆香入味、一口就上瘾",
      food_tofu_desc: "创立近60年的老阿伯豆干，是大溪老街必吃排队名店。用独门卤汁现卤豆干与各式豆制品，香气浓、卤得超入味。黑豆干、黄金蛋到百页豆腐，每一口都是扎实又涮嘴的古早味。",
      food_tofu_tags: ["现卤超入味", "大溪必吃！", "60年经典老店"],
      food_bamboo_name: "茭白笋",
      food_bamboo_short: "三坑茭白笋是山泉水养出的“美人腿”，清甜脆嫩、一口就上瘾。",
      food_bamboo_desc: "三坑茭白笋产自桃园龙潭石门水库水源区，被称为“美人腿”。在纯净山泉与肥沃土壤中生长，口感脆嫩多汁、清甜不涩。秋季盛产，是客家庄最具代表性的清爽系在地农产！",
      food_bamboo_tags: ["清爽客家味！", "清甜脆嫩", "山泉直送"],
      food_soup_name: "范妈妈客家咸汤圆",
      food_soup_short: "用鸡骨汤熬出的咸香汤圆，一碗就暖到心里～",
      food_soup_desc: "位于三坑的范妈妈客家咸汤圆，是地道客家古早味代表。以鸡骨汤为底，加入韭菜、芹菜、香菜与油葱，香气超浓郁。软糯汤圆吸满咸香汤头，是在地人最爱的暖心面食。",
      food_soup_tags: ["咸香暖汤", "古早客家味", "三坑必吃"],
      food_moon_name: "月光饼",
      food_moon_short: "金黄圆润的地瓜饼，朴实清甜、象征团圆的中秋古早味",
      food_moon_desc: "月光饼是客家庄中秋节的传统点心，也叫地瓜饼或番薯饼。用地瓜做内馅、外皮薄而柔软，吃起来清甜又很有古早感。外型像满月，象征团圆与丰收，是早期生活下诞年的温暖滋味。",
      food_moon_tags: ["清甜地瓜", "客家中秋古早味"],
      food_sauce_name: "客家桔酱",
      food_sauce_short: "客家桔酱以酸中带辣的独特风味闻名，是搭配白斩鸡与客家咸猪肉的经典客家酱料。",
      food_sauce_desc: "桔酱是台湾客家文化中相当具有代表性的传统酱料，以酸香风味为特色，有时还会加入辣椒增添层次。它常搭配白斩鸡、猪肉或客家咸猪肉一起食用，能让料理风味更加鲜明开胃。",
      food_sauce_tags: ["客家人的秘密武器", "酸香爆击！", "肉类料理最佳CP"]
    },
    "en": {
      back: "Back Home",
      title: "Food Sensory Journey",
      subtitle: "Explore Hakka culture through your taste buds. A multi-sensory travel joy.",
      hint: "Click map markers to learn more",
      detail_title: "Food Exploration Details",
      point_label: "Spot",
      float_btn: "Back to Map",
      food_fish_name: "Sanxing Fish Cuisine",
      food_fish_short: "Freshly cooked multi-way fish, tender and elastic. A Shimen Reservoir landmark.",
      food_fish_desc: "Near Shimen Reservoir, Sanxing has developed over 100 ways to cook fresh fish. Meat is firm and sweet. Whether steamed, braised, or fried, every bite tastes the purity of mountain springs.",
      food_fish_tags: ["Fresh Fish", "100+ Styles", "Shimen Specialty"],
      food_bun_name: "Hakka Veggie Bun",
      food_bun_short: "Chewy outer skin with radish and shallot filling. A gift of Hakka hospitality.",
      food_bun_desc: "Made from glutinous rice, the skin is chewy. Filled with sautéed radishes, mushrooms, and pork. Historically called 'Pig Basket Bun' symbolizing diligence and harvest.",
      food_bun_tags: ["Sticky Rice", "Savory Filling", "Lucky Symbol"],
      food_niu_name: "Niu Wen Shui",
      food_niu_short: "Chewy mochi in brown sugar ginger syrup. A warm, sweet traditional dessert.",
      food_niu_desc: "A classic Hakka mochi dessert served in ginger syrup with peanuts and sesame. The name comes from water buffaloes soaking in mud, evoking nostalgic rural imagery.",
      food_niu_tags: ["Ginger Syrup", "Chewy Mochi", "Traditional Sweet"],
      food_tofu_name: "Old Uncle Tofu",
      food_tofu_short: "Super popular braised tofu in Daxi Old Street. Addictive soy flavor.",
      food_tofu_desc: "A 60-year-old famous shop in Daxi. Braised with a secret sauce, the tofu is flavorful and firm. Every bite is a classic nostalgic taste.",
      food_tofu_tags: ["Savory Braise", "Daxi Must-Eat", "60-Year Shop"],
      food_bamboo_name: "Water Bamboo",
      food_bamboo_short: " 'Beauty Legs' grown in spring water. Sweet, crisp, and refreshing.",
      food_bamboo_desc: "Produced in the Shimen Reservoir area, these are known for their crisp and juicy texture. Best in autumn, they are the most representative fresh produce of the Hakka village.",
      food_bamboo_tags: ["Fresh Hakka", "Crisp Texture", "Mountain Spring"],
      food_soup_name: "Mama Fan's Soup",
      food_soup_short: "Savory mochi soup cooked with chicken bone broth. Warms your heart.",
      food_soup_desc: "Authentic Hakka soul food in Sanxing. Chicken broth base with chives, celery, and shallots. The soft rice balls soak up the savory soup—a local favorite.",
      food_soup_tags: ["Savory Soup", "Authentic Hakka", "Sanxing Famous"],
      food_moon_name: "Moon Cake",
      food_moon_short: "Golden sweet potato pancake. Simple, sweet, and symbolizing reunion.",
      food_moon_desc: "A traditional Mid-Autumn snack in Hakka villages. Thin soft skin with sweet potato filling. Shaped like a full moon, symbolizing family reunion and harvest.",
      food_moon_tags: ["Sweet Potato", "Traditional Mid-Autumn"],
      food_sauce_name: "Hakka Kumquat Sauce",
      food_sauce_short: "Famous for its unique sour and spicy flavor. Classic pairing for chicken.",
      food_sauce_desc: "A very representative Hakka sauce made from kumquats. Its sour flavor, sometimes with a hint of chili, perfectly complements white-cut chicken and salted pork.",
      food_sauce_tags: ["Hakka Secret", "Zesty Sour", "Meat Pairing"]
    },
    "vi": {
      back: "Về trang chủ",
      title: "Hành trình vị giác",
      subtitle: "Khám phá văn hóa Hakka qua từng miếng ăn. Một niềm vui đa giác quan.",
      hint: "Nhấp vào các điểm trên bản đồ để xem thêm",
      detail_title: "Chi tiết khám phá ẩm thực",
      point_label: "Điểm đến",
      float_btn: "Về lại bản đồ",
      food_fish_name: "Cá tầm Tam Hàng",
      food_fish_short: "Món cá tươi nấu nhiều cách, thịt ngọt và chắc. Một biểu tượng của Shimen.",
      food_fish_desc: "Gần hồ Shimen, Tam Hàng phát triển hơn 100 cách chế biến cá tươi. Thịt cá ngọt và chắc nạm. Dù hấp, kho hay chiên, mỗi miếng đều mang hương vị tinh khiết của dòng suối núi.",
      food_fish_tags: ["Cá tươi", "100+ Cách nấu", "Đặc sản Shimen"],
      food_bun_name: "Bánh bao rau Hakka",
      food_bun_short: "Vỏ bánh dai với nhân củ cải và hành tím. Món quà hiếu khách của người Hakka.",
      food_bun_desc: "Làm từ gạo nếp, vỏ bánh rất dai. Nhân gồm củ cải xào, nấm và thịt lợn. Biểu tượng của sự cần cù và vụ mùa bội thu.",
      food_bun_tags: ["Gạo nếp", "Nhân đậm đà", "Biểu tượng may mắn"],
      food_niu_name: "Niu Wen Shui",
      food_niu_short: "Bánh trôi trong nước gừng đường đen. Món tráng miệng ấm nồng.",
      food_niu_desc: "Món bánh gạo Hakka cổ điển phục vụ với nước gừng, lạc và vừng. Tên gọi gợi nhớ hình ảnh trâu nước tắm bùn ở vùng nông thôn.",
      food_niu_tags: ["Nước gừng", "Bánh dai dẻo", "Ngọt ngào truyền thống"],
      food_tofu_name: "Đậu phụ Ông Lão",
      food_tofu_short: "Đậu phụ kho nổi tiếng tại phố cổ Daxi. Hương vị đậu nành đậm đà.",
      food_tofu_desc: "Cửa hàng 60 năm tuổi tại Daxi. Kho bằng nước sốt bí truyền, đậu phụ rất thấm vị. Mỗi miếng ăn đều mang hương vị hoài niệm cổ điển.",
      food_tofu_tags: ["Vị kho đậm", "Phải thử tại Daxi", "Tiệm 60 năm"],
      food_bamboo_name: "Măng tây trắng",
      food_bamboo_short: " 'Chân người đẹp' trồng bằng nước suối. Ngọt, giòn và thanh mát.",
      food_bamboo_desc: "Sản xuất tại khu vực hồ Shimen, nổi tiếng với kết cấu giòn và mọng nước. Ngon nhất vào mùa thu, đây là nông sản tươi tiêu biểu của làng Hakka.",
      food_bamboo_tags: ["Hakka tươi sạch", "Kết cấu giòn", "Nước suối núi"],
      food_soup_name: "Súp mẹ Fan",
      food_soup_short: "Súp bánh nếp đậm đà nấu bằng nước dùng xương gà. Ấm lòng người ăn.",
      food_soup_desc: "Món ăn tâm hồn Hakka tại Tam Hàng. Nước dùng gà với hẹ, cần tây và hành tím. Những viên bánh gạo thấm đẫm nước súp—món khoái khẩu địa phương.",
      food_soup_tags: ["Súp đậm đà", "Hakka chính gốc", "Nổi tiếng Tam Hàng"],
      food_moon_name: "Bánh mặt trăng",
      food_moon_short: "Bánh khoai lang vàng óng. Đơn giản, ngọt ngào và tượng trưng cho sự đoàn viên.",
      food_moon_desc: "Món ăn Trung thu truyền thống của người Hakka. Vỏ mỏng mềm với nhân khoai lang ngọt. Hình tròn như trăng rằm, tượng trưng cho sự sum họp và mùa màng.",
      food_moon_tags: ["Khoai lang ngọt", "Trung thu truyền thống"],
      food_sauce_name: "Sốt quất Hakka",
      food_sauce_short: "Nổi tiếng với vị chua cay độc đáo. Kết hợp hoàn hảo với thịt gà.",
      food_sauce_desc: "Loại sốt tiêu biểu của văn hóa Hakka làm từ quất. Vị chua thanh, đôi khi có chút ớt, rất hợp với gà luộc và thịt lợn muối.",
      food_sauce_tags: ["Bí mật Hakka", "Chua thanh", "Hợp với món thịt"]
    }
  };

  const ft = translations[lang] || translations["zh-TW"];

  const foods = [
    { 
      id: "fish",
      name: ft.food_fish_name, 
      short: ft.food_fish_short,
      desc: ft.food_fish_desc, 
      x: "25%", y: "45%", 
      img: "https://i.ibb.co/jvm9gQ71/image.jpg",
      tags: ft.food_fish_tags,
      pointStyle: { marginLeft: "-27px", marginTop: "-27px", paddingLeft: "21px", paddingTop: "27px", width: "42.9722px", height: "54.9653px", paddingBottom: "9px" }
    },
    { 
      id: "bun",
      name: ft.food_bun_name, 
      short: ft.food_bun_short,
      desc: ft.food_bun_desc, 
      x: "45%", y: "35%", 
      img: "https://i.ibb.co/bjfdJKVX/image.png",
      tags: ft.food_bun_tags,
      pointStyle: { marginLeft: "-49px", marginTop: "-37px", paddingLeft: "28px", paddingTop: "29px", marginRight: "-3px", marginBottom: "-3px", width: "88.914px", height: "56.9583px" }
    },
    { 
      id: "niu",
      name: ft.food_niu_name, 
      short: ft.food_niu_short,
      desc: ft.food_niu_desc, 
      x: "32%", y: "68%", 
      img: "https://i.ibb.co/8gpqT9CH/image.png",
      tags: ft.food_niu_tags,
      pointStyle: { marginLeft: "8px", marginTop: "-31px", paddingTop: "26px", paddingLeft: "23px", width: "44.9838px", height: "53.9653px" }
    },
    { 
      id: "tofu",
      name: ft.food_tofu_name, 
      short: ft.food_tofu_short,
      desc: ft.food_tofu_desc, 
      x: "78%", y: "42%", 
      img: "https://i.ibb.co/9krCBSHs/image.png",
      tags: ft.food_tofu_tags,
      pointStyle: { marginLeft: "-40px", marginTop: "-26px", paddingLeft: "42px", paddingTop: "26px", width: "84.9491px", height: "53.9653px", marginRight: "0px" },
      popupDir: "left"
    },
    { 
      id: "bamboo",
      name: ft.food_bamboo_name, 
      short: ft.food_bamboo_short,
      desc: ft.food_bamboo_desc, 
      x: "15%", y: "20%", 
      img: "https://i.ibb.co/mCKLgypm/image.png",
      tags: ft.food_bamboo_tags,
      pointStyle: { marginLeft: "-38px", marginTop: "-7px", paddingLeft: "24px", paddingTop: "29px", width: "45.9838px", height: "58.9653px" }
    },
    { 
      id: "soup",
      name: ft.food_soup_name, 
      short: ft.food_soup_short,
      desc: ft.food_soup_desc, 
      x: "60%", y: "25%", 
      img: "https://i.ibb.co/FkNcG9QV/image.png",
      tags: ft.food_soup_tags,
      pointStyle: { marginLeft: "-39px", marginTop: "-32px", paddingTop: "26px", paddingLeft: "46px", width: "91.9375px", height: "52.9653px" },
      popupDir: "left"
    },
    { 
      id: "moon",
      name: ft.food_moon_name, 
      short: ft.food_moon_short,
      desc: ft.food_moon_desc, 
      x: "80%", y: "70%", 
      img: "https://i.ibb.co/RpHFvn55/image.png",
      tags: ft.food_moon_tags,
      pointStyle: { marginLeft: "-10px", marginTop: "2px" },
      popupDir: "left"
    },
    { 
      id: "sauce",
      name: ft.food_sauce_name, 
      short: ft.food_sauce_short,
      desc: ft.food_sauce_desc, 
      x: "15%", y: "75%", 
      img: "https://i.ibb.co/8gr3hHqJ/image.png",
      tags: ft.food_sauce_tags,
      pointStyle: { marginLeft: "13px", marginTop: "3px" },
      popupDir: "right-up"
    }
  ];

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
    <div className="min-h-screen pt-28 pb-20 bg-white selection:bg-hakka-red/20 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-hakka-red font-bold mb-12 hover:translate-x-1 transition-transform">
          <ArrowLeft className="w-5 h-5" /> {ft.back}
        </Link>
        <h1 className={`font-serif text-hakka-brown font-black mb-6 ${lang === 'en' || lang === 'vi' ? 'text-4xl md:text-6xl' : 'text-5xl'}`}>{ft.title}</h1>
        <p className={`text-slate-500 mb-8 font-medium leading-relaxed ${lang === 'en' || lang === 'vi' ? 'text-lg' : 'text-xl'}`}>{ft.subtitle}</p>
        <div className="text-center mb-8">
          <p className="text-sm font-bold text-hakka-red inline-block bg-hakka-red/5 px-6 py-2 rounded-full border border-hakka-red/10">
            {ft.hint}
          </p>
        </div>
        
        <div id="food-map" className="relative aspect-video rounded-xl md:rounded-3xl border-4 border-white shadow-2xl overflow-hidden mb-8 md:mb-20 group scroll-mt-36">
          <img src="https://i.ibb.co/DDjknh00/foods-map.png" alt="Food Map" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000" referrerPolicy="no-referrer" />
          
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
           
           <h2 className={`font-serif text-hakka-brown font-black mb-8 md:mb-16 relative z-10 bg-white inline-block px-12 left-1/2 -translate-x-1/2 whitespace-nowrap ${lang === 'en' || lang === 'vi' ? 'text-3xl md:text-5xl' : 'text-4xl'}`}>
             {ft.detail_title}
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
                       <span className="text-xs font-black tracking-[0.3em] uppercase">{ft.point_label}</span>
                    </div>
                    <h3 className={`font-serif text-hakka-brown font-black ${lang === 'en' || lang === 'vi' ? 'text-3xl md:text-5xl' : 'text-5xl'}`}>{food.name}</h3>
                    <p className={`text-slate-600 leading-relaxed font-medium ${lang === 'en' || lang === 'vi' ? 'text-lg' : 'text-xl'}`}>
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
          <span>{ft.float_btn}</span>
        </motion.button>
      )}
    </div>
  );
};

export const BondingDetail = () => {
  const { lang } = useTranslation();
  const location = useLocation();
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const translations: any = {
    "zh-TW": {
      back: "返回首頁",
      title: "服務專區",
      quote: "「讓每位冒險家都能找到最適合的守護服務。」",
      intro: "雖然我們的探險吸引了各種對文化有興趣的團隊共同參與，但我們致力於為不同需求的客群提供精準服務。無論是帶著孩子的家庭、追求完美的攝影師、銀髮長輩還是企業團隊，在此都能找到最周全的支援。",
      kids: {
        title: "親子專區",
        desc: "專場設計：協作解謎促進親子情感連結。",
        services: [
          "協作解謎任務包：設計需親子共同思考的關卡。",
          "挖沙趣：客家文化館提供3種專業挖沙遊戲組供現場借用。",
          "嬰兒車租借：免費提供租借（須押證件）。"
        ]
      },
      photo: {
        title: "時尚打卡專區",
        desc: "專為愛好攝影與分享的年輕族群設計，捕捉大溪最美一面。",
        services: [
          "蝴蝶花廊：夢幻的自然光影交織。",
          "三坑泉水與水圳隧道口：復古與神祕的絕佳背景。",
          "客家老街：百年時光的影像定型。",
          "三坑鐵馬道瞭望台：俯瞰大漢溪絕佳視野。"
        ]
      },
      team: {
        title: "大型團體專區",
        desc: "完善的場地租借服務，滿足公司團體與大型團體活動需求。",
        services: [
          "專業場地：客家文化館提供演藝廳、視聽簡報室租賃。",
          "寬廣空間：前廣場可供大型團體活動規劃使用。",
          "配套行程：供公司若有規劃團體活動可租借場地。"
        ]
      },
      elder: {
        title: "銀髮專區",
        desc: "友善無障礙環境，確保每位長輩都能舒適體驗文化之魂。",
        services: [
          "輪椅租借：客家文化館提供免費輪椅借用（須押證件）。",
          "休息點安排：密集的休憩區規劃，享受慢遊步調。"
        ]
      }
    },
    "zh-CN": {
      back: "返回首页",
      title: "服务专区",
      quote: "“让每位冒险家都能找到最适合的守护服务。”",
      intro: "虽然我们的探险吸引了各种对文化感兴趣的团队共同参与，但我们致力于为不同需求的客群提供精准服务。无论是带着孩子的家庭、追求完美的摄影师、银发长辈还是企业团队，在此都能找到最周全的支援。",
      kids: {
        title: "亲子专区",
        desc: "专场设计：协作解谜促进亲子情感连结。",
        services: [
          "协作解谜任务包：设计需亲子共同思考的关卡。",
          "挖沙趣：客家文化馆提供3种专业挖沙游戏组供现场借用。",
          "婴儿车租借：免费提供租借（须押证件）。"
        ]
      },
      photo: {
        title: "时尚打卡专区",
        desc: "专为爱好摄影与分享的年轻族群设计，捕捉大溪最美一面。",
        services: [
          "蝴蝶花廊：梦幻的自然光影交织。",
          "三坑泉水与水圳隧道口：复古与神秘的绝佳背景。",
          "客家老街：百年时光的影像定型。",
          "三坑铁马道瞭望台：俯瞰大汉溪绝佳视野。"
        ]
      },
      team: {
        title: "大型团体专区",
        desc: "完善的场地租借服务，满足公司团体与大型团体活动需求。",
        services: [
          "专业场地：客家文化馆提供演艺厅、视听简报室租赁。",
          "宽广空间：前广场可供大型团体活动规划使用。",
          "配套行程：供公司若有规划团体活动可租借场地。"
        ]
      },
      elder: {
        title: "银发专区",
        desc: "友善无障碍环境，确保每位长辈都能舒适体验文化之魂。",
        services: [
          "轮椅租借：客家文化馆提供免费轮椅借用（须押证件）。",
          "休息点安排：密集的休憩区规划，享受慢游步调。"
        ]
      }
    },
    "en": {
      back: "Back Home",
      title: "Service Zones",
      quote: " 'Every adventurer finds their perfect support here.' ",
      intro: "Our adventures attract diverse groups. We are committed to providing precise services for families, photographers, seniors, and corporate teams to ensure a complete support system.",
      kids: {
        title: "Family Zone",
        desc: "Special Design: Collaborative puzzles to strengthen family bonds.",
        services: [
          "Family Task Kits: Levels designed for parents and kids to solve together.",
          "Sand Play: 3 professional sand toy sets available at the Hakka Culture Museum.",
          "Stroller Rental: Free rental available (ID deposit required)."
        ]
      },
      photo: {
        title: "Photo & Check-in",
        desc: "Designed for photographers and social sharers to capture Daxi's beauty.",
        services: [
          "Butterfly Gallery: Dreamy natural light and shadow play.",
          "Sanxing Springs & Canal: Perfect vintage and mysterious backgrounds.",
          "Daxi Old Street: Century-old urban aesthetics.",
          "Bicycle Trail Lookout: Best views overlooking the Dahan River."
        ]
      },
      team: {
        title: "Corporate & Groups",
        desc: "Complete venue rental services for team building and large events.",
        services: [
          "Professional Venue: Theaters and audio-visual rooms for rent at the museum.",
          "Wide Open Spaces: Main plaza available for large group activity planning.",
          "Custom Itineraries: Supporting venues for corporate activity planning."
        ]
      },
      elder: {
        title: "Senior Friendly",
        desc: "Barrier-free environment ensuring seniors enjoy the culture comfortably.",
        services: [
          "Wheelchair Rental: Free wheelchairs provided at the Hakka Culture Museum.",
          "Rest Point Planning: Frequent rest stops designed for a slow, relaxed pace."
        ]
      }
    },
    "vi": {
      back: "Trở về trang chủ",
      title: "Khu vực dịch vụ",
      quote: " 'Mọi nhà thám hiểm đều tìm thấy sự hỗ trợ hoàn hảo tại đây.' ",
      intro: "Cuộc phiêu lưu của chúng tôi thu hút nhiều nhóm khác nhau. Chúng tôi cam kết cung cấp dịch vụ chính xác cho gia đình, nhiếp ảnh gia, người cao tuổi và doanh nghiệp.",
      kids: {
        title: "Khu vực Gia đình",
        desc: "Thiết kế đặc biệt: Giải đố hợp tác để thắt chặt tình cảm gia đình.",
        services: [
          "Bộ nhiệm vụ học tập: Các màn chơi yêu cầu cha mẹ và con cái cùng suy nghĩ.",
          "Trò chơi với cát: 3 bộ đồ chơi cát chuyên nghiệp có sẵn tại Bảo tàng Văn hóa Hakka.",
          "Cho thuê xe đẩy: Miễn phí (yêu cầu ký gửi giấy tờ tùy thân)."
        ]
      },
      photo: {
        title: "Khu vực Check-in",
        desc: "Dành cho những người yêu nhiếp ảnh để ghi lại vẻ đẹp tuyệt nhất của Daxi.",
        services: [
          "Phòng trưng bày bướm: Ánh sáng và bóng tối tự nhiên đầy thơ mộng.",
          "Suối Tam Hàng & Cổng hầm: Bối cảnh cổ điển và bí ẩn hoàn hảo.",
          "Phố cổ Daxi: Hình ảnh vượt thời gian của trăm năm lịch sử.",
          "Đài quan sát thung lũng: Tầm nhìn tuyệt vời nhìn ra sông Dahan."
        ]
      },
      team: {
        title: "Khu vực Đoàn thể",
        desc: "Dịch vụ cho thuê địa điểm hoàn hảo cho đoàn thể và hoạt động quy mô lớn.",
        services: [
          "Địa điểm chuyên nghiệp: Phòng diễn nghệ thuật, phòng nghe nhìn có sẵn tại kho lưu trữ.",
          "Không gian rộng lớn: Quảng trường phía trước dành cho quy hoạch quy mô lớn.",
          "Hỗ trợ lịch trình: Hỗ trợ địa điểm cho kế hoạch hoạt động của công ty."
        ]
      },
      elder: {
        title: "Khu vực Người cao tuổi",
        desc: "Môi trường không rào cản, đảm bảo mọi người cao tuổi đều thoải mái trải nghiệm.",
        services: [
          "Cho thuê xe lăn: Có sẵn tại Bảo tàng Văn hóa Hakka (yêu cầu ký gửi giấy tờ).",
          "Điểm nghỉ chân: Quy hoạch điểm nghỉ dày đặc để tận hưởng nhịp độ chậm rãi."
        ]
      }
    }
  };

  const bt = translations[lang] || translations["zh-TW"];

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
      title: bt.kids.title,
      desc: bt.kids.desc,
      services: bt.kids.services,
      icon: <Heart className="w-8 h-8" />,
      color: "bg-hakka-cream"
    },
    {
      title: bt.photo.title,
      desc: bt.photo.desc,
      services: bt.photo.services,
      icon: <Camera className="w-8 h-8" />,
      color: "bg-white"
    },
    {
      title: bt.team.title,
      desc: bt.team.desc,
      services: bt.team.services,
      icon: <Users className="w-8 h-8" />,
      color: "bg-hakka-cream"
    },
    {
      title: bt.elder.title,
      desc: bt.elder.desc,
      services: bt.elder.services,
      icon: <Heart className="w-8 h-8" />,
      color: "bg-white"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-hakka-cream font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-hakka-red font-bold mb-12 hover:translate-x-1 transition-transform">
          <ArrowLeft className="w-5 h-5" /> {bt.back}
        </Link>
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className={`section-title ${lang === 'en' || lang === 'vi' ? 'text-4xl md:text-6xl' : ''}`}>{bt.title}</h1>
          <p className={`font-serif text-hakka-brown mb-8 italic font-black ${lang === 'en' || lang === 'vi' ? 'text-xl md:text-3xl' : 'text-2xl'}`}>{bt.quote}</p>
          <p className={`text-slate-600 leading-relaxed font-medium ${lang === 'en' || lang === 'vi' ? 'text-lg' : 'text-xl'}`}>
            {bt.intro}
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
                  animate={shouldAnimate && (section.title === bt.kids.title) ? {
                    scale: [1, 1.4, 1.4, 1.3, 1.3, 1],
                    rotate: [0, -12, 12, -12, 12, 0],
                  } : {}}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="w-20 h-20 bg-hakka-red text-white rounded-3xl flex items-center justify-center mb-6 shadow-xl"
                >
                  {section.icon}
                </motion.div>
                <h3 className={`font-serif text-hakka-brown font-black mb-4 ${lang === 'en' || lang === 'vi' ? 'text-2xl md:text-4xl' : 'text-3xl'}`}>{section.title}</h3>
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
