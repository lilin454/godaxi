
import { motion } from "motion/react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Gift, Ticket, Users, Calendar, MapPin, Star, Sparkles, Heart } from "lucide-react";
import { useTranslation } from "../App";

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
  const { lang, t } = useTranslation();

  const detailsTranslations: any = {
    "zh-TW": {
      back: "返回主題活動",
      location_label: "活動地點",
      difficulty_label: "挑戰難度",
      highlight_label: "活動亮點",
      limited_tag: "限定活動",
      parent_tag: "親子推薦",
      follow_hint: "跟隨桐花的指引，一起帶走這份美好。",
      promo_label: "優惠推薦",
      promo1_title: "四人同行一人免費",
      promo1_desc: "團體最劃算，親子好友跨步走。",
      promo2_title: "新版預購早鳥價 $899",
      promo2_desc: "新版上線前30天預購享超值優惠。",
      promo3_title: "節日限定驚喜",
      promo3_desc: "搭配節慶紀念品，數量有限。",
      book_now: "立即報名參加",
      need_help: "Need Help?",
      help_title: "有任何疑問嗎？",
      help_link: "聯繫 LINE 客服 →",
      e1_long: "五月是大溪與龍潭最浪漫的季節。白色的油桐花如雪片般飄落在蜿蜒的古道上，這不僅是自然的饗宴，更是一段被時光封存的旋律。在此特製的冒險中，您將在雪白步伐下尋找隱藏的客家故事。",
      e1_h1: "白色桐花花瓣飄落，如偶像劇般的浪漫步道體驗",
      e1_h2: "春日山林綠色＋米白色的療癒視覺氛圍",
      e1_h3: "超療癒的親子手作體驗!!",
      e1_lt: "限定活動：把春天撿起來！帶走一份浪漫的旅行記憶",
      e1_lc: "我們準備了超療癒的親子手作體驗！\n\n在探險路上，地上的白色油桐花就像天上落下的五月雪一樣!!\n別只是路過！帶上我們準備的紙板，和孩子一起畫下可愛的小花瓶\n戳個洞，把掉落的油桐花撿起輕輕插入～\n這不只是一份紀念品，更是你們在大溪留下的溫暖時光\n\n快來走訪三坑鐵馬道與桃園客家文化館的油桐花列車，和孩子一起動手吧！",
      e2_long: "當九月的風吹過大漢溪畔，三坑的田野便覆蓋上了一層薄薄的「雪」。這是韭菜花綻放的時刻，也是一段關於農村耕作與土地情感的故事開端。在此任務中，您將穿梭於花海之間，解開隱藏在農村生活細節中的謎題。",
      e2_h1: "九月限定純白花海拍照打卡熱點",
      e2_h2: "結合農村故事與耕作文化的地景解謎",
      e2_h3: "如下雪般的花瓣飄落的浪漫體驗",
      e3_long: "結合大溪、龍潭與石門周邊特色景點。透過期間限定任務、美食探索與在地故事，帶領旅客感受桃園山水與客庄文化交織的夏日魅力。解鎖關於水岸、美食與河流交織的動人傳說。",
      e3_h1: "湖水藍與木頭色交織的夏日戶外感",
      e3_h2: "石門水庫活魚文化與水岸美食探索",
      e3_h3: "引領地圖航線動畫與互動水波紋視覺",
      note1: "親子共遊極力推薦!",
      note2: "推薦親子玩家",
      note3: "推薦青少年以上玩家"
    },
    "zh-CN": {
      back: "返回主题活动",
      location_label: "活动地点",
      difficulty_label: "挑战难度",
      highlight_label: "活动亮点",
      limited_tag: "限定活动",
      parent_tag: "亲子推荐",
      follow_hint: "跟随桐花的指引，一起带走这份美好。",
      promo_label: "优惠推荐",
      promo1_title: "四人同行一人免费",
      promo1_desc: "团体最划算，亲子好友跨步走。",
      promo2_title: "新版预购早鸟价 $899",
      promo2_desc: "新版上线前30天预购享超值优惠。",
      promo3_title: "节日限定惊喜",
      promo3_desc: "搭配节庆纪念品，数量有限。",
      book_now: "立即报名参加",
      need_help: "Need Help?",
      help_title: "有任何疑问吗？",
      help_link: "联系 LINE 客服 →",
      e1_long: "五月是大溪与龙潭最浪漫的季节。白色的油桐花如雪片般飘落在蜿蜒的古道上，这不仅是自然的飨宴，更是一段被时光封存的旋律。在此特制的冒险中，您将在雪白步伐下寻找隐藏的客家故事。",
      e1_h1: "白色桐花花瓣飘落，如偶像剧般的浪漫步道体验",
      e1_h2: "春日山林绿色＋米白色的疗愈视觉氛围",
      e1_h3: "超疗愈的亲子手作体验!!",
      e1_lt: "限定活动：把春天捡起来！带走一份浪漫的旅行记忆",
      e1_lc: "我们准备了超疗愈的亲子手作体验！\n\n在探险路上，地上的白色油桐花就像天上落下的五月雪一样!!\n别只是路过！带上我们准备的纸板，和孩子一起画下可爱的小花瓶\n戳个洞，把掉落的油桐花捡起轻轻插入～\n这不只是一个纪念品，更是你们在大溪留下的温暖时光\n\n快来走访三坑铁马道与桃园客家文化馆的油桐花列车，和孩子一起动手吧！",
      e2_long: "当九月的风吹过大汉溪畔，三坑的田野便覆盖上了一层薄薄的「雪」。这是韭菜花绽放的时刻，也是一段关于农村耕作与土地情感的故事开端。在此任务中，您将穿梭于花海之间，解开隐藏在农村生活细节中的谜题。",
      e2_h1: "九月限定纯白花海拍照打卡热点",
      e2_h2: "结合农村故事与耕作文化的地景解谜",
      e2_h3: "如下雪般的花瓣飘落的浪漫体验",
      e3_long: "结合大溪、龙潭与石门周边特色景点。通过期間限定任务、美食探索与在地故事，带领旅客感受桃园山水与客庄文化交织的夏日魅力。解锁关于水岸、美食与河流交织的动人传说。",
      e3_h1: "湖水蓝与木头色交织的夏日户外感",
      e3_h2: "石门水库活鱼文化与水岸美食探索",
      e3_h3: "引领地图航线动画与互动水波纹视觉",
      note1: "亲子共游极力推荐!",
      note2: "推荐亲子玩家",
      note3: "推荐青少年以上玩家"
    },
    "en": {
      back: "Back to Themes",
      location_label: "Location",
      difficulty_label: "Difficulty",
      highlight_label: "Highlights",
      limited_tag: "Limited event",
      parent_tag: "Family choice",
      follow_hint: "Follow the guidance of Tung blossoms, take home the beauty.",
      promo_label: "Promotions",
      promo1_title: "Buy 3 Get 1 Free",
      promo1_desc: "Best for groups, friends and families.",
      promo2_title: "Early Bird Early Access $899",
      promo2_desc: "Pre-order 30 days before launch for best deal.",
      promo3_title: "Holiday Surprises",
      promo3_desc: "With festival souvenirs, limited quantity.",
      book_now: "Register Now",
      need_help: "Need Help?",
      help_title: "Any questions?",
      help_link: "Contact LINE Support →",
      e1_long: "May is the most romantic season in Daxi and Longtan. White Tung blossoms fall like snowflakes on the ancient paths. This is a special adventure to find hidden Hakka stories.",
      e1_h1: "Falling white Tung blossoms, romantic path experience.",
      e1_h2: "Healing visual atmosphere of spring green and white.",
      e1_h3: "Healing parent-child DIY experience!!",
      e1_lt: "Limited: Pick up Spring! Take away romantic memories.",
      e1_lc: "We prepared a healing DIY experience!\n\nOn the quest, falling white Tung flowers are like May Snow!!\nDon't just pass by! Take our cardboard, draw a vase with your child.\nPunch a hole, pick up fallen Tung flowers and insert them.\nThis is not just a souvenir, but your warm memories in Daxi.\n\nVisit the Tung flower trains at Sanxing and Taoyuan Hakka hall!",
      e2_long: "When September wind blows across Dahan river, fields are covered with white 'snow' - Chive flowers blooming. Solve riddles hidden in rural life details.",
      e2_h1: "September limited white flower sea photo spot.",
      e2_h2: "Landscape puzzle combining rural stories and farming.",
      e2_h3: "Romantic experience of falling petals like snow.",
      e3_long: "Exciting waterfront adventure combining Daxi, Longtan, and Shimen. Explore food and local stories, and solve the legends of the rivers.",
      e3_h1: "Summer outdoor vibe with lake blue and wood colors.",
      e3_h2: "Shimen Reservoir fish culture and food exploration.",
      e3_h3: "Interactive water ripple visual and map animation.",
      note1: "Highly recommended for families!",
      note2: "Recommended for families",
      note3: "Recommended for teens and up"
    },
    "vi": {
      back: "Trở về danh sách",
      location_label: "Địa điểm",
      difficulty_label: "Độ khó",
      highlight_label: "Điểm nhấn",
      limited_tag: "Sự kiện có hạn",
      parent_tag: "Gợi ý cho gia đình",
      follow_hint: "Theo dấu hoa Tung, mang về những điều tốt đẹp nhất.",
      promo_label: "Ưu đãi gợi ý",
      promo1_title: "Mua 3 tặng 1",
      promo1_desc: "Tiết kiệm nhất cho nhóm, gia đình và bạn bè.",
      promo2_title: "Giá Early Bird $899",
      promo2_desc: "Ưu đãi tuyệt vời khi đặt trước 30 ngày.",
      promo3_title: "Bất ngờ ngày lễ",
      promo3_desc: "Đi kèm quà lưu niệm, số lượng có hạn.",
      book_now: "Đăng ký tham gia ngay",
      need_help: "Cần hỗ trợ?",
      help_title: "Bạn có thắc mắc gì không?",
      help_link: "Liên hệ LINE hỗ trợ →",
      e1_long: "Tháng Năm là mùa lãng mạn nhất tại Daxi và Longtan. Hoa Tung rơi như tuyết trên những con đường cổ. Một cuộc phiêu lưu tìm kiếm những câu chuyện Hakka ẩn giấu.",
      e1_h1: "Cánh hoa Tung trắng rơi, cảm giác như phim thần tượng.",
      e1_h2: "Không gian thị giác xanh mát mùa xuân và trắng nhẹ nhàng.",
      e1_h3: "Trải nghiệm thủ công gia đình tuyệt vời!!",
      e1_lt: "Có hạn: Nhặt lấy mùa xuân! Mang theo ký ức lãng mạn.",
      e1_lc: "Chúng tôi chuẩn bị trải nghiệm thủ công cực chill!\n\nTrên đường thám hiểm, những cánh hoa Tung rơi như tuyết tháng Năm!!\nĐừng chỉ đi qua! Hãy dùng tấm bìa của chúng tôi, vẽ lọ hoa cùng con.\nĐục một lỗ nhỏ, cắm những cánh hoa rơi vào.\nĐây không chỉ là quà lưu niệm, mà là hơi ấm tại Daxi.\n\nHãy ghé thăm đường hoa Tung tại Tam Hàng và Nhà văn hóa Hakka!",
      e2_long: "Gió tháng Chín thổi qua bờ Dahan, những cánh đồng hoa hẹ nở trắng muốt như tuyết. Cùng giải mã bí ẩn trong đời sống nông thôn.",
      e2_h1: "Điểm check-in biển hoa trắng tháng Chín.",
      e2_h2: "Giải đố địa danh kết hợp văn hóa nông thôn.",
      e2_h3: "Trải nghiệm lãng mạn cánh hoa rơi như tuyết.",
      e3_long: "Cuộc phiêu lưu ven sông mùa hè qua Daxi, Longtan và Shimen. Khám phá ẩm thực và những truyền thuyết về dòng sông.",
      e3_h1: "Cảm giác dã ngoại với màu xanh hồ nước và màu gỗ.",
      e3_h2: "Văn hóa cá tầm Shimen và ẩm thực ven sông.",
      e3_h3: "Hiệu ứng sóng nước tương tác và hoạt họa bản đồ.",
      note1: "Đặc biệt gợi ý cho gia đình!",
      note2: "Gợi ý cho cha mẹ và bé",
      note3: "Gợi ý cho thanh thiếu niên trở lên"
    }
  };

  const dt = detailsTranslations[lang] || detailsTranslations["zh-TW"];

  // Re-fetch event basics from current language
  const eventsTranslations: any = {
    "zh-TW": {
      e1_name: "客家五月雪：把春天撿起來！",
      e1_slogan: "「跟著桐花盛開，展開春日客庄冒險」",
      e1_period: "4月底至5月中旬",
      e1_desc: "每年春末初夏，大溪與龍潭山區的油桐花盛開，雪白花瓣覆蓋步道，帶領親子家庭走入客庄山林，感受自然的魅力。",
      e1_type: "春季限定",
      e1_loc: "三坑鐵馬道&客家文化館",
      e2_name: "九月雪：韭菜花季",
      e2_slogan: "「走進純白花海，探索秋日限定的大溪風景」",
      e2_period: "8月底至9月中旬",
      e2_desc: "秋季限定的純白韭菜花海。結合農村故事、在地文化與拍照打卡體驗，在秋日風景中感受客庄慢旅的魅力。",
      e2_type: "秋季限定",
      e2_loc: "三坑鐵馬道",
      e3_name: "大龍門鱻漫遊",
      e3_slogan: "「跟著河流與美食，展開夏日水岸冒險」",
      e3_period: "10月中下旬",
      e3_desc: "結合大溪、龍潭與石門周邊特色景點。透過期間限定任務、美食探索與在地故事，感受桃園山水交織的夏日魅力。",
      e3_type: "夏季限定",
      e3_loc: "石門大草坪&三坑自然生態公園"
    },
    "zh-CN": {
      e1_name: "客家五月雪：把春天捡起来！",
      e1_slogan: "「跟着桐花盛开，展开春日客庄冒险」",
      e1_period: "4月底至5月中旬",
      e1_desc: "每年春末初夏，大溪与龙潭山区的油桐花盛开，雪白花瓣覆盖步道，带领亲子家庭走入客庄山林，感受自然的魅力。",
      e1_type: "春季限定",
      e1_loc: "三坑铁马道&客家文化馆",
      e2_name: "九月雪：韭菜花季",
      e2_slogan: "「走进纯白花海，探索秋日限定的大溪风景」",
      e2_period: "8月底至9月中旬",
      e2_desc: "秋季限定的纯白韭菜花海。结合农村故事、在地文化与拍照打卡体验，在秋日风景中感受客庄慢旅的魅力。",
      e2_type: "秋季限定",
      e2_loc: "三坑铁马道",
      e3_name: "大龙门鱻漫游",
      e3_slogan: "「跟着河流与美食，展开夏日水岸冒险」",
      e3_period: "10月中下旬",
      e3_desc: "结合大溪、龙潭与石门周边特色景点。通过期間限定任务、美食探索与在地故事，感受桃园山水交织的夏日魅力。",
      e3_type: "夏季限定",
      e3_loc: "石门大草坪&三坑自然生态公园"
    },
    "en": {
      e1_name: "Hakka May Snow: Pick up Spring!",
      e1_slogan: "Spring Hakka adventure follows Tung Blossom",
      e1_period: "Late April to mid-May",
      e1_desc: "Every late spring and early summer, Tung flowers in Daxi and Longtan areas bloom, leading families into Hakka forests.",
      e1_type: "Spring Limited",
      e1_loc: "Sanxing Bike Path & Hakka Hall",
      e2_name: "September Snow: Chive Blossom Season",
      e2_slogan: "Explore autumn Daxi in white flower seas",
      e2_period: "Late August to mid-September",
      e2_desc: "Pure white chive flowers in autumn. Combines rural stories, local culture, and photo experiences.",
      e2_type: "Autumn Limited",
      e2_loc: "Sanxing Bike Path",
      e3_name: "Dalongmen Fun Tour",
      e3_slogan: "Summer waterfront adventure with rivers and food",
      e3_period: "Late October",
      e3_desc: "Combines Daxi, Longtan, and Shimen area attractions. Experience Taoyuan's landscape charm.",
      e3_type: "Summer Limited",
      e3_loc: "Shimen Lawn & Sanxing Ecology Park"
    },
    "vi": {
      e1_name: "Tuyết tháng Năm Hakka: Nhặt lấy mùa xuân!",
      e1_slogan: "Phiêu lưu xuân Hakka cùng hoa Tung nở rộ",
      e1_period: "Cuối tháng 4 đến giữa tháng 5",
      e1_desc: "Mỗi độ cuối xuân đầu hạ, hoa Tung ở Daxi và Longtan nở rộ, dẫn lối các gia đình vào rừng Hakka.",
      e1_type: "Mùa xuân",
      e1_loc: "Đường đạp xe Tam Hàng & Nhà Hakka",
      e2_name: "Tuyết tháng Chín: Mùa hoa hẹ",
      e2_slogan: "Khám phá phong cảnh Daxi mùa thu trong biển hoa trắng",
      e2_period: "Cuối tháng 8 đến giữa tháng 9",
      e2_desc: "Biển hoa hẹ trắng muốt cuối thu. Kết hợp câu chuyện nông thôn và văn hóa địa phương.",
      e2_type: "Mùa thu",
      e2_loc: "Đường đạp xe Tam Hàng",
      e3_name: "Hành trình Dalongmen",
      e3_slogan: "Phiêu lưu ven sông mùa hè cùng sông ngòi và ẩm thực",
      e3_period: "Cuối tháng 10",
      e3_desc: "Kết hợp các điểm tham quan Daxi, Longtan và Shimen. Trải nghiệm sức hút non nước Taoyuan.",
      e3_type: "Mùa hè",
      e3_loc: "石門大草坪&三坑自然生態公園"
    }
  };

  const currentEvt = eventsTranslations[lang] || eventsTranslations["zh-TW"];

  const eventDetails: any = {
    "0-0": {
      name: currentEvt.e1_name,
      slogan: currentEvt.e1_slogan,
      period: currentEvt.e1_period,
      desc: currentEvt.e1_desc,
      longDesc: dt.e1_long,
      img: "/Public/客家五月雪.png",
      type: currentEvt.e1_type,
      difficulty: "★★☆☆☆",
      diffNote: dt.note1,
      location: currentEvt.e1_loc,
      highlights: [
        dt.e1_h1, dt.e1_h2, dt.e1_h3
      ],
      limitedEvent: {
        title: dt.e1_lt,
        content: dt.e1_lc,
        image: "/Public/油桐花花瓶.jpg"
      }
    },
    "0-1": {
      name: currentEvt.e2_name,
      slogan: currentEvt.e2_slogan,
      period: currentEvt.e2_period,
      desc: currentEvt.e2_desc,
      longDesc: dt.e2_long,
      img: "/Public/九月雪 韭菜花季.png",
      type: currentEvt.e2_type,
      difficulty: "★★★☆☆",
      diffNote: dt.note2,
      location: currentEvt.e2_loc,
      highlights: [
        dt.e2_h1, dt.e2_h2, dt.e2_h3
      ]
    },
    "0-2": {
      name: currentEvt.e3_name,
      slogan: currentEvt.e3_slogan,
      period: currentEvt.e3_period,
      desc: currentEvt.e3_desc,
      longDesc: dt.e3_long,
      img: "/Public/大龍門鱻漫遊.png",
      type: currentEvt.e3_type,
      difficulty: "★★★★☆",
      diffNote: dt.note3,
      location: currentEvt.e3_loc,
      highlights: [
        dt.e3_h1, dt.e3_h2, dt.e3_h3
      ]
    },
  };

  const event = eventDetails[id || "0-0"] || eventDetails["0-0"];

  return (
    <div className="min-h-screen pt-28 pb-20 bg-hakka-cream selection:bg-hakka-red/20 font-sans">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_380px] gap-16">
        
        {/* Main Content */}
        <div className="space-y-12">
          <Link to="/events" className="inline-flex items-center gap-2 text-hakka-red font-bold hover:translate-x-1 transition-transform bg-white px-6 py-3 rounded-full shadow-sm w-fit">
            <ArrowLeft className="w-5 h-5" /> {dt.back}
          </Link>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[4rem] overflow-hidden bg-white shadow-2xl border border-hakka-gold/10"
          >
            <div className="aspect-video relative overflow-hidden">
               { (id === '0-0' || id === '0-1' || !id) && <FallingPetals /> }
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
                <h1 className="text-3xl md:text-5xl font-serif text-hakka-brown font-black leading-tight mb-4">
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
                    <h4 className="font-bold text-hakka-brown mb-2">{dt.location_label}</h4>
                    <p className="text-sm text-slate-500">{event.location || "Daxi Area"}</p>
                 </div>
                 <div className="p-6 bg-hakka-cream/50 rounded-3xl border border-hakka-gold/10">
                    <Star className="text-hakka-gold w-8 h-8 mb-4" />
                    <h4 className="font-bold text-hakka-brown mb-2">{dt.difficulty_label}</h4>
                    <p className="text-sm text-slate-500">{event.difficulty} ({event.diffNote})</p>
                 </div>
              </div>
            </div>
          </motion.div>
          
          <div className="bg-white rounded-[4rem] p-8 md:p-12 space-y-8 border border-hakka-gold/10 shadow-xl">
             <h2 className="text-2xl md:text-3xl font-serif text-hakka-brown font-black flex items-center gap-3">
                <Sparkles className="text-hakka-gold" /> {dt.highlight_label}
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
                           <Gift className="w-4 h-4" /> {dt.limited_tag}
                        </div>
                        <div className="bg-rose-100 text-rose-500 px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                           <Heart className="w-4 h-4" /> {dt.parent_tag}
                        </div>
                     </div>
                     
                     <h2 className="text-2xl md:text-4xl font-serif text-hakka-brown font-black leading-tight">
                        {event.limitedEvent.title}
                     </h2>
                     
                     <div className="text-lg text-slate-600 leading-relaxed space-y-6 whitespace-pre-wrap font-medium">
                        {event.limitedEvent.content.split('\n\n').map((para: string, i: number) => (
                          <p key={i}>{para}</p>
                        ))}
                     </div>
                     
                     <div className="pt-4 flex items-center gap-4 text-hakka-red font-black italic border-t border-slate-100 pt-8">
                        <Sparkles className="w-6 h-6 animate-pulse" />
                        {dt.follow_hint}
                     </div>
                  </div>
                  
                  <div className="relative min-h-[500px] flex items-center justify-center p-8 bg-hakka-cream/10">
                     <div className="relative w-full aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white rotate-[2deg] hover:rotate-0 transition-transform duration-700">
                        <img src={event.limitedEvent.image} className="w-full h-full object-cover" alt="Limited event" />
                        <div className="absolute inset-0 bg-gradient-to-t from-hakka-brown/30 to-transparent" />
                     </div>
                  </div>
               </div>
            </motion.div>
          )}
        </div>

        {/* Sticky Sidebar */}
        <aside className="relative">
          <div className="sticky top-32 space-y-6">
            <div className="bg-white rounded-[3rem] p-8 shadow-2xl border border-hakka-gold/20 space-y-6">
               <h3 className="text-xl font-serif text-hakka-brown font-bold flex items-center gap-2 border-b border-slate-100 pb-4">
                  <Ticket className="text-hakka-red" /> {dt.promo_label}
               </h3>
               
               <div className="space-y-4">
                  <div className="flex gap-4 p-4 rounded-2xl bg-hakka-red/5 border border-hakka-red/10">
                     <Users className="text-hakka-red shrink-0" />
                     <div>
                        <p className="font-bold text-hakka-red text-sm">{dt.promo1_title}</p>
                        <p className="text-xs text-slate-500">{dt.promo1_desc}</p>
                     </div>
                  </div>

                  <div className="flex gap-4 p-4 rounded-2xl bg-hakka-gold/5 border border-hakka-gold/10">
                     <Gift className="text-hakka-gold shrink-0" />
                     <div>
                        <p className="font-bold text-hakka-gold text-sm">{dt.promo2_title}</p>
                        <p className="text-xs text-slate-500">{dt.promo2_desc}</p>
                     </div>
                  </div>

                  <div className="flex gap-4 p-4 rounded-2xl bg-hakka-green/5 border border-hakka-green/10">
                     <Sparkles className="text-hakka-green shrink-0" />
                     <div>
                        <p className="font-bold text-hakka-green text-sm">{dt.promo3_title}</p>
                        <p className="text-xs text-slate-500">{dt.promo3_desc}</p>
                     </div>
                  </div>
               </div>

               <Link to="/booking" className="btn-primary w-full py-5 text-lg flex items-center justify-center gap-2 shadow-xl">
                  {dt.book_now}
               </Link>
            </div>

            <div className="bg-hakka-brown p-8 rounded-[3rem] text-white">
               <p className="text-sm opacity-60 mb-2 uppercase tracking-widest font-bold">{dt.need_help}</p>
               <p className="font-serif text-lg mb-4">{dt.help_title}</p>
               <a href="https://line.me/R/ti/p/@275oznqg" target="_blank" rel="noopener noreferrer" className="text-hakka-gold font-bold hover:underline">{dt.help_link}</a>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
};
