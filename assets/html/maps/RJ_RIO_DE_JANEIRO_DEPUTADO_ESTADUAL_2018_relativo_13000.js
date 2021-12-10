    
            var map_273a6cfa389941019ec05018d19991a1 = L.map(
                "map_273a6cfa389941019ec05018d19991a1",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_c14200a7f07b4dada9cca6db69520c89 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_273a6cfa389941019ec05018d19991a1);
        
    
            var choropleth_4616944f90d14d7e94294cf7cd72acb5 = L.featureGroup(
                {}
            ).addTo(map_273a6cfa389941019ec05018d19991a1);
        
    
        function geo_json_80172f8c93a84ab199902f23d26bd045_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 425: case 418: case 449: case 447: case 436: case 416: case 432: case 370: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 420: case 478: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 421: case 440: case 397: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 434: case 448: case 424: case 438: case 453: case 462: case 466: case 473: case 455: case 472: case 470: case 442: case 437: case 446: case 444: case 393: case 427: case 415: case 366: case 402: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 439: case 412: case 410: case 417: case 456: case 468: case 474: case 353: case 352: case 392: case 343: case 383: case 426: case 340: case 333: case 400: case 396: case 382: case 375: case 419: case 408: case 411: case 371: case 373: case 364: case 398: case 401: case 386: case 379: case 372: case 354: case 334: case 327: case 326: case 339: case 329: case 331: case 330: case 328: case 337: case 445: case 409: case 477: case 378: case 511: case 485: case 890: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 467: case 464: case 404: case 395: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_80172f8c93a84ab199902f23d26bd045_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_80172f8c93a84ab199902f23d26bd045 = L.geoJson(null, {
                onEachFeature: geo_json_80172f8c93a84ab199902f23d26bd045_onEachFeature,
            
                style: geo_json_80172f8c93a84ab199902f23d26bd045_styler,
        });

        function geo_json_80172f8c93a84ab199902f23d26bd045_add (data) {
            geo_json_80172f8c93a84ab199902f23d26bd045
                .addData(data)
                .addTo(choropleth_4616944f90d14d7e94294cf7cd72acb5);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_80172f8c93a84ab199902f23d26bd045_add(obj);
            })
          }
            const file_path ='/covid/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_2d17cb3066114a51955e4901a6ce191d = {};

    
    color_map_2d17cb3066114a51955e4901a6ce191d.color = d3.scale.threshold()
              .domain([0.0, 1.0092786790141208e-05, 2.0185573580282416e-05, 3.0278360370423624e-05, 4.037114716056483e-05, 5.046393395070604e-05, 6.055672074084725e-05, 7.064950753098846e-05, 8.074229432112966e-05, 9.083508111127088e-05, 0.00010092786790141208, 0.0001110206546915533, 0.0001211134414816945, 0.0001312062282718357, 0.00014129901506197692, 0.00015139180185211814, 0.00016148458864225933, 0.00017157737543240054, 0.00018167016222254176, 0.00019176294901268294, 0.00020185573580282416, 0.00021194852259296537, 0.0002220413093831066, 0.0002321340961732478, 0.000242226882963389, 0.00025231966975353023, 0.0002624124565436714, 0.0002725052433338126, 0.00028259803012395385, 0.00029269081691409504, 0.0003027836037042363, 0.0003128763904943774, 0.00032296917728451865, 0.0003330619640746599, 0.0003431547508648011, 0.0003532475376549423, 0.0003633403244450835, 0.0003734331112352247, 0.0003835258980253659, 0.00039361868481550713, 0.0004037114716056483, 0.00041380425839578956, 0.00042389704518593075, 0.00043398983197607193, 0.0004440826187662132, 0.00045417540555635436, 0.0004642681923464956, 0.0004743609791366368, 0.000484453765926778, 0.0004945465527169192, 0.0005046393395070605, 0.0005147321262972016, 0.0005248249130873428, 0.000534917699877484, 0.0005450104866676252, 0.0005551032734577665, 0.0005651960602479077, 0.0005752888470380489, 0.0005853816338281901, 0.0005954744206183313, 0.0006055672074084726, 0.0006156599941986138, 0.0006257527809887548, 0.0006358455677788961, 0.0006459383545690373, 0.0006560311413591785, 0.0006661239281493198, 0.0006762167149394609, 0.0006863095017296022, 0.0006964022885197434, 0.0007064950753098846, 0.0007165878621000258, 0.000726680648890167, 0.0007367734356803082, 0.0007468662224704494, 0.0007569590092605906, 0.0007670517960507318, 0.000777144582840873, 0.0007872373696310143, 0.0007973301564211555, 0.0008074229432112966, 0.0008175157300014379, 0.0008276085167915791, 0.0008377013035817204, 0.0008477940903718615, 0.0008578868771620026, 0.0008679796639521439, 0.0008780724507422851, 0.0008881652375324264, 0.0008982580243225676, 0.0009083508111127087, 0.00091844359790285, 0.0009285363846929912, 0.0009386291714831325, 0.0009487219582732736, 0.0009588147450634147, 0.000968907531853556, 0.0009790003186436972, 0.0009890931054338384, 0.0009991858922239797, 0.001009278679014121, 0.001019371465804262, 0.0010294642525944032, 0.0010395570393845444, 0.0010496498261746857, 0.001059742612964827, 0.001069835399754968, 0.0010799281865451094, 0.0010900209733352504, 0.0011001137601253919, 0.001110206546915533, 0.0011202993337056742, 0.0011303921204958154, 0.0011404849072859564, 0.0011505776940760979, 0.001160670480866239, 0.0011707632676563801, 0.0011808560544465214, 0.0011909488412366626, 0.0012010416280268037, 0.0012111344148169451, 0.0012212272016070861, 0.0012313199883972276, 0.0012414127751873686, 0.0012515055619775096, 0.001261598348767651, 0.0012716911355577921, 0.0012817839223479336, 0.0012918767091380746, 0.0013019694959282159, 0.001312062282718357, 0.0013221550695084983, 0.0013322478562986396, 0.0013423406430887808, 0.0013524334298789218, 0.001362526216669063, 0.0013726190034592043, 0.0013827117902493456, 0.0013928045770394868, 0.0014028973638296278, 0.0014129901506197693, 0.0014230829374099103, 0.0014331757242000516, 0.0014432685109901928, 0.001453361297780334, 0.0014634540845704753, 0.0014735468713606163, 0.0014836396581507576, 0.0014937324449408988, 0.00150382523173104, 0.0015139180185211813, 0.0015240108053113225, 0.0015341035921014635, 0.001544196378891605, 0.001554289165681746, 0.0015643819524718875, 0.0015744747392620285, 0.0015845675260521695, 0.001594660312842311, 0.001604753099632452, 0.0016148458864225933, 0.0016249386732127345, 0.0016350314600028757, 0.001645124246793017, 0.0016552170335831582, 0.0016653098203732993, 0.0016754026071634407, 0.0016854953939535817, 0.001695588180743723, 0.0017056809675338642, 0.0017157737543240052, 0.0017258665411141467, 0.0017359593279042877, 0.0017460521146944292, 0.0017561449014845702, 0.0017662376882747115, 0.0017763304750648527, 0.001786423261854994, 0.0017965160486451352, 0.0018066088354352762, 0.0018167016222254175, 0.0018267944090155587, 0.0018368871958057, 0.001846979982595841, 0.0018570727693859824, 0.0018671655561761234, 0.001877258342966265, 0.001887351129756406, 0.0018974439165465472, 0.0019075367033366884, 0.0019176294901268294, 0.001927722276916971, 0.001937815063707112, 0.0019479078504972532, 0.0019580006372873944, 0.0019680934240775354, 0.001978186210867677, 0.001988278997657818, 0.0019983717844479594, 0.0020084645712381004, 0.002018557358028242, 0.002028650144818383, 0.002038742931608524, 0.0020488357183986654, 0.0020589285051888064, 0.002069021291978948, 0.002079114078769089, 0.0020892068655592303, 0.0020992996523493714, 0.0021093924391395124, 0.002119485225929654, 0.0021295780127197953, 0.002139670799509936, 0.0021497635863000773, 0.002159856373090219, 0.0021699491598803594, 0.002180041946670501, 0.0021901347334606423, 0.0022002275202507838, 0.0022103203070409244, 0.002220413093831066, 0.0022305058806212073, 0.0022405986674113483, 0.0022506914542014893, 0.002260784240991631, 0.002270877027781772, 0.002280969814571913, 0.0022910626013620543, 0.0023011553881521958, 0.0023112481749423368, 0.002321340961732478, 0.0023314337485226193, 0.0023415265353127603, 0.0023516193221029017, 0.0023617121088930428, 0.002371804895683184, 0.0023818976824733253, 0.0023919904692634663, 0.0024020832560536073, 0.0024121760428437488, 0.0024222688296338902, 0.0024323616164240312, 0.0024424544032141723, 0.0024525471900043137, 0.002462639976794455, 0.0024727327635845958, 0.0024828255503747372, 0.0024929183371648787, 0.0025030111239550193, 0.0025131039107451607, 0.002523196697535302, 0.0025332894843254437, 0.0025433822711155843, 0.0025534750579057257, 0.002563567844695867, 0.002573660631486008, 0.0025837534182761492, 0.0025938462050662907, 0.0026039389918564317, 0.0026140317786465727, 0.002624124565436714, 0.002634217352226855, 0.0026443101390169967, 0.0026544029258071377, 0.002664495712597279, 0.00267458849938742, 0.0026846812861775616, 0.0026947740729677027, 0.0027048668597578437, 0.002714959646547985, 0.002725052433338126, 0.002735145220128267, 0.0027452380069184087, 0.00275533079370855, 0.002765423580498691, 0.002775516367288832, 0.0027856091540789736, 0.002795701940869115, 0.0028057947276592557, 0.002815887514449397, 0.0028259803012395386, 0.002836073088029679, 0.0028461658748198206, 0.002856258661609962, 0.002866351448400103, 0.002876444235190244, 0.0028865370219803856, 0.002896629808770527, 0.002906722595560668, 0.002916815382350809, 0.0029269081691409506, 0.0029370009559310916, 0.0029470937427212326, 0.002957186529511374, 0.002967279316301515, 0.0029773721030916566, 0.0029874648898817976, 0.002997557676671939, 0.00300765046346208, 0.0030177432502522215, 0.0030278360370423626, 0.0030379288238325036, 0.003048021610622645, 0.003058114397412786, 0.003068207184202927, 0.0030782999709930686, 0.00308839275778321, 0.0030984855445733506, 0.003108578331363492, 0.0031186711181536335, 0.003128763904943775, 0.0031388566917339156, 0.003148949478524057, 0.0031590422653141985, 0.003169135052104339, 0.0031792278388944805, 0.003189320625684622, 0.003199413412474763, 0.003209506199264904, 0.0032195989860550455, 0.0032296917728451865, 0.003239784559635328, 0.003249877346425469, 0.0032599701332156105, 0.0032700629200057515, 0.0032801557067958925, 0.003290248493586034, 0.003300341280376175, 0.0033104340671663165, 0.0033205268539564575, 0.0033306196407465985, 0.00334071242753674, 0.0033508052143268814, 0.0033608980011170225, 0.0033709907879071635, 0.003381083574697305, 0.003391176361487446, 0.003401269148277587, 0.0034113619350677284, 0.00342145472185787, 0.0034315475086480105, 0.003441640295438152, 0.0034517330822282934, 0.0034618258690184344, 0.0034719186558085755, 0.003482011442598717, 0.0034921042293888584, 0.003502197016178999, 0.0035122898029691404, 0.003522382589759282, 0.003532475376549423, 0.003542568163339564, 0.0035526609501297054, 0.0035627537369198464, 0.003572846523709988, 0.003582939310500129, 0.0035930320972902704, 0.0036031248840804114, 0.0036132176708705524, 0.003623310457660694, 0.003633403244450835, 0.0036434960312409764, 0.0036535888180311174, 0.0036636816048212584, 0.0036737743916114, 0.0036838671784015413, 0.003693959965191682, 0.0037040527519818234, 0.003714145538771965, 0.003724238325562106, 0.003734331112352247, 0.0037444238991423883, 0.00375451668593253, 0.0037646094727226704, 0.003774702259512812, 0.0037847950463029533, 0.0037948878330930943, 0.0038049806198832354, 0.003815073406673377, 0.0038251661934635183, 0.003835258980253659, 0.0038453517670438003, 0.003855444553833942, 0.003865537340624083, 0.003875630127414224, 0.0038857229142043653, 0.0038958157009945063, 0.0039059084877846478, 0.003916001274574789, 0.003926094061364929, 0.003936186848155071, 0.003946279634945212, 0.003956372421735354, 0.003966465208525494, 0.003976557995315636, 0.003986650782105777, 0.003996743568895919, 0.004006836355686059, 0.004016929142476201, 0.004027021929266342, 0.004037114716056484, 0.004047207502846624, 0.004057300289636766, 0.004067393076426907, 0.004077485863217048, 0.004087578650007189, 0.004097671436797331, 0.004107764223587472, 0.004117857010377613, 0.004127949797167754, 0.004138042583957896, 0.004148135370748036, 0.004158228157538178, 0.004168320944328319, 0.004178413731118461, 0.004188506517908601, 0.004198599304698743, 0.004208692091488883, 0.004218784878279025, 0.004228877665069166, 0.004238970451859308, 0.004249063238649449, 0.004259156025439591, 0.004269248812229731, 0.004279341599019872, 0.004289434385810013, 0.004299527172600155, 0.004309619959390296, 0.004319712746180438, 0.004329805532970579, 0.004339898319760719, 0.00434999110655086, 0.004360083893341002, 0.004370176680131143, 0.004380269466921285, 0.004390362253711426, 0.0044004550405015675, 0.004410547827291707, 0.004420640614081849, 0.00443073340087199, 0.004440826187662132, 0.004450918974452273, 0.0044610117612424146, 0.004471104548032556, 0.004481197334822697, 0.004491290121612837, 0.004501382908402979, 0.00451147569519312, 0.004521568481983262, 0.004531661268773403, 0.004541754055563544, 0.004551846842353685, 0.004561939629143826, 0.004572032415933967, 0.004582125202724109, 0.00459221798951425, 0.0046023107763043915, 0.004612403563094532, 0.0046224963498846736, 0.004632589136674814, 0.004642681923464956, 0.004652774710255097, 0.0046628674970452385, 0.004672960283835379, 0.004683053070625521, 0.004693145857415662, 0.0047032386442058035, 0.004713331430995944, 0.0047234242177860855, 0.004733517004576227, 0.004743609791366368, 0.004753702578156509, 0.0047637953649466505, 0.004773888151736792, 0.0047839809385269326, 0.004794073725317074, 0.004804166512107215, 0.004814259298897356, 0.0048243520856874975, 0.004834444872477639, 0.0048445376592677804, 0.004854630446057921, 0.0048647232328480625, 0.004874816019638203, 0.0048849088064283445, 0.004895001593218486, 0.0049050943800086275, 0.004915187166798769, 0.00492527995358891, 0.004935372740379051, 0.0049454655271691916, 0.004955558313959333, 0.0049656511007494745, 0.004975743887539616, 0.004985836674329757, 0.004995929461119899, 0.005006022247910039, 0.00501611503470018, 0.0050262078214903215, 0.005036300608280463])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_2d17cb3066114a51955e4901a6ce191d.x = d3.scale.linear()
              .domain([0.0, 0.005036300608280463])
              .range([0, 400]);

    color_map_2d17cb3066114a51955e4901a6ce191d.legend = L.control({position: 'topright'});
    color_map_2d17cb3066114a51955e4901a6ce191d.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_2d17cb3066114a51955e4901a6ce191d.legend.addTo(map_273a6cfa389941019ec05018d19991a1);

    color_map_2d17cb3066114a51955e4901a6ce191d.xAxis = d3.svg.axis()
        .scale(color_map_2d17cb3066114a51955e4901a6ce191d.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 0.0008393834347134105, 0.001678766869426821, 0.0025181503041402315, 0.003357533738853642, 0.004196917173567053, 0.005036300608280463]);

    color_map_2d17cb3066114a51955e4901a6ce191d.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_2d17cb3066114a51955e4901a6ce191d.g = color_map_2d17cb3066114a51955e4901a6ce191d.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_2d17cb3066114a51955e4901a6ce191d.g.selectAll("rect")
        .data(color_map_2d17cb3066114a51955e4901a6ce191d.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_2d17cb3066114a51955e4901a6ce191d.x(color_map_2d17cb3066114a51955e4901a6ce191d.color.domain()[i - 1]) : color_map_2d17cb3066114a51955e4901a6ce191d.x.range()[0],
            x1: i < color_map_2d17cb3066114a51955e4901a6ce191d.color.domain().length ? color_map_2d17cb3066114a51955e4901a6ce191d.x(color_map_2d17cb3066114a51955e4901a6ce191d.color.domain()[i]) : color_map_2d17cb3066114a51955e4901a6ce191d.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_2d17cb3066114a51955e4901a6ce191d.g.call(color_map_2d17cb3066114a51955e4901a6ce191d.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('13000_WALDECK CARNEIRO DA SILVA');

