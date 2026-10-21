/* ============================================================
   DATA — [kataAsing, arti, latin?, [alternatif]?, kana?]
   ============================================================ */
const DATA = {
  en: { name:"Inggris", flag:"🇬🇧", tts:"en-US", cats:{
    sapaan: [["Hello","Halo"],["Good morning","Selamat pagi"],["Thank you","Terima kasih"],
      ["Goodbye","Selamat tinggal"],["How are you?","Apa kabar?"],["Please","Tolong"],
      ["Sorry","Maaf"],["Yes","Ya"],["No","Tidak"],["Good night","Selamat malam"]],
    makanan: [["Water","Air"],["Rice","Nasi"],["Chicken","Ayam"],["Bread","Roti"],
      ["Egg","Telur"],["Milk","Susu"],["Fish","Ikan"],["Fruit","Buah"],
      ["Vegetable","Sayur"],["Coffee","Kopi"]],
    angka: [["One","Satu"],["Two","Dua"],["Three","Tiga"],["Four","Empat"],
      ["Five","Lima"],["Six","Enam"],["Seven","Tujuh"],["Eight","Delapan"],
      ["Nine","Sembilan"],["Ten","Sepuluh"]]
  }},
  ja: { name:"Jepang", flag:"🇯🇵", tts:"ja-JP", cats:{
    sapaan: [
      ["こんにちは","Halo","konnichiwa",["konnichiha"]],["おはよう","Selamat pagi","ohayou",["ohayo"]],
      ["こんばんは","Selamat malam","konbanwa"],["ありがとう","Terima kasih","arigatou",["arigato","arigatō"]],
      ["さようなら","Selamat tinggal","sayounara",["sayonara"]],
      ["お元気ですか","Apa kabar?","ogenki desu ka",[],"おげんきですか"],
      ["お願いします","Tolong","onegai shimasu",[],"おねがいします"],
      ["すみません","Permisi/Maaf","sumimasen"],["はい","Ya","hai"],["いいえ","Tidak","iie"],
      ["おやすみ","Selamat tidur","oyasumi"],["はじめまして","Senang berkenalan","hajimemashite"],
      ["いただきます","Selamat makan","itadakimasu"],
      ["ごちそうさま","Terima kasih (makan)","gochisousama",["gochisosama"]],
      ["おかえりなさい","Selamat datang kembali","okaerinasai"]
    ],
    makanan: [
      ["水","Air","mizu",[],"みず"],["ご飯","Nasi","gohan",[],"ごはん"],
      ["鶏肉","Ayam","toriniku",[],"とりにく"],["パン","Roti","pan"],
      ["卵","Telur","tamago",[],"たまご"],["牛乳","Susu","gyuunyuu",[],"ぎゅうにゅう"],
      ["魚","Ikan","sakana",[],"さかな"],["果物","Buah","kudamono",[],"くだもの"],
      ["野菜","Sayur","yasai",[],"やさい"],["肉","Daging","niku",[],"にく"],
      ["お茶","Teh","ocha",[],"おちゃ"],["寿司","Sushi","sushi",[],"すし"],
      ["ラーメン","Ramen","raamen",["ramen"]],["天ぷら","Tempura","tenpura",[],"てんぷら"],
      ["お菓子","Permen","okashi",[],"おかし"],["味噌汁","Sup miso","misoshiru",[],"みそしる"],
      ["醤油","Kecap Jepang","shouyu",["shoyu"],"しょうゆ"],
      ["コーヒー","Kopi","koohii",["kohi","kōhī"]]
    ],
    angka: [
      ["一","Satu","ichi",[],"いち"],["二","Dua","ni",[],"に"],["三","Tiga","san",[],"さん"],
      ["四","Empat","yon",["shi"],"よん"],["五","Lima","go",[],"ご"],["六","Enam","roku",[],"ろく"],
      ["七","Tujuh","nana",["shichi"],"なな"],["八","Delapan","hachi",[],"はち"],
      ["九","Sembilan","kyuu",["ku"],"きゅう"],["十","Sepuluh","juu",[],"じゅう"],
      ["百","Seratus","hyaku",[],"ひゃく"],["千","Seribu","sen",[],"せん"],["万","Sepuluh ribu","man",[],"まん"]
    ],
    warna: [
      ["赤","Merah","aka",[],"あか"],["青","Biru","ao",[],"あお"],["黄色","Kuning","kiiro",[],"きいろ"],
      ["緑","Hijau","midori",[],"みどり"],["黒","Hitam","kuro",[],"くろ"],["白","Putih","shiro",[],"しろ"],
      ["紫","Ungu","murasaki",[],"むらさき"],["ピンク","Merah muda","pinku",["pink"]],
      ["茶色","Coklat","chairo",[],"ちゃいろ"],["灰色","Abu-abu","haiiro",[],"はいいろ"]
    ],
    keluarga: [
      ["お父さん","Ayah","otousan",["otosan"],"おとうさん"],["お母さん","Ibu","okaasan",[],"おかあさん"],
      ["お兄さん","Kakak L","oniisan",[],"おにいさん"],["お姉さん","Kakak P","oneesan",[],"おねえさん"],
      ["弟","Adik L","otouto",["ototo"],"おとうと"],["妹","Adik P","imouto",[],"いもうと"],
      ["祖父","Kakek","sofu",[],"そふ"],["祖母","Nenek","sobo",[],"そぼ"],
      ["家族","Keluarga","kazoku",[],"かぞく"],["子供","Anak","kodomo",[],"こども"]
    ],
    hewan: [
      ["犬","Anjing","inu",[],"いぬ"],["猫","Kucing","neko",[],"ねこ"],["鳥","Burung","tori",[],"とり"],
      ["魚","Ikan","sakana",[],"さかな"],["馬","Kuda","uma",[],"うま"],["牛","Sapi","ushi",[],"うし"],
      ["豚","Babi","buta",[],"ぶた"],["象","Gajah","zou",[],"ぞう"],["虎","Harimau","tora",[],"とら"],
      ["兎","Kelinci","usagi",[],"うさぎ"]
    ],
    tubuh: [
      ["頭","Kepala","atama",[],"あたま"],["目","Mata","me",[],"め"],["耳","Telinga","mimi",[],"みみ"],
      ["鼻","Hidung","hana",[],"はな"],["口","Mulut","kuchi",[],"くち"],["手","Tangan","te",[],"て"],
      ["足","Kaki","ashi",[],"あし"],["心","Hati","kokoro",[],"こころ"],["体","Tubuh","karada",[],"からだ"],
      ["髪","Rambut","kami",[],"かみ"]
    ],
    waktu: [
      ["今日","Hari ini","kyou",[],"きょう"],["明日","Besok","ashita",["asu"],"あした"],
      ["昨日","Kemarin","kinou",[],"きのう"],["朝","Pagi","asa",[],"あさ"],["昼","Siang","hiru",[],"ひる"],
      ["夜","Malam","yoru",[],"よる"],["今","Sekarang","ima",[],"いま"],["週","Pekan","shuu",[],"しゅう"],
      ["月","Bulan","tsuki",[],"つき"],["年","Tahun","toshi",["nen"],"とし"]
    ],
    kerja: [
      ["食べる","Makan","taberu",[],"たべる"],["飲む","Minum","nomu",[],"のむ"],
      ["行く","Pergi","iku",[],"いく"],["来る","Datang","kuru",[],"くる"],
      ["見る","Melihat","miru",[],"みる"],["聞く","Mendengar","kiku",[],"きく"],
      ["話す","Berbicara","hanasu",[],"はなす"],["読む","Membaca","yomu",[],"よむ"],
      ["書く","Menulis","kaku",[],"かく"],["寝る","Tidur","neru",[],"ねる"],
      ["起きる","Bangun","okiru",[],"おきる"],["買う","Membeli","kau",[],"かう"]
    ],
    sifat: [
      ["大きい","Besar","ookii",["okii"],"おおきい"],["小さい","Kecil","chiisai",["chisai"],"ちいさい"],
      ["高い","Tinggi/Mahal","takai",[],"たかい"],["安い","Murah","yasui",[],"やすい"],
      ["新しい","Baru","atarashii",[],"あたらしい"],["古い","Lama","furui",[],"ふるい"],
      ["暑い","Panas","atsui",[],"あつい"],["寒い","Dingin","samui",[],"さむい"],
      ["美味しい","Enak","oishii",["oishi"],"おいしい"],["楽しい","Menyenangkan","tanoshii",[],"たのしい"],
      ["美しい","Indah","utsukushii",[],"うつくしい"],["忙しい","Sibuk","isogashii",[],"いそがしい"]
    ],
    tempat: [
      ["家","Rumah","ie",["uchi"],"いえ"],["学校","Sekolah","gakkou",[],"がっこう"],
      ["会社","Kantor","kaisha",[],"かいしゃ"],["駅","Stasiun","eki",[],"えき"],
      ["店","Toko","mise",[],"みせ"],["病院","Rumah sakit","byouin",[],"びょういん"],
      ["図書館","Perpustakaan","toshokan",[],"としょかん"],["公園","Taman","kouen",[],"こうえん"],
      ["海","Laut","umi",[],"うみ"],["山","Gunung","yama",[],"やま"]
    ],
    katakana: [
      ["コーヒー","Kopi","koohii",["kohi","kōhī"]],["テレビ","TV","terebi"],
      ["コンピューター","Komputer","konpyuutaa",["konpyuta"]],["カメラ","Kamera","kamera"],
      ["ホテル","Hotel","hoteru"],["タクシー","Taksi","takushii",["takushi"]],
      ["バス","Bus","basu"],["ピザ","Pizza","piza"],
      ["アイスクリーム","Es krim","aisukuriimu",["aisukurimu"]],
      ["サッカー","Sepak bola","sakkaa",["sakka"]],["ビール","Bir","biiru",["biru"]],
      ["チョコレート","Cokelat","chokoreeto",["chokoreto"]],["レストラン","Restoran","resutoran"],
      ["タオル","Handuk","taoru"],["パーティー","Pesta","paatii",["pati"]]
    ],
    hiragana: [
      ["あ","a","a"],["い","i","i"],["う","u","u"],["え","e","e"],["お","o","o"],
      ["か","ka","ka"],["き","ki","ki"],["く","ku","ku"],["け","ke","ke"],["こ","ko","ko"],
      ["さ","sa","sa"],["し","shi","shi"],["す","su","su"],["せ","se","se"],["そ","so","so"],
      ["た","ta","ta"],["ち","chi","chi"],["つ","tsu","tsu"],["て","te","te"],["と","to","to"],
      ["な","na","na"],["に","ni","ni"],["ぬ","nu","nu"],["ね","ne","ne"],["の","no","no"],
      ["は","ha","ha"],["ひ","hi","hi"],["ふ","fu","fu"],["へ","he","he"],["ほ","ho","ho"],
      ["ま","ma","ma"],["み","mi","mi"],["む","mu","mu"],["め","me","me"],["も","mo","mo"],
      ["や","ya","ya"],["ゆ","yu","yu"],["よ","yo","yo"],
      ["ら","ra","ra"],["り","ri","ri"],["る","ru","ru"],["れ","re","re"],["ろ","ro","ro"],
      ["わ","wa","wa"],["を","wo","wo"],["ん","n","n"]
    ],
    katakana_chart: [
      ["ア","a","a"],["イ","i","i"],["ウ","u","u"],["エ","e","e"],["オ","o","o"],
      ["カ","ka","ka"],["キ","ki","ki"],["ク","ku","ku"],["ケ","ke","ke"],["コ","ko","ko"],
      ["サ","sa","sa"],["シ","shi","shi"],["ス","su","su"],["セ","se","se"],["ソ","so","so"],
      ["タ","ta","ta"],["チ","chi","chi"],["ツ","tsu","tsu"],["テ","te","te"],["ト","to","to"],
      ["ナ","na","na"],["ニ","ni","ni"],["ヌ","nu","nu"],["ネ","ne","ne"],["ノ","no","no"],
      ["ハ","ha","ha"],["ヒ","hi","hi"],["フ","fu","fu"],["ヘ","he","he"],["ホ","ho","ho"],
      ["マ","ma","ma"],["ミ","mi","mi"],["ム","mu","mu"],["メ","me","me"],["モ","mo","mo"],
      ["ヤ","ya","ya"],["ユ","yu","yu"],["ヨ","yo","yo"],
      ["ラ","ra","ra"],["リ","ri","ri"],["ル","ru","ru"],["レ","re","re"],["ロ","ro","ro"],
      ["ワ","wa","wa"],["ヲ","wo","wo"],["ン","n","n"]
    ],
    kanji_n5: [
      ["日","hari","nichi",[],"にち"],["一","satu","ichi",[],"いち"],["国","negara","koku",[],"こく"],
      ["人","orang","hito",[],"ひと"],["年","tahun","toshi",[],"とし"],["大","besar","ookii",["dai"],"おおきい"],
      ["十","sepuluh","juu",[],"じゅう"],["二","dua","ni",[],"に"],["本","buku","hon",[],"ほん"],
      ["中","tengah","naka",[],"なか"],["長","panjang","nagai",["chou"],"ながい"],["出","keluar","deru",["shutsu"],"でる"],
      ["三","tiga","san",[],"さん"],["時","waktu","toki",["ji"],"とき"],["行","pergi","iku",["kou"],"いく"],
      ["見","lihat","miru",["ken"],"みる"],["月","bulan","tsuki",["getsu"],"つき"],["後","setelah","ato",["go"],"あと"],
      ["前","depan","mae",["zen"],"まえ"],["生","hidup","ikiru",["sei"],"いきる"],["五","lima","go",[],"ご"],
      ["上","atas","ue",["jou"],"うえ"],["下","bawah","shita",["ka"],"した"],["女","wanita","onna",["jo"],"おんな"],
      ["小","kecil","chiisai",["shou"],"ちいさい"],["百","seratus","hyaku",[],"ひゃく"],["千","seribu","sen",[],"せん"],
      ["万","sepuluh ribu","man",[],"まん"],["円","yen","en",[],"えん"],["天","langit","ten",[],"てん"],
      ["気","udara","ki",[],"き"],["週","pekan","shuu",[],"しゅう"],["学","belajar","manabu",["gaku"],"まなぶ"],
      ["校","sekolah","kou",[],"こう"],["語","bahasa","go",[],"ご"],["私","saya","watashi",["shi"],"わたし"],
      ["母","ibu","haha",["bo"],"はは"],["父","ayah","chichi",["fu"],"ちち"],["毎","setiap","mai",[],"まい"],
      ["何","apa","nani",["ka"],"なに"],["名","nama","na",["mei"],"な"],["火","api","hi",["ka"],"ひ"],
      ["水","air","mizu",["sui"],"みず"],["木","pohon","ki",["moku"],"き"],["金","emas","kane",["kin"],"かね"],
      ["土","tanah","tsuchi",["do"],"つち"],["山","gunung","yama",["san"],"やま"],["川","sungai","kawa",["sen"],"かわ"],
      ["田","sawah","ta",["den"],"た"],["空","langit","sora",["kuu"],"そら"],["雨","hujan","ame",["u"],"あめ"],
      ["電","listrik","den",[],"でん"],["車","kendaraan","kuruma",["sha"],"くるま"],["駅","stasiun","eki",[],"えき"],
      ["道","jalan","michi",["dou"],"みち"],["花","bunga","hana",["ka"],"はな"],["草","rumput","kusa",["sou"],"くさ"],
      ["犬","anjing","inu",["ken"],"いぬ"],["魚","ikan","sakana",["gyo"],"さかな"],["鳥","burung","tori",["chou"],"とり"],
      ["石","batu","ishi",["seki"],"いし"],["男","pria","otoko",["dan"],"おとこ"],["子","anak","ko",["shi"],"こ"],
      ["友","teman","tomo",["yuu"],"とも"],["先","dulu","saki",["sen"],"さき"],["右","kanan","migi",["u"],"みぎ"],
      ["左","kiri","hidari",["sa"],"ひだり"],["東","timur","higashi",["tou"],"ひがし"],["西","barat","nishi",["sei"],"にし"],
      ["南","selatan","minami",["nan"],"みなみ"],["北","utara","kita",["hoku"],"きた"],["白","putih","shiro",["haku"],"しろ"],
      ["黒","hitam","kuro",["koku"],"くろ"],["赤","merah","aka",["seki"],"あか"],["青","biru","ao",["sei"],"あお"],
      ["色","warna","iro",["shoku"],"いろ"],["明","terang","akarui",["mei"],"あかるい"],["暗","gelap","kurai",["an"],"くらい"],
      ["早","cepat","hayai",["sou"],"はやい"],["安","murah","yasui",["an"],"やすい"],["新","baru","atarashii",["shin"],"あたらしい"],
      ["古","lama","furui",["ko"],"ふるい"],["高","tinggi","takai",["kou"],"たかい"],["短","pendek","mijikai",["tan"],"みじかい"],
      ["近","dekat","chikai",["kin"],"ちかい"],["遠","jauh","tooi",["en"],"とおい"],["多","banyak","ooi",["ta"],"おおい"],
      ["少","sedikit","sukoshi",["shou"],"すこし"],["半","setengah","han",[],"はん"],["分","menit","fun",["bun"],"ふん"],
      ["間","antara","aida",["kan"],"あいだ"],["今","sekarang","ima",["kon"],"いま"],["昨","kemarin","saku",[],"さく"],
      ["朝","pagi","asa",["chou"],"あさ"],["昼","siang","hiru",["chuu"],"ひる"],["夜","malam","yoru",["ya"],"よる"],
      ["午","siang","go",[],"ご"],["番","nomor","ban",[],"ばん"],["号","nomor","gou",[],"ごう"],
      ["話","bicara","hanasu",["wa"],"はなす"],["聞","dengar","kiku",["bun"],"きく"],["食","makan","taberu",["shoku"],"たべる"],
      ["飲","minum","nomu",["in"],"のむ"],["読","baca","yomu",["doku"],"よむ"],["書","tulis","kaku",["sho"],"かく"],
      ["買","beli","kau",["bai"],"かう"],["来","datang","kuru",["rai"],"くる"],["帰","pulang","kaeru",["ki"],"かえる"],
      ["入","masuk","hairu",["nyuu"],"はいる"]
    ],
    kanji_n4: [
      ["力","kekuatan","chikara",["riki"],"ちから"],["立","berdiri","tatsu",["ritsu"],"たつ"],
      ["待","menunggu","matsu",["tai"],"まつ"],["会","bertemu","au",["kai"],"あう"],
      ["社","perusahaan","yashiro",["sha"],"やしろ"],["店","toko","mise",["ten"],"みせ"],
      ["通","lewat","tooru",["tsuu"],"とおる"],["走","lari","hashiru",["sou"],"はしる"],
      ["歩","jalan","aruku",["ho"],"あるく"],["止","berhenti","tomaru",["shi"],"とまる"],
      ["動","bergerak","ugoku",["dou"],"うごく"],["働","bekerja","hataraku",["dou"],"はたらく"],
      ["休","istirahat","yasumu",["kyuu"],"やすむ"],["起","bangun","okiru",["ki"],"おきる"],
      ["寝","tidur","neru",["shin"],"ねる"],["遊","bermain","asobu",["yuu"],"あそぶ"],
      ["楽","senang","tanoshii",["raku"],"たのしい"],["悲","sedih","kanashii",["hi"],"かなしい"],
      ["忙","sibuk","isogashii",["bou"],"いそがしい"],["静","tenang","shizuka",["sei"],"しずか"],
      ["春","musim semi","haru",["shun"],"はる"],["夏","musim panas","natsu",["ka"],"なつ"],
      ["秋","musim gugur","aki",["shuu"],"あき"],["冬","musim dingin","fuyu",["tou"],"ふゆ"],
      ["京","ibu kota","kyou",["kei"],"きょう"],["都","kota","miyako",["to"],"みやこ"],
      ["部","bagian","bu",[],"ぶ"],["屋","toko","ya",["oku"],"や"],
      ["家","rumah","ie",["ka"],"いえ"],["内","dalam","uchi",["nai"],"うち"],
      ["外","luar","soto",["gai"],"そと"],["洋","barat","you",[],"よう"],
      ["和","harmoni","wa",[],"わ"],["心","hati","kokoro",["shin"],"こころ"],
      ["体","tubuh","karada",["tai"],"からだ"],["頭","kepala","atama",["tou"],"あたま"],
      ["顔","wajah","kao",["gan"],"かお"],["手","tangan","te",["shu"],"て"],
      ["足","kaki","ashi",["soku"],"あし"],["目","mata","me",["moku"],"め"],
      ["耳","telinga","mimi",["ji"],"みみ"],["口","mulut","kuchi",["kou"],"くち"],
      ["鼻","hidung","hana",["bi"],"はな"],["歯","gigi","ha",["shi"],"は"],
      ["髪","rambut","kami",["hatsu"],"かみ"],["声","suara","koe",["sei"],"こえ"],
      ["歌","lagu","uta",["ka"],"うた"],["音","bunyi","oto",["on"],"おと"],
      ["英","inggris","ei",[],"えい"],["漢","china","kan",[],"かん"],
      ["字","huruf","ji",[],"じ"],["文","tulisan","bun",["fumi"],"ぶん"],
      ["数","angka","kazu",["suu"],"かず"],["曜","hari","you",[],"よう"],
      ["銀","perak","gin",[],"ぎん"],["鉄","besi","tetsu",[],"てつ"],
      ["地","tanah","chi",[],"ち"],["図","gambar","zu",["haka"],"ず"]
    ]
  }},
  ko: { name:"Korea", flag:"🇰🇷", tts:"ko-KR", cats:{
    sapaan: [["안녕하세요","Halo","annyeonghaseyo",["anyeonghaseyo"]],["좋은 아침","Selamat pagi","joeun achim"],
      ["감사합니다","Terima kasih","gamsahamnida",["kamsahamnida"]],["안녕히 가세요","Selamat tinggal","annyeonghi gaseyo"],
      ["어떻게 지내세요?","Apa kabar?","eotteoke jinaeseyo?"],["부탁합니다","Tolong","butakhamnida"],
      ["죄송합니다","Maaf","joesonghamnida"],["네","Ya","ne"],["아니요","Tidak","aniyo"],
      ["안녕히 주무세요","Selamat malam","annyeonghi jumuseyo"]],
    makanan: [["물","Air","mul"],["밥","Nasi","bap"],["닭고기","Ayam","dakgogi"],
      ["빵","Roti","ppang"],["달걀","Telur","dalgyal"],["우유","Susu","uyu"],
      ["생선","Ikan","saengseon"],["과일","Buah","gwail"],["채소","Sayur","chaeso"],
      ["커피","Kopi","keopi",["kopi"]]],
    angka: [["하나","Satu","hana"],["둘","Dua","dul"],["셋","Tiga","set"],["넷","Empat","net"],
      ["다섯","Lima","daseot"],["여섯","Enam","yeoseot"],["일곱","Tujuh","ilgop"],["여덟","Delapan","yeodeol"],
      ["아홉","Sembilan","ahop"],["열","Sepuluh","yeol"]]
  }},
  ar: { name:"Arab", flag:"🇸🇦", tts:"ar-SA", cats:{
    sapaan: [["مرحبا","Halo","marhaban",["marhaba"]],["صباح الخير","Selamat pagi","sabah al-khair"],
      ["شكرا","Terima kasih","shukran",["syukran","shukron"]],["مع السلامة","Selamat tinggal","ma'a as-salama"],
      ["كيف حالك؟","Apa kabar?","kaifa haluk?"],["من فضلك","Tolong","min fadlik"],
      ["آسف","Maaf","asif",["aasif"]],["نعم","Ya","na'am"],["لا","Tidak","la"],
      ["تصبح على خير","Selamat malam","tusbih 'ala khair"]],
    makanan: [["ماء","Air","ma'"],["أرز","Nasi","aruz"],["دجاج","Ayam","dajaj"],
      ["خبز","Roti","khubz"],["بيض","Telur","baid"],["حليب","Susu","halib"],
      ["سمك","Ikan","samak"],["فاكهة","Buah","fakiha"],["خضار","Sayur","khudar"],
      ["قهوة","Kopi","qahwa",["kahwa"]]],
    angka: [["واحد","Satu","wahid"],["اثنان","Dua","ithnan"],["ثلاثة","Tiga","thalatha"],["أربعة","Empat","arba'a"],
      ["خمسة","Lima","khamsa"],["ستة","Enam","sitta"],["سبعة","Tujuh","sab'a"],["ثمانية","Delapan","thamaniya"],
      ["تسعة","Sembilan","tis'a"],["عشرة","Sepuluh","ashara"]]
  }},
  es: { name:"Spanyol", flag:"🇪🇸", tts:"es-ES", cats:{
    sapaan: [["Hola","Halo"],["Buenos días","Selamat pagi"],["Gracias","Terima kasih"],
      ["Adiós","Selamat tinggal"],["¿Cómo estás?","Apa kabar?"],["Por favor","Tolong"],
      ["Perdón","Maaf"],["Sí","Ya"],["No","Tidak"],["Buenas noches","Selamat malam"]],
    makanan: [["Agua","Air"],["Arroz","Nasi"],["Pollo","Ayam"],["Pan","Roti"],
      ["Huevo","Telur"],["Leche","Susu"],["Pescado","Ikan"],["Fruta","Buah"],
      ["Verdura","Sayur"],["Café","Kopi"]],
    angka: [["Uno","Satu"],["Dos","Dua"],["Tres","Tiga"],["Cuatro","Empat"],
      ["Cinco","Lima"],["Seis","Enam"],["Siete","Tujuh"],["Ocho","Delapan"],
      ["Nueve","Sembilan"],["Diez","Sepuluh"]]
  }},
  zh: { name:"Mandarin", flag:"🇨🇳", tts:"zh-CN", cats:{
    sapaan: [["你好","Halo","nǐ hǎo",["ni hao"]],["早上好","Selamat pagi","zǎoshang hǎo",["zaoshang hao"]],
      ["谢谢","Terima kasih","xièxie",["xiexie"]],["再见","Selamat tinggal","zàijiàn",["zaijian"]],
      ["你好吗？","Apa kabar?","nǐ hǎo ma?"],["请","Tolong","qǐng"],
      ["对不起","Maaf","duìbuqǐ"],["是","Ya","shì"],["不","Tidak","bù"],
      ["晚安","Selamat malam","wǎn'ān"]],
    makanan: [["水","Air","shuǐ"],["米饭","Nasi","mǐfàn"],["鸡肉","Ayam","jīròu"],
      ["面包","Roti","miànbāo"],["鸡蛋","Telur","jīdàn"],["牛奶","Susu","niúnǎi"],
      ["鱼","Ikan","yú"],["水果","Buah","shuǐguǒ"],["蔬菜","Sayur","shūcài"],
      ["咖啡","Kopi","kāfēi",["kafei"]]],
    angka: [["一","Satu","yī",["yi"]],["二","Dua","èr",["er"]],["三","Tiga","sān",["san"]],["四","Empat","sì",["si"]],
      ["五","Lima","wǔ",["wu"]],["六","Enam","liù",["liu"]],["七","Tujuh","qī",["qi"]],["八","Delapan","bā",["ba"]],
      ["九","Sembilan","jiǔ",["jiu"]],["十","Sepuluh","shí",["shi"]]]
  }},
  fr: { name:"Prancis", flag:"🇫🇷", tts:"fr-FR", cats:{
    sapaan: [["Bonjour","Halo"],["Bon matin","Selamat pagi"],["Merci","Terima kasih"],
      ["Au revoir","Selamat tinggal"],["Comment ça va ?","Apa kabar?"],["S'il vous plaît","Tolong"],
      ["Pardon","Maaf"],["Oui","Ya"],["Non","Tidak"],["Bonne nuit","Selamat malam"]],
    makanan: [["Eau","Air"],["Riz","Nasi"],["Poulet","Ayam"],["Pain","Roti"],
      ["Œuf","Telur"],["Lait","Susu"],["Poisson","Ikan"],["Fruit","Buah"],
      ["Légume","Sayur"],["Café","Kopi"]],
    angka: [["Un","Satu"],["Deux","Dua"],["Trois","Tiga"],["Quatre","Empat"],
      ["Cinq","Lima"],["Six","Enam"],["Sept","Tujuh"],["Huit","Delapan"],
      ["Neuf","Sembilan"],["Dix","Sepuluh"]]
  }}
};

const KANJI_EXTRA = {
  "日":{on:["ニチ","ジツ"],kun:["ひ","か"],strokes:4,jlpt:5,radical:"日",meaning:"hari/matahari"},
  "一":{on:["イチ","イツ"],kun:["ひと"],strokes:1,jlpt:5,radical:"一",meaning:"satu"},
  "国":{on:["コク"],kun:["くに"],strokes:8,jlpt:5,radical:"囗",meaning:"negara"},
  "人":{on:["ジン","ニン"],kun:["ひと"],strokes:2,jlpt:5,radical:"人",meaning:"orang"},
  "年":{on:["ネン"],kun:["とし"],strokes:6,jlpt:5,radical:"干",meaning:"tahun"},
  "大":{on:["ダイ","タイ"],kun:["おお"],strokes:3,jlpt:5,radical:"大",meaning:"besar"},
  "十":{on:["ジュウ"],kun:["とお"],strokes:2,jlpt:5,radical:"十",meaning:"sepuluh"},
  "二":{on:["ニ"],kun:["ふた"],strokes:2,jlpt:5,radical:"二",meaning:"dua"},
  "本":{on:["ホン"],kun:["もと"],strokes:5,jlpt:5,radical:"木",meaning:"buku/asli"},
  "中":{on:["チュウ"],kun:["なか"],strokes:4,jlpt:5,radical:"丨",meaning:"tengah"},
  "長":{on:["チョウ"],kun:["なが"],strokes:8,jlpt:5,radical:"長",meaning:"panjang"},
  "出":{on:["シュツ"],kun:["で","だ"],strokes:5,jlpt:5,radical:"凵",meaning:"keluar"},
  "三":{on:["サン"],kun:["み"],strokes:3,jlpt:5,radical:"一",meaning:"tiga"},
  "時":{on:["ジ"],kun:["とき"],strokes:10,jlpt:5,radical:"日",meaning:"waktu/jam"},
  "行":{on:["コウ","ギョウ"],kun:["い","ゆ"],strokes:6,jlpt:5,radical:"行",meaning:"pergi"},
  "見":{on:["ケン"],kun:["み"],strokes:7,jlpt:5,radical:"見",meaning:"lihat"},
  "月":{on:["ゲツ","ガツ"],kun:["つき"],strokes:4,jlpt:5,radical:"月",meaning:"bulan"},
  "後":{on:["ゴ","コウ"],kun:["あと","うし"],strokes:9,jlpt:5,radical:"彳",meaning:"setelah/belakang"},
  "前":{on:["ゼン"],kun:["まえ"],strokes:9,jlpt:5,radical:"刀",meaning:"depan/sebelum"},
  "生":{on:["セイ","ショウ"],kun:["い","う","なま"],strokes:5,jlpt:5,radical:"生",meaning:"hidup/lahir"},
  "五":{on:["ゴ"],kun:["いつ"],strokes:4,jlpt:5,radical:"二",meaning:"lima"},
  "上":{on:["ジョウ"],kun:["うえ","あ"],strokes:3,jlpt:5,radical:"一",meaning:"atas"},
  "下":{on:["カ","ゲ"],kun:["した","さ"],strokes:3,jlpt:5,radical:"一",meaning:"bawah"},
  "女":{on:["ジョ","ニョ"],kun:["おんな"],strokes:3,jlpt:5,radical:"女",meaning:"wanita"},
  "小":{on:["ショウ"],kun:["ちい","こ","お"],strokes:3,jlpt:5,radical:"小",meaning:"kecil"},
  "百":{on:["ヒャク"],kun:[],strokes:6,jlpt:5,radical:"白",meaning:"seratus"},
  "千":{on:["セン"],kun:["ち"],strokes:3,jlpt:5,radical:"十",meaning:"seribu"},
  "万":{on:["マン","バン"],kun:[],strokes:3,jlpt:5,radical:"一",meaning:"sepuluh ribu"},
  "円":{on:["エン"],kun:["まる"],strokes:4,jlpt:5,radical:"冂",meaning:"yen/bulat"},
  "天":{on:["テン"],kun:["あま"],strokes:4,jlpt:5,radical:"大",meaning:"langit"},
  "気":{on:["キ","ケ"],kun:[],strokes:6,jlpt:5,radical:"气",meaning:"udara/jiwa"},
  "週":{on:["シュウ"],kun:[],strokes:11,jlpt:5,radical:"辶",meaning:"pekan"},
  "学":{on:["ガク"],kun:["まな"],strokes:8,jlpt:5,radical:"子",meaning:"belajar"},
  "校":{on:["コウ"],kun:[],strokes:10,jlpt:5,radical:"木",meaning:"sekolah"},
  "語":{on:["ゴ"],kun:["かた"],strokes:14,jlpt:5,radical:"言",meaning:"bahasa"},
  "私":{on:["シ"],kun:["わたし"],strokes:7,jlpt:4,radical:"禾",meaning:"saya"},
  "母":{on:["ボ"],kun:["はは"],strokes:5,jlpt:5,radical:"毋",meaning:"ibu"},
  "父":{on:["フ"],kun:["ちち"],strokes:4,jlpt:5,radical:"父",meaning:"ayah"},
  "毎":{on:["マイ"],kun:[],strokes:6,jlpt:5,radical:"毋",meaning:"setiap"},
  "何":{on:["カ"],kun:["なに","なん"],strokes:7,jlpt:5,radical:"亻",meaning:"apa"},
  "名":{on:["メイ","ミョウ"],kun:["な"],strokes:6,jlpt:5,radical:"口",meaning:"nama"},
  "火":{on:["カ"],kun:["ひ"],strokes:4,jlpt:5,radical:"火",meaning:"api"},
  "水":{on:["スイ"],kun:["みず"],strokes:4,jlpt:5,radical:"水",meaning:"air"},
  "木":{on:["モク","ボク"],kun:["き"],strokes:4,jlpt:5,radical:"木",meaning:"pohon"},
  "金":{on:["キン"],kun:["かね"],strokes:8,jlpt:5,radical:"金",meaning:"emas/uang"},
  "土":{on:["ド","ト"],kun:["つち"],strokes:3,jlpt:5,radical:"土",meaning:"tanah"},
  "山":{on:["サン"],kun:["やま"],strokes:3,jlpt:5,radical:"山",meaning:"gunung"},
  "川":{on:["セン"],kun:["かわ"],strokes:3,jlpt:5,radical:"川",meaning:"sungai"},
  "田":{on:["デン"],kun:["た"],strokes:5,jlpt:5,radical:"田",meaning:"sawah"},
  "空":{on:["クウ"],kun:["そら","あ"],strokes:8,jlpt:5,radical:"穴",meaning:"langit/kosong"},
  "雨":{on:["ウ"],kun:["あめ"],strokes:8,jlpt:5,radical:"雨",meaning:"hujan"},
  "電":{on:["デン"],kun:[],strokes:13,jlpt:5,radical:"雨",meaning:"listrik"},
  "車":{on:["シャ"],kun:["くるま"],strokes:7,jlpt:5,radical:"車",meaning:"kendaraan"},
  "駅":{on:["エキ"],kun:[],strokes:14,jlpt:4,radical:"馬",meaning:"stasiun"},
  "道":{on:["ドウ"],kun:["みち"],strokes:12,jlpt:5,radical:"辶",meaning:"jalan"},
  "花":{on:["カ"],kun:["はな"],strokes:7,jlpt:5,radical:"艹",meaning:"bunga"},
  "草":{on:["ソウ"],kun:["くさ"],strokes:9,jlpt:4,radical:"艹",meaning:"rumput"},
  "犬":{on:["ケン"],kun:["いぬ"],strokes:4,jlpt:5,radical:"犬",meaning:"anjing"},
  "魚":{on:["ギョ"],kun:["さかな"],strokes:11,jlpt:4,radical:"魚",meaning:"ikan"},
  "鳥":{on:["チョウ"],kun:["とり"],strokes:11,jlpt:4,radical:"鳥",meaning:"burung"},
  "石":{on:["セキ"],kun:["いし"],strokes:5,jlpt:5,radical:"石",meaning:"batu"},
  "男":{on:["ダン","ナン"],kun:["おとこ"],strokes:7,jlpt:5,radical:"田",meaning:"pria"},
  "子":{on:["シ"],kun:["こ"],strokes:3,jlpt:5,radical:"子",meaning:"anak"},
  "友":{on:["ユウ"],kun:["とも"],strokes:4,jlpt:5,radical:"又",meaning:"teman"},
  "先":{on:["セン"],kun:["さき"],strokes:6,jlpt:5,radical:"儿",meaning:"dulu/depan"},
  "右":{on:["ウ","ユウ"],kun:["みぎ"],strokes:5,jlpt:5,radical:"口",meaning:"kanan"},
  "左":{on:["サ"],kun:["ひだり"],strokes:5,jlpt:5,radical:"工",meaning:"kiri"},
  "東":{on:["トウ"],kun:["ひがし"],strokes:8,jlpt:5,radical:"木",meaning:"timur"},
  "西":{on:["セイ","サイ"],kun:["にし"],strokes:6,jlpt:5,radical:"襾",meaning:"barat"},
  "南":{on:["ナン"],kun:["みなみ"],strokes:9,jlpt:5,radical:"十",meaning:"selatan"},
  "北":{on:["ホク"],kun:["きた"],strokes:5,jlpt:5,radical:"匕",meaning:"utara"},
  "白":{on:["ハク"],kun:["しろ"],strokes:5,jlpt:5,radical:"白",meaning:"putih"},
  "黒":{on:["コク"],kun:["くろ"],strokes:11,jlpt:4,radical:"黒",meaning:"hitam"},
  "赤":{on:["セキ"],kun:["あか"],strokes:7,jlpt:5,radical:"赤",meaning:"merah"},
  "青":{on:["セイ"],kun:["あお"],strokes:8,jlpt:5,radical:"青",meaning:"biru"},
  "色":{on:["ショク"],kun:["いろ"],strokes:6,jlpt:5,radical:"色",meaning:"warna"},
  "明":{on:["メイ"],kun:["あか","あき"],strokes:8,jlpt:4,radical:"日",meaning:"terang"},
  "暗":{on:["アン"],kun:["くら"],strokes:13,jlpt:3,radical:"日",meaning:"gelap"},
  "早":{on:["ソウ"],kun:["はや"],strokes:6,jlpt:5,radical:"日",meaning:"cepat/pagi"},
  "安":{on:["アン"],kun:["やす"],strokes:6,jlpt:5,radical:"宀",meaning:"murah/aman"},
  "新":{on:["シン"],kun:["あたら","あら"],strokes:13,jlpt:4,radical:"斤",meaning:"baru"},
  "古":{on:["コ"],kun:["ふる"],strokes:5,jlpt:5,radical:"口",meaning:"lama"},
  "高":{on:["コウ"],kun:["たか"],strokes:10,jlpt:5,radical:"高",meaning:"tinggi"},
  "短":{on:["タン"],kun:["みじか"],strokes:12,jlpt:5,radical:"矢",meaning:"pendek"},
  "近":{on:["キン"],kun:["ちか"],strokes:7,jlpt:5,radical:"辶",meaning:"dekat"},
  "遠":{on:["エン"],kun:["とお"],strokes:13,jlpt:4,radical:"辶",meaning:"jauh"},
  "多":{on:["タ"],kun:["おお"],strokes:6,jlpt:5,radical:"夕",meaning:"banyak"},
  "少":{on:["ショウ"],kun:["すこ","すく"],strokes:4,jlpt:5,radical:"小",meaning:"sedikit"},
  "半":{on:["ハン"],kun:["なか"],strokes:5,jlpt:5,radical:"十",meaning:"setengah"},
  "分":{on:["ブン","フン"],kun:["わ"],strokes:4,jlpt:5,radical:"刀",meaning:"menit/bagi"},
  "間":{on:["カン","ケン"],kun:["あいだ","ま"],strokes:12,jlpt:5,radical:"門",meaning:"antara"},
  "今":{on:["コン","キン"],kun:["いま"],strokes:4,jlpt:5,radical:"人",meaning:"sekarang"},
  "昨":{on:["サク"],kun:[],strokes:9,jlpt:4,radical:"日",meaning:"kemarin"},
  "朝":{on:["チョウ"],kun:["あさ"],strokes:12,jlpt:4,radical:"月",meaning:"pagi"},
  "昼":{on:["チュウ"],kun:["ひる"],strokes:9,jlpt:4,radical:"日",meaning:"siang"},
  "夜":{on:["ヤ"],kun:["よる","よ"],strokes:8,jlpt:4,radical:"夕",meaning:"malam"},
  "午":{on:["ゴ"],kun:[],strokes:4,jlpt:5,radical:"十",meaning:"siang (12 jam)"},
  "番":{on:["バン"],kun:[],strokes:12,jlpt:4,radical:"田",meaning:"nomor/giliran"},
  "号":{on:["ゴウ"],kun:[],strokes:5,jlpt:3,radical:"口",meaning:"nomor"},
  "話":{on:["ワ"],kun:["はな"],strokes:13,jlpt:5,radical:"言",meaning:"bicara"},
  "聞":{on:["ブン"],kun:["き"],strokes:14,jlpt:5,radical:"耳",meaning:"dengar"},
  "食":{on:["ショク"],kun:["た"],strokes:9,jlpt:5,radical:"食",meaning:"makan"},
  "飲":{on:["イン"],kun:["の"],strokes:12,jlpt:5,radical:"食",meaning:"minum"},
  "読":{on:["ドク","トク"],kun:["よ"],strokes:14,jlpt:5,radical:"言",meaning:"baca"},
  "書":{on:["ショ"],kun:["か"],strokes:10,jlpt:5,radical:"曰",meaning:"tulis"},
  "買":{on:["バイ"],kun:["か"],strokes:12,jlpt:4,radical:"貝",meaning:"beli"},
  "来":{on:["ライ"],kun:["く","き"],strokes:7,jlpt:5,radical:"木",meaning:"datang"},
  "帰":{on:["キ"],kun:["かえ"],strokes:10,jlpt:4,radical:"巾",meaning:"pulang"},
  "入":{on:["ニュウ"],kun:["はい","い"],strokes:2,jlpt:5,radical:"入",meaning:"masuk"},
  "力":{on:["リキ","リョク"],kun:["ちから"],strokes:2,jlpt:4,radical:"力",meaning:"kekuatan"},
  "立":{on:["リツ"],kun:["た"],strokes:5,jlpt:4,radical:"立",meaning:"berdiri"},
  "待":{on:["タイ"],kun:["ま"],strokes:9,jlpt:4,radical:"彳",meaning:"menunggu"},
  "会":{on:["カイ"],kun:["あ"],strokes:6,jlpt:5,radical:"人",meaning:"bertemu"},
  "社":{on:["シャ"],kun:["やしろ"],strokes:7,jlpt:5,radical:"示",meaning:"perusahaan"},
  "店":{on:["テン"],kun:["みせ"],strokes:8,jlpt:4,radical:"广",meaning:"toko"},
  "通":{on:["ツウ"],kun:["とお","かよ"],strokes:10,jlpt:4,radical:"辶",meaning:"lewat"},
  "走":{on:["ソウ"],kun:["はし"],strokes:7,jlpt:4,radical:"走",meaning:"lari"},
  "歩":{on:["ホ"],kun:["ある","あゆ"],strokes:8,jlpt:4,radical:"止",meaning:"jalan"},
  "止":{on:["シ"],kun:["と","や"],strokes:4,jlpt:4,radical:"止",meaning:"berhenti"},
  "動":{on:["ドウ"],kun:["うご"],strokes:11,jlpt:4,radical:"力",meaning:"bergerak"},
  "働":{on:["ドウ"],kun:["はたら"],strokes:13,jlpt:4,radical:"亻",meaning:"bekerja"},
  "休":{on:["キュウ"],kun:["やす"],strokes:6,jlpt:5,radical:"亻",meaning:"istirahat"},
  "起":{on:["キ"],kun:["お"],strokes:10,jlpt:4,radical:"走",meaning:"bangun"},
  "寝":{on:["シン"],kun:["ね"],strokes:13,jlpt:4,radical:"宀",meaning:"tidur"},
  "遊":{on:["ユウ"],kun:["あそ"],strokes:12,jlpt:4,radical:"辶",meaning:"bermain"},
  "楽":{on:["ガク","ラク"],kun:["たの"],strokes:13,jlpt:4,radical:"木",meaning:"senang"},
  "悲":{on:["ヒ"],kun:["かな"],strokes:12,jlpt:3,radical:"心",meaning:"sedih"},
  "忙":{on:["ボウ"],kun:["いそが"],strokes:6,jlpt:3,radical:"忄",meaning:"sibuk"},
  "静":{on:["セイ"],kun:["しず"],strokes:14,jlpt:4,radical:"青",meaning:"tenang"},
  "春":{on:["シュン"],kun:["はる"],strokes:9,jlpt:4,radical:"日",meaning:"musim semi"},
  "夏":{on:["カ"],kun:["なつ"],strokes:10,jlpt:5,radical:"夂",meaning:"musim panas"},
  "秋":{on:["シュウ"],kun:["あき"],strokes:9,jlpt:4,radical:"禾",meaning:"musim gugur"},
  "冬":{on:["トウ"],kun:["ふゆ"],strokes:5,jlpt:4,radical:"夂",meaning:"musim dingin"},
  "京":{on:["ケイ","キョウ"],kun:["みやこ"],strokes:8,jlpt:4,radical:"亠",meaning:"ibu kota"},
  "都":{on:["ト","ツ"],kun:["みやこ"],strokes:11,jlpt:3,radical:"阝",meaning:"kota"},
  "部":{on:["ブ"],kun:[],strokes:11,jlpt:4,radical:"阝",meaning:"bagian"},
  "屋":{on:["オク"],kun:["や"],strokes:9,jlpt:4,radical:"尸",meaning:"toko/atap"},
  "家":{on:["カ"],kun:["いえ","や"],strokes:10,jlpt:4,radical:"宀",meaning:"rumah"},
  "内":{on:["ナイ"],kun:["うち"],strokes:4,jlpt:4,radical:"入",meaning:"dalam"},
  "外":{on:["ガイ","ゲ"],kun:["そと"],strokes:5,jlpt:4,radical:"夕",meaning:"luar"},
  "洋":{on:["ヨウ"],kun:[],strokes:9,jlpt:4,radical:"氵",meaning:"barat/laut"},
  "和":{on:["ワ"],kun:[],strokes:8,jlpt:3,radical:"口",meaning:"harmoni/jepang"},
  "心":{on:["シン"],kun:["こころ"],strokes:4,jlpt:4,radical:"心",meaning:"hati"},
  "体":{on:["タイ"],kun:["からだ"],strokes:7,jlpt:4,radical:"亻",meaning:"tubuh"},
  "頭":{on:["トウ","ズ"],kun:["あたま"],strokes:16,jlpt:4,radical:"頁",meaning:"kepala"},
  "顔":{on:["ガン"],kun:["かお"],strokes:18,jlpt:3,radical:"頁",meaning:"wajah"},
  "手":{on:["シュ"],kun:["て"],strokes:4,jlpt:5,radical:"手",meaning:"tangan"},
  "足":{on:["ソク"],kun:["あし","た"],strokes:7,jlpt:4,radical:"足",meaning:"kaki"},
  "目":{on:["モク"],kun:["め"],strokes:5,jlpt:5,radical:"目",meaning:"mata"},
  "耳":{on:["ジ"],kun:["みみ"],strokes:6,jlpt:5,radical:"耳",meaning:"telinga"},
  "口":{on:["コウ"],kun:["くち"],strokes:3,jlpt:5,radical:"口",meaning:"mulut"},
  "鼻":{on:["ビ"],kun:["はな"],strokes:14,jlpt:3,radical:"鼻",meaning:"hidung"},
  "歯":{on:["シ"],kun:["は"],strokes:12,jlpt:3,radical:"齒",meaning:"gigi"},
  "髪":{on:["ハツ"],kun:["かみ"],strokes:14,jlpt:3,radical:"髟",meaning:"rambut"},
  "声":{on:["セイ"],kun:["こえ"],strokes:7,jlpt:3,radical:"士",meaning:"suara"},
  "歌":{on:["カ"],kun:["うた"],strokes:14,jlpt:3,radical:"欠",meaning:"lagu"},
  "音":{on:["オン"],kun:["おと","ね"],strokes:9,jlpt:4,radical:"音",meaning:"bunyi"},
  "英":{on:["エイ"],kun:[],strokes:8,jlpt:4,radical:"艹",meaning:"inggris"},
  "漢":{on:["カン"],kun:[],strokes:13,jlpt:3,radical:"氵",meaning:"china"},
  "字":{on:["ジ"],kun:[],strokes:6,jlpt:4,radical:"子",meaning:"huruf"},
  "文":{on:["ブン","モン"],kun:["ふみ"],strokes:4,jlpt:4,radical:"文",meaning:"tulisan"},
  "数":{on:["スウ"],kun:["かず","かぞ"],strokes:13,jlpt:3,radical:"攵",meaning:"angka"},
  "曜":{on:["ヨウ"],kun:[],strokes:18,jlpt:4,radical:"日",meaning:"hari"},
  "銀":{on:["ギン"],kun:[],strokes:14,jlpt:3,radical:"金",meaning:"perak"},
  "鉄":{on:["テツ"],kun:[],strokes:13,jlpt:3,radical:"金",meaning:"besi"},
  "地":{on:["チ","ジ"],kun:[],strokes:6,jlpt:4,radical:"土",meaning:"tanah"},
  "図":{on:["ズ"],kun:["はか"],strokes:7,jlpt:4,radical:"囗",meaning:"gambar"}
};

const KANJI_DETAIL = Object.assign(KANJI_EXTRA, {
  "百":{on:["ヒャク"],kun:[],strokes:6,jlpt:5,radical:"白",meaning:"seratus"},
  "千":{on:["セン"],kun:["ち"],strokes:3,jlpt:5,radical:"十",meaning:"seribu"},
  "万":{on:["マン","バン"],kun:[],strokes:3,jlpt:5,radical:"一",meaning:"sepuluh ribu"},
  "年":{on:["ネン"],kun:["とし"],strokes:6,jlpt:5,radical:"干",meaning:"tahun"}
});

const CATNAME = {
  sapaan:"👋 Sapaan", makanan:"🍚 Makanan", angka:"🔢 Angka",
  warna:"🎨 Warna", keluarga:"👨‍👩‍👧 Keluarga", hewan:"🐾 Hewan",
  tubuh:"💪 Tubuh", waktu:"🕐 Waktu", kerja:"🏃 Kata Kerja",
  sifat:"✨ Kata Sifat", tempat:"📍 Tempat",
  katakana:"🔤 Katakana (Serapan)",
  hiragana:"📖 Chart Hiragana",
  katakana_chart:"📖 Chart Katakana",
  kanji_n5:"🈁 Kanji N5", kanji_n4:"🈂️ Kanji N4"
};

const EXCLUDE_FROM_ALL = ["hiragana","katakana_chart","kanji_n5","kanji_n4"];

const BADGES = [
  { id:"first",     icon:"🎯", name:"Pemula",       check:s => s.totalAnswered >= 1 },
  { id:"streak3",   icon:"🔥", name:"Konsisten",    check:s => s.streak >= 3 },
  { id:"streak7",   icon:"⚡", name:"Membara",      check:s => s.streak >= 7 },
  { id:"xp100",     icon:"⭐", name:"Kolektor",     check:s => s.xp >= 100 },
  { id:"xp500",     icon:"🏆", name:"Juara",        check:s => s.xp >= 500 },
  { id:"xp1500",    icon:"👑", name:"Legenda",      check:s => s.xp >= 1500 },
  { id:"master10",  icon:"🧠", name:"Otak Encer",   check:s => s.mastered >= 10 },
  { id:"master50",  icon:"📚", name:"Pustaka",      check:s => s.mastered >= 50 },
  { id:"perfect",   icon:"💎", name:"Sempurna",     check:s => s.perfectQuiz },
  { id:"kanji10",   icon:"🈶", name:"Kanji Master", check:s => s.kanjiMastered >= 10 },
  { id:"kanamaster",icon:"🔰", name:"Kana Master",  check:s => s.hiraganaMastered >= 46 && s.katakanaMastered >= 46 },
  { id:"bookworm",  icon:"📖", name:"Bookworm",     check:s => s.bookmarks >= 10 }
];

const DAILY_GOAL = 15;
const DAILY_REWARD = 100;

const SRS_DELAYS_MS = [
  60 * 1000,
  1 * 24 * 60 * 60 * 1000,
  3 * 24 * 60 * 60 * 1000,
  7 * 24 * 60 * 60 * 1000,
  21 * 24 * 60 * 60 * 1000,
  60 * 24 * 60 * 60 * 1000
];
const SRS_MASTERED = 5;

/* ============================================================
   UTIL
   ============================================================ */
const el = id => document.getElementById(id);
const shuffle = a => { a = a.slice(); for (let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; };
const todayKey = () => new Date().toISOString().slice(0,10);
function yesterdayKey(){ const d = new Date(); d.setDate(d.getDate()-1); return d.toISOString().slice(0,10); }

function wordsOf(lang, cat){
  let raw;
  if (cat === "all"){
    raw = Object.entries(DATA[lang].cats)
      .filter(([k]) => !EXCLUDE_FROM_ALL.includes(k))
      .flatMap(([,v]) => v);
  } else { raw = DATA[lang].cats[cat]; }
  return raw.map(([f,i,l,alt,kana]) => ({ f, i, l: l || f, alt: alt || [], kana: kana || "" }));
}

function norm(s){
  return (s||"").toString().toLowerCase().trim()
    .normalize("NFD").replace(/[\u0300-\u036f]/g,"")
    .replace(/[''`´]/g, "").replace(/[^\w\s]/g, " ")
    .replace(/\s+/g," ").trim();
}

function scriptOf(text){
  if (!text) return null;
  if (/[\u4E00-\u9FFF]/.test(text)) return "kanji";
  if (/[\u30A0-\u30FF]/.test(text)) return "katakana";
  if (/[\u3040-\u309F]/.test(text)) return "hiragana";
  return null;
}

function categoryOf(lang, word){
  for (const cat in DATA[lang].cats){
    if (DATA[lang].cats[cat].some(([f]) => f === word)) return cat;
  }
  return "all";
}

function distractorsFor(lang, word, cat, n = 3){
  let pool = (cat === "all") ? wordsOf(lang, "all") : wordsOf(lang, cat);
  if (pool.length < n + 1) pool = wordsOf(lang, "all");
  return shuffle(pool.filter(x => x.i !== word.i && x.f !== word.f)).slice(0, n);
}

function filterByScript(words, script){
  if (script === "all" || !script) return words;
  return words.filter(w => scriptOf(w.f) === script);
}

function calcWordPriority(p, now){
  if (!p) return 0;
  const level = p.level || 0;
  if (level >= SRS_MASTERED) return 999;
  if ((p.nextReview || 0) <= now) return 100 - level * 10;
  return 500 + level;
}

function sortWords(words, mode, lang){
  if (mode === "random") return shuffle(words);
  if (mode === "original") return words.slice();
  const now = Date.now();
  const progress = state.progress[lang] || {};
  return words.slice().sort((a, b) =>
    calcWordPriority(progress[a.f], now) - calcWordPriority(progress[b.f], now)
  );
}

function countMasteredByScript(lang, script){
  let m = 0;
  const words = wordsOf(lang, "all").filter(w => scriptOf(w.f) === script);
  words.forEach(w => {
    const p = (state.progress[lang] || {})[w.f];
    if (!p) return;
    if (p.level !== undefined){
      if (p.level >= SRS_MASTERED) m++;
    } else if (p.c >= 2 && p.c > p.w){
      m++;
    }
  });
  return m;
}

/* ============================================================
   STATE
   ============================================================ */
const LS_KEY = "lingobro_state_v2";
const defaultState = () => ({
  progress:{}, xp:0, xpByDate:{}, streak:0, lastDate:"",
  badges:[], perfectQuiz:false, totalAnswered:0, totalCorrect:0,
  daily: null, bookmarks:{}
});
let state = defaultState();
try { const s = JSON.parse(localStorage.getItem(LS_KEY)); if (s) state = Object.assign(defaultState(), s); } catch(e){}
const save = () => { try { localStorage.setItem(LS_KEY, JSON.stringify(state)); } catch(e){} };

function getDaily(){
  const t = todayKey();
  if (!state.daily || state.daily.date !== t) state.daily = { date: t, correct: 0, claimed: false };
  return state.daily;
}

function levelInfo(xp){
  let lvl = 1, need = 100, rem = xp;
  while (rem >= need){ rem -= need; lvl++; need = 100*lvl; }
  return { level: lvl, xpInLevel: rem, xpNeeded: need };
}
function touchStreak(){
  const t = todayKey();
  if (state.lastDate === t) return;
  if (state.lastDate === yesterdayKey()) state.streak++;
  else state.streak = 1;
  state.lastDate = t;
}
function addXP(amount){
  const oldLevel = levelInfo(state.xp).level;
  state.xp += amount;
  const t = todayKey();
  state.xpByDate[t] = (state.xpByDate[t] || 0) + amount;
  const newLevel = levelInfo(state.xp).level;
  updateHUD();
  if (newLevel > oldLevel){
    setTimeout(() => {
      showToast("🎊", "Level Up!", `Naik ke Level ${newLevel}!`);
      confetti(50);
    }, 300);
  }
}
function record(lang, word, ok, xp = 0){
  state.progress[lang] = state.progress[lang] || {};
  const e = state.progress[lang][word] || { c:0, w:0, level:0, nextReview:0 };
  if (e.level === undefined) e.level = 0;
  if (e.nextReview === undefined) e.nextReview = 0;

  ok ? e.c++ : e.w++;
  e.level = ok ? Math.min(SRS_MASTERED, e.level + 1) : 0;
  e.nextReview = Date.now() + (SRS_DELAYS_MS[e.level] || 0);
  e.lastReview = Date.now();
  state.progress[lang][word] = e;

  state.totalAnswered++;
  if (ok){
    state.totalCorrect++;
    addXP(xp);
    getDaily().correct++;
  }
  touchStreak();
  save();
  renderDaily();
  updateDueBadge();
  checkBadges();
}
function masteredCount(){
  let m = 0;
  for (const l in state.progress) for (const w in state.progress[l]){
    const e = state.progress[l][w];
    if (!e) continue;
    if (e.level !== undefined){
      if (e.level >= SRS_MASTERED) m++;
    } else if (e.c >= 2 && e.c > e.w){
      m++;
    }
  }
  return m;
}
function getDueWords(){
  const now = Date.now();
  const due = [];
  for (const lang in state.progress){
    for (const word in state.progress[lang]){
      const e = state.progress[lang][word];
      if (!e) continue;
      const level = e.level || 0;
      if (level >= SRS_MASTERED) continue;
      if ((e.nextReview || 0) > now) continue;
      const w = wordsOf(lang, "all").find(x => x.f === word);
      if (w) due.push({ w, lang, overdue: now - (e.nextReview || 0), level });
    }
  }
  due.sort((a, b) => {
    if (a.level !== b.level) return a.level - b.level;
    return b.overdue - a.overdue;
  });
  return due;
}
function updateDueBadge(){
  const badge = el("due-badge");
  const hud = el("hud-due");
  const due = getDueWords().length;
  if (badge){
    if (due > 0){
      badge.textContent = due > 99 ? "99+" : due;
      badge.classList.remove("hidden");
    } else {
      badge.classList.add("hidden");
    }
  }
  if (hud) hud.textContent = due;
}
function checkBadges(){
  const snap = {
    ...state,
    mastered: masteredCount(),
    kanjiMastered: countMasteredByScript("ja", "kanji"),
    hiraganaMastered: countMasteredByScript("ja", "hiragana"),
    katakanaMastered: countMasteredByScript("ja", "katakana"),
    bookmarks: bookmarkCount()
  };
  for (const b of BADGES){
    if (!state.badges.includes(b.id) && b.check(snap)){
      state.badges.push(b.id); save();
      showToast(b.icon, "Badge Baru!", b.name);
      confetti(20);
    }
  }
}

/* ============================================================
   BOOKMARK
   ============================================================ */
function bookmarkKey(lang, word){ return lang + ":" + word; }
function isBookmarked(lang, word){ return !!(state.bookmarks && state.bookmarks[bookmarkKey(lang, word)]); }
function toggleBookmark(lang, word){
  state.bookmarks = state.bookmarks || {};
  const k = bookmarkKey(lang, word);
  if (state.bookmarks[k]) delete state.bookmarks[k];
  else state.bookmarks[k] = true;
  save(); updateHUD();
}
function bookmarkCount(){ return Object.keys(state.bookmarks || {}).length; }

/* ============================================================
   AUDIO, TOAST, CONFETTI, SHARE
   ============================================================ */
function speak(text, langCode){
  if (!("speechSynthesis" in window)) return;
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = langCode || "en-US"; u.rate = 0.9;
    speechSynthesis.speak(u);
  } catch(e){}
}
function showToast(icon, title, msg){
  const wrap = el("toasts");
  const d = document.createElement("div");
  d.className = "toast";
  d.innerHTML = `<div class="ti">${icon}</div>
    <div><div class="tt">${title}</div><div class="tm">${msg}</div></div>`;
  wrap.appendChild(d);
  setTimeout(() => d.remove(), 3100);
}
function confetti(n = 40){
  const wrap = el("confetti");
  const colors = ["#8b5cf6","#22d3ee","#f43f5e","#10b981","#f59e0b","#ec4899"];
  for (let i=0;i<n;i++){
    const p = document.createElement("div");
    p.className = "confetti-piece";
    p.style.left = Math.random()*100 + "%";
    p.style.background = colors[Math.floor(Math.random()*colors.length)];
    p.style.animationDelay = (Math.random()*0.4) + "s";
    p.style.animationDuration = (2 + Math.random()) + "s";
    wrap.appendChild(p);
    setTimeout(() => p.remove(), 3400);
  }
}
async function shareResult(score, total, mode){
  const text = `Aku dapat ${score}/${total} di mode ${mode} LingoBro! 🔥`;
  if (navigator.share){ try { await navigator.share({ title: "LingoBro", text }); } catch(e){} }
  else if (navigator.clipboard){ try { await navigator.clipboard.writeText(text); showToast("📋","Tersalin!", text); } catch(e){} }
}

/* ============================================================
   EXPORT / IMPORT
   ============================================================ */
function exportProgress(){
  const data = { version: 3, exportedAt: new Date().toISOString(), state };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `lingobro-backup-${todayKey()}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast("📤", "Backup dibuat!", `${state.xp} XP · ${masteredCount()} kata dikuasai`);
}
function importProgress(file){
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);
      if (!data.state) throw new Error("Format tidak valid");
      if (!confirm("Timpa semua progres dengan file ini?")) return;
      state = Object.assign(defaultState(), data.state);
      save();
      updateHUD(); renderDaily(); updateDueBadge(); renderStats();
      startFlashcard(); startQuiz(); startReading(); startListen(); startWrite();
      showToast("✅", "Import berhasil!", `${state.xp} XP · ${masteredCount()} kata dikuasai`);
    } catch(err){ showToast("❌", "Import gagal", err.message); }
  };
  reader.readAsText(file);
}

/* ============================================================
   HUD + DAILY
   ============================================================ */
function updateHUD(){
  const li = levelInfo(state.xp);
  el("hud-lvl").textContent = "Lv " + li.level;
  el("hud-xp").style.width = (li.xpInLevel / li.xpNeeded * 100) + "%";
  el("hud-xptxt").textContent = state.xp + " XP";
  el("hud-streak").textContent = state.streak;
  el("hud-bookmarks").textContent = bookmarkCount();
}
function renderDaily(){
  const d = getDaily();
  el("hud-daily").textContent = Math.min(d.correct, DAILY_GOAL);
  const banner = el("daily-banner");
  const claimBtn = el("hud-claim");
  if (d.claimed){ banner.classList.add("complete"); claimBtn.classList.add("hidden"); }
  else if (d.correct >= DAILY_GOAL){ banner.classList.add("complete"); claimBtn.classList.remove("hidden"); }
  else { banner.classList.remove("complete"); claimBtn.classList.add("hidden"); }
}
el("hud-claim").onclick = () => {
  const d = getDaily();
  if (d.correct >= DAILY_GOAL && !d.claimed){
    d.claimed = true; addXP(DAILY_REWARD); save(); renderDaily();
    showToast("🎁", "Hadiah Harian!", `+${DAILY_REWARD} XP`); confetti(30);
  }
};

/* ============================================================
   SELECT PICKERS
   ============================================================ */
function fillLangs(sel){
  sel.innerHTML = Object.entries(DATA)
    .map(([k,v]) => `<option value="${k}">${v.flag} ${v.name}</option>`).join("");
}
function fillCats(sel, lang){
  const total = wordsOf(lang, "all").length;
  const opts = Object.keys(DATA[lang].cats).map(k => {
    const n = DATA[lang].cats[k].length;
    return `<option value="${k}">${CATNAME[k] || k} (${n})</option>`;
  }).join("");
  sel.innerHTML = `<option value="all">🗂️ Semua Kategori (${total})</option>` + opts;
}

/* ============================================================
   KANJI DETAIL MODAL
   ============================================================ */
function showKanjiModal(char){
  const detail = KANJI_DETAIL[char];
  el("kanji-char").textContent = char;
  if (!detail){
    el("kanji-info").innerHTML = `<p class="hint" style="text-align:center">Detail untuk kanji ini belum tersedia.</p>`;
  } else {
    el("kanji-info").innerHTML = `
      <div class="row-info"><span>Arti</span><span>${detail.meaning}</span></div>
      <div class="row-info"><span>On-yomi (音)</span><span>${detail.on.length ? detail.on.join("、") : "—"}</span></div>
      <div class="row-info"><span>Kun-yomi (訓)</span><span>${detail.kun.length ? detail.kun.join("、") : "—"}</span></div>
      <div class="row-info"><span>Goresan</span><span>${detail.strokes} goresan</span></div>
      <div class="row-info"><span>Radikal</span><span>${detail.radical}</span></div>
      <div class="row-info"><span>Level JLPT</span><span class="jlpt-badge">N${detail.jlpt}</span></div>
    `;
  }
  el("kanji-modal").classList.remove("hidden");
}
el("kanji-close").onclick = () => el("kanji-modal").classList.add("hidden");
el("kanji-modal").onclick = e => {
  if (e.target.id === "kanji-modal") el("kanji-modal").classList.add("hidden");
};

/* ============================================================
   FLASHCARD
   ============================================================ */
const fc = { deck:[], i:0, correct:0, xp:0 };
function startFlashcard(){
  const lang = el("fc-lang").value, cat = el("fc-cat").value;
  const script = el("fc-script").value;
  const order = el("fc-order").value;
  let deck = wordsOf(lang, cat);
  deck = filterByScript(deck, script);
  fc.deck = sortWords(deck, order, lang);
  fc.i = 0; fc.correct = 0; fc.xp = 0;
  el("fc-done").classList.add("hidden");
  el("fc-main").classList.remove("hidden");
  renderFlashcard();
}
function applyScriptBadge(scriptEl, text){
  const script = scriptOf(text);
  if (!script){ scriptEl.style.display = "none"; return; }
  const label = script === "kanji" ? "Kanji" : script === "hiragana" ? "Hiragana" : "Katakana";
  scriptEl.textContent = label;
  scriptEl.className = "script-badge " + script;
  scriptEl.style.display = "inline-block";
}
function renderFlashcard(){
  if (fc.i >= fc.deck.length) return endFlashcard();
  const w = fc.deck[fc.i];
  const lang = el("fc-lang").value;
  el("fc-card").classList.remove("flip");
  el("fc-front").textContent = w.f;
  el("fc-back").textContent = w.i;
  el("fc-tag").textContent = DATA[lang].name;
  applyScriptBadge(el("fc-script-badge"), w.f);
  const showKana = w.kana && w.kana !== w.f;
  el("fc-kana").textContent = showKana ? w.kana : "";
  const showLatin = w.l && w.l !== w.f && w.l !== w.i;
  el("fc-latin").textContent = showLatin ? w.l : "";
  const bm = el("fc-bookmark");
  bm.classList.toggle("active", isBookmarked(lang, w.f));
  const detailBtn = el("fc-detail");
  const hasDetail = scriptOf(w.f) === "kanji" && KANJI_DETAIL[w.f];
  detailBtn.classList.toggle("hidden", !hasDetail);
  el("fc-count").textContent = fc.deck.length ? `Kartu ${fc.i+1} dari ${fc.deck.length}` : "Tidak ada kata";
  el("fc-bar").style.width = fc.deck.length ? (fc.i / fc.deck.length * 100) + "%" : "0%";
}
function answerCard(ok){
  if (fc.i >= fc.deck.length) return;
  const w = fc.deck[fc.i];
  const xp = ok ? 5 : 0;
  if (ok){ fc.correct++; fc.xp += xp; }
  record(el("fc-lang").value, w.f, ok, xp);
  fc.i++;
  renderFlashcard();
}
function endFlashcard(){
  el("fc-main").classList.add("hidden");
  el("fc-done").classList.remove("hidden");
  el("fc-score").textContent = `${fc.correct}/${fc.deck.length}`;
  el("fc-xp").textContent = fc.xp;
  el("fc-bar").style.width = "100%";
  if (fc.correct === fc.deck.length && fc.deck.length > 0) confetti(30);
}

/* ============================================================
   QUIZ
   ============================================================ */
const qz = { qs:[], i:0, score:0, answered:false, lang:"en", cat:"all" };
function startQuiz(){
  const lang = el("q-lang").value, cat = el("q-cat").value;
  qz.lang = lang; qz.cat = cat;
  const pool = shuffle(wordsOf(lang, cat)).slice(0, 10);
  qz.qs = pool.map(w => ({ w, opts: shuffle([w, ...distractorsFor(lang, w, cat)]) }));
  qz.i = 0; qz.score = 0; qz.answered = false;
  el("q-done").classList.add("hidden");
  el("q-main").classList.remove("hidden");
  renderQuiz();
}
function renderQuiz(){
  if (qz.i >= qz.qs.length) return endQuiz();
  const q = qz.qs[qz.i];
  qz.answered = false;
  el("q-progress").textContent = `Soal ${qz.i+1} dari ${qz.qs.length} • Skor ${qz.score}`;
  el("q-word").textContent = q.w.f;
  const showKana = q.w.kana && q.w.kana !== q.w.f;
  el("q-kana").textContent = showKana ? q.w.kana : "";
  const showLatin = q.w.l && q.w.l !== q.w.f && q.w.l !== q.w.i;
  el("q-latin").textContent = showLatin ? q.w.l : "";
  el("q-bar").style.width = (qz.i / qz.qs.length * 100) + "%";
  const box = el("q-opts"); box.innerHTML = "";
  q.opts.forEach(o => {
    const b = document.createElement("button");
    b.className = "opt"; b.textContent = o.i;
    b.onclick = () => answerQuiz(b, o, q.w);
    box.appendChild(b);
  });
}
function answerQuiz(btn, chosen, correct){
  if (qz.answered) return;
  qz.answered = true;
  const ok = chosen.i === correct.i;
  if (ok) qz.score++;
  record(qz.lang, correct.f, ok, ok ? 10 : 0);
  [...el("q-opts").children].forEach(b => {
    b.disabled = true;
    if (b.textContent === correct.i) b.classList.add("right");
    else if (b === btn) b.classList.add("wrong");
  });
  el("q-progress").textContent = `Soal ${qz.i+1} dari ${qz.qs.length} • Skor ${qz.score}`;
  setTimeout(() => { qz.i++; renderQuiz(); }, ok ? 700 : 1200);
}
function endQuiz(){
  el("q-main").classList.add("hidden");
  el("q-done").classList.remove("hidden");
  el("q-bar").style.width = "100%";
  const total = qz.qs.length;
  const pct = Math.round(qz.score / total * 100);
  el("q-score").textContent = `${qz.score}/${total}`;
  let msg = "Semangat, coba lagi ya! 💪";
  if (pct === 100){ msg = "Sempurna! Kamu jago 🔥"; state.perfectQuiz = true; save(); confetti(50); checkBadges(); }
  else if (pct >= 80) msg = "Mantap! Hampir sempurna ✨";
  else if (pct >= 60) msg = "Bagus, terus latihan 👍";
  else if (pct >= 40) msg = "Lumayan, ulangi lagi ya 🙂";
  el("q-msg").textContent = msg;
}

/* ============================================================
   BACA
   ============================================================ */
const rd = { qs:[], i:0, score:0, answered:false, lang:"ja" };

function getKanjiReadables(lang, cat){
  const words = cat === "all" ? wordsOf(lang, "all") : wordsOf(lang, cat);
  return words.filter(w => scriptOf(w.f) === "kanji" && w.kana && w.kana !== w.f);
}
function startReading(){
  const lang = el("rd-lang").value, cat = el("rd-cat").value;
  rd.lang = lang;
  const pool = shuffle(getKanjiReadables(lang, cat)).slice(0, 10);

  el("rd-main").classList.add("hidden");
  el("rd-done").classList.add("hidden");
  el("rd-empty").classList.add("hidden");

  if (!pool.length){
    el("rd-empty").classList.remove("hidden");
    el("rd-bar").style.width = "0%";
    return;
  }
  el("rd-main").classList.remove("hidden");

  const allKanji = getKanjiReadables(lang, "all");
  rd.qs = pool.map(w => {
    const wReading = w.kana;
    const uniqueKana = Array.from(new Set(
      allKanji.filter(x => x.f !== w.f).map(x => x.kana).filter(k => k && k !== wReading)
    ));
    const wrongs = shuffle(uniqueKana).slice(0, 3);
    const opts = shuffle([wReading, ...wrongs]);
    return { w, opts, correctOpt: wReading };
  });
  rd.i = 0; rd.score = 0; rd.answered = false;
  renderReading();
}
function renderReading(){
  if (rd.i >= rd.qs.length) return endReading();
  const q = rd.qs[rd.i];
  rd.answered = false;
  el("rd-progress").textContent = `Soal ${rd.i+1} dari ${rd.qs.length} • Skor ${rd.score}`;
  el("rd-word").textContent = q.w.f;
  el("rd-meaning").textContent = `💡 ${q.w.i}`;
  el("rd-bar").style.width = (rd.i / rd.qs.length * 100) + "%";
  const box = el("rd-opts"); box.innerHTML = "";
  q.opts.forEach(o => {
    const b = document.createElement("button");
    b.className = "opt"; b.textContent = o;
    b.onclick = () => answerReading(b, o, q);
    box.appendChild(b);
  });
}
function answerReading(btn, chosen, q){
  if (rd.answered) return;
  rd.answered = true;
  const ok = chosen === q.correctOpt;
  if (ok) rd.score++;
  record(rd.lang, q.w.f, ok, ok ? 15 : 0);
  [...el("rd-opts").children].forEach(b => {
    b.disabled = true;
    if (b.textContent === q.correctOpt) b.classList.add("right");
    else if (b === btn) b.classList.add("wrong");
  });
  setTimeout(() => { rd.i++; renderReading(); }, ok ? 700 : 1400);
}
function endReading(){
  el("rd-main").classList.add("hidden");
  el("rd-done").classList.remove("hidden");
  el("rd-bar").style.width = "100%";
  const total = rd.qs.length;
  const pct = Math.round(rd.score / total * 100);
  el("rd-score").textContent = `${rd.score}/${total}`;
  let msg = "Latihan baca terus ya! 💪";
  if (pct === 100){ msg = "Kamu sudah bisa baca kanji! 🔥"; confetti(50); }
  else if (pct >= 80) msg = "Hebat, hampir sempurna ✨";
  else if (pct >= 60) msg = "Bagus, terus berlatih 👍";
  else if (pct >= 40) msg = "Lumayan, ulangi lagi ya 🙂";
  el("rd-msg").textContent = msg;
}

/* ============================================================
   LISTENING
   ============================================================ */
const ls = { qs:[], i:0, score:0, answered:false, lang:"en", cat:"all" };
function startListen(){
  const lang = el("l-lang").value, cat = el("l-cat").value;
  ls.lang = lang; ls.cat = cat;
  const pool = shuffle(wordsOf(lang, cat)).slice(0, 10);
  ls.qs = pool.map(w => ({ w, opts: shuffle([w, ...distractorsFor(lang, w, cat)]) }));
  ls.i = 0; ls.score = 0; ls.answered = false;
  el("l-done").classList.add("hidden");
  el("l-main").classList.remove("hidden");
  renderListen();
}
function renderListen(){
  if (ls.i >= ls.qs.length) return endListen();
  const q = ls.qs[ls.i];
  ls.answered = false;
  el("l-progress").textContent = `Soal ${ls.i+1} dari ${ls.qs.length} • Skor ${ls.score}`;
  el("l-bar").style.width = (ls.i / ls.qs.length * 100) + "%";
  const box = el("l-opts"); box.innerHTML = "";
  q.opts.forEach(o => {
    const b = document.createElement("button");
    b.className = "opt"; b.textContent = o.i;
    b.onclick = () => answerListen(b, o, q.w);
    box.appendChild(b);
  });
  setTimeout(playListen, 250);
}
function playListen(){
  if (ls.i >= ls.qs.length) return;
  const btn = el("l-play");
  btn.classList.add("playing");
  speak(ls.qs[ls.i].w.f, DATA[ls.lang].tts);
  setTimeout(() => btn.classList.remove("playing"), 1200);
}
function answerListen(btn, chosen, correct){
  if (ls.answered) return;
  ls.answered = true;
  const ok = chosen.i === correct.i;
  if (ok) ls.score++;
  record(ls.lang, correct.f, ok, ok ? 15 : 0);
  [...el("l-opts").children].forEach(b => {
    b.disabled = true;
    if (b.textContent === correct.i) b.classList.add("right");
    else if (b === btn) b.classList.add("wrong");
  });
  el("l-progress").textContent = `Soal ${ls.i+1} dari ${ls.qs.length} • Skor ${ls.score}`;
  setTimeout(() => { ls.i++; renderListen(); }, ok ? 700 : 1200);
}
function endListen(){
  el("l-main").classList.add("hidden");
  el("l-done").classList.remove("hidden");
  el("l-bar").style.width = "100%";
  const total = ls.qs.length;
  const pct = Math.round(ls.score / total * 100);
  el("l-score").textContent = `${ls.score}/${total}`;
  let msg = "Latihan terus ya! 💪";
  if (pct === 100){ msg = "Pendengaranmu luar biasa 🔥"; confetti(50); }
  else if (pct >= 80) msg = "Mantap, hampir sempurna ✨";
  else if (pct >= 60) msg = "Bagus, tingkatin lagi 👍";
  el("l-msg").textContent = msg;
}

/* ============================================================
   MENULIS
   ============================================================ */
const wr = { qs:[], i:0, score:0, answered:false, lang:"en", current:null, answer:"", useLatin:false };
function startWrite(){
  const lang = el("w-lang").value, cat = el("w-cat").value;
  wr.lang = lang;
  wr.qs = shuffle(wordsOf(lang, cat)).slice(0,10);
  wr.i = 0; wr.score = 0; wr.answered = false;
  el("w-done").classList.add("hidden");
  el("w-main").classList.remove("hidden");
  renderWrite();
}
function updateCharCount(){
  const inp = el("w-input");
  const max = parseInt(inp.maxLength) || 50;
  const len = inp.value.length;
  el("w-count").textContent = len;
  el("w-max").textContent = max;
  const wrap = el("w-charcount");
  wrap.classList.remove("near-limit", "at-limit");
  if (len >= max) wrap.classList.add("at-limit");
  else if (len >= max * 0.8) wrap.classList.add("near-limit");
}
function renderWrite(){
  if (wr.i >= wr.qs.length) return endWrite();
  wr.answered = false;
  wr.current = wr.qs[wr.i];
  const w = wr.current;
  wr.useLatin = w.l !== w.f;
  wr.answer = wr.useLatin ? w.l : w.f;
  el("w-progress").textContent = `Soal ${wr.i+1} dari ${wr.qs.length} • Skor ${wr.score}`;
  el("w-bar").style.width = (wr.i / wr.qs.length * 100) + "%";
  el("w-prompt").textContent = w.i;
  el("w-sub").innerHTML = (wr.useLatin
    ? `Tulis cara baca Latin (${DATA[wr.lang].name})`
    : `Tulis dalam bahasa ${DATA[wr.lang].name}`)
    + `<br><span style="font-size:11px;opacity:.6">Tanda baca & huruf besar/kecil diabaikan</span>`;
  const inp = el("w-input");
  inp.value = ""; inp.disabled = false; inp.focus();
  el("w-lenhint").textContent = "";
  updateCharCount();
  el("w-hint").disabled = false;
  el("w-submit").disabled = false;
  el("w-feedback").textContent = "";
  el("w-feedback").style.color = "";
}
function submitWrite(){
  if (wr.answered) return;
  const inp = el("w-input");
  const val = inp.value.trim();
  if (!val) return;
  wr.answered = true;
  const w = wr.current;
  const accepted = [wr.answer, w.f, w.l, ...(w.alt || [])].filter(Boolean).map(norm);
  const ok = accepted.includes(norm(val));
  if (ok) wr.score++;
  record(wr.lang, w.f, ok, ok ? 20 : 0);
  inp.disabled = true;
  el("w-hint").disabled = true;
  el("w-submit").disabled = true;
  const fb = el("w-feedback");
  if (ok){ fb.textContent = `✅ Benar! +20 XP · ${wr.answer.length} karakter`; fb.style.color = "var(--ok)"; }
  else {
    fb.textContent = `❌ Salah. Jawaban: ${wr.answer} (${wr.answer.length} karakter)`;
    fb.style.color = "var(--bad)";
    el("w-lenhint").textContent = `jawaban: ${wr.answer.length} karakter`;
  }
  setTimeout(() => { wr.i++; renderWrite(); }, ok ? 800 : 1600);
}
function writeHint(){
  if (wr.answered) return;
  const a = wr.answer;
  const first = a.charAt(0);
  const rest = a.length > 1 ? " _".repeat(Math.min(a.length-1, 6)) : "";
  el("w-input").value = first + rest;
  el("w-lenhint").textContent = `${a.length} karakter`;
  el("w-input").focus();
  updateCharCount();
  el("w-hint").disabled = true;
}
function endWrite(){
  el("w-main").classList.add("hidden");
  el("w-done").classList.remove("hidden");
  el("w-bar").style.width = "100%";
  const total = wr.qs.length;
  const pct = Math.round(wr.score / total * 100);
  el("w-score").textContent = `${wr.score}/${total}`;
  let msg = "Coba lagi ya! 💪";
  if (pct === 100){ msg = "Ejaanmu sempurna 🔥"; confetti(50); }
  else if (pct >= 80) msg = "Hebat, hampir sempurna ✨";
  else if (pct >= 60) msg = "Bagus, terus berlatih 👍";
  el("w-msg").textContent = msg;
}

/* ============================================================
   REVIEW SRS
   ============================================================ */
const rv = { qs:[], i:0, score:0, answered:false };

function startReview(){
  const weak = getDueWords();
  el("r-main").classList.add("hidden");
  el("r-done").classList.add("hidden");
  el("r-empty").classList.add("hidden");

  if (!weak.length){
    el("r-empty").classList.remove("hidden");
    el("r-bar").style.width = "0%";
    updateDueBadge();
    return;
  }
  el("r-main").classList.remove("hidden");
  const pool = shuffle(weak).slice(0, 20);
  rv.qs = pool.map(({ w, lang }) => {
    const cat = categoryOf(lang, w.f);
    return { w, lang, cat, opts: shuffle([w, ...distractorsFor(lang, w, cat)]) };
  });
  rv.i = 0; rv.score = 0; rv.answered = false;
  updateDueBadge();
  renderReview();
}
function renderReview(){
  if (rv.i >= rv.qs.length) return endReview();
  const q = rv.qs[rv.i];
  rv.answered = false;
  el("r-progress").textContent = `Kartu ${rv.i+1} dari ${rv.qs.length} • Skor ${rv.score}`;
  el("r-word").textContent = q.w.f;
  const showKana = q.w.kana && q.w.kana !== q.w.f;
  el("r-kana").textContent = showKana ? q.w.kana : "";
  const showLatin = q.w.l && q.w.l !== q.w.f && q.w.l !== q.w.i;
  el("r-latin").textContent = showLatin ? q.w.l : "";
  el("r-bar").style.width = (rv.i / rv.qs.length * 100) + "%";
  const box = el("r-opts"); box.innerHTML = "";
  q.opts.forEach(o => {
    const b = document.createElement("button");
    b.className = "opt"; b.textContent = o.i;
    b.onclick = () => answerReview(b, o, q);
    box.appendChild(b);
  });
}
function answerReview(btn, chosen, q){
  if (rv.answered) return;
  rv.answered = true;
  const ok = chosen.i === q.w.i;
  if (ok) rv.score++;
  record(q.lang, q.w.f, ok, ok ? 15 : 0);
  [...el("r-opts").children].forEach(b => {
    b.disabled = true;
    if (b.textContent === q.w.i) b.classList.add("right");
    else if (b === btn) b.classList.add("wrong");
  });
  setTimeout(() => { rv.i++; renderReview(); }, ok ? 700 : 1200);
}
function endReview(){
  el("r-main").classList.add("hidden");
  el("r-done").classList.remove("hidden");
  el("r-bar").style.width = "100%";
  const total = rv.qs.length;
  const pct = Math.round(rv.score / total * 100);
  el("r-score").textContent = `${rv.score}/${total}`;
  el("r-msg").textContent = pct === 100 ? "Semua benar! Kartu dijadwalkan lebih lama 🔥"
    : pct >= 70 ? "Bagus, terus ulangi ya ✨" : "Coba lagi biar makin ingat 💪";
  if (pct === 100) confetti(40);
  updateDueBadge();
}

/* ============================================================
   FAVORIT
   ============================================================ */
const fav = { qs:[], i:0, score:0, answered:false };
function getFavorites(){
  const list = [];
  for (const k in (state.bookmarks || {})){
    const [lang, word] = k.split(":");
    const w = wordsOf(lang, "all").find(x => x.f === word);
    if (w) list.push({ w, lang });
  }
  return list;
}
function startFavorites(){
  const favs = getFavorites();
  el("f-main").classList.add("hidden");
  el("f-done").classList.add("hidden");
  el("f-empty").classList.add("hidden");
  if (!favs.length){
    el("f-empty").classList.remove("hidden");
    el("f-bar").style.width = "0%";
    return;
  }
  el("f-main").classList.remove("hidden");
  const pool = shuffle(favs);
  fav.qs = pool.map(({ w, lang }) => {
    const cat = categoryOf(lang, w.f);
    return { w, lang, opts: shuffle([w, ...distractorsFor(lang, w, cat)]) };
  });
  fav.i = 0; fav.score = 0; fav.answered = false;
  renderFavorites();
}
function renderFavorites(){
  if (fav.i >= fav.qs.length) return endFavorites();
  const q = fav.qs[fav.i];
  fav.answered = false;
  el("f-progress").textContent = `Kartu ${fav.i+1} dari ${fav.qs.length} • Skor ${fav.score}`;
  el("f-word").textContent = q.w.f;
  const showKana = q.w.kana && q.w.kana !== q.w.f;
  el("f-kana").textContent = showKana ? q.w.kana : "";
  const showLatin = q.w.l && q.w.l !== q.w.f && q.w.l !== q.w.i;
  el("f-latin").textContent = showLatin ? q.w.l : "";
  el("f-bar").style.width = (fav.i / fav.qs.length * 100) + "%";
  const box = el("f-opts"); box.innerHTML = "";
  q.opts.forEach(o => {
    const b = document.createElement("button");
    b.className = "opt"; b.textContent = o.i;
    b.onclick = () => answerFavorite(b, o, q);
    box.appendChild(b);
  });
}
function answerFavorite(btn, chosen, q){
  if (fav.answered) return;
  fav.answered = true;
  const ok = chosen.i === q.w.i;
  if (ok) fav.score++;
  record(q.lang, q.w.f, ok, ok ? 15 : 0);
  [...el("f-opts").children].forEach(b => {
    b.disabled = true;
    if (b.textContent === q.w.i) b.classList.add("right");
    else if (b === btn) b.classList.add("wrong");
  });
  setTimeout(() => { fav.i++; renderFavorites(); }, ok ? 700 : 1200);
}
function endFavorites(){
  el("f-main").classList.add("hidden");
  el("f-done").classList.remove("hidden");
  el("f-bar").style.width = "100%";
  const total = fav.qs.length;
  const pct = Math.round(fav.score / total * 100);
  el("f-score").textContent = `${fav.score}/${total}`;
  el("f-msg").textContent = pct === 100 ? "Favoritmu semua sudah jago! 🔥" : "Terus latih favoritmu 💪";
  if (pct === 100) confetti(40);
}

/* ============================================================
   STATISTIK
   ============================================================ */
function renderStats(){
  const li = levelInfo(state.xp);
  el("s-level").textContent = li.level;
  el("s-xp").textContent = state.xp;
  el("s-streak").textContent = state.streak;
  el("s-master").textContent = masteredCount();
  el("s-acc").textContent = state.totalAnswered
    ? Math.round(state.totalCorrect / state.totalAnswered * 100) + "%" : "0%";
  el("s-badges").textContent = `${state.badges.length}/${BADGES.length}`;

  const scriptBox = el("s-scripts");
  scriptBox.innerHTML = "";
  const scriptCounts = { kanji:{total:0,master:0}, hiragana:{total:0,master:0}, katakana:{total:0,master:0} };
  const jaWords = wordsOf("ja", "all");
  jaWords.forEach(w => {
    const s = scriptOf(w.f);
    if (!s || !scriptCounts[s]) return;
    scriptCounts[s].total++;
    const p = (state.progress.ja || {})[w.f];
    if (!p) return;
    if (p.level !== undefined){
      if (p.level >= SRS_MASTERED) scriptCounts[s].master++;
    } else if (p.c >= 2 && p.c > p.w){
      scriptCounts[s].master++;
    }
  });
  [["kanji","漢 Kanji"],["hiragana","あ Hiragana"],["katakana","ア Katakana"]].forEach(([k,label]) => {
    const c = scriptCounts[k];
    const pct = c.total ? Math.round(c.master / c.total * 100) : 0;
    const row = document.createElement("div");
    row.className = "langrow";
    row.innerHTML = `<span class="nm">${label}</span>
      <span class="track"><i style="width:${pct}%"></i></span>
      <span class="pct">${c.master}/${c.total}</span>`;
    scriptBox.appendChild(row);
  });

  const heat = el("s-heat"); heat.innerHTML = "";
  const days = [];
  for (let i=6;i>=0;i--){
    const d = new Date(); d.setDate(d.getDate()-i);
    const key = d.toISOString().slice(0,10);
    days.push({ key, day: ["Min","Sen","Sel","Rab","Kam","Jum","Sab"][d.getDay()],
      xp: state.xpByDate[key] || 0 });
  }
  const maxXp = Math.max(1, ...days.map(d => d.xp));
  days.forEach(d => {
    const col = document.createElement("div");
    col.className = "hcol";
    const h = Math.max(6, Math.round(d.xp / maxXp * 70));
    col.innerHTML = `<span class="hxp">${d.xp || ""}</span>
      <div class="hbar ${d.xp === 0 ? "zero" : ""}" style="height:${h}px"></div>
      <span class="hlabel">${d.day}</span>`;
    heat.appendChild(col);
  });

  const grid = el("s-badgegrid"); grid.innerHTML = "";
  BADGES.forEach(b => {
    const unlocked = state.badges.includes(b.id);
    const d = document.createElement("div");
    d.className = "badge" + (unlocked ? " unlocked" : "");
    d.title = b.name;
    d.innerHTML = `<span class="bicon">${b.icon}</span><div class="bname">${b.name}</div>`;
    grid.appendChild(d);
  });

  const box = el("s-langs"); box.innerHTML = "";
  for (const k in DATA){
    const total = wordsOf(k, "all").length;
    const p = state.progress[k] || {};
    let m = 0;
    for (const wd in p){
      const e = p[wd];
      if (!e) continue;
      if (e.level !== undefined){
        if (e.level >= SRS_MASTERED) m++;
      } else if (e.c >= 2 && e.c > e.w) m++;
    }
    const pct = total ? Math.round(m / total * 100) : 0;
    const row = document.createElement("div");
    row.className = "langrow";
    row.innerHTML = `<span class="nm">${DATA[k].flag} ${DATA[k].name}</span>
      <span class="track"><i style="width:${pct}%"></i></span>
      <span class="pct">${pct}%</span>`;
    box.appendChild(row);
  }
}

/* ============================================================
   THEME
   ============================================================ */
function applyTheme(){
  const light = localStorage.getItem("lingobro_theme") === "light";
  document.body.classList.toggle("light", light);
  el("theme-btn").textContent = light ? "☀️" : "🌙";
}
function toggleTheme(){
  const light = !document.body.classList.contains("light");
  document.body.classList.toggle("light", light);
  localStorage.setItem("lingobro_theme", light ? "light" : "dark");
  el("theme-btn").textContent = light ? "☀️" : "🌙";
}

/* ============================================================
   EVENTS
   ============================================================ */
document.querySelectorAll(".tab").forEach(t => {
  t.onclick = () => {
    document.querySelectorAll(".tab").forEach(x => x.classList.remove("active"));
    t.classList.add("active");
    ["belajar","kuis","baca","dengar","tulis","ulang","favorit","stats"].forEach(v => {
      el("view-"+v).classList.toggle("hidden", v !== t.dataset.view);
    });
    if (t.dataset.view === "stats") renderStats();
    if (t.dataset.view === "ulang") startReview();
    if (t.dataset.view === "favorit") startFavorites();
    if (t.dataset.view === "baca") startReading();
  };
});

el("theme-btn").onclick = toggleTheme;

el("fc-card").onclick = e => {
  if (e.target.classList.contains("audio-btn")) return;
  if (e.target.classList.contains("bookmark-btn")) return;
  if (e.target.classList.contains("detail-btn")) return;
  el("fc-card").classList.toggle("flip");
};
el("fc-audio").onclick = e => {
  e.stopPropagation();
  const w = fc.deck[fc.i];
  if (w) speak(w.f, DATA[el("fc-lang").value].tts);
};
el("fc-bookmark").onclick = e => {
  e.stopPropagation();
  const w = fc.deck[fc.i];
  if (!w) return;
  toggleBookmark(el("fc-lang").value, w.f);
  renderFlashcard();
};
el("fc-detail").onclick = e => {
  e.stopPropagation();
  const w = fc.deck[fc.i];
  if (w && KANJI_DETAIL[w.f]) showKanjiModal(w.f);
};
el("fc-lupa").onclick = () => answerCard(false);
el("fc-ingat").onclick = () => answerCard(true);
el("fc-restart").onclick = startFlashcard;
el("fc-share").onclick = () => shareResult(fc.correct, fc.deck.length, "Belajar");

el("q-audio").onclick = () => {
  const q = qz.qs[qz.i];
  if (q) speak(q.w.f, DATA[qz.lang].tts);
};
el("q-restart").onclick = startQuiz;
el("q-share").onclick = () => shareResult(qz.score, qz.qs.length, "Kuis");

el("rd-audio").onclick = () => {
  const q = rd.qs[rd.i];
  if (q) speak(q.w.f, DATA[rd.lang].tts);
};
el("rd-restart").onclick = startReading;
el("rd-share").onclick = () => shareResult(rd.score, rd.qs.length, "Baca");

el("l-play").onclick = playListen;
el("l-restart").onclick = startListen;
el("l-share").onclick = () => shareResult(ls.score, ls.qs.length, "Dengar");

el("w-submit").onclick = submitWrite;
el("w-hint").onclick = writeHint;
el("w-restart").onclick = startWrite;
el("w-share").onclick = () => shareResult(wr.score, wr.qs.length, "Tulis");
el("w-input").addEventListener("input", updateCharCount);
el("w-input").addEventListener("keydown", e => {
  if (e.key === "Enter"){ e.preventDefault(); submitWrite(); }
});

el("r-audio").onclick = () => {
  const q = rv.qs[rv.i];
  if (q) speak(q.w.f, DATA[q.lang].tts);
};
el("r-restart").onclick = startReview;
el("r-share").onclick = () => shareResult(rv.score, rv.qs.length, "Ulang");

el("f-audio").onclick = () => {
  const q = fav.qs[fav.i];
  if (q) speak(q.w.f, DATA[q.lang].tts);
};
el("f-restart").onclick = startFavorites;

el("s-export").onclick = exportProgress;
el("s-import-btn").onclick = () => el("s-import-file").click();
el("s-import-file").onchange = e => {
  if (e.target.files[0]) importProgress(e.target.files[0]);
  e.target.value = "";
};

el("fc-lang").onchange = () => {
  fillCats(el("fc-cat"), el("fc-lang").value);
  const scriptSel = el("fc-script");
  if (el("fc-lang").value === "ja") scriptSel.classList.remove("hidden");
  else { scriptSel.classList.add("hidden"); scriptSel.value = "all"; }
  startFlashcard();
};
el("fc-cat").onchange = startFlashcard;
el("fc-script").onchange = startFlashcard;
el("fc-order").onchange = startFlashcard;
el("q-lang").onchange = () => { fillCats(el("q-cat"), el("q-lang").value); startQuiz(); };
el("q-cat").onchange = startQuiz;
el("rd-lang").onchange = () => { fillCats(el("rd-cat"), el("rd-lang").value); startReading(); };
el("rd-cat").onchange = startReading;
el("l-lang").onchange = () => { fillCats(el("l-cat"), el("l-lang").value); startListen(); };
el("l-cat").onchange = startListen;
el("w-lang").onchange = () => { fillCats(el("w-cat"), el("w-lang").value); startWrite(); };
el("w-cat").onchange = startWrite;

el("s-reset").onclick = () => {
  if (!confirm("Hapus semua progres, XP, badge, favorit, dan daily challenge?")) return;
  state = defaultState();
  save(); updateHUD(); renderDaily(); updateDueBadge(); renderStats();
  startFlashcard(); startQuiz(); startReading(); startListen(); startWrite();
};

document.addEventListener("keydown", e => {
  if (document.activeElement && ["INPUT","TEXTAREA"].includes(document.activeElement.tagName)) return;
  const onStudy = !el("view-belajar").classList.contains("hidden")
    && !el("fc-main").classList.contains("hidden");
  if (!onStudy) return;
  if (e.code === "Space" || e.key === "Enter"){ e.preventDefault(); el("fc-card").click(); }
  if (e.key === "ArrowLeft") answerCard(false);
  if (e.key === "ArrowRight") answerCard(true);
});

document.addEventListener("click", e => {
  const btn = e.target.closest(".btn, .tab, .opt, .claim-btn, .iconbtn, .audio-btn, .bookmark-btn");
  if (!btn) return;
  const rect = btn.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const ripple = document.createElement("span");
  ripple.className = "ripple";
  ripple.style.width = ripple.style.height = size + "px";
  ripple.style.left = (e.clientX - rect.left - size / 2) + "px";
  ripple.style.top = (e.clientY - rect.top - size / 2) + "px";
  if (getComputedStyle(btn).position === "static") btn.style.position = "relative";
  if (getComputedStyle(btn).overflow !== "hidden") btn.style.overflow = "hidden";
  btn.appendChild(ripple);
  setTimeout(() => ripple.remove(), 700);
});

document.querySelectorAll(".tab").forEach(t => {
  t.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

/* ============================================================
   INIT
   ============================================================ */
applyTheme();
fillLangs(el("fc-lang")); fillCats(el("fc-cat"), el("fc-lang").value);
fillLangs(el("q-lang")); fillCats(el("q-cat"), el("q-lang").value);
fillLangs(el("rd-lang")); fillCats(el("rd-cat"), el("rd-lang").value);
fillLangs(el("l-lang")); fillCats(el("l-cat"), el("l-lang").value);
fillLangs(el("w-lang")); fillCats(el("w-cat"), el("w-lang").value);
getDaily(); save();
updateHUD(); renderDaily(); updateDueBadge();
startFlashcard();
startQuiz();
startReading();
startListen();
startWrite();