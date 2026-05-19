
import { Mail, Phone, Users, Instagram } from "lucide-react";
import { useTranslation } from "../App";

export const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-hakka-brown text-white py-16 border-t border-hakka-gold/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h5 className="font-serif text-2xl text-hakka-gold mb-6">{t.footer_title}</h5>
            <p className="text-white/60 text-sm leading-relaxed">
              {t.footer_desc}
            </p>
          </div>
          
          <div>
            <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-hakka-gold">{t.footer_contact}</h5>
            <ul className="space-y-4 text-white/70 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4" /> ty.ka_daxi@gmail.com
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4" /> 03 265 5401
              </li>
              <li>{t.footer_org}</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-hakka-gold">{t.footer_follow}</h5>
            <div className="flex flex-col gap-8">
              {/* Instagram Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div style={{ width: '95.9861px', height: '94.9861px' }} className="bg-white p-1 rounded-lg flex items-center justify-center">
                    <img src="https://i.ibb.co/pv8nBBFP/IG-QR-code.png" alt="IG QR Code" style={{ width: '87px', height: '87px' }} className="object-contain" referrerPolicy="no-referrer" />
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
                  <Instagram className="w-4 h-4" /> {t.footer_ig}
                </a>
              </div>

              {/* LINE Section */}
              <div className="space-y-4 border-t border-white/10 pt-6">
                <div className="flex items-center gap-4">
                  <div style={{ width: '95.9861px', height: '94.9861px' }} className="bg-white p-1 rounded-lg flex items-center justify-center">
                    <img src="https://i.ibb.co/qMVHtcYc/LINE-QRcode.jpg" alt="LINE QR Code" style={{ width: '87px', height: '87px' }} className="object-contain" referrerPolicy="no-referrer" />
                  </div>
                  <div className="text-sm">
                    <p className="font-bold">LINE</p>
                    <p className="text-white/50">@275oznqg</p>
                  </div>
                </div>
                <a 
                  href="https://line.me/R/ti/p/@275oznqg" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-hakka-gold hover:text-white transition-colors text-sm"
                >
                  <div className="w-4 h-4 rounded-sm bg-hakka-gold flex items-center justify-center text-[10px] text-hakka-brown font-black">L</div>
                  {t.footer_line}
                </a>
              </div>
            </div>
          </div>

          <div>
            <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-hakka-gold">{t.footer_terms}</h5>
            <ul className="space-y-2 text-white/50 text-xs">
              <li>{t.footer_privacy}</li>
              <li>{t.footer_refund}</li>
              <li>{t.footer_safety}</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center text-white/20 text-[10px]">
          {t.footer_copy}
        </div>
      </div>
    </footer>
  );
};
