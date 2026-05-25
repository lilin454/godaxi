
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import { useState, createContext, useContext, useEffect } from "react";
import { motion } from "motion/react";
import { Search, MapPin, Utensils, Users, ArrowRight, Globe, ChevronDown, Menu, X, Sparkles, Smartphone, BookOpen, Clock, Compass, Youtube, ExternalLink } from "lucide-react";
import { Footer } from "./components/Footer";
import { StoryIntro } from "./components/StoryIntro";
import { PuzzleDetail, FoodDetail, BondingDetail } from "./components/Details";
import { Booking } from "./components/Booking";
import { About } from "./components/About";
import { Events } from "./components/Events";
import { RouteIntro } from "./components/RouteIntro";

import { FAQ } from "./components/FAQ";
import { EventDetail } from "./components/EventDetail";

const LanguageContext = createContext({ lang: "zh-TW", setLang: (l: string) => {} });

export const useTranslation = () => {
  const { lang } = useContext(LanguageContext);
  return { t: translations[lang] || translations["zh-TW"], lang };
};

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const translations: any = {
  "zh-TW": {
    story: "故事序章",
    puzzle: "實境解謎",
    route: "行程介紹",
    food: "美食地圖",
    events: "主題活動",
    faq: "常見QA",
    about: "認識我們",
    booking: "我要報名！！",
    hero_badge: ["#桃園一日遊", "#實境解謎", "#親子親子首選"],
    hero_title_1: "一場讓全家",
    hero_title_2: "一起解開的",
    hero_title_3: "客家冒險",
    hero_desc: "「我們賣的不是解謎，是一段親子共同完成的記憶。」走進大溪與龍潭的街廓，找回被封印的文化碎片。",
    hero_btn_1: "開啟冒險任務",
    hero_btn_2: "觀看故事序章",
    highlight_puzzle_title: "實境解謎之旅",
    highlight_puzzle_desc: "「用解謎，重新認識客家」\n領取實體探索包，和家人一起解開謎題獲取「大溪幣」，兌換精美好禮！",
    highlight_route_title: "景點與行程",
    highlight_route_desc: "精選三坑鐵馬道、客家文化館、大溪老街、木博館等精華地標，包車暢遊免除交通煩憂！",
    highlight_food_title: "美食感官體驗",
    highlight_food_desc: "邊玩邊吃，豆干、活魚料理、牛汶水，用味覺加深您的文化記憶。",
    highlight_bonding_title: "服務專區",
    highlight_bonding_desc: "專為親子協作、網美景點打卡、公司與大型團體場地租借、以及銀髮長輩友善無障礙設施提供最貼心、免除交通與規劃煩憂的尊榮客製服務！",
    cta_text: "「冒險就在家門口，我們一起出發吧！」",
    why_title: "桃客大溪實境解謎",
    why_subtitle: "不只是旅遊，更是一場參與式的客家文化啟迪之旅",
    f1_title: "深度故事世界觀",
    f1_desc: "將客家歷史、魯冰花等文學記憶融入解謎故事，打造極具情懷的沉浸冒險。",
    f2_title: "LINE Bot 輔助解謎",
    f2_desc: "數位科技與老街地景結合，手機引導精采劇情，讓解密冒險隨時展開。",
    f3_title: "美食文化整合",
    f3_desc: "邊玩邊享用特色滷豆干、牛汶水與客家活魚料理，讓舌尖美味成為尋寶地圖的一部分。",
    f4_title: "在地商家折扣合作",
    f4_desc: "透過解謎獲取桃客專屬「大溪幣」! 可累積兌換精美好禮。等你來挑戰！",
    more: "了解更多",
    view_route: "查看行程介紹",
    view_food: "查看美食地圖",
    our_service: "我們的服務",
    footer_title: "桃客大溪冒險",
    footer_desc: "這不只是旅遊，而是一段探索文化的冒險。讓全家在解謎中看見客家文化的豐厚與美好。",
    footer_contact: "聯絡資訊",
    footer_org: "主辦單位：桃客大溪創意行銷公司",
    footer_follow: "追蹤冒險",
    footer_ig: "點擊進入官方IG",
    footer_line: "點擊加入官方LINE帳號",
    footer_terms: "服務條款",
    footer_privacy: "隱私權政策與保險使用條款",
    footer_refund: "退費規定說明",
    footer_safety: "活動安全指南",
    footer_copy: "© 2026 桃客大溪創意行銷公司 × 中原大學資訊管理系 ALL RIGHTS RESERVED.",
    about_back: "返回首頁",
    about_title: "認識桃客大溪",
    about_slogan: "「以客家文化為世界觀的親子實境解謎旅程」",
    about_intro: "讓旅行，不只是走訪，而是一場共同完成的冒險。",
    about_what_is: "桃客大溪是什麼？",
    about_what_is_p1: "桃客大溪是一個結合「客家文化」、「親子旅遊」與「實境解謎」的沉浸式一日遊品牌。",
    about_what_is_p2: "我們以桃園大溪與龍潭為舞台，串聯在地景點、美食與文化故事，透過互動任務與解謎體驗，讓旅客在探索中認識客家文化，也留下屬於家庭與朋友之間的共同回憶。",
    about_what_is_p3: "我們相信，文化不該只是被閱讀，而是能被親身感受與體驗。",
    about_immersive: "沉浸式共同探索",
    about_philosophy_title: "我們想帶來的，不只是旅行",
    about_philosophy_p1: "桃客大溪希望透過創新的旅遊方式，讓更多人重新認識桃園的客家文化。",
    about_philosophy_p2: "我們期待，每一場解謎旅程，都能成為家人、朋友之間最真實且難忘的共同回憶。",
    about_cta_title: "準備好開始您的冒險了嗎？",
    about_cta_btn: "立即開啟冒險旅程"
  },
  "zh-CN": {
    story: "故事序章",
    puzzle: "实境解谜",
    route: "行程介绍",
    food: "美食地图",
    events: "主题活动",
    faq: "常见QA",
    about: "认识我们",
    booking: "我要报名！！",
    hero_badge: ["#桃园一日游", "#实境解谜", "#亲子优选"],
    hero_title_1: "一场让全家",
    hero_title_2: "一起解开的",
    hero_title_3: "客家冒险",
    hero_desc: "“我们卖的不是解谜，是一段亲子共同完成的回忆。”走进大溪与龙潭的街廓，找回被封印的文化碎片。",
    hero_btn_1: "开启冒险任务",
    hero_btn_2: "观看故事序章",
    highlight_puzzle_title: "实境解谜之旅",
    highlight_puzzle_desc: "“用解谜，重新认识客家”\n领取实体探索包，和家人一起解开谜题获取“大溪币”，兑换精美好礼！",
    highlight_route_title: "景点与行程",
    highlight_route_desc: "精选三坑铁马道、客家文化馆、大溪老街、木博馆等精华地标，提供包车服务，免除交通烦忧！",
    highlight_food_title: "美食感官体验",
    highlight_food_desc: "边玩边吃，豆干、活鱼料理、牛汶水，用味觉加深您的文化记忆。",
    highlight_bonding_title: "服务专区",
    highlight_bonding_desc: "专为亲子协作、网红景点打卡、公司与大型团体场地租赁、以及银发长辈友好无障碍设施提供最贴心定制服务！",
    cta_text: "“冒险就在家门口，我们一起出发吧！”",
    why_title: "桃客大溪实境解谜",
    why_subtitle: "不只是旅游，更是一场参与式的客家文化启迪之旅",
    f1_title: "深度故事世界观",
    f1_desc: "将客家历史、鲁冰花等文学记忆融入解谜故事，打造极具情怀的沉浸冒险。",
    f2_title: "LINE Bot 辅助解谜",
    f2_desc: "数字科技与老街地景结合，手机引导精彩剧情，让解密冒险随时展开。",
    f3_title: "美食文化整合",
    f3_desc: "边玩边享用特色卤豆干、牛汶水与客家活鱼料理，让舌尖美味成为寻宝地图的一部分。",
    f4_title: "在地商家折扣合作",
    f4_desc: "透过解谜获取桃客专属「大溪币」! 可累积兑换精美好礼。等你来挑战！",
    more: "了解更多",
    view_route: "查看行程介绍",
    view_food: "查看美食地图",
    our_service: "我们的服务",
    footer_title: "桃客大溪冒险",
    footer_desc: "这不只是旅游，而是一段探索文化的冒险。让全家在解谜中看见客家文化的丰厚与美好。",
    footer_contact: "联络信息",
    footer_org: "主办单位：桃客大溪创意营销公司",
    footer_follow: "追踪冒险",
    footer_ig: "点击进入官方IG",
    footer_line: "点击加入官方LINE账号",
    footer_terms: "服务条款",
    footer_privacy: "隐私政策与保险使用条款",
    footer_refund: "退款规定说明",
    footer_safety: "活动安全指南",
    footer_copy: "© 2026 桃客大溪创意营销公司 × 中原大学信息管理系 ALL RIGHTS RESERVED.",
    about_back: "返回首页",
    about_title: "认识桃客大溪",
    about_slogan: "“以客家文化为世界观的亲子实境解谜旅程”",
    about_intro: "让旅行，不只是走访，而是一场共同完成的冒险。",
    about_what_is: "桃客大溪是什么？",
    about_what_is_p1: "桃客大溪是一个结合“客家文化”、“亲子旅游”与“实境解谜”的沉浸式一日游品牌。",
    about_what_is_p2: "我们以桃园大溪与龙潭为舞台，串联在地景点、美食与文化故事，通过互动任务与解谜体验，让旅客在探索中认识客家文化，也留下属于家庭与朋友之间的共同回忆。",
    about_what_is_p3: "我们相信，文化不该只是被阅读，而是能被亲身感受与体验。",
    about_immersive: "沉浸式共同探索",
    about_philosophy_title: "我们想带来的，不只是旅行",
    about_philosophy_p1: "桃客大溪希望通过创新的旅游方式，让更多人重新认识桃园的客家文化。",
    about_philosophy_p2: "我们期待，每一场解谜旅程，都能成为家人、朋友之间最真实且难忘的共同回忆。",
    about_cta_title: "准备好开始您的冒险了吗？",
    about_cta_btn: "立即开启冒险旅程"
  },
  en: {
    story: "Prologue",
    puzzle: "Puzzle",
    route: "Itinerary",
    food: "Food Map",
    events: "Events",
    faq: "FAQ",
    about: "About",
    booking: "Book Now!",
    hero_badge: ["#DayTrip", "#LivePuzzle", "#FamilyChoice"],
    hero_title_1: "A Family",
    hero_title_2: "Adventure to",
    hero_title_3: "Unlock Hakka",
    hero_desc: " 'What we sell is not just a puzzle, but a family memory.' Step into the streets of Daxi and Longtan to retrieve sealed cultural fragments.",
    hero_btn_1: "Start Mission",
    hero_btn_2: "Watch Prologue",
    highlight_puzzle_title: "Puzzle Journey",
    highlight_puzzle_desc: " 'Rediscover Hakka through puzzle-solving' \nGet your physical adventure kit, solve puzzles with family to earn 'Daxi Coins', and redeem exquisite gifts!",
    highlight_route_title: "Route & Spots",
    highlight_route_desc: "Explore top cultural spots like old streets and museums with stress-free chartered bus travel!",
    highlight_food_title: "Food Sensory",
    highlight_food_desc: "Eat while playing. Dried tofu, fish dishes, and mochi—deepen your cultural memory with taste.",
    highlight_bonding_title: "Service Zone",
    highlight_bonding_desc: "Tailored services for families, corporate groups, and seniors, ensuring a comfortable and accessible journey.",
    cta_text: " 'Adventure is at your doorstep, let's go together!' ",
    why_title: "Taoke Daxi Real-life Puzzle",
    why_subtitle: "More than travel, it's a participatory journey into Hakka culture.",
    f1_title: "Deep Storytelling",
    f1_desc: "Integrating Hakka history and literature into a puzzle story for a sentimental immersion.",
    f2_title: "LINE Bot-Guided Quest",
    f2_desc: "Combining digital tech with old street scenery, guided by mobile for an instant adventure.",
    f3_title: "Cultural Fusion",
    f3_desc: "Enjoy local delicacies like dried tofu and fish while you explore cultural landmarks.",
    f4_title: "Local Partner Discounts",
    f4_desc: "Earn exclusive 'Daxi Coins' through puzzles to redeem exquisite gifts. Challenge yourself!",
    more: "Learn More",
    view_route: "View Route",
    view_food: "View Food Map",
    our_service: "Our Services",
    footer_title: "Taoke Daxi Adventure",
    footer_desc: "Not just a tour, but an exploration of culture. Let families see the beauty of Hakka culture through puzzles.",
    footer_contact: "Contact Info",
    footer_org: "Organizer: Taoke Daxi Creative Marketing Co.",
    footer_follow: "Follow Adventure",
    footer_ig: "Click to IG",
    footer_line: "Click to LINE",
    footer_terms: "Terms of Service",
    footer_privacy: "Privacy & Insurance",
    footer_refund: "Refund Policy",
    footer_safety: "Safety Guide",
    footer_copy: "© 2026 Taoke Daxi Co. × CYCU IM. ALL RIGHTS RESERVED.",
    about_back: "Return Home",
    about_title: "About Taoke Daxi",
    about_slogan: " 'A family real-life puzzle journey with Hakka culture as the worldview' ",
    about_intro: "Making travel more than just a visit—a shared adventure completed together.",
    about_what_is: "What is Taoke Daxi?",
    about_what_is_p1: "Taoke Daxi is an immersive day-trip brand combining Hakka culture, family travel, and real-life puzzles.",
    about_what_is_p2: "Using Daxi and Longtan as our stage, we connect local spots, food, and culture. Through interactive missions, travelers learn about Hakka culture and create lasting memories with family and friends.",
    about_what_is_p3: "We believe culture should be felt and experienced, not just read about.",
    about_immersive: "Immersive Co-Exploration",
    about_philosophy_title: "More Than Just Travel",
    about_philosophy_p1: "We hope to introduce people to Taoyuan's Hakka culture through innovative travel methods.",
    about_philosophy_p2: "We expect every puzzle journey to become a truly unforgettable shared memory for families and friends.",
    about_cta_title: "Ready to Start Your Adventure?",
    about_cta_btn: "Start the Journey Now"
  },
  vi: {
    story: "Mở đầu",
    puzzle: "Giải đố",
    route: "Hành trình",
    food: "Ẩm thực",
    events: "Sự kiện",
    faq: "Hỏi đáp",
    about: "Chúng tôi",
    booking: "Đăng ký ngay!",
    hero_badge: ["#DuLịchTrongNgày", "#GiảiĐốThựcTế", "#GiaĐìnhYêuThích"],
    hero_title_1: "Cuộc phiêu lưu",
    hero_title_2: "cho cả gia đình",
    hero_title_3: "Hành trình Hakka",
    hero_desc: " 'Chúng tôi không chỉ là giải đố, chúng tôi là ký ức gia đình.' Bước vào phố cổ Daxi và Longtan để tìm lại văn hóa bị lãng quên.",
    hero_btn_1: "Bắt đầu nhiệm vụ",
    hero_btn_2: "Xem phần mở đầu",
    highlight_puzzle_title: "Khám phá giải đố",
    highlight_puzzle_desc: " 'Khám phá lại Hakka bằng cách giải câu đố' \nNhận bộ dụng cụ thực tế, giải câu đố cùng gia đình để tích lũy 'Daxi Coin' và nhận quà tặng!",
    highlight_route_title: "Điểm đến",
    highlight_route_desc: "Khám phá các địa danh văn hóa tiêu biểu bằng dịch vụ xe đưa đón trọn gói, không lo giao thông!",
    highlight_food_title: "Vị giác văn hóa",
    highlight_food_desc: "Vừa chơi vừa ăn. Đậu phụ khô, cá hấp—làm sâu sắc thêm ký ức văn hóa bằng hương vị.",
    highlight_bonding_title: "Khu vực dịch vụ",
    highlight_bonding_desc: "Dịch vụ riêng cho gia đình, nhóm công ty và người cao tuổi, đảm bảo hành trình thoải mái và thuận tiện.",
    cta_text: " 'Cuộc phiêu lưu ngay trước cửa nhà, cùng nhau lên đường nào!' ",
    why_title: "Giải đố Taoke Daxi",
    why_subtitle: "Không chỉ là du lịch, mà là hành trình văn hóa Hakka sống động.",
    f1_title: "Cốt truyện sâu sắc",
    f1_desc: "Kết hợp lịch sử và văn học Hakka vào câu chuyện giải đố để tạo sự đắm chìm cảm xúc.",
    f2_title: "LINE Bot hỗ trợ",
    f2_desc: "Công nghệ kỹ thuật số kết hợp với phố cổ, dẫn dắt bởi điện thoại cho cuộc phiêu lưu tức thì.",
    f3_title: "Tích hợp ẩm thực",
    f3_desc: "Thưởng thức các món đặc sản địa phương trong khi khám phá các địa danh văn hóa.",
    f4_title: "Hợp tác giảm giá",
    f4_desc: "Nhận 'Daxi Coin' độc quyền qua các câu đố để đổi những phần quà tinh xảo!",
    more: "Tìm hiểu thêm",
    view_route: "Xem hành trình",
    view_food: "Xem bản đồ ẩm thực",
    our_service: "Dịch vụ của chúng tôi",
    footer_title: "Phiêu lưu Taoke Daxi",
    footer_desc: "Không chỉ là du lịch, mà là khám phá văn hóa. Hãy để gia đình cảm nhận vẻ đẹp của văn hóa Hakka.",
    footer_contact: "Thông tin liên hệ",
    footer_org: "Tổ chức: Công ty Tiếp thị Sáng tạo Taoke Daxi",
    footer_follow: "Theo dõi cuộc phiêu lưu",
    footer_ig: "Truy cập IG",
    footer_line: "Truy cập LINE",
    footer_terms: "Điều khoản dịch vụ",
    footer_privacy: "Bảo mật & Bảo hiểm",
    footer_refund: "Quy định hoàn tiền",
    footer_safety: "Hướng dẫn an toàn",
    footer_copy: "© 2026 Taoke Daxi × CYCU IM. BẢO LƯU MỌI QUYỀN.",
    about_back: "Trở về trang chủ",
    about_title: "Về Taoke Daxi",
    about_slogan: " 'Hành trình giải đố thực tế gia đình với văn hóa Hakka' ",
    about_intro: "Biến du lịch thành không chỉ là một chuyến thăm—một cuộc phiêu lưu chung cùng nhau.",
    about_what_is: "Taoke Daxi là gì?",
    about_what_is_p1: "Taoke Daxi là thương hiệu du lịch trong ngày kết hợp văn hóa Hakka, du lịch gia đình và giải đố thực tế.",
    about_what_is_p2: "Sử dụng Daxi và Longtan làm sân khấu, chúng tôi kết nối các điểm địa phương, ẩm thực và văn hóa. Qua nhiệm vụ tương tác, du khách học về văn hóa Hakka và tạo kỷ niệm khó quên với người thân.",
    about_what_is_p3: "Chúng tin rằng văn hóa nên được cảm nhận và trải nghiệm, không chỉ đọc qua sách vở.",
    about_immersive: "Đồng khám phá đắm chìm",
    about_philosophy_title: "Hơn cả một chuyến đi",
    about_philosophy_p1: "Chúng tôi hy vọng giới thiệu văn hóa Hakka của Taoyuan qua phương thức du lịch sáng tạo.",
    about_philosophy_p2: "Mong muốn mỗi chuyến giải đố trở thành ký ức thật sự khó quên cho gia đình và bạn bè.",
    about_cta_title: "Sẵn sàng bắt đầu phiêu lưu?",
    about_cta_btn: "Bắt đầu hành trình ngay"
  }
};

const Nav = () => {
  const { lang, setLang } = useContext(LanguageContext);
  const t = translations[lang] || translations.zh;
  const [showLang, setShowLang] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const languages = [
    { code: "zh-TW", name: "繁體中文" },
    { code: "zh-CN", name: "简体中文" },
    { code: "en", name: "English" },
    { code: "vi", name: "Tiếng Việt" },
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
          <img src="https://i.ibb.co/MyjK491K/logo.png" alt="桃客大溪" style={{ width: '81.4213px', height: 'auto' }} className="object-contain transition-transform group-hover:scale-110" referrerPolicy="no-referrer" />
          <div className="leading-tight">
            <span className="font-serif text-3xl md:text-4xl font-black text-hakka-red block tracking-tighter shrink-0">桃客大溪</span>
            <span className={`font-bold tracking-[0.2em] text-hakka-green block uppercase whitespace-nowrap ${lang === 'en' || lang === 'vi' ? 'text-[8px]' : 'text-[10px]'}`}>
              {lang === 'zh-TW' ? '桃園客家旅遊實境解謎' : lang === 'zh-CN' ? '桃园客家旅游实境解谜' : lang === 'vi' ? 'Khám phá giải đố thực tế Hakka Taoyuan' : 'Taoyuan Hakka Travel Real-Life Puzzle'}
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div 
          style={{ marginBottom: '0px', marginRight: '-29px' }}
          className={`hidden xl:flex items-center gap-8 font-bold uppercase tracking-widest text-hakka-green ${lang === 'en' || lang === 'vi' ? 'text-[14px]' : 'text-[18px]'}`}
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
      <section className="relative min-h-[90vh] pt-28 pb-20 flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 items-center gap-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-wrap gap-3 mb-6">
              {Array.isArray(t.hero_badge) ? t.hero_badge.map((badge: string, idx: number) => (
                <div key={idx} className={`px-5 py-2 bg-hakka-red/5 text-hakka-red font-bold rounded-full tracking-widest shadow-sm border border-hakka-red/10 ${lang === 'en' || lang === 'vi' ? 'text-[10px]' : 'text-xs'}`}>
                  {badge}
                </div>
              )) : (
                <div className={`px-5 py-2 bg-hakka-red/5 text-hakka-red font-bold rounded-full tracking-widest shadow-sm border border-hakka-red/10 ${lang === 'en' || lang === 'vi' ? 'text-[10px]' : 'text-xs'}`}>
                  {t.hero_badge}
                </div>
              )}
            </div>
            <h1 className={`font-serif font-black text-hakka-brown mb-8 leading-[1.1] ${lang === 'en' || lang === 'vi' ? 'text-4xl md:text-7xl' : 'text-6xl md:text-8xl'}`}>
              {t.hero_title_1}<br />
              {t.hero_title_2}<br />
              <span className="text-hakka-red">{t.hero_title_3}</span>
            </h1>
            <p className={`text-hakka-green/80 mb-10 max-w-lg leading-relaxed font-medium ${lang === 'en' || lang === 'vi' ? 'text-lg' : 'text-xl'}`}>
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
                <span className="text-[10px] text-slate-400 block font-bold mb-1 uppercase tracking-tighter">任務 05</span>
                <span className="font-serif font-bold text-sm text-hakka-brown">鍾肇政文學生活園區</span>
              </div>
              
              <div className="absolute top-1/2 right-1/4 bg-white p-4 rounded-2xl shadow-lg border-b-4 border-orange-200">
                <span className="text-[10px] text-slate-400 block font-bold mb-1 uppercase tracking-tighter">任務 04</span>
                <span className="font-serif font-bold text-sm text-hakka-brown">客家文化館</span>
              </div>

              <div className="absolute bottom-1/4 left-1/3 bg-hakka-red text-white p-4 rounded-full shadow-2xl animate-pulse">
                <MapPin className="w-8 h-8" />
              </div>

              <div className="absolute bottom-8 right-8 bg-white p-4 rounded-2xl shadow-lg border-b-4 border-orange-200">
                <span className="text-[10px] text-slate-400 block font-bold mb-1 uppercase tracking-tighter">任務 02</span>
                <span className="font-serif font-bold text-sm text-hakka-brown">木藝生態博物館</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute top-0 right-0 w-1/3 h-full bg-hakka-gold/5 pointer-events-none -z-10"></div>
      </section>

      {/* Embedded Loop YouTube Video Section */}
      <section className="py-12 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative group overflow-hidden rounded-xl border-4 border-white shadow-2xl bg-[#EAE7E0] transition-all duration-300 hover:shadow-3xl">
            {/* YouTube embed player configured to loop & autoplay */}
            <div className="w-full aspect-video">
              <iframe
                className="w-full h-full object-cover"
                src="https://www.youtube.com/embed/saAAFq90xQA?autoplay=1&mute=1&loop=1&playlist=saAAFq90xQA&rel=0&controls=1"
                title="大龍門鱻漫遊 桃客大溪實境解謎"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Taoke Daxi (Moved here to replace high-impact banner as per user request) */}
      <section className="py-24 bg-hakka-cream border-y border-hakka-red/5 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-hakka-gold/5 rounded-br-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-hakka-red/5 rounded-tl-[160px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className={`font-serif font-black text-hakka-brown mb-4 ${lang === 'en' || lang === 'vi' ? 'text-2xl md:text-4xl' : 'text-3xl md:text-5xl'}`}>
              {t.why_title}
            </h2>
            <p className="text-slate-500 text-base md:text-lg font-medium">
              {t.why_subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: t.f1_title,
                desc: t.f1_desc,
                icon: <Sparkles className="w-6 h-6 text-hakka-red" />,
                bg: "bg-hakka-red/5"
              },
              {
                title: t.f2_title,
                desc: t.f2_desc,
                icon: <Smartphone className="w-6 h-6 text-hakka-green" />,
                bg: "bg-hakka-green/5"
              },
              {
                title: t.f3_title,
                desc: t.f3_desc,
                icon: <Utensils className="w-6 h-6 text-hakka-brown" />,
                bg: "bg-hakka-brown/5"
              },
              {
                title: t.f4_title,
                desc: t.f4_desc,
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
                  <h3 className={`font-serif text-hakka-brown mb-6 font-black leading-tight ${lang === 'en' || lang === 'vi' ? 'text-xl' : 'text-3xl'}`}>{t.highlight_puzzle_title}</h3>
                  <p className="text-slate-500 leading-relaxed mb-6 whitespace-pre-line">{t.highlight_puzzle_desc}</p>
                </div>
                <div className="flex items-center gap-2 text-hakka-red font-bold">{t.more} <ArrowRight className="w-4 h-4" /></div>
              </div>
            </Link>

            <Link to="/route" className="block group">
              <div className="p-8 rounded-[3.5rem] h-full bg-hakka-gold/5 border border-hakka-gold/15 group-hover:bg-hakka-gold/10 transition-all group-hover:shadow-2xl group-hover:-translate-y-2 flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-hakka-gold text-white rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-6 transition-transform shadow-md">
                    <Compass className="w-8 h-8" />
                  </div>
                  <h3 className={`font-serif text-hakka-brown mb-6 font-black leading-tight ${lang === 'en' || lang === 'vi' ? 'text-xl' : 'text-3xl'}`}>{t.highlight_route_title}</h3>
                  <p className="text-slate-500 leading-relaxed mb-6">{t.highlight_route_desc}</p>
                </div>
                <div className="flex items-center gap-2 text-hakka-red font-bold">{t.view_route} <ArrowRight className="w-4 h-4" /></div>
              </div>
            </Link>

            <Link to="/food" className="block group">
              <div className="p-8 rounded-[3rem] h-full bg-hakka-red/5 border border-hakka-gold/10 group-hover:bg-hakka-red/10 transition-all group-hover:shadow-2xl group-hover:-translate-y-2 flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-hakka-green text-white rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-6 transition-transform">
                    <Utensils className="w-8 h-8" />
                  </div>
                  <h3 className={`font-serif text-hakka-brown mb-6 font-black leading-tight ${lang === 'en' || lang === 'vi' ? 'text-xl' : 'text-3xl'}`}>{t.highlight_food_title}</h3>
                  <p className="text-slate-500 leading-relaxed mb-6">{t.highlight_food_desc}</p>
                </div>
                <div className="flex items-center gap-2 text-hakka-red font-bold">{t.view_food} <ArrowRight className="w-4 h-4" /></div>
              </div>
            </Link>

            <Link to="/bonding" className="block group">
              <div className="p-8 rounded-[3rem] h-full bg-hakka-green/5 border border-hakka-gold/10 group-hover:bg-hakka-green/10 transition-all group-hover:shadow-2xl group-hover:-translate-y-2 flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-hakka-brown text-white rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-6 transition-transform">
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className={`font-serif text-hakka-brown mb-6 font-black leading-tight ${lang === 'en' || lang === 'vi' ? 'text-xl' : 'text-3xl'}`}>{t.highlight_bonding_title}</h3>
                  <p className="text-slate-500 leading-relaxed mb-6">{t.highlight_bonding_desc}</p>
                </div>
                <div className="flex items-center gap-2 text-hakka-red font-bold">{t.our_service} <ArrowRight className="w-4 h-4" /></div>
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
  const [lang, setLang] = useState("zh-TW");

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
