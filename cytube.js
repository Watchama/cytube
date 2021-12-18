(() => {
    'use strict';

    const mikoCough = document.createElement("audio");
    mikoCough.setAttribute('src', 'https://files.catbox.moe/mp0beu.mp3');
    mikoCough.volume = 0.5;

    // Mentions

    // navbar elem
    const navbarElem = Array.from(document.getElementById("nav-collapsible").children)[0];

    const mentionElem = document.createElement("li");
    mentionElem.classList = "dropdown";
    mentionElem.id = "mention-dropdown";

    const mentionTitle = document.createElement("a");
    mentionTitle.classList = "dropdown-toggle";
    mentionTitle.href = "#";
    mentionTitle.setAttribute("data-toggle", "dropdown");
    mentionTitle.setAttribute("aria-expanded", "false");
    mentionTitle.innerHTML = '✉️';
    mentionTitle.onclick = () => document.getElementById("mention-dropdown").firstChild.setAttribute("style", "none");

    const ddMenuElem = document.createElement("ul");
    ddMenuElem.classList = "dropdown-menu";
    const mentionContainer = document.createElement("div");
    mentionContainer.id = "mentionContainer";
    ddMenuElem.appendChild(mentionContainer);

    const addMention = (user, message, meta, time) => {
        document.getElementById("mention-dropdown").firstChild.setAttribute("style", "text-shadow: #0ff 0 0 6px");
        const mentionLiElem = document.createElement("li");
        mentionLiElem.innerHTML = `<div class="pin-message">${user}<br>${message}</div><button class="pin-close">X</button>`;
        mentionLiElem.lastChild.onclick = () => mentionLiElem.remove();
        mentionContainer.appendChild(mentionLiElem);
    }

    navbarElem.appendChild(mentionElem);
    mentionElem.appendChild(mentionTitle);
    mentionElem.appendChild(ddMenuElem);


    // channels


    // Filter style 1
    const filter1css = `.filter1css {display:none !important}`;
    const filter1style = document.createElement('style');
    if (filter1style.styleSheet) filter1style.styleSheet.cssText = filter1css;
    else filter1style.appendChild(document.createTextNode(filter1css));
    document.getElementsByTagName('head')[0].appendChild(filter1style);
    filter1style.disabled = true;
    // Filter style 2
    const filter2css = `.filter2css {display:none !important}`;
    const filter2style = document.createElement('style');
    if (filter2style.styleSheet) filter2style.styleSheet.cssText = filter2css;
    else filter2style.appendChild(document.createTextNode(filter2css));
    document.getElementsByTagName('head')[0].appendChild(filter2style);
    filter2style.disabled = true;
    // Filter style 3
    const filter3css = `.filter3css {display:none !important}`;
    const filter3style = document.createElement('style');
    if (filter3style.styleSheet) filter3style.styleSheet.cssText = filter3css;
    else filter3style.appendChild(document.createTextNode(filter3css));
    document.getElementsByTagName('head')[0].appendChild(filter3style);
    filter3style.disabled = true;
    // Filter style 4
    const filter4css = `.filter4css {display:none !important}`;
    const filter4style = document.createElement('style');
    if (filter4style.styleSheet) filter4style.styleSheet.cssText = filter4css;
    else filter4style.appendChild(document.createTextNode(filter4css));
    document.getElementsByTagName('head')[0].appendChild(filter4style);
    filter4style.disabled = true;

    let filterValue = '1';
    let filter2color = '#f44';
    let filter3color = '#8f8';
    let filter4color = '#fff';

    // --- Flarepeek mark ---


    console.image = function(url, size = 100) {
        var image = new Image();
        image.onload = function() {
            var style = [
                'font-size: 1px;',
                'padding: ' + this.height/100*size + 'px ' + this.width/100*size + 'px;',
                'background: url('+ url +') no-repeat;',
                'background-size: contain;'
            ].join(' ');
            console.log('%c ', style);
        }
        image.src = url;
    }
    console.image('https://cdn.discordapp.com/attachments/376819467688345612/792349780890222592/flarepeek.png', 56);

    
    // --- Oshi mark data ---


    const holodata = {
        Sora: '🐻💿', AZKi: '⚒️', Roboco: '🤖', Miko: '🌸', Suisei: '☄️',
        Matsuri: '🏮', Mel: '🌟', Haato: '❤️‍🔥', Aki: '🍎', Chris: '🌰',
        Aqua: '⚓️', Choco: '💋', Ayame: '👿', Shion: '🌙', Subaru: '🚑',
        Fubuki: '🌽', Mio: '🌲', Okayu: '🍙', Korone: '🥐',
        Flare: '🔥', Noel: '⚔️', Marine: '🏴‍☠️', Pekora: '👯', Rushia: '🦋',
        Kanata: '💫', Coco: '🐉', Watame: '🐏', Towa: '👾', Luna: '🍬',
        Lamy: '☃️', Nene: '🥟', Botan: '♌', Polka: '🎪',
        Laplus: '🛸💜', Lui: '🥀', Koyori: '🧪', Chloe: '🎣', Iroha: '🍃',
        Risu: '🐿️', Moona: '🔮', Iofi: '🎨', Ollie: '🧟‍♀️', Anya: '🍂', Reine: '🦚',
        Yogiri: '🍼', Miyabi: '🌺', Izuru: '🎸', Aruran: '🍕', Rikka: '⚙️',
        Kira: '💙', Suzaku: '💊', Astel: '🎭', Temma: '🦔💨', Roberu: '🍷',
        Shien: '🟣', Oga: '🐃', Kaoru: '💅',
        DD: 'ඞ', Eugene: '👓', ABE: '🔞', Cunny: '😭',
        Ran: '🐻🍄', Chima: '🐹', Pmaru: '🍳'
    }

    
    // --- kororeps ---


    const kanjiData = {
        n5: [{jp:"日",on:"ニチ, ジツ",kun:"ひ, -び, -か",en:"day, sun"},{jp:"一",on:"イチ",kun:"ひと(つ)",en:"one"},{jp:"国",on:"コク",kun:"くに",en:"country"},{jp:"人",on:"ジン、 ニン",kun:"ひと",en:"person"},{jp:"年",on:"ネン",kun:"とし",en:"year"},{jp:"大",on:"ダイ、 タイ",kun:"おお(きい)",en:"large, big"},{jp:"十",on:"ジュウ",kun:"とお、 と",en:"ten"},{jp:"二",on:"ニ、 ジ",kun:"ふた(つ)、 ふたたび ",en:"two"},{jp:"本",on:"ホン",kun:"もと",en:"book, present, true"},{jp:"中",on:"チュウ",kun:"なか、 うち、 あた(る)",en:"in, inside, middle, mean, center"},{jp:"長",on:"チョウ",kun:"なが(い)、 おさ ",en:"long, leader, superior, senior"},{jp:"出",on:"シュツ、 スイ",kun:"で(る)、 だ(す)、 い(でる)",en:"exit, leave, go out"},{jp:"三",on:"サン",kun:"み(つ)",en:"three"},{jp:"時",on:"ジ",kun:"とき、 -どき",en:"time, hour"},{jp:"行",on:"コウ、 ギョウ、 アン",kun:"い(く)、 ゆ(く)、 おこな(う)",en:"going, journey, carry out, line, row"},{jp:"見",on:"ケン",kun:"み(る)、 み(せる)",en:"see, hopes, chances, idea, opinion, look at, visible"},{jp:"月",on:"ゲツ、 ガツ",kun:"つき",en:"month, moon"},{jp:"分",on:"ブン、 フン、 ブ",kun:"わ(ける)",en:"part, minute of time, understand"},{jp:"後",on:"ゴ、 コウ",kun:"のち、 うし(ろ)、 あと",en:"behind, back, later"},{jp:"前",on:"ゼン",kun:"まえ",en:"in front, before"},{jp:"生",on:"セイ、 ショウ",kun:"い(きる)、 う(む)、 お(う)、 は(える)、 なま",en:"life, genuine, birth"},{jp:"五",on:"ゴ",kun:"いつ(つ)",en:"five"},{jp:"間",on:"カン、 ケン",kun:"あいだ、 ま、 あい ",en:"interval, space"},{jp:"上",on:"ジョウ、 ショウ、 シャン",kun:"うえ、 うわ-、 かみ、 あ(げる)、 のぼ(る)、 たてまつ(る)",en:"above, up"},{jp:"東",on:"トウ",kun:"ひがし",en:"east"},{jp:"四",on:"シ",kun:"よ(つ)、 よん",en:"four"},{jp:"今",on:"コン、 キン",kun:"いま",en:"now; the present"},{jp:"金",on:"キン、 コン、 ゴン",kun:"かね、 かな-、 -がね",en:"gold"},{jp:"九",on:"キュウ、 ク",kun:"ここの(つ)",en:"nine"},{jp:"入",on:"ニュウ",kun:"い(る)、はい(る)",en:"enter, insert"},{jp:"学",on:"ガク",kun:"まな(ぶ)",en:"study, learning, science"},{jp:"高",on:"コウ",kun:"たか(い)",en:"tall, high, expensive"},{jp:"円",on:"エン",kun:"まる(い)",en:"circle, yen, round"},{jp:"子",on:"シ、 ス、 ツ",kun:"こ、 ね",en:"child"},{jp:"外",on:"ガイ、 ゲ",kun:"そと、 ほか、 はず(す)、 と-",en:"outside"},{jp:"八",on:"ハチ",kun:"や(つ)、 よう",en:"eight"},{jp:"六",on:"ロク",kun:"む(つ)、 むい",en:"six"},{jp:"下",on:"カ、 ゲ",kun:"した、 しも、 もと、 さ(げる)、 くだ(る)、 お(ろす)",en:"below, down, descend, give, low, inferior"},{jp:"来",on:"ライ、 タイ",kun:"く.る、 きた.る、 き、 こ ",en:"come, due, next, cause, become"},{jp:"気",on:"キ、 ケ",kun:"いき",en:"spirit, mind, air, atmosphere, mood"},{jp:"小",on:"ショウ",kun:" ちい(さい)、 こ-、 お-、 さ-",en:"little, small"},{jp:"七",on:"シチ",kun:"なな(つ)、 なの",en:"seven"},{jp:"山",on:"サン、 セン",kun:"やま",en:"mountain"},{jp:"話",on:"ワ",kun:"はな(す)、 はなし ",en:"tale, talk"},{jp:"女",on:"ジョ",kun:"おんな、 め",en:"woman, female"},{jp:"北",on:"ホク",kun:"きた",en:"north"},{jp:"午",on:"ゴ",kun:"うま",en:"noon"},{jp:"百",on:"ヒャク、 ビャク",kun:"もも",en:"hundred"},{jp:"書",on:"ショ",kun:"か(く)",en:"write"},{jp:"先",on:"セン",kun:"さき、 ま(ず)",en:"before, ahead, previous, future"},{jp:"名",on:"メイ、 ミョウ",kun:"な",en:"name, noted, distinguished, reputation"},{jp:"川",on:"セン",kun:"かわ",en:"river, stream"},{jp:"千",on:"セン",kun:"ち",en:"thousand"},{jp:"水",on:"スイ",kun:"みず",en:"water"},{jp:"半",on:"ハン",kun:"なか(ば)",en:"half, middle, odd number, semi-"},{jp:"男",on:"ダン、 ナン",kun:"おとこ、 お",en:"male; man"},{jp:"西",on:"セイ、 サイ",kun:"にし",en:"west"},{jp:"電",on:"デン",kun:"",en:"electricity"},{jp:"校",on:"コウ",kun:"",en:"school, exam"},{jp:"語",on:"ゴ",kun:"かた(る)",en:"word, speech, language"},{jp:"土",on:"ド、 ト",kun:"つち",en:"soil, earth, ground"},{jp:"木",on:"ボク、 モク",kun:"き、 こ-",en:"tree, wood"},{jp:"聞",on:"ブン、 モン",kun:"き(く)",en:"to hear; to listen; to ask"},{jp:"食",on:"ショク、 ジキ",kun:" く(う)、 た(べる)、 は(む)",en:"eat, food"},{jp:"車",on:"シャ",kun:"くるま",en:"car, wheel"},{jp:"何",on:"カ",kun:"なに、 なん",en:"what"},{jp:"南",on:"ナン、 ナ",kun:"みなみ",en:"south"},{jp:"万",on:"マン、 バン",kun:"",en:"ten thousand"},{jp:"毎",on:"マイ",kun:"ごと(に)",en:"every"},{jp:"白",on:"ハク、 ビャク",kun:"しろ(い)",en:"white"},{jp:"天",on:"テン",kun:"あまつ",en:"heavens, sky, imperial"},{jp:"母",on:"ボ",kun:"はは、 かあ",en:"mother"},{jp:"火",on:"カ",kun:"ひ、 -び、 ほ-",en:"fire"},{jp:"右",on:"ウ、 ユウ",kun:"みぎ",en:"right"},{jp:"読",on:"ドク、 トク、 トウ",kun:"よ(む)",en:"to read"},{jp:"友",on:"ユウ",kun:"とも",en:"friend"},{jp:"左",on:"サ、 シャ",kun:"ひだり",en:"left"},{jp:"休",on:"キュウ",kun:"やす(む)",en:"rest, day off, retire, sleep"},{jp:"父",on:"フ",kun:"ちち、 とう",en:"father"},{jp:"雨",on:"ウ",kun:"あめ、 あま",en:"rain"}],
        n4: [{ jp: "会", en: "meeting; meet" }, { jp: "同", en: "same, agree, equal" }, { jp: "事", en: "matter, thing, fact, business, reason, possibly" }, { jp: "自", en: "oneself" }, { jp: "社", en: "company, firm, office, association, shrine" }, { jp: "発", en: "departure, discharge, emit, start from" }, { jp: "者", en: "someone, person" }, { jp: "地", en: "ground, earth" }, { jp: "業", en: "business, vocation, arts, performance" }, { jp: "方", en: "direction, person, alternative" }, { jp: "新", en: "new" }, { jp: "場", en: "location, place" }, { jp: "員", en: "employee, member, number, the one in charge" }, { jp: "立", en: "stand up, rise" }, { jp: "開", en: "open, unfold, unseal" }, { jp: "手", en: "hand" }, { jp: "力", en: "power, strength, strong, strain, bear up, exert" }, { jp: "問", en: "question, ask, problem" }, { jp: "代", en: "substitute, change, convert, replace, period" }, { jp: "明", en: "bright, light" }, { jp: "動", en: "move, motion, change" }, { jp: "京", en: "capital" }, { jp: "目", en: "eye, class, look, insight, experience" }, { jp: "通", en: "traffic, pass through, avenue, commute" }, { jp: "言", en: "say, word" }, { jp: "理", en: "logic, arrangement, reason, justice, truth" }, { jp: "体", en: "body, substance, object, reality" }, { jp: "田", en: "rice field, rice paddy" }, { jp: "主", en: "lord, chief, master, main thing, principal" }, { jp: "題", en: "topic, subject" }, { jp: "意", en: "idea, mind, heart, taste, thought" }, { jp: "不", en: "negative, non-, bad" }, { jp: "作", en: "make, production, prepare, build" }, { jp: "用", en: "utilize, business, service, use, employ" }, { jp: "度", en: "degrees, occurrence, time, counter for occurrences" }, { jp: "強", en: "strong" }, { jp: "公", en: "public, prince, official, governmental" }, { jp: "持", en: "hold, have" }, { jp: "野", en: "plains, field, rustic, civilian life" }, { jp: "以", en: "by means of, because, in view of, compared with" }, { jp: "思", en: "think" }, { jp: "家", en: "house, home, family, professional, expert" }, { jp: "世", en: "generation, world, society, public" }, { jp: "多", en: "many, frequent, much" }, { jp: "正", en: "correct, justice, righteous" }, { jp: "安", en: "safe, peaceful, cheap" }, { jp: "院", en: "institution, temple, mansion, school" }, { jp: "心", en: "heart, mind, spirit" }, { jp: "界", en: "world, boundary" }, { jp: "教", en: "teach, faith, doctrine" }, { jp: "文", en: "sentence, literature, style, art" }, { jp: "元", en: "beginning, former time, origin" }, { jp: "重", en: "heavy, important, esteem, respect" }, { jp: "近", en: "near, early, akin, tantamount" }, { jp: "考", en: "consider, think over" }, { jp: "画", en: "brush-stroke, picture" }, { jp: "海", en: "sea, ocean" }, { jp: "売", en: "sell" }, { jp: "知", en: "know, wisdom" }, { jp: "道", en: "road-way, street, district, journey, course" }, { jp: "集", en: "gather, meet" }, { jp: "別", en: "separate, branch off, diverge" }, { jp: "物", en: "thing, object, matter" }, { jp: "使", en: "use, order, messenger, ambassador" }, { jp: "品", en: "goods, refinement, dignity, article" }, { jp: "計", en: "plot, plan, scheme, measure" }, { jp: "死", en: "death, die" }, { jp: "特", en: "special" }, { jp: "私", en: "private, I, me" }, { jp: "始", en: "commence, begin" }, { jp: "朝", en: "morning" }, { jp: "運", en: "carry, luck, destiny, fate, transport" }, { jp: "終", en: "end, finish" }, { jp: "台", en: "pedestal, a stand, counter for machines and vehicles" }, { jp: "広", en: "wide, broad, spacious" }, { jp: "住", en: "dwell, reside, live, inhabit" }, { jp: "無", en: "nothingness, none, nothing, nil, not" }, { jp: "真", en: "true, reality, Buddhist sect" }, { jp: "有", en: "possess, have, exist, happen" }, { jp: "口", en: "mouth" }, { jp: "少", en: "few, little" }, { jp: "町", en: "town, village, block, street" }, { jp: "料", en: "fee, materials" }, { jp: "工", en: "craft, construction" }, { jp: "建", en: "build" }, { jp: "空", en: "empty, sky, void, vacant, vacuum" }, { jp: "急", en: "hurry, emergency, sudden, steep" }, { jp: "止", en: "stop, halt" }, { jp: "送", en: "escort, send" }, { jp: "切", en: "cut, cutoff, be sharp" }, { jp: "転", en: "revolve, turn around, change" }, { jp: "研", en: "polish, study of, sharpen" }, { jp: "足", en: "leg, foot, be sufficient" }, { jp: "究", en: "research, study" }, { jp: "楽", en: "music, comfort, ease" }, { jp: "起", en: "wake up, get up; rouse" }, { jp: "着", en: "arrive, wear, counter for suits of clothing" }, { jp: "店", en: "store, shop" }, { jp: "病", en: "ill, sick" }, { jp: "質", en: "substance, quality, matter, temperament" }, { jp: "待", en: "wait, depend on" }, { jp: "試", en: "test, try, attempt, experiment" }, { jp: "族", en: "tribe, family" }, { jp: "銀", en: "silver" }, { jp: "早", en: "early, fast" }, { jp: "映", en: "reflect, reflection, projection" }, { jp: "親", en: "parent, intimacy, relative, familiarity" }, { jp: "験", en: "verification, effect, testing" }, { jp: "英", en: "England, English, hero, outstanding" }, { jp: "医", en: "doctor, medicine" }, { jp: "仕", en: "attend, doing, official, serve" }, { jp: "去", en: "gone, past, quit, leave, elapse, eliminate" }, { jp: "味", en: "flavor, taste" }, { jp: "写", en: "copy, be photographed, describe" }, { jp: "字", en: "character, letter, word" }, { jp: "答", en: "solution, answer" }, { jp: "夜", en: "night, evening" }, { jp: "音", en: "sound, noise" }, { jp: "注", en: "pour, irrigate, shed (tears), flow into, concentrate on" }, { jp: "帰", en: "homecoming, arrive at, lead to, result in" }, { jp: "古", en: "old" }, { jp: "歌", en: "song, sing" }, { jp: "買", en: "buy" }, { jp: "悪", en: "bad, evil, wrong" }, { jp: "図", en: "map, drawing, plan, extraordinary" }, { jp: "週", en: "week" }, { jp: "室", en: "room, apartment, chamber, greenhouse, cellar" }, { jp: "歩", en: "walk, counter for steps" }, { jp: "風", en: "wind, air, style, manner" }, { jp: "紙", en: "paper" }, { jp: "黒", en: "black" }, { jp: "花", en: "flower" }, { jp: "春", en: "spring" }, { jp: "赤", en: "red" }, { jp: "青", en: "blue" }, { jp: "館", en: "building, mansion, large building, palace" }, { jp: "屋", en: "roof, house, shop, dealer, seller" }, { jp: "色", en: "color" }, { jp: "走", en: "run" }, { jp: "秋", en: "autumn, fall" }, { jp: "夏", en: "summer" }, { jp: "習", en: "learn" }, { jp: "駅", en: "station" }, { jp: "洋", en: "ocean, sea, foreign, Western style" }, { jp: "旅", en: "trip, travel" }, { jp: "服", en: "clothing, admit, obey" }, { jp: "夕", en: "evening" }, { jp: "借", en: "borrow, rent" }, { jp: "曜", en: "weekday" }, { jp: "飲", en: "drink" }, { jp: "肉", en: "meat" }, { jp: "貸", en: "lend" }, { jp: "堂", en: "public chamber, hall" }, { jp: "鳥", en: "bird, chicken" }, { jp: "飯", en: "meal, rice" }, { jp: "勉", en: "exertion, endeavor, effort" }, { jp: "冬", en: "winter" }, { jp: "昼", en: "daytime, noon" }, { jp: "茶", en: "tea" }, { jp: "弟", en: "younger brother" }, { jp: "牛", en: "cow" }, { jp: "魚", en: "fish" }, { jp: "兄", en: "elder brother" }, { jp: "犬", en: "dog" }, { jp: "妹", en: "younger sister" }, { jp: "姉", en: "elder sister" }, { jp: "漢", en: "China" }], n3: [{ jp: "政", en: "politics, government" }, { jp: "議", en: "deliberation, consultation, debate" }, { jp: "民", en: "people, nation, subjects" }, { jp: "連", en: "take along, lead, join, connect" }, { jp: "対", en: "opposite, even, equal, versus, anti-, compare" }, { jp: "部", en: "section, bureau, dept, class, copy, part, portion" }, { jp: "合", en: "fit, suit, join, 0.1" }, { jp: "市", en: "market, city, town" }, { jp: "内", en: "inside, within, between, among, house, home" }, { jp: "相", en: "inter-, mutual, together, each other, minister of state" }, { jp: "定", en: "determine, fix, establish, decide" }, { jp: "回", en: "-times, round, revolve, counter" }, { jp: "選", en: "elect, select, choose, prefer" }, { jp: "米", en: "rice, USA, meter" }, { jp: "実", en: "reality, truth" }, { jp: "関", en: "connection, barrier, gateway, involve, concerning" }, { jp: "決", en: "decide, fix, agree upon, appoint" }, { jp: "全", en: "whole, entire, all, complete, fulfill" }, { jp: "表", en: "surface, table, chart, diagram" }, { jp: "戦", en: "war, battle, match" }, { jp: "経", en: "longitude, pass thru, expire, warp" }, { jp: "最", en: "utmost, most, extreme" }, { jp: "現", en: "present, existing, actual" }, { jp: "調", en: "tune, tone, meter, prepare, investigate" },
        { jp: "化", en: "change, take the form of, influence, enchant, delude, -ization" }, { jp: "当", en: "hit, right, appropriate" }, { jp: "約", en: "promise, approximately, shrink" }, { jp: "首", en: "neck" }, { jp: "法", en: "method, law, rule, principle, model, system" }, { jp: "性", en: "sex, gender, nature" }, { jp: "的", en: "mark, target, object, adjective ending" }, { jp: "要", en: "need, main point, essence, pivot" }, { jp: "制", en: "system, law, rule" }, { jp: "治", en: "reign, cure, heal" }, { jp: "務", en: "task, duties" }, { jp: "成", en: "turn into, become, get, grow, elapse" }, { jp: "期", en: "period, time, date, term" }, { jp: "取", en: "take, fetch" }, { jp: "都", en: "metropolis, capital" }, { jp: "和", en: "harmony, Japanese style, peace" }, { jp: "機", en: "machine, airplane, opportunity" }, { jp: "平", en: "even, flat, peace" }, { jp: "加", en: "add, addition, increase, join" }, { jp: "受", en: "accept, undergo, answer (phone), take" }, { jp: "続", en: "continue, series, sequel" }, { jp: "進", en: "advance, proceed" }, { jp: "数", en: "number, strength, fate, law, figures" }, { jp: "記", en: "scribe, account, narrative" }, { jp: "初", en: "first time, beginning" }, { jp: "指", en: "finger, point to, indicate" }, { jp: "権", en: "authority, power, rights" }, { jp: "支", en: "branch, support, sustain" }, { jp: "産", en: "products, bear, give birth" }, { jp: "点", en: "spot, point, mark" }, { jp: "報", en: "report, news, reward" }, { jp: "済", en: "settle, relieve, finish" }, { jp: "活", en: "living" }, { jp: "原", en: "original, primitive, field" }, { jp: "共", en: "together, both, neither" }, { jp: "得", en: "gain, get, find, earn, acquire, can, may, able to, profit" }, { jp: "解", en: "unravel, explanation" }, { jp: "交", en: "mingle, mixing, association, coming &amp; going" }, { jp: "資", en: "assets, resources, capital, funds, data, be conducive to" }, { jp: "予", en: "beforehand, previous, myself, I" }, { jp: "向", en: "facing, beyond" }, { jp: "際", en: "occasion, time" }, { jp: "勝", en: "victory, win" }, { jp: "面", en: "mask, face, features, surface" }, { jp: "告", en: "revelation, inform" }, { jp: "反", en: "anti-" }, { jp: "判", en: "judgement, signature" }, { jp: "認", en: "acknowledge, witness, recognize" }, { jp: "参", en: "going, coming, participate" }, { jp: "利", en: "profit, advantage, benefit" }, { jp: "組", en: "association, assemble, unite" }, { jp: "信", en: "faith, truth, trust" }, { jp: "在", en: "exist, outskirts" }, { jp: "件", en: "affair, case, matter" }, { jp: "側", en: "side, lean, oppose" }, { jp: "任", en: "responsibility, duty" }, { jp: "引", en: "pull, tug, jerk" }, { jp: "求", en: "request, want, demand" }, { jp: "所", en: "place, extent" }, { jp: "次", en: "next, order" }, { jp: "昨", en: "yesterday, previous" }, { jp: "論", en: "argument, discourse" }, { jp: "官", en: "bureaucrat, the government, organ" }, { jp: "増", en: "increase, add" }, { jp: "係", en: "person in charge, connection" }, { jp: "感", en: "emotion, feeling, sensation" }, { jp: "情", en: "feelings, emotion, passion" }, { jp: "投", en: "throw, discard" }, { jp: "示", en: "show, indicate, display" }, { jp: "変", en: "unusual, change, strange" }, { jp: "打", en: "strike, hit, knock" }, { jp: "直", en: "straightaway, honesty, frankness, fix, repair" }, { jp: "両", en: "both" }, { jp: "式", en: "style, ceremony" }, { jp: "確", en: "assurance, firm, confirm" }, { jp: "果", en: "fruit, reward, carry out, achieve, complete" }, { jp: "容", en: "contain, form" }, { jp: "必", en: "invariably, certain, inevitable" }, { jp: "演", en: "performance, act, play, render, stage" }, { jp: "歳", en: "age, year-end" }, { jp: "争", en: "contend, dispute, argue" }, { jp: "談", en: "discuss, talk" }, { jp: "能", en: "ability, talent, skill, capacity" }, { jp: "位", en: "rank, grade, about" }, { jp: "置", en: "placement, put, set, deposit, leave behind" }, { jp: "流", en: "current, flow" }, { jp: "格", en: "status, rank, capacity" }, { jp: "疑", en: "doubt, distrust" }, { jp: "過", en: "overdo, exceed, go beyond" }, { jp: "局", en: "bureau, board, office" }, { jp: "放", en: "set free, release" }, { jp: "常", en: "usual, ordinary, normal" }, { jp: "状", en: "conditions, form, appearance" }, { jp: "球", en: "ball, sphere" }, { jp: "職", en: "post, employment, work" }, { jp: "与", en: "give, award" }, { jp: "供", en: "submit, offer, present, accompany" }, { jp: "役", en: "duty, service, role" }, { jp: "構", en: "posture, build, pretend" }, { jp: "割", en: "proportion, divide, cut, separate" }, { jp: "身", en: "somebody, person" }, { jp: "費", en: "expense, consume" }, { jp: "付", en: "adhere, attach, refer to, append" }, { jp: "由", en: "wherefore, a reason" }, { jp: "説", en: "opinion, theory, explanation" }, { jp: "難", en: "difficult, trouble, accident" }, { jp: "優", en: "tenderness, kind, actor" }, { jp: "夫", en: "husband, man" }, { jp: "収", en: "income, obtain, reap, pay, supply, store" }, { jp: "断", en: "severance, decline, refuse, apologize" }, { jp: "石", en: "stone" }, { jp: "違", en: "difference, differ" }, { jp: "消", en: "extinguish, turn off" }, { jp: "神", en: "gods, mind, soul" }, { jp: "番", en: "turn, number in a series" }, { jp: "規", en: "standard, measure" }, { jp: "術", en: "art, technique, skill, means, trick" }, { jp: "備", en: "equip, provision, preparation" }, { jp: "宅", en: "home, house, residence" }, { jp: "害", en: "harm, injury" }, { jp: "配", en: "distribute, spouse" }, { jp: "警", en: "admonish, commandment" }, { jp: "育", en: "bring up, grow up, raise" }, { jp: "席", en: "seat" }, { jp: "訪", en: "call on, visit" }, { jp: "乗", en: "ride" }, { jp: "残", en: "remainder, balance" }, { jp: "想", en: "concept, think, idea" }, { jp: "声", en: "voice" }, { jp: "助", en: "help, rescue, assist" }, { jp: "労", en: "labor, thank for" }, { jp: "例", en: "example" }, { jp: "然", en: "sort of thing, if so" }, { jp: "限", en: "limit, restrict" }, { jp: "追", en: "chase, drive away" }, { jp: "商", en: "deal; selling; merchant" }, { jp: "葉", en: "leaf, plane, needle, blade, counter for flat things" }, { jp: "伝", en: "transmit, go along, walk along, follow, report, communicate, legend, tradition" }, { jp: "働", en: "work" }, { jp: "形", en: "shape, form, style" }, { jp: "景", en: "scenery, view" }, { jp: "落", en: "fall, drop" }, { jp: "好", en: "fond, pleasing, like something" }, { jp: "退", en: "retreat, withdraw, retire, resign, repel, expel, reject" }, { jp: "頭", en: "head" }, { jp: "負", en: "defeat, negative, minus, assume a responsibility" }, { jp: "渡", en: "transit, ferry, cross" }, { jp: "失", en: "lose, error, fault, disadvantage, loss" }, { jp: "差", en: "distinction, difference, variation" }, { jp: "末", en: "end, close, tip" }, { jp: "守", en: "guard, protect, obey" }, { jp: "若", en: "young" }, { jp: "種", en: "species, kind, class, seed" }, { jp: "美", en: "beauty, beautiful" }, { jp: "命", en: "fate, command" }, { jp: "福", en: "blessing, fortune, luck, wealth" }, { jp: "望", en: "ambition, full moon, hope, desire, aspire to, expect" }, { jp: "非", en: "un-, mistake, negative" }, { jp: "観", en: "outlook, appearance, condition" }, { jp: "察", en: "guess, presume, judge" }, { jp: "段", en: "grade, steps, stairs" }, { jp: "横", en: "sideways, side" }, { jp: "深", en: "deep, heighten" }, { jp: "申", en: "have the honor to" }, { jp: "様", en: "manner, situation, polite suffix" }, { jp: "財", en: "property, money, wealth, assets" }, { jp: "港", en: "harbor, port" }, { jp: "識", en: "know" }, { jp: "呼", en: "call, invite" }, { jp: "達", en: "accomplished, reach, arrive, attain" }, { jp: "良", en: "good" }, { jp: "阪", en: "heights, slope" }, { jp: "候", en: "climate, season, weather" }, { jp: "程", en: "extent, degree" }, { jp: "満", en: "full, fullness, enough, satisfy" }, { jp: "敗", en: "failure, defeat" }, { jp: "値", en: "price, cost, value" }, { jp: "突", en: "stab, protruding, thrust" }, { jp: "光", en: "ray, light" }, { jp: "路", en: "path, route, road" }, { jp: "科", en: "department, course, section" }, { jp: "積", en: "volume, contents, pile up, stack" }, { jp: "他", en: "other, another" }, { jp: "処", en: "dispose, manage, deal with" }, { jp: "太", en: "plump, thick, big around" }, { jp: "客", en: "guest, visitor, customer" }, { jp: "否", en: "negate, no, decline" }, { jp: "師", en: "expert, teacher, master" }, { jp: "登", en: "ascend, climb up" }, { jp: "易", en: "easy, ready to, simple" }, { jp: "速", en: "quick, fast" }, { jp: "存", en: "exist, be aware of" }, { jp: " 飛", en: "fly" }, { jp: "殺", en: "kill, murder" }, { jp: "号", en: "number, item" }, { jp: "単", en: "simple, single" }, { jp: "座", en: "squat, seat, sit" }, { jp: "破", en: "rip, tear, break" }, { jp: "除", en: "exclude, remove" }, { jp: "完", en: "perfect, completion" }, { jp: "降", en: "descend, precipitate, fall, surrender" }, { jp: "責", en: "blame, condemn" }, { jp: "捕", en: "catch, capture" }, { jp: "危", en: "dangerous, fear, uneasy" }, { jp: "給", en: "salary, wage, gift" }, { jp: "苦", en: "suffering, bitter" }, { jp: "迎", en: "welcome, meet, greet" }, { jp: "園", en: "park, garden, yard" }, { jp: "具", en: "tool, utensil" }, { jp: "辞", en: "resign, word, term" }, { jp: "因", en: "cause, factor, depend on" }, { jp: "馬", en: "horse" }, { jp: "愛", en: "love, affection" }, { jp: "富", en: "wealth, enrich, abundant" }, { jp: "彼", en: "he, him" }, { jp: "未", en: "un-, not yet" }, { jp: "舞", en: "dance, circle" }, { jp: "亡", en: "deceased, dying" }, { jp: "冷", en: "cool, cold, chill" }, { jp: "適", en: "suitable, occasional, rare" }, { jp: "婦", en: "lady, woman, wife" }, { jp: "寄", en: "draw near, gather" }, { jp: "込", en: "crowded, mixture" }, { jp: "顔", en: "face, expression" }, { jp: "類", en: "sort, kind, variety, class, genus" }, { jp: "余", en: "too much, surplus" }, { jp: "王", en: "king, rule" }, { jp: "返", en: "return, answer" }, { jp: "妻", en: "wife, spouse" }, { jp: "背", en: "stature, height, back" }, { jp: "熱", en: "heat, fever, passion" }, { jp: "宿", en: "inn, lodging" }, { jp: "薬", en: "medicine, chemical" }, { jp: "険", en: "precipitous, inaccessible place" }, { jp: "頼", en: "trust, request" }, { jp: "覚", en: "memorize, learn, remember, awake" }, { jp: "船", en: "ship, boat" }, { jp: "途", en: "route, way, road" }, { jp: "許", en: "permit, approve" }, { jp: "抜", en: "slip out, extract, pull out, remove" }, { jp: "便", en: "convenience, facility" }, { jp: "留", en: "detain, fasten, halt, stop" }, { jp: "罪", en: "guilt, sin, crime" }, { jp: "努", en: "toil, diligent, as much as possible" }, { jp: "精", en: "refined, ghost, fairy, energy" }, { jp: "散", en: "scatter, disperse" }, { jp: "静", en: "quiet" }, { jp: "婚", en: "marriage" }, { jp: "喜", en: "rejoice, take pleasure in" }, { jp: "浮", en: "float, rise to surface" }, { jp: "絶", en: "discontinue, unparalleled" }, { jp: "幸", en: "happiness, blessing, fortune" }, { jp: "押", en: "push" }, { jp: "倒", en: "overthrow, fall, collapse" }, { jp: "等", en: "etc., and so forth" }, { jp: "老", en: "old" }, { jp: "曲", en: "bend, music, melody" }, { jp: "払", en: "pay" }, { jp: "庭", en: "courtyard, garden, yard" }, { jp: " 徒", en: "on foot, junior" }, { jp: "勤", en: "diligence, employed, serve" }, { jp: "遅", en: "slow, late, back, later" }, { jp: "居", en: "reside, to be, exist" }, { jp: "雑", en: "miscellaneous" }, { jp: "招", en: "invite, summon, engage" }, { jp: "困", en: "quandary, become distressed" }, { jp: "欠", en: "lack, gap" }, { jp: "更", en: "renew, renovate, again" }, { jp: "刻", en: "engrave, cut fine, chop" }, { jp: "賛", en: "approve, praise" }, { jp: "抱", en: "embrace, hug" }, { jp: "犯", en: "crime, sin, offense" }, { jp: "恐", en: "fear, dread" }, { jp: "息", en: "breath, son, interest (on money)" }, { jp: "遠", en: "distant, far" },
        { jp: "戻", en: "re-, return, revert" }, { jp: "願", en: "petition, request, wish" }, { jp: "絵", en: "picture, drawing" }, { jp: "越", en: "surpass, cross over, move to, exceed" }, { jp: "欲", en: "longing, greed, passion" }, { jp: "痛", en: "pain, hurt, damage, bruise" }, { jp: "笑", en: "laugh" }, { jp: "互", en: "mutually, reciprocally, together" }, { jp: "束", en: "bundle, manage" }, { jp: "似", en: "becoming, resemble, imitate" }, { jp: "列", en: "file, row, column" }, { jp: "探", en: "search, look for" }, { jp: "逃", en: "escape, flee" }, { jp: "遊", en: "play" }, { jp: "迷", en: "astray, be perplexed, in doubt, lost" }, { jp: "夢", en: "dream, vision" }, { jp: "君", en: "you, male name suffix" }, { jp: "閉", en: "closed, shut" }, { jp: "緒", en: "beginning, end, cord, strap" }, { jp: "折", en: "fold, break, fracture" }, { jp: "草", en: "grass, weeds, herbs" }, { jp: "暮", en: "evening, livelihood" }, { jp: "酒", en: "sake, alcohol" }, { jp: "悲", en: "grieve, sad" }, { jp: "晴", en: "clear up" }, { jp: "掛", en: "hang, suspend" }, { jp: "到", en: "arrival, proceed, reach" }, { jp: "寝", en: "lie down, sleep, rest" }, { jp: "暗", en: "darkness, disappear, shade, informal" }, { jp: "盗", en: "steal, rob" }, { jp: "吸", en: "suck, inhale" }, { jp: "陽", en: "sunshine, positive" }, { jp: "御", en: "honorable" }, { jp: "歯", en: "tooth, cog" }, { jp: "忘", en: "forget" }, { jp: "雪", en: "snow" }, { jp: "吹", en: "blow, breathe, puff" }, { jp: "娘", en: "daughter, girl" }, { jp: "誤", en: "mistake" }, { jp: "洗", en: "wash" }, { jp: "慣", en: "accustomed, get used to" }, { jp: "礼", en: "salute, bow, ceremony, thanks" }, { jp: "窓", en: "window, pane" }, { jp: "昔", en: "once upon a time, old times" }, { jp: "貧", en: "poverty, poor" }, { jp: "怒", en: "angry, be offended" }, { jp: "泳", en: "swim" }, { jp: "祖", en: "ancestor, pioneer, founder" }, { jp: "杯", en: "glass, cup" }, { jp: "疲", en: "exhausted, tire" }, { jp: "皆", en: "all, everyone, everybody" }, { jp: "鳴", en: "chirp, cry, bark" }, { jp: "腹", en: "abdomen, belly, stomach" }, { jp: "煙", en: "smoke" }, { jp: "眠", en: "sleep" }, { jp: "怖", en: "dreadful, fearful" }, { jp: "耳", en: "ear" }, { jp: "頂", en: "receive, top, summit, peak" }, { jp: "箱", en: "box, chest" }, { jp: "晩", en: "nightfall, night" }, { jp: "寒", en: "cold" }, { jp: "髪", en: "hair (on the head)" }, { jp: "忙", en: "busy, occupied" }, { jp: "才", en: "genius, years old" }, { jp: "靴", en: "shoes" }, { jp: "恥", en: "shame, dishonor" }, { jp: "偶", en: "accidentally, even number" }, { jp: "偉", en: "admirable, greatness" }, { jp: "猫", en: "cat" }, { jp: "幾", en: "how many, how much, some" }, { jp: "誰", en: "who, someone, somebody" }], n2: [{ jp: "党", en: "party, faction, clique" }, { jp: "協", en: "co-, cooperation" }, { jp: "総", en: "general, whole, all" }, { jp: "区", en: "ward, district" }, { jp: "領", en: "jurisdiction, dominion" }, { jp: "県", en: "prefecture" }, { jp: "設", en: "establishment, provision" }, { jp: "保", en: "protect, guarantee, keep" }, { jp: "改", en: "reformation, change, modify" }, { jp: "第", en: "No., number" }, { jp: "結", en: "tie, bind, contract" }, { jp: "派", en: "faction, group, party" }, { jp: "府", en: "borough, urban prefecture, govt office" }, { jp: "査", en: "investigate" }, { jp: "委", en: "committee, entrust to" }, { jp: "軍", en: "army, force, troops" }, { jp: "案", en: "plan, suggestion, draft" }, { jp: "策", en: "scheme, plan, policy" }, { jp: "団", en: "group, association" }, { jp: "各", en: "each; every; either" }, { jp: "島", en: "island" }, { jp: "革", en: "leather; skin; reform; become serious" }, { jp: "村", en: "village; town" }, { jp: "勢", en: "forces; energy; military strength" }, { jp: "減", en: "dwindle; decrease; reduce" }, { jp: "再", en: "again, twice, second time" }, { jp: "税", en: "tax; duty" }, { jp: "営", en: "occupation; camp; perform; build; conduct (business)" }, { jp: "比", en: "compare; race; ratio" }, { jp: "防", en: "ward off; defend; protect; resist" }, { jp: "補", en: "supplement; supply; offset; compensate" }, { jp: "境", en: "boundary, border, region" }, { jp: "導", en: "guidance; leading; conduct; usher" }, { jp: "副", en: "vice-; assistant; aide; duplicate; copy" }, { jp: "算", en: "calculate; divining; number; probability" }, { jp: "輸", en: "transport, send, be inferior" }, { jp: "述", en: "mention; state; speak" }, { jp: "線", en: "line; track" }, { jp: "農", en: "agriculture; farmers" }, { jp: "州", en: "state; province" }, { jp: "武", en: "warrior; military; chivalry; arms" }, { jp: "象", en: "elephant; pattern after; image; shape" }, { jp: "域", en: "range; region; limits; stage; level" }, { jp: "額", en: "forehead; tablet; framed picture; sum; amount; volume" }, { jp: "欧", en: "Europe" }, { jp: "担", en: "shouldering; carry; raise; bear" }, { jp: "準", en: "semi-; correspond to; imitate" }, { jp: "賞", en: "prize; reward; praise" }, { jp: "辺", en: "environs; boundary; border; vicinity" }, { jp: "造", en: "create; make; structure; physique" }, { jp: "被", en: "incur; cover; shelter; wear; put on" }, { jp: "技", en: "skill; art; craft; ability; vocation; arts" }, { jp: "低", en: "lower; short; humble" }, { jp: "復", en: "restore, return to, revert" }, { jp: "移", en: "shift, move, change" }, { jp: "個", en: "individual; counter for articles" }, { jp: "門", en: "gate" }, { jp: "課", en: "chapter, lesson, section, department" }, { jp: "脳", en: "brain; memory" }, { jp: "極", en: "poles; settlement; conclusion; end" }, { jp: "含", en: "contain; include" }, { jp: "蔵", en: "storehouse; hide; own; have; possess" }, { jp: "量", en: "quantity; measure; weight; amount" }, { jp: "型", en: "type; model" }, { jp: "況", en: "condition; situation" }, { jp: "針", en: "needle; pin; staple; stinger" }, { jp: "専", en: "specialty; exclusive; mainly; solely" }, { jp: "谷", en: "valley" }, { jp: "史", en: "history; chronicle" }, { jp: "階", en: "stair; counter for building story" }, { jp: "管", en: "pipe; tube; wind instrument; control; jurisdiction" }, { jp: "兵", en: "soldier; private; troops; army" }, { jp: "接", en: "touch; contact; adjoin; piece together" }, { jp: "細", en: "slender; narrow; detailed; precise" }, { jp: "効", en: "merit; efficacy; efficiency; benefit" }, { jp: "丸", en: "round; full (month); perfection" }, { jp: "湾", en: "gulf; bay; inlet" }, { jp: "録", en: "record" }, { jp: "省", en: "focus; government ministry; conserve" }, { jp: "旧", en: "old times; old things; former; ex-" }, { jp: "橋", en: "bridge" }, { jp: "岸", en: "beach" }, { jp: "周", en: "circumference; circuit; lap" }, { jp: "材", en: "lumber, log, timber, wood" }, { jp: "戸", en: "door; counter for houses" }, { jp: "央", en: "center; middle" }, { jp: "券", en: "ticket" }, { jp: "編", en: "compilation; knit; braid; twist; editing" }, { jp: "捜", en: "search; look for; locate" }, { jp: "竹", en: "bamboo" }, { jp: "超", en: "transcend; super-; ultra-" }, { jp: "並", en: "row, and, besides" }, { jp: "療", en: "heal; cure" }, { jp: "採", en: "pick; take; fetch; take up" }, { jp: "森", en: "forest, woods" }, { jp: "競", en: "compete with; bid; contest; race" }, { jp: "介", en: "jammed in; shellfish; mediate" }, { jp: "根", en: "root; radical" }, { jp: "販", en: "marketing, sell, trade" }, { jp: "歴", en: "curriculum; continuation; passage of time" }, { jp: "将", en: "leader; commander; general; admiral" }, { jp: "幅", en: "hanging scroll; width" }, { jp: "般", en: "carrier; carry; all; general; sort; kind" }, { jp: "貿", en: "trade; exchange" }, { jp: "講", en: "lecture; club; association" }, { jp: "林", en: "grove; forest" }, { jp: "装", en: "attire; dress; pretend; disguise" }, { jp: "諸", en: "various; many; several; together" }, { jp: "劇", en: "drama; play" }, { jp: "河", en: "river" }, { jp: "航", en: "navigate; sail; cruise; fly" }, { jp: "鉄", en: "iron" }, { jp: "児", en: "newborn babe; child" }, { jp: "禁", en: "prohibition; ban; forbid" }, { jp: "印", en: "stamp; seal; mark; symbol; trademark" }, { jp: "逆", en: "inverted; reverse; opposite" }, { jp: "換", en: "interchange; period; change; convert; replace; renew" }, { jp: "久", en: "long time; old story" }, { jp: "短", en: "short; fault; defect; weak point" }, { jp: "油", en: "oil; fat" }, { jp: "暴", en: "outburst; force; violence" }, { jp: "輪", en: "wheel; ring; circle; link; loop; counter for wheels and flowers" }, { jp: "占", en: "fortune-telling; divining; forecasting" }, { jp: "植", en: "plant" }, { jp: "清", en: "pure; purify; cleanse" }, { jp: "倍", en: "double; twice; times; fold" }, { jp: "均", en: "level; average" }, { jp: "億", en: "hundred million; 10**8" }, { jp: "圧", en: "pressure; push; overwhelm; oppress" }, { jp: "芸", en: "technique; art; craft; performance; acting" }, { jp: "署", en: "signature; govt office; police station" }, { jp: "伸", en: "expand; stretch; extend" }, { jp: "停", en: "halt; stopping" }, { jp: "爆", en: "bomb; burst open" }, { jp: "陸", en: "land; six" }, { jp: "玉", en: "jewel; ball" }, { jp: "波", en: "waves; billows" }, { jp: "帯", en: "sash; belt; obi; zone; region" }, { jp: "延", en: "prolong; stretching" }, { jp: "羽", en: "feathers; counter for birds, rabbits" }, { jp: "固", en: "harden; set; clot; curdle" }, { jp: "則", en: "rule; follow; based on" }, { jp: "乱", en: "riot; war; disorder; disturb" }, { jp: "普", en: "universal; generally" }, { jp: "測", en: "fathom; plan; scheme; measure" }, { jp: "豊", en: "bountiful; excellent; rich" }, { jp: "厚", en: "thick; heavy; rich" }, { jp: "齢", en: "age" }, { jp: "囲", en: "surround; enclosure; preserve; keep" }, { jp: "卒", en: "graduate; soldier; private; die" }, { jp: "略", en: "abbreviation; omission; outline; shorten" }, { jp: "承", en: "hear; listen to; be informed; receive" }, { jp: "順", en: "obey; order; turn; occasion" }, { jp: "岩", en: "boulder; rock; cliff" }, { jp: "練", en: "practice, gloss, train, drill, polish, refine" }, { jp: "軽", en: "lightly; trifling; unimportant" }, { jp: "了", en: "complete; finish" }, { jp: "庁", en: "government office" }, { jp: "城", en: "castle" }, { jp: "患", en: "afflicted; disease; suffer from; be ill" }, { jp: "層", en: "stratum; social class; layer; story; floor" }, { jp: "版", en: "printing block; edition; impression; label" }, { jp: "令", en: "orders; command; decree" }, { jp: "角", en: "angle; corner; square" }, { jp: "絡", en: "entwine; coil around; get caught in" }, { jp: "損", en: "damage; loss; disadvantage; hurt; injure" }, { jp: "募", en: "recruit; campaign" }, { jp: "裏", en: "back; reverse; inside; rear" }, { jp: "仏", en: "Buddha; the dead" }, { jp: "績", en: "exploits; achievements" }, { jp: "築", en: "fabricate; build; construct" }, { jp: "貨", en: "freight; goods; property" }, { jp: "混", en: "mix; blend; confuse" }, { jp: "昇", en: "rise up" }, { jp: "池", en: "pond; pool; reservoir" }, { jp: "血", en: "blood" }, { jp: "温", en: "warm" }, { jp: "季", en: "seasons" }, { jp: "星", en: "star" }, { jp: "永", en: "eternity; long; lengthy" }, { jp: "著", en: "renowned; publish; write" }, { jp: "誌", en: "document; records" }, { jp: "庫", en: "warehouse; storehouse" }, { jp: "刊", en: "publish; carve; engrave" }, { jp: "像", en: "statue; picture; image; figure" }, { jp: "香", en: "incense; smell; perfume" }, { jp: "坂", en: "slope; incline; hill" }, { jp: "底", en: "bottom; sole; depth; bottom price" }, { jp: "布", en: "linen; cloth; spread; distribute" }, { jp: "寺", en: "Buddhist temple" }, { jp: "宇", en: "eaves; roof; house; heaven" }, { jp: "巨", en: "gigantic; big; large; great" }, { jp: "震", en: "quake; shake; tremble; quiver" }, { jp: "希", en: "hope; beg; request; pray" }, { jp: "触", en: "contact; touch; feel; hit; proclaim; announce" }, { jp: "依", en: "reliant; depend on; consequently; therefore; due to" },
        { jp: "籍", en: "enroll; register; membership" }, { jp: "汚", en: "dirty; pollute; disgrace; defile" }, { jp: "枚", en: "sheet of...; counter for flat thin objects" }, { jp: "複", en: "duplicate; double; compound; multiple" }, { jp: "郵", en: "mail; stagecoach stop" }, { jp: "仲", en: "go-between; relationship" }, { jp: "栄", en: "flourish; prosperity; honor" }, { jp: "札", en: "ticket; paper money; banknote; note" }, { jp: "板", en: "plank; board; plate; stage" }, { jp: "骨", en: "skeleton; bone; remains; frame" }, { jp: "傾", en: "lean; incline; tilt; trend; bias" }, { jp: "届", en: "deliver; reach; arrive; report" }, { jp: "巻", en: "scroll; volume; book; part; roll up; wind up; coil; counter for texts (or book scrolls)" }, { jp: "燃", en: "burn; blaze; glow" }, { jp: "跡", en: "tracks; mark; print; impression" }, { jp: "包", en: "wrap; pack up; cover; conceal" }, { jp: "駐", en: "stop-over; reside in; resident" }, { jp: "弱", en: "weak; frail" }, { jp: "紹", en: "introduce; inherit; help" }, { jp: "雇", en: "employ; hire" }, { jp: "替", en: "exchange, spare, substitute" }, { jp: "預", en: "deposit; custody; leave with; entrust to" }, { jp: "焼", en: "bake; burning" }, { jp: "簡", en: "simplicity; brevity" }, { jp: "章", en: "badge; chapter; composition; poem" }, { jp: "臓", en: "entrails; viscera; bowels" }, { jp: "律", en: "rhythm; law; regulation; control" }, { jp: "贈", en: "presents; send; give to; award to" }, { jp: "照", en: "illuminate; shine; compare" }, { jp: "薄", en: "dilute; thin; weak (tea)" }, { jp: "群", en: "flock; group; crowd; herd" }, { jp: "秒", en: "second" }, { jp: "奥", en: "heart; interior" }, { jp: "詰", en: "packed; close; rebuke; blame" }, { jp: "双", en: "pair; set; comparison; counter for pairs" }, { jp: "刺", en: "thorn, pierce, stab, prick, sting" }, { jp: "純", en: "genuine; purity; innocence" }, { jp: "翌", en: "the following; next" }, { jp: "快", en: "cheerful; pleasant; agreeable; comfortable" }, { jp: "片", en: "one-sided; piece" }, { jp: "敬", en: "awe; respect; honor; revere" }, { jp: "悩", en: "trouble; worry; in pain; distress; illness" }, { jp: "泉", en: "spring; fountain" }, { jp: "皮", en: "skin; hide; leather" }, { jp: "漁", en: "fishing; fishery" }, { jp: "荒", en: "rough; wild" }, { jp: "貯", en: "savings; store" }, { jp: "硬", en: "stiff; hard" }, { jp: "埋", en: "bury; be filled up; embedded" }, { jp: "柱", en: "pillar; post; cylinder; support" }, { jp: "祭", en: "ritual; offer prayers; celebrate" }, { jp: "袋", en: "sack; bag; pouch" }, { jp: "筆", en: "writing brush; writing; painting brush; handwriting" }, { jp: "訓", en: "instruction, explanation, read" }, { jp: "浴", en: "bathe; be favored with; bask in" }, { jp: "童", en: "juvenile; child" }, { jp: "宝", en: "treasure; wealth; valuables" }, { jp: "封", en: "seal; closing" }, { jp: "胸", en: "bosom; breast; chest; heart; feelings" }, { jp: "砂", en: "sand" }, { jp: "塩", en: "salt" }, { jp: "賢", en: "intelligent; wise; wisdom; cleverness" }, { jp: "腕", en: "arm; ability; talent" }, { jp: "兆", en: "trillion; sign; omen; symptoms" }, { jp: "床", en: "bed; counter for beds; floor; padding; tatami" }, { jp: "毛", en: "fur; hair; feather" }, { jp: "緑", en: "green" }, { jp: "尊", en: "revered; valuable; precious; noble" }, { jp: "祝", en: "celebrate; congratulate" }, { jp: "柔", en: "tender; weakness; gentleness; softness" }, { jp: "殿", en: "Mr.; hall; mansion; palace; temple; lord" }, { jp: "濃", en: "concentrated; thick; dark; undiluted" }, { jp: "液", en: "fluid; liquid; juice; sap; secretion" }, { jp: "衣", en: "garment; clothes; dressing" }, { jp: "肩", en: "shoulder" }, { jp: "零", en: "zero; spill; overflow; nothing" }, { jp: "幼", en: "infancy; childhood" }, { jp: "荷", en: "baggage; load; cargo; freight" }, { jp: "泊", en: "overnight stay" }, { jp: "黄", en: "yellow" }, { jp: "甘", en: "sweet; coax; pamper; sugary" }, { jp: "臣", en: "retainer; subject" }, { jp: "浅", en: "shallow; superficial; frivolous" }, { jp: "掃", en: "sweep; brush" }, { jp: "雲", en: "cloud" }, { jp: "掘", en: "dig; delve; excavate" }, { jp: "捨", en: "discard; throw away; abandon" }, { jp: "軟", en: "soft" }, { jp: "沈", en: "sink; be submerged; subside; be depressed" }, { jp: "凍", en: "frozen; refrigerate" }, { jp: "乳", en: "milk, breasts" }, { jp: "恋", en: "romance; in love; yearn for; miss" }, { jp: "紅", en: "crimson; deep red" }, { jp: "郊", en: "outskirts, suburbs, rural area" }, { jp: "腰", en: "loins; hips; waist" }, { jp: "炭", en: "charcoal; coal" }, { jp: "踊", en: "jump; dance; leap; skip" }, { jp: "冊", en: "counter for books; volume" }, { jp: "勇", en: "courage; cheer up; bravery; heroism" }, { jp: "械", en: "contraption; machine; instrument" }, { jp: "菜", en: "vegetable; side dish; greens" }, { jp: "珍", en: "rare; curious; strange" }, { jp: "卵", en: "egg" }, { jp: "湖", en: "lake" }, { jp: "喫", en: "consume, eat, drink, smoke, receive" }, { jp: "干", en: "dry; parch" }, { jp: "虫", en: "insect; bug" }, { jp: "刷", en: "printing; print; brush" }, { jp: "湯", en: "hot water; bath; hot spring" }, { jp: "溶", en: "melt; dissolve; thaw" }, { jp: "鉱", en: "mineral; ore" }, { jp: "涙", en: "tears; sympathy" }, { jp: "匹", en: "counter for small animals" }, { jp: "孫", en: "grandchild; descendants" }, { jp: "鋭", en: "pointed; sharpness; edge; weapon; sharp; violent" }, { jp: "枝", en: "bough; branch; twig; limb; counter for branches" }, { jp: "塗", en: "paint; smear; coating" }, { jp: "軒", en: "flats; counter for houses" }, { jp: "毒", en: "poison; germ; harm" }, { jp: "叫", en: "shout; exclaim; yell" }, { jp: "拝", en: "worship; adore; pray to" }, { jp: "氷", en: "ice; hail; freeze" }, { jp: "乾", en: "drought; dry; drink up; heaven" }, { jp: "棒", en: "rod; stick; cane; pole" }, { jp: "祈", en: "pray; wish" }, { jp: "拾", en: "pick up; gather; find" }, { jp: "粉", en: "flour; powder; dust" }, { jp: "糸", en: "thread" }, { jp: "綿", en: "cotton" }, { jp: "汗", en: "sweat; perspire" }, { jp: "銅", en: "copper" }, { jp: "湿", en: "damp; wet; moist" }, { jp: "瓶", en: "bottle; jar; jug; urn" }, { jp: "咲", en: "blossom; bloom" }, { jp: "召", en: "call; send for; wear; buy, to eat, to drink" }, { jp: "缶", en: "tin can; container" }, { jp: "隻", en: "vessels; counter for ships; fish; one of a pair" }, { jp: "脂", en: "fat; grease; lard" }, { jp: "蒸", en: "steam; heat; foment" }, { jp: "肌", en: "texture; skin; body; grain" }, { jp: "耕", en: "till; plow; cultivate" }, { jp: "鈍", en: "dull; slow; foolish; blunt" }, { jp: "泥", en: "mud; adhere to; be attached to" }, { jp: "隅", en: "corner; nook" }, { jp: "灯", en: "lamp; a light; counter for lights" }, { jp: "辛", en: "spicy; hot" }, { jp: "磨", en: "grind; polish; improve; brush (teeth)" }, { jp: "麦", en: "barley; wheat" }, { jp: "姓", en: "surname" }, { jp: "筒", en: "cylinder; pipe; tube" }, { jp: "鼻", en: "nose; snout" }, { jp: "粒", en: "grains; drop; counter for tiny particles" }, { jp: "詞", en: "part of speech; words" }, { jp: "胃", en: "stomach; crop" }, { jp: "畳", en: "tatami mat; fold" }, { jp: "机", en: "desk; table" }, { jp: "膚", en: "skin; body; texture" }, { jp: "濯", en: "laundry; wash; rinse" }, { jp: "塔", en: "pagoda; tower; steeple" }, { jp: "沸", en: "seethe; boil; ferment" }, { jp: "灰", en: "ashes; cremate" }, { jp: "菓", en: "candy; cakes; fruit" }, { jp: "帽", en: "cap; headgear" }, { jp: "枯", en: "wither; die; dry up; be seasoned" }, { jp: "涼", en: "refreshing; nice and cool" }, { jp: "舟", en: "boat; ship" }, { jp: "貝", en: "shellfish" }, { jp: "符", en: "token; sign; mark" }, { jp: "憎", en: "hate; detest" }, { jp: "皿", en: "dish; a helping; plate" }, { jp: "肯", en: "agreement; consent; comply with" }, { jp: "燥", en: "parch; dry up" }, { jp: "畜", en: "livestock; domestic fowl and animals" }, { jp: "坊", en: "boy, priest" }, { jp: "挟", en: "pinch; between" }, { jp: "曇", en: "cloudy weather" }, { jp: "滴", en: "drip; drop" }, { jp: "伺", en: "visit; ask; inquire; question" }], n1: [{ jp: "亜", en: "Asia, rank next" }, { jp: "阿", en: "Africa, flatter" }, { jp: "哀", en: "pathetic, grief" }, { jp: "葵", en: "hollyhock" }, { jp: "茜", en: "madder, red dye" }, { jp: "握", en: "grip, hold" }, { jp: "渥", en: "kindness, moisten" }, { jp: "旭", en: "rising sun, morning sun" }, { jp: "梓", en: "catalpa tree, woodblock printing" }, { jp: "扱", en: "handle, entertain" }, { jp: "絢", en: "brilliant fabric design" }, { jp: "綾", en: "design, figured cloth" }, { jp: "鮎", en: "freshwater trout, smelt" }, { jp: "案", en: "plan, suggestion" }, { jp: "杏", en: "apricot" }, { jp: "伊", en: "Italy, that one" }, { jp: "威", en: "intimidate, dignity" }, { jp: "尉", en: "military officer, jailer" }, { jp: "惟", en: "consider, reflect" }, { jp: "慰", en: "consolation, amusement" }, { jp: "為", en: "do, change" }, { jp: "異", en: "uncommon, different" }, { jp: "維", en: "fiber, tie" }, { jp: "緯", en: "horizontal, woof" }, { jp: "遺", en: "bequeath, leave behind" }, { jp: "井", en: "well, well crib" }, { jp: "亥", en: "sign of the hog, 9-11PM" }, { jp: "郁", en: "cultural progress, perfume" }, { jp: "磯", en: "seashore, beach" }, { jp: "壱", en: "one (in documents)" }, { jp: "逸", en: "deviate, idleness" }, { jp: "稲", en: "rice plant" }, { jp: "芋", en: "potato" }, { jp: "允", en: "license, sincerity" }, { jp: "姻", en: "matrimony, marry" }, { jp: "胤", en: "descendent, issue" }, { jp: "陰", en: "shade, yin" }, { jp: "隠", en: "conceal, hide" }, { jp: "韻", en: "rhyme, elegance" }, { jp: "卯", en: "sign of the hare or rabbit, fourth sign of Chinese zodiac" }, { jp: "丑", en: "sign of the ox or cow, 1-3AM" }, { jp: "渦", en: "whirlpool, eddy" }, { jp: "唄", en: "song, ballad" }, { jp: "浦", en: "bay, creek" }, { jp: "叡", en: "intelligence, imperial" }, { jp: "影", en: "shadow, silhouette" }, { jp: "瑛", en: "sparkle of jewelry, crystal" }, { jp: "衛", en: "defense, protection" }, { jp: "詠", en: "recitation, poem" }, { jp: "疫", en: "epidemic" }, { jp: "益", en: "benefit, gain" }, { jp: "悦", en: "ecstasy, joy" }, { jp: "謁", en: "audience, audience (with king)" }, { jp: "閲", en: "review, inspection" }, { jp: "宴", en: "banquet, feast" }, { jp: "援", en: "abet, help" }, { jp: "沿", en: "run alongside, follow along" }, { jp: "炎", en: "inflammation, flame" }, { jp: "猿", en: "monkey" }, { jp: "縁", en: "affinity, relation" }, { jp: "艶", en: "glossy, luster" }, { jp: "苑", en: "garden, farm" }, { jp: "鉛", en: "lead" }, { jp: "於", en: "at, in" }, { jp: "凹", en: "concave, hollow" }, { jp: "往", en: "journey, travel" }, { jp: "応", en: "apply, answer" }, { jp: "旺", en: "flourishing, successful" }, { jp: "殴", en: "assault, hit" }, { jp: "翁", en: "venerable old man" }, { jp: "沖", en: "open sea, offing" }, { jp: "憶", en: "recollection, think" }, { jp: "乙", en: "the latter, duplicate" }, { jp: "卸", en: "wholesale" }, { jp: "恩", en: "grace, kindness" }, { jp: "穏", en: "calm, quiet" }, { jp: "仮", en: "sham, temporary" }, { jp: "伽", en: "nursing, attending" }, { jp: "価", en: "value, price" }, { jp: "佳", en: "excellent, beautiful" }, { jp: "嘉", en: "applaud, praise" }, { jp: "嫁", en: "marry into, bride" }, { jp: "寡", en: "widow, minority" }, { jp: "暇", en: "spare time, rest" }, { jp: "架", en: "erect, frame" }, { jp: "禍", en: "calamity, misfortune" }, { jp: "稼", en: "earnings, work" }, { jp: "箇", en: "counter for articles" }, { jp: "茄", en: "eggplant" }, { jp: "華", en: "splendor, flower" }, { jp: "霞", en: "be hazy, grow dim" }, { jp: "蚊", en: "mosquito" }, { jp: "我", en: "ego, I" }, { jp: "芽", en: "bud, sprout" }, { jp: "賀", en: "congratulations, joy" }, { jp: "雅", en: "gracious, elegant" }, { jp: "餓", en: "starve, hungry" }, { jp: "塊", en: "clod, lump" }, { jp: "壊", en: "demolition, break" }, { jp: "怪", en: "suspicious, mystery" }, { jp: "悔", en: "repent, regret" }, { jp: "懐", en: "pocket, feelings" },
        { jp: "戒", en: "commandment" }, { jp: "拐", en: "kidnap, falsify" }, { jp: "魁", en: "charging ahead of others" }, { jp: "凱", en: "victory song" }, { jp: "劾", en: "censure, criminal investigation" }, { jp: "慨", en: "rue, be sad" }, { jp: "概", en: "outline, condition" }, { jp: "涯", en: "horizon, shore" }, { jp: "街", en: "boulevard, street" }, { jp: "該", en: "above-stated, the said" }, { jp: "馨", en: "fragrant, balmy" }, { jp: "垣", en: "hedge, fence" }, { jp: "嚇", en: "menacing, dignity" }, { jp: "拡", en: "broaden, extend" }, { jp: "核", en: "nucleus, core" }, { jp: "殻", en: "husk, nut shell" }, { jp: "獲", en: "seize, get" }, { jp: "穫", en: "harvest, reap" }, { jp: "較", en: "contrast, compare" }, { jp: "郭", en: "enclosure, quarters" }, { jp: "閣", en: "tower, tall building" }, { jp: "隔", en: "isolate, alternate" }, { jp: "岳", en: "point, peak" }, { jp: "潟", en: "lagoon" }, { jp: "喝", en: "hoarse, scold" }, { jp: "括", en: "fasten, tie up" }, { jp: "渇", en: "thirst, dry up" }, { jp: "滑", en: "slippery, slide" }, { jp: "褐", en: "brown, woollen kimono" }, { jp: "轄", en: "control, wedge" }, { jp: "且", en: "moreover, also" }, { jp: "叶", en: "grant, answer" }, { jp: "樺", en: "birch, dark red" }, { jp: "株", en: "stocks, stump" }, { jp: "鎌", en: "sickle, scythe" }, { jp: "茅", en: "miscanthus reed" }, { jp: "刈", en: "reap, cut" }, { jp: "侃", en: "strong, just" }, { jp: "冠", en: "crown, best" }, { jp: "勘", en: "intuition, perception" }, { jp: "勧", en: "persuade, recommend" }, { jp: "喚", en: "yell, cry" }, { jp: "堪", en: "withstand, endure" }, { jp: "寛", en: "tolerant, leniency" }, { jp: "幹", en: "tree trunk" }, { jp: "憾", en: "remorse, regret" }, { jp: "敢", en: "daring, brave" }, { jp: "棺", en: "coffin, casket" }, { jp: "款", en: "goodwill, article" }, { jp: "歓", en: "delight, joy" }, { jp: "環", en: "ring, circle" }, { jp: "監", en: "oversee, official" }, { jp: "看", en: "watch over, see" }, { jp: "緩", en: "slacken, loosen" }, { jp: "肝", en: "liver, pluck" }, { jp: "艦", en: "warship" }, { jp: "莞", en: "smiling, reed used to cover tatami" }, { jp: "貫", en: "pierce, 8 1/3lbs" }, { jp: "還", en: "send back, return" }, { jp: "鑑", en: "specimen, take warning from" }, { jp: "閑", en: "leisure" }, { jp: "陥", en: "collapse, fall into" }, { jp: "巌", en: "rock, crag" }, { jp: "眼", en: "eyeball" }, { jp: "頑", en: "stubborn, foolish" }, { jp: "企", en: "undertake, scheme" }, { jp: "伎", en: "deed, skill" }, { jp: "器", en: "utensil, vessel" }, { jp: "基", en: "fundamentals, radical (chem)" }, { jp: "奇", en: "strange, strangeness" }, { jp: "嬉", en: "glad, pleased" }, { jp: "岐", en: "branch off, fork in road" }, { jp: "忌", en: "mourning, abhor" }, { jp: "揮", en: "brandish, wave" }, { jp: "旗", en: "national flag, banner" }, { jp: "既", en: "previously, already" }, { jp: "棋", en: "chess piece, Japanese chess" }, { jp: "棄", en: "abandon, throw away" }, { jp: "毅", en: "strong" }, { jp: "汽", en: "vapor, steam" }, { jp: "稀", en: "rare, phenomenal" }, { jp: "紀", en: "chronicle, account" }, { jp: "貴", en: "precious, value" }, { jp: "軌", en: "rut, wheel" }, { jp: "輝", en: "radiance, shine" }, { jp: "飢", en: "hungry, starve" }, { jp: "騎", en: "equestrian, riding on horses" }, { jp: "鬼", en: "ghost, devil (radical 194)" }, { jp: "亀", en: "tortoise, turtle" }, { jp: "偽", en: "falsehood, lie" }, { jp: "儀", en: "ceremony, rule" }, { jp: "宜", en: "best regards, good" }, { jp: "戯", en: "frolic, play" }, { jp: "擬", en: "mimic, aim (a gun) at" }, { jp: "欺", en: "deceit, cheat" }, { jp: "犠", en: "sacrifice" }, { jp: "義", en: "righteousness, justice" }, { jp: "誼", en: "friendship, intimacy" }, { jp: "菊", en: "chrysanthemum" }, { jp: "鞠", en: "ball" }, { jp: "吉", en: "good luck, joy" }, { jp: "橘", en: "mandarin orange" }, { jp: "却", en: "instead, on the contrary" }, { jp: "脚", en: "skids, leg" }, { jp: "虐", en: "tyrannize, oppress" }, { jp: "丘", en: "hill, knoll" }, { jp: "及", en: "reach out, exert" }, { jp: "宮", en: "Shinto shrine, constellations" }, { jp: "弓", en: "bow, archery bow" }, { jp: "救", en: "salvation, save" }, { jp: "朽", en: "decay, rot" }, { jp: "泣", en: "cry, weep" }, { jp: "窮", en: "hard up, destitute" }, { jp: "級", en: "class, rank" }, { jp: "糾", en: "twist, ask" }, { jp: "拒", en: "repel, refuse" }, { jp: "拠", en: "foothold, based on" }, { jp: "挙", en: "raise, plan" }, { jp: "虚", en: "void, emptiness" }, { jp: "距", en: "long-distance, spur" }, { jp: "亨", en: "pass through, go smoothly" }, { jp: "享", en: "enjoy, receive" }, { jp: "凶", en: "villain, evil" }, { jp: "匡", en: "correct, save" }, { jp: "喬", en: "high, boasting" }, { jp: "峡", en: "gorge, ravine" }, { jp: "恭", en: "respect, reverent" }, { jp: "狂", en: "lunatic, insane" }, { jp: "狭", en: "cramped, narrow" }, { jp: "矯", en: "rectify, straighten" }, { jp: "脅", en: "threaten, coerce" }, { jp: "興", en: "entertain, revive" }, { jp: "郷", en: "home town, village" }, { jp: "鏡", en: "mirror, speculum" }, { jp: "響", en: "echo, sound" }, { jp: "驚", en: "wonder, be surprised" }, { jp: "仰", en: "face-up, look up" }, { jp: "凝", en: "congeal, freeze" }, { jp: "尭", en: "high, far" }, { jp: "暁", en: "daybreak, dawn" }, { jp: "桐", en: "paulownia" }, { jp: "錦", en: "brocade, fine dress" }, { jp: "斤", en: "axe, 1.32 lb" }, { jp: "欣", en: "take pleasure in, rejoice" }, { jp: "欽", en: "respect, revere" }, { jp: "琴", en: "harp, koto" }, { jp: "筋", en: "muscle, sinew" }, { jp: "緊", en: "tense, solid" }, { jp: "芹", en: "parsley" }, { jp: "菌", en: "germ, fungus" }, { jp: "衿", en: "neck, collar" }, { jp: "謹", en: "discreet, reverently" }, { jp: "吟", en: "versify, singing" }, { jp: "句", en: "phrase, clause" }, { jp: "玖", en: "beautiful black jewel, nine" }, { jp: "駆", en: "drive, run" }, { jp: "駒", en: "pony, horse" }, { jp: "愚", en: "foolish, folly" }, { jp: "虞", en: "fear, uneasiness" }, { jp: "遇", en: "meet, encounter" }, { jp: "屈", en: "yield, bend" }, { jp: "熊", en: "bear" }, { jp: "栗", en: "chestnut" }, { jp: "繰", en: "winding, reel" }, { jp: "桑", en: "mulberry" }, { jp: "勲", en: "meritorious deed, merit" }, { jp: "薫", en: "send forth fragrance, fragrant" }, { jp: "郡", en: "county, district" }, { jp: "袈", en: "a coarse camlet" }, { jp: "刑", en: "punish, penalty" }, { jp: "啓", en: "disclose, open" }, { jp: "圭", en: "square jewel, corner" }, { jp: "契", en: "pledge, promise" }, { jp: "径", en: "diameter, path" }, { jp: "恵", en: "favor, blessing" }, { jp: "慶", en: "jubilation, congratulate" }, { jp: "慧", en: "wise" }, { jp: "憩", en: "recess, rest" }, { jp: "掲", en: "put up (a notice), put up" }, { jp: "携", en: "portable, carry (in hand)" }, { jp: "桂", en: "Japanese Judas-tree, cinnamon tree" }, { jp: "渓", en: "mountain stream, valley" }, { jp: "系", en: "lineage, system" }, { jp: "継", en: "inherit, succeed" }, { jp: "茎", en: "stalk, stem" }, { jp: "蛍", en: "lightning-bug, firefly" }, { jp: "鶏", en: "chicken" }, { jp: "鯨", en: "whale" }, { jp: "撃", en: "beat, attack" }, { jp: "激", en: "violent, get excited" }, { jp: "傑", en: "greatness, excellence" }, { jp: "潔", en: "undefiled, pure" }, { jp: "穴", en: "hole, aperture" }, { jp: "結", en: "tie, bind" }, { jp: "倹", en: "frugal, economy" }, { jp: "健", en: "healthy, health" }, { jp: "兼", en: "concurrently, and" }, { jp: "剣", en: "sabre, sword" }, { jp: "圏", en: "sphere, circle" }, { jp: "堅", en: "strict, hard" }, { jp: "嫌", en: "dislike, detest" }, { jp: "憲", en: "constitution, law" }, { jp: "懸", en: "state of suspension, hang" }, { jp: "拳", en: "fist" }, { jp: "検", en: "examination, investigate" }, { jp: "献", en: "offering, counter for drinks" }, { jp: "絹", en: "silk" }, { jp: "謙", en: "self-effacing, humble oneself" }, { jp: "遣", en: "dispatch, despatch" }, { jp: "顕", en: "appear, existing" }, { jp: "厳", en: "stern, strictness" }, { jp: "幻", en: "phantasm, vision" }, { jp: "弦", en: "bowstring, chord" }, { jp: "源", en: "source, origin" }, { jp: "玄", en: "mysterious, occultness" }, { jp: "絃", en: "string, cord" }, { jp: "孤", en: "orphan, alone" }, { jp: "己", en: "self (radical 49)" }, { jp: "弧", en: "arc, arch" }, { jp: "故", en: "happenstance, especially" }, { jp: "胡", en: "barbarian, foreign" }, { jp: "虎", en: "tiger, drunkard" }, { jp: "誇", en: "boast, be proud" }, { jp: "顧", en: "look back, review" }, { jp: "鼓", en: "drum, beat" }, { jp: "伍", en: "five, five-man squad" }, { jp: "呉", en: "give, do something for" }, { jp: "娯", en: "recreation, pleasure" }, { jp: "悟", en: "enlightenment, perceive" }, { jp: "梧", en: "Chinese parasol tree, phoenix tree" }, { jp: "瑚", en: "ancestral offering receptacle, coral" }, { jp: "碁", en: "Go" }, { jp: "護", en: "safeguard, protect" }, { jp: "鯉", en: "carp" }, { jp: "侯", en: "marquis, lord" }, { jp: "倖", en: "happiness, luck" }, { jp: "功", en: "achievement, merits" }, { jp: "后", en: "empress, queen" }, { jp: "坑", en: "pit, hole" }, { jp: "孔", en: "cavity, hole" }, { jp: "宏", en: "wide, large" }, { jp: "巧", en: "adroit, skilled" }, { jp: "康", en: "ease, peace" }, { jp: "弘", en: "vast, broad" }, { jp: "恒", en: "constancy, always" }, { jp: "抗", en: "confront, resist" }, { jp: "拘", en: "arrest, seize" }, { jp: "控", en: "withdraw, draw in" }, { jp: "攻", en: "aggression, attack" }, { jp: "昂", en: "rise" }, { jp: "晃", en: "clear" }, { jp: "江", en: "creek, inlet" }, { jp: "洪", en: "deluge, flood" }, { jp: "浩", en: "wide expanse, abundance" }, { jp: "溝", en: "gutter, ditch" }, { jp: "甲", en: "armor, high (voice)" }, { jp: "皇", en: "emperor" }, { jp: "稿", en: "draft, copy" }, { jp: "紘", en: "large" }, { jp: "絞", en: "strangle, constrict" }, { jp: "綱", en: "hawser, class (genus)" }, { jp: "衡", en: "equilibrium, measuring rod" }, { jp: "貢", en: "tribute, support" }, { jp: "購", en: "subscription, buy" }, { jp: "酵", en: "fermentation" }, { jp: "鋼", en: "steel" }, { jp: "項", en: "paragraph, nape of neck" }, { jp: "鴻", en: "large bird, wild goose" }, { jp: "剛", en: "sturdy, strength" }, { jp: "拷", en: "torture, beat" }, { jp: "豪", en: "overpowering, great" }, { jp: "克", en: "overcome, kindly" }, { jp: "穀", en: "cereals, grain" }, { jp: "酷", en: "cruel, severe" }, { jp: "獄", en: "prison, jail" }, { jp: "墾", en: "ground-breaking, open up farmland" }, { jp: "恨", en: "regret, bear a grudge" }, { jp: "懇", en: "sociable, kind" }, { jp: "昆", en: "descendants, elder brother" }, { jp: "紺", en: "dark blue, navy" }, { jp: "魂", en: "soul, spirit" }, { jp: "佐", en: "assistant, help" }, { jp: "唆", en: "tempt, seduce" }, { jp: "嵯", en: "steep, craggy" }, { jp: "沙", en: "sand" }, { jp: "瑳", en: "polish, brilliant white luster of a gem" }, { jp: "詐", en: "lie, falsehood" }, { jp: "鎖", en: "chain, irons" }, { jp: "裟", en: "Buddhist surplice" }, { jp: "債", en: "bond, loan" }, { jp: "催", en: "sponsor, hold (a meeting)" }, { jp: "哉", en: "how, what" }, { jp: "宰", en: "superintend, manager" }, { jp: "彩", en: "coloring, paint" }, { jp: "栽", en: "plantation, planting" }, { jp: "災", en: "disaster, calamity" }, { jp: "采", en: "dice, form" }, { jp: "砕", en: "smash, break" }, { jp: "斎", en: "purification, Buddhist food" }, { jp: "裁", en: "tailor, judge" }, { jp: "載", en: "ride, board" }, { jp: "剤", en: "dose, medicine" }, { jp: "冴", en: "be clear, serene" }, { jp: "崎", en: "promontory, cape" }, { jp: "削", en: "plane, sharpen" }, { jp: "搾", en: "squeeze" }, { jp: "朔", en: "conjunction (astronomy), first day of month" }, { jp: "策", en: "scheme, plan" }, { jp: "索", en: "cord, rope" }, { jp: "錯", en: "confused, mix" }, { jp: "桜", en: "cherry" }, { jp: "笹", en: "bamboo grass, (kokuji)" }, { jp: "撮", en: "snapshot, take pictures" }, { jp: "擦", en: "grate, rub" }, { jp: "皐", en: "swamp, shore" }, { jp: "傘", en: "umbrella" }, { jp: "惨", en: "wretched, disaster" }, { jp: "桟", en: "scaffold, cleat" }, { jp: "燦", en: "brilliant" }, { jp: "蚕", en: "silkworm" }, { jp: "酸", en: "acid, bitterness" }, { jp: "暫", en: "temporarily, a while" }, { jp: "司", en: "director, official" }, { jp: "嗣", en: "heir, succeed" }, { jp: "士", en: "gentleman, samurai" }, { jp: "姿", en: "figure, form" },
        { jp: "志", en: "intention, plan" }, { jp: "施", en: "give, bestow" }, { jp: "旨", en: "delicious, relish" }, { jp: "氏", en: "family name, surname" }, { jp: "祉", en: "welfare, happiness" }, { jp: "紫", en: "purple, violet" }, { jp: "肢", en: "limb, arms &amp; legs" }, { jp: "至", en: "climax, result in" }, { jp: "視", en: "inspection, regard as" }, { jp: "詩", en: "poem, poetry" }, { jp: "諮", en: "consult with" }, { jp: "賜", en: "grant, gift" }, { jp: "雌", en: "feminine, female" }, { jp: "飼", en: "domesticate, raise" }, { jp: "侍", en: "waiter, samurai" }, { jp: "慈", en: "mercy" }, { jp: "滋", en: "nourishing, more &amp; more" }, { jp: "爾", en: "you, thou" }, { jp: "磁", en: "magnet, porcelain" }, { jp: "蒔", en: "sow (seeds)" }, { jp: "汐", en: "eventide, tide" }, { jp: "鹿", en: "deer (radical 198)" }, { jp: "軸", en: "axis, pivot" }, { jp: "執", en: "tenacious, take hold" }, { jp: "漆", en: "lacquer, varnish" }, { jp: "疾", en: "rapidly" }, { jp: "偲", en: "recollect, remember" }, { jp: "芝", en: "turf, lawn" }, { jp: "舎", en: "cottage, inn" }, { jp: "射", en: "shoot, shine into" }, { jp: "赦", en: "pardon, forgiveness" }, { jp: "斜", en: "diagonal, slanting" }, { jp: "煮", en: "boil, cook" }, { jp: "紗", en: "gauze, gossamer" }, { jp: "謝", en: "apologize, thank" }, { jp: "遮", en: "intercept, interrupt" }, { jp: "蛇", en: "snake, serpent" }, { jp: "邪", en: "wicked, injustice" }, { jp: "勺", en: "ladle, one tenth of a go" }, { jp: "尺", en: "shaku, Japanese foot" }, { jp: "爵", en: "baron, peerage" }, { jp: "酌", en: "bar-tending, serving sake" }, { jp: "釈", en: "explanation" }, { jp: "寂", en: "loneliness, quietly" }, { jp: "朱", en: "vermilion, cinnabar" }, { jp: "殊", en: "particularly, especially" }, { jp: "狩", en: "hunt, raid" }, { jp: "珠", en: "pearl, gem" }, { jp: "趣", en: "purport, gist" }, { jp: "儒", en: "Confucian" }, { jp: "授", en: "impart, instruct" }, { jp: "樹", en: "timber, trees" }, { jp: "需", en: "demand, request" }, { jp: "囚", en: "captured, criminal" }, { jp: "宗", en: "religion, sect" }, { jp: "就", en: "concerning, settle" }, { jp: "修", en: "discipline, conduct oneself well" }, { jp: "愁", en: "distress, grieve" }, { jp: "洲", en: "continent, sandbar" }, { jp: "秀", en: "excel, excellence" }, { jp: "臭", en: "stinking, ill-smelling" }, { jp: "衆", en: "masses, great numbers" }, { jp: "襲", en: "attack, advance on" }, { jp: "酬", en: "repay, reward" }, { jp: "醜", en: "ugly, unclean" }, { jp: "充", en: "allot, fill" }, { jp: "従", en: "accompany, obey" }, { jp: "汁", en: "soup, juice" }, { jp: "渋", en: "astringent, hesitate" }, { jp: "獣", en: "animal, beast" }, { jp: "縦", en: "vertical, length" }, { jp: "銃", en: "gun, arms" }, { jp: "叔", en: "uncle, youth" }, { jp: "淑", en: "graceful, gentle" }, { jp: "縮", en: "shrink, contract" }, { jp: "粛", en: "solemn, quietly" }, { jp: "塾", en: "cram school, private school" }, { jp: "熟", en: "mellow, ripen" }, { jp: "俊", en: "sagacious, genius" }, { jp: "峻", en: "high, steep" }, { jp: "瞬", en: "wink, blink" }, { jp: "竣", en: "end, finish" }, { jp: "舜", en: "type of morning glory, rose of Sharon" }, { jp: "駿", en: "a good horse, speed" }, { jp: "准", en: "quasi-, semi-" }, { jp: "循", en: "sequential, follow" }, { jp: "旬", en: "decameron, ten-day period" }, { jp: "殉", en: "martyrdom, follow by resigning" }, { jp: "淳", en: "pure" }, { jp: "潤", en: "wet, be watered" }, { jp: "盾", en: "shield, escutcheon" }, { jp: "巡", en: "patrol, go around" }, { jp: "遵", en: "abide by, follow" }, { jp: "暑", en: "sultry, hot" }, { jp: "曙", en: "dawn, daybreak" }, { jp: "渚", en: "strand, beach" }, { jp: "庶", en: "commoner, all" }, { jp: "叙", en: "confer, relate" }, { jp: "序", en: "preface, beginning" }, { jp: "徐", en: "gradually, slowly" }, { jp: "恕", en: "excuse, tolerate" }, { jp: "傷", en: "wound, hurt" }, { jp: "償", en: "reparation, make up for" }, { jp: "匠", en: "artisan, workman" }, { jp: "升", en: "measuring box, 1.8 liter" }, { jp: "唱", en: "chant, recite" }, { jp: "奨", en: "exhort, urge" }, { jp: "宵", en: "wee hours, evening" }, { jp: "尚", en: "esteem, furthermore" }, { jp: "庄", en: "level, in the country" }, { jp: "彰", en: "patent, clear" }, { jp: "抄", en: "extract, selection" }, { jp: "掌", en: "manipulate, rule" }, { jp: "捷", en: "victory, fast" }, { jp: "昌", en: "prosperous, bright" }, { jp: "昭", en: "shining, bright" }, { jp: "晶", en: "sparkle, clear" }, { jp: "松", en: "pine tree" }, { jp: "梢", en: "treetops, twig" }, { jp: "沼", en: "marsh, lake" }, { jp: "渉", en: "ford, go cross" }, { jp: "焦", en: "char, hurry" }, { jp: "症", en: "symptoms, illness" }, { jp: "硝", en: "nitrate, saltpeter" }, { jp: "礁", en: "reef, sunken rock" }, { jp: "祥", en: "auspicious, happiness" }, { jp: "称", en: "appellation, praise" }, { jp: "肖", en: "resemblance" }, { jp: "菖", en: "iris" }, { jp: "蕉", en: "banana, plantain" }, { jp: "衝", en: "collide, brunt" }, { jp: "訟", en: "sue, accuse" }, { jp: "証", en: "evidence, proof" }, { jp: "詔", en: "imperial edict" }, { jp: "詳", en: "detailed, full" }, { jp: "鐘", en: "bell, gong" }, { jp: "障", en: "hinder, hurt" }, { jp: "丞", en: "help" }, { jp: "冗", en: "superfluous, uselessness" }, { jp: "剰", en: "surplus, besides" }, { jp: "壌", en: "lot, earth" }, { jp: "嬢", en: "lass, girl" }, { jp: "条", en: "article, clause" }, { jp: "浄", en: "clean, purify" }, { jp: "穣", en: "good crops, prosperity" }, { jp: "譲", en: "defer, turnover" }, { jp: "醸", en: "brew, cause" }, { jp: "錠", en: "lock, fetters" }, { jp: "嘱", en: "entrust, request" }, { jp: "飾", en: "decorate, ornament" }, { jp: "殖", en: "augment, increase" }, { jp: "織", en: "weave, fabric" }, { jp: "辱", en: "embarrass, humiliate" }, { jp: "侵", en: "encroach, invade" }, { jp: "唇", en: "lips" }, { jp: "娠", en: "with child, pregnancy" }, { jp: "審", en: "hearing, judge" }, { jp: "慎", en: "humility, be careful" }, { jp: "振", en: "shake, wave" }, { jp: "晋", en: "advance" }, { jp: "榛", en: "hazelnut, filbert" }, { jp: "浸", en: "immersed, soak" }, { jp: "秦", en: "Manchu dynasty, name given to naturalized foreigners" }, { jp: "紳", en: "sire, good belt" }, { jp: "薪", en: "fuel, firewood" }, { jp: "診", en: "checkup, seeing" }, { jp: "仁", en: "humanity, virtue" }, { jp: "刃", en: "blade, sword" }, { jp: "尋", en: "inquire, fathom" }, { jp: "甚", en: "tremendously, very" }, { jp: "尽", en: "exhaust, use up" }, { jp: "迅", en: "swift, fast" }, { jp: "陣", en: "camp, battle array" }, { jp: "須", en: "ought, by all means" }, { jp: "酢", en: "vinegar, sour" }, { jp: "垂", en: "droop, suspend" }, { jp: "帥", en: "commander, leading troops" }, { jp: "推", en: "conjecture, infer" }, { jp: "炊", en: "cook, boil" }, { jp: "睡", en: "drowsy, sleep" }, { jp: "粋", en: "chic, style" }, { jp: "翠", en: "green, kingfisher" }, { jp: "衰", en: "decline, wane" }, { jp: "遂", en: "consummate, accomplish" }, { jp: "酔", en: "drunk, feel sick" }, { jp: "錘", en: "weight, plumb bob" }, { jp: "随", en: "follow, though" }, { jp: "瑞", en: "congratulations" }, { jp: "髄", en: "marrow, pith" }, { jp: "崇", en: "adore, respect" }, { jp: "嵩", en: "be aggravated, grow worse" }, { jp: "枢", en: "hinge, pivot" }, { jp: "雛", en: "chick, squab" }, { jp: "据", en: "set, lay a foundation" }, { jp: "杉", en: "cedar, cryptomeria" }, { jp: "澄", en: "lucidity, be clear" }, { jp: "寸", en: "measurement, tenth of a shaku" }, { jp: "瀬", en: "rapids, current" }, { jp: "畝", en: "furrow, thirty tsubo" }, { jp: "是", en: "just so, this" }, { jp: "征", en: "subjugate, attack the rebellious" }, { jp: "整", en: "organize, arranging" }, { jp: "牲", en: "animal sacrifice, offering" }, { jp: "盛", en: "boom, prosper" }, { jp: "聖", en: "holy, saint" }, { jp: "製", en: "made in..., manufacture" }, { jp: "誠", en: "sincerity, admonish" }, { jp: "誓", en: "vow, swear" }, { jp: "請", en: "solicit, invite" }, { jp: "逝", en: "departed, die" }, { jp: "斉", en: "adjusted, alike" }, { jp: "惜", en: "pity, be sparing of" }, { jp: "斥", en: "reject, retreat" }, { jp: "析", en: "chop, divide" }, { jp: "碩", en: "large, great" }, { jp: "拙", en: "bungling, clumsy" }, { jp: "摂", en: "vicarious, surrogate" }, { jp: "窃", en: "stealth, steal" }, { jp: "節", en: "node, season" }, { jp: "舌", en: "tongue (radical 135)" }, { jp: "仙", en: "hermit, wizard" }, { jp: "宣", en: "proclaim, say" }, { jp: "扇", en: "fan, folding fan" }, { jp: "栓", en: "plug, bolt" }, { jp: "染", en: "dye, color" }, { jp: "潜", en: "submerge, conceal" }, { jp: "旋", en: "rotation, go around" }, { jp: "繊", en: "slender, fine" }, { jp: "薦", en: "recommend, mat" }, { jp: "践", en: "tread, step on" }, { jp: "遷", en: "transition, move" }, { jp: "銭", en: "coin, .01 yen" }, { jp: "銑", en: "pig iron" }, { jp: "鮮", en: "fresh, vivid" }, { jp: "善", en: "virtuous, good" }, { jp: "漸", en: "steadily, gradually advancing" }, { jp: "禅", en: "Zen, silent meditation" }, { jp: "繕", en: "darning, repair" }, { jp: "塑", en: "model, molding" }, { jp: "措", en: "set aside, give up" }, { jp: "疎", en: "alienate, rough" }, { jp: "礎", en: "cornerstone, foundation stone" }, { jp: "租", en: "tariff, crop tax" }, { jp: "粗", en: "coarse, rough" }, { jp: "素", en: "elementary, principle" }, { jp: "訴", en: "accusation, sue" }, { jp: "阻", en: "thwart, separate from" }, { jp: "僧", en: "Buddhist priest, monk" }, { jp: "創", en: "genesis, wound" }, { jp: "倉", en: "godown, warehouse" }, { jp: "喪", en: "miss, mourning" }, { jp: "壮", en: "robust, manhood" }, { jp: "奏", en: "play music, speak to a ruler" }, { jp: "爽", en: "refreshing, bracing" }, { jp: "惣", en: "all" }, { jp: "挿", en: "insert, put in" }, { jp: "操", en: "maneuver, manipulate" }, { jp: "曹", en: "office, official" }, { jp: "巣", en: "nest, rookery" }, { jp: "槽", en: "vat, tub" }, { jp: "綜", en: "rule, synthesize" }, { jp: "聡", en: "wise, fast learner" }, { jp: "荘", en: "villa, inn" }, { jp: "葬", en: "interment, bury" }, { jp: "蒼", en: "blue, pale" }, { jp: "藻", en: "seaweed, duckweed" }, { jp: "遭", en: "encounter, meet" }, { jp: "霜", en: "frost" }, { jp: "騒", en: "boisterous, make noise" }, { jp: "促", en: "stimulate, urge" }, { jp: "即", en: "instant, namely" }, { jp: "俗", en: "vulgar, customs" }, { jp: "属", en: "belong, genus" }, { jp: "賊", en: "burglar, rebel" }, { jp: "汰", en: "washing, sieving" }, { jp: "堕", en: "degenerate, descend to" }, { jp: "妥", en: "gentle, peace" }, { jp: "惰", en: "lazy, laziness" }, { jp: "駄", en: "burdensome, pack horse" }, { jp: "耐", en: "-proof, enduring" }, { jp: "怠", en: "neglect, laziness" }, { jp: "態", en: "attitude, condition" }, { jp: "泰", en: "peaceful, calm" }, { jp: "滞", en: "stagnate, be delayed" }, { jp: "胎", en: "womb, uterus" }, { jp: "逮", en: "apprehend, chase" }, { jp: "隊", en: "regiment, party" }, { jp: "黛", en: "blackened eyebrows" }, { jp: "鯛", en: "sea bream, red snapper" }, { jp: "第", en: "No., residence" }, { jp: "鷹", en: "hawk" }, { jp: "滝", en: "waterfall, rapids" }, { jp: "卓", en: "eminent, table" }, { jp: "啄", en: "peck, pick up" }, { jp: "択", en: "choose, select" }, { jp: "拓", en: "clear (the land), open" }, { jp: "沢", en: "swamp, marsh" }, { jp: "琢", en: "polish" }, { jp: "託", en: "consign, requesting" }, { jp: "濁", en: "voiced, uncleanness" }, { jp: "諾", en: "consent, assent" }, { jp: "只", en: "only, free" }, { jp: "但", en: "however, but" }, { jp: "辰", en: "sign of the dragon, 7-9AM" }, { jp: "奪", en: "rob, take by force" }, { jp: "脱", en: "undress, removing" }, { jp: "巽", en: "southeast" }, { jp: "棚", en: "shelf, ledge" }, { jp: "丹", en: "rust-colored, red" }, { jp: "嘆", en: "sigh, lament" }, { jp: "旦", en: "daybreak, dawn" }, { jp: "淡", en: "thin, faint" }, { jp: "端", en: "edge, origin" }, { jp: "胆", en: "gall bladder, courage" }, { jp: "誕", en: "nativity, be born" }, { jp: "鍛", en: "forge, discipline" }, { jp: "壇", en: "podium, stage" }, { jp: "弾", en: "bullet, twang" }, { jp: "暖", en: "warmth" }, { jp: "檀", en: "cedar, sandlewood" }, { jp: "智", en: "wisdom, intellect" }, { jp: "痴", en: "stupid, foolish" }, { jp: "稚", en: "immature, young" }, { jp: "致", en: "doth, do" }, { jp: "蓄", en: "amass, raise" },
        { jp: "逐", en: "pursue, drive away" }, { jp: "秩", en: "regularity, salary" }, { jp: "窒", en: "plug up, obstruct" }, { jp: "嫡", en: "legitimate wife, direct descent (non-bastard)" }, { jp: "宙", en: "mid-air, air" }, { jp: "忠", en: "loyalty, fidelity" }, { jp: "抽", en: "pluck, pull" }, { jp: "衷", en: "inmost, heart" }, { jp: "鋳", en: "casting, mint" }, { jp: "猪", en: "boar" }, { jp: "丁", en: "street, ward" }, { jp: "帳", en: "notebook, account book" }, { jp: "弔", en: "condolences, mourning" }, { jp: "張", en: "lengthen, counter for bows &amp; stringed instruments" }, { jp: "彫", en: "carve, engrave" }, { jp: "徴", en: "indications, sign" }, { jp: "懲", en: "penal, chastise" }, { jp: "挑", en: "challenge, contend for" }, { jp: "暢", en: "stretch" }, { jp: "潮", en: "tide, salt water" }, { jp: "眺", en: "stare, watch" }, { jp: "聴", en: "listen, headstrong" }, { jp: "脹", en: "dilate, distend" }, { jp: "腸", en: "intestines, guts" }, { jp: "蝶", en: "butterfly" }, { jp: "跳", en: "hop, leap up" }, { jp: "勅", en: "imperial order" }, { jp: "朕", en: "majestic plural, imperial we" }, { jp: "賃", en: "fare, fee" }, { jp: "鎮", en: "tranquilize, ancient peace-preservation centers" }, { jp: "陳", en: "exhibit, state" }, { jp: "津", en: "haven, port" }, { jp: "墜", en: "crash, fall (down)" }, { jp: "椎", en: "chinquapin, mallet" }, { jp: "塚", en: "hillock, mound" }, { jp: "槻", en: "Zelkova tree" }, { jp: "漬", en: "pickling, soak" }, { jp: "蔦", en: "vine, ivy" }, { jp: "椿", en: "camellia" }, { jp: "坪", en: "two-mat area, approx. thirty-six sq ft" }, { jp: "紬", en: "pongee (a knotted silk cloth)" }, { jp: "釣", en: "angling, fish" }, { jp: "鶴", en: "crane, stork" }, { jp: "亭", en: "pavilion, restaurant" }, { jp: "偵", en: "spy" }, { jp: "貞", en: "upright, chastity" }, { jp: "呈", en: "display, offer" }, { jp: "堤", en: "dike, bank" }, { jp: "帝", en: "sovereign, the emperor" }, { jp: "廷", en: "courts, imperial court" }, { jp: "悌", en: "serving our elders" }, { jp: "抵", en: "resist, reach" }, { jp: "提", en: "propose, take along" }, { jp: "禎", en: "happiness, blessed" }, { jp: "締", en: "tighten, tie" }, { jp: "艇", en: "rowboat, small boat" }, { jp: "訂", en: "revise, correct" }, { jp: "逓", en: "relay, in turn" }, { jp: "邸", en: "residence, mansion" }, { jp: "摘", en: "pinch, pick" }, { jp: "敵", en: "enemy, foe" }, { jp: "笛", en: "flute, clarinet" }, { jp: "哲", en: "philosophy, clear" }, { jp: "徹", en: "penetrate, clear" }, { jp: "撤", en: "remove, withdraw" }, { jp: "迭", en: "transfer, alternation" }, { jp: "典", en: "code, ceremony" }, { jp: "展", en: "unfold, expand" }, { jp: "添", en: "annexed, accompany" }, { jp: "吐", en: "spit, vomit" }, { jp: "斗", en: "Big Dipper, ten sho (vol)" }, { jp: "杜", en: "woods, grove" }, { jp: "奴", en: "guy, slave" }, { jp: "刀", en: "sword, saber" }, { jp: "悼", en: "lament, grieve over" }, { jp: "搭", en: "board, load (a vehicle)" }, { jp: "桃", en: "peach" }, { jp: "棟", en: "ridgepole, ridge" }, { jp: "痘", en: "pox, smallpox" }, { jp: "糖", en: "sugar" }, { jp: "統", en: "overall, relationship" }, { jp: "藤", en: "wisteria" }, { jp: "討", en: "chastise, attack" }, { jp: "謄", en: "mimeograph, copy" }, { jp: "豆", en: "bean (radical 151)" }, { jp: "踏", en: "step, trample" }, { jp: "透", en: "transparent, permeate" }, { jp: "陶", en: "pottery, porcelain" }, { jp: "騰", en: "leaping up, jumping up" }, { jp: "闘", en: "fight, war" }, { jp: "憧", en: "yearn after, long for" }, { jp: "洞", en: "den, cave" }, { jp: "瞳", en: "pupil (of eye)" }, { jp: "胴", en: "trunk, torso" }, { jp: "峠", en: "mountain peak, mountain pass" }, { jp: "匿", en: "hide, shelter" }, { jp: "徳", en: "benevolence, virtue" }, { jp: "督", en: "coach, command" }, { jp: "篤", en: "fervent, kind" }, { jp: "独", en: "single, alone" }, { jp: "凸", en: "convex, beetle brow" }, { jp: "寅", en: "sign of the tiger, 3-5AM" }, { jp: "酉", en: "west, bird" }, { jp: "屯", en: "barracks, police station" }, { jp: "惇", en: "sincere, kind" }, { jp: "敦", en: "industry, kindliness" }, { jp: "豚", en: "pork, pig" }, { jp: "奈", en: "Nara, what?" }, { jp: "那", en: "what?" }, { jp: "凪", en: "lull, calm" }, { jp: "捺", en: "press, print" }, { jp: "縄", en: "straw rope, cord" }, { jp: "楠", en: "camphor tree" }, { jp: "尼", en: "nun" }, { jp: "弐", en: "II, two" }, { jp: "虹", en: "rainbow" }, { jp: "如", en: "likeness, like" }, { jp: "尿", en: "urine" }, { jp: "妊", en: "pregnancy" }, { jp: "忍", en: "endure, bear" }, { jp: "寧", en: "rather, preferably" }, { jp: "粘", en: "sticky, glutinous" }, { jp: "乃", en: "from, possessive particle" }, { jp: "之", en: "of, this" }, { jp: "納", en: "settlement, obtain" }, { jp: "巴", en: "comma-design" }, { jp: "把", en: "grasp, faggot" }, { jp: "覇", en: "hegemony, supremacy" }, { jp: "派", en: "faction, group" }, { jp: "婆", en: "old woman, grandma" }, { jp: "俳", en: "haiku, actor" }, { jp: "廃", en: "abolish, obsolete" }, { jp: "排", en: "repudiate, exclude" }, { jp: "肺", en: "lungs" }, { jp: "輩", en: "comrade, fellow" }, { jp: "培", en: "cultivate, foster" }, { jp: "媒", en: "mediator, go-between" }, { jp: "梅", en: "plum" }, { jp: "賠", en: "compensation, indemnify" }, { jp: "陪", en: "obeisance, follow" }, { jp: "萩", en: "bush clover" }, { jp: "伯", en: "chief, count" }, { jp: "博", en: "Dr., command" }, { jp: "拍", en: "clap, beat (music)" }, { jp: "舶", en: "liner, ship" }, { jp: "迫", en: "urge, force" }, { jp: "漠", en: "vague, obscure" }, { jp: "縛", en: "truss, arrest" }, { jp: "肇", en: "beginning" }, { jp: "鉢", en: "bowl, rice tub" }, { jp: "伐", en: "fell, strike" }, { jp: "罰", en: "penalty, punishment" }, { jp: "閥", en: "clique, lineage" }, { jp: "鳩", en: "pigeon, dove" }, { jp: "隼", en: "falcon" }, { jp: "伴", en: "consort, accompany" }, { jp: "帆", en: "sail" }, { jp: "搬", en: "conveyor, carry" }, { jp: "班", en: "squad, corps" }, { jp: "畔", en: "paddy ridge, levee" }, { jp: "繁", en: "luxuriant, thick" }, { jp: "藩", en: "clan, enclosure" }, { jp: "範", en: "pattern, example" }, { jp: "煩", en: "anxiety, trouble" }, { jp: "頒", en: "distribute, disseminate" }, { jp: "盤", en: "tray, shallow bowl" }, { jp: "蛮", en: "barbarian" }, { jp: "卑", en: "lowly, base" }, { jp: "妃", en: "queen, princess" }, { jp: "扉", en: "front door, title page" }, { jp: "批", en: "criticism, strike" }, { jp: "披", en: "expose, open" }, { jp: "斐", en: "beautiful, patterned" }, { jp: "泌", en: "ooze, flow" }, { jp: "碑", en: "tombstone, monument" }, { jp: "秘", en: "secret, conceal" }, { jp: "緋", en: "scarlet, cardinal" }, { jp: "罷", en: "quit, stop" }, { jp: "肥", en: "fertilizer, get fat" }, { jp: "避", en: "evade, avoid" }, { jp: "尾", en: "tail, end" }, { jp: "微", en: "delicate, minuteness" }, { jp: "眉", en: "eyebrow" }, { jp: "柊", en: "holly" }, { jp: "彦", en: "lad, boy (ancient)" }, { jp: "姫", en: "princess" }, { jp: "媛", en: "beautiful woman, princess" }, { jp: "俵", en: "bag, bale" }, { jp: "彪", en: "spotted, mottled" }, { jp: "標", en: "signpost, seal" }, { jp: "漂", en: "drift, float (on liquid)" }, { jp: "票", en: "ballot, label" }, { jp: "評", en: "evaluate, criticism" }, { jp: "描", en: "sketch, compose" }, { jp: "苗", en: "seedling, sapling" }, { jp: "彬", en: "refined, gentle" }, { jp: "浜", en: "seacoast, beach" }, { jp: "賓", en: "V.I.P., guest" }, { jp: "頻", en: "repeatedly, recur" }, { jp: "敏", en: "cleverness, agile" }, { jp: "扶", en: "aid, help" }, { jp: "敷", en: "spread, pave" }, { jp: "腐", en: "rot, decay" }, { jp: "芙", en: "lotus, Mt Fuji" }, { jp: "譜", en: "musical score, music" }, { jp: "賦", en: "levy, ode" }, { jp: "赴", en: "proceed, get" }, { jp: "附", en: "affixed, attach" }, { jp: "侮", en: "scorn, despise" }, { jp: "楓", en: "maple" }, { jp: "蕗", en: "butterbur, bog rhubarb" }, { jp: "伏", en: "prostrated, bend down" }, { jp: "覆", en: "capsize, cover" }, { jp: "噴", en: "erupt, spout" }, { jp: "墳", en: "tomb, mound" }, { jp: "憤", en: "aroused, resent" }, { jp: "奮", en: "stirred up, be invigorated" }, { jp: "紛", en: "distract, be mistaken for" }, { jp: "雰", en: "atmosphere, fog" }, { jp: "丙", en: "third class, 3rd" }, { jp: "併", en: "join, get together" }, { jp: "塀", en: "fence, wall" }, { jp: "幣", en: "cash, bad habit" }, { jp: "弊", en: "abuse, evil" }, { jp: "柄", en: "design, pattern" }, { jp: "陛", en: "highness, steps (of throne)" }, { jp: "壁", en: "wall, lining (stomach)" }, { jp: "癖", en: "mannerism, habit" }, { jp: "碧", en: "blue, green" }, { jp: "偏", en: "partial, side" }, { jp: "遍", en: "everywhere, times" }, { jp: "弁", en: "valve, petal" }, { jp: "保", en: "protect, guarantee" }, { jp: "舗", en: "shop, store" }, { jp: "甫", en: "for the first time, not until" }, { jp: "輔", en: "help" }, { jp: "穂", en: "ear, ear (grain)" }, { jp: "墓", en: "grave, tomb" }, { jp: "慕", en: "pining, yearn for" }, { jp: "簿", en: "register, record book" }, { jp: "倣", en: "emulate, imitate" }, { jp: "俸", en: "stipend, salary" }, { jp: "奉", en: "observance, offer" }, { jp: "峰", en: "summit, peak" }, { jp: "崩", en: "crumble, die" }, { jp: "朋", en: "companion, friend" }, { jp: "泡", en: "bubbles, foam" }, { jp: "砲", en: "cannon, gun" }, { jp: "縫", en: "sew, stitch" }, { jp: "胞", en: "placenta, sac" }, { jp: "芳", en: "perfume, balmy" }, { jp: "萌", en: "show symptoms of, sprout" }, { jp: "褒", en: "praise, extol" }, { jp: "邦", en: "home country, country" }, { jp: "飽", en: "sated, tired of" }, { jp: "鳳", en: "male mythical bird" }, { jp: "鵬", en: "phoenix" }, { jp: "乏", en: "destitution, scarce" }, { jp: "傍", en: "bystander, side" }, { jp: "剖", en: "divide" }, { jp: "妨", en: "disturb, prevent" }, { jp: "房", en: "tassel, tuft" }, { jp: "某", en: "so-and-so, one" }, { jp: "冒", en: "risk, face" }, { jp: "紡", en: "spinning" }, { jp: "肪", en: "obese, fat" }, { jp: "膨", en: "swell, get fat" }, { jp: "謀", en: "conspire, cheat" }, { jp: "僕", en: "me, I (male)" }, { jp: "墨", en: "black ink, India ink" }, { jp: "撲", en: "slap, strike" }, { jp: "朴", en: "crude, simple" }, { jp: "牧", en: "breed, care for" }, { jp: "睦", en: "intimate, friendly" }, { jp: "没", en: "drown, sink" }, { jp: "堀", en: "ditch, moat" }, { jp: "奔", en: "run, bustle" }, { jp: "翻", en: "flip, turn over" }, { jp: "凡", en: "commonplace, ordinary" }, { jp: "盆", en: "basin, lantern festival" }, { jp: "摩", en: "chafe, rub" }, { jp: "魔", en: "witch, demon" }, { jp: "麻", en: "hemp, flax (radical 200)" }, { jp: "槙", en: "twig, ornamental evergreen" }, { jp: "幕", en: "curtain, bunting" }, { jp: "膜", en: "membrane" }, { jp: "柾", en: "straight grain, spindle tree" }, { jp: "亦", en: "also, again" }, { jp: "又", en: "or again, furthermore" }, { jp: "抹", en: "rub, paint" }, { jp: "繭", en: "cocoon" }, { jp: "麿", en: "I, you" }, { jp: "慢", en: "ridicule, laziness" }, { jp: "漫", en: "cartoon, involuntarily" }, { jp: "魅", en: "fascination, charm" }, { jp: "巳", en: "sign of the snake or serpent, 9-11AM" }, { jp: "岬", en: "headland, cape" }, { jp: "密", en: "secrecy, density (pop)" }, { jp: "稔", en: "harvest, ripen" }, { jp: "脈", en: "vein, pulse" }, { jp: "妙", en: "exquisite, strange" }, { jp: "矛", en: "halberd, arms" }, { jp: "霧", en: "fog, mist" }, { jp: "椋", en: "type of deciduous tree, grey starling" }, { jp: "婿", en: "bridegroom, son-in-law" }, { jp: "盟", en: "alliance, oath" }, { jp: "銘", en: "inscription, signature (of artisan)" }, { jp: "滅", en: "destroy, ruin" }, { jp: "免", en: "excuse, dismissal" }, { jp: "模", en: "imitation, copy" }, { jp: "茂", en: "overgrown, grow thick" }, { jp: "妄", en: "delusion, unnecessarily" }, { jp: "孟", en: "chief, beginning" }, { jp: "猛", en: "fierce, rave" }, { jp: "盲", en: "blind, blind man" }, { jp: "網", en: "netting, network" }, { jp: "耗", en: "decrease" }, { jp: "黙", en: "silence, become silent" }, { jp: "紋", en: "family crest, figures" }, { jp: "匁", en: "monme, 3.75 grams" }, { jp: "也", en: "to be (classical)" }, { jp: "冶", en: "melting, smelting" }, { jp: "耶", en: "question mark" }, { jp: "弥", en: "all the more, increasingly" }, { jp: "矢", en: "arrow (radical 111)" }, { jp: "厄", en: "unlucky, misfortune" }, { jp: "訳", en: "translate, reason" },
        { jp: "躍", en: "leap, dance" }, { jp: "靖", en: "peaceful" }, { jp: "柳", en: "willow" }, { jp: "愉", en: "pleasure, happy" }, { jp: "癒", en: "healing, cure" }, { jp: "諭", en: "rebuke, admonish" }, { jp: "唯", en: "solely, only" }, { jp: "佑", en: "help, assist" }, { jp: "宥", en: "soothe, calm" }, { jp: "幽", en: "seclude, confine to a room" }, { jp: "悠", en: "permanence, distant" }, { jp: "憂", en: "melancholy, grieve" }, { jp: "柚", en: "citron" }, { jp: "湧", en: "boil, ferment" }, { jp: "猶", en: "furthermore, still" }, { jp: "祐", en: "help" }, { jp: "裕", en: "abundant, rich" }, { jp: "誘", en: "entice, lead" }, { jp: "邑", en: "village, rural community" }, { jp: "雄", en: "masculine, male" }, { jp: "融", en: "dissolve, melt" }, { jp: "誉", en: "reputation, praise" }, { jp: "庸", en: "commonplace, ordinary" }, { jp: "揚", en: "raise, elevate" }, { jp: "揺", en: "swing, shake" }, { jp: "擁", en: "hug, embrace" }, { jp: "楊", en: "willow" }, { jp: "窯", en: "kiln, oven" }, { jp: "羊", en: "sheep (radical 123)" }, { jp: "耀", en: "shine, sparkle" }, { jp: "蓉", en: "lotus" }, { jp: "謡", en: "song, sing" }, { jp: "遥", en: "far off, distant" }, { jp: "養", en: "foster, bring up" }, { jp: "抑", en: "repress, well" }, { jp: "翼", en: "wing, plane" }, { jp: "羅", en: "gauze, thin silk" }, { jp: "裸", en: "naked, nude" }, { jp: "雷", en: "thunder, lightning bolt" }, { jp: "酪", en: "dairy products, whey" }, { jp: "嵐", en: "storm, tempest" }, { jp: "欄", en: "column, handrail" }, { jp: "濫", en: "excessive, overflow" }, { jp: "藍", en: "indigo" }, { jp: "蘭", en: "orchid, Holland" }, { jp: "覧", en: "perusal, see" }, { jp: "吏", en: "officer, an official" }, { jp: "履", en: "perform, complete" }, { jp: "李", en: "plum" }, { jp: "梨", en: "pear tree" }, { jp: "璃", en: "glassy, lapis lazuli" }, { jp: "痢", en: "diarrhea" }, { jp: "離", en: "detach, separation" }, { jp: "率", en: "ratio, rate" }, { jp: "琉", en: "precious stone, gem" }, { jp: "硫", en: "sulphur" }, { jp: "隆", en: "hump, high" }, { jp: "竜", en: "dragon, imperial" }, { jp: "慮", en: "prudence, thought" }, { jp: "虜", en: "captive, barbarian" }, { jp: "亮", en: "clear, help" }, { jp: "僚", en: "colleague, official" }, { jp: "凌", en: "endure, keep (rain)out" }, { jp: "寮", en: "dormitory, hostel" }, { jp: "猟", en: "game-hunting, shooting" }, { jp: "瞭", en: "clear" }, { jp: "稜", en: "angle, edge" }, { jp: "糧", en: "provisions, food" }, { jp: "諒", en: "fact, reality" }, { jp: "遼", en: "distant" }, { jp: "陵", en: "mausoleum, imperial tomb" }, { jp: "倫", en: "ethics, companion" }, { jp: "厘", en: "rin, 1/10 sen" }, { jp: "琳", en: "jewel, tinkling of jewelry" }, { jp: "臨", en: "look to, face" }, { jp: "隣", en: "neighboring" }, { jp: "麟", en: "Chinese unicorn, genius" }, { jp: "瑠", en: "lapis lazuli" }, { jp: "塁", en: "bases, fort" }, { jp: "累", en: "accumulate, involvement" }, { jp: "伶", en: "actor" }, { jp: "励", en: "encourage, be diligent" }, { jp: "嶺", en: "peak, summit" }, { jp: "怜", en: "wise" }, { jp: "玲", en: "sound of jewels" }, { jp: "鈴", en: "small bell, buzzer" }, { jp: "隷", en: "slave, servant" }, { jp: "霊", en: "spirits, soul" }, { jp: "麗", en: "lovely, beautiful" }, { jp: "暦", en: "calendar, almanac" }, { jp: "劣", en: "inferiority, be inferior to" }, { jp: "烈", en: "ardent, violent" }, { jp: "裂", en: "split, rend" }, { jp: "廉", en: "bargain, reason" }, { jp: "蓮", en: "lotus" }, { jp: "錬", en: "tempering, refine" }, { jp: "呂", en: "spine, backbone" }, { jp: "炉", en: "hearth, furnace" }, { jp: "露", en: "dew, tears" }, { jp: "廊", en: "corridor, hall" }, { jp: "朗", en: "melodious, clear" }, { jp: "楼", en: "watchtower, lookout" }, { jp: "浪", en: "wandering, waves" }, { jp: "漏", en: "leak, escape" }, { jp: "郎", en: "son, counter for sons" }, { jp: "禄", en: "fief, allowance" }, { jp: "倭", en: "Yamato, ancient Japan" }, { jp: "賄", en: "bribe, board" }, { jp: "惑", en: "beguile, delusion" }, { jp: "枠", en: "frame, framework" }, { jp: "亘", en: "span, range" }, { jp: "侑", en: "urge to eat" }, { jp: "勁", en: "strong" }, { jp: "奎", en: "star, god of literature" }, { jp: "崚", en: "mountains towering in a row" }, { jp: "彗", en: "comet" }, { jp: "昴", en: "the Pleiades" }, { jp: "晏", en: "late, quiet" }, { jp: "晨", en: "morning, early" }, { jp: "晟", en: "clear" }, { jp: "暉", en: "shine, light" }, { jp: "栞", en: "bookmark, guidebook" }, { jp: "椰", en: "coconut tree" }, { jp: "毬", en: "burr, ball" }, { jp: "洸", en: "sparkling water" }, { jp: "洵", en: "alike, truth" }, { jp: "滉", en: "deep and broad" }, { jp: "漱", en: "gargle, rinse mouth" }, { jp: "澪", en: "water route, shipping channel" }, { jp: "燎", en: "burn, bonfire" }, { jp: "燿", en: "shine" }, { jp: "瑶", en: "beautiful as a jewel" }, { jp: "皓", en: "white, clear" }, { jp: "眸", en: "pupil of the eye" }, { jp: "笙", en: "a reed instrument" }, { jp: "綺", en: "figured cloth, beautiful" }, { jp: "綸", en: "thread, silk cloth" }, { jp: "翔", en: "soar, fly" }, { jp: "脩", en: "dried meat" }, { jp: "茉", en: "jasmine" }, { jp: "莉", en: "jasmine" }, { jp: "菫", en: "the violet" }, { jp: "詢", en: "consult with" }, { jp: "諄", en: "tedious" }, { jp: "赳", en: "strong and brave" }, { jp: "迪", en: "edify, way" }, { jp: "頌", en: "eulogy" }, { jp: "颯", en: "sudden, quick" }, { jp: "黎", en: "dark, black" }, { jp: "凜", en: "cold, strict" }, { jp: "熙", en: "bright, sunny" }, { jp: "欄", en: "railing, balustrade" }, { jp: "廊", en: "corridor, porch" }, { jp: "朗", en: "clear, bright" }, { jp: "虜", en: "capture, imprison" }, { jp: "隆", en: "prosperous, plentiful" }, { jp: "塚", en: "cemetery, tomb" }, { jp: "猪", en: "pig" }, { jp: "祥", en: "good luck" }]
    };
    const tCount = 3;
    const kCount = 4;
    let ngmi = true;
    let jltpLevel = 1;
    const tQuestions = new Array(tCount);
    for (let t = 0; t < tCount; t++) tQuestions[t] = new Array(kCount);
    const tAnswers = new Array(tCount);
    let koroTimeout;
    
    const koroSetProblem = () => {
        if (koroTimeout) clearTimeout(koroTimeout);
        if (ngmi) {
            const dataset = (
                jltpLevel === 5 ? kanjiData.n5 :
                jltpLevel === 4 ? [...kanjiData.n5, ...kanjiData.n4] :
                jltpLevel === 3 ? [...kanjiData.n5, ...kanjiData.n4, ...kanjiData.n3] :
                jltpLevel === 2 ? [...kanjiData.n5, ...kanjiData.n4, ...kanjiData.n3, ...kanjiData.n2] :
                jltpLevel === 1 ? [...kanjiData.n5, ...kanjiData.n4, ...kanjiData.n3, ...kanjiData.n2, ...kanjiData.n1] :
                kanjiData.n5
            ).sort(() => .5 - Math.random()).slice(0, tCount * kCount);
            for (let t = 0; t < tCount; t++) {
                tAnswers[t] = -1;
                const kIndex = Math.floor(Math.random() * kCount);
                for (let k = 0; k < kCount; k++) {
                    tQuestions[t][k] = {
                        jp: dataset[t * kCount + k].jp,
                        en: dataset[t * kCount + k].en,
                        ok: kIndex === k
                    }
                }
            }
            koroResetDOM();
            koroTimeout = setTimeout(() => koroSetProblem(), 15000);
        }
    }

    const koroClear = () => {
        if (document.getElementById('koroContainer')) document.getElementById('koroContainer').remove();
        ngmi = false;
    }

    const koroResetDOM = () => {
        let koroContainer = document.getElementById('koroContainer');
        if (!koroContainer) {
            koroContainer = document.createElement("div");
            koroContainer.id = 'koroContainer';
            document.body.appendChild(koroContainer);
        }
        
        let koroPopup = document.getElementById('koroPopup');
        if (!koroPopup) {
            koroPopup = document.createElement("div");
            koroPopup.id = 'koroPopup';
            koroContainer.appendChild(koroPopup);
        }

        for (let t = 0; t < tCount; t++) {
            let tCanvas = document.getElementById(`tCanvas${t}`);
            if (!tCanvas) {
                tCanvas = document.createElement("canvas");
                tCanvas.id = `tCanvas${t}`;
                tCanvas.classList = 'koro-question';
                tCanvas.width = 304;
                tCanvas.height = 32;
                koroPopup.appendChild(tCanvas);
            }

            const tCx = tCanvas.getContext('2d');
            tCx.save();
            tCx.clearRect(0, 0, 304, 32);
            tCx.fillStyle = '#fff';
            tCx.textAlign = "center";
            tCx.font = "15px Arial";
            tCx.fillText(tQuestions[t].find(q => q.ok).en, 152, 23);
            tCx.restore();
            
            let tContainer = document.getElementById(`tContainer${t}`);
            if (!tContainer) {
                tContainer = document.createElement("div");
                tContainer.id = `tContainer${t}`;
                koroPopup.appendChild(tContainer);
            }
            tContainer.classList = 'koro-kanji-container';

            tQuestions[t].forEach(({ jp, en, ok }, k) => {
                let kCanvas = document.getElementById(`kCanvas${t * kCount + k}`);
                if (!kCanvas) {
                    kCanvas = document.createElement("canvas");
                    kCanvas.id = `kCanvas${t * kCount + k}`;
                    kCanvas.width = 64;
                    kCanvas.height = 64;
                    kCanvas.onclick = () => {
                        if (tAnswers[t] === -1) {
                            tContainer.classList = 'koro-kanji-container answered';
                            tAnswers[t] = k;
                            for (let x = 0; x < kCount; x++) {
                                const cvs = document.getElementById(`kCanvas${t * kCount + x}`);
                                cvs.classList += ` koro-${tQuestions[t][x].ok ? 'ogey' : 'rrat'}`;
                            }
                            if (!tAnswers.find(a => a === -1)) {
                                if (tQuestions.some((q, t) => !q[tAnswers[t]].ok)) koroSetProblem();
                                else koroClear();
                            }
                        }
                    }
                    tContainer.appendChild(kCanvas);
                }
                kCanvas.classList = 'koro-kanji';

                const kCx = kCanvas.getContext('2d');
                kCx.save();
                kCx.clearRect(0, 0, 64, 64);
                kCx.scale(2, 2);
                kCx.textAlign = "center";
                kCx.fillStyle = '#fff';
                kCx.font = "19px Arial";
                kCx.fillText(jp, 16, 23);
                kCx.restore();
            });
        }

        let ngmiBtn = document.getElementById('ngmiBtn');
        if (!ngmiBtn) {
            ngmiBtn = document.createElement("p");
            ngmiBtn.id = 'ngmiBtn';
            ngmiBtn.innerHTML = 'Add <strong>ngmi</strong> in your profile to remove the captcha';
            koroContainer.appendChild(ngmiBtn);
        }
    }


    // --- Pinned messages ---

    // navbar elem
    const pinnedElem = document.createElement("li");
    pinnedElem.classList = "dropdown";
    pinnedElem.id = "pin-dropdown";

    const pinnedTitle = document.createElement("a");
    pinnedTitle.classList = "dropdown-toggle";
    pinnedTitle.href = "#";
    pinnedTitle.setAttribute("data-toggle", "dropdown");
    pinnedTitle.setAttribute("aria-expanded", "false");
    pinnedTitle.innerHTML = '📌';

    const dropdownMenuElem = document.createElement("ul");
    dropdownMenuElem.classList = "dropdown-menu";
    const pinContainer = document.createElement("div");
    pinContainer.id = "pinContainer";
    dropdownMenuElem.appendChild(pinContainer);

    // initial fetch
    fetch('https://hollow-matsuridos.herokuapp.com/', {
        mode: 'cors',
        headers: { 'Access-Control-Allow-Origin': '*' }
    }).then(res => {
        if (res.status !== 200) {
            console.log('Error, status code: ' + res.status);
            return;
        }
        res.json().then(data => data.forEach(({ _id, user, message }) => {
            const pinElem = document.createElement("li");
            pinElem.innerHTML = `<div class="pin-message">${user}<br>${message}</div><button class="pin-close" onclick="socket.emit('chatMsg',{msg:'[fp]${_id}[/fp]pinremove',meta:{}});">X</button>`;
            pinElem.onclick = event => {
                event.preventDefault();
                navigator.clipboard.writeText(_id);
            }
            pinContainer.appendChild(pinElem);
        }));
    }).catch(err => console.log('Fetch Error :-S', err));

    navbarElem.appendChild(pinnedElem);
    pinnedElem.appendChild(pinnedTitle);
    pinnedElem.appendChild(dropdownMenuElem);


    // --- Delete Video ---


    const videoMenu = document.getElementsByClassName("dropdown-menu")[1];
    const videoOption = document.createElement("li");
    videoOption.innerHTML = '<a href="javascript:void(0)">Delete Video</a>';
    videoOption.onclick = () => {
        const container = document.getElementsByClassName('embed-responsive')[0];
        container.style.display = container.innerHTML !== '' ? 'none' : 'block';
        container.innerHTML = container.innerHTML !== '' ? '' : '<iframe class="embed-responsive-item" id="ytapiplayer" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="687" height="387" src=""></iframe>';
    }
    setTimeout(() => videoMenu.appendChild(videoOption), 1000);


    // --- PM notification sound ---


    const pmSound = document.createElement("audio");
    pmSound.setAttribute('src', 'https://files.catbox.moe/0wzzdq.mp3');
    pmSound.volume = 0.75;
    socket.on("pm", data => {
        const pmElem = document.getElementById(`pm-${data.username}`);
        if (pmElem) {
            if (window.getComputedStyle(pmElem).position === 'static') {
                pmElem.children[0].style.background = '#f00';
                pmSound.play();
            } else pmElem.children[0].style.background = 'none';
        }
    });

    
    // --- Poll notification sound ---


    let pollAlert = false;
    const pollSound = document.createElement("audio");
    pollSound.setAttribute('src', 'https://files.catbox.moe/m8md1e.mp3');
    pollSound.volume = 0.75;
    socket.on('newPoll', data => {
        if (pollAlert) pollSound.play();
    });


    // --- Socket.io message listener ---


    let nndToggle = true;
    let gayToggle = true;
    socket.on("chatMsg", ({ username, msg, meta, time }) => {
        if (IGNORED && IGNORED.find(user => user === username)) return;

        // --- Mentions ---

        if (CLIENT.name && username != CLIENT.name && highlightsMe(msg)) addMention(username, msg, meta, time);

        // --- Add oshi mark to username (user locked) ---


        if (findUserlistItem(CLIENT.name) && findUserlistItem(CLIENT.name).data("profile").text.match(/oshi:\"(\w)*\"/)) {
            Array.from(document.getElementById('messagebuffer').lastChild.getElementsByClassName('username')).forEach(nameElem => {
                const oshiSearch = findUserlistItem(username).data("profile").text.match(/oshi:\"(\w)*\"/);
                const oshi = oshiSearch ? oshiSearch[0].substring(6, oshiSearch[0].length - 1) : null;
                if (oshi && holodata[oshi]) nameElem.innerHTML = `${username} <span style="font-weight:100 !important">${holodata[oshi]}</span>`;
            });
        }

        
        // --- fp tag ---


        const flpSearch = msg.match(/\[fp\][^]*\[\/fp\]/);
        if (flpSearch) {
            const text = flpSearch[0].replace('[fp]', '').replace('[/fp]', '');
            const args = flpSearch.input.replace(flpSearch[0], '');

            // tag options
            const nnd = args.match(/nnd/) && nndToggle;
            const gay = args.match(/gay/) && gayToggle;
            const pin = args.match(/pin/);
            const remove = args.match(/remove/);
            const right = args.match(/right/);
            const bounce = args.match(/bounce/);

            const chatMsgElem = document.getElementById('messagebuffer').lastChild.lastChild;
            const textLength = chatMsgElem.innerText.length;
            chatMsgElem.innerHTML = "";

            const containerElem = document.createElement(nnd ? "marquee" : "div");
            // containerElem.style.display = 'flex';
            containerElem.style.alignItems = 'center';


            // --- pinned messages ---


            if (pin && CLIENT.name) {
                if (CLIENT.name === username) {
                    if (remove) {
                        containerElem.style.color = '#f88';
                        // remove message
                        const id = text;
                        fetch('https://hollow-matsuridos.herokuapp.com/delete/' + id, {
                            method: 'POST',
                            mode: 'cors',
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                                'Access-Control-Allow-Origin': '*'
                            },
                            body: ''
                        }).then(res => {
                            if (res.status !== 200) {
                                console.log('Error, status code: ' + res.status);
                                return;
                            }
                        });
                    }
                    else {
                        // add message
                        const details = {
                            'User': username,
                            'Message': text.replace(String.fromCharCode(160), '').split(' ').join('').length ? text : `¯\\_(ツ)_/¯`
                        };
                        const formBody = [];
                        for (var property in details) {
                            const encodedKey = encodeURIComponent(property);
                            const encodedValue = encodeURIComponent(details[property]);
                            formBody.push(encodedKey + "=" + encodedValue);
                        }
                        fetch('https://hollow-matsuridos.herokuapp.com/create', {
                            method: 'POST',
                            mode: 'cors',
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                                'Access-Control-Allow-Origin': '*'
                            },
                            body: formBody.join("&")
                        }).then(res => {
                            if (res.status !== 200) {
                                console.log('Error, status code: ' + res.status);
                                return;
                            }
                        });
                    }
                }

                // update messages
                setTimeout(() => {
                    pinContainer.innerHTML = "";
                    fetch('https://hollow-matsuridos.herokuapp.com/', {
                        mode: 'cors',
                        headers: { 'Access-Control-Allow-Origin': '*' }
                    }).then(res => {
                        if (res.status !== 200) {
                            console.log('Error, status code: ' + res.status);
                            return;
                        }
                        res.json().then(data => data.forEach(({ _id, user, message }) => {
                            const pinElem = document.createElement("li");
                            pinElem.innerHTML = `<div class="pin-message">${user}<br>${message}</div><button class="pin-close" onclick="socket.emit('chatMsg',{msg:'[fp]${_id}[/fp]pinremove',meta:{}});">X</button>`;
                            pinContainer.appendChild(pinElem);
                        }));
                    }).catch(err => console.log('Fetch Error :-S', err));
                }, 1000);
            }

            if (nnd) {
                if (right) containerElem.direction = 'right';
                if (bounce) containerElem.behavior = 'alternate';
                containerElem.scrollAmount = 5 + Math.floor(Math.random() * 10);
                containerElem.style.color = `hsl(${360 * Math.random()}, 100%, ${75 + 25 * Math.random()}%)`;
                containerElem.style.fontSize = `${70 + Math.floor(60 * Math.random()) + (document.getElementById('flarepeek_chat_video_only').checked ? 100 : 0)}%`;
            }
            if (gay) {
                let imgBuffer = false;
                let img = '';
                for (let i = 0; i < text.length; i++) {
                    if (text[i] === '<') imgBuffer = true;
                    if (!imgBuffer) {
                        const charElem = document.createElement("span");
                        charElem.style.color = "hsl(" + (360 * i / textLength) + ",80%,50%)";
                        charElem.innerHTML = text[i];
                        containerElem.appendChild(charElem);
                    } else {
                        img += text[i];
                        if (text[i] === '>') {
                            containerElem.insertAdjacentHTML('beforeend', img);
                            imgBuffer = false;
                            img = '';
                        }
                    }
                }
            } else containerElem.innerHTML = text.replace(String.fromCharCode(160), '').split(' ').join('').length ? (remove ? `📌 ${text} was removed` : text) : `¯\\_(ツ)_/¯`;

            chatMsgElem.appendChild(containerElem);
        }

        const messElem = document.getElementById('messagebuffer').lastChild;
        const msgFilter = ['--filter1', '--filter2', '--filter3', '--filter4'].includes(msg.substr(msg.length - 9)) ? msg.substr(msg.length - 7) : 'filter1';
        const cmdBuffer = msg.substring(0, 3);
        if (msg.substring(0, 4) === '/def') messElem.classList.add("filter1css");
        else if (msg.substring(0, 5) === '/game') messElem.classList.add("filter2css");
        else if (msg.substring(0, 5) === '/blog') messElem.classList.add("filter3css");
        else if (msg.substring(0, 3) === '/en') messElem.classList.add("filter4css");
        else messElem.classList.add(msgFilter + "css");

        if (['--filter1', '--filter2', '--filter3', '--filter4'].includes(msg.substr(msg.length - 9))) document.getElementById('messagebuffer').lastChild.lastChild.innerHTML = document.getElementById('messagebuffer').lastChild.lastChild.innerHTML.replace("--" + msgFilter, '');
        if (msg.substring(0, 4) === '/def') document.getElementById('messagebuffer').lastChild.lastChild.innerHTML = document.getElementById('messagebuffer').lastChild.lastChild.innerHTML.replace('/def', '');
        if (msg.substring(0, 5) === '/game') document.getElementById('messagebuffer').lastChild.lastChild.innerHTML = document.getElementById('messagebuffer').lastChild.lastChild.innerHTML.replace('/game', '');
        if (msg.substring(0, 5) === '/blog') document.getElementById('messagebuffer').lastChild.lastChild.innerHTML = document.getElementById('messagebuffer').lastChild.lastChild.innerHTML.replace('/blog', '');
        if (msg.substring(0, 3) === '/en') document.getElementById('messagebuffer').lastChild.lastChild.innerHTML = document.getElementById('messagebuffer').lastChild.lastChild.innerHTML.replace('/en', '');


        Array.from(document.getElementsByClassName("channel-emote")).filter(e => e.title === "mikocough").forEach(elem => elem.onclick = e => {
          if (Math.random() > .9) mikoCough.play();
        });
    });

    $.fn.bindFirst = function(name, fn) {
        this.on(name, fn);
        this.each(function() {
            var handlers = $._data(this, 'events')[name.split('.')[0]];
            var handler = handlers.pop();
            handlers.splice(0, 0, handler);
        });
    };
    $("#chatline").bindFirst("keydown",ev => {
        if (ev.keyCode == 13) {
            if (CHATTHROTTLE || !$("#chatline").val().trim()) return;
            if (filterValue !== '1') $("#chatline").val($("#chatline").val() + " --filter" + filterValue);
        }
    });
    $("#chatline").keydown(ev => {
        if (ev.keyCode == 38) {
            $("#chatline").val($("#chatline").val().replace(" --filter1", "").replace(" --filter2", "").replace(" --filter3", "").replace(" --filter4", ""));
            ev.preventDefault();
            return false;
        } else if (ev.keyCode == 40) {
            $("#chatline").val($("#chatline").val().replace(" --filter1", "").replace(" --filter2", "").replace(" --filter3", "").replace(" --filter4", ""));
            ev.preventDefault();
            return false;
        } else if (ev.keyCode == 9 && $("#chatline").val() === "") {
            $("#filterSelect").val($("#filterSelect").val() == '1' ? '2'
                : $("#filterSelect").val() == '2' ? '3'
                : $("#filterSelect").val() == '3' ? '4'
                : $("#filterSelect").val() == '4' ? '1' : '1');
            filterValue = document.getElementById("filterSelect").value;

            document.getElementById("chatline").style.boxShadow =
                filterValue == '2' ? `inset 0 0 0 2px ${filter2color}` : 
                filterValue == '3' ? `inset 0 0 0 2px ${filter3color}` :
                filterValue == '4' ? `inset 0 0 0 2px ${filter4color}` :
                'none';
        }
    });


    // --- fp tag shortcut ---


    let keyHeld = false;
    window.onkeyup = event => keyHeld = false;
    const fpShortcut = event => {
        const inputBox = document.getElementById("chatline");
        const inputVal = inputBox.value;
        if (!keyHeld && event.ctrlKey && !event.shiftKey && String.fromCharCode(event.which).toLowerCase() === 'q') {
            keyHeld = true;
            event.preventDefault();
            const selSt = inputBox.selectionStart;
            const selEnd = inputBox.selectionEnd;
            if (inputBox === document.activeElement) {
                if (inputBox.selectionStart == inputBox.selectionEnd) {
                    inputBox.value = `${inputVal.substring(0, selSt)}[fp]${inputVal.substring(selSt, selEnd)}[/fp]${inputVal.substring(selEnd, inputVal.length)}`;
                    inputBox.setSelectionRange(selSt + 4, selSt + 4);
                } else if (inputBox.selectionStart < inputBox.selectionEnd) {
                    inputBox.value = `${inputVal.substring(0, selSt)}[fp]${inputVal.substring(selSt, selEnd)}[/fp]${inputVal.substring(selEnd, inputVal.length)}`;
                    inputBox.setSelectionRange(selEnd + 9, selEnd + 9);
                }
            }
        }
    }
    window.onkeydown = fpShortcut;


    // --- Flare Button ---


    const button = document.createElement('button');
    button.id = 'flarepeek';
    button.classList = 'flareAnim';
    button.onclick = () => {
        document.getElementById('flarepeek').classList.toggle('flareAnim');
        const bubble = document.getElementById('flareBubble');
        bubble.style.display = bubble.style.display === 'none' ? 'flex' : 'none';
        const tail = document.getElementById('flareTail');
        tail.style.display = tail.style.display === 'none' ? 'block' : 'none';
    }
    document.body.append(button);

    const tail = document.createElement('div');
    tail.id = 'flareTail';
    tail.style.display = 'none';
    document.body.append(tail);

    const bubble = document.createElement('div');
    bubble.id = 'flareBubble';
    bubble.style.display = 'none';
    document.body.append(bubble);

    // --- Kororeps popup ---

    const koroBtnContainer = document.createElement("div");
    koroBtnContainer.style.display = "flex";
    koroBtnContainer.style.justifyContent = "space-evenly";
    bubble.append(koroBtnContainer);
    
    const koropop = document.createElement('button');
    koropop.id = 'koropop';
    koropop.innerHTML = '<img class="channel-emote" src="https://cdn.discordapp.com/attachments/376819467688345612/801173035167121408/LEARNJAPANESE.png">';
    koropop.onclick = () => {
        const dochtml = `<!DOCTYPE html><html><head><title>Kororeps</title><meta charset="utf-8"/></head><body></body><script>
            window.onload = () => {
                const koroscript = document.createElement('script');
                koroscript.type = 'text/javascript';
                koroscript.src = "https://dl.dropboxusercontent.com/s/uz1ki50koyez9bx/kororeps.js?dl=0";
                document.body.appendChild(koroscript);
            }
            </script></html>`;
    
        const winUrl = URL.createObjectURL(new Blob([dochtml], { type: "text/html" }));
        const win = window.open(winUrl + '#n=' + jltpLevel + (CLIENT.name ? ';u=' + CLIENT.name : ''),"win",`width=600,height=600`);
    }
    koroBtnContainer.append(koropop);

    const koroscore = document.createElement('button');
    koroscore.id = 'koroscore';
    koroscore.innerHTML = '<img class="channel-emote" src="https://cdn.discordapp.com/attachments/376819467688345612/808306140282617866/qmxbci.png">';
    koroscore.onclick = () => {
        const dochtml = `<!DOCTYPE html><html><head><title>Scoreboard</title><meta charset="utf-8"/></head><body></body><script>
            window.onload = () => {
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = "https://dl.dropboxusercontent.com/s/0bq3tbj4enqn9ad/scoreboard.js?dl=0";
                document.body.appendChild(script);
            }
            </script></html>`;
    
        const winUrl = URL.createObjectURL(new Blob([dochtml], { type: "text/html" }));
        const win = window.open(winUrl,"win",`width=600,height=600`);
    }
    koroBtnContainer.append(koroscore);
    
    const korokanji = document.createElement('button');
    korokanji.id = 'korokanji';
    korokanji.innerHTML = '<img class="channel-emote" src="https://cdn.discordapp.com/attachments/376819467688345612/806126278146392074/robefuck.png">';
    korokanji.onclick = () => {
        const dochtml = `<!DOCTYPE html><html><head><title>Kanji</title><meta charset="utf-8"/></head><body></body><script>
            window.onload = () => {
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = "https://dl.dropboxusercontent.com/s/6we952waf0f4vos/kanji.js?dl=0";
                document.body.appendChild(script);
            }
            </script></html>`;
    
        const winUrl = URL.createObjectURL(new Blob([dochtml], { type: "text/html" }));
        const win = window.open(winUrl,"win");
    }
    koroBtnContainer.append(korokanji);


    // --- Checkbox Options ---


    const options = [{
        id: 'background',
        desc: 'Change Background',
        func: self => {
            const checkboxElem = document.getElementById(`flarepeek_${self.id}`);
            const textElem = document.getElementById(`flarepeek_${self.id}_text`);
            if (checkboxElem && textElem) self.css = checkboxElem.checked && textElem.value && textElem.value !== '' ? `body { background-image: url(${textElem.value}); }` : null;
        },
        text: {
            value: '',
            inputEvent: self => {
                document.getElementById(`flarepeek_${self.id}`).checked = false;
                self.text.value = document.getElementById(`flarepeek_${self.id}_text`).value;
            }
        }
    }, {
        id: 'fuck_snow',
        desc: 'rip toasters',
        setupFunc: self => {
            const container = document.createElement("div");
            container.id = "snowContainer";
            document.body.insertBefore(container, document.body.firstChild);

            const checkboxElem = document.getElementById(`flarepeek_${self.id}`);
            if (checkboxElem && !checkboxElem.checked) {
                for (let i = 0; i < 100; i++) {
                    let o = document.createElement("div");
                    o.classList = "snow";
                    container.appendChild(o);
                }
            }
        },
        func: self => {
          const container = document.getElementById("snowContainer");
            const checkboxElem = document.getElementById(`flarepeek_${self.id}`);
            if (checkboxElem && checkboxElem.checked) {
                var paras = document.getElementsByClassName('snow');
                while(paras[0]) paras[0].parentNode.removeChild(paras[0]);
            } else if (container) {
                for (let i = 0; i < 100; i++) {
                    let o = document.createElement("div");
                    o.classList = "snow";
                    container.appendChild(o);
                }
            }
        }
    }, {
        id: 'poll_alert',
        desc: 'Add a poll sound alert',
        func: self => pollAlert = !pollAlert
    }, {
        id: 'filter_1',
        desc: 'Hide the default chat',
        func: self => {
            filter1style.disabled = !filter1style.disabled;
            document.getElementById("messagebuffer").scrollTop = document.getElementById("messagebuffer").scrollHeight;
        }
    }, {
        id: 'filter_2',
        desc: 'Hide the game chat',
        func: self => {
            filter2style.disabled = !filter2style.disabled;
            document.getElementById("messagebuffer").scrollTop = document.getElementById("messagebuffer").scrollHeight;
        }
    }, {
        id: 'filter_3',
        desc: 'Hide the blog chat',
        func: self => {
            filter3style.disabled = !filter3style.disabled;
            document.getElementById("messagebuffer").scrollTop = document.getElementById("messagebuffer").scrollHeight;
        }
    }, {
        id: 'filter_4',
        desc: 'Hide en chat',
        func: self => {
            filter4style.disabled = !filter4style.disabled;
            document.getElementById("messagebuffer").scrollTop = document.getElementById("messagebuffer").scrollHeight;
        }
    }, {
        id: 'filter_2_color',
        desc: 'Custom game color',
        func: self => {
            const checkboxElem = document.getElementById(`flarepeek_${self.id}`);
            const textElem = document.getElementById(`flarepeek_${self.id}_text`);
            if (checkboxElem && checkboxElem.checked && textElem && textElem.value && textElem.value !== '') {
                filter2color = textElem.value;
                if (filterValue == '2') document.getElementById("chatline").style.boxShadow = `inset 0 0 0 2px ${filter2color}`;
            }
            self.css = `.filter2css {border-left:${filter2color} 3px solid !important}`;
        },
        text: {
            value: '#f44',
            inputEvent: self => {
                document.getElementById(`flarepeek_${self.id}`).checked = false;
                self.text.value = document.getElementById(`flarepeek_${self.id}_text`).value;
            }
        }
    }, {
        id: 'filter_3_color',
        desc: 'Custom blog color',
        func: self => {
            const checkboxElem = document.getElementById(`flarepeek_${self.id}`);
            const textElem = document.getElementById(`flarepeek_${self.id}_text`);
            if (checkboxElem && checkboxElem.checked && textElem && textElem.value && textElem.value !== '') {
                filter3color = textElem.value;
                if (filterValue == '3') document.getElementById("chatline").style.boxShadow = `inset 0 0 0 2px ${filter3color}`;
            }
            self.css = `.filter3css {border-left:${filter3color} 3px solid !important}`;
        },
        text: {
            value: '#8f8',
            inputEvent: self => {
                document.getElementById(`flarepeek_${self.id}`).checked = false;
                self.text.value = document.getElementById(`flarepeek_${self.id}_text`).value;
            }
        }
    }, {
        id: 'filter_4_color',
        desc: 'Custom en color',
        func: self => {
            const checkboxElem = document.getElementById(`flarepeek_${self.id}`);
            const textElem = document.getElementById(`flarepeek_${self.id}_text`);
            if (checkboxElem && checkboxElem.checked && textElem && textElem.value && textElem.value !== '') {
                filter4color = textElem.value;
                if (filterValue == '4') document.getElementById("chatline").style.boxShadow = `inset 0 0 0 2px ${filter4color}`;
            }
            self.css = `.filter4css {border-left:${filter4color} 3px solid !important}`;
        },
        text: {
            value: '#fff',
            inputEvent: self => {
                document.getElementById(`flarepeek_${self.id}`).checked = false;
                self.text.value = document.getElementById(`flarepeek_${self.id}_text`).value;
            }
        }
    }, {
        id: 'reveal_spoilers',
        desc: 'Reveal spoilers',
        css: `.spoiler { color: #ff8; }`
    }, {
        id: 'chat_video_ratio',
        desc: '>chat:video ratio',
        func: self => {
            const checkboxElem = document.getElementById(`flarepeek_${self.id}`);
            const rangeElem = document.getElementById(`flarepeek_${self.id}_range`);
            if (checkboxElem && rangeElem) {
                self.css = checkboxElem.checked ? `
                #videowrap { width: ${(100 - rangeElem.value)}% !important; }
                #videowrap-header {display:none} #chatwrap { width: ${rangeElem.value}% !important; }` : null;
            }
        },
        range: {
            value: 50,
            min: 0,
            max: 100,
            step: 1,
            inputEvent: self => {
                document.getElementById(`flarepeek_${self.id}`).checked = false;
                self.range.value = document.getElementById(`flarepeek_${self.id}_range`).value;
            }
        }
    }, {
        id: 'chat_transparency',
        desc: 'Chat Transparency',
        func: self => {
            const checkboxElem = document.getElementById(`flarepeek_${self.id}`);
            const rangeElem = document.getElementById(`flarepeek_${self.id}_range`);
            if (checkboxElem && rangeElem) {
                self.css = checkboxElem.checked ? `
                #userlist { background-color: rgba(0, 0, 0, ${(1 - rangeElem.value)}) !important; }
                .linewrap { background-color: rgba(0,0,0,${(1 - rangeElem.value)}) }` : null;
            }
        },
        range: {
            value: .5,
            min: 0,
            max: 1,
            step: .05,
            inputEvent: self => {
                document.getElementById(`flarepeek_${self.id}`).checked = false;
                self.range.value = document.getElementById(`flarepeek_${self.id}_range`).value;
            }
        }
    }, {
        id: 'chat_video_only',
        desc: 'Chat & video only, no bullshit',
        setupFunc: self => {
            const aquaButton = document.createElement('button');
            aquaButton.id = 'aquaButton';
            aquaButton.onclick = () => {
                const chatwrap = document.getElementById('chatwrap');
                chatwrap.style.pointerEvents = chatwrap.style.pointerEvents === 'none' ? 'all' : 'none';
                chatwrap.style.opacity = chatwrap.style.pointerEvents === 'none' ? 0.25 : 1;
            }
            document.body.append(aquaButton);

            const css = `
            #aquaButton {width:46px;height:86px;transform:scale(-1, -1);background: url('https://cdn.discordapp.com/attachments/376819467688345612/794415527459160064/s0x2lp.png');position:absolute;right:0;top:0;padding: 0;z-index: 2147483647;border: none;outline: none;display:none;opacity:0;transition:.25s}
            #aquaButton:hover {opacity:1;transition:.25s}`;
            const style = document.createElement('style');
            if (style.styleSheet) style.styleSheet.cssText = css;
            else style.appendChild(document.createTextNode(css));
            document.getElementsByTagName('head')[0].appendChild(style);
        },
        css: `
        #mainpage { padding-top: 0 !important; background: #000 !important; }
        ::-webkit-scrollbar { width: 0 !important; } *{ scrollbar-width: none !important; }
        #chatheader, #userlist, #videowrap-header, #vidchatcontrols, #pollwrap, #MainTabContainer, .timestamp, nav.navbar {display:none !important;}
        #chatwrap {position:fixed;width:100%;}
        #videowrap {width: 100vw; height: 56.25vw;max-height: 100vh;max-width: 177.78vh;position: absolute;margin: 0 0 0 auto !important;padding: 0 !important;top:0;bottom:0;left:0;right:0;}
        #emotelistbtn {background-size: cover;background-position: initial;outline: none;}
        #chatinputrow button {background-position-y: -12px;height:20px;background-color: transarent;border: none;border-radius: 0 8px 0 0;}
        form input#chatline {padding: 8px; background: none;}
        #emotebtndiv + form {background: none;image-rendering: pixelated;}
        #chatinputrow {flex-direction: row;}
        #messagebuffer div.nick-hover .username { color: #84f !important; }
        #messagebuffer div.nick-highlight .username { color: #f8f !important; }
        #messagebuffer div.nick-highlight.nick-hover .username { color: #fff !important; }
        #messagebuffer div{background-color: #0000 !important;box-shadow: none !important;}
        #messagebuffer div.nick-hover {background-color: #0000 !important;box-shadow: none !important;}
        #messagebuffer div.nick-highlight {background-color: #0000 !important;box-shadow: none !important;}
        #messagebuffer div.nick-highlight.nick-hover {background-color: #0000 !important;box-shadow: none !important;}
        .linewrap {background-color: #0000 !important;box-shadow: none !important;text-shadow: 1px 0 #000, 0 1px #000, -1px 0 #000, 0 -1px #000, 2px 0 2px #000, 0 2px 2px #000, -2px 0 2px #000, 0 -2px 2px #000, 1px 1px #000, 1px -1px #000, -1px 1px #000, -1px -1px #000 !important;}
        .username {text-shadow: 1px 0 #000, 0 1px #000, -1px 0 #000, 0 -1px #000, 2px 0 2px #000, 0 2px 2px #000, -2px 0 2px #000, 0 -2px 2px #000, 1px 1px #000, 1px -1px #000, -1px 1px #000, -1px -1px #000 !important;}
        form { background:none !important; }
        #chatinputrow{height:20px;}
        #chatline {box-shadow:none !important;height:20px !important;background-size: 44px !important;background-position: 0 -8px !important;}
        input.form-control[type=text] { color: #fff; height:20px; text-shadow: 1px 0 #000, 0 1px #000, -1px 0 #000, 0 -1px #000, 2px 0 2px #000, 0 2px 2px #000, -2px 0 2px #000, 0 -2px 2px #000, 1px 1px #000, 1px -1px #000, -1px 1px #000, -1px -1px #000 !important;}
        #main { height: 100% !important;}
        input.form-control[type=text]::placeholder {color: #ccc !important;}
        :focus::-webkit-input-placeholder { color: #ccc !important;}
        .embed-responsive {max-height:100% !important}
        #aquaButton {display: block}
        `
    }, {
        id: 'remove_emote_animations',
        desc: 'Remove emote animations (pen)',
        css: `.channel-emote { animation: none !important; }`
    }, {
        id: 'remove_effects',
        desc: 'Remove chat effects (nnd/gay)',
        func: self => {
            nndToggle = !nndToggle
            gayToggle = !gayToggle
        }
    }, {
        id: 'invert_chat_position',
        desc: 'Invert chat position',
        css: `#main {flex-direction:row-reverse !important}`
    }, {
        id: 'hide_playlist',
        desc: 'Hide playlist',
        css: `#MainTabContainer{display:none}`
    }, {
        id: 'hide_navbar',
        desc: 'Hide navbar',
        css: `#mainpage { padding-top: 0 !important; } nav.navbar { display: none !important; }`
    }, {
        id: 'hide_scrollbar',
        desc: 'Hide scrollbar',
        css: `::-webkit-scrollbar { width: 0 !important; } *{ scrollbar-width: none !important; }`
    }, {
        id: 'custom_CSS',
        desc: 'Custom CSS',
        func: self => {
            const checkboxElem = document.getElementById(`flarepeek_${self.id}`);
            const textAreaElem = document.getElementById(`flarepeek_${self.id}_textarea`);
            if (checkboxElem && textAreaElem) self.css = checkboxElem.checked ? (textAreaElem.value || '') : null;
        },
        textarea: {
            value: `.userlist_item {height:14px}
#videowrap-header,.profile-box hr{display:none}
#messagebuffer>div>span>div{background-color:#0000}
#queue,#queue + div,.queue_entry,#pollwrap>div{box-shadow: none !important;border-radius: 0;}
.queue_entry:hover:not(.queue_active),.userlist_item:hover{background-color: #84f8 !important;}
.navbar{min-height:32px;}
.navbar-brand{height:32px;padding:0;display: flex;align-items: center;cursor: pointer;}
.navbar-brand img{padding:0;margin:0;width:32px;height:32px}
.nav-tabs {background: #0008;}
.nav>li, .nav>li:focus{margin-bottom: 0;background: none !important;}
.nav>li>a, #nav-collapsible>form{color: #ccc;margin:0;border:none !important; padding:6px 16px !important;border-radius: 0;}
.nav>li>a:hover, .nav>li.activ, .nav>li.open>a.dropdown-toggle{background: none !important;text-shadow: #0ff 0 0 4px}
#MainTabContainer>ul>li.active>a, #MainTabContainer>ul>li:hover>a{color: #fff;background: none;text-shadow: #0ff 0 0 4px;cursor: pointer !important;}
.container-fluid{padding:0}
#videowrap{padding:0 0 0 350px}
.row {margin: 0;}
#chatheader{box-shadow:none;background-color: #000a;}
#mainpage {padding-top:32px}
.navbar {border:none; box-shadow:none !important; background-color:#000a !important}
.profile-box {min-height: 0;background-color: #000c;border: none;padding: 8px 8px 0px 8px;}
.profile-box p {margin: 4px 0 8px 0;}
.profile-image {border: none;margin: 0 8px 4px 0;}
.linewrap {z-index: 10;}
#emotelistbtn {outline: none;padding:0 16px;background-size: cover;background-position: initial;}
#chatinputrow button {border: none;border-radius: 0;width:32px;height:32px;background-color:#0000}
#chatinputrow,#chatinputrow form {height:32px}
form input#chatline {padding: 0 0 0 64px;height:32px}
#emotebtndiv + form {background-color: #000a;image-rendering: pixelated;}
form input#chatline {background-position: -32px -16px;background-size: 88px;}
#messagebuffer{background: none;}
#messagebuffer .username {margin-top:0;}
#main {height: 100% !important;}
.timestamp {background: none !important;box-shadow: none !important;text-shadow: 0 0 8px #000, 0 0 4px #000 !important;border-radius: 0 !important;font-style: normal !important;}
#messagebuffer div{background-color: #0008;}
#messagebuffer div.nick-hover {background-color: #4288 !important;box-shadow: none !important;}
#messagebuffer div.nick-highlight {background-color: #84f8 !important;box-shadow: none !important;}
#messagebuffer div.nick-highlight.nick-hover {background-color: #f8f8 !important;}
#messagebuffer div.nick-highlight .username {color: #f8f;}
#messagebuffer {box-shadow: none;}
#userlist {box-shadow: none;background: #0008;}
#main.flex>#chatwrap {box-shadow: none;}
.embed-responsive {box-shadow: none;margin: 0;background-color: #000;}
#pollwrap>div {margin: 0;}
.queue_active.queue_temp {border-radius: 0;}
#rightcontrols, #rightpane {box-shadow: none;background: #0008;border-radius: 0;}
#pollwrap {min-height:0px}
#pin-dropdown>.dropdown-menu {max-height: calc(100vh - 32px) !important}`,
            inputEvent: self => {
                document.getElementById(`flarepeek_${self.id}`).checked = false;
                self.textarea.value = document.getElementById(`flarepeek_${self.id}_textarea`).value;
            }
        },
    }, {
        id: 'vertical_layout',
        desc: 'Vertical layout',
        css: `.navbar, #videowrap-header {display:none}
        #mainpage {padding:0;height:auto !important}
        #main{flex-direction:column-reverse !important}
        #videowrap, #chatwrap{width:100%;margin:0; padding:0}`
    }, {
        id: 'jltp_level',
        desc: 'Kororeps level',
        setupFunc: self => {
            document.getElementById(`flarepeek_${self.id}_label`).innerHTML = `Kororeps level: N${6 - parseInt(self.range.value)}`;
            jltpLevel = 6 - parseInt(self.range.value);
            if (findUserlistItem(CLIENT.name) && findUserlistItem(CLIENT.name).data("profile").text.match(/ngmi/)) {
                koroClear();
            } else koroSetProblem();
        },
        range: {
            value: 1,
            min: 1,
            max: 5,
            step: 1,
            inputEvent: self => {
                document.getElementById(`flarepeek_${self.id}`).checked = false;
                self.range.value = parseInt(document.getElementById(`flarepeek_${self.id}_range`).value);
                document.getElementById(`flarepeek_${self.id}_label`).innerHTML = `Kororeps level: N${6 - parseInt(self.range.value)}`;
                jltpLevel = 6 - parseInt(self.range.value);
            }
        }
    }, {
        id: 'aoi',
        desc: 'AOI LOVE',
        func: self => {
            const navbrand = document.getElementsByClassName("navbar-brand")[0];
            navbrand.innerHTML = navbrand.innerHTML.replace('ホロライブ', 'にじさんじ');
            const img = navbrand.children[0];
            img.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/376819467688345612/813736797812424704/sakuboat.gif')";
            img.style.transform = 'none';
        },
        css: `#chatwrap { background-image: url('https://files.catbox.moe/pt754u.png'); background-repeat: no-repeat; background-size: cover; }`
    }];

    const fplegend = document.createElement('p');
    fplegend.innerHTML = 'Options';
    fplegend.style.textAlign = 'center';
    bubble.appendChild(fplegend);

    const fpOptContainer = document.createElement('div');
    fpOptContainer.id = 'fpOptContainer';
    bubble.append(fpOptContainer);

    options.forEach(opt => {
        const div = document.createElement('div');
        fpOptContainer.append(div);

        const optId = `flarepeek_${opt.id}`;
        const checkboxElem = document.createElement('input');
        checkboxElem.id = optId;
        checkboxElem.type = 'checkbox';

        const optFunc = () => {
            if (opt.func) opt.func(opt);
            if (document.getElementById(`${optId}_style`)) document.getElementById(`${optId}_style`).remove();
            if (opt.css && checkboxElem.checked) {
                const style = document.createElement('style');
                style.id = `${optId}_style`;
                if (style.styleSheet) style.styleSheet.cssText = opt.css;
                else style.appendChild(document.createTextNode(opt.css));
                document.getElementsByTagName('head')[0].appendChild(style);
            }
        }
        checkboxElem.onclick = () => optFunc();
        div.append(checkboxElem);

        // Load cookie option
        const parts = `; ${document.cookie}`.split(`; ${opt.id}=`);
        const cookie = (parts.length === 2) ? parts.pop().split(';').shift() : null;
        if (cookie) {
            const value = decodeURIComponent(escape(window.atob(cookie)));
            const valueElem = opt.textarea ? 'textarea' : opt.range ? 'range' : opt.text ? 'text' : null;
            if (valueElem) opt[valueElem].value = value;
            document.getElementById(`flarepeek_${opt.id}`).checked = true;
            const interval = setInterval(() => {
                if (document.getElementsByClassName("userlist_item").length) {
                    clearInterval(interval);
                    optFunc();
                }
            }, 100);
        }

        const label = document.createElement('label');
        label.id = `${optId}_label`;
        label.innerHTML = opt.desc;
        label.title = opt.id;
        label.htmlFor = optId;
        div.append(label);

        if (opt.textarea) {
            const textareaElem = document.createElement('textarea');
            textareaElem.id = `${optId}_textarea`;
            if (opt.textarea.value) textareaElem.value = opt.textarea.value;
            if (opt.textarea.inputEvent) textareaElem.oninput = () => opt.textarea.inputEvent(opt);
            fpOptContainer.append(textareaElem);
        }

        if (opt.range) {
            const rangeElem = document.createElement('input');
            rangeElem.id = `${optId}_range`;
            rangeElem.type = 'range';
            rangeElem.style.display = 'inlineBlock !important';
            if (opt.range.min) rangeElem.min = opt.range.min;
            if (opt.range.max) rangeElem.max = opt.range.max;
            if (opt.range.step) rangeElem.step = opt.range.step;
            if (opt.range.value) rangeElem.defaultValue = opt.range.value;
            if (opt.range.inputEvent) rangeElem.oninput = () => opt.range.inputEvent(opt);
            fpOptContainer.append(rangeElem);
        }

        if (opt.text) {
            const textElem = document.createElement('input');
            textElem.id = `${optId}_text`;
            textElem.type = 'text';
            if (opt.text.value) textElem.value = opt.text.value;
            if (opt.text.inputEvent) textElem.oninput = () => opt.text.inputEvent(opt);
            fpOptContainer.append(textElem);
        }

        if (opt.setupFunc) opt.setupFunc(opt);
    });


    // --- Cookie buttons ---


    const cookieDiv = document.createElement('div');
    cookieDiv.id = 'cookieDiv';
    bubble.append(cookieDiv);

    const saveButton = document.createElement('button');
    saveButton.id = 'saveButton';
    saveButton.innerHTML = 'Save<img width="24" height="24" alt="save" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAbUlEQVQ4y2NgGLTAk+Exw38csB6bhkc4lePQAhLGDsIZfmPTAtGAaTZOLfg0gLRguAC/BgaqacANqKuBjaGd4RkQtgNZRGnogPuggzgNT+EantJIA8lOItnTRAUr/uQNgo+Iz0Ag+JjBY9BmfgAjpbf/V5agRgAAAABJRU5ErkJggg==">';
    saveButton.onclick = () => options.forEach(opt => {
        const valueElem = opt.textarea ? 'textarea' : opt.range ? 'range' : opt.text ? 'text' : null;
        const value = valueElem ? opt[valueElem].value : document.getElementById(`flarepeek_${opt.id}`).checked ? 1 : 0;
        document.cookie = document.getElementById(`flarepeek_${opt.id}`).checked
            ? `${opt.id}=${window.btoa(unescape(encodeURIComponent(value)))};path=/;expires=${new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 365).toGMTString()};`
            : `${opt.id}=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
    });
    cookieDiv.append(saveButton);

    const resetButton = document.createElement('button');
    resetButton.id = 'resetButton';
    resetButton.innerHTML = 'Reset<img width="24" height="24" alt="save" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAPElEQVQ4y2NgGAJAgeE+w38ovA/k4QH/8UDqaCADkGw+WRqIERvVMNQ1PMKaMB7h1uDB8BhD+WOg6OAGADZZd6fzGEl6AAAAAElFTkSuQmCC">';;
    resetButton.onclick = () => options.forEach(opt => {
        document.cookie = `${opt.id}=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
        document.getElementById(`flarepeek_${opt.id}`).checked = false;
    });
    cookieDiv.append(resetButton);


    // --- Flarepeek username css ---


    let coolColor = '#DAA520';
    if (CLIENT && CLIENT.name) {
        const addHexColor = (c1, c2) => {
            var hexStr = (parseInt(c1, 16) + parseInt(c2, 16)).toString(16);
            while (hexStr.length < 6) { hexStr = '0' + hexStr; }
            return hexStr;
        }
        const toCoolColor = code => (code.replace(/[0-9]/g, "a").toLowerCase().charCodeAt(0) - 97).toString(16);
        const char1 = ('0' + toCoolColor(CLIENT.name[0])).slice(-2);
        const char2 = ('0' + toCoolColor(CLIENT.name[1])).slice(-2);
        if (char1.length === 2 && char2.length === 2) coolColor = '#' + addHexColor('DAA520', `00${char1}${char2}`);
    }


    // --- Flarepeek css ---


    const fpcss = `#flarepeek {width: 56px;height: 38px;z-index: 2147483647;position: fixed;padding: 0;bottom: 0;right: 42px;border: none;outline: none;background: none;
        background-image: url('https://cdn.discordapp.com/attachments/376819467688345612/792349780890222592/flarepeek.png');background-repeat: no-repeat;image-rendering: crisp-edges;}
        .flareAnim {animation: peek-out ease-in .2s both;}
        .flareAnim:hover {animation: peek-in ease-out .2s both;}
        @keyframes peek-in {from {background-position: 0px 38px;} to {background-position: 0px 0;}}
        @keyframes peek-out {from {background-position: 0px 0;} to {background-position: 0px 38px;}}
        #flareBubble {flex-grow: 0;flex-direction: column;padding: 12px 16px;z-index: 2147483647;position: fixed;bottom: 48px;right: 90px;background: #fff;border-radius: 8px;max-height:50%;}
        #flareBubble button {color: #000;}
        #flareBubble textarea {width: 100%;min-height: 128px;margin-bottom: 5px;resize: both;}
        #flareBubble label {color: #888;}
        #flareBubble input[type=checkbox] {margin-right: 8px;}
        #flareBubble input[type=range] {display: inline-block;margin-bottom: 5px;}
        #flareTail {width: 50px;height: 25px;z-index: 2147483647;position: fixed;bottom: 42px;right: 122px;background: #fff;transform: skew(15deg, 15deg);}
        #cookieDiv {margin-top: 12px;display:flex;}
        #cookieDiv button {width: 100%;display: flex;justify-content: center;align-items: center;}
        #cookieDiv button img {margin-left:4px}
        #fpOptContainer {overflow-y: scroll;display:flex;flex-direction:column}
        #resetButton {margin-left:16px}

        #koroContainer {position:fixed;top:0;left:0;width:100%;height:100%;background:url('https://files.catbox.moe/193xa0.png'), #0008;background-position: bottom right calc(50% - 256px);background-repeat: no-repeat;z-index: 2147483647;display:flex;}
        #koroPopup {display:flex;flex-direction:column;margin:auto}
        .koro-kanji-container {height:80px;}
        .koro-kanji-container.answered {opacity: .5;pointer-events: none;}
        #koroPopop canvas {background:#fff;}
        .koro-ogey {background:#8f8 !important;}
        .koro-rrat {background:#f88 !important;}
        .koro-kanji {cursor:pointer}
        .koro-kanji:hover {transform: scale(1.05) rotate(3deg);background-color: #95453E;}
        .koro-question, .koro-kanji {margin:8px;background:#602421;box-shadow:inset 0 0 0 2px #B89543;border-radius:4px}
        #ngmiBtn {position:absolute;top:4px;left:4px;color:#fff;background:#000;border-radius: 4px;padding: 2px 4px;}
        #koropop, #koroscore, #korokanji {border:none;outline:none;width:56px;height:56px;background:none;padding:0;border-radius:28px;}
        #koropop img:hover, #koroscore img:hover, #korokanji img:hover {box-shadow: 0 0 0 3px #08f}
        #koropop img, #koroscore img, #korokanji img {border-radius:28px;}
        
        #mentionContainer, #pinContainer {display:flex;flex-direction:column-reverse;}
        #mention-dropdown>.dropdown-menu, #pin-dropdown>.dropdown-menu {width: 384px;max-height: calc(100vh - 50px);overflow-y:scroll;padding:0;margin:0;border:none;}
        #mentionContainer>li, #pinContainer>li {display:flex;flex-direction:row;align-items: center;margin:8px 0}
        .pin-message {width: calc(100% - 32px);overflow-wrap: break-word;padding: 0 4px;}
        .pin-close {width:24px;height:24px;border-radius:12px;margin: auto 4px;color:#fff;background:#888;border:none;outline:none;transition:.2s}
        .pin-close:hover {background:#ccc;color:#333}
        .navbar {background:#0008 !important;}
        .username{color:${coolColor} !important}
        
        #chatheader {display: flex}
        #filterSelect {margin-left: auto; background: #0008;border: none;color: #fff;outline: none;}
        #filterSelect:hover {text-shadow: #0ff 0 0 4px}
        .filter2css {border-left:${filter2color} 3px solid !important}
        .filter3css {border-left:${filter3color} 3px solid !important}
        .filter4css {border-left:${filter4color} 3px solid !important}

          
          #snowContainer {
            position: absolute;
            width:100%;
            height:100%;
            overflow: hidden;
          }

          .snow {
            position: absolute;
            width: 10px;
            height: 10px;
            background: white;
            border-radius: 50%;
            top: 0px;
            left: 0px;
          }
          .snow:nth-child(1) {
            opacity: 0.8456;
            transform: translate(1.1167vw, -10px) scale(0.3045);
            animation: fall-1 12s -15s linear infinite;
          }
          @keyframes fall-1 {
            46.65% {
              transform: translate(-1.3031vw, 46.65vh) scale(0.3045);
            }
            to {
              transform: translate(-0.0932vw, 100vh) scale(0.3045);
            }
          }
          .snow:nth-child(2) {
            opacity: 0.1274;
            transform: translate(57.3643vw, -10px) scale(0.0678);
            animation: fall-2 17s -1s linear infinite;
          }
          @keyframes fall-2 {
            63.647% {
              transform: translate(58.7598vw, 63.647vh) scale(0.0678);
            }
            to {
              transform: translate(58.06205vw, 100vh) scale(0.0678);
            }
          }
          .snow:nth-child(3) {
            opacity: 0.0398;
            transform: translate(69.5394vw, -10px) scale(0.9352);
            animation: fall-3 24s -22s linear infinite;
          }
          @keyframes fall-3 {
            47.163% {
              transform: translate(70.6761vw, 47.163vh) scale(0.9352);
            }
            to {
              transform: translate(70.10775vw, 100vh) scale(0.9352);
            }
          }
          .snow:nth-child(4) {
            opacity: 0.1964;
            transform: translate(86.9806vw, -10px) scale(0.678);
            animation: fall-4 26s -15s linear infinite;
          }
          @keyframes fall-4 {
            63.799% {
              transform: translate(86.3593vw, 63.799vh) scale(0.678);
            }
            to {
              transform: translate(86.66995vw, 100vh) scale(0.678);
            }
          }
          .snow:nth-child(5) {
            opacity: 0.6374;
            transform: translate(55.5429vw, -10px) scale(0.4524);
            animation: fall-5 13s -25s linear infinite;
          }
          @keyframes fall-5 {
            46.785% {
              transform: translate(46.658vw, 46.785vh) scale(0.4524);
            }
            to {
              transform: translate(51.10045vw, 100vh) scale(0.4524);
            }
          }
          .snow:nth-child(6) {
            opacity: 0.8968;
            transform: translate(24.8095vw, -10px) scale(0.3534);
            animation: fall-6 28s -7s linear infinite;
          }
          @keyframes fall-6 {
            59.13% {
              transform: translate(26.3145vw, 59.13vh) scale(0.3534);
            }
            to {
              transform: translate(25.562vw, 100vh) scale(0.3534);
            }
          }
          .snow:nth-child(7) {
            opacity: 0.6727;
            transform: translate(81.7841vw, -10px) scale(0.6862);
            animation: fall-7 25s -20s linear infinite;
          }
          @keyframes fall-7 {
            48.07% {
              transform: translate(80.7361vw, 48.07vh) scale(0.6862);
            }
            to {
              transform: translate(81.2601vw, 100vh) scale(0.6862);
            }
          }
          .snow:nth-child(8) {
            opacity: 0.3189;
            transform: translate(34.6157vw, -10px) scale(0.3059);
            animation: fall-8 22s -16s linear infinite;
          }
          @keyframes fall-8 {
            62.572% {
              transform: translate(27.9032vw, 62.572vh) scale(0.3059);
            }
            to {
              transform: translate(31.25945vw, 100vh) scale(0.3059);
            }
          }
          .snow:nth-child(9) {
            opacity: 0.8589;
            transform: translate(16.1324vw, -10px) scale(0.5855);
            animation: fall-9 10s -6s linear infinite;
          }
          @keyframes fall-9 {
            71.883% {
              transform: translate(19.8734vw, 71.883vh) scale(0.5855);
            }
            to {
              transform: translate(18.0029vw, 100vh) scale(0.5855);
            }
          }
          .snow:nth-child(10) {
            opacity: 0.3187;
            transform: translate(69.2962vw, -10px) scale(0.1259);
            animation: fall-10 20s -17s linear infinite;
          }
          @keyframes fall-10 {
            75.459% {
              transform: translate(63.2146vw, 75.459vh) scale(0.1259);
            }
            to {
              transform: translate(66.2554vw, 100vh) scale(0.1259);
            }
          }
          .snow:nth-child(11) {
            opacity: 0.0759;
            transform: translate(59.6357vw, -10px) scale(0.0865);
            animation: fall-11 24s -3s linear infinite;
          }
          @keyframes fall-11 {
            55.09% {
              transform: translate(58.7542vw, 55.09vh) scale(0.0865);
            }
            to {
              transform: translate(59.19495vw, 100vh) scale(0.0865);
            }
          }
          .snow:nth-child(12) {
            opacity: 0.3264;
            transform: translate(91.0566vw, -10px) scale(0.1719);
            animation: fall-12 28s -14s linear infinite;
          }
          @keyframes fall-12 {
            61.059% {
              transform: translate(89.9108vw, 61.059vh) scale(0.1719);
            }
            to {
              transform: translate(90.4837vw, 100vh) scale(0.1719);
            }
          }
          .snow:nth-child(13) {
            opacity: 0.1119;
            transform: translate(83.7812vw, -10px) scale(0.0399);
            animation: fall-13 13s -28s linear infinite;
          }
          @keyframes fall-13 {
            41.618% {
              transform: translate(86.1804vw, 41.618vh) scale(0.0399);
            }
            to {
              transform: translate(84.9808vw, 100vh) scale(0.0399);
            }
          }
          .snow:nth-child(14) {
            opacity: 0.7571;
            transform: translate(47.7146vw, -10px) scale(0.3276);
            animation: fall-14 19s -14s linear infinite;
          }
          @keyframes fall-14 {
            36.798% {
              transform: translate(38.5416vw, 36.798vh) scale(0.3276);
            }
            to {
              transform: translate(43.1281vw, 100vh) scale(0.3276);
            }
          }
          .snow:nth-child(15) {
            opacity: 0.2956;
            transform: translate(80.9343vw, -10px) scale(0.7585);
            animation: fall-15 16s -11s linear infinite;
          }
          @keyframes fall-15 {
            35.37% {
              transform: translate(71.8669vw, 35.37vh) scale(0.7585);
            }
            to {
              transform: translate(76.4006vw, 100vh) scale(0.7585);
            }
          }
          .snow:nth-child(16) {
            opacity: 0.6061;
            transform: translate(89.0067vw, -10px) scale(0.7125);
            animation: fall-16 12s -5s linear infinite;
          }
          @keyframes fall-16 {
            30.37% {
              transform: translate(85.0425vw, 30.37vh) scale(0.7125);
            }
            to {
              transform: translate(87.0246vw, 100vh) scale(0.7125);
            }
          }
          .snow:nth-child(17) {
            opacity: 0.8109;
            transform: translate(70.0824vw, -10px) scale(0.3608);
            animation: fall-17 16s -11s linear infinite;
          }
          @keyframes fall-17 {
            58.938% {
              transform: translate(61.6264vw, 58.938vh) scale(0.3608);
            }
            to {
              transform: translate(65.8544vw, 100vh) scale(0.3608);
            }
          }
          .snow:nth-child(18) {
            opacity: 0.6095;
            transform: translate(92.7812vw, -10px) scale(0.8335);
            animation: fall-18 26s -29s linear infinite;
          }
          @keyframes fall-18 {
            55.38% {
              transform: translate(101.4447vw, 55.38vh) scale(0.8335);
            }
            to {
              transform: translate(97.11295vw, 100vh) scale(0.8335);
            }
          }
          .snow:nth-child(19) {
            opacity: 0.6027;
            transform: translate(74.3453vw, -10px) scale(0.2678);
            animation: fall-19 20s -30s linear infinite;
          }
          @keyframes fall-19 {
            44.481% {
              transform: translate(71.5545vw, 44.481vh) scale(0.2678);
            }
            to {
              transform: translate(72.9499vw, 100vh) scale(0.2678);
            }
          }
          .snow:nth-child(20) {
            opacity: 0.3961;
            transform: translate(79.0419vw, -10px) scale(0.5421);
            animation: fall-20 23s -17s linear infinite;
          }
          @keyframes fall-20 {
            54.635% {
              transform: translate(77.0631vw, 54.635vh) scale(0.5421);
            }
            to {
              transform: translate(78.0525vw, 100vh) scale(0.5421);
            }
          }
          .snow:nth-child(21) {
            opacity: 0.3006;
            transform: translate(6.4801vw, -10px) scale(0.2833);
            animation: fall-21 24s -23s linear infinite;
          }
          @keyframes fall-21 {
            70.541% {
              transform: translate(9.754vw, 70.541vh) scale(0.2833);
            }
            to {
              transform: translate(8.11705vw, 100vh) scale(0.2833);
            }
          }
          .snow:nth-child(22) {
            opacity: 0.9957;
            transform: translate(70.8594vw, -10px) scale(0.9418);
            animation: fall-22 29s -18s linear infinite;
          }
          @keyframes fall-22 {
            67.529% {
              transform: translate(67.27vw, 67.529vh) scale(0.9418);
            }
            to {
              transform: translate(69.0647vw, 100vh) scale(0.9418);
            }
          }
          .snow:nth-child(23) {
            opacity: 0.9168;
            transform: translate(99.6214vw, -10px) scale(0.8011);
            animation: fall-23 28s -21s linear infinite;
          }
          @keyframes fall-23 {
            77.11% {
              transform: translate(105.2379vw, 77.11vh) scale(0.8011);
            }
            to {
              transform: translate(102.42965vw, 100vh) scale(0.8011);
            }
          }
          .snow:nth-child(24) {
            opacity: 0.9944;
            transform: translate(40.0014vw, -10px) scale(0.2509);
            animation: fall-24 13s -9s linear infinite;
          }
          @keyframes fall-24 {
            78.837% {
              transform: translate(47.006vw, 78.837vh) scale(0.2509);
            }
            to {
              transform: translate(43.5037vw, 100vh) scale(0.2509);
            }
          }
          .snow:nth-child(25) {
            opacity: 0.5706;
            transform: translate(38.7347vw, -10px) scale(0.3315);
            animation: fall-25 24s -3s linear infinite;
          }
          @keyframes fall-25 {
            79.396% {
              transform: translate(34.9969vw, 79.396vh) scale(0.3315);
            }
            to {
              transform: translate(36.8658vw, 100vh) scale(0.3315);
            }
          }
          .snow:nth-child(26) {
            opacity: 0.133;
            transform: translate(65.0814vw, -10px) scale(0.1768);
            animation: fall-26 17s -20s linear infinite;
          }
          @keyframes fall-26 {
            37.724% {
              transform: translate(60.3866vw, 37.724vh) scale(0.1768);
            }
            to {
              transform: translate(62.734vw, 100vh) scale(0.1768);
            }
          }
          .snow:nth-child(27) {
            opacity: 0.2839;
            transform: translate(64.4005vw, -10px) scale(0.507);
            animation: fall-27 11s -17s linear infinite;
          }
          @keyframes fall-27 {
            32.275% {
              transform: translate(54.7618vw, 32.275vh) scale(0.507);
            }
            to {
              transform: translate(59.58115vw, 100vh) scale(0.507);
            }
          }
          .snow:nth-child(28) {
            opacity: 0.1512;
            transform: translate(69.0054vw, -10px) scale(0.5882);
            animation: fall-28 28s -27s linear infinite;
          }
          @keyframes fall-28 {
            68.849% {
              transform: translate(73.5406vw, 68.849vh) scale(0.5882);
            }
            to {
              transform: translate(71.273vw, 100vh) scale(0.5882);
            }
          }
          .snow:nth-child(29) {
            opacity: 0.6849;
            transform: translate(88.2825vw, -10px) scale(0.1914);
            animation: fall-29 30s -13s linear infinite;
          }
          @keyframes fall-29 {
            59.565% {
              transform: translate(84.4775vw, 59.565vh) scale(0.1914);
            }
            to {
              transform: translate(86.38vw, 100vh) scale(0.1914);
            }
          }
          .snow:nth-child(30) {
            opacity: 0.2417;
            transform: translate(51.4973vw, -10px) scale(0.5822);
            animation: fall-30 22s -23s linear infinite;
          }
          @keyframes fall-30 {
            67.538% {
              transform: translate(50.4637vw, 67.538vh) scale(0.5822);
            }
            to {
              transform: translate(50.9805vw, 100vh) scale(0.5822);
            }
          }
          .snow:nth-child(31) {
            opacity: 0.1601;
            transform: translate(27.6993vw, -10px) scale(0.2505);
            animation: fall-31 29s -7s linear infinite;
          }
          @keyframes fall-31 {
            64.595% {
              transform: translate(23.9018vw, 64.595vh) scale(0.2505);
            }
            to {
              transform: translate(25.80055vw, 100vh) scale(0.2505);
            }
          }
          .snow:nth-child(32) {
            opacity: 0.6254;
            transform: translate(59.0051vw, -10px) scale(0.5215);
            animation: fall-32 26s -7s linear infinite;
          }
          @keyframes fall-32 {
            43.772% {
              transform: translate(60.624vw, 43.772vh) scale(0.5215);
            }
            to {
              transform: translate(59.81455vw, 100vh) scale(0.5215);
            }
          }
          .snow:nth-child(33) {
            opacity: 0.4156;
            transform: translate(71.1264vw, -10px) scale(0.9425);
            animation: fall-33 30s -30s linear infinite;
          }
          @keyframes fall-33 {
            67.642% {
              transform: translate(63.1197vw, 67.642vh) scale(0.9425);
            }
            to {
              transform: translate(67.12305vw, 100vh) scale(0.9425);
            }
          }
          .snow:nth-child(34) {
            opacity: 0.8241;
            transform: translate(39.4962vw, -10px) scale(0.6482);
            animation: fall-34 21s -2s linear infinite;
          }
          @keyframes fall-34 {
            64.701% {
              transform: translate(30.385vw, 64.701vh) scale(0.6482);
            }
            to {
              transform: translate(34.9406vw, 100vh) scale(0.6482);
            }
          }
          .snow:nth-child(35) {
            opacity: 0.2493;
            transform: translate(59.508vw, -10px) scale(0.2796);
            animation: fall-35 21s -16s linear infinite;
          }
          @keyframes fall-35 {
            73.856% {
              transform: translate(60.2536vw, 73.856vh) scale(0.2796);
            }
            to {
              transform: translate(59.8808vw, 100vh) scale(0.2796);
            }
          }
          .snow:nth-child(36) {
            opacity: 0.0118;
            transform: translate(21.8185vw, -10px) scale(0.5908);
            animation: fall-36 19s -23s linear infinite;
          }
          @keyframes fall-36 {
            72.228% {
              transform: translate(29.5016vw, 72.228vh) scale(0.5908);
            }
            to {
              transform: translate(25.66005vw, 100vh) scale(0.5908);
            }
          }
          .snow:nth-child(37) {
            opacity: 0.2873;
            transform: translate(53.3538vw, -10px) scale(0.655);
            animation: fall-37 30s -3s linear infinite;
          }
          @keyframes fall-37 {
            44.124% {
              transform: translate(57.6142vw, 44.124vh) scale(0.655);
            }
            to {
              transform: translate(55.484vw, 100vh) scale(0.655);
            }
          }
          .snow:nth-child(38) {
            opacity: 0.2961;
            transform: translate(93.7629vw, -10px) scale(0.9612);
            animation: fall-38 14s -2s linear infinite;
          }
          @keyframes fall-38 {
            58.524% {
              transform: translate(94.7043vw, 58.524vh) scale(0.9612);
            }
            to {
              transform: translate(94.2336vw, 100vh) scale(0.9612);
            }
          }
          .snow:nth-child(39) {
            opacity: 0.9605;
            transform: translate(78.6986vw, -10px) scale(0.5358);
            animation: fall-39 11s -20s linear infinite;
          }
          @keyframes fall-39 {
            63.69% {
              transform: translate(83.9593vw, 63.69vh) scale(0.5358);
            }
            to {
              transform: translate(81.32895vw, 100vh) scale(0.5358);
            }
          }
          .snow:nth-child(40) {
            opacity: 0.7047;
            transform: translate(7.7671vw, -10px) scale(0.5381);
            animation: fall-40 28s -6s linear infinite;
          }
          @keyframes fall-40 {
            50.108% {
              transform: translate(16.4394vw, 50.108vh) scale(0.5381);
            }
            to {
              transform: translate(12.10325vw, 100vh) scale(0.5381);
            }
          }
          .snow:nth-child(41) {
            opacity: 0.5724;
            transform: translate(95.2154vw, -10px) scale(0.3968);
            animation: fall-41 27s -1s linear infinite;
          }
          @keyframes fall-41 {
            44.897% {
              transform: translate(91.0248vw, 44.897vh) scale(0.3968);
            }
            to {
              transform: translate(93.1201vw, 100vh) scale(0.3968);
            }
          }
          .snow:nth-child(42) {
            opacity: 0.3353;
            transform: translate(62.9408vw, -10px) scale(0.999);
            animation: fall-42 21s -9s linear infinite;
          }
          @keyframes fall-42 {
            39.555% {
              transform: translate(71.3519vw, 39.555vh) scale(0.999);
            }
            to {
              transform: translate(67.14635vw, 100vh) scale(0.999);
            }
          }
          .snow:nth-child(43) {
            opacity: 0.0676;
            transform: translate(95.4423vw, -10px) scale(0.7799);
            animation: fall-43 16s -25s linear infinite;
          }
          @keyframes fall-43 {
            70.976% {
              transform: translate(98.8546vw, 70.976vh) scale(0.7799);
            }
            to {
              transform: translate(97.14845vw, 100vh) scale(0.7799);
            }
          }
          .snow:nth-child(44) {
            opacity: 0.6353;
            transform: translate(95.3808vw, -10px) scale(0.5296);
            animation: fall-44 15s -19s linear infinite;
          }
          @keyframes fall-44 {
            44.636% {
              transform: translate(95.4805vw, 44.636vh) scale(0.5296);
            }
            to {
              transform: translate(95.43065vw, 100vh) scale(0.5296);
            }
          }
          .snow:nth-child(45) {
            opacity: 0.9558;
            transform: translate(1.314vw, -10px) scale(0.0652);
            animation: fall-45 11s -17s linear infinite;
          }
          @keyframes fall-45 {
            49.402% {
              transform: translate(-1.7896vw, 49.402vh) scale(0.0652);
            }
            to {
              transform: translate(-0.2378vw, 100vh) scale(0.0652);
            }
          }
          .snow:nth-child(46) {
            opacity: 0.5528;
            transform: translate(85.6968vw, -10px) scale(0.9413);
            animation: fall-46 13s -11s linear infinite;
          }
          @keyframes fall-46 {
            63.259% {
              transform: translate(85.7748vw, 63.259vh) scale(0.9413);
            }
            to {
              transform: translate(85.7358vw, 100vh) scale(0.9413);
            }
          }
          .snow:nth-child(47) {
            opacity: 0.8306;
            transform: translate(68.5427vw, -10px) scale(0.6795);
            animation: fall-47 14s -5s linear infinite;
          }
          @keyframes fall-47 {
            70.838% {
              transform: translate(61.4587vw, 70.838vh) scale(0.6795);
            }
            to {
              transform: translate(65.0007vw, 100vh) scale(0.6795);
            }
          }
          .snow:nth-child(48) {
            opacity: 0.9735;
            transform: translate(22.4955vw, -10px) scale(0.1904);
            animation: fall-48 24s -29s linear infinite;
          }
          @keyframes fall-48 {
            69.052% {
              transform: translate(18.1508vw, 69.052vh) scale(0.1904);
            }
            to {
              transform: translate(20.32315vw, 100vh) scale(0.1904);
            }
          }
          .snow:nth-child(49) {
            opacity: 0.7804;
            transform: translate(55.1168vw, -10px) scale(0.3701);
            animation: fall-49 11s -18s linear infinite;
          }
          @keyframes fall-49 {
            78.305% {
              transform: translate(48.0311vw, 78.305vh) scale(0.3701);
            }
            to {
              transform: translate(51.57395vw, 100vh) scale(0.3701);
            }
          }
          .snow:nth-child(50) {
            opacity: 0.8153;
            transform: translate(92.8895vw, -10px) scale(0.0695);
            animation: fall-50 23s -20s linear infinite;
          }
          @keyframes fall-50 {
            77.138% {
              transform: translate(84.0493vw, 77.138vh) scale(0.0695);
            }
            to {
              transform: translate(88.4694vw, 100vh) scale(0.0695);
            }
          }
          .snow:nth-child(51) {
            opacity: 0.9507;
            transform: translate(36.3708vw, -10px) scale(0.4667);
            animation: fall-51 16s -12s linear infinite;
          }
          @keyframes fall-51 {
            54.692% {
              transform: translate(44.092vw, 54.692vh) scale(0.4667);
            }
            to {
              transform: translate(40.2314vw, 100vh) scale(0.4667);
            }
          }
          .snow:nth-child(52) {
            opacity: 0.7644;
            transform: translate(8.8039vw, -10px) scale(0.3807);
            animation: fall-52 28s -14s linear infinite;
          }
          @keyframes fall-52 {
            64.382% {
              transform: translate(6.4252vw, 64.382vh) scale(0.3807);
            }
            to {
              transform: translate(7.61455vw, 100vh) scale(0.3807);
            }
          }
          .snow:nth-child(53) {
            opacity: 0.0061;
            transform: translate(19.3289vw, -10px) scale(0.1922);
            animation: fall-53 24s -4s linear infinite;
          }
          @keyframes fall-53 {
            58.585% {
              transform: translate(26.8316vw, 58.585vh) scale(0.1922);
            }
            to {
              transform: translate(23.08025vw, 100vh) scale(0.1922);
            }
          }
          .snow:nth-child(54) {
            opacity: 0.0346;
            transform: translate(13.7681vw, -10px) scale(0.6701);
            animation: fall-54 18s -18s linear infinite;
          }
          @keyframes fall-54 {
            48.041% {
              transform: translate(23.5084vw, 48.041vh) scale(0.6701);
            }
            to {
              transform: translate(18.63825vw, 100vh) scale(0.6701);
            }
          }
          .snow:nth-child(55) {
            opacity: 0.0655;
            transform: translate(97.8666vw, -10px) scale(0.6294);
            animation: fall-55 12s -27s linear infinite;
          }
          @keyframes fall-55 {
            61.432% {
              transform: translate(99.8661vw, 61.432vh) scale(0.6294);
            }
            to {
              transform: translate(98.86635vw, 100vh) scale(0.6294);
            }
          }
          .snow:nth-child(56) {
            opacity: 0.081;
            transform: translate(50.116vw, -10px) scale(0.8671);
            animation: fall-56 29s -4s linear infinite;
          }
          @keyframes fall-56 {
            34.694% {
              transform: translate(59.3044vw, 34.694vh) scale(0.8671);
            }
            to {
              transform: translate(54.7102vw, 100vh) scale(0.8671);
            }
          }
          .snow:nth-child(57) {
            opacity: 0.2725;
            transform: translate(48.876vw, -10px) scale(0.3336);
            animation: fall-57 27s -7s linear infinite;
          }
          @keyframes fall-57 {
            59.154% {
              transform: translate(52.3983vw, 59.154vh) scale(0.3336);
            }
            to {
              transform: translate(50.63715vw, 100vh) scale(0.3336);
            }
          }
          .snow:nth-child(58) {
            opacity: 0.5852;
            transform: translate(60.4264vw, -10px) scale(0.7886);
            animation: fall-58 12s -22s linear infinite;
          }
          @keyframes fall-58 {
            45.294% {
              transform: translate(59.4113vw, 45.294vh) scale(0.7886);
            }
            to {
              transform: translate(59.91885vw, 100vh) scale(0.7886);
            }
          }
          .snow:nth-child(59) {
            opacity: 0.5501;
            transform: translate(44.5944vw, -10px) scale(0.6262);
            animation: fall-59 23s -19s linear infinite;
          }
          @keyframes fall-59 {
            40.042% {
              transform: translate(44.7106vw, 40.042vh) scale(0.6262);
            }
            to {
              transform: translate(44.6525vw, 100vh) scale(0.6262);
            }
          }
          .snow:nth-child(60) {
            opacity: 0.2737;
            transform: translate(67.2149vw, -10px) scale(0.6012);
            animation: fall-60 16s -24s linear infinite;
          }
          @keyframes fall-60 {
            31.426% {
              transform: translate(57.7622vw, 31.426vh) scale(0.6012);
            }
            to {
              transform: translate(62.48855vw, 100vh) scale(0.6012);
            }
          }
          .snow:nth-child(61) {
            opacity: 0.3579;
            transform: translate(68.3827vw, -10px) scale(0.735);
            animation: fall-61 10s -4s linear infinite;
          }
          @keyframes fall-61 {
            55.604% {
              transform: translate(75.8445vw, 55.604vh) scale(0.735);
            }
            to {
              transform: translate(72.1136vw, 100vh) scale(0.735);
            }
          }
          .snow:nth-child(62) {
            opacity: 0.0392;
            transform: translate(19.5846vw, -10px) scale(0.5982);
            animation: fall-62 16s -26s linear infinite;
          }
          @keyframes fall-62 {
            50.908% {
              transform: translate(28.306vw, 50.908vh) scale(0.5982);
            }
            to {
              transform: translate(23.9453vw, 100vh) scale(0.5982);
            }
          }
          .snow:nth-child(63) {
            opacity: 0.1876;
            transform: translate(55.6413vw, -10px) scale(0.4956);
            animation: fall-63 19s -3s linear infinite;
          }
          @keyframes fall-63 {
            50.704% {
              transform: translate(50.8122vw, 50.704vh) scale(0.4956);
            }
            to {
              transform: translate(53.22675vw, 100vh) scale(0.4956);
            }
          }
          .snow:nth-child(64) {
            opacity: 0.2545;
            transform: translate(6.9196vw, -10px) scale(0.0941);
            animation: fall-64 23s -29s linear infinite;
          }
          @keyframes fall-64 {
            40.87% {
              transform: translate(13.6172vw, 40.87vh) scale(0.0941);
            }
            to {
              transform: translate(10.2684vw, 100vh) scale(0.0941);
            }
          }
          .snow:nth-child(65) {
            opacity: 0.4917;
            transform: translate(44.4371vw, -10px) scale(0.81);
            animation: fall-65 18s -17s linear infinite;
          }
          @keyframes fall-65 {
            37.396% {
              transform: translate(52.1099vw, 37.396vh) scale(0.81);
            }
            to {
              transform: translate(48.2735vw, 100vh) scale(0.81);
            }
          }
          .snow:nth-child(66) {
            opacity: 0.3434;
            transform: translate(32.7101vw, -10px) scale(0.8779);
            animation: fall-66 28s -25s linear infinite;
          }
          @keyframes fall-66 {
            44.997% {
              transform: translate(30.6971vw, 44.997vh) scale(0.8779);
            }
            to {
              transform: translate(31.7036vw, 100vh) scale(0.8779);
            }
          }
          .snow:nth-child(67) {
            opacity: 0.0652;
            transform: translate(5.5326vw, -10px) scale(0.2256);
            animation: fall-67 15s -10s linear infinite;
          }
          @keyframes fall-67 {
            44.495% {
              transform: translate(2.3605vw, 44.495vh) scale(0.2256);
            }
            to {
              transform: translate(3.94655vw, 100vh) scale(0.2256);
            }
          }
          .snow:nth-child(68) {
            opacity: 0.6383;
            transform: translate(24.1014vw, -10px) scale(0.3948);
            animation: fall-68 12s -20s linear infinite;
          }
          @keyframes fall-68 {
            44.128% {
              transform: translate(29.4508vw, 44.128vh) scale(0.3948);
            }
            to {
              transform: translate(26.7761vw, 100vh) scale(0.3948);
            }
          }
          .snow:nth-child(69) {
            opacity: 0.1789;
            transform: translate(89.1146vw, -10px) scale(0.522);
            animation: fall-69 26s -27s linear infinite;
          }
          @keyframes fall-69 {
            39.131% {
              transform: translate(94.4897vw, 39.131vh) scale(0.522);
            }
            to {
              transform: translate(91.80215vw, 100vh) scale(0.522);
            }
          }
          .snow:nth-child(70) {
            opacity: 0.1608;
            transform: translate(24.7092vw, -10px) scale(0.9864);
            animation: fall-70 12s -12s linear infinite;
          }
          @keyframes fall-70 {
            74.288% {
              transform: translate(30.6929vw, 74.288vh) scale(0.9864);
            }
            to {
              transform: translate(27.70105vw, 100vh) scale(0.9864);
            }
          }
          .snow:nth-child(71) {
            opacity: 0.9511;
            transform: translate(21.4911vw, -10px) scale(0.9262);
            animation: fall-71 27s -13s linear infinite;
          }
          @keyframes fall-71 {
            66.086% {
              transform: translate(19.3762vw, 66.086vh) scale(0.9262);
            }
            to {
              transform: translate(20.43365vw, 100vh) scale(0.9262);
            }
          }
          .snow:nth-child(72) {
            opacity: 0.3;
            transform: translate(80.6604vw, -10px) scale(0.6784);
            animation: fall-72 20s -7s linear infinite;
          }
          @keyframes fall-72 {
            59.665% {
              transform: translate(78.1113vw, 59.665vh) scale(0.6784);
            }
            to {
              transform: translate(79.38585vw, 100vh) scale(0.6784);
            }
          }
          .snow:nth-child(73) {
            opacity: 0.018;
            transform: translate(66.5427vw, -10px) scale(0.2253);
            animation: fall-73 20s -14s linear infinite;
          }
          @keyframes fall-73 {
            44.462% {
              transform: translate(60.0308vw, 44.462vh) scale(0.2253);
            }
            to {
              transform: translate(63.28675vw, 100vh) scale(0.2253);
            }
          }
          .snow:nth-child(74) {
            opacity: 0.6902;
            transform: translate(8.1686vw, -10px) scale(0.81);
            animation: fall-74 22s -11s linear infinite;
          }
          @keyframes fall-74 {
            32.555% {
              transform: translate(-0.1617vw, 32.555vh) scale(0.81);
            }
            to {
              transform: translate(4.00345vw, 100vh) scale(0.81);
            }
          }
          .snow:nth-child(75) {
            opacity: 0.9783;
            transform: translate(5.4178vw, -10px) scale(0.9432);
            animation: fall-75 15s -13s linear infinite;
          }
          @keyframes fall-75 {
            78.449% {
              transform: translate(9.414vw, 78.449vh) scale(0.9432);
            }
            to {
              transform: translate(7.4159vw, 100vh) scale(0.9432);
            }
          }
          .snow:nth-child(76) {
            opacity: 0.5217;
            transform: translate(98.7761vw, -10px) scale(0.7884);
            animation: fall-76 20s -26s linear infinite;
          }
          @keyframes fall-76 {
            79.383% {
              transform: translate(103.1064vw, 79.383vh) scale(0.7884);
            }
            to {
              transform: translate(100.94125vw, 100vh) scale(0.7884);
            }
          }
          .snow:nth-child(77) {
            opacity: 0.5672;
            transform: translate(97.8866vw, -10px) scale(0.3502);
            animation: fall-77 21s -8s linear infinite;
          }
          @keyframes fall-77 {
            64.989% {
              transform: translate(94.1968vw, 64.989vh) scale(0.3502);
            }
            to {
              transform: translate(96.0417vw, 100vh) scale(0.3502);
            }
          }
          .snow:nth-child(78) {
            opacity: 0.4563;
            transform: translate(83.2371vw, -10px) scale(0.0996);
            animation: fall-78 29s -10s linear infinite;
          }
          @keyframes fall-78 {
            47.51% {
              transform: translate(77.1619vw, 47.51vh) scale(0.0996);
            }
            to {
              transform: translate(80.1995vw, 100vh) scale(0.0996);
            }
          }
          .snow:nth-child(79) {
            opacity: 0.6196;
            transform: translate(18.5892vw, -10px) scale(0.1521);
            animation: fall-79 10s -5s linear infinite;
          }
          @keyframes fall-79 {
            41.51% {
              transform: translate(16.2279vw, 41.51vh) scale(0.1521);
            }
            to {
              transform: translate(17.40855vw, 100vh) scale(0.1521);
            }
          }
          .snow:nth-child(80) {
            opacity: 0.9129;
            transform: translate(77.0542vw, -10px) scale(0.709);
            animation: fall-80 16s -24s linear infinite;
          }
          @keyframes fall-80 {
            64.849% {
              transform: translate(84.1815vw, 64.849vh) scale(0.709);
            }
            to {
              transform: translate(80.61785vw, 100vh) scale(0.709);
            }
          }
          .snow:nth-child(81) {
            opacity: 0.1747;
            transform: translate(62.3518vw, -10px) scale(0.4915);
            animation: fall-81 23s -10s linear infinite;
          }
          @keyframes fall-81 {
            62.373% {
              transform: translate(65.3851vw, 62.373vh) scale(0.4915);
            }
            to {
              transform: translate(63.86845vw, 100vh) scale(0.4915);
            }
          }
          .snow:nth-child(82) {
            opacity: 0.9863;
            transform: translate(70.7625vw, -10px) scale(0.0231);
            animation: fall-82 30s -14s linear infinite;
          }
          @keyframes fall-82 {
            75.996% {
              transform: translate(62.6971vw, 75.996vh) scale(0.0231);
            }
            to {
              transform: translate(66.7298vw, 100vh) scale(0.0231);
            }
          }
          .snow:nth-child(83) {
            opacity: 0.718;
            transform: translate(24.4122vw, -10px) scale(0.2905);
            animation: fall-83 14s -19s linear infinite;
          }
          @keyframes fall-83 {
            49.705% {
              transform: translate(32.4458vw, 49.705vh) scale(0.2905);
            }
            to {
              transform: translate(28.429vw, 100vh) scale(0.2905);
            }
          }
          .snow:nth-child(84) {
            opacity: 0.0335;
            transform: translate(49.9034vw, -10px) scale(0.9716);
            animation: fall-84 27s -17s linear infinite;
          }
          @keyframes fall-84 {
            61.5% {
              transform: translate(45.7048vw, 61.5vh) scale(0.9716);
            }
            to {
              transform: translate(47.8041vw, 100vh) scale(0.9716);
            }
          }
          .snow:nth-child(85) {
            opacity: 0.6906;
            transform: translate(81.9243vw, -10px) scale(0.0387);
            animation: fall-85 12s -21s linear infinite;
          }
          @keyframes fall-85 {
            43.71% {
              transform: translate(75.4488vw, 43.71vh) scale(0.0387);
            }
            to {
              transform: translate(78.68655vw, 100vh) scale(0.0387);
            }
          }
          .snow:nth-child(86) {
            opacity: 0.9227;
            transform: translate(22.6133vw, -10px) scale(0.7511);
            animation: fall-86 19s -17s linear infinite;
          }
          @keyframes fall-86 {
            57.129% {
              transform: translate(14.3719vw, 57.129vh) scale(0.7511);
            }
            to {
              transform: translate(18.4926vw, 100vh) scale(0.7511);
            }
          }
          .snow:nth-child(87) {
            opacity: 0.01;
            transform: translate(37.5942vw, -10px) scale(0.4943);
            animation: fall-87 11s -20s linear infinite;
          }
          @keyframes fall-87 {
            36.964% {
              transform: translate(37.8046vw, 36.964vh) scale(0.4943);
            }
            to {
              transform: translate(37.6994vw, 100vh) scale(0.4943);
            }
          }
          .snow:nth-child(88) {
            opacity: 0.2398;
            transform: translate(64.0048vw, -10px) scale(0.2668);
            animation: fall-88 18s -18s linear infinite;
          }
          @keyframes fall-88 {
            37.367% {
              transform: translate(72.0876vw, 37.367vh) scale(0.2668);
            }
            to {
              transform: translate(68.0462vw, 100vh) scale(0.2668);
            }
          }
          .snow:nth-child(89) {
            opacity: 0.918;
            transform: translate(22.8064vw, -10px) scale(0.8011);
            animation: fall-89 12s -11s linear infinite;
          }
          @keyframes fall-89 {
            44.569% {
              transform: translate(17.3017vw, 44.569vh) scale(0.8011);
            }
            to {
              transform: translate(20.05405vw, 100vh) scale(0.8011);
            }
          }
          .snow:nth-child(90) {
            opacity: 0.2326;
            transform: translate(67.5593vw, -10px) scale(0.7722);
            animation: fall-90 15s -18s linear infinite;
          }
          @keyframes fall-90 {
            40.148% {
              transform: translate(72.173vw, 40.148vh) scale(0.7722);
            }
            to {
              transform: translate(69.86615vw, 100vh) scale(0.7722);
            }
          }
          .snow:nth-child(91) {
            opacity: 0.6685;
            transform: translate(63.4825vw, -10px) scale(0.0728);
            animation: fall-91 28s -4s linear infinite;
          }
          @keyframes fall-91 {
            37.192% {
              transform: translate(57.2816vw, 37.192vh) scale(0.0728);
            }
            to {
              transform: translate(60.38205vw, 100vh) scale(0.0728);
            }
          }
          .snow:nth-child(92) {
            opacity: 0.5351;
            transform: translate(53.2212vw, -10px) scale(0.6515);
            animation: fall-92 17s -2s linear infinite;
          }
          @keyframes fall-92 {
            53.258% {
              transform: translate(54.1458vw, 53.258vh) scale(0.6515);
            }
            to {
              transform: translate(53.6835vw, 100vh) scale(0.6515);
            }
          }
          .snow:nth-child(93) {
            opacity: 0.7552;
            transform: translate(23.6634vw, -10px) scale(0.3271);
            animation: fall-93 27s -16s linear infinite;
          }
          @keyframes fall-93 {
            66.241% {
              transform: translate(24.1874vw, 66.241vh) scale(0.3271);
            }
            to {
              transform: translate(23.9254vw, 100vh) scale(0.3271);
            }
          }
          .snow:nth-child(94) {
            opacity: 0.4053;
            transform: translate(22.5814vw, -10px) scale(0.0366);
            animation: fall-94 30s -1s linear infinite;
          }
          @keyframes fall-94 {
            60.057% {
              transform: translate(25.5692vw, 60.057vh) scale(0.0366);
            }
            to {
              transform: translate(24.0753vw, 100vh) scale(0.0366);
            }
          }
          .snow:nth-child(95) {
            opacity: 0.2988;
            transform: translate(42.6595vw, -10px) scale(0.1115);
            animation: fall-95 27s -18s linear infinite;
          }
          @keyframes fall-95 {
            77.58% {
              transform: translate(33.1809vw, 77.58vh) scale(0.1115);
            }
            to {
              transform: translate(37.9202vw, 100vh) scale(0.1115);
            }
          }
          .snow:nth-child(96) {
            opacity: 0.9674;
            transform: translate(64.5063vw, -10px) scale(0.2715);
            animation: fall-96 19s -28s linear infinite;
          }
          @keyframes fall-96 {
            44.739% {
              transform: translate(58.7333vw, 44.739vh) scale(0.2715);
            }
            to {
              transform: translate(61.6198vw, 100vh) scale(0.2715);
            }
          }
          .snow:nth-child(97) {
            opacity: 0.5655;
            transform: translate(67.7182vw, -10px) scale(0.9996);
            animation: fall-97 24s -21s linear infinite;
          }
          @keyframes fall-97 {
            69.89% {
              transform: translate(73.9837vw, 69.89vh) scale(0.9996);
            }
            to {
              transform: translate(70.85095vw, 100vh) scale(0.9996);
            }
          }
          .snow:nth-child(98) {
            opacity: 0.7763;
            transform: translate(44.2942vw, -10px) scale(0.0983);
            animation: fall-98 13s -22s linear infinite;
          }
          @keyframes fall-98 {
            68.308% {
              transform: translate(39.4839vw, 68.308vh) scale(0.0983);
            }
            to {
              transform: translate(41.88905vw, 100vh) scale(0.0983);
            }
          }
          .snow:nth-child(99) {
            opacity: 0.3027;
            transform: translate(76.5648vw, -10px) scale(0.5674);
            animation: fall-99 17s -21s linear infinite;
          }
          @keyframes fall-99 {
            40.598% {
              transform: translate(70.3889vw, 40.598vh) scale(0.5674);
            }
            to {
              transform: translate(73.47685vw, 100vh) scale(0.5674);
            }
          }
          .snow:nth-child(100) {
            opacity: 0.1232;
            transform: translate(79.9198vw, -10px) scale(0.3306);
            animation: fall-100 18s -19s linear infinite;
          }
          @keyframes fall-100 {
            47.733% {
              transform: translate(85.2347vw, 47.733vh) scale(0.3306);
            }
            to {
              transform: translate(82.57725vw, 100vh) scale(0.3306);
            }
          }
          .snow:nth-child(101) {
            opacity: 0.0121;
            transform: translate(18.9828vw, -10px) scale(0.16);
            animation: fall-101 21s -3s linear infinite;
          }
          @keyframes fall-101 {
            61.237% {
              transform: translate(28.4336vw, 61.237vh) scale(0.16);
            }
            to {
              transform: translate(23.7082vw, 100vh) scale(0.16);
            }
          }
          .snow:nth-child(102) {
            opacity: 0.0296;
            transform: translate(6.5932vw, -10px) scale(0.6013);
            animation: fall-102 29s -19s linear infinite;
          }
          @keyframes fall-102 {
            34.806% {
              transform: translate(16.308vw, 34.806vh) scale(0.6013);
            }
            to {
              transform: translate(11.4506vw, 100vh) scale(0.6013);
            }
          }
          .snow:nth-child(103) {
            opacity: 0.6711;
            transform: translate(81.1485vw, -10px) scale(0.3259);
            animation: fall-103 10s -15s linear infinite;
          }
          @keyframes fall-103 {
            46.472% {
              transform: translate(73.1745vw, 46.472vh) scale(0.3259);
            }
            to {
              transform: translate(77.1615vw, 100vh) scale(0.3259);
            }
          }
          .snow:nth-child(104) {
            opacity: 0.042;
            transform: translate(19.6569vw, -10px) scale(0.0143);
            animation: fall-104 26s -14s linear infinite;
          }
          @keyframes fall-104 {
            79.39% {
              transform: translate(9.7714vw, 79.39vh) scale(0.0143);
            }
            to {
              transform: translate(14.71415vw, 100vh) scale(0.0143);
            }
          }
          .snow:nth-child(105) {
            opacity: 0.2942;
            transform: translate(11.692vw, -10px) scale(0.3134);
            animation: fall-105 24s -3s linear infinite;
          }
          @keyframes fall-105 {
            60.509% {
              transform: translate(7.5558vw, 60.509vh) scale(0.3134);
            }
            to {
              transform: translate(9.6239vw, 100vh) scale(0.3134);
            }
          }
          .snow:nth-child(106) {
            opacity: 0.5193;
            transform: translate(69.3311vw, -10px) scale(0.6123);
            animation: fall-106 18s -14s linear infinite;
          }
          @keyframes fall-106 {
            65.984% {
              transform: translate(79.2922vw, 65.984vh) scale(0.6123);
            }
            to {
              transform: translate(74.31165vw, 100vh) scale(0.6123);
            }
          }
          .snow:nth-child(107) {
            opacity: 0.8453;
            transform: translate(87.4229vw, -10px) scale(0.0041);
            animation: fall-107 25s -2s linear infinite;
          }
          @keyframes fall-107 {
            66.782% {
              transform: translate(89.0801vw, 66.782vh) scale(0.0041);
            }
            to {
              transform: translate(88.2515vw, 100vh) scale(0.0041);
            }
          }
          .snow:nth-child(108) {
            opacity: 0.9464;
            transform: translate(25.4988vw, -10px) scale(0.867);
            animation: fall-108 22s -21s linear infinite;
          }
          @keyframes fall-108 {
            67.419% {
              transform: translate(16.0416vw, 67.419vh) scale(0.867);
            }
            to {
              transform: translate(20.7702vw, 100vh) scale(0.867);
            }
          }
          .snow:nth-child(109) {
            opacity: 0.7879;
            transform: translate(27.1156vw, -10px) scale(0.3619);
            animation: fall-109 22s -18s linear infinite;
          }
          @keyframes fall-109 {
            75.451% {
              transform: translate(26.7724vw, 75.451vh) scale(0.3619);
            }
            to {
              transform: translate(26.944vw, 100vh) scale(0.3619);
            }
          }
          .snow:nth-child(110) {
            opacity: 0.6284;
            transform: translate(57.4705vw, -10px) scale(0.037);
            animation: fall-110 22s -3s linear infinite;
          }
          @keyframes fall-110 {
            40.661% {
              transform: translate(57.7397vw, 40.661vh) scale(0.037);
            }
            to {
              transform: translate(57.6051vw, 100vh) scale(0.037);
            }
          }
          .snow:nth-child(111) {
            opacity: 0.375;
            transform: translate(57.3351vw, -10px) scale(0.8897);
            animation: fall-111 21s -30s linear infinite;
          }
          @keyframes fall-111 {
            54.342% {
              transform: translate(62.9574vw, 54.342vh) scale(0.8897);
            }
            to {
              transform: translate(60.14625vw, 100vh) scale(0.8897);
            }
          }
          .snow:nth-child(112) {
            opacity: 0.1155;
            transform: translate(36.0248vw, -10px) scale(0.8977);
            animation: fall-112 29s -26s linear infinite;
          }
          @keyframes fall-112 {
            69.827% {
              transform: translate(38.9719vw, 69.827vh) scale(0.8977);
            }
            to {
              transform: translate(37.49835vw, 100vh) scale(0.8977);
            }
          }
          .snow:nth-child(113) {
            opacity: 0.419;
            transform: translate(32.0594vw, -10px) scale(0.9613);
            animation: fall-113 26s -7s linear infinite;
          }
          @keyframes fall-113 {
            51.494% {
              transform: translate(25.9116vw, 51.494vh) scale(0.9613);
            }
            to {
              transform: translate(28.9855vw, 100vh) scale(0.9613);
            }
          }
          .snow:nth-child(114) {
            opacity: 0.5258;
            transform: translate(66.5591vw, -10px) scale(0.0543);
            animation: fall-114 15s -19s linear infinite;
          }
          @keyframes fall-114 {
            43.279% {
              transform: translate(72.5838vw, 43.279vh) scale(0.0543);
            }
            to {
              transform: translate(69.57145vw, 100vh) scale(0.0543);
            }
          }
          .snow:nth-child(115) {
            opacity: 0.7829;
            transform: translate(18.9496vw, -10px) scale(0.5179);
            animation: fall-115 18s -14s linear infinite;
          }
          @keyframes fall-115 {
            68.475% {
              transform: translate(22.9903vw, 68.475vh) scale(0.5179);
            }
            to {
              transform: translate(20.96995vw, 100vh) scale(0.5179);
            }
          }
          .snow:nth-child(116) {
            opacity: 0.5065;
            transform: translate(16.1519vw, -10px) scale(0.6381);
            animation: fall-116 23s -21s linear infinite;
          }
          @keyframes fall-116 {
            39.102% {
              transform: translate(23.8972vw, 39.102vh) scale(0.6381);
            }
            to {
              transform: translate(20.02455vw, 100vh) scale(0.6381);
            }
          }
          .snow:nth-child(117) {
            opacity: 0.6789;
            transform: translate(79.0217vw, -10px) scale(0.9365);
            animation: fall-117 14s -25s linear infinite;
          }
          @keyframes fall-117 {
            55.973% {
              transform: translate(76.7591vw, 55.973vh) scale(0.9365);
            }
            to {
              transform: translate(77.8904vw, 100vh) scale(0.9365);
            }
          }
          .snow:nth-child(118) {
            opacity: 0.4564;
            transform: translate(7.8157vw, -10px) scale(0.2835);
            animation: fall-118 26s -18s linear infinite;
          }
          @keyframes fall-118 {
            47.296% {
              transform: translate(3.6269vw, 47.296vh) scale(0.2835);
            }
            to {
              transform: translate(5.7213vw, 100vh) scale(0.2835);
            }
          }
          .snow:nth-child(119) {
            opacity: 0.1541;
            transform: translate(6.8976vw, -10px) scale(0.1146);
            animation: fall-119 20s -15s linear infinite;
          }
          @keyframes fall-119 {
            66.685% {
              transform: translate(5.2174vw, 66.685vh) scale(0.1146);
            }
            to {
              transform: translate(6.0575vw, 100vh) scale(0.1146);
            }
          }
          .snow:nth-child(120) {
            opacity: 0.9773;
            transform: translate(87.008vw, -10px) scale(0.7611);
            animation: fall-120 25s -1s linear infinite;
          }
          @keyframes fall-120 {
            58.947% {
              transform: translate(79.1787vw, 58.947vh) scale(0.7611);
            }
            to {
              transform: translate(83.09335vw, 100vh) scale(0.7611);
            }
          }
          .snow:nth-child(121) {
            opacity: 0.7825;
            transform: translate(55.661vw, -10px) scale(0.1986);
            animation: fall-121 29s -15s linear infinite;
          }
          @keyframes fall-121 {
            75.661% {
              transform: translate(63.146vw, 75.661vh) scale(0.1986);
            }
            to {
              transform: translate(59.4035vw, 100vh) scale(0.1986);
            }
          }
          .snow:nth-child(122) {
            opacity: 0.636;
            transform: translate(90.5349vw, -10px) scale(0.5691);
            animation: fall-122 28s -21s linear infinite;
          }
          @keyframes fall-122 {
            31.404% {
              transform: translate(92.0852vw, 31.404vh) scale(0.5691);
            }
            to {
              transform: translate(91.31005vw, 100vh) scale(0.5691);
            }
          }
          .snow:nth-child(123) {
            opacity: 0.3928;
            transform: translate(81.5345vw, -10px) scale(0.3907);
            animation: fall-123 21s -12s linear infinite;
          }
          @keyframes fall-123 {
            70.006% {
              transform: translate(87.2061vw, 70.006vh) scale(0.3907);
            }
            to {
              transform: translate(84.3703vw, 100vh) scale(0.3907);
            }
          }
          .snow:nth-child(124) {
            opacity: 0.9503;
            transform: translate(69.9544vw, -10px) scale(0.0947);
            animation: fall-124 24s -18s linear infinite;
          }
          @keyframes fall-124 {
            37.682% {
              transform: translate(76.38vw, 37.682vh) scale(0.0947);
            }
            to {
              transform: translate(73.1672vw, 100vh) scale(0.0947);
            }
          }
          .snow:nth-child(125) {
            opacity: 0.6681;
            transform: translate(1.653vw, -10px) scale(0.3618);
            animation: fall-125 26s -26s linear infinite;
          }
          @keyframes fall-125 {
            60.748% {
              transform: translate(-3.0718vw, 60.748vh) scale(0.3618);
            }
            to {
              transform: translate(-0.7094vw, 100vh) scale(0.3618);
            }
          }
          .snow:nth-child(126) {
            opacity: 0.4129;
            transform: translate(45.9903vw, -10px) scale(0.8148);
            animation: fall-126 15s -14s linear infinite;
          }
          @keyframes fall-126 {
            39.456% {
              transform: translate(36.7907vw, 39.456vh) scale(0.8148);
            }
            to {
              transform: translate(41.3905vw, 100vh) scale(0.8148);
            }
          }
          .snow:nth-child(127) {
            opacity: 0.0949;
            transform: translate(15.865vw, -10px) scale(0.0666);
            animation: fall-127 29s -16s linear infinite;
          }
          @keyframes fall-127 {
            47.239% {
              transform: translate(23.2375vw, 47.239vh) scale(0.0666);
            }
            to {
              transform: translate(19.55125vw, 100vh) scale(0.0666);
            }
          }
          .snow:nth-child(128) {
            opacity: 0.8419;
            transform: translate(16.6318vw, -10px) scale(0.8394);
            animation: fall-128 13s -26s linear infinite;
          }
          @keyframes fall-128 {
            60.997% {
              transform: translate(11.4582vw, 60.997vh) scale(0.8394);
            }
            to {
              transform: translate(14.045vw, 100vh) scale(0.8394);
            }
          }
          .snow:nth-child(129) {
            opacity: 0.1377;
            transform: translate(99.0821vw, -10px) scale(0.6118);
            animation: fall-129 14s -22s linear infinite;
          }
          @keyframes fall-129 {
            59.046% {
              transform: translate(106.5105vw, 59.046vh) scale(0.6118);
            }
            to {
              transform: translate(102.7963vw, 100vh) scale(0.6118);
            }
          }
          .snow:nth-child(130) {
            opacity: 0.7057;
            transform: translate(54.5088vw, -10px) scale(0.2423);
            animation: fall-130 28s -5s linear infinite;
          }
          @keyframes fall-130 {
            38.883% {
              transform: translate(50.9402vw, 38.883vh) scale(0.2423);
            }
            to {
              transform: translate(52.7245vw, 100vh) scale(0.2423);
            }
          }
          .snow:nth-child(131) {
            opacity: 0.0722;
            transform: translate(48.3806vw, -10px) scale(0.3566);
            animation: fall-131 25s -29s linear infinite;
          }
          @keyframes fall-131 {
            73.883% {
              transform: translate(52.9649vw, 73.883vh) scale(0.3566);
            }
            to {
              transform: translate(50.67275vw, 100vh) scale(0.3566);
            }
          }
          .snow:nth-child(132) {
            opacity: 0.5468;
            transform: translate(36.1078vw, -10px) scale(0.4722);
            animation: fall-132 17s -29s linear infinite;
          }
          @keyframes fall-132 {
            74.095% {
              transform: translate(34.7713vw, 74.095vh) scale(0.4722);
            }
            to {
              transform: translate(35.43955vw, 100vh) scale(0.4722);
            }
          }
          .snow:nth-child(133) {
            opacity: 0.3309;
            transform: translate(17.7456vw, -10px) scale(0.2844);
            animation: fall-133 22s -21s linear infinite;
          }
          @keyframes fall-133 {
            61.884% {
              transform: translate(23.5825vw, 61.884vh) scale(0.2844);
            }
            to {
              transform: translate(20.66405vw, 100vh) scale(0.2844);
            }
          }
          .snow:nth-child(134) {
            opacity: 0.5364;
            transform: translate(79.1957vw, -10px) scale(0.5303);
            animation: fall-134 22s -15s linear infinite;
          }
          @keyframes fall-134 {
            41.449% {
              transform: translate(81.3171vw, 41.449vh) scale(0.5303);
            }
            to {
              transform: translate(80.2564vw, 100vh) scale(0.5303);
            }
          }
          .snow:nth-child(135) {
            opacity: 0.2818;
            transform: translate(48.1033vw, -10px) scale(0.333);
            animation: fall-135 15s -29s linear infinite;
          }
          @keyframes fall-135 {
            31.998% {
              transform: translate(42.8814vw, 31.998vh) scale(0.333);
            }
            to {
              transform: translate(45.49235vw, 100vh) scale(0.333);
            }
          }
          .snow:nth-child(136) {
            opacity: 0.0471;
            transform: translate(2.314vw, -10px) scale(0.5058);
            animation: fall-136 12s -8s linear infinite;
          }
          @keyframes fall-136 {
            75.802% {
              transform: translate(-0.9803vw, 75.802vh) scale(0.5058);
            }
            to {
              transform: translate(0.66685vw, 100vh) scale(0.5058);
            }
          }
          .snow:nth-child(137) {
            opacity: 0.2604;
            transform: translate(17.7546vw, -10px) scale(0.6831);
            animation: fall-137 14s -18s linear infinite;
          }
          @keyframes fall-137 {
            57.821% {
              transform: translate(20.9705vw, 57.821vh) scale(0.6831);
            }
            to {
              transform: translate(19.36255vw, 100vh) scale(0.6831);
            }
          }
          .snow:nth-child(138) {
            opacity: 0.9648;
            transform: translate(31.1986vw, -10px) scale(0.5732);
            animation: fall-138 13s -7s linear infinite;
          }
          @keyframes fall-138 {
            76.382% {
              transform: translate(30.2656vw, 76.382vh) scale(0.5732);
            }
            to {
              transform: translate(30.7321vw, 100vh) scale(0.5732);
            }
          }
          .snow:nth-child(139) {
            opacity: 0.2228;
            transform: translate(6.4386vw, -10px) scale(0.7088);
            animation: fall-139 25s -3s linear infinite;
          }
          @keyframes fall-139 {
            48.889% {
              transform: translate(4.3201vw, 48.889vh) scale(0.7088);
            }
            to {
              transform: translate(5.37935vw, 100vh) scale(0.7088);
            }
          }
          .snow:nth-child(140) {
            opacity: 0.5713;
            transform: translate(8.7029vw, -10px) scale(0.9427);
            animation: fall-140 28s -18s linear infinite;
          }
          @keyframes fall-140 {
            62.47% {
              transform: translate(17.19vw, 62.47vh) scale(0.9427);
            }
            to {
              transform: translate(12.94645vw, 100vh) scale(0.9427);
            }
          }
          .snow:nth-child(141) {
            opacity: 0.3496;
            transform: translate(20.4969vw, -10px) scale(0.4285);
            animation: fall-141 19s -15s linear infinite;
          }
          @keyframes fall-141 {
            78.913% {
              transform: translate(18.6083vw, 78.913vh) scale(0.4285);
            }
            to {
              transform: translate(19.5526vw, 100vh) scale(0.4285);
            }
          }
          .snow:nth-child(142) {
            opacity: 0.3375;
            transform: translate(43.4vw, -10px) scale(0.071);
            animation: fall-142 20s -7s linear infinite;
          }
          @keyframes fall-142 {
            45.622% {
              transform: translate(44.0679vw, 45.622vh) scale(0.071);
            }
            to {
              transform: translate(43.73395vw, 100vh) scale(0.071);
            }
          }
          .snow:nth-child(143) {
            opacity: 0.2086;
            transform: translate(96.0204vw, -10px) scale(0.4479);
            animation: fall-143 24s -2s linear infinite;
          }
          @keyframes fall-143 {
            34.402% {
              transform: translate(90.7667vw, 34.402vh) scale(0.4479);
            }
            to {
              transform: translate(93.39355vw, 100vh) scale(0.4479);
            }
          }
          .snow:nth-child(144) {
            opacity: 0.3699;
            transform: translate(48.2873vw, -10px) scale(0.5682);
            animation: fall-144 12s -3s linear infinite;
          }
          @keyframes fall-144 {
            37.964% {
              transform: translate(41.7855vw, 37.964vh) scale(0.5682);
            }
            to {
              transform: translate(45.0364vw, 100vh) scale(0.5682);
            }
          }
          .snow:nth-child(145) {
            opacity: 0.217;
            transform: translate(58.7701vw, -10px) scale(0.5524);
            animation: fall-145 22s -27s linear infinite;
          }
          @keyframes fall-145 {
            73.049% {
              transform: translate(57.845vw, 73.049vh) scale(0.5524);
            }
            to {
              transform: translate(58.30755vw, 100vh) scale(0.5524);
            }
          }
          .snow:nth-child(146) {
            opacity: 0.7518;
            transform: translate(38.3405vw, -10px) scale(0.0845);
            animation: fall-146 20s -17s linear infinite;
          }
          @keyframes fall-146 {
            34% {
              transform: translate(46.5473vw, 34vh) scale(0.0845);
            }
            to {
              transform: translate(42.4439vw, 100vh) scale(0.0845);
            }
          }
          .snow:nth-child(147) {
            opacity: 0.4944;
            transform: translate(29.425vw, -10px) scale(0.8839);
            animation: fall-147 12s -26s linear infinite;
          }
          @keyframes fall-147 {
            44.693% {
              transform: translate(31.6207vw, 44.693vh) scale(0.8839);
            }
            to {
              transform: translate(30.52285vw, 100vh) scale(0.8839);
            }
          }
          .snow:nth-child(148) {
            opacity: 0.1072;
            transform: translate(20.1266vw, -10px) scale(0.3638);
            animation: fall-148 30s -11s linear infinite;
          }
          @keyframes fall-148 {
            62.661% {
              transform: translate(14.5105vw, 62.661vh) scale(0.3638);
            }
            to {
              transform: translate(17.31855vw, 100vh) scale(0.3638);
            }
          }
          .snow:nth-child(149) {
            opacity: 0.8778;
            transform: translate(54.36vw, -10px) scale(0.4907);
            animation: fall-149 14s -29s linear infinite;
          }
          @keyframes fall-149 {
            31.665% {
              transform: translate(45.1859vw, 31.665vh) scale(0.4907);
            }
            to {
              transform: translate(49.77295vw, 100vh) scale(0.4907);
            }
          }
          .snow:nth-child(150) {
            opacity: 0.0909;
            transform: translate(23.9315vw, -10px) scale(0.4945);
            animation: fall-150 10s -20s linear infinite;
          }
          @keyframes fall-150 {
            72.94% {
              transform: translate(22.9236vw, 72.94vh) scale(0.4945);
            }
            to {
              transform: translate(23.42755vw, 100vh) scale(0.4945);
            }
          }
          .snow:nth-child(151) {
            opacity: 0.7474;
            transform: translate(18.9521vw, -10px) scale(0.0667);
            animation: fall-151 24s -11s linear infinite;
          }
          @keyframes fall-151 {
            64.531% {
              transform: translate(22.3166vw, 64.531vh) scale(0.0667);
            }
            to {
              transform: translate(20.63435vw, 100vh) scale(0.0667);
            }
          }
          .snow:nth-child(152) {
            opacity: 0.5937;
            transform: translate(89.7129vw, -10px) scale(0.2732);
            animation: fall-152 19s -28s linear infinite;
          }
          @keyframes fall-152 {
            69.736% {
              transform: translate(89.748vw, 69.736vh) scale(0.2732);
            }
            to {
              transform: translate(89.73045vw, 100vh) scale(0.2732);
            }
          }
          .snow:nth-child(153) {
            opacity: 0.0198;
            transform: translate(28.5963vw, -10px) scale(0.2134);
            animation: fall-153 13s -28s linear infinite;
          }
          @keyframes fall-153 {
            60.55% {
              transform: translate(20.4307vw, 60.55vh) scale(0.2134);
            }
            to {
              transform: translate(24.5135vw, 100vh) scale(0.2134);
            }
          }
          .snow:nth-child(154) {
            opacity: 0.0027;
            transform: translate(83.7103vw, -10px) scale(0.5838);
            animation: fall-154 12s -23s linear infinite;
          }
          @keyframes fall-154 {
            53.504% {
              transform: translate(76.2743vw, 53.504vh) scale(0.5838);
            }
            to {
              transform: translate(79.9923vw, 100vh) scale(0.5838);
            }
          }
          .snow:nth-child(155) {
            opacity: 0.436;
            transform: translate(40.7575vw, -10px) scale(0.3716);
            animation: fall-155 20s -15s linear infinite;
          }
          @keyframes fall-155 {
            35.728% {
              transform: translate(39.4861vw, 35.728vh) scale(0.3716);
            }
            to {
              transform: translate(40.1218vw, 100vh) scale(0.3716);
            }
          }
          .snow:nth-child(156) {
            opacity: 0.1797;
            transform: translate(61.664vw, -10px) scale(0.6522);
            animation: fall-156 13s -8s linear infinite;
          }
          @keyframes fall-156 {
            75.781% {
              transform: translate(55.2015vw, 75.781vh) scale(0.6522);
            }
            to {
              transform: translate(58.43275vw, 100vh) scale(0.6522);
            }
          }
          .snow:nth-child(157) {
            opacity: 0.3637;
            transform: translate(77.5625vw, -10px) scale(0.9792);
            animation: fall-157 22s -2s linear infinite;
          }
          @keyframes fall-157 {
            64.029% {
              transform: translate(81.399vw, 64.029vh) scale(0.9792);
            }
            to {
              transform: translate(79.48075vw, 100vh) scale(0.9792);
            }
          }
          .snow:nth-child(158) {
            opacity: 0.3839;
            transform: translate(29.7297vw, -10px) scale(0.7293);
            animation: fall-158 24s -21s linear infinite;
          }
          @keyframes fall-158 {
            48.875% {
              transform: translate(33.7331vw, 48.875vh) scale(0.7293);
            }
            to {
              transform: translate(31.7314vw, 100vh) scale(0.7293);
            }
          }
          .snow:nth-child(159) {
            opacity: 0.1739;
            transform: translate(58.7826vw, -10px) scale(0.8264);
            animation: fall-159 23s -15s linear infinite;
          }
          @keyframes fall-159 {
            62.149% {
              transform: translate(51.8771vw, 62.149vh) scale(0.8264);
            }
            to {
              transform: translate(55.32985vw, 100vh) scale(0.8264);
            }
          }
          .snow:nth-child(160) {
            opacity: 0.644;
            transform: translate(53.2615vw, -10px) scale(0.4763);
            animation: fall-160 17s -15s linear infinite;
          }
          @keyframes fall-160 {
            61.902% {
              transform: translate(57.7884vw, 61.902vh) scale(0.4763);
            }
            to {
              transform: translate(55.52495vw, 100vh) scale(0.4763);
            }
          }
          .snow:nth-child(161) {
            opacity: 0.772;
            transform: translate(54.808vw, -10px) scale(0.9251);
            animation: fall-161 30s -13s linear infinite;
          }
          @keyframes fall-161 {
            42.856% {
              transform: translate(44.886vw, 42.856vh) scale(0.9251);
            }
            to {
              transform: translate(49.847vw, 100vh) scale(0.9251);
            }
          }
          .snow:nth-child(162) {
            opacity: 0.1793;
            transform: translate(25.4265vw, -10px) scale(0.1454);
            animation: fall-162 20s -29s linear infinite;
          }
          @keyframes fall-162 {
            37.982% {
              transform: translate(18.7787vw, 37.982vh) scale(0.1454);
            }
            to {
              transform: translate(22.1026vw, 100vh) scale(0.1454);
            }
          }
          .snow:nth-child(163) {
            opacity: 0.421;
            transform: translate(71.4043vw, -10px) scale(0.1613);
            animation: fall-163 27s -3s linear infinite;
          }
          @keyframes fall-163 {
            70.473% {
              transform: translate(65.6173vw, 70.473vh) scale(0.1613);
            }
            to {
              transform: translate(68.5108vw, 100vh) scale(0.1613);
            }
          }
          .snow:nth-child(164) {
            opacity: 0.7309;
            transform: translate(53.8892vw, -10px) scale(0.0588);
            animation: fall-164 22s -17s linear infinite;
          }
          @keyframes fall-164 {
            74.175% {
              transform: translate(45.1506vw, 74.175vh) scale(0.0588);
            }
            to {
              transform: translate(49.5199vw, 100vh) scale(0.0588);
            }
          }
          .snow:nth-child(165) {
            opacity: 0.6283;
            transform: translate(98.2614vw, -10px) scale(0.6952);
            animation: fall-165 14s -14s linear infinite;
          }
          @keyframes fall-165 {
            41.491% {
              transform: translate(102.3192vw, 41.491vh) scale(0.6952);
            }
            to {
              transform: translate(100.2903vw, 100vh) scale(0.6952);
            }
          }
          .snow:nth-child(166) {
            opacity: 0.4795;
            transform: translate(79.9406vw, -10px) scale(0.3642);
            animation: fall-166 23s -28s linear infinite;
          }
          @keyframes fall-166 {
            40.933% {
              transform: translate(86.0829vw, 40.933vh) scale(0.3642);
            }
            to {
              transform: translate(83.01175vw, 100vh) scale(0.3642);
            }
          }
          .snow:nth-child(167) {
            opacity: 0.7527;
            transform: translate(5.9428vw, -10px) scale(0.6061);
            animation: fall-167 13s -22s linear infinite;
          }
          @keyframes fall-167 {
            55.178% {
              transform: translate(-0.6718vw, 55.178vh) scale(0.6061);
            }
            to {
              transform: translate(2.6355vw, 100vh) scale(0.6061);
            }
          }
          .snow:nth-child(168) {
            opacity: 0.1111;
            transform: translate(89.4746vw, -10px) scale(0.4977);
            animation: fall-168 14s -29s linear infinite;
          }
          @keyframes fall-168 {
            49.027% {
              transform: translate(85.7483vw, 49.027vh) scale(0.4977);
            }
            to {
              transform: translate(87.61145vw, 100vh) scale(0.4977);
            }
          }
          .snow:nth-child(169) {
            opacity: 0.2812;
            transform: translate(41.8372vw, -10px) scale(0.9953);
            animation: fall-169 24s -24s linear infinite;
          }
          @keyframes fall-169 {
            76.96% {
              transform: translate(48.8814vw, 76.96vh) scale(0.9953);
            }
            to {
              transform: translate(45.3593vw, 100vh) scale(0.9953);
            }
          }
          .snow:nth-child(170) {
            opacity: 0.3023;
            transform: translate(32.7649vw, -10px) scale(0.9191);
            animation: fall-170 12s -28s linear infinite;
          }
          @keyframes fall-170 {
            57.162% {
              transform: translate(37.5771vw, 57.162vh) scale(0.9191);
            }
            to {
              transform: translate(35.171vw, 100vh) scale(0.9191);
            }
          }
          .snow:nth-child(171) {
            opacity: 0.5403;
            transform: translate(32.3027vw, -10px) scale(0.8402);
            animation: fall-171 13s -15s linear infinite;
          }
          @keyframes fall-171 {
            47.205% {
              transform: translate(28.1077vw, 47.205vh) scale(0.8402);
            }
            to {
              transform: translate(30.2052vw, 100vh) scale(0.8402);
            }
          }
          .snow:nth-child(172) {
            opacity: 0.2986;
            transform: translate(65.3945vw, -10px) scale(0.6216);
            animation: fall-172 10s -19s linear infinite;
          }
          @keyframes fall-172 {
            35.977% {
              transform: translate(68.1738vw, 35.977vh) scale(0.6216);
            }
            to {
              transform: translate(66.78415vw, 100vh) scale(0.6216);
            }
          }
          .snow:nth-child(173) {
            opacity: 0.0831;
            transform: translate(39.7475vw, -10px) scale(0.6623);
            animation: fall-173 29s -11s linear infinite;
          }
          @keyframes fall-173 {
            77.73% {
              transform: translate(42.1145vw, 77.73vh) scale(0.6623);
            }
            to {
              transform: translate(40.931vw, 100vh) scale(0.6623);
            }
          }
          .snow:nth-child(174) {
            opacity: 0.9886;
            transform: translate(57.1477vw, -10px) scale(0.0233);
            animation: fall-174 23s -25s linear infinite;
          }
          @keyframes fall-174 {
            74.297% {
              transform: translate(57.5366vw, 74.297vh) scale(0.0233);
            }
            to {
              transform: translate(57.34215vw, 100vh) scale(0.0233);
            }
          }
          .snow:nth-child(175) {
            opacity: 0.7825;
            transform: translate(1.4716vw, -10px) scale(0.1362);
            animation: fall-175 25s -22s linear infinite;
          }
          @keyframes fall-175 {
            69.817% {
              transform: translate(4.8776vw, 69.817vh) scale(0.1362);
            }
            to {
              transform: translate(3.1746vw, 100vh) scale(0.1362);
            }
          }
          .snow:nth-child(176) {
            opacity: 0.6149;
            transform: translate(89.3641vw, -10px) scale(0.6272);
            animation: fall-176 17s -4s linear infinite;
          }
          @keyframes fall-176 {
            73.625% {
              transform: translate(94.5795vw, 73.625vh) scale(0.6272);
            }
            to {
              transform: translate(91.9718vw, 100vh) scale(0.6272);
            }
          }
          .snow:nth-child(177) {
            opacity: 0.6785;
            transform: translate(44.5486vw, -10px) scale(0.047);
            animation: fall-177 29s -22s linear infinite;
          }
          @keyframes fall-177 {
            53.096% {
              transform: translate(39.2398vw, 53.096vh) scale(0.047);
            }
            to {
              transform: translate(41.8942vw, 100vh) scale(0.047);
            }
          }
          .snow:nth-child(178) {
            opacity: 0.0563;
            transform: translate(85.5779vw, -10px) scale(0.6705);
            animation: fall-178 11s -14s linear infinite;
          }
          @keyframes fall-178 {
            52.384% {
              transform: translate(76.4427vw, 52.384vh) scale(0.6705);
            }
            to {
              transform: translate(81.0103vw, 100vh) scale(0.6705);
            }
          }
          .snow:nth-child(179) {
            opacity: 0.1134;
            transform: translate(88.4155vw, -10px) scale(0.1829);
            animation: fall-179 25s -10s linear infinite;
          }
          @keyframes fall-179 {
            77.489% {
              transform: translate(78.6267vw, 77.489vh) scale(0.1829);
            }
            to {
              transform: translate(83.5211vw, 100vh) scale(0.1829);
            }
          }
          .snow:nth-child(180) {
            opacity: 0.4301;
            transform: translate(81.9431vw, -10px) scale(0.3272);
            animation: fall-180 27s -20s linear infinite;
          }
          @keyframes fall-180 {
            30.713% {
              transform: translate(85.8917vw, 30.713vh) scale(0.3272);
            }
            to {
              transform: translate(83.9174vw, 100vh) scale(0.3272);
            }
          }
          .snow:nth-child(181) {
            opacity: 0.3163;
            transform: translate(39.2101vw, -10px) scale(0.019);
            animation: fall-181 19s -5s linear infinite;
          }
          @keyframes fall-181 {
            40.288% {
              transform: translate(40.6468vw, 40.288vh) scale(0.019);
            }
            to {
              transform: translate(39.92845vw, 100vh) scale(0.019);
            }
          }
          .snow:nth-child(182) {
            opacity: 0.5499;
            transform: translate(89.9123vw, -10px) scale(0.0994);
            animation: fall-182 28s -28s linear infinite;
          }
          @keyframes fall-182 {
            52.282% {
              transform: translate(93.3868vw, 52.282vh) scale(0.0994);
            }
            to {
              transform: translate(91.64955vw, 100vh) scale(0.0994);
            }
          }
          .snow:nth-child(183) {
            opacity: 0.9042;
            transform: translate(23.1846vw, -10px) scale(0.3);
            animation: fall-183 20s -24s linear infinite;
          }
          @keyframes fall-183 {
            43.989% {
              transform: translate(13.5272vw, 43.989vh) scale(0.3);
            }
            to {
              transform: translate(18.3559vw, 100vh) scale(0.3);
            }
          }
          .snow:nth-child(184) {
            opacity: 0.099;
            transform: translate(89.1579vw, -10px) scale(0.2121);
            animation: fall-184 18s -2s linear infinite;
          }
          @keyframes fall-184 {
            40.579% {
              transform: translate(85.9222vw, 40.579vh) scale(0.2121);
            }
            to {
              transform: translate(87.54005vw, 100vh) scale(0.2121);
            }
          }
          .snow:nth-child(185) {
            opacity: 0.8265;
            transform: translate(72.1099vw, -10px) scale(0.4192);
            animation: fall-185 26s -12s linear infinite;
          }
          @keyframes fall-185 {
            60.338% {
              transform: translate(74.6321vw, 60.338vh) scale(0.4192);
            }
            to {
              transform: translate(73.371vw, 100vh) scale(0.4192);
            }
          }
          .snow:nth-child(186) {
            opacity: 0.7967;
            transform: translate(43.7706vw, -10px) scale(0.1113);
            animation: fall-186 20s -14s linear infinite;
          }
          @keyframes fall-186 {
            46.186% {
              transform: translate(49.4818vw, 46.186vh) scale(0.1113);
            }
            to {
              transform: translate(46.6262vw, 100vh) scale(0.1113);
            }
          }
          .snow:nth-child(187) {
            opacity: 0.4764;
            transform: translate(56.289vw, -10px) scale(0.5273);
            animation: fall-187 15s -13s linear infinite;
          }
          @keyframes fall-187 {
            61.987% {
              transform: translate(54.8191vw, 61.987vh) scale(0.5273);
            }
            to {
              transform: translate(55.55405vw, 100vh) scale(0.5273);
            }
          }
          .snow:nth-child(188) {
            opacity: 0.2021;
            transform: translate(27.1777vw, -10px) scale(0.1513);
            animation: fall-188 26s -3s linear infinite;
          }
          @keyframes fall-188 {
            77.82% {
              transform: translate(29.9803vw, 77.82vh) scale(0.1513);
            }
            to {
              transform: translate(28.579vw, 100vh) scale(0.1513);
            }
          }
          .snow:nth-child(189) {
            opacity: 0.1536;
            transform: translate(64.8162vw, -10px) scale(0.7304);
            animation: fall-189 13s -15s linear infinite;
          }
          @keyframes fall-189 {
            75.298% {
              transform: translate(63.746vw, 75.298vh) scale(0.7304);
            }
            to {
              transform: translate(64.2811vw, 100vh) scale(0.7304);
            }
          }
          .snow:nth-child(190) {
            opacity: 0.757;
            transform: translate(4.4151vw, -10px) scale(0.2688);
            animation: fall-190 20s -21s linear infinite;
          }
          @keyframes fall-190 {
            47.653% {
              transform: translate(5.5894vw, 47.653vh) scale(0.2688);
            }
            to {
              transform: translate(5.00225vw, 100vh) scale(0.2688);
            }
          }
          .snow:nth-child(191) {
            opacity: 0.8929;
            transform: translate(8.3595vw, -10px) scale(0.7641);
            animation: fall-191 24s -3s linear infinite;
          }
          @keyframes fall-191 {
            40.895% {
              transform: translate(6.5939vw, 40.895vh) scale(0.7641);
            }
            to {
              transform: translate(7.4767vw, 100vh) scale(0.7641);
            }
          }
          .snow:nth-child(192) {
            opacity: 0.8509;
            transform: translate(99.4077vw, -10px) scale(0.9136);
            animation: fall-192 18s -10s linear infinite;
          }
          @keyframes fall-192 {
            66.903% {
              transform: translate(101.7134vw, 66.903vh) scale(0.9136);
            }
            to {
              transform: translate(100.56055vw, 100vh) scale(0.9136);
            }
          }
          .snow:nth-child(193) {
            opacity: 0.9847;
            transform: translate(13.4365vw, -10px) scale(0.052);
            animation: fall-193 10s -4s linear infinite;
          }
          @keyframes fall-193 {
            48.017% {
              transform: translate(13.5721vw, 48.017vh) scale(0.052);
            }
            to {
              transform: translate(13.5043vw, 100vh) scale(0.052);
            }
          }
          .snow:nth-child(194) {
            opacity: 0.3914;
            transform: translate(16.1815vw, -10px) scale(0.8306);
            animation: fall-194 12s -3s linear infinite;
          }
          @keyframes fall-194 {
            37.327% {
              transform: translate(15.2037vw, 37.327vh) scale(0.8306);
            }
            to {
              transform: translate(15.6926vw, 100vh) scale(0.8306);
            }
          }
          .snow:nth-child(195) {
            opacity: 0.5151;
            transform: translate(32.8957vw, -10px) scale(0.5151);
            animation: fall-195 20s -1s linear infinite;
          }
          @keyframes fall-195 {
            36.985% {
              transform: translate(38.3742vw, 36.985vh) scale(0.5151);
            }
            to {
              transform: translate(35.63495vw, 100vh) scale(0.5151);
            }
          }
          .snow:nth-child(196) {
            opacity: 0.1861;
            transform: translate(37.8277vw, -10px) scale(0.8263);
            animation: fall-196 24s -25s linear infinite;
          }
          @keyframes fall-196 {
            50.433% {
              transform: translate(45.3543vw, 50.433vh) scale(0.8263);
            }
            to {
              transform: translate(41.591vw, 100vh) scale(0.8263);
            }
          }
          .snow:nth-child(197) {
            opacity: 0.6156;
            transform: translate(27.3108vw, -10px) scale(0.7061);
            animation: fall-197 20s -21s linear infinite;
          }
          @keyframes fall-197 {
            58.656% {
              transform: translate(35.1264vw, 58.656vh) scale(0.7061);
            }
            to {
              transform: translate(31.2186vw, 100vh) scale(0.7061);
            }
          }
          .snow:nth-child(198) {
            opacity: 0.3311;
            transform: translate(48.5603vw, -10px) scale(0.3958);
            animation: fall-198 30s -19s linear infinite;
          }
          @keyframes fall-198 {
            50.484% {
              transform: translate(48.1189vw, 50.484vh) scale(0.3958);
            }
            to {
              transform: translate(48.3396vw, 100vh) scale(0.3958);
            }
          }
          .snow:nth-child(199) {
            opacity: 0.3317;
            transform: translate(4.0361vw, -10px) scale(0.4671);
            animation: fall-199 10s -19s linear infinite;
          }
          @keyframes fall-199 {
            47.455% {
              transform: translate(7.9208vw, 47.455vh) scale(0.4671);
            }
            to {
              transform: translate(5.97845vw, 100vh) scale(0.4671);
            }
          }
          .snow:nth-child(200) {
            opacity: 0.4866;
            transform: translate(48.1549vw, -10px) scale(0.8523);
            animation: fall-200 22s -4s linear infinite;
          }
          @keyframes fall-200 {
            36.944% {
              transform: translate(39.4927vw, 36.944vh) scale(0.8523);
            }
            to {
              transform: translate(43.8238vw, 100vh) scale(0.8523);
            }
          }
        `;
    const style = document.createElement('style');
    if (style.styleSheet) style.styleSheet.cssText = fpcss;
    else style.appendChild(document.createTextNode(fpcss));
    document.getElementsByTagName('head')[0].appendChild(style);



    // Filter select



    const filterSelect = document.createElement("select");
    filterSelect.id = 'filterSelect';
    const filter1option = document.createElement("option");
    const filter2option = document.createElement("option");
    const filter3option = document.createElement("option");
    const filter4option = document.createElement("option");

    filter1option.value = "1";
    filter1option.text = "Default";
    filter1option.selected = "selected";
    filter2option.value = "2";
    filter2option.text = "Games";
    filter3option.value = "3";
    filter3option.text = "Blog";
    filter4option.value = "4";
    filter4option.text = ">EN";

    filterSelect.add(filter1option, null);
    filterSelect.add(filter2option, null);
    filterSelect.add(filter3option, null);
    filterSelect.add(filter4option, null);
    filterSelect.onchange = e => {
        filterValue = document.getElementById("filterSelect").value;
        document.getElementById("chatline").style.boxShadow = filterValue == '2' ? `inset 0 0 0 2px ${filter2color}` : 
            filterValue == '3' ? `inset 0 0 0 2px ${filter3color}` : filterValue == '4' ? `inset 0 0 0 2px ${filter4color}` : 'none';
    }
    document.getElementById("chatheader").appendChild(filterSelect);


    Array.from(document.getElementById("messagebuffer").children).forEach(e => {
        e.innerHTML = e.innerHTML.replace("--filter1", "");
        e.innerHTML = e.innerHTML.replace("--filter2", "");
        e.innerHTML = e.innerHTML.replace("--filter3", "");
        e.innerHTML = e.innerHTML.replace("--filter4", "");
    });

    // --- mikoboat ---



    const mikoDing = document.createElement("audio");
    mikoDing.setAttribute('src', 'https://files.catbox.moe/5xuhxr.mp3');
    mikoDing.loop = true;
    mikoDing.volume = 0.5;
    document.getElementsByClassName("navbar-brand")[0].onmouseenter = () => mikoDing.play();
    document.getElementsByClassName("navbar-brand")[0].onmouseleave = () => mikoDing.pause();


    const luluTrigger = n => {
        const chatwrap = document.getElementById("chatwrap");
        if (Math.random() > n) {
            setTimeout(() => {
                chatwrap.style.backgroundImage = "none";
            }, 100);
            chatwrap.style.backgroundSize = "cover";
            chatwrap.style.backgroundImage = "url('https://files.catbox.moe/ittv5p.png')";
        }
    }
})();




// --- Other stuff ---





// Remove video/restore video button
function removeUntilNext() {
    socket.once("changeMedia", unremoveVideo);
    return removeVideo()
}

function removeVideo(event) {
    try {
        PLAYER.setVolume(0);
        if (PLAYER.type === "rv") {
            killVideoUntilItIsDead($(PLAYER.player))
        }
    } catch (e) {
        console.log(e)
    }
    CLIENT.removedOnGDrive = PLAYER.mediaType == "gd" ? true : false;
    $("#videowrap").hide().attr("id", "videowrap_disabled");
    $("#ytapiplayer").attr("id", "ytapiplayer_disabled");
    $("#chatwrap").removeClass("col-lg-5 col-md-5").addClass("col-md-12");
    $('a[onclick*="removeVideo"]').attr("onclick", "javascript:unremoveVideo(event)").text("Restore video");
    if (event) event.preventDefault()
}

function unremoveVideo(event) {
    setTimeout(function () {
        PLAYER.setVolume(.33)
    }, 250);
    socket.emit("playerReady");
    $("#chatwrap").addClass("col-lg-5 col-md-5").removeClass("col-md-12");
    $("#videowrap_disabled").attr("id", "videowrap").show();
    $("#ytapiplayer_disabled").attr("id", "ytapiplayer");
    $('a[onclick*="removeVideo"]').attr("onclick", "javascript:removeVideo(event)").text("Remove video");
    if (event) event.preventDefault();
    if (CLIENT.removedOnGDrive) {
        CLIENT.removedOnGDrive = false;
        setTimeout(function () {
            $("#mediarefresh").click()
        }, 1e3)
    }
}

function toggleChat() {
    if ($("#chatwrap").parent().attr("id") === "main") {
        $("#chatwrap").appendTo("#customSettingsStaging");
        $("#videowrap").css("margin", "0 auto");
        $("#videowrap").css("float", "initial");
        $("#videowrap").css("margin-bottom", "20px");
        $('a[onclick*="toggleChat"]').text("Restore Chat");
        return
    }
    if (!USEROPTS.layout.match(/synchtube/)) {
        $("#chatwrap").prependTo("#main")
    } else {
        $("#chatwrap").appendTo("#main")
    }
    $("#videowrap").css("margin", "");
    $("#videowrap").css("float", "");
    $("#videowrap").css("margin-bottom", "");
    $('a[onclick*="toggleChat"]').text("Remove Chat")
} (function (CyTube_Layout) {
    return CyTube_Layout(window, document, window.jQuery, String)
})(function (window, document, $, String, undefined) {
    $('nav.navbar a[href="#"][onclick]').attr("href", "javascript:void(0)");
    if (!$('a[onclick*="removeUntilNext"]').length) {
        $('a[onclick*="removeVideo"]').parent().parent().append($("<li>").append($("<a>").attr("href", "javascript:void(0)").attr("onclick", "javascript:removeUntilNext()").text("Remove Video Until Next")))
    }
    if (!$('a[onclick*="toggleChat"]').length) {
        $('a[onclick*="chatOnly"]').parent().after($("<li>").append($("<a>").attr("href", "javascript:void(0)").attr("onclick", "javascript:toggleChat()").text("Remove Chat")))
    } ({
        host: "https://pink.horse/resources/css/",
        initialize: function () {
            if (CLIENT.cinemaMode) {
                return
            } else {
                CLIENT.cinemaMode = this
            }
            // this.loadStyle()
        },
        createButtons: function () {
            $('a[onclick*="removeVideo"]').parent().parent().append($("<li>").append($("<a>").attr("href", "javascript:void(0)").attr("onclick", 'javascript:$("#cinematoggle").click()').text("Cinema Mode")));
            $('<div id="cinematoggle"><span class="glyphicon glyphicon-new-window "></span></div>').appendTo("body").click(function () {
                if (!$("body").hasClass("cinemachat")) {
                    if ($("#userlist").is(":visible")) {
                        $("#userlisttoggle").click()
                    }
                }
                $("body").toggleClass("cinemachat");
                if ($("iframe[src*=livestream]").length) {
                    PLAYER.mediaType = "";
                    PLAYER.mediaId = "";
                    socket.emit("playerReady")
                }
                handleWindowResize()
            })
        },
        createStyle: function (body) {
            this.style = $("<style>").attr("type", "text/css").attr("id", "cinemaStyle").html(body).appendTo("head")
        },
        handleCommand(message, target) {
            var params = message.substring(1).replace(/cinema ?/, "").trim();
            if (!params.length) {
                $("#cinematoggle").click()
            }
            if (params === "nopolls") {
                $("body").addClass("cinema-nopoll");
                $("#messagebuffer").trigger("whisper", `Cinema: Poll overlay disabled`);
                localStorage.setItem(`${CHANNEL.name}_cinemaHidePolls`, 1)
            }
            if (params === "polls") {
                $("body").removeClass("cinema-nopoll");
                $("#messagebuffer").trigger("whisper", `Cinema: Poll overlay enabled`);
                localStorage.setItem(`${CHANNEL.name}_cinemaHidePolls`, 0)
            }
        },
        registerCommand() {
            $("#chatline").trigger("registerCommand", ["cinema", this.handleCommand.bind(this)])
        },
        loadStyle: function () {
            $.ajax(this.host + "cinema.css?cache" + Math.random()).done((data => {
                this.createButtons();
                this.createStyle(data);
                this.registerCommand();
                if (localStorage.getItem(`${CHANNEL.name}_cinemaHidePolls`) !== null) {
                    if (parseInt(localStorage.getItem(`${CHANNEL.name}_cinemaHidePolls`))) {
                        $("body").addClass("cinema-nopoll")
                    }
                }
            }))
        }
    }).initialize()
});

//  ===========================================  HISTORY TAB ========================================== //
historyTab = $(".nav-tabs").children()[1].cloneNode(true);
historyTab.children[0].innerHTML ="History";
historyTab.children[0].href="#historyTab";
historyPanel = $("<div id='historyTab' class='tab-pane' role='tabpanel'></div>").appendTo($(".tab-content"));
historyWrapper = $("<div id='historyWrapper'></div>").appendTo(historyPanel)
$(".nav-tabs").children()[0].after(historyTab);

$("#queue").on("DOMNodeRemoved", function(event){
		if(event.target.tagName.toLowerCase() =="li"){
			let entry = $("<li class='history_entry'></li>");
			let currentTime = new Date();
			entry.append( $("<div class='qe_date'>"
				+(currentTime.getHours() <10 ? "0":"") + currentTime.getHours()
				+":"+(currentTime.getMinutes() <10 ? "0":"") + currentTime.getMinutes()
				+":"+(currentTime.getSeconds()  <10 ? "0":"") + currentTime.getSeconds()
				+"</div>"))
			entry.append( $(this).find(".queue_active .qe_time ").clone() );
			entry.append( $(this).find(".queue_active .qe_title ").clone() );
			if(entry.find(".qe_title").text == "Probably something to see here") { entry.find(".qe_title").href=="https://www.youtube.com/watch?v=-lfiTebewnc"}
			if (historyWrapper.children()[99]) {	historyWrapper.children()[99].remove();	}
			if(entry.find(".qe_title").text() == "") { entry.find(".qe_title").text("No name"); }
			if( $("#historyWrapper").text() =="" || $("#historyWrapper").children()[0].children[2].href != entry.find(".qe_title").prop("href") ) {
				historyWrapper.prepend( entry );
			}
		}
	}
)
  