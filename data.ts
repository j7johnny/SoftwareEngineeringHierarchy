import { GraphData } from './types';

export const graphData: GraphData = {
  nodes: [
    { 
      id: 'Haskell', 
      label: 'Haskell', 
      description: '學術象牙塔', 
      detailedDescription: '1990年誕生，純函數式編程的巔峰。它像數學一樣嚴謹，以強靜態型別和惰性求值著稱。雖然在工業界應用門檻極高，但其概念（如 Monad）深刻影響了 Rust、Swift 等現代語言的設計。',
      category: 'ivory' 
    },
    { 
      id: 'Lisp', 
      label: 'Lisp', 
      description: '括號地獄的開始', 
      detailedDescription: '1958年問世，僅次於 Fortran 的第二古老高階語言。它是人工智慧的先驅，其「代碼即數據」的哲學和巨量的括號是其標誌。',
      category: 'oldacademic' 
    },
    { 
      id: 'ASM', 
      label: 'Assembly', 
      description: '上古神獸', 
      detailedDescription: '組合語言，直接對硬體發號施令的語言。在它面前，連 C 語言都顯得臃腫。雖然極難維護，但在極致優化和嵌入式系統中仍不可或缺。',
      category: 'system' 
    },
    { 
      id: 'C', 
      label: 'C', 
      description: '萬物基石', 
      detailedDescription: '1972年由 Dennis Ritchie 創造。現代作業系統（Unix/Linux/Windows）的基石。它賦予開發者直接操作記憶體的權力，當然，也包括射爛自己腳的權力。',
      category: 'system' 
    },
    { 
      id: 'CPP', 
      label: 'C++', 
      description: '複雜怪獸', 
      detailedDescription: '在 C 的基礎上加入了物件導向。功能強大到令人恐懼，語法複雜到沒人敢說自己精通。遊戲引擎、高頻交易系統的標準配備。',
      category: 'system' 
    },
    { 
      id: 'Rust', 
      label: 'Rust', 
      description: '安全新教派', 
      detailedDescription: 'Mozilla 的產物，承諾在沒有 Garbage Collection 的情況下保證記憶體安全。擁有狂熱的粉絲群體，正試圖在系統程式設計領域取代 C++。',
      category: 'modern' 
    },
    { 
      id: 'Go', 
      label: 'Go', 
      description: 'Google 親兒子', 
      detailedDescription: '由 Google 開發，為了簡化伺服器端開發而生。語法簡單粗暴，併發模型（Goroutines）強大。常被批評「平庸」，但極其實用。',
      category: 'modern' 
    },
    { 
      id: 'Erlang', 
      label: 'Erlang', 
      description: '電信之王', 
      detailedDescription: '為了電話交換機而生，天生具備高併發與容錯能力。WhatsApp 早期就是靠它支撐起億級用戶。',
      category: 'modern' 
    },
    { 
      id: 'JavaCSharp', 
      label: 'Java / C#', 
      description: '企業級社畜', 
      detailedDescription: '大型企業後端的標準選擇。強調物件導向、設計模式和穩定性。雖然被嫌棄囉唆和啟動慢，但它們支撐著世界500強的運作。',
      category: 'enterprise' 
    },
    { 
      id: 'Python', 
      label: 'Python', 
      description: 'AI 新貴', 
      detailedDescription: '語法簡潔如英語，從腳本語言一路逆襲成為 AI 與數據科學的霸主。雖然執行速度慢，但開發速度快到讓人無法拒絕。',
      category: 'scripting' 
    },
    { 
      id: 'Ruby', 
      label: 'Ruby', 
      description: '曾經的優雅', 
      detailedDescription: '來自日本，強調「程式設計師的快樂」。Rails 框架曾定義了 Web 開發的黃金時代，現在雖熱度減退，但優雅依舊。',
      category: 'scripting' 
    },
    { 
      id: 'Perl', 
      label: 'Perl', 
      description: '只寫不讀', 
      detailedDescription: '曾經的「網際網路膠帶」。正則表達式極強，但語法晦澀難懂，被戲稱為「唯寫語言」（Write-only）。',
      category: 'scripting' 
    },
    { 
      id: 'Lua', 
      label: 'Lua', 
      description: '遊戲腳本', 
      detailedDescription: '來自巴西，極度輕量、可嵌入。是《魔獸世界》、《Roblox》等遊戲擴充功能的首選語言。索引從 1 開始是它最大的原罪。',
      category: 'scripting' 
    },
    { 
      id: 'BASIC', 
      label: 'BASIC', 
      description: '微機啟蒙', 
      detailedDescription: '1964年設計給初學者的語言。它啟蒙了比爾蓋茲那個世代的開發者，雖然現在看來結構鬆散，但它是個人電腦時代的開端。',
      category: 'legacy' 
    },
    { 
      id: 'Pascal', 
      label: 'Pascal', 
      description: '教學語言之王', 
      detailedDescription: '以結構嚴謹著稱，曾是電腦科學教育的標準語言。Delphi 曾讓它在商業應用上曇花一現。',
      category: 'legacy' 
    },
    { 
      id: 'TS', 
      label: 'TypeScript', 
      description: '加上類型的JS', 
      detailedDescription: '微軟開發的 JavaScript 超集。它證明了即便是前端開發者，內心深處也渴望著靜態型別的安全感。',
      category: 'web' 
    },
    { 
      id: 'JS', 
      label: 'JavaScript', 
      description: '網路世界的混沌', 
      detailedDescription: 'Brendan Eich 用 10 天寫出來的語言。它是瀏覽器的唯一霸主，生態系極度混亂卻又充滿活力。任何能用 JS 寫的應用，最終都會用 JS 寫。',
      category: 'web' 
    },
    { 
      id: 'NodeJS', 
      label: 'Node.js', 
      description: '後端 JS', 
      detailedDescription: '這不是語言，是執行環境。它讓前端工程師能夠入侵後端領域，引發了全端開發的熱潮（以及 NPM 依賴地獄）。',
      category: 'web' 
    },
    { 
      id: 'ReScript', 
      label: 'ReScript', 
      description: '強型別編譯', 
      detailedDescription: '試圖將 OCaml 的強大功能帶入 JavaScript 生態系。比起 TS，它更激進地追求函數式編程的正確性。',
      category: 'web' 
    },
    { 
      id: 'PHP', 
      label: 'PHP', 
      description: '萬年迷因王', 
      detailedDescription: '「世界上最好的語言」。儘管被鄙視語法不一，但它驅動了網際網路 70% 的網站（包含 Facebook 早期與 WordPress）。',
      category: 'web' 
    },
    { 
      id: 'RMatlab', 
      label: 'R / Matlab', 
      description: '算數學的', 
      detailedDescription: '這不是寫程式，這是跑模型與矩陣運算。在學術界與金融界是神，但在軟體工程師眼裡，它們的程式碼結構令人崩潰。',
      category: 'data' 
    },
    { 
      id: 'Fortran', 
      label: 'Fortran', 
      description: '科學計算活化石', 
      detailedDescription: '1957年誕生，最古老的高階語言。在氣象預報、流體力學等需要極致數值運算效能的領域，它依然是王者。',
      category: 'data' 
    },
    { 
      id: 'HTMLCSS', 
      label: 'HTML / CSS', 
      description: '標記語言', 
      detailedDescription: '網頁的骨架與皮膚。雖然嚴格來說不是「程式語言」（無法邏輯運算），但沒有它們，所有後端邏輯都只是黑底白字的終端機。',
      category: 'bottom' 
    },
    { 
      id: 'Excel', 
      label: 'Excel / No-Code', 
      description: '非工程師領域', 
      detailedDescription: '全球使用最廣泛的「程式開發環境」。業務與財務人員用它構建了無數支撐世界經濟的複雜系統。',
      category: 'bottom' 
    },
    { 
      id: 'COBOL', 
      label: 'COBOL', 
      description: '史前怪物', 
      detailedDescription: '主要用於銀行與金融系統。程式碼看起來像大寫的英語文章。現在能看懂它的工程師，薪水可能比 CEO 還高。',
      category: 'legacy' 
    },
    { 
      id: 'VB', 
      label: 'Visual Basic', 
      description: '微軟遺物', 
      detailedDescription: '曾經讓拖拉控制項寫程式成為可能。雖然現在常被嘲笑，但它降低了程式設計的門檻，造就了無數共享軟體。',
      category: 'legacy' 
    },
    { 
      id: 'Kotlin', 
      label: 'Kotlin', 
      description: 'Java 的救贖', 
      detailedDescription: 'Google 欽點的 Android 官方語言。它保留了 Java 的生態系，但語法更簡潔現代，試圖修復 Java 的種種痛點。',
      category: 'enterprise' 
    },
    { 
      id: 'Scala', 
      label: 'Scala', 
      description: '函數/物件混血', 
      detailedDescription: '試圖在 JVM 上完美融合物件導向與函數式編程。語法極其靈活複雜，編譯速度慢是其硬傷。',
      category: 'enterprise' 
    },
    { 
      id: 'Swift', 
      label: 'Swift', 
      description: 'Apple 的驕傲', 
      detailedDescription: '取代 Objective-C 的現代語言。安全、快速，且深受 Apple 生態系開發者喜愛。',
      category: 'modern' 
    },
    { 
      id: 'Ada', 
      label: 'Ada', 
      description: '國防部寵物', 
      detailedDescription: '以世界上第一位程式設計師 Ada Lovelace 命名。專為航空航太與國防設計，極度強調安全與可靠性。',
      category: 'system' 
    },
  ],
  links: [
    // Ivory Tower (學術界)
    { source: 'Haskell', target: 'C', insult: '副作用太多，不純潔！' },
    { source: 'Haskell', target: 'JavaCSharp', insult: '你們甚至不懂什麼是 Monad。' },
    { source: 'Haskell', target: 'Scala', insult: '我才是函數式編程的正統。' },
    { source: 'Haskell', target: 'Rust', insult: '學了我的型別系統，卻沒學會優雅。' }, // NEW
    { source: 'Lisp', target: 'Haskell', insult: '我可是 S-Expression 的教父。' },
    { source: 'Lisp', target: 'Perl', insult: '括號才是代碼的靈魂！' },
    { source: 'Lisp', target: 'Python', insult: '你引以為傲的列表推導，我50年前就有了。' }, // NEW
    { source: 'ASM', target: 'C', insult: '你們抽象層太多了，娘炮。' },
    { source: 'ASM', target: 'Rust', insult: '編譯出來的二進制檔案太肥了。' }, // NEW

    // System Wars (系統層大戰)
    { source: 'Ada', target: 'C', insult: '工程化？我從不妥協。' },
    { source: 'Ada', target: 'CPP', insult: '國防部選了我，你們算老幾？' },
    { source: 'C', target: 'CPP', insult: '你把事情搞得太複雜了。' },
    { source: 'C', target: 'Rust', insult: '編譯速度慢到可以去環遊世界。' }, // NEW
    { source: 'C', target: 'Python', insult: '你的直譯器底層還不是我寫的。' }, // NEW
    { source: 'CPP', target: 'Rust', insult: 'Segfault 才能鍛鍊人格！' },
    { source: 'CPP', target: 'Python', insult: '計算密集型任務還不是得靠我。' }, // NEW
    { source: 'Rust', target: 'CPP', insult: '你的記憶體不安全！' },
    { source: 'Rust', target: 'C', insult: 'Use-After-Free 是你的墓誌銘。' }, // NEW
    { source: 'Rust', target: 'Go', insult: '沒有泛型還敢自稱現代語言？' },
    { source: 'Rust', target: 'Go', insult: '系統編程不需要 GC 這種累贅。' }, // NEW

    // Modern vs Enterprise (現代 vs 企業)
    { source: 'Go', target: 'JavaCSharp', insult: 'JVM 太肥了，啟動要半天。' },
    { source: 'Go', target: 'Rust', insult: '有 GC 才有生產力，懂？' }, // NEW
    { source: 'JavaCSharp', target: 'Go', insult: '我們有設計模式，你只有 if err != nil。' },
    { source: 'JavaCSharp', target: 'Python', insult: '這能在數十億台設備上運行，放尊重點。' },
    { source: 'JavaCSharp', target: 'TS', insult: '模仿得再像，還是沒有 Runtime Type Check。' }, // NEW
    { source: 'JavaCSharp', target: 'Kotlin', insult: '只不過是語法糖罷了。' }, // NEW
    { source: 'Scala', target: 'JavaCSharp', insult: '你編譯時間比我運行時間還長。' },
    { source: 'JavaCSharp', target: 'Scala', insult: '過度設計的典範。' },
    { source: 'Erlang', target: 'Go', insult: '我的併發是真的，你們那是玩具。' },
    { source: 'Erlang', target: 'NodeJS', insult: '單執行緒也敢談高併發？' }, // NEW
    { source: 'Go', target: 'Erlang', insult: '我啟動快，你只會發燙。' },

    // Scripting Rumble (腳本大亂鬥)
    { source: 'Python', target: 'Ruby', insult: '我現在是 AI 霸主，誰還用你？' },
    { source: 'Python', target: 'Perl', insult: '你的語法跟亂碼一樣。' },
    { source: 'Python', target: 'Lua', insult: '索引從 1 開始？你是數學家嗎？' },
    { source: 'Python', target: 'CPP', insult: '人生苦短，我用 Python。' }, // NEW
    { source: 'Python', target: 'Excel', insult: 'Pandas 屌打 VLOOKUP。' }, // NEW
    { source: 'Ruby', target: 'Python', insult: '至少我語法優雅，不像你強制縮排。' },
    { source: 'Ruby', target: 'TS', insult: '開發快樂比型別安全重要。' }, // NEW
    { source: 'Python', target: 'JS', insult: '連個括號都對不齊。' },
    { source: 'Perl', target: 'Python', insult: 'Regex 之王才不需要可讀性。' },
    { source: 'Perl', target: 'Python', insult: '一行搞定的事你要寫十行。' }, // NEW
    { source: 'Lua', target: 'Python', insult: '至少我夠輕量，不像你臃腫。' },

    // Frontend/Web (前端與網頁)
    { source: 'TS', target: 'JS', insult: '動態型別就是一場災難。' },
    { source: 'TS', target: 'JavaCSharp', insult: '我們也有泛型，而且更靈活。' }, // NEW
    { source: 'JS', target: 'TS', insult: '你最終還不是要編譯成我？' },
    { source: 'JS', target: 'HTMLCSS', insult: '沒有我，你們只是靜態屍體。' }, // NEW
    { source: 'ReScript', target: 'JS', insult: '靜態類型編譯器才是正道。' },
    { source: 'JS', target: 'ReScript', insult: '我無處不在，你呢？' },
    { source: 'JavaCSharp', target: 'JS', insult: '玩具語言，不適合大型專案。' },
    { source: 'NodeJS', target: 'Python', insult: '我把 JS 帶到後端了！' },
    { source: 'NodeJS', target: 'JavaCSharp', insult: 'JSON 是我的母語，你們還要解析。' }, // NEW
    { source: 'Python', target: 'NodeJS', insult: '你的 Event Loop 是場騙局。' },
    { source: 'NodeJS', target: 'PHP', insult: 'NPM 地獄總比 PIP 依賴地獄好。' },

    // The Meme Bottom (迷因底層)
    { source: 'JS', target: 'PHP', insult: '不管怎麼噴，世界還是靠我運作。' },
    { source: 'Python', target: 'PHP', insult: '寫網站？現在誰還用 PHP？' },
    { source: 'Ruby', target: 'PHP', insult: '過氣了，兄弟。' },
    { source: 'PHP', target: 'HTMLCSS', insult: '至少我部署簡單，還能賺錢。' },
    { source: 'PHP', target: 'JS', insult: 'SSR 是我玩剩下的東西。' }, // NEW
    { source: 'PHP', target: 'NodeJS', insult: '我穩定運行了20年，你還在重寫框架？' }, // NEW
    { source: 'Perl', target: 'PHP', insult: '我曾經也是 Web 之王。' },

    // True Bottom (真正底層)
    { source: 'JS', target: 'HTMLCSS', insult: '你們根本不算程式語言。' },
    { source: 'HTMLCSS', target: 'JS', insult: '沒我你操作個屁 DOM。' }, // NEW
    { source: 'HTMLCSS', target: 'Excel', insult: '沒有我們，後端回傳給鬼看？' },
    { source: 'RMatlab', target: 'Python', insult: '我們是科學家，你們是碼農。' },
    { source: 'Fortran', target: 'Python', insult: '我在你爺爺輩就在算這個了。' },
    { source: 'Fortran', target: 'RMatlab', insult: '比效能？我從沒輸過。' },
    { source: 'JavaCSharp', target: 'Excel', insult: '你管這叫開發？' },
    { source: 'Excel', target: 'Python', insult: '老闆只看我的報表，不看你的終端機。' }, // NEW
    { source: 'Excel', target: 'RMatlab', insult: '財報最終還是得用我畫。' }, // NEW

    // Relics (史前遺跡)
    { source: 'COBOL', target: 'VB', insult: '你們能活著就是奇蹟。' },
    { source: 'COBOL', target: 'JavaCSharp', insult: '我經手的錢比你見過的變數還多。' }, // NEW
    { source: 'VB', target: 'COBOL', insult: '至少 COBOL 還有人用。' },
    { source: 'BASIC', target: 'VB', insult: '我曾經啟蒙過整個世代。' },
    { source: 'BASIC', target: 'Pascal', insult: '索引 0 還 1 都無所謂了。' },
    { source: 'Pascal', target: 'BASIC', insult: '我教會了人們結構化編程。' },
    { source: 'JavaCSharp', target: 'COBOL', insult: '你們早該退休了。' },
    { source: 'JavaCSharp', target: 'VB', insult: 'Vue.js 都比你現代。' },
    { source: 'C', target: 'COBOL', insult: '居然還有人在用你？' },
    { source: 'Fortran', target: 'COBOL', insult: '我們活化石起碼還有用。' },
    { source: 'Ada', target: 'COBOL', insult: '工程化讓我比你們都活得久。' },

    // New Era (新時代)
    { source: 'Kotlin', target: 'JavaCSharp', insult: '我是 Java 的救星。' },
    { source: 'Kotlin', target: 'JavaCSharp', insult: '少寫一半程式碼就是爽。' }, // NEW
    { source: 'Swift', target: 'JavaCSharp', insult: '我只忠於 Apple。' },
    { source: 'Swift', target: 'CPP', insult: '我比你安全，還比你潮。' }, // NEW
    { source: 'Rust', target: 'Swift', insult: '我將統治系統編程。' },
  ]
};