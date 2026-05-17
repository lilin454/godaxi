
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft, HelpCircle, CheckCircle2, PiggyBank, ShoppingBag, Layout } from "lucide-react";

export const FAQ = () => {
  const sections = [
    {
      title: "產品介紹",
      icon: <Layout className="w-6 h-6" />,
      items: [
        { q: "我們的產品是什麽？", a: "桃園地區單日客家實境解謎。唯一客家IP實境解謎。APP輔助實境解謎。親子協作共同完成謎題。" },
        { q: "為什麼選擇大溪與龍潭？", a: "龍潭、大溪作為客家第一庄，我們希望將這塊土地上的文化故事宣揚出去。" }
      ]
    },
    {
      title: "價格與優惠",
      icon: <PiggyBank className="w-6 h-6" />,
      items: [
        { q: "活動價格是多少？", a: "定價為 899元 / 人。" },
        { q: "有什麼促銷活動嗎？", a: "我們提供多種折扣：\n1. 早鳥優惠：折抵 100元 (899變為799)。\n2. 四人同行一人免費 (買三送一)。\n3. 打卡分享：完成體驗後於 IG 打卡分享，可獲下次體驗 NT$50 折扣。" }
      ]
    },
    {
      title: "訂購通路",
      icon: <ShoppingBag className="w-6 h-6" />,
      items: [
        { q: "如何報名參加？", a: "您可以透過本網站直接報名，或者透過 LINE 官方帳號進行訂購。" }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-44 pb-20 bg-hakka-cream selection:bg-hakka-red/20">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-hakka-red font-bold mb-12 hover:translate-x-1 transition-transform">
          <ArrowLeft className="w-5 h-5" /> 返回首頁
        </Link>

        <div className="text-center mb-20">
           <div className="w-20 h-20 bg-hakka-red text-white rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <HelpCircle className="w-10 h-10" />
           </div>
           <h1 className="text-5xl font-serif text-hakka-brown font-black mb-6">常見QA</h1>
           <p className="text-xl text-slate-500 font-medium">關於冒險的所有疑惑，都在這裡為您解答。</p>
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
                        <p className="text-slate-600 leading-relaxed whitespace-pre-line">{item.a}</p>
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
              <h3 className="text-3xl font-serif font-black mb-6">還有其他問題想聊聊？</h3>
              <p className="text-white/70 mb-10 text-lg">歡迎隨時加入 LINE 官方帳號，我們的冒險守護員會盡快回覆您。</p>
              <a href="#" className="inline-block bg-hakka-gold text-white px-12 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-transform">
                 立即加入 LINE 諮詢
              </a>
           </div>
        </div>
      </div>
    </div>
  );
};
