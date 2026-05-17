
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronRight, ChevronLeft, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const STORIES = [
  {
    id: 1,
    title: "故事一：大溪的封印之謎",
    desc: "傳說中，大溪與龍潭的古老記憶被鎖在了五個神祕的座標中...",
    pages: [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1510672981848-a1c4f1cb5ccf?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1555529369-bc2d56a19141?auto=format&fit=crop&q=80"
    ],
    missions: [
      { step: 1, name: "文化啟動", location: "鍾肇政文學園區" },
      { step: 2, name: "客家之聲", location: "客家文化館" },
      { step: 3, name: "水圳探索", location: "三坑鐵馬道" },
      { step: 4, name: "味覺記憶", location: "大溪老街" },
      { step: 5, name: "最終解鎖", location: "木藝生態博物館" }
    ]
  },
  { id: 2, title: "故事二：消失的桐花信使 (即將開啟)", desc: "尋找在山林間迷路的傳說生物...", pages: [], locked: true },
  { id: 3, title: "故事三：大圳守護者 (即將開啟)", desc: "面對水資源爭奪的家族秘辛...", pages: [], locked: true }
];

export const StoryIntro = () => {
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
    <div className="min-h-screen bg-hakka-brown pt-44 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="section-title text-white mb-20">冒險序章故事選單</h1>
        
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
                  開啟序章 <ChevronRight className="w-4 h-4" />
                </div>
              )}
              {story.locked && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <span className="text-white font-bold tracking-widest bg-black/50 px-4 py-2 rounded-full">即將開啟</span>
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

            <div className="max-w-5xl w-full">
              {!showEndAction ? (
                <div className="relative aspect-[3/4] md:aspect-video bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col">
                   <div className="flex-1 relative overflow-hidden">
                      <motion.img
                        key={currentPage}
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -300, opacity: 0 }}
                        src={selectedStory.pages[currentPage]}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-12 text-white">
                         <p className="text-xl font-bold mb-2">頁面 {currentPage + 1} / {selectedStory.pages.length}</p>
                         <p className="opacity-80">故事緩緩展開... 點擊右側繼續探索。</p>
                      </div>
                   </div>
                   
                   <div className="p-6 bg-white flex justify-between items-center border-t border-slate-100">
                      <button onClick={prevPage} disabled={currentPage === 0} className="flex items-center gap-2 font-bold disabled:opacity-30">
                        <ChevronLeft /> 上一頁
                      </button>
                      
                      {/* Integrated Missions Map Preview */}
                      <div className="hidden lg:flex items-center gap-4 text-xs font-bold text-slate-400">
                        {selectedStory.missions.map(m => (
                          <div key={m.step} className={`flex items-center gap-1 ${currentPage >= m.step - 1 ? "text-hakka-red" : ""}`}>
                            <div className={`w-4 h-4 rounded-full flex items-center justify-center border ${currentPage >= m.step - 1 ? "bg-hakka-red text-white" : ""}`}>
                              {m.step}
                            </div>
                            <span>{m.name}</span>
                          </div>
                        ))}
                      </div>

                      <button onClick={nextPage} className="flex items-center gap-2 font-bold text-hakka-red">
                        {currentPage === selectedStory.pages.length - 1 ? "完。待續" : "下一頁"} <ChevronRight />
                      </button>
                   </div>
                </div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-20 bg-hakka-cream rounded-[4rem] shadow-2xl"
                >
                  <h2 className="text-5xl font-serif text-hakka-brown mb-8">未完待續...</h2>
                  <p className="text-xl text-slate-500 mb-12">後續的故事，需要你與家人一同前往現場解開。</p>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Link to="/booking" className="btn-primary text-xl px-12 py-5 transform scale-110">
                      開啟冒險旅程
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
