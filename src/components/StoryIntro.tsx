
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronRight, ChevronLeft, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "../App";

export const StoryIntro = () => {
  const { lang, t } = useTranslation();

  const storyTranslations: any = {
    "zh-TW": {
      title: "冒險序章故事選單",
      start: "開啟序章",
      locked: "即將開啟",
      page: "頁次",
      prev: "上一頁",
      next: "下一頁",
      end_title: "完。待續",
      final_title: "未完待續...",
      final_desc: "後續的故事，需要你與家人一同前往現場解開。",
      final_btn: "開啟冒險旅程",
      story1_title: "故事一：尋客行",
      story1_desc: "揭開大溪與龍潭神祕冒險的序幕...",
      story2_title: "故事二：消失的桐花信使",
      story2_desc: "尋找在山林間迷路的傳說生物...",
      story3_title: "故事三：大圳守護者",
      story3_desc: "面對水資源爭奪的家族秘辛...",
      m1: "大溪傳說",
      m2: "線索顯現",
      m3: "座標發掘",
      m4: "冒險開端",
      m5: "踏上冒險之路",
      explore: "點擊按鈕探索故事細節"
    },
    "zh-CN": {
      title: "冒险序章故事菜单",
      start: "开启序章",
      locked: "即将开启",
      page: "页次",
      prev: "上一页",
      next: "下一页",
      end_title: "完。待续",
      final_title: "未完待续...",
      final_desc: "后续的故事，需要你与家人一同前往现场解开。",
      final_btn: "开启冒险旅程",
      story1_title: "故事一：寻客行",
      story1_desc: "揭开大溪与龙潭神秘冒险的序幕...",
      story2_title: "故事二：消失的桐花信使",
      story2_desc: "寻找在山林间迷路的传说生物...",
      story3_title: "故事三：大圳守护者",
      story3_desc: "面对水资源争夺的家族秘辛...",
      m1: "大溪传说",
      m2: "线索显现",
      m3: "坐标发掘",
      m4: "冒险开端",
      m5: "踏上冒险之路",
      explore: "点击按钮探索故事细节"
    },
    "en": {
      title: "Story Prologue Menu",
      start: "Start Prologue",
      locked: "Coming Soon",
      page: "Page",
      prev: "Prev",
      next: "Next",
      end_title: "To be continued",
      final_title: "To be continued...",
      final_desc: "The rest of the story needs to be solved at the site with your family.",
      final_btn: "Start Adventure",
      story1_title: "Story 1: Seeking Hakka",
      story1_desc: "Opening the mysterious adventure of Daxi and Longtan...",
      story2_title: "Story 2: Lost Tung Blossom Messenger",
      story2_desc: "Looking for legendary creatures lost in the forest...",
      story3_title: "Story 3: Canal Guardians",
      story3_desc: "Facing family secrets of water resource competition...",
      m1: "Daxi Legend",
      m2: "Clue Arises",
      m3: "Coords Found",
      m4: "Adventure Start",
      m5: "On the Road",
      explore: "Click buttons to explore story details"
    },
    "vi": {
      title: "Danh sách câu chuyện mở đầu",
      start: "Mở đầu câu chuyện",
      locked: "Sắp ra mắt",
      page: "Trang",
      prev: "Trang trước",
      next: "Trang sau",
      end_title: "Hết. Còn tiếp",
      final_title: "Chưa kết thúc...",
      final_desc: "Phần còn lại của câu chuyện cần bạn và gia đình cùng đến hiện trường để giải đáp.",
      final_btn: "Bắt đầu hành trình",
      story1_title: "Truyện 1: Hành trình tìm Hakka",
      story1_desc: "Mở màn cho cuộc phiêu lưu bí ẩn tại Daxi và Longtan...",
      story2_title: "Truyện 2: Sứ giả hoa Tung mất tích",
      story2_desc: "Tìm kiếm sinh vật huyền thoại bị lạc trong rừng...",
      story3_title: "Truyện 3: Người bảo vệ kênh đào",
      story3_desc: "Đối mặt với bí mật gia tộc về tranh chấp nguồn nước...",
      m1: "Truyền thuyết Daxi",
      m2: "Manh mối lộ diện",
      m3: "Tìm thấy tọa độ",
      m4: "Khởi đầu phiêu lưu",
      m5: "Lên đường phiêu lưu",
      explore: "Nhấp vào nút để khám phá chi tiết câu chuyện"
    }
  };

  const st = storyTranslations[lang] || storyTranslations["zh-TW"];

  const STORIES = [
    {
      id: 1,
      title: st.story1_title,
      desc: st.story1_desc,
      pages: [
        "https://i.ibb.co/k2hfYZBP/1.jpg",
        "https://i.ibb.co/fdNSyZ1Z/2.jpg",
        "https://i.ibb.co/BVk2f7db/3.jpg",
        "https://i.ibb.co/9HzsLV2B/4.jpg"
      ],
      missions: [
        { step: 1, name: st.m1, location: "鍾肇政文學園區" },
        { step: 2, name: st.m2, location: "客家文化館" },
        { step: 3, name: st.m3, location: "三坑鐵馬道" },
        { step: 4, name: st.m4, location: "大溪老街" },
        { step: 5, name: st.m5, location: "木藝生態博物館" }
      ]
    },
    { id: 2, title: st.story2_title, desc: st.story2_desc, pages: [], locked: true },
    { id: 3, title: st.story3_title, desc: st.story3_desc, pages: [], locked: true }
  ];

  const [selectedStory, setSelectedStory] = useState<null | typeof STORIES[0]>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [showEndAction, setShowEndAction] = useState(false);

  const startReading = (story: typeof STORIES[0]) => {
    if (story.locked) return;
    setSelectedStory(story);
    setCurrentPage(0);
    setShowEndAction(false);
  };

  const nextPage = () => {
    if (selectedStory && currentPage < selectedStory.pages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      setShowEndAction(true);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      setShowEndAction(false);
    }
  };

  const closeStory = () => {
    setSelectedStory(null);
  };

  return (
    <div className="min-h-screen bg-hakka-brown pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className={`section-title text-white mb-20 ${lang === 'en' || lang === 'vi' ? 'text-4xl md:text-6xl' : 'text-5xl md:text-6xl'}`}>{st.title}</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {STORIES.map(story => (
            <motion.div
              key={story.id}
              whileHover={story.locked ? {} : { scale: 1.05 }}
              className={`p-10 rounded-[3rem] border-b-8 border-black/40 relative overflow-hidden group cursor-pointer ${
                story.locked ? "bg-slate-800 opacity-60 cursor-not-allowed" : "bg-hakka-cream"
              }`}
              onClick={() => startReading(story)}
            >
              <h3 className={`text-2xl font-serif mb-4 ${story.locked ? "text-slate-400" : "text-hakka-brown"}`}>
                {story.title}
              </h3>
              <p className={`text-sm leading-relaxed mb-8 ${story.locked ? "text-slate-500" : "text-slate-600"}`}>
                {story.desc}
              </p>
              {!story.locked && (
                <div className="flex items-center gap-2 text-hakka-red font-bold text-sm">
                  {st.start} <ChevronRight className="w-4 h-4" />
                </div>
              )}
              {story.locked && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <span className="text-white font-bold tracking-widest bg-black/50 px-4 py-2 rounded-full">{st.locked}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-hakka-brown flex items-center justify-center p-6"
          >
            <button 
              onClick={closeStory}
              className="absolute top-8 right-8 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="w-full max-w-[300px] sm:max-w-[360px] md:max-w-[400px] lg:max-w-[420px] px-4 transform transition-all duration-300">
              {!showEndAction ? (
                <div className="relative bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col">
                   <div className="relative aspect-square overflow-hidden bg-slate-950">
                      <motion.img
                        key={currentPage}
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -300, opacity: 0 }}
                        src={selectedStory.pages[currentPage]}
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white pointer-events-none">
                         <p className="text-lg font-bold mb-0.5 font-mono tracking-tighter">
                           {st.page} {currentPage + 1} / {selectedStory.pages.length}
                         </p>
                         <p className="opacity-60 text-[10px] uppercase tracking-widest">{st.explore}</p>
                      </div>
                   </div>
                   
                   <div className="p-5 bg-white flex justify-between items-center border-t border-slate-100">
                      <button onClick={prevPage} disabled={currentPage === 0} className="flex items-center gap-1.5 font-bold disabled:opacity-20 text-slate-500 hover:text-hakka-brown transition-colors">
                        <ChevronLeft className="w-5 h-5" /> {st.prev}
                      </button>
                      
                      <button onClick={nextPage} className="flex items-center gap-1.5 font-bold text-hakka-red hover:scale-105 active:scale-95 transition-all">
                        {currentPage === selectedStory.pages.length - 1 ? st.end_title : st.next} <ChevronRight className="w-5 h-5" />
                      </button>
                   </div>
                </div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-20 bg-hakka-cream rounded-[4rem] shadow-2xl px-6"
                >
                  <h2 className="text-4xl md:text-5xl font-serif text-hakka-brown mb-8">{st.final_title}</h2>
                  <p className="text-xl text-slate-500 mb-12">{st.final_desc}</p>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Link to="/booking" className="btn-primary text-xl px-12 py-5 transform scale-110">
                      {st.final_btn}
                    </Link>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
