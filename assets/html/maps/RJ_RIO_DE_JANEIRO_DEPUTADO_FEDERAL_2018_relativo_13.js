    
            var map_bf988466935740c6aae141b307784714 = L.map(
                "map_bf988466935740c6aae141b307784714",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_9c99e4fc06ac4a619cb93a6f71cf87cd = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_bf988466935740c6aae141b307784714);
        
    
            var choropleth_cdd9e6f07957401f83baccd55b61677a = L.featureGroup(
                {}
            ).addTo(map_bf988466935740c6aae141b307784714);
        
    
        function geo_json_5ffbe8882b2c4167a5b8e9e58dc09c67_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 425: case 421: case 482: case 422: case 412: case 410: case 440: case 478: case 393: case 457: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 420: case 428: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 443: case 439: case 441: case 418: case 424: case 435: case 381: case 369: case 392: case 383: case 340: case 333: case 400: case 382: case 427: case 348: case 358: case 328: case 367: case 350: case 463: case 476: case 890: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 434: case 474: case 416: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 325: case 448: case 449: case 462: case 456: case 467: case 473: case 472: case 437: case 353: case 419: case 408: case 371: case 364: case 359: case 339: case 331: case 445: case 430: case 399: case 451: case 477: case 402: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 468: case 357: case 471: case 366: case 391: case 480: 
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_5ffbe8882b2c4167a5b8e9e58dc09c67_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_5ffbe8882b2c4167a5b8e9e58dc09c67 = L.geoJson(null, {
                onEachFeature: geo_json_5ffbe8882b2c4167a5b8e9e58dc09c67_onEachFeature,
            
                style: geo_json_5ffbe8882b2c4167a5b8e9e58dc09c67_styler,
        });

        function geo_json_5ffbe8882b2c4167a5b8e9e58dc09c67_add (data) {
            geo_json_5ffbe8882b2c4167a5b8e9e58dc09c67
                .addData(data)
                .addTo(choropleth_cdd9e6f07957401f83baccd55b61677a);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_5ffbe8882b2c4167a5b8e9e58dc09c67_add(obj);
            })
          }
            const file_path ='/covid/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_aa083a3269c347e19c1d4393c01fd3d2 = {};

    
    color_map_aa083a3269c347e19c1d4393c01fd3d2.color = d3.scale.threshold()
              .domain([0.0, 3.436227736680494e-05, 6.872455473360988e-05, 0.00010308683210041483, 0.00013744910946721976, 0.0001718113868340247, 0.00020617366420082965, 0.0002405359415676346, 0.0002748982189344395, 0.0003092604963012445, 0.0003436227736680494, 0.00037798505103485436, 0.0004123473284016593, 0.00044670960576846425, 0.0004810718831352692, 0.0005154341605020741, 0.000549796437868879, 0.000584158715235684, 0.000618520992602489, 0.0006528832699692938, 0.0006872455473360988, 0.0007216078247029038, 0.0007559701020697087, 0.0007903323794365136, 0.0008246946568033186, 0.0008590569341701236, 0.0008934192115369285, 0.0009277814889037334, 0.0009621437662705384, 0.0009965060436373434, 0.0010308683210041483, 0.0010652305983709532, 0.001099592875737758, 0.0011339551531045632, 0.001168317430471368, 0.001202679707838173, 0.001237041985204978, 0.0012714042625717827, 0.0013057665399385876, 0.0013401288173053927, 0.0013744910946721976, 0.0014088533720390025, 0.0014432156494058076, 0.0014775779267726125, 0.0015119402041394174, 0.0015463024815062223, 0.0015806647588730272, 0.0016150270362398323, 0.0016493893136066372, 0.001683751590973442, 0.0017181138683402472, 0.001752476145707052, 0.001786838423073857, 0.0018212007004406619, 0.0018555629778074668, 0.0018899252551742717, 0.0019242875325410768, 0.001958649809907882, 0.0019930120872746868, 0.0020273743646414917, 0.0020617366420082966, 0.0020960989193751015, 0.0021304611967419063, 0.0021648234741087117, 0.002199185751475516, 0.002233548028842321, 0.0022679103062091263, 0.002302272583575931, 0.002336634860942736, 0.002370997138309541, 0.002405359415676346, 0.002439721693043151, 0.002474083970409956, 0.0025084462477767606, 0.0025428085251435655, 0.002577170802510371, 0.0026115330798771753, 0.0026458953572439806, 0.0026802576346107855, 0.0027146199119775904, 0.0027489821893443953, 0.0027833444667112, 0.002817706744078005, 0.00285206902144481, 0.0028864312988116153, 0.00292079357617842, 0.002955155853545225, 0.00298951813091203, 0.003023880408278835, 0.0030582426856456397, 0.0030926049630124446, 0.00312696724037925, 0.0031613295177460544, 0.0031956917951128597, 0.0032300540724796646, 0.0032644163498464695, 0.0032987786272132744, 0.0033331409045800793, 0.003367503181946884, 0.003401865459313689, 0.0034362277366804944, 0.003470590014047299, 0.003504952291414104, 0.003539314568780909, 0.003573676846147714, 0.003608039123514519, 0.0036424014008813238, 0.0036767636782481287, 0.0037111259556149336, 0.003745488232981739, 0.0037798505103485433, 0.0038142127877153487, 0.0038485750650821536, 0.003882937342448958, 0.003917299619815764, 0.003951661897182568, 0.0039860241745493736, 0.004020386451916178, 0.004054748729282983, 0.004089111006649789, 0.004123473284016593, 0.004157835561383398, 0.004192197838750203, 0.004226560116117007, 0.004260922393483813, 0.004295284670850618, 0.004329646948217423, 0.004364009225584227, 0.004398371502951032, 0.004432733780317838, 0.004467096057684642, 0.004501458335051447, 0.004535820612418253, 0.004570182889785058, 0.004604545167151862, 0.004638907444518667, 0.004673269721885472, 0.004707631999252277, 0.004741994276619082, 0.004776356553985887, 0.004810718831352692, 0.004845081108719496, 0.004879443386086302, 0.004913805663453107, 0.004948167940819912, 0.004982530218186717, 0.005016892495553521, 0.0050512547729203265, 0.005085617050287131, 0.005119979327653936, 0.005154341605020742, 0.005188703882387547, 0.0052230661597543505, 0.005257428437121156, 0.005291790714487961, 0.005326152991854766, 0.005360515269221571, 0.005394877546588376, 0.005429239823955181, 0.005463602101321985, 0.0054979643786887905, 0.005532326656055596, 0.0055666889334224, 0.005601051210789206, 0.00563541348815601, 0.0056697757655228154, 0.00570413804288962, 0.005738500320256425, 0.0057728625976232305, 0.005807224874990035, 0.00584158715235684, 0.005875949429723645, 0.00591031170709045, 0.005944673984457255, 0.00597903626182406, 0.006013398539190865, 0.00604776081655767, 0.006082123093924474, 0.0061164853712912795, 0.006150847648658085, 0.006185209926024889, 0.006219572203391695, 0.0062539344807585, 0.006288296758125304, 0.006322659035492109, 0.006357021312858914, 0.0063913835902257195, 0.006425745867592524, 0.006460108144959329, 0.006494470422326134, 0.006528832699692939, 0.0065631949770597435, 0.006597557254426549, 0.006631919531793354, 0.006666281809160159, 0.006700644086526963, 0.006735006363893768, 0.006769368641260574, 0.006803730918627378, 0.0068380931959941835, 0.006872455473360989, 0.006906817750727792, 0.006941180028094598, 0.006975542305461403, 0.007009904582828208, 0.007044266860195013, 0.007078629137561818, 0.0071129914149286235, 0.007147353692295428, 0.007181715969662232, 0.007216078247029038, 0.007250440524395843, 0.0072848028017626475, 0.007319165079129453, 0.007353527356496257, 0.007387889633863063, 0.007422251911229867, 0.007456614188596672, 0.007490976465963478, 0.007525338743330282, 0.007559701020697087, 0.007594063298063892, 0.007628425575430697, 0.007662787852797502, 0.007697150130164307, 0.0077315124075311124, 0.007765874684897916, 0.007800236962264721, 0.007834599239631528, 0.007868961516998332, 0.007903323794365136, 0.007937686071731941, 0.007972048349098747, 0.008006410626465552, 0.008040772903832356, 0.008075135181199162, 0.008109497458565967, 0.008143859735932771, 0.008178222013299577, 0.00821258429066638, 0.008246946568033186, 0.00828130884539999, 0.008315671122766795, 0.008350033400133601, 0.008384395677500406, 0.008418757954867212, 0.008453120232234015, 0.008487482509600821, 0.008521844786967625, 0.00855620706433443, 0.008590569341701236, 0.00862493161906804, 0.008659293896434847, 0.00869365617380165, 0.008728018451168454, 0.00876238072853526, 0.008796743005902065, 0.00883110528326887, 0.008865467560635675, 0.008899829838002481, 0.008934192115369284, 0.008968554392736089, 0.009002916670102895, 0.0090372789474697, 0.009071641224836505, 0.00910600350220331, 0.009140365779570116, 0.009174728056936919, 0.009209090334303723, 0.00924345261167053, 0.009277814889037334, 0.00931217716640414, 0.009346539443770945, 0.009380901721137749, 0.009415263998504553, 0.009449626275871358, 0.009483988553238164, 0.009518350830604969, 0.009552713107971775, 0.00958707538533858, 0.009621437662705384, 0.009655799940072188, 0.009690162217438993, 0.009724524494805799, 0.009758886772172603, 0.009793249049539408, 0.009827611326906214, 0.009861973604273018, 0.009896335881639825, 0.009930698159006627, 0.009965060436373433, 0.009999422713740238, 0.010033784991107042, 0.010068147268473849, 0.010102509545840653, 0.01013687182320746, 0.010171234100574262, 0.010205596377941066, 0.010239958655307873, 0.010274320932674677, 0.010308683210041483, 0.010343045487408288, 0.010377407764775094, 0.010411770042141897, 0.010446132319508701, 0.010480494596875507, 0.010514856874242312, 0.010549219151609118, 0.010583581428975922, 0.010617943706342729, 0.010652305983709531, 0.010686668261076336, 0.010721030538443142, 0.010755392815809946, 0.010789755093176753, 0.010824117370543557, 0.010858479647910362, 0.010892841925277166, 0.01092720420264397, 0.010961566480010777, 0.010995928757377581, 0.011030291034744387, 0.011064653312111192, 0.011099015589477996, 0.0111333778668448, 0.011167740144211605, 0.011202102421578411, 0.011236464698945216, 0.01127082697631202, 0.011305189253678826, 0.011339551531045631, 0.011373913808412435, 0.01140827608577924, 0.011442638363146046, 0.01147700064051285, 0.011511362917879655, 0.011545725195246461, 0.011580087472613266, 0.01161444974998007, 0.011648812027346874, 0.01168317430471368, 0.011717536582080485, 0.01175189885944729, 0.011786261136814096, 0.0118206234141809, 0.011854985691547705, 0.01188934796891451, 0.011923710246281314, 0.01195807252364812, 0.011992434801014924, 0.01202679707838173, 0.012061159355748535, 0.01209552163311534, 0.012129883910482144, 0.012164246187848948, 0.012198608465215754, 0.012232970742582559, 0.012267333019949365, 0.01230169529731617, 0.012336057574682974, 0.012370419852049779, 0.012404782129416583, 0.01243914440678339, 0.012473506684150194, 0.012507868961517, 0.012542231238883804, 0.012576593516250609, 0.012610955793617413, 0.012645318070984218, 0.012679680348351024, 0.012714042625717828, 0.012748404903084634, 0.012782767180451439, 0.012817129457818243, 0.012851491735185048, 0.012885854012551852, 0.012920216289918659, 0.012954578567285463, 0.012988940844652267, 0.013023303122019074, 0.013057665399385878, 0.013092027676752683, 0.013126389954119487, 0.013160752231486293, 0.013195114508853098, 0.013229476786219902, 0.013263839063586708, 0.013298201340953513, 0.013332563618320317, 0.013366925895687122, 0.013401288173053926, 0.013435650450420732, 0.013470012727787537, 0.013504375005154343, 0.013538737282521147, 0.013573099559887952, 0.013607461837254756, 0.01364182411462156, 0.013676186391988367, 0.013710548669355171, 0.013744910946721978, 0.013779273224088782, 0.013813635501455585, 0.013847997778822391, 0.013882360056189195, 0.013916722333556002, 0.013951084610922806, 0.013985446888289612, 0.014019809165656417, 0.01405417144302322, 0.014088533720390026, 0.01412289599775683, 0.014157258275123636, 0.01419162055249044, 0.014225982829857247, 0.014260345107224051, 0.014294707384590856, 0.01432906966195766, 0.014363431939324465, 0.014397794216691271, 0.014432156494058076, 0.01446651877142488, 0.014500881048791686, 0.01453524332615849, 0.014569605603525295, 0.0146039678808921, 0.014638330158258906, 0.01467269243562571, 0.014707054712992515, 0.01474141699035932, 0.014775779267726125, 0.01481014154509293, 0.014844503822459734, 0.01487886609982654, 0.014913228377193345, 0.01494759065456015, 0.014981952931926956, 0.01501631520929376, 0.015050677486660564, 0.015085039764027369, 0.015119402041394173, 0.01515376431876098, 0.015188126596127784, 0.01522248887349459, 0.015256851150861395, 0.015291213428228199, 0.015325575705595004, 0.015359937982961808, 0.015394300260328614, 0.015428662537695419, 0.015463024815062225, 0.01549738709242903, 0.015531749369795832, 0.015566111647162638, 0.015600473924529443, 0.01563483620189625, 0.015669198479263055, 0.015703560756629858, 0.015737923033996664, 0.015772285311363467, 0.015806647588730273, 0.01584100986609708, 0.015875372143463882, 0.015909734420830688, 0.015944096698197494, 0.015978458975564297, 0.016012821252931103, 0.01604718353029791, 0.016081545807664712, 0.016115908085031518, 0.016150270362398324, 0.016184632639765127, 0.016218994917131933, 0.016253357194498736, 0.016287719471865542, 0.01632208174923235, 0.016356444026599155, 0.016390806303965957, 0.01642516858133276, 0.016459530858699566, 0.016493893136066373, 0.01652825541343318, 0.01656261769079998, 0.016596979968166788, 0.01663134224553359, 0.016665704522900397, 0.016700066800267203, 0.016734429077634005, 0.01676879135500081, 0.016803153632367614, 0.016837515909734424, 0.016871878187101227, 0.01690624046446803, 0.016940602741834836, 0.016974965019201642, 0.017009327296568448, 0.01704368957393525, 0.017078051851302057, 0.01711241412866886, 0.017146776406035666])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_aa083a3269c347e19c1d4393c01fd3d2.x = d3.scale.linear()
              .domain([0.0, 0.017146776406035666])
              .range([0, 400]);

    color_map_aa083a3269c347e19c1d4393c01fd3d2.legend = L.control({position: 'topright'});
    color_map_aa083a3269c347e19c1d4393c01fd3d2.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_aa083a3269c347e19c1d4393c01fd3d2.legend.addTo(map_bf988466935740c6aae141b307784714);

    color_map_aa083a3269c347e19c1d4393c01fd3d2.xAxis = d3.svg.axis()
        .scale(color_map_aa083a3269c347e19c1d4393c01fd3d2.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 0.002857796067672611, 0.005715592135345222, 0.008573388203017833, 0.011431184270690445, 0.014288980338363056, 0.017146776406035666]);

    color_map_aa083a3269c347e19c1d4393c01fd3d2.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_aa083a3269c347e19c1d4393c01fd3d2.g = color_map_aa083a3269c347e19c1d4393c01fd3d2.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_aa083a3269c347e19c1d4393c01fd3d2.g.selectAll("rect")
        .data(color_map_aa083a3269c347e19c1d4393c01fd3d2.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_aa083a3269c347e19c1d4393c01fd3d2.x(color_map_aa083a3269c347e19c1d4393c01fd3d2.color.domain()[i - 1]) : color_map_aa083a3269c347e19c1d4393c01fd3d2.x.range()[0],
            x1: i < color_map_aa083a3269c347e19c1d4393c01fd3d2.color.domain().length ? color_map_aa083a3269c347e19c1d4393c01fd3d2.x(color_map_aa083a3269c347e19c1d4393c01fd3d2.color.domain()[i]) : color_map_aa083a3269c347e19c1d4393c01fd3d2.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_aa083a3269c347e19c1d4393c01fd3d2.g.call(color_map_aa083a3269c347e19c1d4393c01fd3d2.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('13_PT');

