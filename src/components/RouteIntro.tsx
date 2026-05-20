import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Car, 
  Bus, 
  Bike, 
  BookOpen, 
  Utensils, 
  Layers, 
  Heart,
  Compass,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { useTranslation } from "../App";

interface Station {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  summary: string;
  desc: string;
  time: string;
  icon: React.ReactNode;
  highlights: string[];
  imageUrl: string;
  tips: string;
}

export const RouteIntro = () => {
  const { lang, t } = useTranslation();
  const [expandedStation, setExpandedStation] = useState<string | null>(null);

  const translations: any = {
    "zh-TW": {
      back: "返回首頁",
      tagline: "桃園一日遊・極致親子行程",
      title: "實境冒險 行程介紹",
      subtitle: "我們為家庭量身規劃了一條「深度文化 x 低疲勞 x 高互動」的解謎時間軸。不只是看景點，而是全家在對話與尋找中，與大溪的泥土、古厝、美食寫下共同對話。",
      stat1_title: "建議出發時間",
      stat1_content: "建議 10:00 從中壢火車站出發，準時發車",
      stat2_title: "全程交通服務",
      stat2_content: "全程提供專屬包車交通服務，免除自行開車與轉乘煩憂，輕鬆出行！",
      stat3_title: "適合探索對象",
      stat3_content: "親子家庭(👑強力推薦!!)、親友出遊、公司團建，適合所有人同樂",
      timeline_title: "一日探險時間線 (Timeline)",
      stay_time: "建議停留：",
      collapse: "收合內容",
      expand: "查看更多",
      tips_label: "💡 冒險小叮嚀：",
      transport_title: "🚌 集合與全程包車服務 (Assembly & Shuttle Service)",
      transport_step1_title: "準時抵達集合點",
      transport_step1_desc: "參與者只需在集合時間（建議 10:00 AM 前）自行抵達出發起點「中壢火車站」集合。現場將有活動接待人員為您發分實體線索探險包與道具包。",
      transport_step2_title: "全程專屬包車服務",
      transport_step2_desc: "行程中各景點間的移動皆由大會統一安排專屬包車接送。參與者集體行動，免除開車、導航與轉乘找車位的疲勞，讓整趟冒險旅途倍感輕鬆、安全又愜意！",
      transport_highlight_title: "全程省心，全神貫注享受陪伴",
      transport_highlight_desc: "有別於行色匆匆的傳統走馬看花或繁瑣的自由行規劃。我們為您承包全程所有的交通移動服務與道具指引。全家或親友在車上能輕鬆交流、小憩，隨後帶著最飽滿的精力前進景點，全神貫注於實境解謎的情感協作與探索樂趣！",
      outro_title: "「不是大人等小孩，是全家一起解謎！」",
      outro_desc: "透過互動任務與文化探索，創造屬於家庭的共同回憶。現在就預訂冒險旅程，為週末刻下一段難忘的歡笑旅程！",
      booking_btn: "立即預約冒險",
      puzzle_btn: "探索實境玩法",
      story_btn: "觀看故事序章",
      s1: { title: "中壢火車站（集合出發）", subtitle: "🚉 集合接駁・開啟冒險旅程", summary: "冒險隊伍熱情集合，領取道具箱與專屬包車，出發前進！", desc: "大家於 10:00 AM 前在「中壢火車站」集合，與接待專員會合。領取精美實體線索探索包、解謎道具以及隊伍小手冊。隨後全員登上專屬遊覽包車前往客家文化探險起點，免除轉乘與開車找車位的體力負擔，帶著飽滿的好奇心，一同開啟今日的實境解謎冒險！", hl: ["中壢車站便攜集合", "領取實體精美道具", "全員包車安心啟程"], tips: "請於 09:50 前抵達集合地點，以確保全體成員順利在 10:00 準時發車喔！" },
      s2: { title: "三坑鐵馬道", subtitle: "🚴 水圳・農村・生態體驗", summary: "沿著古老水圳展開探索，騎自行車在微風中解鎖第一道客家謎題。", desc: "10:40 AM 抵達風景幽靜、平緩安全的三坑鐵馬道，沿途古老的水圳波光粼粼。全家人將換乘協力車/單車，一邊呼吸大自然芬多精，一邊沿著水圳前進。根據手卷與地圖尋找斑駁的地標線索，共同解開客家農家生態與百年水利文化的秘密謎底！", hl: ["悠閒水圳單車行", "綠意裡的尋寶任務", "探尋百年農村水利"], tips: "我們會統一準備、租乘安全的單車或協力車，讓大家遊玩得安心又省力！" },
      s3: { title: "大溪老街", subtitle: "🍢 巴洛克街區・美食午餐任務", summary: "在繁華迷人的巴洛克牌樓下吃喝，一邊大啖美食一邊探索線索！", desc: "12:00 PM 登陸享譽盛名的大溪老街。抬頭欣賞刻有複雜雕花的地標性巴洛克牌樓立面。尋寶隊在這裡要展開好玩又好吃的「美食收集大冒險」，品嚐熱騰騰的滷黑豆干、香Q客家牛汶水麻糬！原來美食的外包裝與地景可以拼出完美契合的下一關解密鑰匙！", hl: ["巴洛克雕花牌樓巡禮", "大溪經典老阿伯豆干", "感官味蕾與謎題整合"], tips: "我們為名勝老街留有充足的遊玩與午餐時光，快帶著大家的尋寶食譜出發吧！" },
      s4: { title: "大溪木藝生態博物館", subtitle: "🪵 傳統木器・匠人工藝考驗", summary: "參觀溫潤木造無牆博物館，解構傳統卡榫智慧，揭開歷史真相！", desc: "13:30 PM 來到保存大溪傳統歷史的木藝生態博物館群。關卡引導孩子與父母一同觀察不用任何釘子便能緊密接合的「傳統榫卯卡榫」，在精妙無比的歷史大木器房與日式歷史建築中徜徉、解密，破譯木藝匠人的千古智慧！", hl: ["巧奪天工卡榫拆解", "無牆日式老房建築群", "在工藝美學中尋求解答"], tips: "館內藏有許多精緻手工藝展品與木件，動手闖關時記得溫柔對待展館設施喔！" },
      s5: { title: "桃園市客家文化館", subtitle: "🎵 影音多媒體・音樂與童趣互動", summary: "沉浸在多媒體影音世界裡，在歡樂的客家音樂中解題學客語！", desc: "15:00 PM 前進結合音樂與文學藝術的桃園市客家文化館。利用館內豐富的影音互動裝置、童趣感十足的多媒體關卡，全家人攜手破解一系列關於客家歌謠與歷史事蹟的語音謎題，在歡笑好玩的情境中輕鬆學習日常客語！", hl: ["多媒體互動數位解謎", "客家歌謠與文學探索", "童趣無窮的影音體驗"], tips: "展示區擁有很多舒適冷氣房與趣味數位台機，下午造訪再合適不過！" },
      s6: { title: "鍾肇政文學生活園區", subtitle: "✍️ 文學發源・日式宿舍檜木宿舍群", summary: "探訪巨著《魯冰花》寫作故居，在榻榻米檜木香中解讀最後的謎底。", desc: "17:00 PM 造訪巨作《魯冰花》誕生地。這裡保留並修復了當年的日式宿舍群建築。全家人漫步在檜木飄香的榻榻米及木廊下，尋找遺留在鍾大師稿紙中的筆觸和情感，將收集的一日答案拼出最後之密！並在現場榮獲專屬徽章！", hl: ["魯冰花文學起點", "古典日式木造宿舍群", "終極秘密揭曉與榮譽加冕"], tips: "踏上百年日宿舍群需要穿著襪子入內，請遵守館員參觀指引喔！" },
      s7: { title: "啟程回中壢火車站", subtitle: "🚌 回程接駁・精彩交流", summary: "登上寬敞舒適的回程包車，輕鬆歇息並交流一整天精彩的冒險回憶。", desc: "18:00 PM 闖關成就集滿！大夥在返程的專屬包車上放鬆身心。回顧今日全體無間的配合，在車上看看大家一路闖關留下的搞怪、歡笑全家照，把桃園大溪的美好客家行囊溫馨帶回家！", hl: ["包車返程免去開車疲憊", "旅程冒險故事精彩回首", "夥伴溫情交流分享"], tips: "專車預計 30 分鐘即可安全返抵，大夥可以在車上稍作小憩充電。" },
      s8: { title: "抵達中壢火車站", subtitle: "🚉 滿載而歸・冒險圓滿落幕", summary: "大約 18:30 PM 抵達中壢火車站，收穫感動與代際歡笑、完美散會！", desc: "18:30 PM 包車安穩將大家送抵出發起點「中壢火車站」，這場融合歷史、美食、木藝卡榫、客語與文學的一日深度探險在暖心的笑容中歡樂成行、圓滿落幕！大人與孩子都在通力協作中看見了彼此更棒的一面！", hl: ["安全返回中壢車站", "帶走充實的文化能量", "永遠封存的親子默契"], tips: "下車時別忘了隨身攜帶您的冒險包道具和特製實體金屬徽章喔，祝大家回程平順！" }
    },
    "zh-CN": {
      back: "返回首页",
      tagline: "桃园一日游・极致亲子行程",
      title: "实境冒险 行程介绍",
      subtitle: "我们为家庭量身规划了一条“深度文化 x 低疲劳 x 高互动”的解谜时间轴。不只是看景点，而是全家在对话与寻找中，与大溪的泥土、古厝、美食写下共同对话。",
      stat1_title: "建议出发时间",
      stat1_content: "建议 10:00 从中坜火车站出发，准时发车",
      stat2_title: "全程交通服务",
      stat2_content: "全程提供专属包车交通服务，免除自行开车与转乘烦忧，轻松出行！",
      stat3_title: "适合探索对象",
      stat3_content: "亲子家庭(👑強力推荐!!)、亲友出游、公司团建，适合所有人同乐",
      timeline_title: "一日探险时间线 (Timeline)",
      stay_time: "建议停留：",
      collapse: "收合内容",
      expand: "查看更多",
      tips_label: "💡 冒险小叮嘱：",
      transport_title: "🚌 集合与全程包车服务 (Assembly & Shuttle Service)",
      transport_step1_title: "准时抵达集合点",
      transport_step1_desc: "参与者只需在集合时间（建议 10:00 AM 前）自行抵达出发起点“中坜火车站”集合。现场将有活动接待人员为您分发实体线索探险包与道具包。",
      transport_step2_title: "全程专属包车服务",
      transport_step2_desc: "行程中各景点间的移动皆由大会统一安排专属包车接送。参与者集体行动，免除开车、导航与转乘找车位的疲劳，让整趟冒险旅途倍感轻松、安全又惬意！",
      transport_highlight_title: "全程省心，全神贯注享受陪伴",
      transport_highlight_desc: "有别于行色匆匆的传统走马观花或繁复的自由行规划。我们为您承包全程所有的交通移动服务与道具指引。全家或亲友在车上能轻松交流、小憩，随后带着最饱满的精力前进景点，全神贯注于实境解谜的情感协作与探索乐趣！",
      outro_title: "“不是大人等小孩，是全家一起解谜！”",
      outro_desc: "透过互动任务与文化探索，创造属于家庭的共同回忆。现在就预订冒险旅程，为周末刻下一段难忘的欢笑旅程！",
      booking_btn: "立即预约冒险",
      puzzle_btn: "探索实境玩法",
      story_btn: "观看故事序章",
      s1: { title: "中坜火车站（集合出发）", subtitle: "🚉 集合接驳・开启冒险旅程", summary: "冒险队伍热情集合，领取道具箱与专属包车，出发前进！", desc: "大家于 10:00 AM 前在“中坜火车站”集合，与接待专员会合。领取精美实体线索探索包、解谜道具以及队伍小手册。随后全员登上专属游览包车前往客家文化探险起点，免除转乘与开车找车位的体力负担，带着饱满的好奇心，一同开启今日的实境解谜冒险！", hl: ["中坜车站便捷集合", "领取实体精美道具", "全员包车安心启程"], tips: "请于 09:50 前抵达集合地点，以确保全体成员顺利在 10:00 准时发车喔！" },
      s2: { title: "三坑铁马道", subtitle: "🚴 水圳・农村・生态体验", summary: "沿着古老水圳展开探索，骑自行车在微风中解锁第一道客家谜题。", desc: "10:40 AM 抵达风景幽静、平缓安全的三坑铁马道，沿着古老的水圳波光粼粼。全家人将换乘协力车/单车，一边呼吸大自然芬多精，一边沿着水圳前进。根据手卷与地图寻找斑驳的地标线索，共同解开客家农家生态与百年水利文化的秘密谜底！", hl: ["悠闲水圳单车行", "绿意里的寻宝任务", "探寻百年农村水利"], tips: "我们会统一准备、租乘安全的单车或协力车，让大家游玩得安心又省力！" },
      s3: { title: "大溪老街", subtitle: "🍢 巴洛克街区・美食午餐任务", summary: "在繁华迷人的巴洛克牌楼下吃喝，一边大啖美食一边探索线索！", desc: "12:00 PM 登陆享誉盛名的大溪老街。抬头欣赏刻有复杂雕花的地标性巴洛克牌楼立面。寻宝队在这里要展开好玩又好吃的内容“美食收集大冒险”，品尝热腾腾的卤黑豆干、香Q客家牛汶水麻糬！原来美食的外包装与地景可以拼出完美契合的下一关解密钥匙！", hl: ["巴洛克雕花牌坊巡礼", "大溪经典老阿伯豆干", "感官味蕾与谜题整合"], tips: "我们为名胜老街留有充足的游玩与午餐时光，快带着大家的寻宝食谱出发吧！" },
      s4: { title: "大溪木艺生态博物馆", subtitle: "🪵 传统木器・匠人工艺考验", summary: "参观温润木造无墙博物馆，解构传统榫卯智慧，揭开历史真相！", desc: "13:30 PM 来到保存大溪传统历史的木艺生态博物馆群。关卡引导孩子与父母一同观察不用任何钉子便能紧密接合的“传统榫卯”，在精妙无比的历史大木器房与日式历史建筑中徜徉、解密，破译木艺匠人的千古智慧！", hl: ["巧夺天工卡榫拆解", "无墙日式老房建筑群", "在工艺美学中寻求解答"], tips: "馆内藏有许多精緻手工艺展品与木件，动手闯关时记得温柔对待展馆设施喔！" },
      s5: { title: "桃园市客家文化馆", subtitle: "🎵 影音多媒体・音乐与童趣互动", summary: "沉浸在多媒体影音世界里，在欢乐的客语音乐中解题学客语！", desc: "15:00 PM 前进结合音乐与文学艺术的桃园市客家文化馆。利用馆内丰富的影音互动装置、童趣感十足的多媒体关卡，全家人携手破解一系列关于客家歌谣与历史事迹的语音谜题，在欢笑好玩的情景中轻松学习日常客语！", hl: ["多媒体互动数字解谜", "客家歌词与文学探索", "童趣无穷的影音体验"], tips: "展示区有很多舒适空调房与趣味数字台机，下午造访再合适不过！" },
      s6: { title: "钟肇政文学生活园区", subtitle: "✍️ 文学发源・日式宿舍桧木宿舍群", summary: "探访巨著《鲁冰花》写作故居，在榻榻米桧木香中解读最后的谜底。", desc: "17:00 PM 造访巨作《鲁冰花》诞生地。这里保留并修复了当年的日式宿舍群建筑。全家人漫步在桧木飘香的榻榻米及木廊下，寻找遗留在钟大师稿纸中的笔触和情感，将收集的一日答案拼出最后之密！并在现场荣获专属徽章！", hl: ["鲁冰花文学起点", "古典日式木造宿舍群", "终极秘密揭晓与荣誉加冕"], tips: "踏上百年日宿舍群需要穿着袜子入内，请遵守馆员参观指引喔！" },
      s7: { title: "启程回中坜火车站", subtitle: "🚌 回程接驳・精彩交流", summary: "登上宽敞舒适的回程包车，轻松歇息并交流一整天精彩的冒险回忆。", desc: "18:00 PM 闯关成就集满！大伙在返程的专属包车上放松身心。回顾今日全员无间的配合，在车上看看大家一路闯关留下的搞怪、欢笑全家照，把桃园大溪的美好客家行囊温馨带回家！", hl: ["包车返程免去开车疲惫", "旅程冒险故事精彩回首", "伙伴温情交流分享"], tips: "专车预计 30 分钟即可安全返抵，大伙可以在车上稍作小憩充电。" },
      s8: { title: "抵达中坜火车站", subtitle: "🚉 满载而归・冒险圆满落幕", summary: "大约 18:30 PM 抵达中坜火车站，收获感动与代际欢笑、完美散会！", desc: "18:30 PM 包车安稳将大家送抵出发起点“中坜火车站”，这场融合历史、美食、木艺榫卯、客语与文学的一日深度探险在暖心的笑容中欢乐成行、圆满落幕！大人与孩子都在通力协作中看见了彼此更棒的一面！", hl: ["安全返回中坜车站", "带走充实的文化能量", "永远封存的亲子默契"], tips: "下车时别忘了随身携带您的冒险包道具和特制实体金属徽章喔，祝大家回程平顺！" }
    },
    "en": {
      back: "Back Home",
      tagline: "Daxi One-Day Journey • Ultimate Family Trip",
      title: "Adventure Itinerary",
      subtitle: "Tailored for families: a 'Deep Culture x Low Fatigue x High Interaction' timeline. Not just sightseeing—it's a shared dialogue with Daxi's heritage and food.",
      stat1_title: "Departure Time",
      stat1_content: "Suggested 10:00 AM from Zhongli Railway Station, prompt departure.",
      stat2_title: "Private Shuttle",
      stat2_content: "Private shuttle provided throughout the trip. No driving or parking needed!",
      stat3_title: "Target Groups",
      stat3_content: "Families (👑Recommended!!), Friends, and Corporate Team Building.",
      timeline_title: "Adventure Timeline",
      stay_time: "Suggested: ",
      collapse: "Collapse",
      expand: "Read More",
      tips_label: "💡 Adventure Tips:",
      transport_title: "🚌 Assembly & Shuttle Service",
      transport_step1_title: "Arrive on Time",
      transport_step1_desc: "Meet at Zhongli Railway Station (before 10:00 AM). Staff will distribute kits and props.",
      transport_step2_title: "Private Shuttle Service",
      transport_step2_desc: "All transfers between spots are handled by our private shuttle. Relax and enjoy the safe, fatigue-free journey!",
      transport_highlight_title: "Worry-Free Focus on Bonding",
      transport_highlight_desc: "Forget complicated planning. We handle all logistics and props. Families can rest or chat on the shuttle, saving all energy for solving puzzles and exploring culture!",
      outro_title: " 'Don't just watch the kids—join the puzzle!' ",
      outro_desc: "Create lasting family memories through interactive missions and culture. Book now for an unforgettable weekend journey!",
      booking_btn: "Book Adventure",
      puzzle_btn: "How to Play",
      story_btn: "Watch Prologue",
      s1: { title: "Zhongli Station (Assembly)", subtitle: "🚉 Meet & Shuttle • Start Adventure", summary: "Assemble with enthusiasm, get your gear, and hop on the shuttle!", desc: "Meet at Zhongli Station before 10:00 AM to meet your greeter. Receive beautiful physical kits and manuals. Then board the private bus to the Hakka culture starting point—no driving stress, just pure curiosity for today's puzzle adventure!", hl: ["Convenient Meetup", "Beautiful Physical Props", "Safe Private Shuttle Start"], tips: "Please arrive by 09:50 to ensure everyone boards by 10:00 sharp!" },
      s2: { title: "Sankeng Bicycle Path", subtitle: "🚴 Canals • Village • Eco Experience", summary: "Cycle along ancient canals and unlock your first Hakka mystery in the breeze.", desc: "Arrive at the peaceful Sankeng Path at 10:40 AM. Families switch to tandem bikes or bicycles. Ride along shimmering canals, breathe fresh air, and find landmark clues using your maps to solve the secrets of hundred-year-old water culture!", hl: ["Relaxing Canal Ride", "Treasure Hunt in Greenery", "Explore Ancient Waterworks"], tips: "Bikes and tandems are prepared in advance for a safe and effortless ride!" },
      s3: { title: "Daxi Old Street", subtitle: "🍢 Baroque District • Food Hunt Lunch", summary: "Eat under charming Baroque facades while searching for the next clue!", desc: "Arrive at the famous Daxi Old Street at 12:00 PM. Admire detailed Baroque archways. Start your 'Food Collection Adventure'—taste hot braised tofu and chewy Hakka mochi! Use food packaging and landmarks to find the next key!", hl: ["Baroque Archway Tour", "Famous Braised Tofu", "Senses meet Puzzle Fusion"], tips: "We leave ample time for sightseeing and lunch. Enjoy your treasure hunting menu!" },
      s4: { title: "Wood Art Ecomuseum", subtitle: "🪵 Woodcraft • Craftsmanship Challenge", summary: "Visit the open-air museum to deconstruct traditional joinery and history.", desc: "1:30 PM: Visit the Wood Art Ecomuseum cluster. Guided tasks help parents and kids observe 'traditional mortise and tenon joinery'—tight connections without nails. Decode the eternal wisdom of woodcraft masters in historic Japanese buildings!", hl: ["Masterful Joinery Challenge", "Japanese Historic Buildings", "Answers in Craft Aesthetics"], tips: "The museum houses delicate handmade pieces. Please be gentle while solving puzzles!" },
      s5: { title: "Hakka Culture Museum", subtitle: "🎵 Multimedia • Music & Interactive Fun", summary: "Immerse in a digital world and learn Hakka through fun music and interactive puzzles!", desc: "3:00 PM: Move to the Hakka Culture Museum. Use audio-visual devices and interactive stations. Families solve audio riddles about songs and history, learning daily Hakka phrases while laughing and playing together!", hl: ["Digital Interactive Puzzles", "Hakka Song & Literature", "Endless Audio-Visual Fun"], tips: "The museum has comfortable air-conditioning and fun digital consoles—perfect for the afternoon!" },
      s6: { title: "Chung Chao-cheng Park", subtitle: "✍️ Literary Roots • Japanese Dormitories", summary: "Visit the home of 'The Dull-Ice Flower' and decode the final mystery.", desc: "5:00 PM: Visit the birthplace of the masterpiece 'The Dull-Ice Flower.' Walk through restored Japanese宿舍檜wood rooms. Find emotions left in master Chung's drafts, piece together a day's worth of answers, and win your exclusive badge!", hl: ["Literary Starting Point", "Classic Wood Buildings", "Final Secret Unveiled"], tips: "Socks are required inside the Japanese buildings. Please follow the guide's instructions!" },
      s7: { title: "Return to Zhongli Station", subtitle: "🚌 Return Shuttle • Memories Shared", summary: "Board the comfortable return shuttle, rest, and share the day's funniest moments.", desc: "6:00 PM: Mission accomplished! Relax on the private shuttle. Review your teamwork and check out funny photos of your group's victory as we take Daxi's Hakka vibes home warmly!", hl: ["Fatigue-Free Return", "Adventure Story Recap", "Warm Bonding & Sharing"], tips: "Estimated 30 min return. Feel free to nap and recharge!" },
      s8: { title: "Arrive at Zhongli Station", subtitle: "🚉 Home with Joy • Adventure Complete", summary: "Arrive back at ~6:30 PM with hearts full of culture and family laughter.", desc: "6:30 PM: The shuttle arrives safely at Zhongli Station. This deep dive into history, food, woodcraft, and literature concludes with warm smiles. Adults and kids have discovered the best in each other through teamwork!", hl: ["Safe Arrival at Station", "Full of Cultural Energy", "Eternal Family Bonding"], tips: "Don't forget your gear and special metal badge! Have a safe trip home!" }
    },
    "vi": {
      back: "Về trang chủ",
      tagline: "Chuyến đi Đào Viên • Hành trình gia đình",
      title: "Giới thiệu lịch trình",
      subtitle: "Thiết kế riêng cho gia đình: một dòng thời gian 'Văn hóa sâu sắc x Thấp mệt mỏi x Tương tác cao'. Không chỉ là tham quan—đó là cuộc đối thoại chung với di sản Daxi.",
      stat1_title: "Thời gian khởi hành",
      stat1_content: "Gợi ý 10:00 sáng từ ga Trung Lịch, khởi hành đúng giờ.",
      stat2_title: "Xe đưa đón riêng",
      stat2_content: "Cung cấp xe đưa đón riêng suốt chuyến đi. Không cần lái xe hay tìm chỗ đậu!",
      stat3_title: "Đối tượng tham gia",
      stat3_content: "Gia đình (👑Khuyên nghị!!), Bạn bè và Hoạt động đoàn thể công ty.",
      timeline_title: "Dòng thời gian phiêu lưu",
      stay_time: "Gợi ý dừng chân: ",
      collapse: "Thu gọn",
      expand: "Xem thêm",
      tips_label: "💡 Mẹo nhỏ cho đoàn:",
      transport_title: "🚌 Dịch vụ đưa đón & Tập trung",
      transport_step1_title: "Đến đúng giờ",
      transport_step1_desc: "Tập trung tại ga Trung Lịch (trước 10:00 sáng). Nhân viên sẽ phát bộ dụng cụ và đạo cụ giải đố.",
      transport_step2_title: "Dịch vụ xe riêng",
      transport_step2_desc: "Tất cả di chuyển giữa các điểm đều được sắp xếp bằng xe riêng. Hãy thư giãn và tận hưởng hành trình an toàn, không mệt mỏi!",
      transport_highlight_title: "Yên tâm tập trung gắn kết",
      transport_highlight_desc: "Quên đi việc lập kế hoạch phức tạp. Chúng tôi lo liệu mọi phương tiện và đạo cụ. Gia đình có thể nghỉ ngơi hoặc trò chuyện trên xe, dành toàn bộ năng lượng để giải đố và khám phá văn hóa!",
      outro_title: " 'Đừng chỉ nhìn con—hãy tham gia giải đố!' ",
      outro_desc: "Tạo kỷ niệm gia đình bền vững qua các nhiệm vụ tương tác và văn hóa. Đặt ngay cho một cuối tuần khó quên!",
      booking_btn: "Đặt ngay phiêu lưu",
      puzzle_btn: "Cách thức chơi",
      story_btn: "Xem phần mở đầu",
      s1: { title: "Ga Trung Lịch (Tập trung)", subtitle: "🚉 Gặp mặt & Xe đón • Bắt đầu", summary: "Tập trung với tâm thế hào hứng, nhận trang bị và lên xe!", desc: "Gặp gỡ nhân viên tại ga Trung Lịch trước 10:00 sáng. Nhận bộ dụng cụ và sách hướng dẫn đẹp mắt. Sau đó lên xe buýt riêng đến điểm văn hóa Hakka đầu tiên—không căng thẳng lái xe, chỉ có sự tò mò thuần túy!", hl: ["Tập trung thuận tiện", "Đạo cụ thực tế đẹp mắt", "Khởi hành an toàn bằng xe riêng"], tips: "Vui lòng đến lúc 09:50 để đảm bảo cả đoàn khởi hành đúng 10:00!" },
      s2: { title: "Đường xe đạp Tam Hàng", subtitle: "🚴 Kênh đào • Làng quê • Sinh thái", summary: "Đạp xe dọc theo các kênh cổ và giải mã bí ẩn Hakka đầu tiên.", desc: "Đến đường Tam Hàng lúc 10:40 sáng. Gia đình chuyển sang xe đạp đôi hoặc xe đạp đơn. Đạp dọc theo kênh nước lấp lánh, hít thở không khí trong lành và tìm manh mối để giải mã bí mật văn hóa nước trăm năm!", hl: ["Đạp xe thư giãn bên kênh", "Săn kho báu giữa màu xanh", "Khám phá thủy lợi cổ xưa"], tips: "Xe đạp được chuẩn bị sẵn để đảm bảo an toàn và chuyến đi không tốn sức!" },
      s3: { title: "Phố cổ Daxi", subtitle: "🍢 Khu phố Baroque • Ăn uống & Giải đố", summary: "Ăn uống dưới những mái hiên Baroque quyến rũ trong khi tìm manh mối!", desc: "Đến phố cổ Daxi nổi tiếng lúc 12:00 trưa. Chiêm ngưỡng các vòm cửa Baroque tinh xảo. Bắt đầu 'Cuộc phiêu lưu ẩm thực'—thử đậu phụ kho nóng hổi và bánh mochi Hakka dai ngon! Sử dụng bao bì thực phẩm để tìm chìa khóa tiếp theo!", hl: ["Tham quan kiến trúc Baroque", "Đậu phụ kho nổi tiếng", "Kết hợp vị giác và giải đố"], tips: "Chúng tôi dành đủ thời gian để tham quan và ăn trưa. Hãy tận hưởng thực đơn săn kho báu của bạn!" },
      s4: { title: "Bảo tàng Sinh thái Gỗ", subtitle: "🪵 Đồ gỗ • Thử thách tay nghề", summary: "Tham quan bảo tàng mở để khám phá kiến trúc mộng gỗ truyền thống.", desc: "13:30 chiều: Thăm cụm bảo tàng Gỗ. Nhiệm vụ hướng dẫn cha mẹ và trẻ em quan sát 'mộng gỗ truyền thống'—những kết nối chặt chẽ không dùng đinh. Giải mã trí tuệ ngàn năm của các thợ mộc trong những ngôi nhà Nhật cổ!", hl: ["Thử thách mộng gỗ điêu luyện", "Kiến trúc nhà Nhật cổ", "Tìm lời giải trong mỹ thuật"], tips: "Bảo tàng trưng bày nhiều món đồ thủ công tinh xảo. Hãy nhẹ tay khi tham gia giải đố!" },
      s5: { title: "Bảo tàng Văn hóa Hakka", subtitle: "🎵 Đa phương tiện • Âm nhạc & Tương tác", summary: "Đắm mình trong thế giới số và học tiếng Hakka qua âm nhạc vui nhộn!", desc: "15:00 chiều: Đến Bảo tàng Văn hóa Hakka Đào Viên. Sử dụng thiết bị âm thanh hình ảnh và các trạm tương tác. Gia đình cùng giải mã các câu đố âm thanh về bài hát và lịch sử, học tiếng Hakka trong không khí vui vẻ!", hl: ["Giải đố tương tác kỹ thuật số", "Khám phá nhạc & văn học Hakka", "Niềm vui âm thanh hình ảnh"], tips: "Bảo tàng có điều hòa mát mẻ và các bảng điều khiển số thú vị—rất hợp cho buổi chiều!" },
      s6: { title: "Vườn Văn học Chung Chao-cheng", subtitle: "✍️ Cội nguồn văn học • Nhà gỗ Nhật", summary: "Thăm nơi ra đời của 'Cánh hoa Dull-Ice' và giải mật mã cuối cùng.", desc: "17:00 chiều: Thăm nơi sinh của kiệt tác 'Cánh hoa Dull-Ice.' Bước qua những căn phòng gỗ Nhật được phục chế. Tìm kiếm cảm xúc trong các bản thảo của bậc thầy Chung, ghép nối các câu trả lời trong ngày và nhận huy hiệu độc quyền!", hl: ["Điểm khởi đầu văn học", "Cụm nhà gỗ Nhật cổ điển", "Tiết lộ bí mật cuối cùng"], tips: "Yêu cầu đi tất khi vào trong các tòa nhà Nhật. Vui lòng tuân theo hướng dẫn của bảo vệ!" },
      s7: { title: "Trở về ga Trung Lịch", subtitle: "🚌 Xe đưa về • Chia sẻ kỷ niệm", summary: "Lên xe đưa đón thoải mái, nghỉ ngơi và chia sẻ những khoảnh khắc vui nhất.", desc: "18:00 chiều: Hoàn thiện nhiệm vụ! Thư giãn trên xe riêng. Xem lại những bức ảnh hài hước của cả đoàn trong hành trình và mang những rung cảm Hakka của Daxi về nhà một cách ấm áp!", hl: ["Trở về không mệt mỏi", "Tóm tắt hành trình phiêu lưu", "Gắn kết & Chia sẻ ấm lòng"], tips: "Dự kiến 30 phút về đến nơi. Hãy chợp mắt một lát để nạp lại năng lượng!" },
      s8: { title: "Đến ga Trung Lịch", subtitle: "🚉 Về nhà với niềm vui • Kết thúc", summary: "Về đến nơi lúc ~18:30 với trái tim đầy ắp văn hóa và tiếng cười gia đình.", desc: "18:30 chiều: Xe đưa bạn về ga Trung Lịch an toàn. Hành trình khám phá lịch sử, ẩm thực, đồ gỗ và văn học kết thúc với những nụ cười ấm áp. Cha mẹ và trẻ em đã khám phá ra những điều tốt đẹp nhất ở nhau!", hl: ["Về ga Trung Lịch an toàn", "Tràn đầy năng lượng văn hóa", "Gắn kết gia đình vĩnh cửu"], tips: "Đừng quên đồ dùng và huy hiệu kim loại đặc biệt! Chúc bạn lên đường bình an!" }
    }
  };

  const rt = translations[lang] || translations["zh-TW"];

  const stations: Station[] = [
    {
      id: "zhongli-meet",
      step: "01",
      title: rt.s1.title,
      subtitle: rt.s1.subtitle,
      summary: rt.s1.summary,
      desc: rt.s1.desc,
      time: "10:00 AM",
      icon: <MapPin className="w-5 h-5 md:w-6 md:h-6" />,
      highlights: rt.s1.hl,
      imageUrl: "https://i.ibb.co/YFJvSKkS/image.png",
      tips: rt.s1.tips
    },
    {
      id: "sankeng",
      step: "02",
      title: rt.s2.title,
      subtitle: rt.s2.subtitle,
      summary: rt.s2.summary,
      desc: rt.s2.desc,
      time: "10:40 AM",
      icon: <Bike className="w-5 h-5 md:w-6 md:h-6" />,
      highlights: rt.s2.hl,
      imageUrl: "https://i.ibb.co/gZndCVBD/image.jpg",
      tips: rt.s2.tips
    },
    {
      id: "daxi-oldstreet",
      step: "03",
      title: rt.s3.title,
      subtitle: rt.s3.subtitle,
      summary: rt.s3.summary,
      desc: rt.s3.desc,
      time: "12:00 PM",
      icon: <Utensils className="w-5 h-5 md:w-6 md:h-6" />,
      highlights: rt.s3.hl,
      imageUrl: "https://i.ibb.co/84dNBr3L/image.jpg",
      tips: rt.s3.tips
    },
    {
      id: "woodmuseum",
      step: "04",
      title: rt.s4.title,
      subtitle: rt.s4.subtitle,
      summary: rt.s4.summary,
      desc: rt.s4.desc,
      time: "13:30 PM",
      icon: <Layers className="w-5 h-5 md:w-6 md:h-6" />,
      highlights: rt.s4.hl,
      imageUrl: "https://i.ibb.co/nsHPBChh/image.jpg",
      tips: rt.s4.tips
    },
    {
      id: "hakka-cultural",
      step: "05",
      title: rt.s5.title,
      subtitle: rt.s5.subtitle,
      summary: rt.s5.summary,
      desc: rt.s5.desc,
      time: "15:00 PM",
      icon: <Compass className="w-5 h-5 md:w-6 md:h-6" />,
      highlights: rt.s5.hl,
      imageUrl: "https://museums.moc.gov.tw/Upload/FrontPhoto/5c5970f0-ce15-4924-9d08-3b7f375b76bf.jpg",
      tips: rt.s5.tips
    },
    {
      id: "literary",
      step: "06",
      title: rt.s6.title,
      subtitle: rt.s6.subtitle,
      summary: rt.s6.summary,
      desc: rt.s6.desc,
      time: "17:00 PM",
      icon: <BookOpen className="w-5 h-5 md:w-6 md:h-6" />,
      highlights: rt.s6.hl,
      imageUrl: "https://images.pexels.com/photos/33083212/pexels-photo-33083212.jpeg?_gl=1*ui41vg*_ga*NjQ5NDc2Njg1LjE3Nzg0MzY3NjM.*_ga_8JE65Q40S6*czE3NzkwMTAwNzkkbzYkZzEkdDE3NzkwMTA5ODIkajMyJGwwJGgw",
      tips: rt.s6.tips
    },
    {
      id: "return",
      step: "07",
      title: rt.s7.title,
      subtitle: rt.s7.subtitle,
      summary: rt.s7.summary,
      desc: rt.s7.desc,
      time: "18:00 PM",
      icon: <Bus className="w-5 h-5 md:w-6 md:h-6" />,
      highlights: rt.s7.hl,
      imageUrl: "https://i.ibb.co/G30S2N51/image.png",
      tips: rt.s7.tips
    },
    {
      id: "arrive",
      step: "08",
      title: rt.s8.title,
      subtitle: rt.s8.subtitle,
      summary: rt.s8.summary,
      desc: rt.s8.desc,
      time: "18:30 PM",
      icon: <Clock className="w-5 h-5 md:w-6 md:h-6" />,
      highlights: rt.s8.hl,
      imageUrl: "https://i.ibb.co/YFJvSKkS/image.png",
      tips: rt.s8.tips
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 bg-hakka-cream selection:bg-hakka-red/20 text-slate-800 relative font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-hakka-red font-bold mb-12 hover:translate-x-1 transition-transform">
          <ArrowLeft className="w-5 h-5" /> {rt.back}
        </Link>
        
        {/* Header Title Section */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 text-hakka-red font-bold tracking-widest uppercase mb-4"
          >
            <Compass className="w-5 h-5 animate-spin-slow" />
            <span>{rt.tagline}</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={`font-serif font-black text-hakka-brown mb-6 ${lang === 'en' || lang === 'vi' ? 'text-3xl md:text-5xl' : 'text-4xl md:text-6xl'}`}
          >
            {rt.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`text-slate-600 leading-relaxed font-medium ${lang === 'en' || lang === 'vi' ? 'text-lg' : 'text-xl'}`}
          >
            {rt.subtitle}
          </motion.p>
        </div>

        {/* Highlight Stats / Info Bento */}
        <section className="mb-24 grid md:grid-cols-3 gap-8">
          {[
            { title: rt.stat1_title, content: rt.stat1_content, icon: <Clock className="text-hakka-red" /> },
            { title: rt.stat2_title, content: rt.stat2_content, icon: <Bus className="text-hakka-green" /> },
            { title: rt.stat3_title, content: rt.stat3_content, icon: <Heart className="text-hakka-red/80" /> },
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-hakka-gold/15 shadow-md flex items-start gap-4 hover:shadow-xl transition-all"
            >
              <div className="p-3 bg-hakka-cream rounded-2xl shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="font-bold text-hakka-brown text-lg mb-1">{item.title}</h4>
                <p className="text-sm font-medium text-slate-500 leading-relaxed">{item.content}</p>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Timeline / Route Journey Cards */}
        <section className="relative mb-24">
          <h2 className={`font-serif text-hakka-brown font-black mb-12 text-center flex items-center justify-center gap-2 ${lang === 'en' || lang === 'vi' ? 'text-2xl md:text-4xl' : 'text-3xl'}`}>
            <Sparkles className="w-6 h-6 text-hakka-gold" /> {rt.timeline_title}
          </h2>

          {/* Timeline center line for desktop */}
          <div className="absolute left-[30px] lg:left-1/2 top-10 bottom-10 w-0.5 bg-gradient-to-b from-hakka-red/60 via-hakka-gold/60 to-hakka-green/40 hidden md:block"></div>

          <div className="space-y-16">
            {stations.map((station, idx) => {
              const isEven = idx % 2 === 1;
              const isExpanded = expandedStation === station.id;

              return (
                <div 
                  key={station.id}
                  id={`route-${station.id}`}
                  className={`relative flex flex-col md:flex-row items-start lg:items-center justify-between gap-8 md:gap-16 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Left or Right Positioned Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 80 : -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="w-full md:w-[46%] z-10"
                  >
                    <div className="bg-white rounded-[2.5rem] shadow-xl hover:shadow-2xl border-2 border-hakka-red/5 p-6 md:p-8 transition-all group overflow-hidden relative">
                      {/* Accent Corner Badge for Step Number */}
                      <div className="absolute top-0 right-0 bg-hakka-red/10 text-hakka-red font-black text-xl px-5 py-3 rounded-bl-[1.5rem] tracking-widest font-mono">
                        {station.step}
                      </div>

                      {/* Station Icon and Header */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-hakka-cream rounded-2xl text-hakka-red group-hover:scale-110 transition-transform shrink-0">
                          {station.icon}
                        </div>
                        <div className="min-w-0 pr-12">
                          <span className="text-xs font-black tracking-widest uppercase text-hakka-green block truncate">{station.subtitle}</span>
                          <h3 className={`font-serif text-hakka-brown font-black mt-1 leading-snug ${lang === 'en' || lang === 'vi' ? 'text-xl md:text-2xl' : 'text-2xl'}`}>{station.title}</h3>
                        </div>
                      </div>

                      <p className="text-[15px] font-medium text-slate-500 leading-relaxed mb-4">
                        {station.summary}
                      </p>

                      {/* Display Badges */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {station.highlights.map((h, i) => (
                          <span key={i} className="text-xs font-bold text-hakka-green bg-hakka-green/5 px-3 py-1.5 rounded-full">
                            #{h}
                          </span>
                        ))}
                      </div>

                      {/* Expandable and Link Details */}
                      <div className="h-px bg-slate-100 my-4"></div>

                      <div className="flex items-center justify-between gap-4">
                        <span className="text-xs font-bold text-slate-400 flex items-center gap-1.5 whitespace-nowrap">
                          <Clock className="w-3.5 h-3.5" /> {rt.stay_time}{station.time}
                        </span>

                        <button 
                          onClick={() => setExpandedStation(isExpanded ? null : station.id)}
                          className="px-4 py-2 text-xs font-black text-hakka-red hover:bg-hakka-red/5 rounded-full flex items-center gap-1 cursor-pointer transition-all border border-hakka-red/15 uppercase select-none whitespace-nowrap"
                        >
                          <span>{isExpanded ? rt.collapse : rt.expand}</span>
                          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>
                      </div>

                      {/* Collapsible Panel */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="pt-6 mt-6 border-t border-dashed border-slate-100">
                              {/* Station Inline Image */}
                              <div className="w-full h-44 rounded-2xl overflow-hidden mb-4 relative">
                                <img src={station.imageUrl} alt={station.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                              </div>
                              <p className="text-sm text-slate-600 leading-relaxed font-medium mb-4">
                                {station.desc}
                              </p>
                              {/* Parent Advisory / Tips */}
                              <div className="bg-hakka-cream/60 p-4 rounded-xl border-l-4 border-hakka-gold text-xs leading-relaxed text-slate-700 font-medium">
                                <p className="font-bold text-hakka-brown mb-1">{rt.tips_label}</p>
                                {station.tips}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>

                  {/* Desktop Timeline Node Ring */}
                  <div className="absolute left-[30px] lg:left-1/2 -translate-x-[11px] md:-translate-x-[12.5px] w-6 h-6 rounded-full bg-white border-4 border-hakka-red z-20 flex items-center justify-center pointer-events-none">
                    <div className="w-1.5 h-1.5 rounded-full bg-hakka-gold animate-ping"></div>
                  </div>

                  {/* Empty Spacer on other side for desktop */}
                  <div className="hidden md:block w-[46%]"></div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Transportation Guide Card */}
        <section className="mb-24 bg-white p-10 md:p-16 rounded-[4.5rem] border border-hakka-gold/15 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-hakka-gold/5 rounded-bl-[8rem] pointer-events-none"></div>
          
          <h3 className={`font-serif text-hakka-brown font-black mb-8 flex items-center gap-2 ${lang === 'en' || lang === 'vi' ? 'text-2xl md:text-4xl' : 'text-3xl'}`}>
            {rt.transport_title}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-hakka-red/10 h-11 w-11 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="text-hakka-red h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-800 text-lg mb-2">{rt.transport_step1_title}</h4>
                  <p className="text-[14px] text-slate-500 font-medium leading-relaxed">
                    {rt.transport_step1_desc}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-hakka-green/10 h-11 w-11 rounded-xl flex items-center justify-center shrink-0">
                  <Bus className="text-hakka-green h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-800 text-lg mb-2">{rt.transport_step2_title}</h4>
                  <p className="text-[14px] text-slate-500 font-medium leading-relaxed">
                    {rt.transport_step2_desc}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-hakka-cream/40 p-8 rounded-[2.5rem] border border-hakka-gold/10 flex flex-col justify-center">
              <h4 className="font-serif text-lg text-hakka-brown font-extrabold mb-3 flex items-center gap-1.5">
                <Heart className="w-5 h-5 text-hakka-red animate-pulse" /> {rt.transport_highlight_title}
              </h4>
              <p className="text-[14px] text-slate-600 font-medium leading-relaxed">
                {rt.transport_highlight_desc}
              </p>
            </div>
          </div>
        </section>

        {/* Dynamic CTA Outro */}
        <section className="bg-hakka-brown rounded-[4rem] text-white p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#FFF_1px,transparent_1px)] [background-size:24px_24px]"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <Sparkles className="text-hakka-gold h-12 w-12 md:h-16 md:w-16 mb-6 animate-pulse" />
            <h2 className={`font-serif font-black mb-6 ${lang === 'en' || lang === 'vi' ? 'text-2xl md:text-3xl lg:text-4xl' : 'text-3xl md:text-4xl'}`}>{rt.outro_title}</h2>
            <p className="text-sm md:text-base text-white/80 leading-relaxed font-bold mb-10">
              {rt.outro_desc}
            </p>
            
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                <Link 
                  to="/booking" 
                  className="btn-primary py-4 px-10 text-lg font-black text-white hover:scale-105 transition-transform shadow-2xl flex items-center justify-center gap-2 cursor-pointer border border-white/10 whitespace-nowrap"
                >
                  <span>{rt.booking_btn}</span> <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/puzzle" 
                  className="py-4 px-10 text-lg font-bold border-2 border-white/40 hover:border-white text-white hover:bg-white/5 rounded-full transition-all flex items-center justify-center whitespace-nowrap"
                >
                  {rt.puzzle_btn}
                </Link>
              </div>
              <Link 
                to="/story" 
                className="py-3.5 px-10 text-base font-black border border-white/20 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all hover:scale-105 shadow-md flex items-center justify-center whitespace-nowrap"
              >
                {rt.story_btn}
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
