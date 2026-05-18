
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, ArrowLeft, Loader2 } from "lucide-react";

export const Booking = () => {
  const [submitted, setSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(7);
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let timer: any;
    if (submitted && countdown > 0) {
      timer = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
    } else if (submitted && countdown === 0) {
      navigate("/");
    }
    return () => clearInterval(timer);
  }, [submitted, countdown, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-hakka-cream pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-hakka-red font-bold mb-8">
          <ArrowLeft className="w-5 h-5" /> 返回
        </button>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white p-12 rounded-[3.5rem] shadow-2xl border-b-8 border-hakka-gold/30"
            >
              <h2 className="section-title text-center mb-4 italic">我要報名！！</h2>
              <p className="text-center text-slate-500 mb-12">請填寫冒險小隊的完整資料，以利保險與任務準備。</p>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-bold text-hakka-brown mb-3 tracking-widest">報名梯次</label>
                    <select className="w-full p-4 rounded-2xl border border-slate-200 focus:border-hakka-red focus:ring-0 focus:outline-none bg-slate-50" required defaultValue="">
                      <option value="" disabled>請選擇梯次</option>
                      <option>2026/05/23(六) 桐花篇</option>
                      <option>2026/05/24(日) 桐花篇</option>
                      <option>2026/05/27(三) 桐花篇</option>
                      <option>2026/06/06(六)</option>
                      <option>2026/06/07(日)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-hakka-brown mb-3 tracking-widest">參與人數</label>
                    <input type="number" className="w-full p-4 rounded-2xl border border-slate-200 focus:border-hakka-red focus:outline-none bg-slate-50" required />
                  </div>
                </div>

                <div className="space-y-6 pt-4 border-t border-slate-100">
                   <h4 className="font-bold text-hakka-red text-sm uppercase tracking-widest">領隊/聯絡人資訊</h4>
                   <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">參與者姓名</label>
                      <input type="text" className="w-full p-4 rounded-2xl border border-slate-200 focus:border-hakka-red focus:outline-none" required />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">身分證字號</label>
                      <input type="text" placeholder="保險用途" className="w-full p-4 rounded-2xl border border-slate-200 focus:border-hakka-red focus:outline-none" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">連絡電話</label>
                      <input type="tel" className="w-full p-4 rounded-2xl border border-slate-200 focus:border-hakka-red focus:outline-none" required />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">電子信箱</label>
                      <input type="email" className="w-full p-4 rounded-2xl border border-slate-200 focus:border-hakka-red focus:outline-none" required />
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4">
                  <input 
                    type="checkbox" 
                    id="agreement" 
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="w-5 h-5 mt-1 accent-hakka-red cursor-pointer" 
                    required 
                  />
                  <label htmlFor="agreement" className="text-sm text-slate-600 leading-relaxed cursor-pointer select-none">
                    我同意將資料交予保險與行程需求使用。我已閱讀並同意桃客大溪之活動安全指南與個人資料蒐集權益聲明。
                  </label>
                </div>

                <button 
                  type="submit" 
                  disabled={!agreed}
                  className={`w-full py-5 rounded-full text-xl font-bold transition-all shadow-xl ${
                    agreed ? "bg-hakka-red text-white hover:bg-hakka-brown hover:-translate-y-1" : "bg-slate-300 text-slate-500 cursor-not-allowed"
                  }`}
                >
                  立即報名
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white p-20 rounded-[4rem] text-center shadow-2xl border-b-8 border-green-500/30"
            >
              <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                <CheckCircle className="w-12 h-12" />
              </div>
              <h2 className="text-4xl font-serif text-hakka-brown mb-6">報名成功！</h2>
              <p className="text-xl text-slate-500 mb-12">歡迎加入桃客小隊。我們已將初步任務包寄送到您的信箱。</p>
              
              <div className="flex flex-col items-center gap-6">
                <div className="flex items-center gap-3 text-slate-400 font-medium">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>{countdown} 秒後自動返回首頁</span>
                </div>
                <button 
                  onClick={() => navigate("/")}
                  className="text-hakka-red font-bold underline hover:text-hakka-brown"
                >
                  手動返回
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
