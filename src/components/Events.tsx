import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles, Calendar, Wind, ArrowRight } from "lucide-react";
import { useTranslation } from "../App";

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
  const { lang, t } = useTranslation();

  const eventsTranslations: any = {
    "zh-TW": {
      title: "期間限定主題活動",
      subtitle: "「跟著季節，解鎖不同的大溪故事」",
      back: "返回首頁",
      explore: "立即探索",
      cat_title: "期間限定：大溪四季之謎",
      booking: "搶先預約冒險",
      hakka_footer_title: "客家文化，四季皆美",
      hakka_footer_desc: "每一次花開、每一場祭典，都是大溪與龍潭最鮮活的記憶展演。無論何時造訪，都有一份獨特的文化謎題在等待您解開。",
      e1_name: "客家五月雪：把春天撿起來！",
      e1_slogan: "「跟著桐花盛開，展開春日客庄冒險」",
      e1_period: "4月底至5月中旬",
      e1_desc: "每年春末初夏，大溪與龍潭山區的油桐花盛開，雪白花瓣覆蓋步道，帶領親子家庭走入客庄山林，感受自然的魅力。",
      e1_tag: "季節冒險",
      e1_season: "春季限定",
      e1_badge: "限定任務",
      e2_name: "九月雪：韭菜花季",
      e2_slogan: "「走進純白花海，探索秋日限定的大溪風景」",
      e2_period: "8月底至9月中旬",
      e2_desc: "秋季限定的純白韭菜花海。結合農村故事、在地文化與拍照打卡體驗，在秋日風景中感受客庄慢旅的魅力。",
      e2_tag: "期間限定",
      e2_season: "秋季限定",
      e2_badge: "地景探索",
      e3_name: "大龍門鱻漫遊",
      e3_slogan: "「跟著河流與美食，展開夏日水岸冒險」",
      e3_period: "10月中下旬",
      e3_desc: "結合大溪、龍潭與石門周邊特色景點。透過期間限定任務、美食探索與在地故事，感受桃園山水交織的夏日魅力。",
      e3_tag: "季節性任務",
      e3_season: "夏季限定",
      e3_badge: "水岸解謎"
    },
    "zh-CN": {
      title: "期間限定主题活动",
      subtitle: "「跟着季节，解锁不同的大溪故事」",
      back: "返回首页",
      explore: "立即探索",
      cat_title: "期間限定：大溪四季之谜",
      booking: "抢先预约冒险",
      hakka_footer_title: "客家文化，四季皆美",
      hakka_footer_desc: "每一次花开、每一场祭典，都是大溪与龙潭最鲜活的记忆展演。无论何时造访，都有一份独特的文化谜题在等待您解开。",
      e1_name: "客家五月雪：把春天捡起来！",
      e1_slogan: "「跟着桐花盛开，展开春日客庄冒险」",
      e1_period: "4月底至5月中旬",
      e1_desc: "每年春末初夏，大溪与龙潭山区的油桐花盛开，雪白花瓣覆盖步道，带领亲子家庭走入客庄山林，感受自然的魅力。",
      e1_tag: "季节冒险",
      e1_season: "春季限定",
      e1_badge: "限定任务",
      e2_name: "九月雪：韭菜花季",
      e2_slogan: "「走进纯白花海，探索秋日限定的大溪风景」",
      e2_period: "8月底至9月中旬",
      e2_desc: "秋季限定的纯白韭菜花海。结合农村故事、在地文化与拍照打卡体验，在秋日风景中感受客庄慢旅的魅力。",
      e2_tag: "期間限定",
      e2_season: "秋季限定",
      e2_badge: "地景探索",
      e3_name: "大龙门鱻漫游",
      e3_slogan: "「跟着河流与美食，展开夏日水岸冒险」",
      e3_period: "10月中下旬",
      e3_desc: "结合大溪、龙潭与石门周边特色景点。通过期間限定任务、美食探索与在地故事，感受桃园山水交织的夏日魅力。",
      e3_tag: "季节性任务",
      e3_season: "夏季限定",
      e3_badge: "水岸解谜"
    },
    "en": {
      title: "Limited Theme Events",
      subtitle: "Unlock different Daxi stories with seasons",
      back: "Back Home",
      explore: "Explore Now",
      cat_title: "Limited: Daxi Four Seasons Mystery",
      booking: "Book Adventure Now",
      hakka_footer_title: "Hakka Culture, Beautiful in all seasons",
      hakka_footer_desc: "Every blossom, every festival, is the most vivid memory performance of Daxi and Longtan. Whenever you visit, there is a unique cultural puzzle waiting for you to solve.",
      e1_name: "Hakka May Snow: Pick up Spring!",
      e1_slogan: "Spring Hakka adventure follows Tung Blossom",
      e1_period: "Late April to mid-May",
      e1_desc: "Every late spring and early summer, Tung flowers in Daxi and Longtan mountain areas bloom, leading families into Hakka forests.",
      e1_tag: "Season Adventure",
      e1_season: "Spring Limited",
      e1_badge: "Limited Task",
      e2_name: "September Snow: Chive Blossom Season",
      e2_slogan: "Explore autumn Daxi in white flower seas",
      e2_period: "Late August to mid-September",
      e2_desc: "Pure white chive flowers in autumn. Combines rural stories, local culture, and photo experiences.",
      e2_tag: "Limited Time",
      e2_season: "Autumn Limited",
      e2_badge: "Landscape Explore",
      e3_name: "Dalongmen Fun Tour",
      e3_slogan: "Summer waterfront adventure with rivers and food",
      e3_period: "Late October",
      e3_desc: "Combines Daxi, Longtan, and Shimen area attractions. Experience Taoyuan's landscape charm.",
      e3_tag: "Seasonal Task",
      e3_season: "Summer Limited",
      e3_badge: "Waterfront Puzzle"
    },
    "vi": {
      title: "Sự kiện chủ đề có hạn",
      subtitle: "Theo mùa, mở khóa những câu chuyện Daxi khác nhau",
      back: "Trở về trang chủ",
      explore: "Khám phá ngay",
      cat_title: "Có hạn: Bí ẩn Daxi bốn mùa",
      booking: "Đặt chỗ ngay",
      hakka_footer_title: "Văn hóa Hakka, đẹp cả bốn mùa",
      hakka_footer_desc: "Mỗi mùa hoa nở, mỗi lễ hội, đều là màn trình diễn ký ức sống động nhất của Daxi và Longtan. Dù ghé thăm lúc nào, luôn có bí ẩn chờ bạn.",
      e1_name: "Tuyết tháng Năm Hakka: Nhặt lấy mùa xuân!",
      e1_slogan: "Phiêu lưu xuân Hakka cùng hoa Tung nở rộ",
      e1_period: "Cuối tháng 4 đến giữa tháng 5",
      e1_desc: "Mỗi độ cuối xuân đầu hạ, hoa Tung ở Daxi và Longtan nở rộ, dẫn lối các gia đình vào rừng Hakka.",
      e1_tag: "Phiêu lưu theo mùa",
      e1_season: "Hạn định mùa Xuân",
      e1_badge: "Nhiệm vụ có hạn",
      e2_name: "Tuyết tháng Chín: Mùa hoa hẹ",
      e2_slogan: "Khám phá phong cảnh Daxi mùa thu trong biển hoa trắng",
      e2_period: "Cuối tháng 8 đến giữa tháng 9",
      e2_desc: "Biển hoa hẹ trắng muốt cuối thu. Kết hợp câu chuyện nông thôn và văn hóa địa phương.",
      e2_tag: "Có hạn thời gian",
      e2_season: "Hạn định mùa Thu",
      e2_badge: "Khám phá địa danh",
      e3_name: "Hành trình Dalongmen",
      e3_slogan: "Phiêu lưu ven sông mùa hè cùng sông ngòi và ẩm thực",
      e3_period: "Cuối tháng 10",
      e3_desc: "Kết hợp các điểm tham quan Daxi, Longtan và Shimen. Trải nghiệm sức hút non nước Taoyuan.",
      e3_tag: "Nhiệm vụ theo mùa",
      e3_season: "Hạn định mùa Hè",
      e3_badge: "Giải đố ven sông"
    }
  };

  const et = eventsTranslations[lang] || eventsTranslations["zh-TW"];

  const categories = [
    {
      title: et.cat_title,
      subtitle: et.subtitle,
      events: [
        {
          name: et.e1_name,
          slogan: et.e1_slogan,
          period: et.e1_period,
          desc: et.e1_desc,
          tag: et.e1_tag,
          seasonTag: et.e1_season,
          badge: et.e1_badge,
          color: "bg-white",
          accentColor: "text-rose-400",
          img: "/Public/客家五月雪.png"
        },
        {
          name: et.e2_name,
          slogan: et.e2_slogan,
          period: et.e2_period,
          desc: et.e2_desc,
          tag: et.e2_tag,
          seasonTag: et.e2_season,
          badge: et.e2_badge,
          color: "bg-yellow-50/30",
          accentColor: "text-amber-500",
          img: "/Public/九月雪 韭菜花季.png"
        },
        {
          name: et.e3_name,
          slogan: et.e3_slogan,
          period: et.e3_period,
          desc: et.e3_desc,
          tag: et.e3_tag,
          seasonTag: et.e3_season,
          badge: et.e3_badge,
          color: "bg-sky-50/30",
          accentColor: "text-sky-600",
          img: "/Public/大龍門鱻漫遊.png"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 bg-hakka-cream selection:bg-hakka-red/20 font-sans">
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
          <h1 className={`font-serif text-hakka-brown font-black mb-6 ${lang === 'en' || lang === 'vi' ? 'text-4xl md:text-6xl' : 'text-5xl md:text-6xl'}`}>{et.title}</h1>
          <p className={`text-slate-600 font-medium ${lang === 'en' || lang === 'vi' ? 'text-lg' : 'text-xl'}`}>{et.subtitle}</p>
        </header>

        <Link to="/" className="inline-flex items-center gap-2 text-hakka-red font-bold mb-12 hover:translate-x-1 transition-transform bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm">
          <ArrowLeft className="w-5 h-5" /> {et.back}
        </Link>

        {categories.map((cat, cIdx) => (
          <section key={cIdx} className="mb-32">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-hakka-brown font-black mb-3 flex items-center gap-4">
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
                  { (eIdx === 0 || eIdx === 1) && <FallingPetals /> }
                  <div className="aspect-[4/3] relative overflow-hidden">
                     <img src={event.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={event.name} />
                     {event.name === et.e3_name && (
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
                         {et.explore} <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        ))}

        <div className="bg-hakka-brown p-8 md:p-16 rounded-[4rem] text-white overflow-hidden relative">
           <img src="https://www.transparenttextures.com/patterns/rice-paper.png" className="absolute inset-0 opacity-10 pointer-events-none" />
           <div className="relative z-10 flex flex-col items-center text-center">
              <Wind className="w-16 h-16 text-hakka-gold mb-8 animate-pulse" />
              <h2 className="text-3xl md:text-4xl font-serif font-black mb-6">{et.hakka_footer_title}</h2>
              <p className="max-w-2xl text-lg opacity-80 mb-12">
                {et.hakka_footer_desc}
              </p>
              <div className="flex gap-4">
                <Link to="/booking" className="btn-primary px-12 py-4">{et.booking}</Link>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
