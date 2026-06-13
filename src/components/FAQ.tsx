
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft, HelpCircle, CheckCircle2, PiggyBank, ShoppingBag, Layout } from "lucide-react";
import { useTranslation } from "../App";

export const FAQ = () => {
  const { lang, t } = useTranslation();

  const faqTranslations: any = {
    "zh-TW": {
      title: "常見QA",
      subtitle: "關於冒險的所有疑惑，都在這裡為您解答。",
      back: "返回首頁",
      cta_title: "還有其他問題想聊聊？",
      cta_desc: "歡迎隨時加入 LINE 官方帳號，我們的冒險守護員會盡快回覆您。",
      cta_btn: "立即加入 LINE 諮詢",
      sec_product: "產品介紹",
      sec_price: "價格與優惠",
      sec_channel: "訂購通路",
      q1: "我們的產品是什麼？",
      a1: "桃園地區單日客家實境解謎。唯一客家IP實境解謎。LINE Bot 輔助實境解謎。親子協作共同完成謎題。",
      q2: "為什麼選擇大溪與龍潭？",
      a2: "龍潭、大溪作為客家第一庄，我們希望將這塊土地上的文化故事宣揚出去。",
      q3: "活動價格是多少？",
      a3: "定價為 999元 / 人。",
      q4: "有什麼促銷活動嗎？",
      a4: "我們提供多種折扣：\n1. 早鳥優惠：活動上線前30天享早鳥優惠，可折抵 100元。\n2. 四人同行一人免費 (買三送一)。\n3. 打卡分享：完成體驗後於 IG 打卡分享，可獲下次體驗 NT$50 折扣。",
      q5: "如何報名參加？",
      a5: "您可以透過本網站直接報名，或者透過 LINE 官方帳號進行訂購。"
    },
    "zh-CN": {
      title: "常见QA",
      subtitle: "关于冒险的所有疑惑，都在这里为您解答。",
      back: "返回首页",
      cta_title: "还有其他问题想聊聊？",
      cta_desc: "欢迎随时加入 LINE 官方帐号，我们的冒险守护员会尽快回复您。",
      cta_btn: "立即加入 LINE 咨询",
      sec_product: "产品介绍",
      sec_price: "价格与优惠",
      sec_channel: "订购通路",
      q1: "我们的产品是什么？",
      a1: "桃园地区单日客家实境解谜。唯一客家IP实境解谜. LINE Bot 辅助实境解谜。亲子协作共同完成谜题。",
      q2: "为什么选择大溪与龙潭？",
      a2: "龙潭、大溪作为客家第一庄，我们希望将这块土地上的文化故事宣扬出去。",
      q3: "活动价格是多少？",
      a3: "定价为 999元 / 人。",
      q4: "有什么促销活动吗？",
      a4: "我们提供多种折扣：\n1. 早鸟优惠：活动上线前30天享早鸟优惠，可折抵 100元。\n2. 四人同行一人免费 (买三送一)。\n3. 打卡分享：完成体验后于 IG 打卡分享，可获下次体验 NT$50 折扣。",
      q5: "如何报名参加？",
      a5: "您可以透过本网站直接报名，或者透过 LINE 官方帐号进行订购。"
    },
    "en": {
      title: "Common FAQ",
      subtitle: "All your doubts about the adventure are answered here.",
      back: "Back Home",
      cta_title: "More questions?",
      cta_desc: "Welcome to join our official LINE account, our adventure guardians will reply soon.",
      cta_btn: "Join LINE Inquiry Now",
      sec_product: "Introduction",
      sec_price: "Price & Offers",
      sec_channel: "Booking Channels",
      q1: "What is our product?",
      a1: "One-day Hakka real-life puzzle in Taoyuan. Unique Hakka IP. LINE Bot-assisted. Parent-child collaboration.",
      q2: "Why Daxi and Longtan?",
      a2: "As the first Hakka villages, we hope to promote the cultural stories of this land.",
      q3: "How much is the activity?",
      a3: "Price is NT$999 / person.",
      q4: "Any promotions?",
      a4: "We offer several discounts:\n1. Early Bird: Early bird offer 30 days before launch, discount NT$100.\n2. Buy 3 Get 1 Free (4 people for 3 price).\n3. IG Share: Post on IG after experience to get NT$50 off next time.",
      q5: "How to register?",
      a5: "Register directly via this website or through official LINE account."
    },
    "vi": {
      title: "Câu hỏi thường gặp",
      subtitle: "Mọi thắc mắc về cuộc phiêu lưu đều được giải đáp tại đây.",
      back: "Trở về trang chủ",
      cta_title: "Bạn có câu hỏi khác?",
      cta_desc: "Chào mừng bạn tham gia tài khoản LINE chính thức, chúng tôi sẽ sớm phản hồi.",
      cta_btn: "Tư vấn LINE ngay",
      sec_product: "Giới thiệu",
      sec_price: "Giá & Ưu đãi",
      sec_channel: "Kênh đặt vé",
      q1: "Sản phẩm của chúng tôi là gì?",
      a1: "Giải đố thực tế Hakka một ngày tại Taoyuan. Giải đố IP Hakka duy nhất. Hỗ trợ qua LINE Bot. Cha mẹ và con cái cùng hợp tác.",
      q2: "Tại sao chọn Daxi và Longtan?",
      a2: "Là những ngôi làng Hakka đầu tiên, chúng tôi hy vọng quảng bá những câu chuyện văn hóa của vùng đất này.",
      q3: "Giá hoạt động là bao nhiêu?",
      a3: "Giá là 999 VNĐ / người (đơn vị Đài tệ).",
      q4: "Có chương trình khuyến mãi nào không?",
      a4: "Chúng tôi có nhiều ưu đãi:\n1. Early Bird: Ưu đãi sớm 30 ngày trước khi mở bán, giảm 100 NTD.\n2. Mua 3 tặng 1 (Nhóm 4 người).\n3. Chia sẻ IG: Chia sẻ sau trải nghiệm để nhận giảm giá 50 NTD lần sau.",
      q5: "Làm thế nào để đăng ký?",
      a5: "Đăng ký trực tiếp qua trang web này hoặc qua tài khoản LINE chính thức."
    }
  };

  const ft = faqTranslations[lang] || faqTranslations["zh-TW"];

  const sections = [
    {
      title: ft.sec_product,
      icon: <Layout className="w-6 h-6" />,
      items: [
        { q: ft.q1, a: ft.a1 },
        { q: ft.q2, a: ft.a2 }
      ]
    },
    {
      title: ft.sec_price,
      icon: <PiggyBank className="w-6 h-6" />,
      items: [
        { q: ft.q3, a: ft.a3 },
        { q: ft.q4, a: ft.a4 }
      ]
    },
    {
      title: ft.sec_channel,
      icon: <ShoppingBag className="w-6 h-6" />,
      items: [
        { q: ft.q5, a: ft.a5 }
      ]
    }
  ];

  const renderAnswer = (text: string) => {
    if (typeof text !== "string") return text;
    const lines = text.split("\n");
    if (lines.length <= 1) {
      return text;
    }
    return (
      <span className="block space-y-3 mt-1">
        {lines.map((line, idx) => {
          const match = line.match(/^(\d+\.\s*)(.*)$/);
          if (match) {
            const num = match[1];
            const content = match[2];
            const isEarlyBird = content.includes("早鳥") || content.includes("早鸟") || content.includes("Early Bird");
            return (
              <span key={idx} className="flex items-start gap-2 text-slate-600 leading-relaxed">
                <span className="font-bold text-hakka-gold shrink-0">{num}</span>
                <span className="flex-1 flex flex-wrap items-center gap-x-2 gap-y-1.5">
                  <span>{content}</span>
                  {isEarlyBird && (
                    <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-hakka-red text-white text-[11px] px-2.5 py-0.5 rounded-full font-bold shadow-sm animate-pulse whitespace-nowrap ml-1 origin-left">
                      <span className="line-through opacity-75 decoration-white text-[10px] scale-90">NT$999</span>
                      <span className="text-white text-[10px]">➔</span>
                      <span className="text-white font-black text-xs md:text-sm">NT$899</span>
                      <span className="text-[9px] md:text-[10px] bg-white/20 px-1.5 py-0.5 rounded">SAVE $100 ✨</span>
                    </span>
                  )}
                </span>
              </span>
            );
          }
          return <span key={idx} className="block text-slate-600 font-medium mb-1">{line}</span>;
        })}
      </span>
    );
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-hakka-cream selection:bg-hakka-red/20">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-hakka-red font-bold mb-12 hover:translate-x-1 transition-transform">
          <ArrowLeft className="w-5 h-5" /> {ft.back}
        </Link>

        <div className="text-center mb-20">
           <div className="w-20 h-20 bg-hakka-red text-white rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <HelpCircle className="w-10 h-10" />
           </div>
           <h1 className={`font-serif text-hakka-brown font-black mb-6 ${lang === 'en' || lang === 'vi' ? 'text-4xl md:text-5xl' : 'text-5xl'}`}>{ft.title}</h1>
           <p className="text-xl text-slate-500 font-medium">{ft.subtitle}</p>
        </div>

        <div className="space-y-12">
          {sections.map((section, sIdx) => (
            <motion.div 
              key={sIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-hakka-gold/10"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-hakka-gold/10 text-hakka-gold rounded-2xl flex items-center justify-center">
                   {section.icon}
                </div>
                <h2 className="text-2xl font-serif text-hakka-brown font-bold">{section.title}</h2>
              </div>

              <div className="space-y-8">
                {section.items.map((item, iIdx) => (
                  <div key={iIdx} className="group">
                    <div className="flex gap-4 mb-4">
                      <div className="w-6 h-6 mt-1 flex-shrink-0">
                        <CheckCircle2 className="w-6 h-6 text-hakka-red" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-hakka-brown mb-2 group-hover:text-hakka-red transition-colors">{item.q}</h4>
                        <div className="text-slate-600 leading-relaxed whitespace-pre-line">{renderAnswer(item.a)}</div>
                      </div>
                    </div>
                    {iIdx < section.items.length - 1 && <div className="h-px bg-slate-100 mt-8"></div>}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-hakka-brown rounded-[4rem] text-white text-center relative overflow-hidden">
           <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
           <div className="relative z-10">
              <h3 className="text-3xl font-serif font-black mb-6">{ft.cta_title}</h3>
              <p className="text-white/70 mb-10 text-lg">{ft.cta_desc}</p>
              <a href="https://line.me/R/ti/p/@275oznqg" target="_blank" rel="noopener noreferrer" className="inline-block bg-hakka-gold text-white px-12 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-transform">
                 {ft.cta_btn}
              </a>
           </div>
        </div>
      </div>
    </div>
  );
};
