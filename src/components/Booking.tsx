
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, ArrowLeft, Loader2 } from "lucide-react";
import { useTranslation } from "../App";

export const Booking = () => {
  const { lang, t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(7);
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const bookingTranslations: any = {
    "zh-TW": {
      back: "返回",
      title: "我要報名！！",
      subtitle: "請填寫冒險小隊的完整資料，以利保險與任務準備。",
      batch: "報名梯次",
      select_batch: "請選擇梯次",
      participants: "參與人數",
      contact_info: "領隊/聯絡人資訊",
      name: "參與者姓名",
      id_number: "身分證字號",
      id_hint: "保險用途",
      phone: "連絡電話",
      email: "電子信箱",
      agreement: "我同意將資料交予保險與行程需求使用。我已閱讀並同意桃客大溪之活動安全指南與個人資料蒐集權益聲明。",
      submit: "立即報名",
      success_title: "報名成功！",
      success_desc: "歡迎加入桃客小隊。我們已將初步任務包寄送到您的信箱。",
      auto_back: "秒後自動返回首頁",
      manual_back: "手動返回",
      t_tung: "桐花篇"
    },
    "zh-CN": {
      back: "返回",
      title: "我要报名！！",
      subtitle: "请填写冒险小队的完整资料，以利保险与任务准备。",
      batch: "报名梯次",
      select_batch: "请选择梯次",
      participants: "参与人数",
      contact_info: "领队/联络人资讯",
      name: "参与者姓名",
      id_number: "身份证字号",
      id_hint: "保险用途",
      phone: "联络电话",
      email: "电子信箱",
      agreement: "我同意将资料交予保险与行程需求使用。我已阅读并同意桃客大溪之活动安全指南与个人资料搜集权益声明。",
      submit: "立即报名",
      success_title: "报名成功！",
      success_desc: "欢迎加入桃客小队。我们已将初步任务包寄送到您的邮箱。",
      auto_back: "秒后自动返回首页",
      manual_back: "手动返回",
      t_tung: "桐花篇"
    },
    "en": {
      back: "Back",
      title: "I want to Sign Up!!",
      subtitle: "Please fill in the adventure team details for insurance and task preparation.",
      batch: "Select Batch",
      select_batch: "Please select a batch",
      participants: "Participants",
      contact_info: "Leader/Contact Information",
      name: "Participant Name",
      id_number: "ID Number",
      id_hint: "For insurance",
      phone: "Phone Number",
      email: "Email Address",
      agreement: "I agree to use data for insurance and itinerary. I have read and agree to activity safety guide and privacy policy.",
      submit: "Register Now",
      success_title: "Registration Successful!",
      success_desc: "Welcome to Taoke Team. We have sent the initial task pack to your email.",
      auto_back: "seconds, back to home auto",
      manual_back: "Back manually",
      t_tung: "(Tung Blossom Issue)"
    },
    "vi": {
      back: "Trở về",
      title: "Tôi muốn đăng ký!!",
      subtitle: "Vui lòng điền thông tin đội phiêu lưu để làm bảo hiểm và chuẩn bị nhiệm vụ.",
      batch: "Chọn đợt đăng ký",
      select_batch: "Vui lòng chọn đợt",
      participants: "Số người tham gia",
      contact_info: "Thông tin Trưởng đoàn/Người liên hệ",
      name: "Họ tên người tham gia",
      id_number: "Số CMND/CCCD",
      id_hint: "Dành cho bảo hiểm",
      phone: "Số điện thoại",
      email: "Địa chỉ Email",
      agreement: "Tôi đồng ý cung cấp thông tin cho mục đích bảo hiểm và lịch trình. Tôi đã đọc và đồng ý với hướng dẫn an toàn và chính sách bảo mật.",
      submit: "Đăng ký ngay",
      success_title: "Đăng ký thành công!",
      success_desc: "Chào mừng bạn đến với đội Taoke. Chúng tôi đã gửi gói nhiệm vụ ban đầu vào email của bạn.",
      auto_back: "giây nữa, tự động trở về trang chủ",
      manual_back: "Trở về thủ công",
      t_tung: "(Mùa hoa Tung)"
    }
  };

  const bt = bookingTranslations[lang] || bookingTranslations["zh-TW"];

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
    <div className="min-h-screen bg-hakka-cream pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-hakka-red font-bold mb-8">
          <ArrowLeft className="w-5 h-5" /> {bt.back}
        </button>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white p-6 md:p-12 rounded-[3.5rem] shadow-2xl border-b-8 border-hakka-gold/30"
            >
              <h2 className={`section-title text-center mb-4 italic ${lang === 'en' || lang === 'vi' ? 'text-4xl md:text-5xl' : 'text-5xl'}`}>{bt.title}</h2>
              <p className="text-center text-slate-500 mb-12">{bt.subtitle}</p>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-bold text-hakka-brown mb-3 tracking-widest">{bt.batch}</label>
                    <select className="w-full p-4 rounded-2xl border border-slate-200 focus:border-hakka-red focus:ring-0 focus:outline-none bg-slate-50" required defaultValue="">
                      <option value="" disabled>{bt.select_batch}</option>
                      <option>2026/05/23(六) {bt.t_tung}</option>
                      <option>2026/05/24(日) {bt.t_tung}</option>
                      <option>2026/05/27(三) {bt.t_tung}</option>
                      <option>2026/06/06(六)</option>
                      <option>2026/06/07(日)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-hakka-brown mb-3 tracking-widest">{bt.participants}</label>
                    <input type="number" className="w-full p-4 rounded-2xl border border-slate-200 focus:border-hakka-red focus:outline-none bg-slate-50" required />
                  </div>
                </div>

                <div className="space-y-6 pt-4 border-t border-slate-100">
                   <h4 className="font-bold text-hakka-red text-sm uppercase tracking-widest">{bt.contact_info}</h4>
                   <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">{bt.name}</label>
                      <input type="text" className="w-full p-4 rounded-2xl border border-slate-200 focus:border-hakka-red focus:outline-none" required />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">{bt.id_number}</label>
                      <input type="text" placeholder={bt.id_hint} className="w-full p-4 rounded-2xl border border-slate-200 focus:border-hakka-red focus:outline-none" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">{bt.phone}</label>
                      <input type="tel" className="w-full p-4 rounded-2xl border border-slate-200 focus:border-hakka-red focus:outline-none" required />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">{bt.email}</label>
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
                    {bt.agreement}
                  </label>
                </div>

                <button 
                  type="submit" 
                  disabled={!agreed}
                  className={`w-full py-5 rounded-full text-xl font-bold transition-all shadow-xl ${
                    agreed ? "bg-hakka-red text-white hover:bg-hakka-brown hover:-translate-y-1" : "bg-slate-300 text-slate-500 cursor-not-allowed"
                  }`}
                >
                  {bt.submit}
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
              <h2 className="text-4xl font-serif text-hakka-brown mb-6">{bt.success_title}</h2>
              <p className="text-xl text-slate-500 mb-12">{bt.success_desc}</p>
              
              <div className="flex flex-col items-center gap-6">
                <div className="flex items-center gap-3 text-slate-400 font-medium">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>{countdown} {bt.auto_back}</span>
                </div>
                <button 
                  onClick={() => navigate("/")}
                  className="text-hakka-red font-bold underline hover:text-hakka-brown"
                >
                  {bt.manual_back}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
