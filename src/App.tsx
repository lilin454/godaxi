
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import { useState, createContext, useContext, useEffect } from "react";
import { motion } from "motion/react";
import { Search, MapPin, Utensils, Users, ArrowRight, Globe, ChevronDown, Menu, X, Sparkles, Smartphone, BookOpen, Clock, Compass } from "lucide-react";
import { Footer } from "./components/Footer";
import { StoryIntro } from "./components/StoryIntro";
import { PuzzleDetail, FoodDetail, BondingDetail } from "./components/Details";
import { Booking } from "./components/Booking";
import { About } from "./components/About";
import { Events } from "./components/Events";
import { RouteIntro } from "./components/RouteIntro";

import { FAQ } from "./components/FAQ";
import { EventDetail } from "./components/EventDetail";

const LanguageContext = createContext({ lang: "zh", setLang: (l: string) => {} });

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const translations: any = {
  zh: {
    story: "故事序章",
    puzzle: "實境解謎",
    route: "行程介紹",
    food: "美食地圖",
    events: "主題活動",
    faq: "常見QA",
    about: "認識我們",
    booking: "我要報名！！",
    hero_badge: ["#桃園一日遊", "#實境解謎", "#親子解謎首選"],
    hero_title_1: "一場讓全家",
    hero_title_2: "一起解開的",
    hero_title_3: "客家冒險",
    hero_desc: "「我們賣的不是解謎，是一段親子共同完成的記憶。」走進大溪與龍潭的街廓，找回被封印的文化碎片。",
    hero_btn_1: "開啟冒險任務",
    hero_btn_2: "觀看故事序章",
    highlight_puzzle_title: "實境解謎之旅",
    highlight_puzzle_desc: "不是走馬看花，是全家一起在老街、水圳中尋找線索、解開任務。",
    highlight_route_title: "景點與行程",
    highlight_route_desc: "精選三坑鐵馬道、客家文化館、大溪老街、木博館等精華地標，包車暢遊免除交通煩憂！",
    highlight_food_title: "美食感官體驗",
    highlight_food_desc: "邊玩邊吃，豆干、活魚料理、牛汶水，用味覺加深您的文化記憶。",
    highlight_bonding_title: "服務專區",
    highlight_bonding_desc: "專為親子協作、網美景點打卡、公司與大型團體場地租借、以及銀髮長輩友善無障礙設施提供最貼心、免除交通與規劃煩憂的尊榮客製服務！",
    cta_text: "「冒險就在家門口，我們一起出發吧！」"
  },
  en: {
    story: "Story Prologue",
    puzzle: "Real-life Puzzle",
    route: "Itinerary",
    food: "Food Map",
    events: "Themed Events",
    faq: "FAQ",
    about: "About Us",
    booking: "Register Now!!",
    hero_badge: ["#FamilyTopPick"],
    hero_title_1: "An Adventure for",
    hero_title_2: "the Whole Family",
    hero_title_3: "Hakka Quest",
    hero_desc: " 'What we sell is not a puzzle, but a memory completed by the family.' Walk into the streets of Daxi and Longtan, and find the sealed cultural fragments.",
    hero_btn_1: "Start Mission",
    hero_btn_2: "Watch Prologue",
    highlight_puzzle_title: "Puzzle Journey",
    highlight_puzzle_desc: "Not just sightseeing; work with your family to find clues and solve missions in old streets and canals.",
    highlight_route_title: "Spots & Itinerary",
    highlight_route_desc: "Explore top cultural locations including old streets, bicycle trails, and museums with full-journey chartered bus.",
    highlight_food_title: "Food Sensory Exp",
    highlight_food_desc: "Eat while playing. Dried tofu, steamed fish, Niu Wen Shui—deepen your cultural memory with taste.",
    highlight_bonding_title: "Service Zone",
    highlight_bonding_desc: "Tailored services for families, photo-taking, corporate events, and seniors to ensure stress-free trips.",
    cta_text: " 'Adventure is at your doorstep, let us set off together!' "
  },
  vi: {
    story: "Mở đầu câu chuyện",
    puzzle: "Giải đố thực tế",
    route: "Lịch trình",
    food: "Bản đồ ẩm thực",
    events: "Sự kiện chủ đề",
    faq: "Hỏi đáp (FAQ)",
    about: "Về chúng tôi",
    booking: "Đăng ký ngay!!",
    hero_badge: ["#LựaChọnHàngĐầuGiaĐình"],
    hero_title_1: "Một cuộc phiêu lưu",
    hero_title_2: "cho cả gia đình",
    hero_title_3: "Hành trình Hakka",
    hero_desc: " 'Chúng tôi không bán giải đố, chúng tôi bán kỷ niệm gia đình.' Bước vào Daxi và Longtan, tìm lại những mảnh văn hóa bị phong ấn.",
    hero_btn_1: "Bắt đầu nhiệm vụ",
    hero_btn_2: "Xem phần mở đầu",
    highlight_puzzle_title: "Hành trình giải đố",
    highlight_puzzle_desc: "Không chỉ là tham quan; cùng gia đình tìm manh mối và giải nhiệm vụ tại các khu phố cổ.",
    highlight_route_title: "Điểm đến & Lịch trình",
    highlight_route_desc: "Khám phá phố cổ Daxi, đường đạp xe Sankeng, nhà bảo tàng với dịch vụ xe trọn gói suốt hành trình.",
    highlight_food_title: "Trải nghiệm ẩm thực",
    highlight_food_desc: "Vừa chơi vừa ăn. Đậu phụ khô, cá hấp—làm sâu sắc thêm ký ức văn hóa bằng vị giác.",
    highlight_bonding_title: "Dịch vụ chuyên khu",
    highlight_bonding_desc: "Cung cấp dịch vụ tùy chỉnh dành riêng cho gia đình, chụp ảnh nghệ thuật, sự kiện nhóm và người cao tuổi.",
    cta_text: " 'Cuộc phiêu lưu ngay trước cửa nhà, chúng ta hãy cùng nhau lên đường!' "
  },
  id: {
    story: "Prolog Cerita",
    puzzle: "Teka-teki Nyata",
    route: "Rute Perjalanan",
    food: "Peta Kuliner",
    events: "Acara Bertema",
    faq: "FAQ",
    about: "Tentang Kami",
    booking: "Daftar Sekarang!!",
    hero_badge: ["#PilihanUtamaKeluarga"],
    hero_title_1: "Petualangan untuk",
    hero_title_2: "Selaruh Keluarga",
    hero_title_3: "Ekspedisi Hakka",
    hero_desc: " 'Kami tidak menjual teka-teki, tapi kenangan keluarga.' Masuki jalanan Daxi dan Longtan, temukan serpihan budaya yang tersegel.",
    hero_btn_1: "Mulai Misi",
    hero_btn_2: "Tonton Prolog",
    highlight_puzzle_title: "Perjalanan Teka-teki",
    highlight_puzzle_desc: "Bukan sekadar tamasya; bekerja sama dengan keluarga menemukan petunjuk di jalanan tua.",
    highlight_route_title: "Rute & Perjalanan",
    highlight_route_desc: "Menyusuri jalan kuno Daxi, Sankeng, dan museum budaya melalui bus pariwisata carteran sewaan.",
    highlight_food_title: "Pengalaman Kuliner",
    highlight_food_desc: "Makan sambil bermain. Tahu kering, ikan kukus—perdalam memori budaya dengan rasa.",
    highlight_bonding_title: "Layanan Khusus",
    highlight_bonding_desc: "Dukungan penuh untuk keluarga, pencinta foto, acara perusahaan, dan lansia agar semua merasa nyaman.",
    cta_text: " 'Petualangan ada di depan pintu, mari kita berangkat bersama!' "
  }
};

const Nav = () => {
  const { lang, setLang } = useContext(LanguageContext);
  const t = translations[lang] || translations.zh;
  const [showLang, setShowLang] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const languages = [
    { code: "zh", name: "繁體中文" },
    { code: "en", name: "English" },
    { code: "vi", name: "Tiếng Việt" },
    { code: "id", name: "Bahasa Indonesia" },
  ];

  const menuItems = [
    { to: "/puzzle", label: t.puzzle },
    { to: "/route", label: t.route },
    { to: "/food", label: t.food },
    { to: "/events", label: t.events },
    { to: "/faq", label: t.faq },
    { to: "/about", label: t.about },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-hakka-cream/90 backdrop-blur-md border-b border-hakka-red/10">
      <div className="mx-auto max-w-7xl px-6 h-28 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4 group cursor-pointer" onClick={() => setIsMenuOpen(false)}>
          <img src="/logo.png" alt="桃客大溪" style={{ width: '81.4213px', height: 'auto' }} className="object-contain transition-transform group-hover:scale-110" referrerPolicy="no-referrer" />
          <div className="leading-tight">
            <span className="font-serif text-3xl md:text-4xl font-black text-hakka-red block tracking-tighter shrink-0">桃客大溪</span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-hakka-green block uppercase whitespace-nowrap">桃園客家旅遊實境解謎</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div 
          style={{ marginBottom: '0px', marginRight: '-29px' }}
          className="hidden xl:flex items-center gap-8 font-bold text-[18px] uppercase tracking-widest text-hakka-green"
        >
          {menuItems.map((item) => (
            <Link key={item.to} to={item.to} className="hover:text-hakka-red transition-colors border-b-2 border-transparent hover:border-hakka-red py-1">
              {item.label}
            </Link>
          ))}
          
          <div className="relative">
             <button 
                onClick={() => setShowLang(!showLang)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-hakka-red/20 text-hakka-red hover:bg-hakka-red/5 transition-colors"
             >
                <Globe className="w-4 h-4" />
                <span className="text-[14px]">{languages.find(l => l.code === lang)?.name}</span>
                <ChevronDown className="w-3 h-3" />
             </button>
             {showLang && (
               <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden text-slate-600 font-sans normal-case tracking-normal py-2 animate-in fade-in zoom-in duration-200">
                  {languages.map(l => (
                    <button 
                      key={l.code}
                      onClick={() => { setLang(l.code); setShowLang(false); }}
                      className={`w-full text-left px-4 py-2 hover:bg-hakka-cream transition-colors text-sm ${lang === l.code ? "text-hakka-red font-bold" : ""}`}
                    >
                      {l.name}
                    </button>
                  ))}
               </div>
             )}
          </div>

          <Link to="/booking" className="btn-primary py-2.5 px-6 whitespace-nowrap text-[14px]">{t.booking}</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="xl:hidden flex items-center gap-4">
          <button 
             onClick={() => {
               if (isMenuOpen) {
                 setIsMenuOpen(false);
               } else {
                 setIsMenuOpen(true);
               }
             }}
             className="p-2 text-hakka-red hover:bg-hakka-red/5 rounded-full transition-colors"
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          style={{ height: '350px' }}
          className="xl:hidden fixed inset-0 top-28 bg-hakka-cream/98 backdrop-blur-2xl z-40 flex flex-col p-8 pb-12 gap-8 overflow-y-auto max-h-[calc(100vh-7rem)]"
        >
          <div className="flex flex-col gap-6">
            {menuItems.map((item) => (
              <Link 
                key={item.to} 
                to={item.to} 
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl font-serif font-black text-hakka-brown hover:text-hakka-red transition-colors flex items-center justify-between group"
              >
                {item.label}
                <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>

          <div className="h-px bg-hakka-red/10 w-full"></div>

          <div className="flex flex-col gap-4">
            <p className="text-[10px] font-bold text-hakka-green uppercase tracking-widest">選擇語言</p>
            <div className="grid grid-cols-2 gap-3">
              {languages.map(l => (
                <button 
                  key={l.code}
                  onClick={() => { setLang(l.code); setIsMenuOpen(false); }}
                  className={`px-4 py-3 rounded-2xl border text-left text-sm font-bold transition-all ${lang === l.code ? "bg-hakka-red text-white border-hakka-red shadow-lg" : "bg-white text-hakka-brown border-slate-100 hover:border-hakka-red/20"}`}
                >
                  {l.name}
                </button>
              ))}
            </div>
          </div>

          <Link 
            to="/booking" 
            onClick={() => setIsMenuOpen(false)}
            className="btn-primary py-6 text-xl text-center mt-auto"
          >
            {t.booking}
          </Link>
        </motion.div>
      )}
    </nav>
  );
};

const Home = () => {
  const { lang } = useContext(LanguageContext);
  const t = translations[lang] || translations.zh;

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[90vh] pt-32 pb-20 flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 items-center gap-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-wrap gap-3 mb-6">
              {Array.isArray(t.hero_badge) ? t.hero_badge.map((badge: string, idx: number) => (
                <div key={idx} className="px-5 py-2 bg-hakka-red/5 text-hakka-red text-xs font-bold rounded-full tracking-widest shadow-sm border border-hakka-red/10">
                  {badge}
                </div>
              )) : (
                <div className="px-5 py-2 bg-hakka-red/5 text-hakka-red text-xs font-bold rounded-full tracking-widest shadow-sm border border-hakka-red/10">
                  {t.hero_badge}
                </div>
              )}
            </div>
            <h1 className="font-serif text-6xl md:text-8xl font-black text-hakka-brown mb-8 leading-[1.1]">
              {t.hero_title_1}<br />
              {t.hero_title_2}<br />
              <span className="text-hakka-red">{t.hero_title_3}</span>
            </h1>
            <p className="text-xl text-hakka-green/80 mb-10 max-w-lg leading-relaxed font-medium">
              {t.hero_desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/booking" className="btn-primary text-lg px-10 py-4 flex items-center justify-center gap-2">
                {t.hero_btn_1} <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/story" className="px-10 py-4 rounded-full border-2 border-hakka-red text-hakka-red font-bold hover:bg-hakka-red hover:text-white transition-all text-center">
                {t.hero_btn_2}
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="w-full aspect-square bg-[#EAE7E0] rounded-[40px] border-4 border-white shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#A64B2A_1px,transparent_1px)] [background-size:20px_20px]"></div>
              
              <div className="absolute top-1/4 left-1/4 bg-white p-4 rounded-2xl shadow-lg border-b-4 border-orange-200">
                <span className="text-[10px] text-slate-400 block font-bold mb-1 uppercase tracking-tighter">任務 01</span>
                <span className="font-serif font-bold text-sm text-hakka-brown">鍾肇政文學生活園區</span>
              </div>
              
              <div className="absolute top-1/2 right-1/4 bg-white p-4 rounded-2xl shadow-lg border-b-4 border-orange-200">
                <span className="text-[10px] text-slate-400 block font-bold mb-1 uppercase tracking-tighter">任務 02</span>
                <span className="font-serif font-bold text-sm text-hakka-brown">客家文化館</span>
              </div>

              <div className="absolute bottom-1/4 left-1/3 bg-hakka-red text-white p-4 rounded-full shadow-2xl animate-pulse">
                <MapPin className="w-8 h-8" />
              </div>

              <div className="absolute bottom-8 right-8 bg-white p-4 rounded-2xl shadow-lg border-b-4 border-orange-200">
                <span className="text-[10px] text-slate-400 block font-bold mb-1 uppercase tracking-tighter">任務 05</span>
                <span className="font-serif font-bold text-sm text-hakka-brown">木藝生態博物館</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute top-0 right-0 w-1/3 h-full bg-hakka-gold/5 pointer-events-none -z-10"></div>
      </section>

      {/* Why Choose Taoke Daxi (Moved here to replace high-impact banner as per user request) */}
      <section className="py-24 bg-hakka-cream border-y border-hakka-red/5 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-hakka-gold/5 rounded-br-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-hakka-red/5 rounded-tl-[160px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-black text-hakka-brown mb-4">
              桃客大溪實境解謎
            </h2>
            <p className="text-slate-500 text-base md:text-lg font-medium">
              不只是旅遊，更是一場參與式的客家文化啟迪之旅
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "深度故事世界觀",
                desc: "將客家歷史、魯冰花等文學記憶融入解謎故事，打造極具情懷的沉浸冒險。",
                icon: <Sparkles className="w-6 h-6 text-hakka-red" />,
                bg: "bg-hakka-red/5"
              },
              {
                title: "APP輔助解謎",
                desc: "數位科技與老街地景結合，手機引導精采劇情，讓解密冒險隨時展開。",
                icon: <Smartphone className="w-6 h-6 text-hakka-green" />,
                bg: "bg-hakka-green/5"
              },
              {
                title: "美食文化整合",
                desc: "邊玩邊享用特色滷豆干、牛汶水與客家活魚料理，讓舌尖美味成為尋寶地圖的一部分。",
                icon: <Utensils className="w-6 h-6 text-hakka-brown" />,
                bg: "bg-hakka-brown/5"
              },
              {
                title: "實體探索包設計",
                desc: "精美的實體線索探索包，融合傳統工藝智慧，讓親子動手拼湊出專屬記憶之鑰。",
                icon: <BookOpen className="w-6 h-6 text-hakka-gold" />,
                bg: "bg-hakka-gold/5"
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 flex flex-col h-full"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shrink-0 ${feature.bg}`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif font-black text-hakka-brown mb-3">{feature.title}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed mt-auto">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Grid (Now standard 4-column with Route intro inserted between Puzzle and Food) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/puzzle" className="block group">
              <div className="p-8 rounded-[3rem] h-full bg-hakka-cream/50 border border-hakka-gold/10 group-hover:bg-hakka-cream transition-all group-hover:shadow-2xl group-hover:-translate-y-2 flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-hakka-red text-white rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-6 transition-transform">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-3xl text-hakka-brown mb-6 font-black">{t.highlight_puzzle_title}</h3>
                  <p className="text-slate-500 leading-relaxed mb-6">{t.highlight_puzzle_desc}</p>
                </div>
                <div className="flex items-center gap-2 text-hakka-red font-bold">了解更多 <ArrowRight className="w-4 h-4" /></div>
              </div>
            </Link>

            <Link to="/route" className="block group">
              <div className="p-8 rounded-[3.5rem] h-full bg-hakka-gold/5 border border-hakka-gold/15 group-hover:bg-hakka-gold/10 transition-all group-hover:shadow-2xl group-hover:-translate-y-2 flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-hakka-gold text-white rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-6 transition-transform shadow-md">
                    <Compass className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-3xl text-hakka-brown mb-6 font-black">{t.highlight_route_title}</h3>
                  <p className="text-slate-500 leading-relaxed mb-6">{t.highlight_route_desc}</p>
                </div>
                <div className="flex items-center gap-2 text-hakka-red font-bold">查看行程介紹 <ArrowRight className="w-4 h-4" /></div>
              </div>
            </Link>

            <Link to="/food" className="block group">
              <div className="p-8 rounded-[3rem] h-full bg-hakka-red/5 border border-hakka-gold/10 group-hover:bg-hakka-red/10 transition-all group-hover:shadow-2xl group-hover:-translate-y-2 flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-hakka-green text-white rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-6 transition-transform">
                    <Utensils className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-3xl text-hakka-brown mb-6 font-black">{t.highlight_food_title}</h3>
                  <p className="text-slate-500 leading-relaxed mb-6">{t.highlight_food_desc}</p>
                </div>
                <div className="flex items-center gap-2 text-hakka-red font-bold">查看美食地圖 <ArrowRight className="w-4 h-4" /></div>
              </div>
            </Link>

            <Link to="/bonding" className="block group">
              <div className="p-8 rounded-[3rem] h-full bg-hakka-green/5 border border-hakka-gold/10 group-hover:bg-hakka-green/10 transition-all group-hover:shadow-2xl group-hover:-translate-y-2 flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-hakka-brown text-white rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-6 transition-transform">
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-3xl text-hakka-brown mb-6 font-black">{t.highlight_bonding_title}</h3>
                  <p className="text-slate-500 leading-relaxed mb-6">{t.highlight_bonding_desc}</p>
                </div>
                <div className="flex items-center gap-2 text-hakka-red font-bold">我們的服務 <ArrowRight className="w-4 h-4" /></div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <div className="py-24 bg-hakka-cream">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="section-title mb-8 italic">{t.cta_text}</h2>
            <Link to="/booking" className="btn-primary text-xl px-16 py-6 inline-block">
               {t.booking}
            </Link>
         </div>
      </div>
    </main>
  );
};

export default function App() {
  const [lang, setLang] = useState("zh");

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col font-sans selection:bg-hakka-red/20">
          <Nav />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/story" element={<StoryIntro />} />
              <Route path="/puzzle" element={<PuzzleDetail />} />
              <Route path="/route" element={<RouteIntro />} />
              <Route path="/food" element={<FoodDetail />} />
              <Route path="/bonding" element={<BondingDetail />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/about" element={<About />} />
              <Route path="/events" element={<Events />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/event-detail/:id" element={<EventDetail />} />
            </Routes>
          </div>
          <Footer />
          
          {/* Global Decorative Key Background */}
          <div className="fixed bottom-0 right-0 p-8 opacity-[0.03] pointer-events-none -z-10">
            <svg className="w-96 h-96 text-hakka-red" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path>
            </svg>
          </div>
        </div>
      </Router>
    </LanguageContext.Provider>
  );
}
