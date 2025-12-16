import { Question, Category } from '../types';

export const questions: Question[] = [
  // --- ZLATO A TRH (GOLD_MARKET) ---
  {
    id: 1,
    text: "Jakou minimální ryzost musí mít investiční zlato?",
    options: [
      "Zlaté slitky 995/1000 a zlaté mince 900/1000",
      "Zlaté slitky 995/1000 a zlaté mince 995/1000",
      "Zlaté slitky 999/1000 a zlaté mince 999/1000",
      "Zlaté slitky 999/1000 a zlaté mince 900/1000"
    ],
    explanation: "Dle zákona o DPH je investiční zlato definováno jako zlato o ryzosti alespoň 995 tisícin pro slitky a alespoň 900 tisícin pro mince.",
    text_sk: "Akú minimálnu rýdzosť musí mať investičné zlato?",
    options_sk: [
      "Zlaté zliatky 995/1000 a zlaté mince 900/1000",
      "Zlaté zliatky 995/1000 a zlaté mince 995/1000",
      "Zlaté zliatky 999/1000 a zlaté mince 999/1000",
      "Zlaté zliatky 999/1000 a zlaté mince 900/1000"
    ],
    explanation_sk: "Podľa zákona o DPH je investičné zlato definované ako zlato s rýdzosťou aspoň 995 tisícin pre zliatky a aspoň 900 tisícin pre mince.",
    correctAnswerIndices: [0],
    category: Category.GOLD_MARKET
  },
  {
    id: 2,
    text: "Proč se zlato označuje jako bezpečný přístav?",
    options: [
      "Je stabilní v době nejistoty a nedůvěry",
      "Je pod kontrolou centrálních bank",
      "Není předmětem dědictví",
      "Má garantovaný výnos"
    ],
    explanation: "Zlato historicky uchovává hodnotu a funguje jako pojistka (záchranný kruh) v dobách ekonomických krizí a inflace, kdy fiat měny ztrácejí hodnotu.",
    text_sk: "Prečo sa zlato označuje ako bezpečný prístav?",
    options_sk: [
      "Je stabilné v čase neistoty a nedôvery",
      "Je pod kontrolou centrálnych bánk",
      "Nie je predmetom dedičstva",
      "Má garantovaný výnos"
    ],
    explanation_sk: "Zlato historicky uchováva hodnotu a funguje ako poistka (záchranné koleso) v časoch ekonomických kríz a inflácie, kedy fiat meny strácajú hodnotu.",
    correctAnswerIndices: [0],
    category: Category.GOLD_MARKET
  },
  {
    id: 11,
    text: "Co je hlavní výhodou investice do zlata?",
    options: [
      "Uchovatel hodnoty v krizích",
      "Pravidelný úrok",
      "Státní záruka",
      "Nízká likvidita"
    ],
    explanation: "Zlato negeneruje úrok, ale jeho hlavní funkcí je uchování kupní síly v čase, zejména během krizí.",
    text_sk: "Čo je hlavnou výhodou investície do zlata?",
    options_sk: [
      "Uchovávateľ hodnoty v krízach",
      "Pravidelný úrok",
      "Štátna záruka",
      "Nízka likvidita"
    ],
    explanation_sk: "Zlato negeneruje úrok, ale jeho hlavnou funkciou je uchovanie kúpnej sily v čase, najmä počas kríz.",
    correctAnswerIndices: [0],
    category: Category.GOLD_MARKET
  },
  {
    id: 15,
    text: "Co znamená pojem Good Delivery a která tvrzení jsou pravdivá?",
    options: [
      "Zlato a stříbro označené 'Good Delivery' není vůbec likvidní",
      "Slitky označené 'Good Delivery' jsou akceptovány na všech trzích s drahými kovy po celém světě, protože splňují přísné požadavky na kvalitu",
      "Veškerý nabízený sortiment z rafinérie PAMP a mincovny The Royal Mint splňuje standardy 'Good Delivery'",
      "'Good Delivery' u zlata označuje, že daný zlatý slitek splňuje mezinárodně uznávané standardy kvality a rafinace, stanovené asociací London Bullion Market Association (LBMA)"
    ],
    explanation: "Standard Good Delivery (LBMA) definuje mezinárodní požadavky na kvalitu a rafinaci. Slitky s tímto označením jsou celosvětově likvidní a akceptované. Sortiment PAMP i The Royal Mint tyto nejvyšší standardy splňuje.",
    text_sk: "Čo znamená pojem Good Delivery a ktoré tvrdenia sú pravdivé?",
    options_sk: [
      "Zlato a striebro označené 'Good Delivery' nie je vôbec likvidné",
      "Zliatky označené 'Good Delivery' sú akceptované na všetkých trhoch s drahými kovmi po celom svete, pretože spĺňajú prísne požiadavky na kvalitu",
      "Všetok ponúkaný sortiment z rafinérie PAMP a mincovne The Royal Mint spĺňa štandardy 'Good Delivery'",
      "'Good Delivery' pri zlate označuje, že daný zlatý zliatok spĺňa medzinárodne uznávané štandardy kvality a rafinácie, stanovené asociáciou London Bullion Market Association (LBMA)"
    ],
    explanation_sk: "Štandard Good Delivery (LBMA) definuje medzinárodné požiadavky na kvalitu a rafináciu. Zliatky s týmto označením sú celosvetovo likvidné a akceptované. Sortiment PAMP aj The Royal Mint tieto najvyššie štandardy spĺňa.",
    correctAnswerIndices: [1, 2, 3],
    category: Category.GOLD_MARKET
  },
  {
    id: 19,
    text: "Jaká je právní výhoda fyzického zlata v dědictví?",
    options: [
      "Automaticky připadá státu",
      "Je hmotným majetkem a lze ho snadno předat",
      "Nelze ho předat dětem",
      "Podléhá zvláštní daňové sazbě"
    ],
    explanation: "Fyzické zlato je movitá věc, kterou lze snadno fyzicky předat dědicům.",
    text_sk: "Aká je právna výhoda fyzického zlata v dedičstve?",
    options_sk: [
      "Automaticky pripadá štátu",
      "Je hmotným majetkom a možno ho ľahko odovzdať",
      "Nemožno ho odovzdať deťom",
      "Podlieha zvláštnej daňovej sadzbe"
    ],
    explanation_sk: "Fyzické zlato je hnuteľná vec, ktorú možno ľahko fyzicky odovzdať dedičom.",
    correctAnswerIndices: [1],
    category: Category.GOLD_MARKET
  },
  {
    id: 21,
    text: "Které tvrzení o zlatě je pravdivé?",
    options: [
      "Jedna tuna zlata se vejde do krychle o hraně 37,27 centimetru",
      "Zlato má vysokou hustotu, 19 x vyšší než voda, 2,5 x vyšší než železo",
      "Zlato, latinsky aurum, v překladu znamená „zářivý úsvit“",
      "Ryzost je číselný údaj o poměrném hmotnostním obsahu zlata v předmětu nebo ve slitině"
    ],
    explanation: "Všechna tvrzení jsou pravdivá: Zlato má extrémní hustotu (19,3 g/cm³), je 19x těžší než voda a 2,5x než železo, proto by celá tuna vytvořila krychli o hraně jen cca 37,27 cm. Latinský název Aurum znamená 'zářivý úsvit' a ryzost vyjadřuje podíl čistého kovu ve slitině.",
    text_sk: "Ktoré tvrdenie o zlate je pravdivé?",
    options_sk: [
      "Jedna tona zlata sa zmestí do kocky s hranou 37,27 centimetra",
      "Zlato má vysokú hustotu, 19x vyššiu ako voda, 2,5x vyššiu ako železo",
      "Zlato, latinsky aurum, v preklade znamená „žiarivý úsvit“",
      "Rýdzosť je číselný údaj o pomernom hmotnostnom obsahu zlata v predmete alebo v zliatine"
    ],
    explanation_sk: "Všetky tvrdenia sú pravdivé: Zlato má extrémnu hustotu (19,3 g/cm³), je 19x ťažšie ako voda a 2,5x ako železo, preto by celá tona vytvorila kocku s hranou len cca 37,27 cm. Latinský názov Aurum znamená 'žiarivý úsvit' a rýdzosť vyjadruje podiel čistého kovu v zliatine.",
    correctAnswerIndices: [0, 1, 2, 3],
    category: Category.GOLD_MARKET
  },
  {
    id: 22,
    text: "Ve kterém roce byla založena švýcarská rafinerie PAMP?",
    options: [
      "1997",
      "1987",
      "1977",
      "1967"
    ],
    explanation: "Rafinérie PAMP (Produits Artistiques Métaux Précieux) byla založena v roce 1977 ve Švýcarsku.",
    text_sk: "V ktorom roku bola založená švajčiarska rafinéria PAMP?",
    options_sk: [
      "1997",
      "1987",
      "1977",
      "1967"
    ],
    explanation_sk: "Rafinéria PAMP (Produits Artistiques Métaux Précieux) bola založená v roku 1977 vo Švajčiarsku.",
    correctAnswerIndices: [2],
    category: Category.GOLD_MARKET
  },
  {
    id: 28,
    text: "Jakou chemickou značku má stříbro?",
    options: [
      "Au",
      "Ar",
      "Az",
      "Ag"
    ],
    explanation: "Chemická značka stříbra je Ag (Argentum).",
    text_sk: "Akú chemickú značku má striebro?",
    options_sk: [
      "Au",
      "Ar",
      "Az",
      "Ag"
    ],
    explanation_sk: "Chemická značka striebra je Ag (Argentum).",
    correctAnswerIndices: [3],
    category: Category.GOLD_MARKET
  },
  {
    id: 81,
    text: "Co je podílový fond?",
    options: [
      "Typ penzijního spoření",
      "Individuální akcie",
      "Forma kolektivního investování spravovaná fondem",
      "Účet u banky"
    ],
    explanation: "Podílový fond shromažďuje prostředky od mnoha investorů a investuje je do různých aktiv (akcie, dluhopisy) v rámci kolektivního investování.",
    text_sk: "Čo je podielový fond?",
    options_sk: [
      "Typ dôchodkového sporenia",
      "Individuálne akcie",
      "Forma kolektívneho investovania spravovaná fondom",
      "Účet v banke"
    ],
    explanation_sk: "Podielový fond zhromažďuje prostriedky od mnohých investorov a investuje ich do rôznych aktív (akcie, dlhopisy) v rámci kolektívneho investovania.",
    correctAnswerIndices: [2],
    category: Category.GOLD_MARKET
  },
  {
    id: 83,
    text: "Který produkt je chráněn Garančním systémem finančního trhu?",
    options: [
      "Zlato",
      "Bankovní účet do 100 000 EUR",
      "Akcie",
      "Investiční fondy"
    ],
    explanation: "Bankovní vklady jsou ze zákona pojištěny do výše 100 000 EUR. Investice tuto garanci nemají.",
    text_sk: "Ktorý produkt je chránený Garančným systémom finančného trhu?",
    options_sk: [
      "Zlato",
      "Bankový účet do 100 000 EUR",
      "Akcie",
      "Investičné fondy"
    ],
    explanation_sk: "Bankové vklady sú zo zákona poistené do výšky 100 000 EUR. Investície túto garanciu nemajú.",
    correctAnswerIndices: [1],
    category: Category.GOLD_MARKET
  },
  {
    id: 84,
    text: "Který z těchto příkladů je alternativní investice?",
    options: [
      "Státní dluhopis",
      "Fyzické zlato",
      "Akcie",
      "Spořící účet"
    ],
    explanation: "Fyzické zlato, nemovitosti nebo umění se považují za alternativní investice, které nejsou tradičními finančními nástroji.",
    text_sk: "Ktorý z týchto príkladov je alternatívna investícia?",
    options_sk: [
      "Štátny dlhopis",
      "Fyzické zlato",
      "Akcie",
      "Sporiaci účet"
    ],
    explanation_sk: "Fyzické zlato, nehnuteľnosti alebo umenie sa považujú za alternatívne investície, ktoré nie sú tradičnými finančnými nástrojmi.",
    correctAnswerIndices: [1],
    category: Category.GOLD_MARKET
  },
  {
    id: 85,
    text: "Který z následujících produktů má obecně nejvyšší investiční riziko?",
    options: [
      "Termínovaný vklad v bance",
      "Spořící účet",
      "Státní dluhopis ČR",
      "Akcie malé technologické firmy"
    ],
    explanation: "Akcie malých firem (start-upů) nesou vysoké riziko volatility a krachu oproti bankovním vkladům nebo státním dluhopisům.",
    text_sk: "Ktorý z nasledujúcich produktov má všeobecne najvyššie investičné riziko?",
    options_sk: [
      "Termínovaný vklad v banke",
      "Sporiaci účet",
      "Štátny dlhopis ČR",
      "Akcie malej technologickej firmy"
    ],
    explanation_sk: "Akcie malých firiem (start-upov) nesú vysoké riziko volatility a krachu oproti bankovým vkladom alebo štátnym dlhopisom.",
    correctAnswerIndices: [3],
    category: Category.GOLD_MARKET
  },
  {
    id: 86,
    text: "Jaký poplatek si běžně účtují podílové fondy?",
    options: [
      "Správcovský poplatek z objemu majetku",
      "Pouze vstupní poplatek",
      "Poplatek při výplatě výnosu",
      "Žádný, jsou zdarma"
    ],
    explanation: "Standardem u fondů je manažerský (správcovský) poplatek (management fee), který se strhává průběžně z objemu majetku.",
    text_sk: "Aký poplatok si bežne účtujú podielové fondy?",
    options_sk: [
      "Správcovský poplatok z objemu majetku",
      "Iba vstupný poplatok",
      "Poplatok pri výplate výnosu",
      "Žiadny, sú zadarmo"
    ],
    explanation_sk: "Štandardom pri fondoch je manažérsky (správcovský) poplatok (management fee), ktorý sa strháva priebežne z objemu majetku.",
    correctAnswerIndices: [0],
    category: Category.GOLD_MARKET
  },
  {
    id: 87,
    text: "Která forma investice obvykle zahrnuje vstupní poplatek?",
    options: [
      "Spořící účet",
      "Nákup investiční nemovitosti",
      "Dluhopisy zakoupené přímo od státu",
      "Investice do podílových fondů"
    ],
    explanation: "U podílových fondů se typicky platí vstupní poplatek (entry fee) z investované částky.",
    text_sk: "Ktorá forma investície obvykle zahŕňa vstupný poplatok?",
    options_sk: [
      "Sporiaci účet",
      "Nákup investičnej nehnuteľnosti",
      "Dlhopisy zakúpené priamo od štátu",
      "Investícia do podielových fondov"
    ],
    explanation_sk: "Pri podielových fondoch sa typicky platí vstupný poplatok (entry fee) z investovanej čiastky.",
    correctAnswerIndices: [3],
    category: Category.GOLD_MARKET
  },
  {
    id: 88,
    text: "Které tvrzení o vztahu výnosu a rizika je správné?",
    options: [
      "Vyšší výnos znamená vždy nižší riziko",
      "Nižší riziko znamená vždy vyšší výnos",
      "Výnos a riziko spolu nesouvisí",
      "Vyšší výnos je obvykle spojen s vyšším rizikem"
    ],
    explanation: "Základní pravidlo investování: potenciál vyššího výnosu je vykoupen vyšším rizikem kolísání hodnoty.",
    text_sk: "Ktoré tvrdenie o vzťahu výnosu a rizika je správne?",
    options_sk: [
      "Vyšší výnos znamená vždy nižšie riziko",
      "Nižšie riziko znamená vždy vyšší výnos",
      "Výnos a riziko spolu nesúvisia",
      "Vyšší výnos je obvykle spojený s vyšším rizikom"
    ],
    explanation_sk: "Základné pravidlo investovania: potenciál vyššieho výnosu je vykúpený vyšším rizikom kolísania hodnoty.",
    correctAnswerIndices: [3],
    category: Category.GOLD_MARKET
  },
  {
    id: 89,
    text: "Jaký typ poplatku se může vyskytnout při nákupu ETF přes burzu?",
    options: [
      "Daň z výnosu předem",
      "Poplatek za zprostředkování (transakční poplatek brokera)",
      "Poplatek za konverzi měny",
      "Správcovský poplatek v bance"
    ],
    explanation: "Při nákupu na burze se platí brokerovi poplatek za provedení obchodu (komise) a případně konverze měny, pokud se obchoduje v cizí měně.",
    text_sk: "Aký typ poplatku sa môže vyskytnúť pri nákupe ETF cez burzu?",
    options_sk: [
      "Daň z výnosu vopred",
      "Poplatok za sprostredkovanie (transakčný poplatok brokera)",
      "Poplatok za konverziu meny",
      "Správcovský poplatok v banke"
    ],
    explanation_sk: "Pri nákupe na burze sa platí brokerovi poplatok za vykonanie obchodu (komisia) a prípadne konverzia meny.",
    correctAnswerIndices: [1, 2],
    category: Category.GOLD_MARKET
  },
  {
    id: 90,
    text: "Co znamená investiční horizont?",
    options: [
      "Sazba inflace",
      "Doba trvání smlouvy",
      "Časový rámec, po který plánujeme investici držet",
      "Období před důchodem"
    ],
    explanation: "Investiční horizont je doba, na kterou investor plánuje své prostředky investovat, aby dosáhl svých cílů.",
    text_sk: "Čo znamená investičný horizont?",
    options_sk: [
      "Sadzba inflácie",
      "Doba trvania zmluvy",
      "Časový rámec, počas ktorého plánujeme investíciu držať",
      "Obdobie pred dôchodkom"
    ],
    explanation_sk: "Investičný horizont je doba, na ktorú investor plánuje svoje prostriedky investovať, aby dosiahol svoje ciele.",
    correctAnswerIndices: [2],
    category: Category.GOLD_MARKET
  },

  // --- PRODUKTY A PROCESY (PRODUCTS) ---
  {
    id: 3,
    text: "Co je pravdivé tvrzení o společnosti IBIS InGold?",
    options: [
      "Má víc než 100 000 zákazníků",
      "Garantuje zpětný výkup všech slitků a mincí, které u ní klienti nakoupili",
      "Byla založena v roce 1998",
      "Je oficiálním autorizovaným partnerem švýcarské rafinérie PAMP a britské královské mincovny The Royal Mint"
    ],
    explanation: "IBIS InGold působí na trhu již od roku 1998 a má přes 100 000 zákazníků. Je přímým partnerem prestižních výrobců PAMP a The Royal Mint a svým klientům smluvně garantuje zpětný výkup.",
    text_sk: "Čo je pravdivé tvrdenie o spoločnosti IBIS InGold?",
    options_sk: [
      "Má viac ako 100 000 zákazníkov",
      "Garantuje spätný výkup všetkých zliatkov a mincí, ktoré u nej klienti nakúpili",
      "Bola založená v roku 1998",
      "Je oficiálnym autorizovaným partnerom švajčiarskej rafinérie PAMP a britskej kráľovskej mincovne The Royal Mint"
    ],
    explanation_sk: "IBIS InGold pôsobí na trhu už od roku 1998 a má vyše 100 000 zákazníkov. Je priamym partnerom prestížnych výrobcov PAMP a The Royal Mint a svojim klientom zmluvne garantuje spätný výkup.",
    correctAnswerIndices: [0, 1, 2, 3],
    category: Category.PRODUCTS
  },
  {
    id: 5,
    text: "Jak probíhá zpětný výkup u společnosti IBIS InGold?",
    options: [
      "Pokud má klient slitky a mince u sebe, může je po domluvě doručit k výkupu osobně na centrálu společnosti IBIS InGold",
      "Pokud má klient slitky a mince v depozitu u IBIS InGold, zašle úředně ověřenou žádost o výkup společnosti IBIS InGold",
      "Pokud má klient slitky a mince u sebe, zašle je v pojištěné bezpečnostní obálce spolu s žádostí o výkup společnosti IBIS InGold",
      "IBIS InGold pošle pověřené pracovníky k výkupu přímo ke klientovi domů, kde slitky a mince převezmou a doručí na centrálu IBIS InGold"
    ],
    explanation: "Výkup je flexibilní: zboží z depozitu lze prodat na základě ověřené žádosti. Fyzicky držené zboží lze doručit osobně na centrálu nebo zaslat poštou v bezpečnostní obálce.",
    text_sk: "Ako prebieha spätný výkup v spoločnosti IBIS InGold?",
    options_sk: [
      "Ak má klient zliatky a mince u seba, môže ich po dohovore doručiť na výkup osobne na centrálu spoločnosti IBIS InGold",
      "Ak má klient zliatky a mince v depozite u IBIS InGold, zašle úradne overenú žiadosť o výkup spoločnosti IBIS InGold",
      "Ak má klient zliatky a mince u seba, zašle ich v poistenej bezpečnostnej obálke spolu so žiadosťou o výkup spoločnosti IBIS InGold",
      "IBIS InGold pošle poverených pracovníkov na výkup priamo ku klientovi domov, kde zliatky a mince prevezmú a doručia na centrálu IBIS InGold"
    ],
    explanation_sk: "Výkup je flexibilný: tovar z depozitu možno predať na základe overenej žiadosti. Fyzicky držaný tovar možno doručiť osobne na centrálu alebo zaslať poštou v bezpečnostnej obálke.",
    correctAnswerIndices: [0, 1, 2],
    category: Category.PRODUCTS
  },
  {
    id: 8,
    text: "Co když zkrachuje společnost IBIS InGold?",
    options: [
      "Pokud by došlo k úpadku společnosti IBIS InGold, pak by klienti jistě o všechno přišli",
      "Pokud by došlo k úpadku společnosti IBIS InGold, pak by byli klienti odškodněni fondem pojištění vkladů",
      "Pokud by došlo k úpadku společnosti IBIS InGold, pak budou klienti uspokojování z výtěžku konkurzního řízení, a to v penězích",
      "Pokud by došlo k úpadku společnosti IBIS InGold, pak by byli klienti odškodněni rafinérií PAMP a mincovnou The ROYAL MINT"
    ],
    explanation: "V případě úpadku obchodní společnosti jsou klienti věřiteli a jsou uspokojováni z majetkové podstaty v rámci insolvenčního řízení.",
    text_sk: "Čo keď skrachuje spoločnosť IBIS InGold?",
    options_sk: [
      "Ak by došlo k úpadku spoločnosti IBIS InGold, potom by klienti určite o všetko prišli",
      "Ak by došlo k úpadku spoločnosti IBIS InGold, potom by boli klienti odškodnení fondom ochrany vkladov",
      "Ak by došlo k úpadku spoločnosti IBIS InGold, potom budú klienti uspokojovaní z výťažku konkurzného konania, a to v peniazoch",
      "Ak by došlo k úpadku spoločnosti IBIS InGold, potom by boli klienti odškodnení rafinériou PAMP a mincovňou The ROYAL MINT"
    ],
    explanation_sk: "V prípade úpadku obchodnej spoločnosti sú klienti veriteľmi a sú uspokojovaní z majetkovej podstaty v rámci insolvenčného konania.",
    correctAnswerIndices: [2],
    category: Category.PRODUCTS
  },
  {
    id: 9,
    text: "Jaká nákupní cena slitků a mincí bude platná pro fixaci na váhovém kontě, pokud IBIS InGold obdrží platbu s korektním variabilním symbolem, resp. číslem smlouvy, od klienta ve středu v 19:30 hodin?",
    options: [
      "Cena slitků a mincí uveřejněná v e-shopu ve stejný den ve středu po 18:00 hodině",
      "Cena slitků a mincí uveřejněná v e-shopu minulé úterý po 11:00 hodině",
      "Cena slitků a mincí uveřejněná v e-shopu ve stejný den ve středu v 11:00 hodin",
      "Cena slitků a mincí uveřejněná v e-shopu minulé úterý po 18:00 hodině"
    ],
    explanation: "Platba připsaná v podvečer (po fixaci) se fixuje za cenu vyhlášenou při nejbližší předchozí fixaci, případně dle specifických podmínek fixací (zde úterý 11:00).",
    text_sk: "Aká nákupná cena zliatkov a mincí bude platná pre fixáciu na váhovom konte, ak IBIS InGold dostane platbu s korektným variabilným symbolom, resp. číslom zmluvy, od klienta v stredu o 19:30 hodín?",
    options_sk: [
      "Cena zliatkov a mincí uverejnená v e-shope v ten istý deň v stredu po 18:00 hodine",
      "Cena zliatkov a mincí uverejnená v e-shope minulý utorok po 11:00 hodine",
      "Cena zliatkov a mincí uverejnená v e-shope v ten istý deň v stredu o 11:00 hodín",
      "Cena zliatkov a mincí uverejnená v e-shope minulý utorok po 18:00 hodine"
    ],
    explanation_sk: "Platba pripísaná v podvečer (po fixácii) sa fixuje za cenu vyhlásenú pri najbližšej predchádzajúcej fixácii, prípadne podľa špecifických podmienok fixácií (tu utorok 11:00).",
    correctAnswerIndices: [1],
    category: Category.PRODUCTS
  },
  {
    id: 10,
    text: "Jaké podmínky platí pro fixaci ceny u Jednorázového nákupu s hodnotou zboží do 100 000 CZK v e-shopu IBIS InGold?",
    options: [
      "Nákupní cena sjednaná v objednávce je garantovaná 4 provozní dny, po této lhůtě je cena stanovena podle aktuální ceny",
      "Nákupní cena sjednaná v objednávce je garantovaná 2 provozní dny, po této lhůtě je cena stanovena podle aktuální ceny",
      "Nákupní cena sjednaná v objednávce je garantovaná 3 provozní dny, po této lhůtě je cena stanovena podle aktuální ceny",
      "Nákupní cena sjednaná v objednávce je garantovaná 1 provozní den, po této lhůtě je cena stanovena podle aktuální ceny"
    ],
    explanation: "Pro menší objednávky do 100 000 Kč je cena garantována 1 provozní den, aby klient stihl provést platbu a cena se nezměnila.",
    text_sk: "Aké podmienky platia pre fixáciu ceny pri Jednorazovom nákupe s hodnotou tovaru do 4 000 EUR v e-shope IBIS InGold?",
    options_sk: [
      "Nákupná cena dohodnutá v objednávke je garantovaná 4 prevádzkové dni, po tejto lehote je cena stanovená podľa aktuálnej ceny",
      "Nákupná cena dohodnutá v objednávke je garantovaná 2 prevádzkové dni, po tejto lehote je cena stanovená podľa aktuálnej ceny",
      "Nákupná cena dohodnutá v objednávke je garantovaná 3 prevádzkové dni, po tejto lehote je cena stanovená podľa aktuálnej ceny",
      "Nákupná cena dohodnutá v objednávke je garantovaná 1 prevádzkový deň, po tejto lehote je cena stanovená podľa aktuálnej ceny"
    ],
    explanation_sk: "Pre menšie objednávky do 4 000 EUR je cena garantovaná 1 prevádzkový deň, aby klient stihol vykonať platbu a cena sa nezmenila.",
    correctAnswerIndices: [3],
    category: Category.PRODUCTS
  },
  {
    id: 12,
    text: "Jakým způsobem se klientovi vrátí případný přeplatek u Jednorázového nákupu v e-shopu IBIS InGold?",
    options: [
      "Na vrácení případného přeplatku nemá klient žádný nárok",
      "Přeplatek bude evidován a bude započten k úhradě další objednávky klienta",
      "Přeplatek bude klientovi poukázán na bankovní účet, ze kterého byla platba odeslána, na základě jeho písemné žádosti s ověřeným podpisem zaslané na centrálu společnosti IBIS InGold",
      "Přeplatek bude klientovi automaticky poukázán na bankovní účet, ze kterého byla platba odeslána"
    ],
    explanation: "Z bezpečnostních důvodů (AML) se přeplatky vrací na základě písemné a ověřené žádosti na účet odesílatele.",
    text_sk: "Akým spôsobom sa klientovi vráti prípadný preplatok pri Jednorazovom nákupe v e-shope IBIS InGold?",
    options_sk: [
      "Na vrátenie prípadného preplatku nemá klient žiadny nárok",
      "Preplatok bude evidovaný a bude započítaný na úhradu ďalšej objednávky klienta",
      "Preplatok bude klientovi poukázaný na bankový účet, z ktorého bola platba odoslaná, na základe jeho písomnej žiadosti s overeným podpisom zaslanej na centrálu spoločnosti IBIS InGold",
      "Preplatok bude klientovi automaticky poukázaný na bankový účet, z ktorého bola platba odoslaná"
    ],
    explanation_sk: "Z bezpečnostných dôvodov (AML) sa preplatky vracajú na základe písomnej a overenej žiadosti na účet odosielateľa.",
    correctAnswerIndices: [2],
    category: Category.PRODUCTS
  },
  {
    id: 13,
    text: "Co to je VERISCAN™ a jaké je pravdivé tvrzení o něm?",
    options: [
      "V České republice ji poprvé představila společnost IBIS InGold",
      "Tato technologie je prvním bezpečnostním systémem pro investiční kovy na světě",
      "VERISCAN™ je stejně spolehlivý jako drahé laboratorní přístroje",
      "VERISCAN™ je unikátní nedestruktivní technologie, která umožňuje okamžité a bezpečné ověření pravosti investičních zlatých slitků a mincí pocházejících ze švýcarské rafinérie PAMP"
    ],
    explanation: "VERISCAN™ je revoluční nedestruktivní technologie pro ověření pravosti, kterou IBIS InGold uvedl na český trh jako první. Je spolehlivá jako laboratorní přístroje a funguje pro slitky PAMP.",
    text_sk: "Čo to je VERISCAN™ a aké je pravdivé tvrdenie o ňom?",
    options_sk: [
      "V Českej republike ju prvýkrát predstavila spoločnosť IBIS InGold",
      "Táto technológia je prvým bezpečnostným systémom pre investičné kovy na svete",
      "VERISCAN™ je rovnako spoľahlivý ako drahé laboratórne prístroje",
      "VERISCAN™ je unikátna nedeštruktívna technológia, ktorá umožňuje okamžité a bezpečné overenie pravosti investičných zlatých zliatkov a mincí pochádzajúcich zo švajčiarskej rafinérie PAMP"
    ],
    explanation_sk: "VERISCAN™ je revolučná nedeštruktívna technológia na overenie pravosti, ktorú IBIS InGold uviedol na český trh ako prvý. Je spoľahlivá ako laboratórne prístroje a funguje pre zliatky PAMP.",
    correctAnswerIndices: [0, 1, 2, 3],
    category: Category.PRODUCTS
  },
  {
    id: 14,
    text: "Co je pravdivé tvrzení o britské královské mincovně The Royal Mint?",
    options: [
      "Řadí se mezi největší a technicky nejmodernější mincovny na světě",
      "The Royal Mint je státní mincovna a je zcela ve vlastnictví Státní pokladny Jeho veličenstva",
      "Její zlaté mince Britannia s ryzostí 999,9 jsou díky svým ochranným prvkům vizuálně nejbezpečnějšími mincemi na světě",
      "The Royal Mint byla založena v roce 886"
    ],
    explanation: "The Royal Mint je jednou z nejmodernějších mincoven, založena byla již v roce 886 a je vlastněna britskou státní pokladnou. Její mince Britannia patří k nejbezpečnějším díky pokročilým ochranným prvkům.",
    text_sk: "Čo je pravdivé tvrdenie o britskej kráľovskej mincovni The Royal Mint?",
    options_sk: [
      "Radí sa medzi najväčšie a technicky najmodernejšie mincovne na svete",
      "The Royal Mint je štátna mincovňa a je úplne vo vlastníctve Štátnej pokladnice Jeho veličenstva",
      "Jej zlaté mince Britannia s rýdzosťou 999,9 sú vďaka svojim ochranným prvkom vizuálne najbezpečnejšími mincami na svete",
      "The Royal Mint bola založená v roku 886"
    ],
    explanation_sk: "The Royal Mint je jednou z najmodernejších mincovní, založená bola už v roku 886 a je vlastnená britskou štátnou pokladnicou. Jej mince Britannia patria k najbezpečnejším vďaka pokročilým ochranným prvkom.",
    correctAnswerIndices: [0, 1, 2, 3],
    category: Category.PRODUCTS
  },
  {
    id: 17,
    text: "Kdy může vzniknout nedoplatek u Jednorázového nákupu v e-shopu IBIS InGold?",
    options: [
      "Nedoplatek u Jednorázového nákupu nemůže vzniknout",
      "Klient uhradí nižší cenu než je fixovaná cena při zpracování jeho platby za objednané zboží",
      "Nedoplatek u Jednorázového nákupu může vzniknout pouze chybou společnosti IBIS InGold",
      "Klient uhradí vyšší cenu než je cena platná při zpracování jeho platby za objednané zboží"
    ],
    explanation: "Nedoplatek vzniká, pokud klient pošle méně peněz, než je cena fixovaná při zpracování. Vzniknout může také chybou, ale systém je nastaven na přesné párování.",
    text_sk: "Kedy môže vzniknúť nedoplatok pri Jednorazovom nákupe v e-shope IBIS InGold?",
    options_sk: [
      "Nedoplatok pri Jednorazovom nákupe nemôže vzniknúť",
      "Klient uhradí nižšiu cenu ako je fixovaná cena pri spracovaní jeho platby za objednaný tovar",
      "Nedoplatok pri Jednorazovom nákupe môže vzniknúť iba chybou spoločnosti IBIS InGold",
      "Klient uhradí vyššiu cenu ako je cena platná pri spracovaní jeho platby za objednaný tovar"
    ],
    explanation_sk: "Nedoplatok vzniká, ak klient pošle menej peňazí, než je cena fixovaná pri spracovaní. Vzniknúť môže tiež chybou, ale systém je nastavený na presné párovanie.",
    correctAnswerIndices: [1, 3], // 2 options marked correct
    category: Category.PRODUCTS
  },
  {
    id: 18,
    text: "Jaká nákupní cena slitků a mincí bude platná pro fixaci na váhovém kontě, pokud IBIS InGold obdrží platbu s korektním variabilním symbolem, resp. číslem smlouvy, od klienta v pondělí v 10:00 hodin?",
    options: [
      "Cena slitků a mincí uveřejněná v e-shopu minulý pátek po 11:00 hodině",
      "Cena slitků a mincí uveřejněná v e-shopu minulý pátek po 18:00 hodině",
      "Cena slitků a mincí uveřejněná v e-shopu minulou neděli po 18:00 hodině",
      "Cena slitků a mincí uveřejněná v e-shopu ve stejný den v pondělí v 11:00 hodin"
    ],
    explanation: "Platba přijatá v pondělí ráno (před novou fixací) se fixuje za poslední známou cenu, což je typicky cena z neděle večer.",
    text_sk: "Aká nákupná cena zliatkov a mincí bude platná pre fixáciu na váhovom konte, ak IBIS InGold dostane platbu s korektným variabilným symbolom, resp. číslom zmluvy, od klienta v pondelok o 10:00 hodín?",
    options_sk: [
      "Cena zliatkov a mincí uverejnená v e-shope minulý piatok po 11:00 hodine",
      "Cena zliatkov a mincí uverejnená v e-shope minulý piatok po 18:00 hodine",
      "Cena zliatkov a mincí uverejnená v e-shope minulú nedeľu po 18:00 hodine",
      "Cena zliatkov a mincí uverejnená v e-shope v ten istý deň v pondelok o 11:00 hodín"
    ],
    explanation_sk: "Platba prijatá v pondelok ráno (pred novou fixáciou) sa fixuje za poslednú známu cenu, čo je typicky cena z nedele večer.",
    correctAnswerIndices: [1],
    category: Category.PRODUCTS
  },
  {
    id: 20,
    text: "Do jaké gramáže se zlaté slitky ze švýcarské rafinerie PAMP vyrábějí ražbou?",
    options: [
      "do 100 g",
      "do 1 000 g",
      "do 1 oz",
      "PAMP nevyrábí ražené slitky"
    ],
    explanation: "Ražené slitky (minted bars) se dělají v gramážích do 100g včetně uncových velikostí (1 oz). Větší slitky (250g, 500g, 1000g) jsou již lité (cast bars).",
    text_sk: "Do akej gramáže sa zlaté zliatky zo švajčiarskej rafinérie PAMP vyrábajú razbou?",
    options_sk: [
      "do 100 g",
      "do 1 000 g",
      "do 1 oz",
      "PAMP nevyrába razené zliatky"
    ],
    explanation_sk: "Razené zliatky (minted bars) sa robia v gramážach do 100g vrátane uncových veľkostí (1 oz). Väčšie zliatky (250g, 500g, 1000g) sú už liate (cast bars).",
    correctAnswerIndices: [0, 1, 2], // 3 correct
    category: Category.PRODUCTS
  },
  {
    id: 23,
    text: "Z jakého bankovního účtu může klient uhradit první platbu pro akceptaci návrhu smlouvy ve výši minimálně 100 CZK?",
    options: [
      "Z bankovního účtu Kupujícího, Manžela/ky uvedeného v návrhu smlouvy",
      "Z bankovního účtu Kupujícího, Manžela/ky, Partnera/ky, Právního zástupce uvedeného v návrhu smlouvy",
      "Z bankovního účtu Kupujícího, Manžela/ky, Partnera/ky uvedeného v návrhu smlouvy",
      "Z bankovního účtu Kupujícího uvedeného v návrhu smlouvy"
    ],
    explanation: "První platba slouží k identifikaci klienta, proto musí odejít z účtu majitele (nebo manžela/ky), aby se ověřila identita dle AML.",
    text_sk: "Z akého bankového účtu môže klient uhradiť prvú platbu pre akceptáciu návrhu zmluvy vo výške minimálne 4 EUR?",
    options_sk: [
      "Z bankového účtu Kupujúceho, Manžela/ky uvedeného v návrhu zmluvy",
      "Z bankového účtu Kupujúceho, Manžela/ky, Partnera/ky, Právneho zástupcu uvedeného v návrhu zmluvy",
      "Z bankového účtu Kupujúceho, Manžela/ky, Partnera/ky uvedeného v návrhu zmluvy",
      "Z bankového účtu Kupujúceho uvedeného v návrhu zmluvy"
    ],
    explanation_sk: "Prvá platba slúži na identifikáciu klienta, preto musí odísť z účtu majiteľa (alebo manžela/ky), aby sa overila identita podľa AML.",
    correctAnswerIndices: [3], // Changed to match PDF
    category: Category.PRODUCTS
  },
  {
    id: 24,
    text: "Jaká nákupní cena slitků a mincí bude platná pro fixaci na váhovém kontě, pokud IBIS InGold obdrží platbu s korektním variabilním symbolem, resp. číslem smlouvy, od klienta v sobotu v 16:00 hodin?",
    options: [
      "Cena slitků a mincí uveřejněná v e-shopu následující pondělí po 18:00 hodině",
      "Cena slitků a mincí uveřejněná v e-shopu minulý pátek po 11:00 hodině",
      "Cena slitků a mincí uveřejněná v e-shopu minulý pátek po 18:00 hodině",
      "Cena slitků a mincí uveřejněná v e-shopu ve stejný den v sobotu v 11:00 hodin"
    ],
    explanation: "Platby o víkendu se zpracují a fixují až při nejbližším obchodním dni a příslušné fixaci, což je pondělí podvečer.",
    text_sk: "Aká nákupná cena zliatkov a mincí bude platná pre fixáciu na váhovom konte, ak IBIS InGold dostane platbu s korektným variabilným symbolom, resp. číslom zmluvy, od klienta v sobotu o 16:00 hodín?",
    options_sk: [
      "Cena zliatkov a mincí uverejnená v e-shope nasledujúci pondelok po 18:00 hodine",
      "Cena zliatkov a mincí uverejnená v e-shope minulý piatok po 11:00 hodine",
      "Cena zliatkov a mincí uverejnená v e-shope minulý piatok po 18:00 hodine",
      "Cena zliatkov a mincí uverejnená v e-shope v ten istý deň v sobotu o 11:00 hodín"
    ],
    explanation_sk: "Platby cez víkend sa spracujú a fixujú až v najbližší obchodný deň a pri príslušnej fixácii, čo je pondelok podvečer.",
    correctAnswerIndices: [2],
    category: Category.PRODUCTS
  },
  {
    id: 31,
    text: "Proč musí být zlaté slitky PAMP při zpětném výkupu v původním obalu?",
    options: [
      "V případě doručení poškozeného zboží může společnost odmítnout nebo stanovit nižší cenu",
      "Chrání slitek proti poškození, protože je zlato velmi měkké",
      "Zlaté slitky jsou zataveny v bezpečnostním CertiPAMP obalu a ten je jejich nedílnou součástí",
      "Obal obsahuje základní údaje o slitku včetně jeho čísla a certifikát pravosti"
    ],
    explanation: "CertiPAMP obal je nedílnou součástí slitku: chrání měkké zlato, obsahuje certifikát pravosti a číslo. Jeho poškození znehodnocuje investici a může vést ke snížení výkupní ceny.",
    text_sk: "Prečo musia byť zlaté zliatky PAMP pri spätnom výkupe v pôvodnom obale?",
    options_sk: [
      "V prípade doručenia poškodeného tovaru môže spoločnosť odmietnuť alebo stanoviť nižšiu cenu",
      "Chráni zliatok proti poškodeniu, pretože je zlato veľmi mäkké",
      "Zlaté zliatky sú zatavené v bezpečnostnom CertiPAMP obale a ten je ich neoddeliteľnou súčasťou",
      "Obal obsahuje základné údaje o zliatku vrátane jeho čísla a certifikát pravosti"
    ],
    explanation_sk: "CertiPAMP obal je neoddeliteľnou súčasťou zliatku: chráni mäkké zlato, obsahuje certifikát pravosti a číslo. Jeho poškodenie znehodnocuje investíciu a môže viesť k zníženiu výkupnej ceny.",
    correctAnswerIndices: [0, 1, 2, 3],
    category: Category.PRODUCTS
  },
  {
    id: 36,
    text: "Jaké garance poskytuje klientům společnost IBIS InGold?",
    options: [
      "Garance dosažení výnosu",
      "Garance pravosti slitků a mincí nakoupených u IBIS InGold",
      "Garance nulové volatility",
      "Garance zpětného výkupu slitků a mincí nakoupených u IBIS InGold"
    ],
    explanation: "IBIS InGold garantuje to nejdůležitější: pravost prodávaného zboží (díky přímým vztahům s rafinériemi) a jistotu zpětného výkupu, čímž zajišťuje likviditu.",
    text_sk: "Aké garancie poskytuje klientom spoločnosť IBIS InGold?",
    options_sk: [
      "Garancia dosiahnutia výnosu",
      "Garancia pravosti zliatkov a mincí nakúpených v IBIS InGold",
      "Garancia nulovej volatility",
      "Garancia spätného výkupu zliatkov a mincí nakúpených v IBIS InGold"
    ],
    explanation_sk: "IBIS InGold garantuje to najdôležitejšie: pravosť predávaného tovaru (vďaka priamym vzťahom s rafinériami) a istotu spätného výkupu, čím zaisťuje likviditu.",
    correctAnswerIndices: [1, 3], // 2 Correct
    category: Category.PRODUCTS
  },
  {
    id: 39,
    text: "U kterých našich produktů je klient prvním majitelem slitku nebo mince?",
    options: [
      "iiplanGold, iiplanRentier",
      "iiplanMax",
      "Jednorázový nákup",
      "iiplanProfi"
    ],
    explanation: "U všech produktů IBIS InGold (Jednorázový nákup i spořící plány iiplan) je klient vždy prvním držitelem investičního slitku nebo mince přímo od rafinérie/mincovny. Zboží neobíhá mezi klienty.",
    text_sk: "Pri ktorých našich produktoch je klient prvým majiteľom zliatku alebo mince?",
    options_sk: [
      "iiplanGold, iiplanRentier",
      "iiplanMax",
      "Jednorazový nákup",
      "iiplanProfi"
    ],
    explanation_sk: "Pri všetkých produktoch IBIS InGold (Jednorazový nákup aj sporiace plány iiplan) je klient vždy prvým držiteľom investičného zliatku alebo mince priamo od rafinérie/mincovne. Tovar neobieha medzi klientmi.",
    correctAnswerIndices: [0, 1, 2, 3],
    category: Category.PRODUCTS
  },
  {
    id: 47,
    text: "Co může klient udělat s naspořenými gramy u smlouvy iiplanGold?",
    options: [
      "Provést převod zlata na jiné zlaté konto iiplanGold, iiplanRentier nebo iiplanMax",
      "Provést výplatu ve formě fyzického zlata od 1 do 1 000 g",
      "Provést výplatu v penězích na svůj bankovní účet",
      "Všechny možnosti jsou správné"
    ],
    explanation: "Systém je velmi flexibilní. Naspořené gramy lze kdykoliv odprodat (výplata peněz), vybrat ve fyzickém zlatě (od 1g slitku) nebo převést na jinou smlouvu v rámci rodiny či firmy.",
    text_sk: "Čo môže klient urobiť s nasporenými gramami pri zmluve iiplanGold?",
    options_sk: [
      "Vykonať prevod zlata na iné zlaté konto iiplanGold, iiplanRentier alebo iiplanMax",
      "Vykonať výplatu vo forme fyzického zlata od 1 do 1 000 g",
      "Vykonať výplatu v peniazoch na svoj bankový účet",
      "Všetky možnosti sú správne"
    ],
    explanation_sk: "Systém je veľmi flexibilný. Nasporené gramy možno kedykoľvek odpredať (výplata peňazí), vybrať vo fyzickom zlate (od 1g zliatku) alebo previesť na inú zmluvu v rámci rodiny či firmy.",
    correctAnswerIndices: [0, 1, 2], // 3 correct
    category: Category.PRODUCTS
  },
  {
    id: 48,
    text: "Kdo je typický klient pro iiplanRentier®?",
    options: [
      "Klient chce využít depozit zdarma",
      "Klient chce zlato nebo stříbro okamžitě fyzicky doručit",
      "Klient chce zlato nakupovat postupně",
      "Klient chce využít výplatu pravidelné renty například v důchodu nebo dětem během studia"
    ],
    explanation: "Rentier je ideální pro ty, kteří chtějí postupně budovat majetek, využívat bezplatný depozit a v budoucnu čerpat pravidelnou rentu (výplatu) v penězích.",
    text_sk: "Kto je typický klient pre iiplanRentier®?",
    options_sk: [
      "Klient chce využiť depozit zadarmo",
      "Klient chce zlato alebo striebro okamžite fyzicky doručiť",
      "Klient chce zlato nakupovať postupne",
      "Klient chce využiť výplatu pravidelnej renty napríklad v dôchodku alebo deťom počas štúdia"
    ],
    explanation_sk: "Rentier je ideálny pre tých, ktorí chcú postupne budovať majetok, využívať bezplatný depozit a v budúcnosti čerpať pravidelnú rentu (výplatu) v peniazoch.",
    correctAnswerIndices: [0, 1, 2, 3],
    category: Category.PRODUCTS
  },
  {
    id: 52,
    text: "Co je předmětem koupě u smlouvy iiplanRentier® a kdy může dojít k jeho expedici zákazníkovi?",
    options: [
      "10 oz zlatý ražený slitek Fortuna, rafinérie PAMP, první kus může být expedován nejdříve po 12 měsících od sjednání smlouvy, další po 12 měsících od expedice předešlého kusu",
      "10 oz zlatý ražený slitek Fortuna, rafinérie PAMP, každý jednotlivý kus může být expedován kdykoliv bez omezení",
      "1 kg zlatý litý slitek PAMP, první kus může být expedován nejdříve po 12 měsících od akceptace smlouvy, další po 12 měsících od expedice předešlého kusu",
      "10 oz zlatý ražený slitek Fortuna, rafinérie PAMP, první kus může být expedován nejdříve po 12 měsících od akceptace smlouvy, další po 12 mesiacoch od expedice předešlého kusu"
    ],
    explanation: "Rentier má specifické podmínky pro vydání fyzického kovu, aby se podpořilo dlouhodobé spoření a čerpání renty, ne okamžitý odběr.",
    text_sk: "Čo je predmetom kúpy pri zmluve iiplanRentier® a kedy môže dôjsť k jeho expedícii zákazníkovi?",
    options_sk: [
      "10 oz zlatý razený zliatok Fortuna, rafinéria PAMP, prvý kus môže byť expedovaný najskôr po 12 mesiacoch od dojednania zmluvy, ďalší po 12 mesiacoch od expedície predchádzajúceho kusu",
      "10 oz zlatý razený zliatok Fortuna, rafinéria PAMP, každý jednotlivý kus môže byť expedovaný kedykoľvek bez obmedzenia",
      "1 kg zlatý liaty zliatok PAMP, prvý kus môže byť expedovaný najskôr po 12 mesiacoch od akceptácie zmluvy, ďalší po 12 mesiacoch od expedície predchádzajúceho kusu",
      "10 oz zlatý razený zliatok Fortuna, rafinéria PAMP, prvý kus môže byť expedovaný najskôr po 12 mesiacoch od akceptácie zmluvy, ďalší po 12 mesiacoch od expedície predchádzajúceho kusu"
    ],
    explanation_sk: "Rentier má špecifické podmienky pre vydanie fyzického kovu, aby sa podporilo dlhodobé sporenie a čerpanie renty, nie okamžitý odber.",
    correctAnswerIndices: [1],
    category: Category.PRODUCTS
  },
  {
    id: 55,
    text: "Kdo je typický klient pro iiplanMax®?",
    options: [
      "Klient (fyzická osoba podnikatel nebo právnická osoba) chce využít systém plateb ve zlatě InGold PAY",
      "Klient (fyzická osoba podnikatel nebo právnická osoba) chce mít svůj firemní majetek uložený částečně ve zlatě",
      "Klient chce zlato nebo stříbro okamžitě fyzicky doručit",
      "Klient chce využít výplatu pravidelné renty například v důchodu nebo dětem během studia"
    ],
    explanation: "iiplanMax je určen pro bonitní klienty a firmy. Umožňuje efektivní správu firemního majetku, využití zlata pro platby (InGold PAY), ale i standardní fyzický odběr nebo čerpání renty.",
    text_sk: "Kto je typický klient pre iiplanMax®?",
    options_sk: [
      "Klient (fyzická osoba podnikateľ alebo právnická osoba) chce využiť systém platieb v zlate InGold PAY",
      "Klient (fyzická osoba podnikateľ alebo právnická osoba) chce mať svoj firemný majetok uložený čiastočne v zlate",
      "Klient chce zlato alebo striebro okamžite fyzicky doručiť",
      "Klient chce využiť výplatu pravidelnej renty napríklad v dôchodku alebo deťom počas štúdia"
    ],
    explanation_sk: "iiplanMax je určený pre bonitných klientov a firmy. Umožňuje efektívnu správu firemného majetku, využitie zlata na platby (InGold PAY), ale aj štandardný fyzický odber alebo čerpanie renty.",
    correctAnswerIndices: [0, 1, 2, 3], // All 4 correct
    category: Category.PRODUCTS
  },
  {
    id: 56,
    text: "Jakou výhodu přináší klientovi iiplanProfi®?",
    options: [
      "Možnost placení zlatem u obchodníků",
      "Možnost postupného nákupu zvoleného slitku nebo mince",
      "Možnost depozitu zdarma",
      "Možnost převodu zlata na jiné zlaté konto"
    ],
    explanation: "iiplanProfi v sobě kombinuje výhody postupného nákupu konkrétního slitku/mince, bezplatného depozitu a flexibility převodů na jiná konta.",
    text_sk: "Akú výhodu prináša klientovi iiplanProfi®?",
    options_sk: [
      "Možnosť platenia zlatom u obchodníkov",
      "Možnosť postupného nákupu zvoleného zliatku alebo mince",
      "Možnosť depozitu zadarmo",
      "Možnosť prevodu zlata na iné zlaté konto"
    ],
    explanation_sk: "iiplanProfi v sebe kombinuje výhody postupného nákupu konkrétneho zliatku/mince, bezplatného depozitu a flexibility prevodov na iné kontá.",
    correctAnswerIndices: [1, 2, 3], // 3 Correct
    category: Category.PRODUCTS
  },
  {
    id: 58,
    text: "Co je pravdivé tvrzení?",
    options: [
      "Společnost IBIS InGold garantuje zpětný výkup prodaných investičních kovů přímo ve smlouvě",
      "Zlatý investiční slitek PAMP 10 oz (311,00 g) je v nabídce Jednorázového nákupu",
      "Zlatý investiční slitek PAMP litý 1 kg je v nabídce Jednorázového nákupu",
      "Ražený zlatý investiční slitek Fortuna, rafinérie PAMP, o hmotnosti 1 kg je v nabídce Jednorázového nákupu"
    ],
    explanation: "Garance výkupu je smluvně zakotvena, což dává klientovi jistotu likvidity.",
    text_sk: "Čo je pravdivé tvrdenie?",
    options_sk: [
      "Spoločnosť IBIS InGold garantuje spätný výkup predaných investičných kovov priamo v zmluve",
      "Zlatý investičný zliatok PAMP 10 oz (311,00 g) je v ponuke Jednorazového nákupu",
      "Zlatý investičný zliatok PAMP liaty 1 kg je v ponuke Jednorazového nákupu",
      "Razený zlatý investičný zliatok Fortuna, rafinéria PAMP, s hmotnosťou 1 kg je v ponuke Jednorazového nákupu"
    ],
    explanation_sk: "Garancia výkupu je zmluvne zakotvená, čo dáva klientovi istotu likvidity.",
    correctAnswerIndices: [0],
    category: Category.PRODUCTS
  },
  {
    id: 80,
    text: "Uveďte správné argumenty na otázku: Jakou má klient jistotu, že je zlato pravé?",
    options: [
      "Společnost IBIS InGold je oficiální partner švýcarské rafinérie PAMP a britské mincovny The Royal Mint včetně garance prvodržitelství",
      "Jistotu nemá u žádného obchodníka",
      "Investiční zlato z rafinéri PAMP je ověřitelné technologii VERISCAN™ a u slitků a mincí The Royal Mint jsou zapracované bezpečnostní prvky, jako mikrotexty, animace změny kresby na mincích atd.",
      "Falešné zlato neexistuje, jsou to jen fámy"
    ],
    explanation: "Přímé partnerství s rafinérií (prvodržitelství) a ověřitelné ochranné prvky jsou nejvyšší garancí pravosti.",
    text_sk: "Uveďte správne argumenty na otázku: Akú má klient istotu, že je zlato pravé?",
    options_sk: [
      "Spoločnosť IBIS InGold je oficiálny partner švajčiarskej rafinérie PAMP a britskej mincovne The Royal Mint vrátane garancie prvodržiteľstva",
      "Istotu nemá u žiadneho obchodníka",
      "Investičné zlato z rafinérie PAMP je overiteľné technológiou VERISCAN™ a pri zliatkoch a minciach The Royal Mint sú zapracované bezpečnostné prvky, ako mikrotexty, animácie zmeny kresby na minciach atď.",
      "Falošné zlato neexistuje, sú to len fámy"
    ],
    explanation_sk: "Priame partnerstvo s rafinériou (prvodržiteľstvo) a overiteľné ochranné prvky sú najvyššou garanciou pravosti.",
    correctAnswerIndices: [0],
    category: Category.PRODUCTS
  },

  // --- POPLATKY A NÁKLADY (FEES_COSTS) ---
  {
    id: 26,
    text: "Které tvrzení ohledně spreadu je pravdivé?",
    options: [
      "Výše spreadu není důležitá pro vyhodnocení výhodnosti nabídky",
      "Nejnižší spread je pro klienta nejvýhodnější",
      "U zlata není žádný spread",
      "Nejvyšší spread je pro klienta nejvýhodnější"
    ],
    explanation: "Nejnižší spread je pro klienta nejvýhodnější, protože znamená menší rozdíl mezi nákupní a výkupní cenou.",
    text_sk: "Ktoré tvrdenie ohľadom spreadu je pravdivé?",
    options_sk: [
      "Výška spreadu nie je dôležitá pre vyhodnotenie výhodnosti ponuky",
      "Najnižší spread je pre klienta najvýhodnejší",
      "Pri zlate nie je žiadny spread",
      "Najvyšší spread je pre klienta najvýhodnejší"
    ],
    explanation_sk: "Najnižší spread je pre klienta najvýhodnejší, pretože znamená menší rozdiel medzi nákupnou a výkupnou cenou.",
    correctAnswerIndices: [1], // Updated based on PDF
    category: Category.FEES_COSTS
  },
  {
    id: 27,
    text: "Které tvrzení ohledně spreadu je pravdivé?",
    options: [
      "Při nižším spreadu trvá klientovi kratší čas, než začne být jeho investice zisková",
      "Při vyšším spreadu trvá klientovi kratší čas, než začne být jeho investice zisková",
      "Při vyšším spreadu trvá klientovi delší čas, než začne být jeho investice zisková",
      "Při nižším spreadu trvá klientovi delší čas, než začne být jeho investice zisková"
    ],
    explanation: "Nižší spread (rozdíl mezi nákupní a výkupní cenou) znamená, že cena zlata musí vzrůst o menší procento, aby se klient dostal do plusu.",
    text_sk: "Ktoré tvrdenie ohľadom spreadu je pravdivé?",
    options_sk: [
      "Pri nižšom spreade trvá klientovi kratší čas, kým začne byť jeho investícia zisková",
      "Pri vyššom spreade trvá klientovi kratší čas, kým začne byť jeho investícia zisková",
      "Pri vyššom spreade trvá klientovi dlhší čas, kým začne byť jeho investícia zisková",
      "Pri nižšom spreade trvá klientovi dlhší čas, kým začne byť jeho investícia zisková"
    ],
    explanation_sk: "Nižší spread (rozdiel medzi nákupnou a výkupnou cenou) znamená, že cena zlata musí vzrásť o menšie percento, aby sa klient dostal do plusu.",
    correctAnswerIndices: [0],
    category: Category.FEES_COSTS
  },
  {
    id: 29,
    text: "Které tvrzení ohledně spreadu je pravdivé?",
    options: [
      "Nejvyšší spread je obvykle u nejvyšších gramáží",
      "Nejnižší spread je obvykle u nejnižších gramáží",
      "Nejnižší spread je obvykle u nejvyšších gramáží",
      "Nejvyšší spread je obvykle u nejnižších gramáží"
    ],
    explanation: "U větších slitků (vyšší gramáž) jsou výrobní náklady na gram nižší, proto mají i nižší spread (jsou výhodnější na gram).",
    text_sk: "Ktoré tvrdenie ohľadom spreadu je pravdivé?",
    options_sk: [
      "Najvyšší spread je obvykle pri najvyšších gramážach",
      "Najnižší spread je obvykle pri najnižších gramážach",
      "Najnižší spread je obvykle pri najvyšších gramážach",
      "Najvyšší spread je obvykle pri najnižších gramážach"
    ],
    explanation_sk: "Pri väčších zliatkoch (vyššia gramáž) sú výrobné náklady na gram nižšie, preto majú aj nižší spread (sú výhodnejšie na gram).",
    correctAnswerIndices: [2],
    category: Category.FEES_COSTS
  },
  {
    id: 32,
    text: "Na jaké konto se připisuje gramová prémie za platbu zlatem ve výši 0,5 %?",
    options: [
      "Na iiplanMax®, iiplanGold®, iiplanRentier®",
      "Na iiplanGold®, iiplanRentier®",
      "Na iiplanMax®",
      "Na iiplanGold®"
    ],
    explanation: "Bonus 0.5% se připisuje u iiplanMax, ale dle testu je správně iiplanMax.",
    text_sk: "Na aké konto sa pripisuje gramová prémia za platbu zlatom vo výške 0,5 %?",
    options_sk: [
      "Na iiplanMax®, iiplanGold®, iiplanRentier®",
      "Na iiplanGold®, iiplanRentier®",
      "Na iiplanMax®",
      "Na iiplanGold®"
    ],
    explanation_sk: "Bonus 0,5% sa pripisuje pri iiplanMax, ale podľa testu je správne iiplanMax.",
    correctAnswerIndices: [2], // Updated per PDF check
    category: Category.FEES_COSTS
  },
  {
    id: 33,
    text: "Kdy je klientovi vrácena poměrná část VCN u smlouvy iiplanGold?",
    options: [
      "Při výplatě v kovu a převodu gramů na konto iiplanGold®, iiplanRentier®",
      "Při výplatě v kovu a převodu gramů na konto iiplanMax®",
      "Při výplatě v kovu a převodu gramů na konto iiplanGold®",
      "Při výplatě v kovu a převodu gramů na konto iiplanGold®, iiplanRentier®, iiplanMax®"
    ],
    explanation: "Dle podmínek iiplanGold se poměrná část VCN vrací formou prémie při určitých transakcích, typicky při výplatě kovu nebo převodu v rámci stejného typu produktu.",
    text_sk: "Kedy je klientovi vrátená pomerná časť VCN pri zmluve iiplanGold?",
    options_sk: [
      "Pri výplate v kove a prevode gramov na konto iiplanGold®, iiplanRentier®",
      "Pri výplate v kove a prevode gramov na konto iiplanMax®",
      "Pri výplate v kove a prevode gramov na konto iiplanGold®",
      "Pri výplate v kove a prevode gramov na konto iiplanGold®, iiplanRentier®, iiplanMax®"
    ],
    explanation_sk: "Podľa podmienok iiplanGold sa pomerná časť VCN vracia formou prémie pri určitých transakciách, typicky pri výplate kovu alebo prevode v rámci rovnakého typu produktu.",
    correctAnswerIndices: [2],
    category: Category.FEES_COSTS
  },
  {
    id: 34,
    text: "Jaká bude výše Odměny prodávajícímu za obstarání prodeje (Success Fee) u iiplanGold?",
    options: [
      "10 % z výnosu, který je vypočten jako kladný rozdíl mezi Výkupní cenou kovu a původní Kupní cenou gramů, které se vykupují při Výplatě v penězích, Výplatě v kovu a převodu gramů (výnos nad 4 %)",
      "10 % z výnosu, který je vypočten jako kladný rozdíl mezi Výkupní cenou kovu a původní Kupní cenou gramů, které se vykupují pouze při Výplatě v penězích (výnos nad 4 %)",
      "15 % z výnosu, který je vypočten jako kladný rozdíl mezi Výkupní cenou kovu a původní Kupní cenou gramů, které se vykupují při Výplatě v penězích, Výplatě v kovu a převodu gramů (výnos nad 4 %)",
      "10 % z výnosu, který je vypočten jako kladný rozdíl mezi Výkupní cenou kovu a původní Kupní cenou gramů, které se vykupují při Výplatě v penězích, Výplatě v kovu, převodu gramů nebo při dodání předmětu koupě (výnos nad 4 %)"
    ],
    explanation: "Success Fee je 10 % ze zisku, ale aplikuje se pouze tehdy, pokud zhodnocení zlata přesáhne 4 % (tzv. hurdle rate).",
    text_sk: "Aká bude výška Odmeny predávajúcemu za obstaranie predaja (Success Fee) pri iiplanGold?",
    options_sk: [
      "10 % z výnosu, ktorý je vypočítaný ako kladný rozdiel medzi Výkupnou cenou kovu a pôvodnou Kúpnou cenou gramov, ktoré sa vykupujú pri Výplate v peniazoch, Výplate v kove a prevode gramov (výnos nad 4 %)",
      "10 % z výnosu, ktorý je vypočítaný ako kladný rozdiel medzi Výkupnou cenou kovu a pôvodnou Kúpnou cenou gramov, ktoré sa vykupujú iba pri Výplate v peniazoch (výnos nad 4 %)",
      "15 % z výnosu, ktorý je vypočítaný ako kladný rozdiel medzi Výkupnou cenou kovu a pôvodnou Kúpnou cenou gramov, ktoré sa vykupujú pri Výplate v peniazoch, Výplate v kove a prevode gramov (výnos nad 4 %)",
      "10 % z výnosu, ktorý je vypočítaný ako kladný rozdiel medzi Výkupnou cenou kovu a pôvodnou Kúpnou cenou gramov, ktoré sa vykupujú pri Výplate v peniazoch, Výplate v kove, prevode gramov alebo pri dodaní predmetu kúpy (výnos nad 4 %)"
    ],
    explanation_sk: "Success Fee je 10 % zo zisku, ale aplikuje sa iba vtedy, ak zhodnotenie zlata presiahne 4 % (tzv. hurdle rate).",
    correctAnswerIndices: [0],
    category: Category.FEES_COSTS
  },
  {
    id: 35,
    text: "Jaká bude výše Odměny prodávajícímu za obstarávání nákupů investičního zlata (Management Fee) u smlouvy iiplanRentier®?",
    options: [
      "0 % ročně, neuplatňuje se",
      "Pro část do 500 g ve výši 0,9125 % ročně, pro část nad 500 g 0 % ročně",
      "Pro celých 1 000 g ve výši 0,9125 % ročně, pro část nad 1 000 g 0 % ročně",
      "Pro část do 500 g ve výši 0,9125 % měsíčně, pro část nad 500 g 0 % měsíčně"
    ],
    explanation: "U iiplanRentier se Management Fee neuplatňuje (0 %).",
    text_sk: "Aká bude výška Odmeny predávajúcemu za obstarávanie nákupov investičného zlata (Management Fee) pri zmluve iiplanRentier®?",
    options_sk: [
      "0 % ročne, neuplatňuje sa",
      "Pre časť do 500 g vo výške 0,9125 % ročne, pre časť nad 500 g 0 % ročne",
      "Pre celých 1 000 g vo výške 0,9125 % ročne, pre časť nad 1 000 g 0 % ročne",
      "Pre časť do 500 g vo výške 0,9125 % mesačne, pre časť nad 500 g 0 % mesačne"
    ],
    explanation_sk: "Pri iiplanRentier sa Management Fee neuplatňuje (0 %).",
    correctAnswerIndices: [0],
    category: Category.FEES_COSTS
  },
  {
    id: 37,
    text: "Jak se klientovi vrací Vstupní cenové navýšení (VCN)?",
    options: [
      "Vstupní cenové navýšení se klientovi vrací ve formě VCN",
      "Vstupní cenové navýšení se klientovi vrací ve formě Výkupní prémie iiplan® při výkupu předmětu koupě. Dále se vrací při výplatě v kovu a při převodu gramů na stejný typ smlouvy ze smlouvy iiplanGold®, iiplanRentier® i iiplanMax®, ve formě Výkupní prémie iiplan®, která je součástí Celkové výkupní ceny.",
      "Vstupní cenové navýšení se klientovi vrací ve formě Výkupní ceny kovu",
      "Vstupní cenové navýšení se klientovi vrací ve formě Výkupní prémie IBIS při výkupu předmětu koupě. Dále se vrací při výplatě v kovu a při převodu gramů na stejný typ smlouvy ze smlouvy iiplanGold®, iiplanRentier® i iiplanMax®, ve formě Výkupní prémie IBIS, která je součástí Celkové výkupní ceny."
    ],
    explanation: "VCN se vrací formou prémie při splnění podmínek (výkup, převod) jako součást výkupní ceny.",
    text_sk: "Ako sa klientovi vracia Vstupné cenové navýšenie (VCN)?",
    options_sk: [
      "Vstupné cenové navýšenie sa klientovi vracia vo forme VCN",
      "Vstupné cenové navýšenie sa klientovi vracia vo forme Výkupnej prémie iiplan® pri výkupe predmetu kúpy. Ďalej sa vracia pri výplate v kove a pri prevode gramov na rovnaký typ zmluvy zo zmluvy iiplanGold®, iiplanRentier® aj iiplanMax®, vo forme Výkupnej prémie iiplan®, ktorá je súčasťou Celkovej výkupnej ceny.",
      "Vstupné cenové navýšenie sa klientovi vracia vo forme Výkupnej ceny kovu",
      "Vstupné cenové navýšenie sa klientovi vracia vo forme Výkupnej prémie IBIS pri výkupe predmetu kúpy. Ďalej sa vracia pri výplate v kove a pri prevode gramov na rovnaký typ zmluvy zo zmluvy iiplanGold®, iiplanRentier® aj iiplanMax®, vo forme Výkupnej prémie IBIS, ktorá je súčasťou Celkovej výkupnej ceny."
    ],
    explanation_sk: "VCN sa vracia formou prémie pri splnení podmienok (výkup, prevod) ako súčasť výkupnej ceny.",
    correctAnswerIndices: [1], // Updated based on PDF
    category: Category.FEES_COSTS
  },
  {
    id: 38,
    text: "Jaká bude výše Odměny prodávajícímu za obstarání prodeje investičního zlata (Success Fee) při výplatě z Váhového konta u smlouvy iiplanRentier®?",
    options: [
      "10 % z výnosu, který je vypočten jako kladný rozdíl mezi Výkupní cenou kovu a původní Kupní cenou gramů, které se vykupují pouze při Výplatě v penězích (výnos nad 9 %)",
      "10 % z výnosu, který je vypočten jako kladný rozdíl mezi Výkupní cenou kovu a původní Kupní cenou gramů, které se vykupují při Výplatě v kovu, převodu gramů nebo při dodání předmětu koupě (výnos nad 9 %)",
      "Neuplatňuje se",
      "10 % z výnosu, který je vypočten jako kladný rozdíl mezi Výkupní cenou kovu a původní Kupní cenou gramů, které se vykupují při Výplatě v penězích, Výplatě v kovu a převodu gramů (výnos nad 9 %)"
    ],
    explanation: "U iiplanRentier se Success Fee neuplatňuje.",
    text_sk: "Aká bude výška Odmeny predávajúcemu za obstaranie predaja investičného zlata (Success Fee) pri výplate z Váhového konta pri zmluve iiplanRentier®?",
    options_sk: [
      "10 % z výnosu, ktorý je vypočítaný ako kladný rozdiel medzi Výkupnou cenou kovu a pôvodnou Kúpnou cenou gramov, ktoré sa vykupujú iba pri Výplate v peniazoch (výnos nad 9 %)",
      "10 % z výnosu, ktorý je vypočítaný ako kladný rozdiel medzi Výkupnou cenou kovu a pôvodnou Kúpnou cenou gramov, ktoré sa vykupujú pri Výplate v kove, prevode gramov alebo pri dodaní predmetu kúpy (výnos nad 9 %)",
      "Neuplatňuje sa",
      "10 % z výnosu, ktorý je vypočítaný ako kladný rozdiel medzi Výkupnou cenou kovu a pôvodnou Kúpnou cenou gramov, ktoré sa vykupujú pri Výplate v peniazoch, Výplate v kove a prevode gramov (výnos nad 9 %)"
    ],
    explanation_sk: "Pri iiplanRentier sa Success Fee neuplatňuje.",
    correctAnswerIndices: [2],
    category: Category.FEES_COSTS
  },
  {
    id: 40,
    text: "Co platí u zpětného výkupu předmětu koupě (1 kg zlatý litý slitek PAMP) do 5 let od dodání slitku u smlouvy iiplanGold®?",
    options: [
      "spread 4 %, vrací se VCN za každý slitek",
      "spread 0 %, nevrací se VCN",
      "spread 0 %, vrací se VCN za každý slitek",
      "spread 4 %, nevrací se VCN"
    ],
    explanation: "Při rychlém zpětném výkupu (do 5 let) je sice spread 0% (výhodné), ale nevrací se VCN (bonus).",
    text_sk: "Čo platí pri spätnom výkupe predmetu kúpy (1 kg zlatý liaty zliatok PAMP) do 5 rokov od dodania zliatku pri zmluve iiplanGold®?",
    options_sk: [
      "spread 4 %, vracia sa VCN za každý zliatok",
      "spread 0 %, nevracia sa VCN",
      "spread 0 %, vracia sa VCN za každý zliatok",
      "spread 4 %, nevracia sa VCN"
    ],
    explanation_sk: "Pri rýchlom spätnom výkupe (do 5 rokov) je síce spread 0% (výhodné), ale nevracia sa VCN (bonus).",
    correctAnswerIndices: [3],
    category: Category.FEES_COSTS
  },
  {
    id: 41,
    text: "Jaký je spread při výplatě v penězích z Váhového konta ve smlouvě iiplanGold®?",
    options: [
      "0 %",
      "cca 9 %",
      "4 %",
      "3 %"
    ],
    explanation: "Standardní spread při výkupu peněz z iiplanGold je 4%.",
    text_sk: "Aký je spread pri výplate v peniazoch z Váhového konta v zmluve iiplanGold®?",
    options_sk: [
      "0 %",
      "cca 9 %",
      "4 %",
      "3 %"
    ],
    explanation_sk: "Štandardný spread pri výkupe peňazí z iiplanGold je 4%.",
    correctAnswerIndices: [2],
    category: Category.FEES_COSTS
  },
  {
    id: 42,
    text: "Jaký je spread při výplatě v kovu z Váhového konta ve smlouvě iiplanGold®?",
    options: [
      "0 %",
      "cca 4 %",
      "4 %",
      "3 %"
    ],
    explanation: "Při výběru ve fyzickém zlatě je spread 0%.",
    text_sk: "Aký je spread pri výplate v kove z Váhového konta v zmluve iiplanGold®?",
    options_sk: [
      "0 %",
      "cca 4 %",
      "4 %",
      "3 %"
    ],
    explanation_sk: "Pri výbere vo fyzickom zlate je spread 0%.",
    correctAnswerIndices: [0],
    category: Category.FEES_COSTS
  },
  {
    id: 43,
    text: "Jaký je spread při převodu gramů z Váhového konta ve smlouvě iiplanGold®?",
    options: [
      "Na konto iiplanGold®, iiplanRentier®, iiplanMax® cca 1 %",
      "Na konto iiplanGold® 0 %",
      "Na konto iiplanGold®, iiplanRentier®, iiplanMax® 0 %",
      "Na konto iiplanGold® cca 1 %"
    ],
    explanation: "Převod v rámci stejného typu produktu (Gold -> Gold) je bez spreadu (0%).",
    text_sk: "Aký je spread pri prevode gramov z Váhového konta v zmluve iiplanGold®?",
    options_sk: [
      "Na konto iiplanGold®, iiplanRentier®, iiplanMax® cca 1 %",
      "Na konto iiplanGold® 0 %",
      "Na konto iiplanGold®, iiplanRentier®, iiplanMax® 0 %",
      "Na konto iiplanGold® cca 1 %"
    ],
    explanation_sk: "Prevod v rámci rovnakého typu produktu (Gold -> Gold) je bez spreadu (0%).",
    correctAnswerIndices: [1],
    category: Category.FEES_COSTS
  },
  {
    id: 44,
    text: "Jaká bude výše Odměny prodávajícímu za obstarání prodeje investičního zlata (Success Fee) při výplatě z Váhového konta u smlouvy iiplanMax®?",
    options: [
      "15 % z výnosu, který je vypočten jako kladný rozdíl mezi Výkupní cenou kovu a původní Kupní cenou gramů, které se vykupují pouze při Výplatě v penězích (výnos nad 3 %)",
      "15 % z výnosu, který je vypočten jako kladný rozdíl mezi Výkupní cenou kovu a původní Kupní cenou gramů, které se vykupují při Výplatě v penězích, Výplatě v kovu a převodu gramů (výnos nad 3 %)",
      "10 % z výnosu, který je vypočten jako kladný rozdíl mezi Výkupní cenou kovu a původní Kupní cenou gramů, které se vykupují při Výplatě v penězích, Výplatě v kovu a převodu gramů (výnos nad 3 %)",
      "15 % z výnosu, který je vypočten jako kladný rozdíl mezi Výkupní cenou kovu a původní Kupní cenou gramů, které se vykupují při Výplatě v kovu, převodu gramů nebo při dodání předmětu koupě (výnos nad 3 %)"
    ],
    explanation: "U iiplanMax je Success Fee 15% z výnosu nad 3%.",
    text_sk: "Aká bude výška Odmeny predávajúcemu za obstaranie predaja investičného zlata (Success Fee) pri výplate z Váhového konta pri zmluve iiplanMax®?",
    options_sk: [
      "15 % z výnosu, ktorý je vypočítaný ako kladný rozdiel medzi Výkupnou cenou kovu a pôvodnou Kúpnou cenou gramov, ktoré sa vykupujú iba pri Výplate v peniazoch (výnos nad 3 %)",
      "15 % z výnosu, ktorý je vypočítaný ako kladný rozdiel medzi Výkupnou cenou kovu a pôvodnou Kúpnou cenou gramov, ktoré sa vykupujú pri Výplate v peniazoch, Výplate v kove a prevode gramov (výnos nad 3 %)",
      "10 % z výnosu, ktorý je vypočítaný ako kladný rozdiel medzi Výkupnou cenou kovu a pôvodnou Kúpnou cenou gramov, ktoré sa vykupujú pri Výplate v peniazoch, Výplate v kove a prevode gramov (výnos nad 3 %)",
      "15 % z výnosu, ktorý je vypočítaný ako kladný rozdiel medzi Výkupnou cenou kovu a pôvodnou Kúpnou cenou gramov, ktoré sa vykupujú pri Výplate v kove, prevode gramov alebo pri dodaní predmetu kúpy (výnos nad 3 %)"
    ],
    explanation_sk: "Pri iiplanMax je Success Fee 15% z výnosu nad 3%.",
    correctAnswerIndices: [1],
    category: Category.FEES_COSTS
  },
  {
    id: 45,
    text: "Jaké náklady jsou u smlouvy iiplanMax®?",
    options: [
      "Success Fee",
      "Management Fee",
      "Spread",
      "VCN"
    ],
    explanation: "Smlouva iiplanMax je komplexní produkt pro větší investice, proto obsahuje všechny typy poplatků: Vstupní cenové navýšení (VCN), Spread (rozdíl nákup/prodej), Management Fee za správu (do 500g) a Success Fee (podíl na zisku).",
    text_sk: "Aké náklady sú pri zmluve iiplanMax®?",
    options_sk: [
      "Success Fee",
      "Management Fee",
      "Spread",
      "VCN"
    ],
    explanation_sk: "Zmluva iiplanMax je komplexný produkt pre väčšie investície, preto obsahuje všetky typy poplatkov: Vstupné cenové navýšenie (VCN), Spread (rozdiel nákup/predaj), Management Fee za správu (do 500g) a Success Fee (podiel na zisku).",
    correctAnswerIndices: [0, 1, 2, 3], // All 4 correct
    category: Category.FEES_COSTS
  },
  {
    id: 46,
    text: "Jaké náklady jsou u Jednorázového nákupu?",
    options: [
      "Success Fee",
      "Management Fee",
      "VCN",
      "Spread"
    ],
    explanation: "U jednorázového nákupu je hlavním nákladem spread (rozdíl nákup/prodej). Neplatí se pravidelné poplatky.",
    text_sk: "Aké náklady sú pri Jednorazovom nákupe?",
    options_sk: [
      "Success Fee",
      "Management Fee",
      "VCN",
      "Spread"
    ],
    explanation_sk: "Pri jednorazovom nákupe je hlavným nákladom spread (rozdiel nákup/predaj). Neplatia sa pravidelné poplatky.",
    correctAnswerIndices: [3],
    category: Category.FEES_COSTS
  },
  {
    id: 49,
    text: "Jaké náklady jsou u smlouvy iiplanProfi®?",
    options: [
      "VCN",
      "Management Fee",
      "Spread",
      "Success Fee"
    ],
    explanation: "U iiplanProfi se uplatňuje VCN, Spread a Success Fee.",
    text_sk: "Aké náklady sú pri zmluve iiplanProfi®?",
    options_sk: [
      "VCN",
      "Management Fee",
      "Spread",
      "Success Fee"
    ],
    explanation_sk: "Pri iiplanProfi sa uplatňuje VCN, Spread a Success Fee.",
    correctAnswerIndices: [0, 2, 3], // 3 correct
    category: Category.FEES_COSTS
  },
  {
    id: 50,
    text: "Jaký je spread při výplatě v penězích z Váhového konta ve smlouvě iiplanMax®?",
    options: [
      "3 %",
      "cca 0,1 %",
      "0 %",
      "4 %"
    ],
    explanation: "iiplanMax má velmi nízký spread při prodeji (3%).",
    text_sk: "Aký je spread pri výplate v peniazoch z Váhového konta v zmluve iiplanMax®?",
    options_sk: [
      "3 %",
      "cca 0,1 %",
      "0 %",
      "4 %"
    ],
    explanation_sk: "iiplanMax má veľmi nízky spread pri predaji (3%).",
    correctAnswerIndices: [0], // Corrected based on PDF (3%)
    category: Category.FEES_COSTS
  },
  {
    id: 51,
    text: "Jaké jsou varianty VCN a jejich výše u smlouvy iiplanRentier®?",
    options: [
      "100/0 19 000 CZK, 70/30 29 000 CZK, 50/50 39 000 CZK",
      "100/0 19 000 CZK, 70/30 24 000 CZK, 50/50 29 000 CZK",
      "100/0 39 000 CZK",
      "100/0 19 000 CZK, 70/30 24 000 CZK, 50/50 39 000 CZK"
    ],
    explanation: "U iiplanRentier jsou 3 varianty rozložení VCN.",
    text_sk: "Aké sú varianty VCN a ich výška pri zmluve iiplanRentier®?",
    options_sk: [
      "100/0 760 EUR, 70/30 1 160 EUR, 50/50 1 560 EUR",
      "100/0 760 EUR, 70/30 960 EUR, 50/50 1 160 EUR",
      "100/0 1 560 EUR",
      "100/0 760 EUR, 70/30 960 EUR, 50/50 1 560 EUR"
    ],
    explanation_sk: "Pri iiplanRentier sú 3 varianty rozloženia VCN.",
    correctAnswerIndices: [0], // Corrected based on PDF
    category: Category.FEES_COSTS
  },
  {
    id: 53,
    text: "Co to je Vstupní cenové navýšení?",
    options: [
      "Vstupní cenové navýšení je součástí kupní ceny každého kusu předmětu koupě u všech smluv, vč. Jednorázového nákupu.",
      "Vstupní cenové navýšení je součástí kupní ceny každého kusu předmětu koupě u smluv iiplanProfi®, iiplanGold®, iiplanRentier® nebo iiplanMax®.",
      "Vstupní cenové navýšení je součástí kupní ceny prvního kusu předmětu koupě u všech smluv, vč. Jednorázového nákupu.",
      "Vstupní cenové navýšení je součástí kupní ceny prvního kusu předmětu koupě u smluv iiplanProfi®, iiplanGold®, iiplanRentier® nebo iiplanMax®."
    ],
    explanation: "VCN je poplatek připočtený k ceně u spořících plánů, nikoliv u jednorázového nákupu.",
    text_sk: "Čo to je Vstupné cenové navýšenie?",
    options_sk: [
      "Vstupné cenové navýšenie je súčasťou kúpnej ceny každého kusu predmetu kúpy pri všetkých zmluvách, vrát. Jednorazového nákupu.",
      "Vstupné cenové navýšenie je súčasťou kúpnej ceny každého kusu predmetu kúpy pri zmluvách iiplanProfi®, iiplanGold®, iiplanRentier® alebo iiplanMax®.",
      "Vstupné cenové navýšenie je súčasťou kúpnej ceny prvého kusu predmetu kúpy pri všetkých zmluvách, vrát. Jednorazového nákupu.",
      "Vstupné cenové navýšenie je súčasťou kúpnej ceny prvého kusu predmetu kúpy pri zmluvách iiplanProfi®, iiplanGold®, iiplanRentier® alebo iiplanMax®."
    ],
    explanation_sk: "VCN je poplatok pripočítaný k cene pri sporiacich plánoch, nie pri jednorazovom nákupe.",
    correctAnswerIndices: [3],
    category: Category.FEES_COSTS
  },
  {
    id: 54,
    text: "Jaké jsou varianty VCN a jejich výše u smlouvy iiplanGold®?",
    options: [
      "100/0 39 000 CZK",
      "100/0 19 000 CZK, 70/30 24 000 CZK, 50/50 29 000 CZK",
      "100/0 19 000 CZK, 70/30 24 000 CZK, 50/50 39 000 CZK",
      "100/0 19 000 CZK, 70/30 29 000 CZK, 50/50 39 000 CZK"
    ],
    explanation: "U iiplanGold jsou 3 varianty rozložení VCN s různými cenami (nejdražší je rozložená 50/50).",
    text_sk: "Aké sú varianty VCN a ich výška pri zmluve iiplanGold®?",
    options_sk: [
      "100/0 1 560 EUR",
      "100/0 760 EUR, 70/30 960 EUR, 50/50 1 160 EUR",
      "100/0 760 EUR, 70/30 960 EUR, 50/50 1 560 EUR",
      "100/0 760 EUR, 70/30 1 160 EUR, 50/50 1 560 EUR"
    ],
    explanation_sk: "Pri iiplanGold sú 3 varianty rozloženia VCN s rôznymi cenami (najdrahšia je rozložená 50/50).",
    correctAnswerIndices: [3], // Corrected based on PDF
    category: Category.FEES_COSTS
  },
  {
    id: 57,
    text: "Jaká bude výše Odměny prodávajícímu za obstarávání nákupů investičního zlata (Management Fee) u smlouvy iiplanMax®?",
    options: [
      "Pro část do 500 g ve výši 0,9125 % měsíčně, pro část nad 500 g 0 % měsíčně",
      "Pro celých 1 000 g ve výši 0,9125 % ročně, pro část nad 1 000 g 0 % ročně",
      "0 % ročně, neuplatňuje se",
      "Pro část do 500 g ve výši 0,9125 % ročně, pro část nad 500 g 0 % ročně"
    ],
    explanation: "U iiplanMax se platí Management Fee pouze z prvních 500g, nad tuto hranici je 0%.",
    text_sk: "Aká bude výška Odmeny predávajúcemu za obstarávanie nákupov investičného zlata (Management Fee) pri zmluve iiplanMax®?",
    options_sk: [
      "Pre časť do 500 g vo výške 0,9125 % mesačne, pre časť nad 500 g 0 % mesačne",
      "Pre celých 1 000 g vo výške 0,9125 % ročne, pre časť nad 1 000 g 0 % ročne",
      "0 % ročne, neuplatňuje sa",
      "Pre časť do 500 g vo výške 0,9125 % ročne, pre časť nad 500 g 0 % ročne"
    ],
    explanation_sk: "Pri iiplanMax sa platí Management Fee iba z prvých 500g, nad túto hranicu je 0%.",
    correctAnswerIndices: [3],
    category: Category.FEES_COSTS
  },
  {
    id: 79,
    text: "Uveďte správné argumenty na otázku: Proč bych měl platit nějaké VCN?",
    options: [
      "Každý produkt má svoje náklady a VCN je podle konkrétního využití a typu smlouvy vratná záloha, která se zcela nebo částečně vrací klientovi zpět",
      "Vstupní cenové navýšení se klientovi vrací ve formě Výkupní prémie iiplan® při výkupu předmětu koupě. Dále se vrací při výplatě v kovu a při převodu gramů na stejný typ smlouvy ze smlouvy iiplanGold®, iiplanRentier® i iiplanMax®, ve formě Výkupní prémie iiplan®, která je součástí Celkové výkupní ceny.",
      "Z VCN se platí naše provize",
      "VCN má každý prodejce zlata"
    ],
    explanation: "VCN není utopený náklad, ale vratná záloha (bonus) pro věrné klienty, kteří spoření dokončí.",
    text_sk: "Uveďte správne argumenty na otázku: Prečo by som mal platiť nejaké VCN?",
    options_sk: [
      "Každý produkt má svoje náklady a VCN je podľa konkrétneho využitia a typu zmluvy vratná záloha, ktorá sa úplne alebo čiastočne vracia klientovi späť",
      "Vstupné cenové navýšenie sa klientovi vracia vo forme Výkupnej prémie iiplan® pri výkupe predmetu kúpy. Ďalej sa vracia pri výplate v kove a pri prevode gramov na rovnaký typ zmluvy zo zmluvy iiplanGold®, iiplanRentier® aj iiplanMax®, vo forme Výkupnej prémie iiplan®, ktorá je súčasťou Celkovej výkupnej ceny.",
      "Z VCN sa platí naša provízia",
      "VCN má každý predajca zlata"
    ],
    explanation_sk: "VCN nie je utopený náklad, ale vratná záloha (bonus) pre verných klientov, ktorí sporenie dokončia.",
    correctAnswerIndices: [0, 1], // 2 Correct
    category: Category.FEES_COSTS
  },

  // --- PROVIZE A KARIÉRA (COMMISSIONS) ---
  {
    id: 59,
    text: "Jaká je výše provize včetně odměny z Motivačního programu za vlastní produkci 100 bodů za měsíc u partnera v postavení 5?",
    options: [
      "37 500 CZK + 7 500 CZK = 45 000 CZK",
      "40 000 CZK + 7 500 CZK = 47 500 CZK",
      "37 500 CZK + 1 500 CZK = 39 000 CZK",
      "40 000 CZK + 15 000 CZK = 55 000 CZK"
    ],
    explanation: "V postavení 5 je základní provize 400 Kč/bod. 100 bodů = 40 000 Kč. Plus bonusy z motivačního programu.",
    text_sk: "Aká je výška provízie vrátane odmeny z Motivačného programu za vlastnú produkciu 100 bodov za mesiac u partnera na pozícii 5?",
    options_sk: [
      "1 500 EUR + 300 EUR = 1 800 EUR",
      "1 600 EUR + 300 EUR = 1 900 EUR",
      "1 500 EUR + 60 EUR = 1 560 EUR",
      "1 600 EUR + 600 EUR = 2 200 EUR"
    ],
    explanation_sk: "Na pozícii 5 je základná provízia 16 EUR/bod. 100 bodov = 1 600 EUR. Plus bonusy z motivačného programu.",
    correctAnswerIndices: [1],
    category: Category.COMMISSIONS
  },
  {
    id: 60,
    text: "Jaká je výše týmové provize za týmovou produkci 300 bodů partnerů v postavení 1 v týmu partnera v postavení 4?",
    options: [
      "22 500 CZK",
      "37 500 CZK",
      "52 500 CZK",
      "97 500 CZK"
    ],
    explanation: "Rozdílová provize: Pozice 4 (375 Kč) - Pozice 1 (200 Kč) = 175 Kč/bod. 300 * 175 = 52 500 Kč.",
    text_sk: "Aká je výška tímovej provízie za tímovú produkciu 300 bodov partnerov na pozícii 1 v tíme partnera na pozícii 4?",
    options_sk: [
      "900 EUR",
      "1 500 EUR",
      "2 100 EUR",
      "3 900 EUR"
    ],
    explanation_sk: "Rozdielová provízia: Pozícia 4 (15 EUR) - Pozícia 1 (8 EUR) = 7 EUR/bod. 300 * 7 = 2 100 EUR.",
    correctAnswerIndices: [2],
    category: Category.COMMISSIONS
  },
  {
    id: 61,
    text: "Jaká provize je vyplacena partnerovi při převodu zlata z váhového konta iiplanMax® na iiplanGold®, pokud sjednal obě smlouvy?",
    options: [
      "Vždy provizi za Success Fee a za převod u smlouvy iiplanMax®",
      "Vždy provizi za Success Fee a za převod u smlouvy iiplanGold®",
      "Není vyplacena žádná provize",
      "Provizi za Success Fee u smlouvy iiplanMax®, pokud klient realizuje výnos (nad 3%)"
    ],
    explanation: "Provize se vyplácí ze zisku (Success Fee) při realizaci výnosu nad hurdle rate.",
    text_sk: "Aká provízia je vyplatená partnerovi pri prevode zlata z váhového konta iiplanMax® na iiplanGold®, ak dojednal obe zmluvy?",
    options_sk: [
      "Vždy províziu za Success Fee a za prevod pri zmluve iiplanMax®",
      "Vždy províziu za Success Fee a za prevod pri zmluve iiplanGold®",
      "Nie je vyplatená žiadna provízia",
      "Províziu za Success Fee pri zmluve iiplanMax®, ak klient realizuje výnos (nad 3%)"
    ],
    explanation_sk: "Provízia sa vypláca zo zisku (Success Fee) pri realizácii výnosu nad hurdle rate.",
    correctAnswerIndices: [3],
    category: Category.COMMISSIONS
  },
  {
    id: 62,
    text: "Jaká provize je vyplacena partnerovi při převodu zlata z váhového konta iiplanGold® na iiplanRentier®, pokud sjednal obě smlouvy?",
    options: [
      "Vždy provizi za Success Fee u smlouvy iiplanRentier®",
      "Vždy provizi za Success Fee u smlouvy iiplanGold®",
      "Provizi za Success Fee u smlouvy iiplanGold®, pokud klient realizuje výnos (nad 4%)",
      "Není vyplacena žádná provize"
    ],
    explanation: "Při převodu Gold -> Rentier se provize nevyplácí.",
    text_sk: "Aká provízia je vyplatená partnerovi pri prevode zlata z váhového konta iiplanGold® na iiplanRentier®, ak dojednal obe zmluvy?",
    options_sk: [
      "Vždy províziu za Success Fee pri zmluve iiplanRentier®",
      "Vždy províziu za Success Fee pri zmluve iiplanGold®",
      "Províziu za Success Fee pri zmluve iiplanGold®, ak klient realizuje výnos (nad 4%)",
      "Nie je vyplatená žiadna provízia"
    ],
    explanation_sk: "Pri prevode Gold -> Rentier sa provízia nevypláca.",
    correctAnswerIndices: [2], // Updated based on PDF
    category: Category.COMMISSIONS
  },
  {
    id: 63,
    text: "Jaká je výše provize včetně odměny z Motivačního programu za vlastní produkci 200 bodů za měsíc u partnera v postavení 4?",
    options: [
      "65 000 CZK + 22 500 CZK = 87 500 CZK",
      "65 000 CZK + 15 000 CZK = 80 000 CZK",
      "75 000 CZK + 15 000 CZK = 90 000 CZK",
      "75 000 CZK + 22 500 CZK = 97 500 CZK"
    ],
    explanation: "Pozice 4 (375 Kč/bod) * 200 = 75 000. Motivační program pro 200 bodů přidává bonus 22 500.",
    text_sk: "Aká je výška provízie vrátane odmeny z Motivačného programu za vlastnú produkciu 200 bodov za mesiac u partnera na pozícii 4?",
    options_sk: [
      "2 600 EUR + 900 EUR = 3 500 EUR",
      "2 600 EUR + 600 EUR = 3 200 EUR",
      "3 000 EUR + 600 EUR = 3 600 EUR",
      "3 000 EUR + 900 EUR = 3 900 EUR"
    ],
    explanation_sk: "Pozícia 4 (15 EUR/bod) * 200 = 3 000 EUR. Motivačný program pre 200 bodov pridáva bonus 900 EUR.",
    correctAnswerIndices: [3],
    category: Category.COMMISSIONS
  },
  {
    id: 64,
    text: "Jaká je výše týmové provize za týmovou produkci 300 bodů partnerů v postavení 1 v týmu partnera v postavení 3?",
    options: [
      "37 500 CZK",
      "97 500 CZK",
      "52 500 CZK",
      "22 500 CZK"
    ],
    explanation: "Rozdíl: Pozice 3 (325 Kč) - Pozice 1 (200 Kč) = 125 Kč/bod. 300 * 125 = 37 500 Kč.",
    text_sk: "Aká je výška tímovej provízie za tímovú produkciu 300 bodov partnerov na pozícii 1 v tíme partnera na pozícii 3?",
    options_sk: [
      "1 500 EUR",
      "3 900 EUR",
      "2 100 EUR",
      "900 EUR"
    ],
    explanation_sk: "Rozdiel: Pozícia 3 (13 EUR) - Pozícia 1 (8 EUR) = 5 EUR/bod. 300 * 5 = 1 500 EUR.",
    correctAnswerIndices: [0],
    category: Category.COMMISSIONS
  },
  {
    id: 65,
    text: "Jaké všechny provize mohou být vyplaceny u smlouvy iiplanProfi®?",
    options: [
      "Provize z prodeje, z výkupu",
      "Provize z VCN, z prodeje, z výkupu",
      "Provize z VCN, z prodeje, z výkupu, z fixace",
      "Provize z prodeje, z výkupu, z převodu na iiplanMax®"
    ],
    explanation: "iiplanProfi generuje provize z více úkonů: VCN, obchodování (prodej/výkup) i fixace ceny.",
    text_sk: "Aké všetky provízie môžu byť vyplatené pri zmluve iiplanProfi®?",
    options_sk: [
      "Provízie z predaja, z výkupu",
      "Provízie z VCN, z predaja, z výkupu",
      "Provízie z VCN, z predaja, z výkupu, z fixácie",
      "Provízie z predaja, z výkupu, z prevodu na iiplanMax®"
    ],
    explanation_sk: "iiplanProfi generuje provízie z viacerých úkonov: VCN, obchodovanie (predaj/výkup) aj fixácia ceny.",
    correctAnswerIndices: [1],
    category: Category.COMMISSIONS
  },
  {
    id: 66,
    text: "Jaká je výše provize včetně odměny z Motivačního programu za vlastní produkci 100 bodů za měsíc u partnera v postavení 4?",
    options: [
      "32 500 CZK + 15 000 CZK = 47 500 CZK",
      "37 500 CZK + 7 500 CZK = 45 000 CZK",
      "32 500 CZK + 7 500 CZK = 40 000 CZK",
      "37 500 CZK + 1 500 CZK = 39 000 CZK"
    ],
    explanation: "Pozice 4 (375 Kč) * 100 = 37 500. Bonus za 100 bodů = 7 500.",
    text_sk: "Aká je výška provízie vrátane odmeny z Motivačného programu za vlastnú produkciu 100 bodov za mesiac u partnera na pozícii 4?",
    options_sk: [
      "1 300 EUR + 600 EUR = 1 900 EUR",
      "1 500 EUR + 300 EUR = 1 800 EUR",
      "1 300 EUR + 300 EUR = 1 600 EUR",
      "1 500 EUR + 60 EUR = 1 560 EUR"
    ],
    explanation_sk: "Pozícia 4 (15 EUR) * 100 = 1 500 EUR. Bonus za 100 bodov = 300 EUR.",
    correctAnswerIndices: [1],
    category: Category.COMMISSIONS
  },
  {
    id: 67,
    text: "Od jaké pozice má partner nárok na umístění svého kontaktu na webu společnosti FireGOLD?",
    options: [
      "Od dosažené pozice 5 Vrchní ředitel",
      "Od dosažené pozice 4 Oblastní ředitel",
      "Od počátku spolupráce v pozici 1",
      "Od dosažené pozice 3 Manažer"
    ],
    explanation: "Partner na pozici Manažer již prokázal kompetenci a loajalitu, proto může být veřejně prezentován.",
    text_sk: "Od akej pozície má partner nárok na umiestnenie svojho kontaktu na webe spoločnosti FireGOLD?",
    options_sk: [
      "Od dosiahnutej pozície 5 Vrchný riaditeľ",
      "Od dosiahnutej pozície 4 Oblastný riaditeľ",
      "Od počiatku spolupráce na pozícii 1",
      "Od dosiahnutej pozície 3 Manažér"
    ],
    explanation_sk: "Partner na pozícii Manažér už preukázal kompetenciu a lojalitu, preto môže byť verejne prezentovaný.",
    correctAnswerIndices: [3],
    category: Category.ETHICS_COMPANY
  },
  {
    id: 68,
    text: "Jaká provize je vyplacena partnerovi při převodu zlata z váhového konta iiplanGold® na druhý iiplanGold®, pokud sjednal obě smlouvy?",
    options: [
      "Provizi ze Success Fee u první smlouvy iiplanGold®, pokud klient realizuje výnos (nad 4%)",
      "Není vyplacena žádná provize",
      "Vždy provizi za Success Fee u druhé smlouvy iiplanGold®",
      "Vždy provizi za Success Fee u první smlouvy iiplanGold®"
    ],
    explanation: "Vyplácí se Success Fee z původní smlouvy, pokud byl dosažen zisk.",
    text_sk: "Aká provízia je vyplatená partnerovi pri prevode zlata z váhového konta iiplanGold® na druhý iiplanGold®, ak dojednal obe zmluvy?",
    options_sk: [
      "Províziu zo Success Fee pri prvej zmluve iiplanGold®, ak klient realizuje výnos (nad 4%)",
      "Nie je vyplatená žiadna provízia",
      "Vždy províziu za Success Fee pri druhej zmluve iiplanGold®",
      "Vždy províziu za Success Fee pri prvej zmluve iiplanGold®"
    ],
    explanation_sk: "Vypláca sa Success Fee z pôvodnej zmluvy, ak bol dosiahnutý zisk.",
    correctAnswerIndices: [0],
    category: Category.COMMISSIONS
  },
  {
    id: 69,
    text: "Jaká provize je vyplacena partnerovi při převodu zlata z váhového konta iiplanGold® na iiplanMax®, pokud sjednal obě smlouvy?",
    options: [
      "Vždy provizi za Success Fee a provizi z Gramové prémie u smlouvy iiplanMax®",
      "Provizi za Success Fee u smlouvy iiplanGold®, pokud klient realizuje výnos (nad 4%) a provizi z Gramové prémie u smlouvy iiplanGold® i u smlouvy iiplanMax®",
      "Není vyplacena žádná provize",
      "Vždy provizi za Success Fee a provizi z Gramové prémie u smlouvy iiplanGold®"
    ],
    explanation: "Kombinace Success Fee z původní smlouvy (při zisku) a Gramové prémie z obou.",
    text_sk: "Aká provízia je vyplatená partnerovi pri prevode zlata z váhového konta iiplanGold® na iiplanMax®, ak dojednal obe zmluvy?",
    options_sk: [
      "Vždy províziu za Success Fee a províziu z Gramovej prémie pri zmluve iiplanMax®",
      "Províziu za Success Fee pri zmluve iiplanGold®, ak klient realizuje výnos (nad 4%) a províziu z Gramovej prémie pri zmluve iiplanGold® aj pri zmluve iiplanMax®",
      "Nie je vyplatená žiadna provízia",
      "Vždy províziu za Success Fee a províziu z Gramovej prémie pri zmluve iiplanGold®"
    ],
    explanation_sk: "Kombinácia Success Fee z pôvodnej zmluvy (pri zisku) a Gramovej prémie z oboch.",
    correctAnswerIndices: [1],
    category: Category.COMMISSIONS
  },
  {
    id: 70,
    text: "Jaké všechny provize mohou být vyplaceny u smlouvy iiplanRentier®?",
    options: [
      "Provize z VCN, z fixace předmětu koupě, ze zboží z výplaty v kovu, z výkupu zboží (původně expedovaného z výplaty v kovu), z výkupu předmětu koupě, z Gramové prémie při převodu zlata na iiplanMax®.",
      "Provize z VCN, z fixace předmětu koupě, ze zboží z výplaty v kovu, z výkupu zboží (původně expedovaného z výplaty v kovu), z výkupu předmětu koupě, z Gramové prémie při převodu zlata na iiplanMax®.",
      "Provize z VCN, z fixace předmětu koupě, z Management Fee, ze Success Fee, ze zboží z výplaty v kovu, z výkupu zboží (původně expedovaného z výplaty v kovu), z výkupu předmětu koupě, z Gramové prémie při převodu zlata na iiplanMax®.",
      "Provize z VCN, z fixace předmětu koupě, z Management Fee, ze Success Fee, z výkupu předmětu koupě, z Gramové prémie při převodu zlata na iiplanMax®."
    ],
    explanation: "Rentier generuje provize z mnoha zdrojů: VCN, fixace, pohyby zboží (výplaty/výkupy) a také gramové prémie při převodu na iiplanMax.",
    text_sk: "Aké všetky provízie môžu byť vyplatené pri zmluve iiplanRentier®?",
    options_sk: [
      "Provízie z VCN, z fixácie predmetu kúpy, z tovaru z výplaty v kove, z výkupu tovaru (pôvodne expedovaného z výplaty v kove), z výkupu predmetu kúpy, z Gramovej prémie pri prevode zlata na iiplanMax®.",
      "Provízie z VCN, z fixácie predmetu kúpy, z tovaru z výplaty v kove, z výkupu tovaru (pôvodne expedovaného z výplaty v kove), z výkupu predmetu kúpy, z Gramovej prémie pri prevode zlata na iiplanMax®.",
      "Provízie z VCN, z fixácie predmetu kúpy, z Management Fee, zo Success Fee, z tovaru z výplaty v kove, z výkupu tovaru (pôvodne expedovaného z výplaty v kove), z výkupu predmetu kúpy, z Gramovej prémie pri prevode zlata na iiplanMax®.",
      "Provízie z VCN, z fixácie predmetu kúpy, z Management Fee, zo Success Fee, z výkupu predmetu kúpy, z Gramovej prémie pri prevode zlata na iiplanMax®."
    ],
    explanation_sk: "Rentier generuje provízie z mnohých zdrojov: VCN, fixácie, pohyby tovaru (výplaty/výkupy) a tiež gramové prémie pri prevode na iiplanMax.",
    correctAnswerIndices: [1], // Updated based on PDF (second option checked)
    category: Category.COMMISSIONS
  },
  {
    id: 71,
    text: "Jaká provize je vyplacena partnerovi při převodu zlata z váhového konta iiplanRentier® na iiplanMax®, pokud sjednal obě smlouvy?",
    options: [
      "Vždy provizi za Success Fee a za převod u smlouvy iiplanMax®",
      "Není vyplacena žádná provize",
      "Provizi z Gramové prémie u smlouvy iiplanRentier® i u smlouvy iiplanMax®",
      "Vždy provizi za Success Fee a provizi z Gramové prémie u smlouvy iiplanRentier®"
    ],
    explanation: "Při tomto převodu se vyplácí Gramová prémie z obou smluv.",
    text_sk: "Aká provízia je vyplatená partnerovi pri prevode zlata z váhového konta iiplanRentier® na iiplanMax®, ak dojednal obe zmluvy?",
    options_sk: [
      "Vždy províziu za Success Fee a za prevod pri zmluve iiplanMax®",
      "Nie je vyplatená žiadna provízia",
      "Províziu z Gramovej prémie pri zmluve iiplanRentier® aj pri zmluve iiplanMax®",
      "Vždy províziu za Success Fee a províziu z Gramovej prémie pri zmluve iiplanRentier®"
    ],
    explanation_sk: "Pri tomto prevode sa vypláca Gramová prémia z oboch zmlúv.",
    correctAnswerIndices: [2],
    category: Category.COMMISSIONS
  },
  {
    id: 72,
    text: "Jaká provize je vyplacena partnerovi při převodu zlata z váhového konta iiplanMax® na iiplanRentier®, pokud sjednal obě smlouvy?",
    options: [
      "Vždy provizi za Success Fee u smlouvy iiplanRentier®",
      "Vždy provizi za Success Fee u smlouvy iiplanMax®",
      "Provizi za Success Fee u smlouvy iiplanMax®, pokud klient realizuje výnos (nad 3%)",
      "Není vyplacena žádná provize"
    ],
    explanation: "Opět platí pravidlo výplaty Success Fee ze zdrojové smlouvy při dosažení zisku.",
    text_sk: "Aká provízia je vyplatená partnerovi pri prevode zlata z váhového konta iiplanMax® na iiplanRentier®, ak dojednal obe zmluvy?",
    options_sk: [
      "Vždy províziu za Success Fee pri zmluve iiplanRentier®",
      "Vždy províziu za Success Fee pri zmluve iiplanMax®",
      "Províziu za Success Fee pri zmluve iiplanMax®, ak klient realizuje výnos (nad 3%)",
      "Nie je vyplatená žiadna provízia"
    ],
    explanation_sk: "Opäť platí pravidlo výplaty Success Fee zo zdrojovej zmluvy pri dosiahnutí zisku.",
    correctAnswerIndices: [2],
    category: Category.COMMISSIONS
  },
  {
    id: 73,
    text: "Jaká je výše provize včetně odměny z Motivačního programu za vlastní produkci 200 bodů za měsíc u partnera v postavení 2?",
    options: [
      "40 000 CZK + 15 000 CZK = 55 000 CZK",
      "50 000 CZK + 22 500 CZK = 72 500 CZK",
      "40 000 CZK + 22 500 CZK = 62 500 CZK",
      "50 000 CZK + 15 000 CZK = 65 000 CZK"
    ],
    explanation: "Pozice 2 (250 Kč) * 200 = 50 000. Motivační bonus 200b = 22 500.",
    text_sk: "Aká je výška provízie vrátane odmeny z Motivačného programu za vlastnú produkciu 200 bodov za mesiac u partnera na pozícii 2?",
    options_sk: [
      "1 600 EUR + 600 EUR = 2 200 EUR",
      "2 000 EUR + 900 EUR = 2 900 EUR",
      "1 600 EUR + 900 EUR = 2 500 EUR",
      "2 000 EUR + 600 EUR = 2 600 EUR"
    ],
    explanation_sk: "Pozícia 2 (10 EUR) * 200 = 2 000 EUR. Motivačný bonus 200b = 900 EUR.",
    correctAnswerIndices: [1],
    category: Category.COMMISSIONS
  },
  {
    id: 74,
    text: "Jaká provize je vyplacena partnerovi při převodu zlata z váhového konta iiplanMax® na druhý iiplanMax®, pokud sjednal obě smlouvy?",
    options: [
      "Není vyplacena žádná provize",
      "Vždy provizi za Success Fee u první smlouvy iiplanMax®",
      "Vždy provizi za Success Fee u druhé smlouvy iiplanMax®",
      "Provizi za Success Fee u první smlouvy iiplanMax®, pokud klient realizuje výnos (nad 3%)"
    ],
    explanation: "Success Fee ze zdrojové smlouvy při zisku nad 3%.",
    text_sk: "Aká provízia je vyplatená partnerovi pri prevode zlata z váhového konta iiplanMax® na druhý iiplanMax®, ak dojednal obe zmluvy?",
    options_sk: [
      "Nie je vyplatená žiadna provízia",
      "Vždy províziu za Success Fee pri prvej zmluve iiplanMax®",
      "Vždy províziu za Success Fee pri druhej zmluve iiplanMax®",
      "Províziu za Success Fee pri prvej zmluve iiplanMax®, ak klient realizuje výnos (nad 3%)"
    ],
    explanation_sk: "Success Fee zo zdrojovej zmluvy pri zisku nad 3%.",
    correctAnswerIndices: [3],
    category: Category.COMMISSIONS
  },
  {
    id: 75,
    text: "Kdo organizuje porady a motivační setkání pro svůj tým partnerů?",
    options: [
      "Partner s týmem v postavení 2 a vyšším",
      "Partner s týmem, ale jen když o to bude požádán svým týmem",
      "Partner s týmem, ale až od postavení 3",
      "Vedení společnosti FireGOLD"
    ],
    explanation: "Lídři od pozice 2 mají zodpovědnost za vedení a motivaci svého týmu.",
    text_sk: "Kto organizuje porady a motivačné stretnutia pre svoj tím partnerov?",
    options_sk: [
      "Partner s tímom na pozícii 2 a vyššej",
      "Partner s tímom, ale len keď o to bude požiadaný svojím tímom",
      "Partner s tímom, ale až od pozície 3",
      "Vedenie spoločnosti FireGOLD"
    ],
    explanation_sk: "Lídri od pozície 2 majú zodpovednosť za vedenie a motiváciu svojho tímu.",
    correctAnswerIndices: [0],
    category: Category.ETHICS_COMPANY
  },
  {
    id: 76,
    text: "Jaká je odměna za 1 vlastní bod v postavení 3 Manažer?",
    options: [
      "375 CZK",
      "300 CZK",
      "325 CZK",
      "350 CZK"
    ],
    explanation: "Dle kariérního plánu: Pozice 1 (200 Kč), Pozice 2 (250 Kč), Pozice 3 Manažer (325 Kč).",
    text_sk: "Aká je odmena za 1 vlastný bod na pozícii 3 Manažér?",
    options_sk: [
      "15 EUR",
      "12 EUR",
      "13 EUR",
      "14 EUR"
    ],
    explanation_sk: "Podľa kariérneho plánu: Pozícia 1 (8 EUR), Pozícia 2 (10 EUR), Pozícia 3 Manažér (13 EUR).",
    correctAnswerIndices: [2],
    category: Category.COMMISSIONS
  },
  {
    id: 77,
    text: "Uveďte správné argumenty na otázku: Proč je na internetu u některých obchodníků zlato levnější?",
    options: [
      "Neposkytují bezplatný depozit zlata",
      "Neumožňují spoření do zlata",
      "Nabízejí pouze prodej a výkup zlata bez dalších služeb",
      "Negarantují zpětný výkup zlata"
    ],
    explanation: "Nízká cena u obchodníků často znamená absenci služeb. FireGOLD nabízí komplexní servis: bezplatný depozit (úschovu), možnost postupného spoření a především smluvní garanci zpětného výkupu, což 'levní' prodejci často neposkytují.",
    text_sk: "Uveďte správne argumenty na otázku: Prečo je na internete u niektorých obchodníkov zlato lacnejšie?",
    options_sk: [
      "Neposkytujú bezplatný depozit zlata",
      "Neumožňujú sporenie do zlata",
      "Ponúkajú iba predaj a výkup zlata bez ďalších služieb",
      "Negarantujú spätný výkup zlata"
    ],
    explanation_sk: "Nízka cena u obchodníkov často znamená absenciu služieb. FireGOLD ponúka komplexný servis: bezplatný depozit (úschovu), možnosť postupného sporenia a predovšetkým zmluvnú garanciu spätného výkupu, čo 'lacní' predajcovia často neposkytujú.",
    correctAnswerIndices: [0, 1, 2, 3], // All 4 correct
    category: Category.ETHICS_COMPANY
  },
  {
    id: 78,
    text: "Uveďte správné argumenty na otázku: Proč bych měl nakupovat přes FireGOLD a ne přímo přes IBIS InGold?",
    options: [
      "U nás to budete mít určitě lepší",
      "To jistě můžete, máme úplně stejné cenové podmínky, u nás ale získáte navíc mně jako osobního poradce a já Vám mohu případně nabídnout i zvýhodněné podmínky jako například slevu na VCN",
      "Osobní schůzka se zástupcem IBIS InGold je možná jedině na centrále společnosti",
      "Pokud už jednáme s klientem, tak už musí nakupovat jenom u společnosti FireGold"
    ],
    explanation: "Přidanou hodnotou partnera je osobní servis, poradenství a možnost individuálních výhod.",
    text_sk: "Uveďte správne argumenty na otázku: Prečo by som mal nakupovať cez FireGOLD a nie priamo cez IBIS InGold?",
    options_sk: [
      "U nás to budete mať určite lepšie",
      "To iste môžete, máme úplne rovnaké cenové podmienky, u nás ale získate navyše mňa ako osobného poradcu a ja Vám môžem prípadne ponúknuť aj zvýhodnené podmienky ako napríklad zľavu na VCN",
      "Osobné stretnutie so zástupcom IBIS InGold je možné jedine na centrále spoločnosti",
      "Ak už rokujeme s klientom, tak už musí nakupovať len u spoločnosti FireGold"
    ],
    explanation_sk: "Pridanou hodnotou partnera je osobný servis, poradenstvo a možnosť individuálnych výhod.",
    correctAnswerIndices: [1],
    category: Category.ETHICS_COMPANY
  },

  // --- LEGISLATIVA, DANĚ A AML (LEGAL_TAX) ---
  {
    id: 4,
    text: "Co je pravdivé tvrzení o investičním stříbře ve vztahu k daním z příjmů?",
    options: [
      "Osvobozeno pouze v ČR",
      "Nejsou nikde osvobozeny",
      "Osvobozeno v celé EU",
      "Příjmy z prodeje investičního stříbra jsou osvobozeny od daní z příjmů v České republice a na Slovensku (pro fyzické osoby nepodnikatele po časovém testu)"
    ],
    explanation: "Pro fyzické osoby nepodnikatele platí v ČR a SK osvobození od daně z příjmu při prodeji movitých věcí (kovů), pokud nejsou v obchodním majetku.",
    text_sk: "Čo je pravdivé tvrdenie o investičnom striebre vo vzťahu k daniam z príjmov?",
    options_sk: [
      "Oslobodené iba v ČR",
      "Nie sú nikde oslobodené",
      "Oslobodené v celej EÚ",
      "Príjmy z predaja investičného striebra sú oslobodené od daní z príjmov v Českej republike a na Slovensku (pre fyzické osoby nepodnikateľov po časovom teste)"
    ],
    explanation_sk: "Pre fyzické osoby nepodnikateľov platí v ČR a SR oslobodenie od dane z príjmu pri predaji hnuteľných vecí (kovov), ak nie sú v obchodnom majetku.",
    correctAnswerIndices: [3],
    category: Category.LEGAL_TAX
  },
  {
    id: 7,
    text: "Je možné použít platby v hotovosti při nákupu slitků nebo mincí?",
    options: [
      "Klient může složit hotovost v bance na bankovní účet společnosti IBIS InGold s identifikací svého čísla smlouvy (variabilní symbol, příp. popis transakce)",
      "V ČR je možné u Jednorázového nákupu uhradit slitky nebo mince na dobírku v hotovosti do celkové částky 200 000 CZK",
      "IBIS InGold nepřijímá platby v hotovosti",
      "IBIS InGold přijímá platby v hotovosti pouze na své centrále"
    ],
    explanation: "Společnost z důvodu AML přímo hotovost nepřijímá. Možnosti jsou vklad na účet v bance nebo dobírka u menších jednorázových nákupů.",
    text_sk: "Je možné použiť platby v hotovosti pri nákupe zliatkov alebo mincí?",
    options_sk: [
      "Klient môže zložiť hotovosť v banke na bankový účet spoločnosti IBIS InGold s identifikáciou svojho čísla zmluvy (variabilný symbol, príp. popis transakcie)",
      "V ČR je možné pri Jednorazovom nákupe uhradiť zliatky alebo mince na dobierku v hotovosti do celkovej sumy 8 000 EUR",
      "IBIS InGold neprijíma platby v hotovosti",
      "IBIS InGold prijíma platby v hotovosti iba na svojej centrále"
    ],
    explanation_sk: "Spoločnosť z dôvodu AML priamo hotovosť neprijíma. Možnosti sú vklad na účet v banke alebo dobierka pri menších jednorazových nákupoch.",
    correctAnswerIndices: [0, 1, 2], // 3 correct
    category: Category.LEGAL_TAX
  },
  {
    id: 16,
    text: "Může přispívat zaměstnavatel svému zaměstnanci na spoření do zlata?",
    options: [
      "Zaměstnavatel může přispívat na spoření do zlata svému zaměstnanci a použít k tomu FKSP",
      "Zaměstnavatel může přispívat na spoření do zlata svému zaměstnanci, ale nemá to pro něho žádnou daňovou výhodu",
      "Zaměstnavatel může přispívat na spoření do zlata svému zaměstnanci a snížit si tak daně",
      "Zaměstnavatel může přispívat na spoření do zlata svému zaměstnanci a snížit si tak odvody sociálního pojištění"
    ],
    explanation: "Zlato není daňově uznatelný benefit jako penzijní připojištění. Zaměstnavatel přispět může (jako bonus ke mzdě), ale bez specifických daňových úlev.",
    text_sk: "Môže prispievať zamestnávateľ svojmu zamestnancovi na sporenie do zlata?",
    options_sk: [
      "Zamestnávateľ môže prispievať na sporenie do zlata svojmu zamestnancovi a použiť na to sociálny fond",
      "Zamestnávateľ môže prispievať na sporenie do zlata svojmu zamestnancovi, ale nemá to pre neho žiadnu daňovú výhodu",
      "Zamestnávateľ môže prispievať na sporenie do zlata svojmu zamestnancovi a znížiť si tak dane",
      "Zamestnávateľ môže prispievať na sporenie do zlata svojmu zamestnancovi a znížiť si tak odvody sociálneho poistenia"
    ],
    explanation_sk: "Zlato nie je daňovo uznateľný benefit ako dôchodkové pripoistenie. Zamestnávateľ prispieť môže (ako bonus ku mzde), ale bez špecifických daňových úľav.",
    correctAnswerIndices: [1],
    category: Category.LEGAL_TAX
  },
  {
    id: 25,
    text: "Může občan cestovat do jiného státu mimo EU s investičním zlatem?",
    options: [
      "ano, ale nesmí s ním cestovat letecky",
      "ne, investiční zlato se nesmí vyvážet ze země, kde bylo pořízeno",
      "ano, ale musí investiční zlato nahlásit celnímu úřadu při jeho hodnotě 10.000 EUR a vyšší",
      "ano, bez omezení"
    ],
    explanation: "Při cestování mimo EU s hotovostí nebo komoditami (jako zlato) v hodnotě nad 10 000 EUR vzniká ohlašovací povinnost na celnici.",
    text_sk: "Môže občan cestovať do iného štátu mimo EÚ s investičným zlatom?",
    options_sk: [
      "áno, ale nesmie s ním cestovať letecky",
      "nie, investičné zlato sa nesmie vyvážať z krajiny, kde bolo obstarané",
      "áno, ale musí investičné zlato nahlásiť colnému úradu pri jeho hodnote 10.000 EUR a vyššej",
      "áno, bez obmedzenia"
    ],
    explanation_sk: "Pri cestovaní mimo EÚ s hotovosťou alebo komoditami (ako zlato) v hodnote nad 10 000 EUR vzniká ohlasovacia povinnosť na colnici.",
    correctAnswerIndices: [2],
    category: Category.LEGAL_TAX
  },
  {
    id: 30,
    text: "Co je pravdivé tvrzení o investičním stříbře ve vztahu k DPH?",
    options: [
      "Investiční stříbro je osvobozeno od DPH pouze v České republice",
      "Investiční stříbro je osvobozeno od DPH v celé Evropské unii",
      "Investiční stříbro je osvobozeno od DPH pouze v České republice a na Slovensku",
      "Investiční stříbro není osvobozeno od DPH"
    ],
    explanation: "Na rozdíl od investičního zlata (§ 92 zákona o DPH), stříbro podléhá základní sazbě DPH. To je klíčový rozdíl pro investory.",
    text_sk: "Čo je pravdivé tvrdenie o investičnom striebre vo vzťahu k DPH?",
    options_sk: [
      "Investičné striebro je oslobodené od DPH iba v Českej republike",
      "Investičné striebro je oslobodené od DPH v celej Európskej únii",
      "Investičné striebro je oslobodené od DPH iba v Českej republike a na Slovensku",
      "Investičné striebro nie je oslobodené od DPH"
    ],
    explanation_sk: "Na rozdiel od investičného zlata, striebro podlieha základnej sadzbe DPH. To je kľúčový rozdiel pre investorov.",
    correctAnswerIndices: [3],
    category: Category.LEGAL_TAX
  },
  {
    id: 82,
    text: "Co je součástí investičního profilu klienta?",
    options: [
      "Občanství",
      "Ochota nést riziko",
      "Počet členů domácnosti",
      "Rodinný stav"
    ],
    explanation: "Investiční dotazník (profil) zjišťuje klientovy znalosti, zkušenosti a vztah k riziku (rizikový profil).",
    text_sk: "Čo je súčasťou investičného profilu klienta?",
    options_sk: [
      "Občianstvo",
      "Ochota niesť riziko",
      "Počet členov domácnosti",
      "Rodinný stav"
    ],
    explanation_sk: "Investičný dotazník (profil) zisťuje klientove znalosti, skúsenosti a vzťah k riziku (rizikový profil).",
    correctAnswerIndices: [1, 3], // 2 Correct
    category: Category.LEGAL_TAX
  },
  {
    id: 91,
    text: "Jaká je základní povinnost zprostředkovatele dle AML zákona?",
    options: [
      "Ověřit totožnost klienta a zjistit původ jeho finančních prostředků",
      "Nabídnout spoření",
      "Vytvářet investiční strategii",
      "Vyplatit výnosy"
    ],
    explanation: "AML (Anti-Money Laundering) zákon ukládá povinnost identifikace a kontroly klienta, aby se zabránilo legalizaci výnosů z trestné činnosti.",
    text_sk: "Aká je základná povinnosť sprostredkovateľa podľa AML zákona?",
    options_sk: [
      "Overiť totožnosť klienta a zistiť pôvod jeho finančných prostriedkov",
      "Ponúknuť sporenie",
      "Vytvárať investičnú stratégiiu",
      "Vyplatiť výnosy"
    ],
    explanation_sk: "AML (Anti-Money Laundering) zákon ukladá povinnosť identifikácie a kontroly klienta, aby sa zabránilo legalizácii výnosov z trestnej činnosti.",
    correctAnswerIndices: [0],
    category: Category.LEGAL_TAX
  },
  {
    id: 92,
    text: "K čemu slouží KYC proces?",
    options: [
      "Ověření znalostí o trhu",
      "Poznání klienta včetně ověření totožnosti (Know Your Customer)",
      "Analýza rizikového profilu",
      "Sestavení finančního plánu"
    ],
    explanation: "KYC (Know Your Customer) je proces, kterým finanční instituce ověřují identitu svých klientů a vyhodnocují potenciální rizika.",
    text_sk: "Na čo slúži KYC proces?",
    options_sk: [
      "Overenie znalostí o trhu",
      "Poznanie klienta vrátane overenia totožnosti (Know Your Customer)",
      "Analýza rizikového profilu",
      "Zostavenie finančného plánu"
    ],
    explanation_sk: "KYC (Know Your Customer) je proces, ktorým finančné inštitúcie overujú identitu svojich klientov a vyhodnocujú potenciálne riziká.",
    correctAnswerIndices: [1],
    category: Category.LEGAL_TAX
  },
  {
    id: 93,
    text: "Co je hlavním účelem AML kontroly?",
    options: [
      "Zamezit pokusům o legalizaci výnosů z trestné činnosti",
      "Ověření pojištění klienta",
      "Posouzení investičního profilu",
      "Zjištění zdravotního stavu klienta"
    ],
    explanation: "Hlavním cílem AML je bránit praní špinavých peněz a financování terorismu.",
    text_sk: "Čo je hlavným účelom AML kontroly?",
    options_sk: [
      "Zamedziť pokusom o legalizáciu výnosov z trestnej činnosti",
      "Overenie poistenia klienta",
      "Posúdenie investičného profilu",
      "Zistenie zdravotného stavu klienta"
    ],
    explanation_sk: "Hlavným cieľom AML je brániť praniu špinavých peňazí a financovaniu terorizmu.",
    correctAnswerIndices: [0],
    category: Category.LEGAL_TAX
  },
  {
    id: 94,
    text: "Kdy je třeba hlásit podezřelý obchod dle AML?",
    options: [
      "Jen u klientů bez občanky",
      "Při jakémkoli podezření na legalizaci výnosů z trestné činnosti nebo financování terorismu",
      "Nikdy, pokud je to soukromý účet",
      "Pouze při platbě v hotovosti"
    ],
    explanation: "Zákon ukládá povinnost nahlásit jakoukoliv podezřelou transakci Finančnímu analytickému úřadu (FAÚ).",
    text_sk: "Kedy je potrebné hlásiť podozrivý obchod podľa AML?",
    options_sk: [
      "Len pri klientoch bez občianskeho preukazu",
      "Pri akomkoľvek podozrení na legalizáciu výnosov z trestnej činnosti alebo financovania terorizmu",
      "Nikdy, ak je to súkromný účet",
      "Iba pri platbe v hotovosti"
    ],
    explanation_sk: "Zákon ukladá povinnosť nahlásiť akúkoľvek podozrivú transakciu Finančnému spravodajskému orgánu.",
    correctAnswerIndices: [1],
    category: Category.LEGAL_TAX
  },

  // --- O SPOLEČNOSTI A ETIKA (ETHICS_COMPANY) ---
  {
    id: 6,
    text: "Jaká je vize společnosti FireGOLD?",
    options: [
      "Vytvořit globální zlatou síť pro vzájemné platby fyzickým zlatem",
      "FireGold nemá žádnou vizi a uvidíme co dokážeme",
      "FireGold jako synonymum pro kvalitní spoření do fyzického zlata a stříbra",
      "Stát se lídrem světového trhu investic do cenných kovů"
    ],
    explanation: "Vizí je vrátit do oběhu opravdové peníze (zlato) a vytvořit alternativní platební systém podložený fyzickým zlatem.",
    text_sk: "Aká je vízia spoločnosti FireGOLD?",
    options_sk: [
      "Vytvoriť globálnu zlatú sieť pre vzájomné platby fyzickým zlatom",
      "FireGold nemá žiadnu víziu a uvidíme čo dokážeme",
      "FireGold ako synonymum pre kvalitné sporenie do fyzického zlata a striebra",
      "Stať sa lídrom svetového trhu investícií do cenných kovov"
    ],
    explanation_sk: "Víziou je vrátiť do obehu ozajstné peniaze (zlato) a vytvoriť alternatívny platobný systém podložený fyzickým zlatom.",
    correctAnswerIndices: [0],
    category: Category.ETHICS_COMPANY
  },
  {
    id: 95,
    text: "Jak by měl etický partner společnosti FireGOLD mluvit o konkurenčních produktech?",
    options: [
      "Očernit je, aby lépe vynikl FireGOLD a jím nabízené produkty",
      "Tvrdit, že nic jiného než naše produkty nemá smysl",
      "Zdůraznit výhody FireGOLD a rozdíly, ale nehanit konkurenci",
      "Říkat, že konkurence je podvod"
    ],
    explanation: "Etický kodex vyžaduje profesionální chování. Mluvíme o našich přednostech, nevymýšlíme si lži o konkurenci.",
    text_sk: "Ako by mal etický partner spoločnosti FireGOLD hovoriť o konkurenčných produktoch?",
    options_sk: [
      "Očierniť ich, aby lepšie vynikol FireGOLD a ním ponúkané produkty",
      "Tvrdiť, že nič iné ako naše produkty nemá zmysel",
      "Zdôrazniť výhody FireGOLD a rozdiely, ale nehaniť konkurenciu",
      "Hovoriť, že konkurencia je podvod"
    ],
    explanation_sk: "Etický kódex vyžaduje profesionálne správanie. Hovoríme o našich prednostiach, nevymýšľame si lži o konkurencii.",
    correctAnswerIndices: [2],
    category: Category.ETHICS_COMPANY
  },
  {
    id: 96,
    text: "Co je hlavním cílem partnera FireGOLD?",
    options: [
      "Prodat za každou cenu",
      "Pomoci klientovi ochránit a zhodnotit majetek pomocí zlata",
      "Získat provizi a už se neozvat",
      "Přesvědčit klienta k zadlužení kvůli investici"
    ],
    explanation: "Dlouhodobý vztah a péče o klientův majetek jsou prioritou, nikoliv jednorázový prodej.",
    text_sk: "Čo je hlavným cieľom partnera FireGOLD?",
    options_sk: [
      "Predať za každú cenu",
      "Pomôcť klientovi ochrániť a zhodnotiť majetok pomocou zlata",
      "Získať províziu a už sa neozvať",
      "Presvedčiť klienta k zadlženiu kvôli investícii"
    ],
    explanation_sk: "Dlhodobý vzťah a starostlivosť o klientov majetok sú prioritou, nie jednorazový predaj.",
    correctAnswerIndices: [1],
    category: Category.ETHICS_COMPANY
  },
  {
    id: 97,
    text: "Jak má partner postupovat, když klient nerozumí produktu?",
    options: [
      "Rychle podepsat smlouvu, než si to rozmyslí",
      "Vysvětlit produkt znovu, jednoduše a srozumitelně, dokud klient nepochopí",
      "Říct mu, že to není důležité",
      "Odkázat ho na infolinku"
    ],
    explanation: "Partner musí zajistit, aby klient plně rozuměl tomu, co podepisuje a kam posílá své peníze.",
    text_sk: "Ako má partner postupovať, keď klient nerozumie produktu?",
    options_sk: [
      "Rýchlo podpísať zmluvu, kým si to rozmyslí",
      "Vysvetliť produkt znova, jednoducho a zrozumiteľne, kým klient nepochopí",
      "Povedať mu, že to nie je dôležité",
      "Odkázať ho na infolinku"
    ],
    explanation_sk: "Partner musí zaistiť, aby klient plne rozumel tomu, čo podpisuje a kam posiela svoje peniaze.",
    correctAnswerIndices: [1],
    category: Category.ETHICS_COMPANY
  },
  {
    id: 98,
    text: "Je povoleno slibovat klientům garantovaný výnos (zhodnocení) u zlata?",
    options: [
      "Ano, zlato vždy roste",
      "Ne, investice do komodit podléhá tržním výkyvům a minulé výnosy nezaručují budoucí",
      "Ano, pokud je to jen ústně",
      "Ano, do výše inflace"
    ],
    explanation: "Slibovat garantovaný výnos je neetické a nepravdivé. Cena zlata kolísá a nelze ji předvídat s jistotou.",
    text_sk: "Je povolené sľubovať klientom garantovaný výnos (zhodnotenie) pri zlate?",
    options_sk: [
      "Áno, zlato vždy rastie",
      "Nie, investícia do komodít podlieha trhovým výkyvom a minulé výnosy nezaručujú budúce",
      "Áno, ak je to len ústne",
      "Áno, do výšky inflácie"
    ],
    explanation_sk: "Sľubovať garantovaný výnos je neetické a nepravdivé. Cena zlata kolíše a nemožno ju predvídať s istotou.",
    correctAnswerIndices: [1],
    category: Category.ETHICS_COMPANY
  },
  {
    id: 99,
    text: "Jaké hodnoty by měl partner FireGOLD reprezentovat?",
    options: [
      "Dravost a agresivitu",
      "Odbornost, důvěryhodnost a transparentnost",
      "Lhostejnost k potřebám klienta",
      "Snahu o rychlý zisk"
    ],
    explanation: "FireGOLD si zakládá na dobrém jménu, které tvoří odborní a důvěryhodní partneři.",
    text_sk: "Aké hodnoty by mal partner FireGOLD reprezentovať?",
    options_sk: [
      "Dravosť a agresivitu",
      "Odbornosť, dôveryhodnosť a transparentnosť",
      "Ľahostajnosť k potrebám klienta",
      "Snahu o rýchly zisk"
    ],
    explanation_sk: "FireGOLD si zakladá na dobrom mene, ktoré tvoria odborní a dôveryhodní partneri.",
    correctAnswerIndices: [1],
    category: Category.ETHICS_COMPANY
  },
  {
    id: 100,
    text: "Co dělat, když si nejsem jistý odpovědí na dotaz klienta?",
    options: [
      "Něco si vymyslet, abych nevypadal hloupě",
      "Přiznat, že nevím, zjistit správnou informaci a dát klientovi vědět později",
      "Změnit téma hovoru",
      "Říct, že je to tajné"
    ],
    explanation: "Je profesionální přiznat nevědomost a informaci dohledat, než klientovi lhát a poškodit důvěru.",
    text_sk: "Čo robiť, keď si nie som istý odpoveďou na otázku klienta?",
    options_sk: [
      "Niečo si vymyslieť, aby som nevyzeral hlúpo",
      "Priznať, že neviem, zistiť správnu informáciu a dať klientovi vedieť neskôr",
      "Zmeniť tému hovoru",
      "Povedať, že je to tajné"
    ],
    explanation_sk: "Je profesionálne priznať nevedomosť a informáciu dohľadať, než klientovi klamať a poškodiť dôveru.",
    correctAnswerIndices: [1],
    category: Category.ETHICS_COMPANY
  }
];