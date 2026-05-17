
import { Mail, Phone, Users, Instagram } from "lucide-react";

export const Footer = () => (
  <footer className="bg-hakka-brown text-white py-16 border-t border-hakka-gold/20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div>
          <h5 className="font-serif text-2xl text-hakka-gold mb-6">桃客大溪冒險</h5>
          <p className="text-white/60 text-sm leading-relaxed">
            這不只是旅遊，而是一段探索文化的冒險。讓全家在解謎中看見客家文化的豐厚與美好。
          </p>
        </div>
        
        <div>
          <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-hakka-gold">聯絡資訊</h5>
          <ul className="space-y-4 text-white/70 text-sm">
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4" /> ty.ka_daxi@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4" /> 03 265 5401
            </li>
            <li>主辦單位：桃客大溪創意行銷公司</li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-hakka-gold">追蹤冒險</h5>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div style={{ width: '95.9861px', height: '94.9861px' }} className="bg-white p-1 rounded-lg flex items-center justify-center">
                <img src="/IG QR code.png" alt="IG QR Code" style={{ width: '87px', height: '87px' }} className="object-contain" referrerPolicy="no-referrer" />
              </div>
              <div className="text-sm">
                <p className="font-bold">Instagram</p>
                <p className="text-white/50">ty.ka_daxi</p>
              </div>
            </div>
            <a 
              href="https://www.instagram.com/ty.ka_daxi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-hakka-gold hover:text-white transition-colors text-sm"
            >
              <Instagram className="w-4 h-4" /> 點擊進入官方ＩＧ
            </a>
          </div>
        </div>

        <div>
          <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-hakka-gold">服務條款</h5>
          <ul className="space-y-2 text-white/50 text-xs">
            <li>隱私權政策與保險使用條款</li>
            <li>退費規定說明</li>
            <li>活動安全指南</li>
          </ul>
        </div>
      </div>
      
      <div className="pt-8 border-t border-white/5 text-center text-white/20 text-[10px]">
        © 2026 桃客大溪創意行銷公司 × 中原大學資訊管理系 ALL RIGHTS RESERVED.
      </div>
    </div>
  </footer>
);
