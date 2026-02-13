// ============================================================
// Finance Prep — Operations Interview Tool
// ============================================================

// --- localStorage migration (old gs-ops-* → fin-ops-*) ---
(function migrateStorage() {
    if (localStorage.getItem('fin-ops-migrated')) return;
    const map = { 'gs-ops-lang': 'fin-ops-lang', 'gs-ops-v1': 'fin-ops-v1' };
    Object.entries(map).forEach(([oldK, newK]) => {
        const v = localStorage.getItem(oldK);
        if (v !== null && localStorage.getItem(newK) === null) {
            localStorage.setItem(newK, v);
        }
    });
    localStorage.setItem('fin-ops-migrated', '1');
})();

// --- i18n ---
let currentLang = localStorage.getItem('fin-ops-lang') || 'ja';
const i18n = {
    en: {
        dashboard:'Dashboard', financeBasics:'Finance Basics', tradeLifecycle:'Trade Lifecycle', marketKnowledge:'Markets',
        behavioral:'Behavioral', technical:'Technical Q&A', caseStudy:'Case Study',
        glossary:'Glossary', timer:'Timer',
        subtitle:'Operations Division', description:'Operations Interview Preparation for Investment Banking',
        overallProgress:'Overall Progress', solved:'Completed', inProgress:'In Progress', remaining:'Remaining',
        recommendedNext:'Recommended Next', weakestArea:'Weakest area',
        notStarted:'Not Started', attempted:'In Progress', ready:'Ready',
        notPrepared:'Not Prepared', drafting:'Drafting',
        resetConfirm:'All progress will be reset. Are you sure?',
        resetBtn:'Reset Progress',
        start:'Start', pause:'Pause', reset:'Reset', minutes:'Minutes', set:'Set',
        timeUp:'Time is up!',
        showAnswer:'Show Answer', showExplanation:'Show Explanation',
        yourAnswer:'Your answer...', check:'Check', correct:'Correct!',
        incorrectPrefix:'Incorrect. Answer: ',
        yourNotes:'YOUR NOTES', notesPlaceholder:'Write your analysis and approach here...',
        starMethod:'STAR Method',
        starDesc:'<b>S</b>ituation - Set the context<br><b>T</b>ask - Describe your responsibility<br><b>A</b>ction - Explain what you did (focus here)<br><b>R</b>esult - Share the outcome with metrics if possible',
        yourStarAnswer:'YOUR STAR ANSWER',
        situation:'Situation', task:'Task', action:'Action', result:'Result',
        writeSituation:'Write your situation...', writeTask:'Write your task...',
        writeAction:'Write your action...', writeResult:'Write your result...',
        // Timeline
        tl1:'Video Interview', tl1d:'Video interview (behavioral)',
        tl2:'Phone Screen', tl2d:'30 min with recruiter',
        tl3:'Final Round', tl3d:'2-5 interviews (30-60 min each)',
        tl4:'Offer', tl4d:'Final decision',
        // Timer tips
        oaTips:'Interview Mindset',
        oaTipsList:[
            'Be honest. If you do not know something, say so — then show how you would figure it out.',
            'Interviews are 80% behavioral. Prepare STAR stories from university, part-time work, or club activities.',
            'You do NOT need to be a finance expert. Interviewers care about how you think, not what you already know.',
            'Show curiosity: "I do not know the details yet, but I have been reading about X and found it interesting."',
            'Interviewers look for: trainability, logical thinking, and resilience under pressure.',
            'Prepare 2-3 genuine questions for reverse questions. Keep them simple and honest.',
        ],
        disclaimer:'* Interview patterns based on candidate reports. Actual experience may vary.',
        simulateInterview:'Simulate interview time constraints',
        financeBasicsTitle:'Finance Basics',
        financeBasicsDesc:'Background knowledge to help you understand the role. You do NOT need to memorize this — a big-picture understanding is enough for interviews.',
        tradeLifecycleTitle:'Trade Lifecycle Knowledge',
        tradeLifecycleDesc:'Understand each step from order to settlement',
        marketTitle:'Financial Markets & Products',
        marketDesc:'Reference material for understanding the industry. In interviews, showing you grasp the big picture is more valuable than knowing every detail.',
        behavioralTitle:'Behavioral Interview',
        behavioralDesc:'Prepare STAR answers for Operations-focused questions',
        technicalTitle:'Technical Q&A',
        technicalDesc:'About 20-30% of the interview may touch on these topics. You do not need textbook-perfect answers -- explain concepts in your own words and show you understand WHY they matter.',
        caseTitle:'Case Studies',
        caseDesc:'Practice real-world Operations problem-solving scenarios',
        glossaryTitle:'Glossary',
        glossaryDesc:'Key financial and Operations terms',
        reverseQTitle:'Reverse Questions (Questions to Ask)',
        reverseQDesc:'Keep it simple and genuine. Avoid overly technical or show-off questions — interviewers see through that. Ask what you truly want to know.',
        recentTopicsTitle:'Recent Industry Topics',
        recentTopicsDesc:'Knowing current trends shows you follow the industry',
        tl1Detail:'Focuses on personality, motivation, and cultural fit',
        tl2Detail:'Recruiter assesses communication skills and basic knowledge',
        tl3Detail:'Mix of behavioral, technical, and case-based questions from team members',
        tl4Detail:'May include negotiation; respond promptly and professionally',
        interviewerLooksFor:'What Interviewers Are Really Looking For',
        interviewerLooksForDesc:'New graduate Operations interviews are ~80% behavioral. Deep financial knowledge is NOT expected. Interviewers evaluate these three qualities:',
        quality1Title:'Trainability',
        quality1Desc:'Can you listen, learn, and accept feedback? Will you ask questions when stuck rather than pretending to know?',
        quality2Title:'Smart Thinking',
        quality2Desc:'Can you break down problems logically? You do not need the right answer — they want to see HOW you think.',
        quality3Title:'Resilience',
        quality3Desc:'Can you handle pressure, tight deadlines, and repetitive work without losing accuracy or motivation?',
    },
    ja: {
        dashboard:'ダッシュボード', financeBasics:'金融基礎', tradeLifecycle:'トレードライフサイクル', marketKnowledge:'金融市場',
        behavioral:'行動面接', technical:'テクニカルQ&A', caseStudy:'ケーススタディ',
        glossary:'用語集', timer:'タイマー',
        subtitle:'オペレーション部門', description:'投資銀行オペレーション面接対策',
        overallProgress:'全体の進捗', solved:'完了', inProgress:'進行中', remaining:'未着手',
        recommendedNext:'次のおすすめ', weakestArea:'弱点エリア',
        notStarted:'未着手', attempted:'進行中', ready:'準備完了',
        notPrepared:'未準備', drafting:'下書き中',
        resetConfirm:'全ての進捗がリセットされます。よろしいですか？',
        resetBtn:'進捗リセット',
        start:'開始', pause:'一時停止', reset:'リセット', minutes:'分', set:'セット',
        timeUp:'時間切れです！',
        showAnswer:'答えを見る', showExplanation:'解説を表示',
        yourAnswer:'回答を入力...', check:'確認', correct:'正解！',
        incorrectPrefix:'不正解。答え: ',
        yourNotes:'メモ', notesPlaceholder:'分析とアプローチを書きましょう...',
        starMethod:'STARメソッド',
        starDesc:'<b>S</b>ituation（状況）- 背景を説明<br><b>T</b>ask（課題）- あなたの責任を述べる<br><b>A</b>ction（行動）- 何をしたか説明（ここが重点）<br><b>R</b>esult（結果）- 成果を数値とともに共有',
        yourStarAnswer:'あなたのSTAR回答',
        situation:'状況 (Situation)', task:'課題 (Task)', action:'行動 (Action)', result:'結果 (Result)',
        writeSituation:'状況を書いてください...', writeTask:'課題を書いてください...',
        writeAction:'行動を書いてください...', writeResult:'結果を書いてください...',
        tl1:'動画面接', tl1d:'動画面接（行動質問中心）',
        tl2:'電話スクリーニング', tl2d:'リクルーターと30分',
        tl3:'最終面接', tl3d:'2-5回の面接（各30-60分）',
        tl4:'オファー', tl4d:'最終決定',
        oaTips:'面接の心得',
        oaTipsList:[
            '正直に。知らないことは「知りません」と言い、「でもこう調べます」と見せる。',
            '面接の8割は行動面接。大学、アルバイト、サークル活動からSTARストーリーを準備。',
            '金融の専門家である必要はない。面接官は知識量ではなく「どう考えるか」を見ている。',
            '好奇心を見せる：「詳しくはまだですが、〜について読んで興味を持っています」',
            '面接官が評価するのは：素直さ、論理的思考力、プレッシャーへの耐性。',
            '逆質問は2-3個、素直で正直なものを準備。背伸びした質問は逆効果。',
        ],
        disclaimer:'※面接パターンは候補者の報告に基づきます。実際の経験は異なる場合があります。',
        simulateInterview:'面接の時間制約をシミュレーション',
        financeBasicsTitle:'金融基礎',
        financeBasicsDesc:'役割を理解するための背景知識です。暗記する必要はありません — 面接では大枠がわかっていれば十分です。',
        tradeLifecycleTitle:'トレードライフサイクル知識',
        tradeLifecycleDesc:'注文から決済までの各ステップを理解する',
        marketTitle:'金融市場と商品',
        marketDesc:'業界を理解するための参考資料です。面接では細かい知識より「全体像を掴んでいること」が評価されます。',
        behavioralTitle:'行動面接',
        behavioralDesc:'オペレーション向けのSTAR形式回答を準備',
        technicalTitle:'テクニカルQ&A',
        technicalDesc:'面接の2-3割がこれらのトピックに触れる可能性があります。教科書的な完璧な回答は不要 -- 自分の言葉で概念を説明し、なぜ重要かを理解していることを示しましょう。',
        caseTitle:'ケーススタディ',
        caseDesc:'実際のオペレーション問題解決シナリオを練習',
        glossaryTitle:'用語集',
        glossaryDesc:'重要な金融・オペレーション用語',
        reverseQTitle:'逆質問（面接官への質問）',
        reverseQDesc:'シンプルで素直な質問が一番です。専門用語を使って知識をアピールしようとすると逆効果。本当に知りたいことを聞きましょう。',
        recentTopicsTitle:'最近の業界トピック',
        recentTopicsDesc:'最新のトレンドを知っていると業界への関心を示せます',
        tl1Detail:'人柄、志望動機、カルチャーフィットが中心',
        tl2Detail:'コミュニケーション能力と基礎知識を確認',
        tl3Detail:'行動面接、テクニカル、ケース問題がチームメンバーから出題',
        tl4Detail:'条件交渉の場合も。迅速かつ丁寧に対応',
        interviewerLooksFor:'面接官が本当に見ていること',
        interviewerLooksForDesc:'新卒オペレーションの面接は約8割が行動面接です。深い金融知識は求められていません。面接官が評価しているのは以下の3つの資質です：',
        quality1Title:'素直さ（Trainability）',
        quality1Desc:'話を聞けるか？ フィードバックを受け入れられるか？ 分からない時に知ったふりをせず質問できるか？',
        quality2Title:'地頭の良さ（Smart Thinking）',
        quality2Desc:'問題を論理的に分解できるか？ 正解は求めていません — どう考えるかのプロセスを見ています。',
        quality3Title:'タフさ（Resilience）',
        quality3Desc:'プレッシャー、締切、地道な繰り返し作業に対して、正確さとモチベーションを保てるか？',
    }
};
function t(k){ return i18n[currentLang][k] || i18n.en[k] || k; }
function L(obj, f){ return currentLang === 'ja' && obj[f + 'Ja'] ? obj[f + 'Ja'] : obj[f]; }

// --- Storage ---
const STORAGE_KEY = 'fin-ops-v1';
function loadProgress(){ try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch { return {}; } }
function saveProgress(d){ localStorage.setItem(STORAGE_KEY, JSON.stringify(d)); }
function getStatus(id){ return loadProgress()[id] || 'not-started'; }
function setStatus(id, s){ const d = loadProgress(); d[id] = s; saveProgress(d); }


// ============================================================
// DATA
// ============================================================

// --- Finance Basics (beginner-only educational content) ---
const financeBasicsTopics = [
    { id:'fb1', title:'What is an Investment Bank?', titleJa:'投資銀行とは？',
      content:'An investment bank helps companies and governments raise money by issuing stocks and bonds, advises on mergers and acquisitions, and trades financial products. Think of it like a specialized financial advisor that works with very large transactions. Major divisions typically include: Investment Banking (advisory & underwriting), Markets/Trading (buying & selling securities), Asset Management (managing money for clients), and Operations (the engine room that makes everything work).',
      contentJa:'投資銀行は、企業や政府が株式や債券を発行して資金を調達するのを助け、M&A（合併・買収）のアドバイスを行い、金融商品を売買します。非常に大きな取引を扱う専門的な金融アドバイザーのようなものです。主な部門：投資銀行部門（アドバイザリー＆引受）、マーケット/トレーディング（証券の売買）、アセットマネジメント（顧客の資産運用）、オペレーション（すべてを動かすエンジンルーム）。',
      keyPoints:['Helps companies raise capital (IPOs, bond issuances)','Advises on M&A deals','Trades securities for clients and the firm','Operations is the critical infrastructure that supports all activities'],
      keyPointsJa:['企業の資金調達を支援（IPO、債券発行）','M&A取引のアドバイス','顧客と自社のために証券を売買','オペレーションは全活動を支える重要インフラ'] },
    { id:'fb2', title:'What Does Operations Do?', titleJa:'オペレーション部門とは？',
      content:'Operations is often called the "central nervous system" of a bank. When a trader buys or sells a stock, the trade doesn\'t just happen magically — someone needs to make sure the money and securities actually move between the right accounts, that all the records match, and that regulations are followed. That\'s Operations. It\'s like the logistics department of an online store: the customer clicks "buy," but Ops handles packaging, shipping, tracking, and making sure the right item reaches the right person.',
      contentJa:'オペレーション部門は銀行の「中枢神経」と呼ばれます。トレーダーが株を売買しても、魔法のように完了するわけではありません。実際にお金と証券が正しい口座間で移動し、全ての記録が一致し、規制が守られていることを確認する人が必要です。それがオペレーションです。ネット通販の物流部門のようなもの：お客さんが「購入」をクリックした後、梱包・発送・追跡を行い、正しい商品が正しい人に届くようにするのがOpsの仕事です。',
      keyPoints:['Ensures trades are settled correctly (money and securities move properly)','Reconciles records to catch errors','Manages risk and ensures regulatory compliance','Drives process automation and efficiency'],
      keyPointsJa:['取引が正しく決済されることを保証（お金と証券が適切に移動）','記録を照合してエラーを検出','リスク管理と規制遵守を確保','プロセスの自動化と効率化を推進'] },
    { id:'fb7', title:'What is a Market?', titleJa:'市場（マーケット）とは？',
      content:'A market is a place (physical or electronic) where buyers and sellers come together to trade. The primary market is where new securities are born -- when a company first sells its stock to the public (IPO), that happens in the primary market. After that, people buy and sell those stocks among themselves on the secondary market (like the NYSE or Tokyo Stock Exchange). Think of it like this: the primary market is the factory selling a new product for the first time, and the secondary market is the used-goods marketplace where people resell to each other.',
      contentJa:'市場とは、売り手と買い手が集まって取引する場所（実際の建物でも電子的な場でも）です。発行市場（プライマリー）は新しい証券が生まれる場所 -- 企業が初めて株式を一般に売り出す（IPO）時は発行市場で行われます。その後、人々がその株式を互いに売買するのが流通市場（セカンダリー、NYSEや東京証券取引所など）です。例えるなら：発行市場は工場が新製品を初めて売る場所、流通市場は人々が互いに売買する中古品マーケットです。',
      keyPoints:['Primary market: where new securities are issued (IPOs)','Secondary market: where existing securities are traded','Exchanges (NYSE, TSE) provide an organized marketplace','OTC (Over-the-Counter): trades done directly between parties, not on an exchange'],
      keyPointsJa:['発行市場：新しい証券が発行される場所（IPO）','流通市場：既存の証券が取引される場所','取引所（NYSE、東証）は組織化された市場を提供','OTC（店頭取引）：取引所を介さず当事者間で直接行う取引'] },
    { id:'fb3', title:'Key Participants in a Trade', titleJa:'取引の主要参加者',
      content:'A trade involves many parties working together: the Buyer and Seller (the two sides of the trade), the Broker/Dealer (intermediary that executes trades), the Exchange (marketplace like NYSE where trades happen — think of it as an auction house), the CCP (Central Counterparty — stands between buyer and seller to guarantee the trade completes even if one side fails), the Custodian (holds securities safely, like a safe deposit box for stocks), and the Regulator (government body ensuring fair and orderly markets).',
      contentJa:'取引には多くの関係者が協力します：買い手と売り手（取引の両当事者）、ブローカー/ディーラー（取引を執行する仲介者）、取引所（NYSEのような市場 — オークション会場のようなもの）、CCP（中央清算機関 — 買い手と売り手の間に入り、片方が失敗しても取引完了を保証）、カストディアン（証券を安全に保管 — 株式の貸金庫のようなもの）、規制当局（公正で秩序ある市場を確保する政府機関）。',
      keyPoints:['Buyer & Seller — the two sides of every trade','Broker/Dealer — executes trades on behalf of clients','Exchange — the marketplace where orders are matched','CCP — guarantees trade completion, reducing counterparty risk','Custodian — safekeeps securities','Regulator — oversees market fairness'],
      keyPointsJa:['買い手と売り手 — 全取引の両当事者','ブローカー/ディーラー — 顧客に代わって取引を執行','取引所 — 注文がマッチングされる市場','CCP — 取引完了を保証し、カウンターパーティリスクを削減','カストディアン — 証券を安全に保管','規制当局 — 市場の公正性を監視'] },
    { id:'fb4', title:'Types of Securities', titleJa:'証券の種類',
      content:'Securities are tradeable financial assets. The main types are: Stocks/Equities (owning a piece of a company — like being a co-owner of a shop), Bonds/Fixed Income (lending money to a company or government in exchange for regular interest payments — like an IOU with interest), Derivatives (contracts whose value depends on something else, like betting on whether it will rain without owning the weather — futures, options, swaps), and FX/Currencies (exchanging one currency for another, essential for international trade).',
      contentJa:'証券は取引可能な金融資産です。主な種類：株式（会社の一部を所有すること — お店の共同オーナーになるようなもの）、債券（会社や政府にお金を貸して定期的に利息を受け取る — 利息付きの借用書のようなもの）、デリバティブ（別の何かに価値が連動する契約。天気を所有せずに雨が降るかどうかに賭けるようなもの — 先物、オプション、スワップ）、外国為替（ある通貨を別の通貨に交換。国際取引に不可欠）。',
      keyPoints:['Equities = ownership in a company','Bonds = lending money for interest','Derivatives = contracts based on underlying assets','FX = currency exchange'],
      keyPointsJa:['株式 = 会社の所有権','債券 = 利息のためにお金を貸す','デリバティブ = 原資産に基づく契約','外国為替 = 通貨の交換'] },
    { id:'fb8', title:'Market Indices and Benchmarks', titleJa:'株価指数とベンチマーク',
      content:'A market index tracks the performance of a group of stocks to show how the overall market is doing. Think of it as a thermometer for the economy. The Nikkei 225 tracks 225 major Japanese companies. The S&P 500 tracks 500 large US companies. The Dow Jones Industrial Average tracks 30 major US companies. When news says "the market went up today," they usually mean one of these indices rose. Knowing these helps you understand financial news and shows interviewers you follow the markets.',
      contentJa:'株価指数は、一群の株式のパフォーマンスを追跡し、市場全体の動向を示します。経済の体温計のようなものです。日経225は日本の主要225社を追跡。S&P 500は米国の大企業500社。ダウ平均は米国主要30社。ニュースで「今日は市場が上がった」と言えば、通常これらの指数が上昇したことを意味します。これらを知っていると金融ニュースが理解でき、面接官に市場への関心を示せます。',
      keyPoints:['Nikkei 225: tracks 225 major Japanese companies','S&P 500: tracks 500 large US companies, widely used benchmark','Dow Jones: tracks 30 major US companies','Indices help you quickly understand overall market direction'],
      keyPointsJa:['日経225：日本の主要225社を追跡','S&P 500：米国の大企業500社を追跡、広く使われるベンチマーク','ダウ平均：米国の主要30社を追跡','指数は市場全体の方向を素早く把握するのに役立つ'] },
    { id:'fb5', title:'How Settlement Works', titleJa:'決済の仕組み',
      content:'Settlement is the actual exchange of money and securities after a trade. Think of online shopping: clicking "buy" is like executing a trade, but the actual exchange of goods and money happens later — that\'s settlement. In financial markets, this typically happens T+1 (one business day after the trade) for US stocks or T+2 for many other markets. "DvP" (Delivery vs Payment) ensures both sides deliver simultaneously, so neither side gets cheated.',
      contentJa:'決済とは、取引後にお金と証券を実際に交換することです。ネット通販で例えると：「購入」をクリックするのが取引の執行、実際に商品とお金がやり取りされるのが決済です。金融市場では通常、米国株はT+1（取引翌営業日）、他の多くの市場ではT+2で決済されます。「DvP」（Delivery vs Payment）は両者が同時に引き渡すことを保証し、どちらも騙されないようにします。',
      keyPoints:['Settlement = actual exchange of money and securities','T+1 means one business day after the trade','DvP ensures simultaneous delivery to protect both parties','Settlement fails require investigation and resolution'],
      keyPointsJa:['決済 = お金と証券の実際の交換','T+1は取引の翌営業日','DvPは両者の同時引き渡しを保証','決済失敗は調査と解決が必要'] },
    { id:'fb6', title:'What is Risk?', titleJa:'リスクとは？',
      content:'In finance, risk means the chance that something goes wrong. Operational Risk is the risk of losses from failed processes, human errors, or system failures — like accidentally sending money to the wrong account or a computer system crashing during trading hours. Other types include Market Risk (prices move against you), Credit Risk (someone can\'t pay you back), and Liquidity Risk (you can\'t sell something fast enough). Operations focuses primarily on managing and reducing operational risk.',
      contentJa:'金融におけるリスクとは、何かがうまくいかない可能性です。オペレーショナルリスクは、プロセスの失敗、人的ミス、システム障害による損失のリスク — 例えば間違った口座にお金を送ってしまったり、取引時間中にコンピュータシステムがダウンしたりすること。他の種類：マーケットリスク（価格が不利に動く）、信用リスク（相手がお金を返せない）、流動性リスク（十分な速さで売れない）。オペレーション部門は主にオペレーショナルリスクの管理と削減に注力します。',
      keyPoints:['Operational Risk: process failures, human errors, system crashes','Market Risk: prices moving against your position','Credit Risk: counterparty unable to pay','Operations works to minimize operational risk through controls and automation'],
      keyPointsJa:['オペレーショナルリスク：プロセスの失敗、人的ミス、システム障害','マーケットリスク：ポジションに不利な価格変動','信用リスク：カウンターパーティが支払い不能','オペレーションはコントロールと自動化でオペレーショナルリスクを最小化'] },
];

// --- Trade Lifecycle ---
const tradeLifecycleSteps = [
    { id:'tl1', title:'Pre-Trade', titleJa:'プレトレード',
      content:'Client onboarding, KYC/AML checks, account setup, credit limit verification, product suitability assessment. Operations ensures all prerequisites are met before trading begins.',
      contentJa:'クライアントのオンボーディング、KYC/AML確認、口座開設、与信枠確認、商品適合性評価。取引開始前に全ての前提条件が整っていることをオペレーションが確認する。',
      opsRole:'Verify client documentation, set up static data, configure settlement instructions.',
      opsRoleJa:'クライアント書類の確認、スタティックデータ設定、決済指示の設定。',
      beginnerNote:'Think of this like a background check before someone can open a bank account. The bank needs to verify who you are (KYC) and make sure you\'re not involved in illegal activities (AML).',
      beginnerNoteJa:'銀行口座を開設する前の身元確認のようなものです。銀行はあなたが誰かを確認し（KYC）、違法行為に関わっていないことを確認する（AML）必要があります。' },
    { id:'tl2', title:'Trade Execution', titleJa:'取引執行',
      content:'Order placement → order routing → matching/execution on exchange or OTC. Trade capture in booking systems. Confirmation generation.',
      contentJa:'注文発注 → ルーティング → 取引所またはOTCでのマッチング/約定。ブッキングシステムへの取引記録。コンファメーション生成。',
      opsRole:'Ensure accurate trade capture, validate trade economics, send/receive confirmations.',
      opsRoleJa:'正確な取引記録の確保、取引条件の検証、コンファメーションの送受信。',
      beginnerNote:'This is like placing an order on an online store. You pick what you want (order), the system finds a seller (matching), and you get an order confirmation email (confirmation).',
      beginnerNoteJa:'ネット通販で注文するようなものです。欲しいものを選び（注文）、システムが売り手を見つけ（マッチング）、注文確認メールが届きます（コンファメーション）。' },
    { id:'tl3', title:'Clearing', titleJa:'クリアリング（清算）',
      content:'Applies to CCP-cleared products (exchange-traded derivatives, mandated OTC products). CCP steps in as buyer to seller and seller to buyer. Margin calculation (initial + variation). Netting of obligations to reduce settlement risk. Non-cleared trades (bilateral OTC) follow a separate confirmation and collateral exchange process.',
      contentJa:'CCP清算対象商品（取引所デリバティブ、義務化されたOTC商品）に適用。CCPが売り手と買い手の間に入る。証拠金計算（当初+変動）。決済リスク削減のための債務ネッティング。非清算取引（二者間OTC）は別途のコンファメーション・担保交換プロセスに従う。',
      opsRole:'Monitor margin calls, ensure timely margin payments, reconcile CCP positions. For bilateral trades: manage collateral agreements (CSA) and confirmation matching.',
      opsRoleJa:'マージンコールの監視、証拠金の適時支払い、CCPポジションの照合。二者間取引の場合：担保契約（CSA）管理とコンファメーションマッチング。',
      beginnerNote:'Think of the CCP as a trusted middleman. If you buy something from a stranger online, a platform like escrow.com guarantees both sides fulfill their part. The CCP does the same for financial trades. "Netting" means if you owe me $100 and I owe you $80, we just settle the $20 difference.',
      beginnerNoteJa:'CCPは信頼できる仲介者のようなものです。見知らぬ人からオンラインで何かを買う時、エスクローサービスのように両者が義務を果たすことを保証します。「ネッティング」とは、あなたが私に100ドル、私があなたに80ドル借りている場合、20ドルの差額だけ決済することです。' },
    { id:'tl4', title:'Settlement', titleJa:'決済',
      content:'Delivery vs Payment (DvP): securities delivered against payment. Settlement cycles vary by asset class and market: T+1 (US equities/ETFs since May 2024), T+2 (EU/Asia equities, corporate bonds), T+0 to T+2 (government bonds varies by market), T+2 (FX spot). Failed trades require investigation and resolution.',
      contentJa:'DvP（Delivery vs Payment）：代金と引き換えに証券を引き渡す。決済サイクルは資産クラスと市場により異なる：T+1（2024年5月以降の米国株式/ETF）、T+2（欧州/アジア株式、社債）、T+0～T+2（国債は市場により異なる）、T+2（FXスポット）。決済失敗は調査と解決が必要。',
      opsRole:'Monitor settlement status, investigate fails, manage breaks, liaise with custodians and counterparties.',
      opsRoleJa:'決済状況の監視、失敗の調査、ブレークの管理、カストディアンやカウンターパーティとの連絡。',
      beginnerNote:'Settlement is like the final step of online shopping — when the product is actually delivered and your payment is processed. DvP ensures this happens simultaneously so neither side gets cheated. "T+1" means this happens the next business day after the trade.',
      beginnerNoteJa:'決済はネット通販の最終ステップのようなもの — 商品が実際に届き、支払いが処理される時です。DvPはこれが同時に行われることを保証します。「T+1」は取引の翌営業日に行われることを意味します。' },
    { id:'tl5', title:'Post-Trade / Reporting', titleJa:'ポストトレード / レポーティング',
      content:'Reconciliation (internal books vs external records). Corporate actions processing. Regulatory reporting (trade reporting vs transaction reporting — distinct obligations). Note: P&L verification is primarily Product Control/Finance responsibility, but Ops supports by ensuring accurate position and trade data feeds.',
      contentJa:'照合（内部帳簿と外部記録の突合）。コーポレートアクション処理。規制報告（トレードレポーティングとトランザクションレポーティングは別の義務）。注意：損益検証は主にプロダクトコントロール/ファイナンスの責任だが、Opsは正確なポジション・取引データの提供で支援する。',
      opsRole:'Daily reconciliation, break resolution, regulatory filings, exception management, ensuring data quality for downstream reporting.',
      opsRoleJa:'日次照合、ブレーク解決、規制当局への報告、例外管理、下流のレポーティングに向けたデータ品質の確保。',
      beginnerNote:'Reconciliation is like checking your bank statement against your receipts — making sure everything matches up. If there\'s a discrepancy (a "break"), Ops investigates and fixes it.',
      beginnerNoteJa:'照合は銀行の明細とレシートを照らし合わせるようなもの — 全てが一致しているか確認します。不一致（「ブレーク」）があれば、Opsが調査して修正します。' },
    { id:'tl6', title:'Risk & Control (Cross-cutting)', titleJa:'リスク＆コントロール（横断的枠組み）',
      content:'Not a sequential step but a cross-cutting framework that spans the entire lifecycle. Includes: operational risk identification (RCSA), Key Risk Indicators (KRI) monitoring, control design and testing, incident escalation and management, root cause analysis, process improvement and automation initiatives.',
      contentJa:'順序的なステップではなく、ライフサイクル全体を横断する枠組み。含む：オペレーショナルリスクの特定（RCSA）、主要リスク指標（KRI）の監視、コントロールの設計とテスト、インシデントのエスカレーションと管理、根本原因分析、プロセス改善と自動化の推進。',
      opsRole:'Design and operate controls at each lifecycle stage, monitor KRIs, escalate incidents, drive automation to reduce manual risk. Conduct RCSA assessments and manage operational risk events.',
      opsRoleJa:'各ライフサイクルステージでのコントロール設計と運用、KRIの監視、インシデントのエスカレーション、手作業リスク削減のための自動化推進。RCSAアセスメントの実施とオペレーショナルリスク事象の管理。',
      beginnerNote:'This isn\'t a step that happens after everything else — it\'s like a quality control team that monitors every step of a factory production line, looking for problems and finding ways to improve.',
      beginnerNoteJa:'これは他の全ての後に起こるステップではありません — 工場の生産ラインの各段階を監視し、問題を探し、改善方法を見つける品質管理チームのようなものです。' },
];

// --- Market Knowledge ---
const marketTopics = [
    { id:'mk1', title:'Equities', titleJa:'株式',
      content:'Common stock, preferred stock, ETFs, ADRs/GDRs. Exchanges (NYSE, NASDAQ, TSE). Order types: market, limit, stop. Settlement: T+1 (US), T+2 (EU/Asia).',
      contentJa:'普通株、優先株、ETF、ADR/GDR。取引所（NYSE、NASDAQ、東証）。注文種類：成行、指値、逆指値。決済：T+1（米国）、T+2（欧州/アジア）。',
      beginnerNote:'Stocks represent ownership in a company. If you buy 1 share of a company with 100 shares total, you own 1% of it. ETFs are like baskets containing many different stocks.',
      beginnerNoteJa:'株式は会社の所有権を表します。全100株の会社で1株買えば、1%のオーナーです。ETFは多くの異なる株式を含むバスケットのようなものです。' },
    { id:'mk2', title:'Fixed Income', titleJa:'債券',
      content:'Government bonds, corporate bonds, municipal bonds. Yield, coupon, maturity. Credit ratings (Moody\'s, S&P, Fitch). Settlement: T+1 for govt, T+2 for corporate.',
      contentJa:'国債、社債、地方債。利回り、クーポン、満期。信用格付け（ムーディーズ、S&P、フィッチ）。決済：国債T+1、社債T+2。',
      beginnerNote:'Bonds are like IOUs. When you buy a bond, you\'re lending money to a company or government. They pay you interest (coupon) regularly and return the principal at maturity. Credit ratings tell you how likely they are to pay you back.',
      beginnerNoteJa:'債券は借用書のようなものです。債券を買うということは、企業や政府にお金を貸すことです。定期的に利息（クーポン）が支払われ、満期に元本が返されます。信用格付けは返済の可能性を示します。' },
    { id:'mk3', title:'FX (Foreign Exchange)', titleJa:'外国為替 (FX)',
      content:'Spot (T+2), forwards, swaps, options. Major pairs (EUR/USD, USD/JPY). CLS (Continuous Linked Settlement) for PvP settlement to reduce Herstatt risk.',
      contentJa:'スポット（T+2）、フォワード、スワップ、オプション。主要通貨ペア（EUR/USD、USD/JPY）。CLS（Continuous Linked Settlement）によるPvP決済でヘルシュタットリスクを削減。',
      beginnerNote:'FX is simply exchanging one currency for another — like when you exchange yen for dollars at the airport, but on a much larger scale. "Spot" means exchanging now (settled in T+2), while "forwards" means agreeing on a rate today for an exchange in the future.',
      beginnerNoteJa:'FXはある通貨を別の通貨に交換すること — 空港で円をドルに両替するのと同じですが、はるかに大きな規模です。「スポット」は今交換すること（T+2で決済）、「フォワード」は将来の交換レートを今日決めることです。' },
    { id:'mk4', title:'Derivatives', titleJa:'デリバティブ',
      content:'Futures, options, swaps (IRS, CDS). Exchange-traded vs OTC. Central clearing mandate post-2008. ISDA Master Agreement for OTC. Margin requirements.',
      contentJa:'先物、オプション、スワップ（IRS、CDS）。取引所取引とOTC。2008年以降の中央清算義務化。OTC用ISDAマスター契約。証拠金要件。',
      beginnerNote:'Derivatives are contracts whose value comes from something else (the "underlying"). A futures contract is like pre-ordering a product at a fixed price. An option gives you the right (but not obligation) to buy or sell at a certain price — like a reservation fee that lets you decide later.',
      beginnerNoteJa:'デリバティブは他のもの（「原資産」）から価値が生まれる契約です。先物契約は固定価格での予約注文のようなもの。オプションはある価格で売買する権利（義務ではない）— 後で決められる予約金のようなものです。' },
    { id:'mk5', title:'Market Infrastructure', titleJa:'市場インフラ',
      content:'Exchanges, MTFs, dark pools. CCPs (LCH, CME, JSCC). CSDs (DTCC, Euroclear, Clearstream, JASDEC). SWIFT messaging. LEI (Legal Entity Identifier).',
      contentJa:'取引所、MTF、ダークプール。CCP（LCH、CME、JSCC）。CSD（DTCC、Euroclear、Clearstream、JASDEC）。SWIFTメッセージング。LEI（取引主体識別子）。',
      beginnerNote:'Market infrastructure is the plumbing of financial markets. Exchanges are where trades happen (like a marketplace). CCPs guarantee trades complete. CSDs hold securities electronically (like a digital vault). SWIFT is the messaging system banks use to talk to each other.',
      beginnerNoteJa:'市場インフラは金融市場の配管です。取引所は取引が行われる場所（市場のようなもの）。CCPは取引の完了を保証。CSDは証券を電子的に保管（デジタル金庫のようなもの）。SWIFTは銀行同士がやり取りするメッセージングシステムです。' },
];

// --- Behavioral Questions ---
const behavioralQuestions = [
    { id:'b0', question:'Why the financial industry?', questionJa:'なぜ金融業界を志望しますか？',
      tips:'This is often the first question for candidates without a finance background. Three effective angles: (1) Social infrastructure -- finance is the lifeblood of the economy, you want to support businesses and society. (2) Professionalism -- you thrive in environments demanding accuracy and expertise. (3) Dynamism -- global markets, fast-paced work, constant learning. Connect to your own experiences: accounting for a student club, interest sparked by a news event, a course that opened your eyes. Be specific about what drew you in and why it stuck. New grads: it is completely fine to say your interest is recent. What matters is that your curiosity is genuine and you can explain it.',
      tipsJa:'金融のバックグラウンドがない候補者に最初に聞かれることが多い質問です。効果的な3つの切り口：(1) 社会インフラ -- 金融は経済の血液であり、企業や社会を支えたい。(2) プロフェッショナリズム -- 正確さと専門性が求められる環境で成長したい。(3) ダイナミズム -- グローバルな市場、スピード感のある仕事、常に学び続ける環境。自分の経験と結びつける：サークルの会計、ニュースがきっかけの関心、視野を広げた授業。何に惹かれ、なぜそれが続いているかを具体的に。新卒の場合：関心が最近であっても全く問題ありません。好奇心が本物であること、それを説明できることが大切です。',
      starPrompt:{s:'Your background and what sparked your interest in finance',t:'Understanding why finance over other industries',a:'What you researched, learned, or experienced',r:'Why finance is the right fit for your goals'},
      starPromptJa:{s:'あなたの経歴と金融に興味を持ったきっかけ',t:'なぜ他の業界ではなく金融なのかの理解',a:'何を調べ、学び、経験したか',r:'なぜ金融が自分の目標に合っているか'} },
    { id:'b1', question:'Why this company?', questionJa:'なぜこの企業を志望しますか？',
      tips:'Research the company\'s culture, recent initiatives, and strategic direction. Connect to your career goals and values. Mention specific aspects that attracted you. New grads: draw from university courses, internships, or personal interests that sparked your interest in the company.',
      tipsJa:'企業のカルチャー、最近の取り組み、戦略的方向性を調べましょう。自分のキャリア目標と価値観に結びつけて。惹かれた具体的な点に言及。新卒の場合：大学の授業、インターン、企業に興味を持ったきっかけとなった個人的な関心から例を挙げましょう。',
      starPrompt:{s:'Your background',t:'Finding the right firm',a:'What drew you to this company',r:'Why this company is the best fit'},
      starPromptJa:{s:'あなたの経歴',t:'合う企業を見つけること',a:'この企業に惹かれた理由',r:'なぜこの企業が最適か'} },
    { id:'b2', question:'Why Operations?', questionJa:'なぜオペレーション部門を志望しますか？',
      tips:'Show you understand Ops is critical infrastructure, not "back office." Reference trade lifecycle, risk management, process improvement. Connect to your skills (attention to detail, problem-solving, communication). New grads: mention experiences where you enjoyed organizing, problem-solving, or improving processes — even in student clubs or part-time jobs.',
      tipsJa:'Opsが「バックオフィス」ではなく重要インフラであることを理解していると示す。トレードライフサイクル、リスク管理、プロセス改善に言及。自分のスキル（細部への注意、問題解決、コミュニケーション）と結びつける。新卒の場合：サークルやアルバイトでの整理・問題解決・プロセス改善の経験に言及しましょう。',
      starPrompt:{s:'Your interest in finance operations',t:'Understanding the role',a:'Experiences that prepared you',r:'Why Ops is the right fit'},
      starPromptJa:{s:'金融オペレーションへの関心',t:'役割の理解',a:'準備となった経験',r:'なぜOpsが合っているか'} },
    { id:'b3', question:'Tell me about a time you paid close attention to detail and it made a difference.', questionJa:'細部への注意が成果につながった経験を教えてください。',
      tips:'Critical for Ops. Choose an example where your meticulousness prevented an error or improved quality. Quantify impact. New grads: examples from academic research, data analysis homework, or organizing a club event where precision mattered.',
      tipsJa:'Opsで極めて重要。あなたの緻密さがエラーを防止したり品質を向上させた例を選ぶ。インパクトを数値化。新卒の場合：学術研究、データ分析の課題、正確さが重要だったサークルイベントの運営などの例。',
      starPrompt:{s:'The project/task context',t:'What required attention to detail',a:'Specific steps you took',r:'Error prevented or quality improved'},
      starPromptJa:{s:'プロジェクト/タスクの背景',t:'細部への注意が必要だった点',a:'具体的に取った行動',r:'防止されたエラーまたは向上した品質'} },
    { id:'b4', question:'Describe a time you had to manage multiple priorities under a tight deadline.', questionJa:'厳しい締切の中で複数の優先事項を管理した経験を教えてください。',
      tips:'Ops requires multitasking across markets and time zones. Show prioritization, time management, and communication under pressure. New grads: exam periods with overlapping deadlines, or juggling part-time work with academics.',
      tipsJa:'Opsは複数の市場・タイムゾーンを横断するマルチタスクが必要。プレッシャー下での優先順位付け、時間管理、コミュニケーションを示す。新卒の場合：試験期間の重なり、アルバイトと学業の両立などの経験。',
      starPrompt:{s:'The high-pressure situation',t:'Competing priorities and deadlines',a:'How you organized and communicated',r:'All deliverables met on time'},
      starPromptJa:{s:'プレッシャーの大きい状況',t:'競合する優先事項と締切',a:'どう整理しコミュニケーションしたか',r:'全ての成果物を期日通りに達成'} },
    { id:'b5', question:'Tell me about a time you identified and resolved a process inefficiency.', questionJa:'プロセスの非効率を特定し改善した経験を教えてください。',
      tips:'Process improvement is core to Ops. Show analytical thinking, initiative, and quantified results. Mention stakeholder buy-in. New grads: streamlining club operations, improving a study group workflow, or automating a repetitive task.',
      tipsJa:'プロセス改善はOpsの核。分析的思考、主体性、定量的成果を示す。ステークホルダーの賛同にも言及。新卒の場合：サークル運営の効率化、勉強会のワークフロー改善、繰り返しタスクの自動化など。',
      starPrompt:{s:'The inefficient process',t:'The problem and its impact',a:'Your analysis and proposed solution',r:'Measurable improvement achieved'},
      starPromptJa:{s:'非効率なプロセス',t:'問題とその影響',a:'分析と提案した解決策',r:'達成された定量的改善'} },
    { id:'b6', question:'Give an example of working effectively in a team across different functions.', questionJa:'異なる部門のチームと効果的に協力した例を教えてください。',
      tips:'Ops works cross-functionally with Trading, Technology, Legal, Compliance. Show communication skills and ability to bridge different perspectives. New grads: group projects with diverse team members, cross-departmental student organization initiatives.',
      tipsJa:'Opsはトレーディング、テクノロジー、法務、コンプライアンスと横断的に連携。コミュニケーション能力と異なる視点をつなぐ力を示す。新卒の場合：多様なメンバーとのグループプロジェクト、学生団体の部門横断的な活動。',
      starPrompt:{s:'The cross-functional project',t:'Different teams involved',a:'How you facilitated collaboration',r:'Successful outcome through teamwork'},
      starPromptJa:{s:'部門横断プロジェクト',t:'関わったチーム',a:'どう協力を促進したか',r:'チームワークによる成功'} },
    { id:'b7', question:'Describe a time you made a mistake and how you handled it.', questionJa:'ミスをした経験と、それにどう対処したか教えてください。',
      tips:'Be honest and show accountability. Focus on quick escalation, root cause analysis, and preventive measures. Ops values transparency. New grads: academic setbacks, project mistakes, or part-time job errors — the key is showing how you took responsibility and learned.',
      tipsJa:'正直に責任を示す。迅速なエスカレーション、根本原因分析、再発防止策に焦点。Opsは透明性を重視。新卒の場合：学業での挫折、プロジェクトのミス、アルバイトでのエラー — 責任を取り学んだことを示すのがポイント。',
      starPrompt:{s:'What happened',t:'The impact of the mistake',a:'How you escalated and fixed it',r:'Lessons learned and controls added'},
      starPromptJa:{s:'何が起きたか',t:'ミスの影響',a:'エスカレーションと修正方法',r:'学びと追加されたコントロール'} },
    { id:'b8', question:'How do you stay organized and ensure accuracy in your work?', questionJa:'仕事の正確性をどう確保し、整理整頓していますか？',
      tips:'Discuss specific methods: checklists, double-checking, reconciliation mindset, automation. Connect to Ops DNA. New grads: study habits, how you organize notes, project management tools you use, or personal productivity systems.',
      tipsJa:'具体的な方法を議論：チェックリスト、ダブルチェック、照合マインドセット、自動化。OpsのDNAに結びつける。新卒の場合：勉強の習慣、ノートの整理法、使っているプロジェクト管理ツール、個人の生産性システム。',
      starPrompt:{s:'A task requiring precision',t:'Accuracy requirements',a:'Systems and habits you use',r:'Consistent accuracy record'},
      starPromptJa:{s:'精度が求められたタスク',t:'正確性の要件',a:'使っているシステムや習慣',r:'一貫した正確性の実績'} },
    { id:'b9', question:'Tell me about yourself / Self-PR', questionJa:'自己紹介・自己PRをお願いします',
      tips:'Keep it to 1-2 minutes. Structure: university/major, one key experience that shaped you, why you are here today. Do NOT recite your resume. Focus on one or two things that show your character. End by connecting to why this role excites you. Be natural and conversational — this is your first impression.',
      tipsJa:'1-2分にまとめましょう。構成：大学・専攻、自分を形作った1つの経験、なぜ今日ここにいるか。履歴書の読み上げはNG。自分の人柄が伝わるエピソードを1-2個に絞る。最後にこの仕事に興味がある理由につなげる。自然体で会話するように — これが第一印象です。',
      starPrompt:{s:'Your background and university life',t:'What you want to convey about yourself',a:'Key experiences and what you learned',r:'Why you are a good fit for this role'},
      starPromptJa:{s:'あなたの経歴と大学生活',t:'自分について伝えたいこと',a:'主要な経験と学んだこと',r:'なぜこの役割に合っているか'} },
    { id:'b10', question:'What did you put the most effort into during university?', questionJa:'学生時代に最も力を入れたことは何ですか？（ガクチカ）',
      tips:'This is THE most common question in Japanese new-grad interviews. Choose ONE story and go deep. The interviewer wants to see: (1) Why you chose it, (2) What was hard about it, (3) How you pushed through, (4) What you learned. Good topics: research, club leadership, part-time work challenges, study abroad, volunteer work. Bad approach: listing many things superficially. Be specific with numbers and details.',
      tipsJa:'日本の新卒面接で最も聞かれる質問です。1つのエピソードを深く掘り下げましょう。面接官が見ているのは：(1) なぜそれを選んだか、(2) 何が大変だったか、(3) どう乗り越えたか、(4) 何を学んだか。良いテーマ：研究、サークルのリーダーシップ、アルバイトでの課題、留学、ボランティア。NG：多くのことを浅く並べる。数字や具体的な詳細を入れましょう。',
      starPrompt:{s:'What you chose to dedicate yourself to and why',t:'The challenge or goal you faced',a:'Specific steps you took to overcome difficulties',r:'What you achieved and what it taught you'},
      starPromptJa:{s:'何に打ち込んだか、なぜそれを選んだか',t:'直面した課題や目標',a:'困難を乗り越えるために取った具体的な行動',r:'何を達成し、何を学んだか'} },
    { id:'b11', question:'What are your strengths and weaknesses?', questionJa:'あなたの長所と短所を教えてください',
      tips:'Strengths: pick one that is relevant to Ops (e.g., attention to detail, persistence, ability to stay calm under pressure). Back it up with a SHORT example. Weaknesses: be honest but show self-awareness and improvement. Good: "I tend to be too cautious, so I have been practicing making faster decisions while maintaining accuracy." Bad: "I work too hard" (cliche) or something that is a deal-breaker for the role.',
      tipsJa:'長所：Opsに関連するものを1つ選ぶ（例：細部への注意力、粘り強さ、プレッシャーの中での冷静さ）。短いエピソードで裏付ける。短所：正直に、でも自己認識と改善努力を見せる。良い例：「慎重すぎる面があるので、正確さを保ちつつ判断を早くする練習をしています」。NG：「頑張りすぎること」（陳腐）、その職種に致命的な弱点。',
      starPrompt:{s:'Context where your strength/weakness appeared',t:'What was at stake',a:'How your strength helped / How you manage your weakness',r:'Positive outcome / Progress in improvement'},
      starPromptJa:{s:'長所・短所が現れた場面',t:'何がかかっていたか',a:'長所がどう活きたか / 短所をどう管理しているか',r:'良い結果 / 改善の進歩'} },
    { id:'b12', question:'What recent financial news has caught your attention?', questionJa:'最近気になった金融ニュースは何ですか？',
      tips:'You do NOT need deep expertise. The interviewer is checking: (1) Do you follow the news at all? (2) Can you explain it simply? (3) Can you connect it to Operations? Pick ONE news item you genuinely found interesting. Explain what happened, why it matters, and (bonus) how it might affect Operations. Sources: Nikkei, Bloomberg, Financial Times headlines are enough. If you do not know much, be honest: "I have been following X because..." is better than faking knowledge.',
      tipsJa:'深い専門知識は不要です。面接官が確認しているのは：(1) ニュースを見ているか？ (2) 簡潔に説明できるか？ (3) オペレーションと結びつけられるか？ 本当に興味を持ったニュースを1つ選びましょう。何が起きたか、なぜ重要か、（ボーナス）Opsにどう影響するかを説明。情報源：日経、Bloomberg、Financial Timesの見出しで十分。あまり知らなくても正直に：「〜に興味を持って追っています」が知識を装うより良い。',
      starPrompt:{s:'The news event and when you noticed it',t:'Why it caught your attention',a:'What you researched and understood',r:'How it connects to Operations or the financial industry'},
      starPromptJa:{s:'そのニュースと気づいたきっかけ',t:'なぜ興味を持ったか',a:'何を調べて理解したか',r:'オペレーションや金融業界とどうつながるか'} },
    { id:'b13', question:'Are you comfortable with detailed, repetitive work?', questionJa:'地道で細かい作業は苦になりませんか？',
      tips:'Be honest. Operations involves repetitive, detail-oriented tasks daily — reconciliation, checking, data validation. The interviewer wants to know you will not get bored or careless. Good approach: give a real example of when you did meticulous work and found satisfaction in it. Show that you understand accuracy matters and that you take pride in getting things right. It is OK to say "I find it rewarding when everything matches perfectly."',
      tipsJa:'正直に答えましょう。Opsは毎日、照合、確認、データ検証など地道で正確さが求められる作業があります。面接官は飽きたり不注意にならないか知りたい。良いアプローチ：実際に細かい作業をして満足感を得た経験を話す。正確さが大切だと理解していること、きちんとやり遂げることに誇りを持っていることを示す。「全部合った時の達成感が好きです」は良い回答です。',
      starPrompt:{s:'A situation involving detailed, repetitive work',t:'What accuracy was required',a:'How you maintained focus and quality',r:'Outcome and what you found rewarding about it'},
      starPromptJa:{s:'地道で細かい作業が求められた場面',t:'どの程度の正確さが必要だったか',a:'集中力と品質をどう維持したか',r:'結果と、その中で何にやりがいを感じたか'} },
];

// --- Technical Q&A ---
const technicalQuestions = [
    { id:'tq1', question:'What is a trade break and how would you resolve it?', questionJa:'トレードブレークとは何ですか？どう解決しますか？',
      answer:'A trade break is a discrepancy between internal records and external records (counterparty/CCP/custodian). Resolution: identify the break, compare trade details (quantity, price, settlement date, SSIs), contact counterparty to agree on correct details, amend booking, escalate aged breaks.',
      answerJa:'トレードブレークは内部記録と外部記録（カウンターパーティ/CCP/カストディアン）の不一致。解決法：ブレークを特定、取引詳細（数量、価格、決済日、SSI）を比較、カウンターパーティに連絡し正しい詳細を合意、記帳を修正、長期化したブレークをエスカレーション。',
      beginnerNote:'Imagine you and a friend swapped items but wrote down different details about what was exchanged. A "break" is when records don\'t match, and someone needs to figure out what really happened.',
      beginnerNoteJa:'友達とアイテムを交換したけど、お互い交換内容を違うように書いてしまった状態を想像してください。「ブレーク」は記録が一致しないことで、何が本当に起きたか突き止める必要があります。' },
    { id:'tq2', question:'Explain DvP and why it matters.', questionJa:'DvP（Delivery vs Payment）とは何か、なぜ重要か説明してください。',
      answer:'DvP ensures simultaneous exchange of securities and cash, eliminating principal risk where one party delivers but the other doesn\'t pay. Without DvP, there\'s counterparty risk of losing the full value of the trade.',
      answerJa:'DvPは証券と現金の同時交換を保証し、一方が引き渡したのに他方が支払わないという元本リスクを排除する。DvPなしでは、取引の全額を失うカウンターパーティリスクがある。',
      beginnerNote:'Think of buying a phone from a stranger. DvP is like using a trusted escrow service: neither person has to hand over their item/money first and risk being cheated.',
      beginnerNoteJa:'見知らぬ人からスマホを買う場面を想像してください。DvPは信頼できるエスクローサービスのようなもの：どちらも先に商品やお金を渡す必要がなく、騙されるリスクがありません。' },
    { id:'tq3', question:'What is the role of a CCP?', questionJa:'CCPの役割は何ですか？',
      answer:'A Central Counterparty (CCP) interposes itself between buyer and seller for cleared products (exchange-traded derivatives, mandated OTC products), becoming the buyer to every seller and seller to every buyer. This reduces counterparty risk, enables netting (reducing settlement volumes), and provides default management. Not all products are centrally cleared — bilateral OTC trades use CSA-based collateral instead. Examples of CCPs: LCH, CME, JSCC.',
      answerJa:'CCP（中央清算機関）は清算対象商品（取引所デリバティブ、義務化されたOTC商品）について買い手と売り手の間に入り、全ての売り手に対する買い手、全ての買い手に対する売り手となる。これによりカウンターパーティリスクが削減され、ネッティング（決済量の削減）が可能になり、デフォルト管理が提供される。全ての商品がCCP清算されるわけではなく、二者間OTC取引はCSAベースの担保交換を使用する。CCPの例：LCH、CME、JSCC。',
      beginnerNote:'The CCP is like a trusted friend who stands between two strangers making a deal. If one person can\'t pay, the CCP covers it. This makes everyone feel safer about trading.',
      beginnerNoteJa:'CCPは取引する二人の見知らぬ人の間に立つ信頼できる友人のようなものです。一方が支払えなくなっても、CCPがカバーします。これにより全員が安心して取引できます。' },
    { id:'tq4', question:'What happens when a trade fails to settle?', questionJa:'取引の決済が失敗するとどうなりますか？',
      answer:'A settlement fail means securities or cash were not delivered on the intended settlement date. Impact: funding costs, regulatory penalties (CSDR in EU), reputational risk. Resolution: investigate cause (short position, incorrect SSIs, operational error), contact counterparty/custodian, arrange partial settlement if possible, escalate.',
      answerJa:'決済失敗は、予定された決済日に証券または現金が引き渡されなかったことを意味する。影響：資金調達コスト、規制上のペナルティ（EUのCSDR）、レピュテーションリスク。解決：原因調査（ショートポジション、不正確なSSI、オペレーションエラー）、カウンターパーティ/カストディアンに連絡、可能なら部分決済、エスカレーション。',
      beginnerNote:'Like an online order that wasn\'t delivered on time. The buyer doesn\'t have their item, the seller doesn\'t have the money, and penalties may apply. Operations needs to figure out why and fix it quickly.',
      beginnerNoteJa:'ネット通販で注文した商品が時間通りに届かないようなもの。買い手は商品がなく、売り手はお金がなく、ペナルティが発生することも。Opsは原因を突き止めて早急に修正する必要があります。' },
    { id:'tq5', question:'What is reconciliation and why is it important?', questionJa:'照合（リコンシリエーション）とは何で、なぜ重要ですか？',
      answer:'Reconciliation is the process of comparing two sets of records to ensure they agree. Types: trade recon (internal vs counterparty), position recon (books vs custodian), cash recon (cash ledger vs bank). It\'s critical for detecting errors, fraud, and ensuring accurate P&L and regulatory reporting.',
      answerJa:'照合は2つの記録セットを比較して一致を確認するプロセス。種類：取引照合（内部vsカウンターパーティ）、ポジション照合（帳簿vsカストディアン）、現金照合（現金台帳vs銀行）。エラーや不正の検出、正確な損益計算と規制報告のために不可欠。',
      beginnerNote:'Like checking your bank statement against your own spending records. If the numbers don\'t match, something went wrong and you need to find out what. Banks do this every day with thousands of transactions.',
      beginnerNoteJa:'自分の支出記録と銀行の明細を照らし合わせるようなもの。数字が合わなければ何かが間違っていて、何が起きたか調べる必要があります。銀行は毎日、何千もの取引でこれを行っています。' },
    { id:'tq6', question:'Explain the difference between initial margin and variation margin.', questionJa:'当初証拠金と変動証拠金の違いを説明してください。',
      answer:'Initial margin (IM): upfront collateral posted when opening a position, based on potential future exposure. Variation margin (VM): daily mark-to-market payment reflecting actual gains/losses. IM protects against future default; VM settles current P&L.',
      answerJa:'当初証拠金（IM）：ポジション開設時に差し入れる担保。潜在的な将来エクスポージャーに基づく。変動証拠金（VM）：実際の損益を反映した日次の時価評価支払い。IMは将来のデフォルトに対する保護、VMは現在の損益の決済。',
      beginnerNote:'Initial margin is like a security deposit when renting an apartment — it protects the landlord if something goes wrong. Variation margin is like adjusting the rent daily based on the apartment\'s changing value.',
      beginnerNoteJa:'当初証拠金はアパートの敷金のようなもの — 何か問題があった時に大家さんを守ります。変動証拠金はアパートの変動する価値に基づいて家賃を日々調整するようなものです。' },
    { id:'tq7', question:'What is a corporate action and give examples.', questionJa:'コーポレートアクションとは何ですか？例を挙げてください。',
      answer:'A corporate action is an event initiated by a public company that affects its securities. Examples: dividends (cash/stock), stock splits, mergers/acquisitions, rights issues, tender offers, name changes. Ops must process these accurately to avoid financial loss.',
      answerJa:'コーポレートアクションは上場企業が開始する証券に影響するイベント。例：配当（現金/株式）、株式分割、M&A、新株予約権、公開買付、社名変更。Opsはこれらを正確に処理し金銭的損失を避ける必要がある。',
      beginnerNote:'If a company decides to split its stock 2-for-1, everyone who owned 1 share now has 2. Operations needs to update all the records correctly. Getting it wrong could mean someone loses money.',
      beginnerNoteJa:'会社が株式を2分割すると決めたら、1株持っていた人は2株になります。Opsは全ての記録を正確に更新する必要があります。間違えると誰かが損をする可能性があります。' },
    { id:'tq8', question:'What is T+1 settlement and what are its implications for Operations?', questionJa:'T+1決済とは何ですか？オペレーションへの影響は？',
      answer:'T+1 means trade settles one business day after execution. The US moved equities, ETFs, and certain fixed income products to T+1 in May 2024 (SEC Rule 15c6-1). Other asset classes and regions may still use T+2 or different cycles. Implications for Ops: less time to resolve breaks, tighter STP requirements, need for automation, increased pressure on matching and allocation (especially for cross-border trades and institutional allocations), reduced counterparty risk.',
      answerJa:'T+1は取引が約定の翌営業日に決済されること。米国は2024年5月に株式、ETF、一部の債券をT+1に移行（SEC Rule 15c6-1）。他の資産クラスや地域はT+2や異なるサイクルを使用する場合がある。Opsへの影響：ブレーク解決の時間短縮、STP要件の厳格化、自動化の必要性増大、マッチング・アロケーション（特にクロスボーダー取引や機関投資家のアロケーション）への圧力増加、カウンターパーティリスクの削減。',
      beginnerNote:'Imagine your Amazon delivery time was cut from 2 days to 1 day. Good for the customer (less risk), but the warehouse, drivers, and logistics all need to work faster. That\'s what T+1 means for Operations.',
      beginnerNoteJa:'Amazonの配送時間が2日から1日に短縮されたと想像してください。顧客にはいいこと（リスク減少）ですが、倉庫、配送ドライバー、物流はもっと速く動く必要があります。T+1はOpsにとってそういう意味です。' },
    { id:'tq9', question:'What is STP and why does Operations care about it?', questionJa:'STP（Straight-Through Processing）とは何ですか？なぜOpsにとって重要ですか？',
      answer:'STP (Straight-Through Processing) is the automated end-to-end processing of a trade without manual intervention. Benefits: reduced errors, faster settlement, lower costs, scalability. Ops focuses on increasing STP rates by eliminating manual touchpoints and standardizing processes.',
      answerJa:'STP（ストレート・スルー・プロセッシング）は手作業の介入なしに取引を自動で端から端まで処理すること。利点：エラー削減、決済高速化、コスト削減、スケーラビリティ。Opsは手作業ポイントの排除とプロセス標準化によりSTP率の向上に注力。',
      beginnerNote:'Think of a factory assembly line that runs without anyone having to stop and fix things manually. The more automated (STP), the fewer errors and the faster things get done. That\'s the goal for trade processing.',
      beginnerNoteJa:'誰も手作業で止めて直す必要のない工場の組立ラインを想像してください。自動化（STP）が進むほど、エラーは少なく、処理は速くなります。取引処理の目標はこれです。' },
    { id:'tq10', question:'What regulations affect Operations?', questionJa:'オペレーションに影響する規制は何ですか？',
      answer:'Key regulations affecting Ops: Dodd-Frank (central clearing mandate, trade reporting), EMIR (EU equivalent), MiFID II (transparency, best execution), CSDR (settlement discipline), Basel III/IV (capital requirements), SOX (internal controls), AML/KYC regulations (client verification, sanctions screening — OFAC/EU lists), UMR (Uncleared Margin Rules — margin requirements for bilateral OTC derivatives). Ops ensures compliance through controls, reporting, sanctions screening, and audit trails.',
      answerJa:'Opsに影響する主要規制：ドッド・フランク法（中央清算義務、取引報告）、EMIR（EU版）、MiFID II（透明性、最良執行）、CSDR（決済規律）、Basel III/IV（自己資本規制）、SOX法（内部統制）、AML/KYC規制（顧客確認、制裁対象スクリーニング — OFAC/EUリスト）、UMR（非清算証拠金規則 — 二者間OTCデリバティブの証拠金要件）。Opsはコントロール、報告、制裁対象スクリーニング、監査証跡を通じてコンプライアンスを確保。',
      beginnerNote:'Regulations are the rules of the game. After the 2008 financial crisis, governments worldwide created stricter rules to prevent it from happening again. Operations is responsible for making sure the bank follows all these rules.',
      beginnerNoteJa:'規制はゲームのルールです。2008年の金融危機後、世界中の政府がより厳しいルールを作り、再発を防ごうとしました。オペレーションは銀行がこれら全てのルールに従っていることを確認する責任があります。' },
];

// --- Case Studies ---
const caseStudies = [
    { id:'cs1', title:'Settlement Fail Investigation', titleJa:'決済失敗の調査',
      scenario:'A large equity trade ($50M) on a European exchange failed to settle on T+2. The counterparty claims they never received our settlement instructions. Your team is responsible for resolving this before end of day to avoid settlement discipline penalties under CSDR (EU regulation). Note: In the US, settlement fails may incur SEC Rule 204 buy-in requirements instead.',
      scenarioJa:'欧州の取引所での大口株式取引（$50M）がT+2に決済失敗しました。カウンターパーティは決済指示を受け取っていないと主張しています。CSDR（EU規制）の決済規律ペナルティを避けるため、あなたのチームは日中に解決する責任があります。注意：米国では、決済失敗はSEC Rule 204のバイイン要件が適用される場合があります。',
      framework:[
        {step:'Investigate',stepJa:'調査', items:['Check SWIFT message logs for MT540/541','Verify SSI (Standard Settlement Instructions) on file','Confirm custodian received and matched instructions','Check for any static data mismatches'],
         itemsJa:['MT540/541のSWIFTメッセージログを確認','ファイル上のSSI（標準決済指示）を検証','カストディアンが指示を受領・照合したか確認','スタティックデータの不一致をチェック']},
        {step:'Escalate & Communicate',stepJa:'エスカレーション＆コミュニケーション', items:['Alert senior Ops and trading desk','Contact counterparty Ops team directly','Engage custodian for priority processing','Document timeline for audit trail'],
         itemsJa:['シニアOpsとトレーディングデスクに報告','カウンターパーティのOpsチームに直接連絡','カストディアンに優先処理を依頼','監査証跡のためタイムラインを記録']},
        {step:'Resolve',stepJa:'解決', items:['Resend corrected instructions if needed','Request partial settlement if possible','Arrange buy-in or borrowing as last resort','Confirm settlement status with all parties'],
         itemsJa:['必要なら修正した指示を再送信','可能なら部分決済を要請','最終手段としてバイインまたは借入を手配','全当事者と決済状況を確認']},
        {step:'Prevent Recurrence',stepJa:'再発防止', items:['Root cause analysis: was it manual SSI entry error?','Propose automated SSI validation','Update procedures and training','Report incident per operational risk framework'],
         itemsJa:['根本原因分析：手動SSI入力エラーだったか？','自動SSI検証を提案','手順とトレーニングを更新','オペレーショナルリスクフレームワークに従いインシデント報告']},
      ]},
    { id:'cs2', title:'Reconciliation Break Resolution', titleJa:'照合ブレークの解決',
      scenario:'Your daily position reconciliation shows 150 breaks across the Fixed Income book. Management wants the break count reduced by 80% within 2 weeks. You need to propose an action plan.',
      scenarioJa:'日次ポジション照合で債券ブックに150件のブレークが表示されています。経営層は2週間以内にブレーク数を80%削減することを求めています。アクションプランを提案する必要があります。',
      framework:[
        {step:'Categorize',stepJa:'分類', items:['Group breaks by type: timing, price, quantity, missing trades','Identify top 5 root causes by frequency','Separate genuine breaks from false positives (timing differences)'],
         itemsJa:['種類別にブレークを分類：タイミング、価格、数量、欠落取引','頻度による上位5つの根本原因を特定','本当のブレークとフォールスポジティブ（タイミング差異）を分離']},
        {step:'Quick Wins',stepJa:'クイックウィン', items:['Auto-match timing differences with tolerance rules','Fix known static data issues in bulk','Clear aged breaks that are no longer valid'],
         itemsJa:['許容ルールでタイミング差異を自動マッチ','既知のスタティックデータ問題を一括修正','有効でない古いブレークをクリア']},
        {step:'Systemic Fixes',stepJa:'根本的修正', items:['Automate manual booking processes causing errors','Implement real-time matching with counterparties','Add validation rules at trade entry to prevent breaks'],
         itemsJa:['エラーの原因となる手動記帳プロセスを自動化','カウンターパーティとのリアルタイムマッチングを実装','ブレーク防止のため取引入力時の検証ルールを追加']},
        {step:'Measure & Report',stepJa:'測定＆報告', items:['Track break count daily, publish dashboard','Set KPIs: break count, ageing, time-to-resolve','Weekly review with management on progress'],
         itemsJa:['ブレーク数を日次で追跡、ダッシュボードを公開','KPI設定：ブレーク数、エージング、解決時間','経営層との進捗に関する週次レビュー']},
      ]},
    { id:'cs3', title:'Process Automation Business Case', titleJa:'プロセス自動化のビジネスケース',
      scenario:'Your team manually processes 200 trade confirmations per day for OTC derivatives. Each takes 15 minutes. Management asks you to build a business case for automation.',
      scenarioJa:'あなたのチームはOTCデリバティブのトレードコンファメーションを毎日200件手動で処理しています。各件15分かかります。経営層から自動化のビジネスケースを作るよう求められました。',
      framework:[
        {step:'Current State Analysis',stepJa:'現状分析', items:['200 confirms × 15 min = 50 hours/day = ~6 FTEs','Error rate: estimate 2-3% manual error rate','Cost: salary + error remediation + regulatory risk'],
         itemsJa:['200件 × 15分 = 50時間/日 = 約6名分のFTE','エラー率：手動エラー率2-3%と推定','コスト：人件費 + エラー修正費 + 規制リスク']},
        {step:'Proposed Solution',stepJa:'提案する解決策', items:['Electronic confirmation matching platform (e.g., MarkitWire)','Auto-matching rules for standard terms','Exception-only workflow for manual review'],
         itemsJa:['電子コンファメーションマッチングプラットフォーム（例：MarkitWire）','標準条件の自動マッチングルール','手動レビューは例外のみのワークフロー']},
        {step:'Benefits',stepJa:'効果', items:['Reduce processing time by 80%+','Reduce error rate to <0.5%','Free up 4-5 FTEs for higher-value work','Faster settlement, lower operational risk'],
         itemsJa:['処理時間を80%以上削減','エラー率を0.5%未満に削減','4-5名のFTEをより価値の高い業務に振り替え','決済高速化、オペレーショナルリスク低減']},
        {step:'Implementation',stepJa:'実装', items:['Phase 1: standard IRS (highest volume) - 8 weeks','Phase 2: CDS, FX options - 6 weeks','Phase 3: exotic products - 8 weeks','ROI: estimated payback in 12-18 months'],
         itemsJa:['フェーズ1：標準IRS（最大ボリューム）- 8週間','フェーズ2：CDS、FXオプション - 6週間','フェーズ3：エキゾチック商品 - 8週間','ROI：12-18ヶ月で投資回収見込み']},
      ]},
];

// --- Glossary ---
const glossaryTerms = [
    {term:'DvP', termJa:'DvP', fullName:'Delivery versus Payment',
      def:'Simultaneous exchange of securities and cash, eliminating principal risk.',
      defJa:'証券と現金の同時交換。元本リスクを排除する仕組み。',
      usage:'Settlement instructions: "This trade settles DvP." Discussed when explaining why settlement is safe.',
      usageJa:'決済指示：「この取引はDvPで決済」。決済の安全性を説明する場面で使用。',
      beginnerDef:'Like using an escrow service — both sides deliver at the same time so nobody gets cheated.', beginnerDefJa:'エスクローサービスのようなもの — 両者が同時に引き渡すので誰も騙されない。'},
    {term:'CCP', termJa:'CCP', fullName:'Central Counterparty',
      def:'Intermediary between buyer and seller in cleared trades. Becomes the buyer to every seller and vice versa.',
      defJa:'清算対象取引で買い手と売り手の間に入る仲介者。全売り手の買い手、全買い手の売り手になる。',
      usage:'Clearing discussions: "This product is centrally cleared through LCH." Risk management conversations.',
      usageJa:'清算の議論：「この商品はLCHで中央清算される」。リスク管理の会話で使用。',
      beginnerDef:'A trusted middleman who guarantees both sides will follow through on a deal.', beginnerDefJa:'取引の両当事者が約束を果たすことを保証する信頼できる仲介者。'},
    {term:'CSD', termJa:'CSD', fullName:'Central Securities Depository',
      def:'Holds securities in dematerialized (electronic) form. Examples: DTCC, Euroclear, JASDEC.',
      defJa:'証券を電子化された形で保管する機関。例：DTCC、Euroclear、JASDEC。',
      usage:'Custody discussions: "Securities are held at the CSD." Settlement infrastructure conversations.',
      usageJa:'カストディの議論：「証券はCSDに保管」。決済インフラの会話で使用。',
      beginnerDef:'A digital vault that keeps track of who owns which securities.', beginnerDefJa:'誰がどの証券を所有しているか記録するデジタル金庫。'},
    {term:'SSI', termJa:'SSI', fullName:'Standard Settlement Instructions',
      def:'Pre-agreed account details for settlement. Incorrect SSIs are a common cause of settlement fails.',
      defJa:'決済のための事前合意された口座情報。誤ったSSIは決済失敗の一般的な原因。',
      usage:'Settlement ops: "Check the SSIs on file." Break investigation: "The SSI was outdated."',
      usageJa:'決済業務：「ファイルのSSIを確認して」。ブレーク調査：「SSIが古かった」。',
      beginnerDef:'Like saved delivery addresses — pre-set account details so payments go to the right place.', beginnerDefJa:'保存された配送先住所のようなもの — 支払いが正しい場所に届くよう事前設定された口座情報。'},
    {term:'STP', termJa:'STP', fullName:'Straight-Through Processing',
      def:'Automated end-to-end trade processing without manual intervention. Higher STP rate = fewer errors.',
      defJa:'手作業なしの端から端までの自動取引処理。STP率が高い＝エラーが少ない。',
      usage:'KPI discussions: "Our STP rate is 95%." Process improvement: "How can we increase STP?"',
      usageJa:'KPIの議論：「STP率は95%」。プロセス改善：「STPをどう上げるか」。',
      beginnerDef:'A fully automated assembly line where trades are processed without anyone having to step in.', beginnerDefJa:'誰も介入することなく取引が処理される完全自動化された組立ライン。'},
    {term:'Break', termJa:'ブレーク',
      def:'Discrepancy between two records that should match. Types: trade breaks, position breaks, cash breaks.',
      defJa:'一致すべき2つの記録間の不一致。種類：取引ブレーク、ポジションブレーク、現金ブレーク。',
      usage:'Daily ops: "We have 15 breaks to resolve today." Reconciliation reports.',
      usageJa:'日次業務：「今日解決すべきブレークが15件」。照合レポートで使用。',
      beginnerDef:'When your notes say one thing but the other person\'s notes say something different.', beginnerDefJa:'あなたのメモと相手のメモが違うことを言っている状態。'},
    {term:'Netting', termJa:'ネッティング',
      def:'Offsetting mutual obligations to reduce settlement amounts and volumes.',
      defJa:'相互の債務を相殺し決済額と件数を削減すること。',
      usage:'CCP clearing: "Netting reduced our settlement obligations by 80%." Efficiency discussions.',
      usageJa:'CCP清算：「ネッティングで決済義務が80%減少」。効率化の議論で使用。',
      beginnerDef:'If I owe you $100 and you owe me $80, we just settle the $20 difference.', beginnerDefJa:'私があなたに100ドル、あなたが私に80ドル借りているなら、20ドルの差額だけ決済する。'},
    {term:'Margin Call', termJa:'マージンコール',
      def:'Demand for additional collateral when a position moves against you.',
      defJa:'ポジションが不利に動いた際の追加担保の要求。',
      usage:'Risk management: "We received a margin call from the CCP." Daily collateral operations.',
      usageJa:'リスク管理：「CCPからマージンコールを受けた」。日次の担保管理業務で使用。',
      beginnerDef:'Like a landlord asking for more deposit because property values dropped.', beginnerDefJa:'物件価値が下がったので大家さんが追加の保証金を求めるようなもの。'},
    {term:'SWIFT', termJa:'SWIFT', fullName:'Society for Worldwide Interbank Financial Telecommunication',
      def:'Global messaging network for financial institutions. Message types: MT103 (payment), MT540/541 (settlement).',
      defJa:'金融機関のグローバルメッセージングネットワーク。メッセージ種別：MT103（送金）、MT540/541（決済）。',
      usage:'Settlement ops: "Send the MT541 via SWIFT." Investigation: "Check the SWIFT message log."',
      usageJa:'決済業務：「SWIFTでMT541を送信して」。調査：「SWIFTメッセージログを確認して」。',
      beginnerDef:'The messaging app that banks use to talk to each other worldwide.', beginnerDefJa:'世界中の銀行同士がやり取りするメッセージングアプリ。'},
    {term:'KYC/AML', termJa:'KYC/AML', fullName:'Know Your Customer / Anti-Money Laundering',
      def:'Client verification and transaction monitoring requirements to prevent financial crime.',
      defJa:'金融犯罪防止のためのクライアント検証と取引監視の要件。',
      usage:'Client onboarding: "KYC checks must be completed before trading." Compliance reviews.',
      usageJa:'クライアントオンボーディング：「取引前にKYCチェックを完了する必要がある」。コンプライアンスレビューで使用。',
      beginnerDef:'ID check at the door — making sure customers are who they say they are and their money is legitimate.', beginnerDefJa:'入口でのID確認 — 顧客が本人であり、お金が合法であることを確認。'},
    {term:'ISDA', termJa:'ISDA', fullName:'International Swaps and Derivatives Association',
      def:'Standard legal framework for OTC derivatives trading. The ISDA Master Agreement governs most OTC trades.',
      defJa:'OTCデリバティブ取引の標準的な法的枠組み。ISDAマスター契約がほとんどのOTC取引を規定。',
      usage:'OTC trading: "Do we have an ISDA in place with this counterparty?" Legal/documentation teams.',
      usageJa:'OTC取引：「このカウンターパーティとのISDAはあるか？」法務・ドキュメンテーションチームで使用。'},
    {term:'Custodian', termJa:'カストディアン',
      def:'Institution holding securities on behalf of clients. Examples: BNY Mellon, State Street, MUFG.',
      defJa:'顧客に代わって証券を保管する機関。例：BNYメロン、ステートストリート、MUFG。',
      usage:'Settlement: "Instruct the custodian to release the securities." Asset servicing discussions.',
      usageJa:'決済：「カストディアンに証券のリリースを指示して」。アセットサービシングの議論で使用。',
      beginnerDef:'Like a bank vault that holds your valuable items safely.', beginnerDefJa:'大切な物を安全に保管する銀行の金庫のようなもの。'},
    {term:'Corporate Action', termJa:'コーポレートアクション',
      def:'Event by a company affecting its securities: dividends, stock splits, mergers, rights issues.',
      defJa:'証券に影響する企業のイベント：配当、株式分割、合併、新株予約権。',
      usage:'Ops processing: "We need to process the dividend corporate action by record date." Announcement monitoring.',
      usageJa:'業務処理：「基準日までに配当コーポレートアクションを処理する必要がある」。アナウンスメントの監視で使用。',
      beginnerDef:'A company decision that changes something about its stock — like paying dividends or splitting shares.', beginnerDefJa:'株式に関わる企業の決定 — 配当の支払いや株式分割など。'},
    {term:'FIX Protocol', termJa:'FIXプロトコル', fullName:'Financial Information eXchange',
      def:'Industry standard electronic trading messaging protocol. Uses tag=value pairs (e.g., Tag 35=D for New Order).',
      defJa:'業界標準の電子取引メッセージングプロトコル。タグ=値のペアを使用（例：Tag 35=D は新規注文）。',
      usage:'Trading systems: "Orders are sent via FIX." Integration: "Parse the FIX execution report."',
      usageJa:'取引システム：「注文はFIXで送信」。システム連携：「FIXの約定レポートを解析して」。'},
    {term:'T+1 / T+2', termJa:'T+1 / T+2',
      def:'Settlement cycle. T = Trade date. US equities moved to T+1 in May 2024.',
      defJa:'決済サイクル。T=取引日。米国株式は2024年5月にT+1に移行。',
      usage:'Settlement planning: "This settles T+1." Cross-border: "Japan equities settle T+2."',
      usageJa:'決済計画：「これはT+1で決済」。クロスボーダー：「日本株はT+2で決済」。',
      beginnerDef:'How many business days after buying before money and securities actually change hands.', beginnerDefJa:'購入後、お金と証券が実際にやり取りされるまでの営業日数。'},
    {term:'Operational Risk', termJa:'オペレーショナルリスク',
      def:'Risk of loss from failed internal processes, people, systems, or external events.',
      defJa:'内部プロセス、人、システム、外部事象の失敗による損失リスク。',
      usage:'Incident reports: "This is an operational risk event." Risk frameworks: RCSA, KRI tracking.',
      usageJa:'インシデント報告：「これはオペレーショナルリスクイベント」。リスクフレームワーク：RCSA、KRI管理で使用。',
      beginnerDef:'The risk that something goes wrong because of human error, computer failures, or broken processes.', beginnerDefJa:'人的ミス、コンピュータ障害、壊れたプロセスが原因で何かがうまくいかないリスク。'},
    {term:'CSDR', termJa:'CSDR', fullName:'Central Securities Depositories Regulation',
      def:'EU regulation on settlement discipline. Imposes penalties for settlement fails and mandatory buy-ins.',
      defJa:'決済規律に関するEU規制。決済失敗に対するペナルティと強制バイインを課す。',
      usage:'EU settlement: "CSDR penalties apply to this fail." Regulatory compliance discussions.',
      usageJa:'EU決済：「この失敗にはCSDRペナルティが適用される」。規制コンプライアンスの議論で使用。'},
    {term:'Herstatt Risk', termJa:'ヘルシュタットリスク',
      def:'FX settlement risk where one currency leg settles but the other does not due to time zone differences.',
      defJa:'タイムゾーンの違いにより一方の通貨が決済されてもう一方が決済されないFX決済リスク。',
      usage:'FX settlement: "CLS was created to eliminate Herstatt risk." Cross-border risk discussions.',
      usageJa:'FX決済：「CLSはヘルシュタットリスクを排除するために作られた」。クロスボーダーリスクの議論で使用。'},
    {term:'Affirmation / Confirmation', termJa:'アファメーション / コンファメーション',
      def:'Affirmation: investor confirms trade details with broker. Confirmation: legal agreement of trade terms between counterparties.',
      defJa:'アファメーション：投資家がブローカーとの取引詳細を確認。コンファメーション：カウンターパーティ間の取引条件の法的合意。',
      usage:'Post-trade: "The trade is affirmed, waiting for confirmation." OTC derivatives documentation.',
      usageJa:'ポストトレード：「取引はアファーム済み、コンファメーション待ち」。OTCデリバティブのドキュメンテーションで使用。'},
    {term:'Allocation / Block Trade', termJa:'アロケーション / ブロックトレード',
      def:'Block trade: single large order executed as one. Allocation: splitting it into sub-accounts for different funds.',
      defJa:'ブロックトレード：一括で執行される大口注文。アロケーション：異なるファンドのサブアカウントに分配。',
      usage:'Asset management ops: "The block trade needs to be allocated across 5 client funds by EOD."',
      usageJa:'アセットマネジメント業務：「ブロックトレードを営業日終了までに5つのクライアントファンドにアロケーションする必要がある」。'},
    {term:'Novation', termJa:'ノベーション',
      def:'Replacing an existing contract with a new one, substituting a new party. Core mechanism of CCP clearing.',
      defJa:'既存の契約を新しい契約に置き換え、新しい当事者を代替する。CCP清算の核となる仕組み。',
      usage:'CCP clearing: "The CCP novates between buyer and seller." Contract restructuring.',
      usageJa:'CCP清算：「CCPが買い手と売り手の間にノベーション」。契約再構築で使用。'},
    {term:'Buy-in', termJa:'バイイン',
      def:'Buyer purchases securities in the open market because the seller failed to deliver. Seller bears the price difference.',
      defJa:'売り手が引き渡しに失敗したため、買い手が公開市場で証券を購入。売り手が価格差を負担。',
      usage:'Settlement fails: "If not resolved by day 4, we initiate a buy-in." CSDR mandatory buy-in rules.',
      usageJa:'決済失敗：「4日目までに解決しなければバイインを開始」。CSDRの強制バイインルールで使用。'},
    {term:'PvP / FOP', termJa:'PvP / FOP', fullName:'Payment vs Payment / Free of Payment',
      def:'PvP: simultaneous exchange of two currencies (via CLS). FOP: securities transfer without cash (e.g., collateral movements).',
      defJa:'PvP：2通貨の同時交換（CLS経由）。FOP：現金交換なしの証券移転（例：担保移動）。',
      usage:'FX settlement: "Settle via CLS on a PvP basis." Collateral: "Move bonds FOP for margin."',
      usageJa:'FX決済：「CLSでPvPベースで決済」。担保：「証拠金としてFOPで債券を移動」。'},
    {term:'Nostro / Vostro', termJa:'ノストロ / ボストロ',
      def:'Nostro: "our" account at another bank. Vostro: "their" account at our bank. Key for cash reconciliation.',
      defJa:'ノストロ：他行に開設した「当方の」口座。ボストロ：当行に開設された「先方の」口座。現金照合の要。',
      usage:'Cash reconciliation: "Check the nostro balance." Correspondent banking discussions.',
      usageJa:'現金照合：「ノストロ残高を確認して」。コルレス銀行の議論で使用。'},
    {term:'ISIN / CUSIP / LEI', termJa:'ISIN / CUSIP / LEI', fullName:'International Securities Identification Number / Committee on Uniform Securities Identification Procedures / Legal Entity Identifier',
      def:'ISIN: global securities ID. CUSIP: US/Canada ID. LEI: unique counterparty identifier.',
      defJa:'ISIN：グローバル証券識別番号。CUSIP：米国/カナダの識別子。LEI：取引主体を一意に識別。',
      usage:'Trade booking: "Enter the ISIN for this bond." Regulatory reporting: "LEI is required for all reports."',
      usageJa:'取引記帳：「この債券のISINを入力して」。規制報告：「全レポートにLEIが必要」。'},
    {term:'UMR', termJa:'UMR', fullName:'Uncleared Margin Rules',
      def:'Global rules requiring bilateral OTC derivative counterparties to exchange initial and variation margin.',
      defJa:'二者間OTCデリバティブのカウンターパーティに当初証拠金と変動証拠金の交換を義務付けるグローバルな規則。',
      usage:'Collateral management: "UMR Phase 6 brought smaller firms into scope." Margin operations.',
      usageJa:'担保管理：「UMR Phase 6で小規模企業も対象に」。マージン業務で使用。'},
    {term:'Settlement Agent / Paying Agent', termJa:'決済エージェント / 支払エージェント',
      def:'Settlement agent: facilitates securities settlement. Paying agent: distributes coupon/dividend payments for the issuer.',
      defJa:'決済エージェント：証券決済を仲介。支払エージェント：発行体に代わりクーポン/配当を支払い。',
      usage:'Bond operations: "Who is the paying agent for this bond issue?" Settlement coordination.',
      usageJa:'債券業務：「この債券発行の支払エージェントは誰か？」決済の調整で使用。'},
    {term:'MTM', termJa:'MTM', fullName:'Mark-to-Market',
      def:'Revaluing a position based on current market prices. Used daily for margin calculations and P&L.',
      defJa:'現在の市場価格に基づきポジションを再評価すること。証拠金計算と損益に日次で使用。',
      usage:'Daily ops: "Run the MTM for all derivatives positions." Margin calls are based on MTM changes.',
      usageJa:'日次業務：「全デリバティブポジションのMTMを実行」。マージンコールはMTMの変動に基づく。'},
];

// ============================================================
// RENDERING
// ============================================================
const content = document.getElementById('content');
const navLinks = document.querySelectorAll('.nav-link');
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const resetBtn = document.getElementById('reset-btn');
const langBtn = document.getElementById('lang-btn');
let currentSection = 'dashboard';

function h(tag, attrs, ...children){
    const el = document.createElement(tag);
    if (attrs) Object.entries(attrs).forEach(([k, v]) => {
        if (k === 'className') el.className = v;
        else if (k.startsWith('on')) el.addEventListener(k.slice(2).toLowerCase(), v);
        else if (k === 'innerHTML') el.innerHTML = v;
        else el.setAttribute(k, v);
    });
    children.flat().forEach(c => { if (c != null) el.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
    return el;
}

function beginnerNoteEl(obj) {
    const note = L(obj, 'beginnerNote');
    if (!note) return null;
    return h('div', { className: 'beginner-note' }, note);
}

function beginnerDefEl(obj) {
    const def = L(obj, 'beginnerDef');
    if (!def) return null;
    return h('div', { className: 'beginner-note', style: 'margin-top:8px' }, def);
}

function updateNavLabels(){
    const labels = { dashboard:t('dashboard'), 'finance-basics':t('financeBasics'), 'trade-lifecycle':t('tradeLifecycle'), 'market-knowledge':t('marketKnowledge'), behavioral:t('behavioral'), technical:t('technical'), 'case-study':t('caseStudy'), glossary:t('glossary'), timer:t('timer') };
    navLinks.forEach(l => { const icon = l.querySelector('.nav-icon'); l.innerHTML = (icon ? icon.outerHTML : '') + ' ' + (labels[l.dataset.section] || ''); });
    resetBtn.textContent = t('resetBtn');
    langBtn.textContent = currentLang === 'ja' ? 'EN / JA  (JA)' : 'EN / JA  (EN)';
}

// --- Sidebar ---
function openSidebar(){ sidebar.classList.add('open'); sidebarOverlay.classList.add('active'); }
function closeSidebar(){ sidebar.classList.remove('open'); sidebarOverlay.classList.remove('active'); }
navLinks.forEach(link => link.addEventListener('click', e => { e.preventDefault(); navigateTo(link.dataset.section); }));
menuToggle.addEventListener('click', () => { sidebar.classList.contains('open') ? closeSidebar() : openSidebar(); });
sidebarOverlay.addEventListener('click', closeSidebar);
langBtn.addEventListener('click', () => { currentLang = currentLang === 'en' ? 'ja' : 'en'; localStorage.setItem('fin-ops-lang', currentLang); document.documentElement.lang = currentLang === 'ja' ? 'ja' : 'en'; updateNavLabels(); navigateTo(currentSection); });
resetBtn.addEventListener('click', () => { if (confirm(t('resetConfirm'))){ localStorage.removeItem(STORAGE_KEY); navigateTo(currentSection); } });

function navigateTo(section, params){
    currentSection = section;
    navLinks.forEach(l => l.classList.toggle('active', l.dataset.section === section));
    closeSidebar();
    const r = { dashboard:renderDashboard, 'finance-basics':renderFinanceBasics, 'trade-lifecycle':renderTradeLifecycle, 'market-knowledge':renderMarketKnowledge, behavioral:renderBehavioral, technical:renderTechnical, 'case-study':renderCaseStudy, glossary:renderGlossary, timer:renderTimer };
    (r[section] || renderDashboard)(params);
    window.scrollTo(0, 0);
}

function getProgressStats(){
    const p = loadProgress();
    const ids = [...financeBasicsTopics, ...tradeLifecycleSteps, ...marketTopics, ...behavioralQuestions, ...technicalQuestions, ...caseStudies].map(x => x.id);
    let solved = 0, attempted = 0;
    ids.forEach(id => { const s = p[id]; if (s === 'solved') solved++; else if (s === 'attempted') attempted++; });
    return { total:ids.length, solved, attempted, notStarted:ids.length - solved - attempted };
}
function getCatProgress(items){
    const p = loadProgress(); let solved = 0, attempted = 0;
    items.forEach(i => { const s = p[i.id]; if (s === 'solved') solved++; else if (s === 'attempted') attempted++; });
    return { total:items.length, solved, attempted };
}

// --- Dashboard ---
function renderDashboard(){
    const stats = getProgressStats();
    const pct = stats.total ? Math.round(stats.solved / stats.total * 100) : 0;
    content.innerHTML = '';
    content.appendChild(h('div', {className:'page-header'}, h('h2', null, t('dashboard')), h('p', null, t('description'))));

    // Timeline
    const tl = h('div', {className:'timeline'},
        ...[{l:t('tl1'),d:t('tl1d'),detail:t('tl1Detail')},{l:t('tl2'),d:t('tl2d'),detail:t('tl2Detail')},{l:t('tl3'),d:t('tl3d'),detail:t('tl3Detail')},{l:t('tl4'),d:t('tl4d'),detail:t('tl4Detail')}]
        .map(s => h('div', {className:'timeline-step'}, h('div', {className:'timeline-dot'}), h('div', {className:'timeline-label'}, s.l), h('div', {className:'timeline-desc'}, s.d), h('div', {style:'font-size:.75rem;color:var(--text-muted);margin-top:2px'}, s.detail)))
    );
    content.appendChild(tl);
    content.appendChild(h('p', {style:'font-size:.7rem;color:var(--text-muted);text-align:center;margin-bottom:20px'}, t('disclaimer')));

    // What interviewers look for
    const qualities = [
        {title:t('quality1Title'), desc:t('quality1Desc')},
        {title:t('quality2Title'), desc:t('quality2Desc')},
        {title:t('quality3Title'), desc:t('quality3Desc')},
    ];
    const lookForCard = h('div', {className:'card', style:'margin-bottom:24px;border-left:3px solid var(--accent)'},
        h('h3', {className:'card-title', style:'margin-bottom:6px'}, t('interviewerLooksFor')),
        h('p', {style:'color:var(--text-muted);font-size:.85rem;margin-bottom:14px;line-height:1.6'}, t('interviewerLooksForDesc')),
        ...qualities.map(q => h('div', {style:'margin-bottom:10px'},
            h('div', {style:'font-weight:700;color:var(--accent);font-size:.95rem'}, q.title),
            h('div', {style:'color:var(--text-muted);font-size:.85rem;line-height:1.5;margin-top:2px'}, q.desc))));
    content.appendChild(lookForCard);

    // Stats
    content.appendChild(h('div', {className:'stats-grid'},
        h('div', {className:'stat-card'}, h('div', {className:'stat-value'}, pct+'%'), h('div', {className:'stat-label'}, t('overallProgress')), h('div', {className:'progress-bar'}, h('div', {className:'progress-fill green', style:'width:'+pct+'%'}))),
        h('div', {className:'stat-card'}, h('div', {className:'stat-value'}, ''+stats.solved), h('div', {className:'stat-label'}, t('solved')+' / '+stats.total)),
        h('div', {className:'stat-card'}, h('div', {className:'stat-value'}, ''+stats.attempted), h('div', {className:'stat-label'}, t('inProgress'))),
        h('div', {className:'stat-card'}, h('div', {className:'stat-value'}, ''+stats.notStarted), h('div', {className:'stat-label'}, t('remaining'))),
    ));

    // Category cards
    const sections = [
        {name:t('financeBasics'), items:financeBasicsTopics, section:'finance-basics', color:'green'},
        {name:t('tradeLifecycle'), items:tradeLifecycleSteps, section:'trade-lifecycle', color:'accent'},
        {name:t('marketKnowledge'), items:marketTopics, section:'market-knowledge', color:'green'},
        {name:t('behavioral'), items:behavioralQuestions, section:'behavioral', color:'yellow'},
        {name:t('technical'), items:technicalQuestions, section:'technical', color:'red'},
        {name:t('caseStudy'), items:caseStudies, section:'case-study', color:'accent'},
    ];
    const grid = h('div', {className:'category-grid'},
        ...sections.map(sec => {
            const prog = getCatProgress(sec.items); const p = sec.items.length ? Math.round(prog.solved / sec.items.length * 100) : 0;
            return h('div', {className:'category-card', onClick:() => navigateTo(sec.section)},
                h('div', {className:'card-header'}, h('h3', {className:'card-title'}, sec.name), h('span', {className:'count'}, prog.solved+'/'+sec.items.length)),
                h('div', {className:'progress-bar'}, h('div', {className:'progress-fill '+sec.color, style:'width:'+p+'%'})));
        })
    );
    content.appendChild(grid);
}

// --- Finance Basics ---
function renderFinanceBasics(){
    content.innerHTML = '';
    content.appendChild(h('div', {className:'page-header'}, h('h2', null, t('financeBasicsTitle')), h('p', null, t('financeBasicsDesc'))));
    financeBasicsTopics.forEach(topic => {
        const status = getStatus(topic.id);
        const card = h('div', {className:'card'});
        card.appendChild(h('div', {className:'card-header'}, h('h3', {className:'card-title'}, L(topic, 'title')),
            h('span', {className:`difficulty-tag ${status==='solved'?'easy':status==='attempted'?'medium':'hard'}`}, status==='solved'?t('solved'):status==='attempted'?t('attempted'):t('notStarted'))));
        card.appendChild(h('p', {style:'margin-bottom:12px;line-height:1.7'}, L(topic, 'content')));
        // Key points
        const points = currentLang === 'ja' && topic.keyPointsJa ? topic.keyPointsJa : topic.keyPoints;
        if (points) {
            card.appendChild(h('div', {className:'design-step'},
                h('h4', null, currentLang === 'ja' ? 'ポイント' : 'Key Points'),
                h('ul', {style:'padding-left:20px;color:var(--text-muted);line-height:1.7'}, ...points.map(p => h('li', null, p)))));
        }
        card.appendChild(h('div', {className:'btn-group', style:'margin-top:12px'},
            h('button', {className:'btn btn-sm '+(status==='attempted'?'btn-primary':'btn-secondary'), onClick:() => {setStatus(topic.id,'attempted');navigateTo('finance-basics');}}, t('attempted')),
            h('button', {className:'btn btn-sm '+(status==='solved'?'btn-success':'btn-secondary'), onClick:() => {setStatus(topic.id,'solved');navigateTo('finance-basics');}}, t('solved')),
        ));
        content.appendChild(card);
    });
}

// --- Trade Lifecycle ---
function renderTradeLifecycle(){
    content.innerHTML = '';
    content.appendChild(h('div', {className:'page-header'}, h('h2', null, t('tradeLifecycleTitle')), h('p', null, t('tradeLifecycleDesc'))));
    // Flow diagram
    const flowSteps = currentLang === 'ja'
        ? ['KYC/開設','約定','清算','決済','事後処理','リスク管理']
        : ['Onboarding','Execution','Clearing','Settlement','Post-Trade','Risk & Control'];
    const flowDiagram = h('div', {className:'flow-diagram'});
    flowSteps.forEach((s, i) => {
        flowDiagram.appendChild(h('div', {className:'flow-step'}, s));
        if (i < flowSteps.length - 1) flowDiagram.appendChild(h('div', {className:'flow-arrow'}, '\u2192'));
    });
    content.appendChild(flowDiagram);
    tradeLifecycleSteps.forEach(step => {
        const status = getStatus(step.id);
        const card = h('div', {className:'card'});
        card.appendChild(h('div', {className:'card-header'}, h('h3', {className:'card-title'}, L(step, 'title')),
            h('span', {className:`difficulty-tag ${status==='solved'?'easy':status==='attempted'?'medium':'hard'}`}, status==='solved'?t('solved'):status==='attempted'?t('attempted'):t('notStarted'))));
        card.appendChild(h('p', {style:'margin-bottom:12px;line-height:1.7'}, L(step, 'content')));
        const bn = beginnerNoteEl(step);
        if (bn) card.appendChild(bn);
        card.appendChild(h('div', {className:'design-step'}, h('h4', null, currentLang === 'ja' ? 'Opsの役割' : 'Ops Role'), h('p', {style:'color:var(--text-muted)'}, L(step, 'opsRole'))));
        card.appendChild(h('div', {className:'btn-group', style:'margin-top:12px'},
            h('button', {className:'btn btn-sm '+(status==='attempted'?'btn-primary':'btn-secondary'), onClick:() => {setStatus(step.id,'attempted');navigateTo('trade-lifecycle');}}, t('attempted')),
            h('button', {className:'btn btn-sm '+(status==='solved'?'btn-success':'btn-secondary'), onClick:() => {setStatus(step.id,'solved');navigateTo('trade-lifecycle');}}, t('solved')),
        ));
        content.appendChild(card);
    });
}

// --- Market Knowledge ---
function renderMarketKnowledge(){
    content.innerHTML = '';
    content.appendChild(h('div', {className:'page-header'}, h('h2', null, t('marketTitle')), h('p', null, t('marketDesc'))));
    marketTopics.forEach(topic => {
        const status = getStatus(topic.id);
        const card = h('div', {className:'card'});
        card.appendChild(h('div', {className:'card-header'}, h('h3', {className:'card-title'}, L(topic, 'title')),
            h('span', {className:`difficulty-tag ${status==='solved'?'easy':status==='attempted'?'medium':'hard'}`}, status==='solved'?t('solved'):status==='attempted'?t('attempted'):t('notStarted'))));
        card.appendChild(h('p', {style:'line-height:1.7'}, L(topic, 'content')));
        const bn = beginnerNoteEl(topic);
        if (bn) card.appendChild(bn);
        card.appendChild(h('div', {className:'btn-group', style:'margin-top:12px'},
            h('button', {className:'btn btn-sm '+(status==='attempted'?'btn-primary':'btn-secondary'), onClick:() => {setStatus(topic.id,'attempted');navigateTo('market-knowledge');}}, t('attempted')),
            h('button', {className:'btn btn-sm '+(status==='solved'?'btn-success':'btn-secondary'), onClick:() => {setStatus(topic.id,'solved');navigateTo('market-knowledge');}}, t('solved')),
        ));
        content.appendChild(card);
    });
}

// --- Behavioral ---
function renderBehavioral(params){
    if (params && params.view === 'detail'){ renderBehavioralDetail(params.id); return; }
    content.innerHTML = '';
    content.appendChild(h('div', {className:'page-header'}, h('h2', null, t('behavioralTitle')), h('p', null, t('behavioralDesc'))));
    content.appendChild(h('div', {className:'card', style:'margin-bottom:24px'},
        h('h3', {className:'card-title', style:'margin-bottom:10px'}, t('starMethod')),
        h('p', {style:'color:var(--text-muted);font-size:.9rem;line-height:1.7', innerHTML:t('starDesc')})));
    const list = h('div', {className:'problem-list'});
    behavioralQuestions.forEach(q => {
        const status = getStatus(q.id);
        list.appendChild(h('div', {className:'problem-item', onClick:() => navigateTo('behavioral', {view:'detail', id:q.id})},
            h('span', {className:'status-dot '+status}), h('span', {className:'title'}, L(q, 'question'))));
    });
    content.appendChild(list);
}
function renderBehavioralDetail(qId){
    const q = behavioralQuestions.find(x => x.id === qId); if (!q) return;
    const status = getStatus(q.id); const progress = loadProgress();
    content.innerHTML = '';
    content.appendChild(h('div', {className:'breadcrumb'}, h('a', {href:'#', onClick:e => {e.preventDefault();navigateTo('behavioral');}}, t('behavioral')), ' / ' + L(q, 'question')));
    content.appendChild(h('h2', {style:'margin-bottom:8px;font-size:1.3rem'}, L(q, 'question')));
    content.appendChild(h('div', {className:'btn-group', style:'margin-bottom:16px'},
        h('button', {className:'btn btn-sm '+(status==='not-started'?'btn-secondary':'btn-secondary'), onClick:() => {setStatus(q.id,'not-started');renderBehavioralDetail(q.id);}}, t('notPrepared')),
        h('button', {className:'btn btn-sm '+(status==='attempted'?'btn-primary':'btn-secondary'), onClick:() => {setStatus(q.id,'attempted');renderBehavioralDetail(q.id);}}, t('drafting')),
        h('button', {className:'btn btn-sm '+(status==='solved'?'btn-success':'btn-secondary'), onClick:() => {setStatus(q.id,'solved');renderBehavioralDetail(q.id);}}, t('ready'))));
    content.appendChild(h('div', {className:'card', style:'margin-bottom:20px'}, h('p', {style:'color:var(--text-muted);font-size:.9rem'}, L(q, 'tips'))));
    content.appendChild(h('div', {className:'section-title'}, t('yourStarAnswer')));
    const sp = currentLang === 'ja' && q.starPromptJa ? q.starPromptJa : q.starPrompt;
    const fields = [{key:'S',label:t('situation'),prompt:sp.s,ph:t('writeSituation')},{key:'T',label:t('task'),prompt:sp.t,ph:t('writeTask')},{key:'A',label:t('action'),prompt:sp.a,ph:t('writeAction')},{key:'R',label:t('result'),prompt:sp.r,ph:t('writeResult')}];
    const tmpl = h('div', {className:'star-template'});
    fields.forEach(f => {
        const sk = `star-${q.id}-${f.key}`; const saved = progress[sk] || '';
        const sec = h('div', {className:'star-section'}, h('label', null, f.key+' - '+f.label), h('p', {style:'font-size:.8rem;color:var(--text-muted);margin-bottom:6px'}, f.prompt));
        const ta = h('textarea', {placeholder:f.ph}); ta.value = saved;
        ta.addEventListener('input', () => { const d = loadProgress(); d[sk] = ta.value; saveProgress(d); });
        sec.appendChild(ta); tmpl.appendChild(sec);
    });
    content.appendChild(tmpl);
}

// --- Technical Q&A ---
function renderTechnical(){
    content.innerHTML = '';
    content.appendChild(h('div', {className:'page-header'}, h('h2', null, t('technicalTitle')), h('p', null, t('technicalDesc'))));
    technicalQuestions.forEach(q => {
        const status = getStatus(q.id);
        const card = h('div', {className:'card'});
        card.appendChild(h('div', {className:'card-header'}, h('h4', null, L(q, 'question')),
            h('span', {className:`difficulty-tag ${status==='solved'?'easy':'hard'}`}, status==='solved'?t('solved'):t('notStarted'))));
        const bn = beginnerNoteEl(q);
        if (bn) card.appendChild(bn);
        const ansTitle = h('div', {className:'collapsible', style:'margin-top:10px;color:var(--accent)', onClick:() => {ansTitle.classList.toggle('open');ansBody.classList.toggle('show');}}, t('showAnswer'));
        const ansBody = h('div', {className:'collapsible-content'}, h('div', {className:'design-step', style:'border-left-color:var(--green)'}, h('p', {style:'line-height:1.7'}, L(q, 'answer'))));
        card.appendChild(ansTitle); card.appendChild(ansBody);
        card.appendChild(h('div', {className:'btn-group', style:'margin-top:12px'},
            h('button', {className:'btn btn-sm '+(status==='attempted'?'btn-primary':'btn-secondary'), onClick:() => {setStatus(q.id,'attempted');navigateTo('technical');}}, t('attempted')),
            h('button', {className:'btn btn-sm '+(status==='solved'?'btn-success':'btn-secondary'), onClick:() => {setStatus(q.id,'solved');navigateTo('technical');}}, t('solved'))));
        content.appendChild(card);
    });
}

// --- Case Studies ---
function renderCaseStudy(params){
    if (params && params.view === 'detail'){ renderCaseDetail(params.id); return; }
    content.innerHTML = '';
    content.appendChild(h('div', {className:'page-header'}, h('h2', null, t('caseTitle')), h('p', null, t('caseDesc'))));
    const list = h('div', {className:'problem-list'});
    caseStudies.forEach(cs => {
        const status = getStatus(cs.id);
        list.appendChild(h('div', {className:'problem-item', onClick:() => navigateTo('case-study', {view:'detail', id:cs.id})},
            h('span', {className:'status-dot '+status}), h('span', {className:'title'}, L(cs, 'title'))));
    });
    content.appendChild(list);
}
function renderCaseDetail(csId){
    const cs = caseStudies.find(x => x.id === csId); if (!cs) return;
    const status = getStatus(cs.id);
    content.innerHTML = '';
    content.appendChild(h('div', {className:'breadcrumb'}, h('a', {href:'#', onClick:e => {e.preventDefault();navigateTo('case-study');}}, t('caseStudy')), ' / ' + L(cs, 'title')));
    content.appendChild(h('h2', {style:'margin-bottom:8px'}, L(cs, 'title')));
    content.appendChild(h('div', {className:'description', style:'margin-bottom:20px'}, L(cs, 'scenario')));
    content.appendChild(h('div', {className:'btn-group', style:'margin-bottom:20px'},
        h('button', {className:'btn btn-sm '+(status==='attempted'?'btn-primary':'btn-secondary'), onClick:() => {setStatus(cs.id,'attempted');renderCaseDetail(cs.id);}}, t('attempted')),
        h('button', {className:'btn btn-sm '+(status==='solved'?'btn-success':'btn-secondary'), onClick:() => {setStatus(cs.id,'solved');renderCaseDetail(cs.id);}}, t('solved'))));
    cs.framework.forEach(step => {
        const items = currentLang === 'ja' && step.itemsJa ? step.itemsJa : step.items;
        content.appendChild(h('div', {className:'design-step'}, h('h4', null, currentLang === 'ja' && step.stepJa ? step.stepJa : step.step), h('ul', null, ...items.map(i => h('li', null, i)))));
    });
    // Notes
    content.appendChild(h('div', {className:'section-title', style:'margin-top:24px'}, t('yourNotes')));
    const saved = loadProgress()['notes-'+cs.id] || '';
    const ta = h('textarea', {style:'width:100%;min-height:150px;background:var(--bg-input);color:var(--text);border:1px solid var(--border);border-radius:8px;padding:14px;font-family:inherit;font-size:.9rem;resize:vertical;outline:none', placeholder:t('notesPlaceholder')});
    ta.value = saved; ta.addEventListener('input', () => { const d = loadProgress(); d['notes-'+cs.id] = ta.value; saveProgress(d); });
    content.appendChild(ta);
}

// --- Glossary ---
function renderGlossary(){
    content.innerHTML = '';
    content.appendChild(h('div', {className:'page-header'}, h('h2', null, t('glossaryTitle')), h('p', null, t('glossaryDesc'))));
    glossaryTerms.forEach(g => {
        const card = h('div', {className:'card', style:'padding:14px 20px'});
        const termLine = h('div', {style:'display:flex;gap:8px;align-items:baseline;flex-wrap:wrap;margin-bottom:6px'});
        termLine.appendChild(h('span', {style:'font-weight:700;color:var(--accent);font-size:1rem'}, L(g, 'term')));
        if (g.fullName) termLine.appendChild(h('span', {style:'color:var(--text-muted);font-size:.8rem'}, '= ' + g.fullName));
        card.appendChild(termLine);
        card.appendChild(h('p', {style:'color:var(--text);font-size:.9rem;line-height:1.6;margin-bottom:6px'}, L(g, 'def')));
        const bd = beginnerDefEl(g);
        if (bd) card.appendChild(bd);
        const usageText = L(g, 'usage');
        if (usageText) card.appendChild(h('div', {style:'margin-top:8px;padding:8px 12px;background:var(--bg-main);border-radius:6px;font-size:.8rem;color:var(--text-muted);line-height:1.5'},
            h('span', {style:'font-weight:600;color:var(--accent)'}, currentLang === 'ja' ? 'Usage: ' : 'Usage: '), usageText));
        content.appendChild(card);
    });
}

// --- Timer ---
let timerInterval = null, timerSeconds = 0, timerRunning = false, timerTotal = 0;
function renderTimer(){
    content.innerHTML = '';
    content.appendChild(h('div', {className:'page-header'}, h('h2', null, t('timer')), h('p', null, t('simulateInterview'))));
    const display = h('div', {className:'timer-display'});
    display.appendChild(h('div', {className:'timer-time', id:'timer-display'}, formatTime(timerSeconds)));
    const controls = h('div', {className:'timer-controls'});
    controls.appendChild(h('button', {className:'btn btn-primary', onClick:() => { if (!timerRunning && timerSeconds > 0){ timerRunning = true; timerTotal = timerSeconds; timerInterval = setInterval(() => { timerSeconds--; updateTimerDisplay(); if (timerSeconds <= 0){ clearInterval(timerInterval); timerRunning = false; timerSeconds = 0; updateTimerDisplay(); alert(t('timeUp')); } }, 1000); updateTimerDisplay(); } }}, t('start')));
    controls.appendChild(h('button', {className:'btn btn-secondary', onClick:() => { if (timerRunning){ clearInterval(timerInterval); timerRunning = false; updateTimerDisplay(); } }}, t('pause')));
    controls.appendChild(h('button', {className:'btn btn-danger', onClick:() => { clearInterval(timerInterval); timerRunning = false; timerSeconds = 0; timerTotal = 0; updateTimerDisplay(); }}, t('reset')));
    display.appendChild(controls);
    display.appendChild(h('div', {className:'timer-presets'},
        ...[{l:'30 min',s:1800},{l:'45 min',s:2700},{l:'60 min',s:3600}].map(p =>
            h('button', {className:'btn btn-secondary btn-sm', onClick:() => { if (!timerRunning){ timerSeconds = p.s; timerTotal = p.s; updateTimerDisplay(); } }}, p.l))));
    content.appendChild(display);
    const tips = t('oaTipsList');
    content.appendChild(h('div', {className:'card', style:'margin-top:24px'},
        h('h3', {className:'card-title', style:'margin-bottom:10px'}, t('oaTips')),
        h('ul', {style:'padding-left:20px;color:var(--text-muted);line-height:1.8'}, ...tips.map(tip => h('li', null, tip)))));

    // Reverse Questions
    const rqTitle = t('reverseQTitle');
    const rqDesc = t('reverseQDesc');
    const rqCategories = currentLang === 'ja' ? [
        {cat:'仕事内容について（素直に聞く）', qs:[
            '1日の仕事の流れを教えていただけますか？',
            '新卒で入社した場合、最初はどんな業務から始めることが多いですか？',
            'チームの雰囲気や働き方について教えてください',
        ]},
        {cat:'成長について（学ぶ姿勢を見せる）', qs:[
            '入社前に勉強しておくと役立つことはありますか？',
            '新入社員の研修制度について教えていただけますか？',
            'この仕事で一番やりがいを感じるのはどんな時ですか？',
        ]},
    ] : [
        {cat:'About the Work (ask naturally)', qs:[
            'What does a typical day look like in this role?',
            'What kind of tasks would a new graduate start with?',
            'Can you tell me about the team culture and working style?',
        ]},
        {cat:'Growth (show eagerness to learn)', qs:[
            'Is there anything you would recommend studying before joining?',
            'Can you tell me about the training program for new joiners?',
            'What do you find most rewarding about this work?',
        ]},
    ];
    const rqCard = h('div', {className:'card', style:'margin-top:24px'},
        h('h3', {className:'card-title', style:'margin-bottom:6px'}, rqTitle),
        h('p', {style:'color:var(--text-muted);font-size:.85rem;margin-bottom:14px'}, rqDesc));
    rqCategories.forEach(cat => {
        rqCard.appendChild(h('h4', {style:'color:var(--accent);margin:12px 0 6px;font-size:.95rem'}, cat.cat));
        rqCard.appendChild(h('ul', {style:'padding-left:20px;color:var(--text-muted);line-height:1.8;margin-bottom:8px'}, ...cat.qs.map(q => h('li', null, q))));
    });
    content.appendChild(rqCard);

    // Recent Industry Topics
    const rtTitle = t('recentTopicsTitle');
    const rtDesc = t('recentTopicsDesc');
    const recentTopics = currentLang === 'ja' ? [
        {topic:'T+1決済（米国）', desc:'2024年5月に米国株式がT+2からT+1に移行。オペレーションの処理時間が半減し、自動化の重要性が増大。面接で触れると「業界動向を追っている」印象を与えられる。'},
        {topic:'AI・自動化とオペレーション', desc:'RPAやAIによる照合自動化、異常検知、自然言語処理によるコンファメーション読み取りなどが進展。「テクノロジーでOpsをどう変えるか」は頻出テーマ。'},
        {topic:'オペレーショナルレジリエンス', desc:'コロナ禍以降、業務継続性（BCP）とサイバーセキュリティへの注目が高まった。規制当局も金融機関にレジリエンス計画を義務化する流れ。'},
        {topic:'ESG・サステナブルファイナンス', desc:'環境・社会・ガバナンスに配慮した投資が拡大。Opsはグリーンボンドの発行処理やESGデータ管理で関わる。新しい分野として知っておくと良い。'},
        {topic:'デジタルアセットと分散台帳', desc:'暗号資産やトークン化証券など新しい資産クラスが登場。決済の即時化（T+0）の可能性や、ブロックチェーンを使った取引処理が議論されている。'},
    ] : [
        {topic:'T+1 Settlement (US)', desc:'US equities moved from T+2 to T+1 in May 2024. Processing time halved, making automation critical. Mentioning this in interviews shows you follow industry developments.'},
        {topic:'AI & Automation in Operations', desc:'RPA, AI-powered reconciliation, anomaly detection, NLP for confirmation matching. "How would you use technology to improve Ops?" is a common interview theme.'},
        {topic:'Operational Resilience', desc:'Post-COVID, business continuity and cybersecurity became top priorities. Regulators now require financial institutions to have detailed resilience plans.'},
        {topic:'ESG & Sustainable Finance', desc:'Environmentally and socially responsible investing is growing fast. Ops handles green bond processing and ESG data management. Good to be aware of this emerging area.'},
        {topic:'Digital Assets & DLT', desc:'Crypto assets and tokenized securities are emerging asset classes. Blockchain-based settlement (T+0) is being explored. Shows awareness of the future of Operations.'},
    ];
    const rtCard = h('div', {className:'card', style:'margin-top:24px'},
        h('h3', {className:'card-title', style:'margin-bottom:6px'}, rtTitle),
        h('p', {style:'color:var(--text-muted);font-size:.85rem;margin-bottom:14px'}, rtDesc));
    recentTopics.forEach(rt => {
        rtCard.appendChild(h('div', {style:'margin-bottom:12px'},
            h('h4', {style:'color:var(--accent);font-size:.95rem;margin-bottom:4px'}, rt.topic),
            h('p', {style:'color:var(--text-muted);font-size:.85rem;line-height:1.6'}, rt.desc)));
    });
    content.appendChild(rtCard);

    updateTimerDisplay();
}
function formatTime(s){ const m = Math.floor(s / 60); const sec = s % 60; return String(m).padStart(2,'0') + ':' + String(sec).padStart(2,'0'); }
function updateTimerDisplay(){ const el = document.getElementById('timer-display'); if (!el) return; el.textContent = formatTime(timerSeconds); el.className = 'timer-time'; if (timerTotal > 0){ const r = timerSeconds / timerTotal; if (r <= 0.1) el.classList.add('danger'); else if (r <= 0.25) el.classList.add('warning'); } }

// --- Init ---
updateNavLabels();
navigateTo('dashboard');
