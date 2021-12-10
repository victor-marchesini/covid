    
            var map_f935f4e079db4d2f8da0e15522506dfa = L.map(
                "map_f935f4e079db4d2f8da0e15522506dfa",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_68c1504c7a4a49c8ba2c61942d921cb7 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_f935f4e079db4d2f8da0e15522506dfa);
        
    
            var choropleth_113d738fc27d4f7cb73fee765c90eda0 = L.featureGroup(
                {}
            ).addTo(map_f935f4e079db4d2f8da0e15522506dfa);
        
    
        function geo_json_4289698efb16477db4e9b72337fba02c_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 428: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 482: case 410: case 335: case 380: case 393: case 338: case 340: case 333: case 416: case 375: case 361: case 394: case 368: case 362: case 348: case 358: case 356: case 360: case 347: case 355: case 350: case 457: case 337: case 463: case 454: case 483: case 366: case 465: case 388: case 387: case 378: case 511: case 458: case 450: case 480: case 341: case 389: case 384: case 510: case 405: case 414: case 406: case 374: case 476: case 890: 
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 443: case 439: case 434: case 325: case 424: case 466: case 473: case 472: case 427: case 415: case 408: case 364: case 359: case 354: case 339: case 331: case 357: case 459: case 433: case 399: case 471: case 477: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 440: case 448: case 456: case 455: case 468: case 464: case 444: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 438: case 449: case 453: case 462: case 437: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 447: case 467: case 470: case 442: case 436: case 446: case 426: case 419: case 367: case 445: case 485: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_4289698efb16477db4e9b72337fba02c_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_4289698efb16477db4e9b72337fba02c = L.geoJson(null, {
                onEachFeature: geo_json_4289698efb16477db4e9b72337fba02c_onEachFeature,
            
                style: geo_json_4289698efb16477db4e9b72337fba02c_styler,
        });

        function geo_json_4289698efb16477db4e9b72337fba02c_add (data) {
            geo_json_4289698efb16477db4e9b72337fba02c
                .addData(data)
                .addTo(choropleth_113d738fc27d4f7cb73fee765c90eda0);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_4289698efb16477db4e9b72337fba02c_add(obj);
            })
          }
            const file_path ='/covid/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_3570cff0b11d4056838c3dcbfc96d892 = {};

    
    color_map_3570cff0b11d4056838c3dcbfc96d892.color = d3.scale.threshold()
              .domain([0.0014501160092807424, 0.0015537864750951316, 0.0016574569409095207, 0.00176112740672391, 0.001864797872538299, 0.001968468338352688, 0.0020721388041670774, 0.0021758092699814663, 0.0022794797357958557, 0.0023831502016102447, 0.0024868206674246336, 0.0025904911332390234, 0.0026941615990534124, 0.0027978320648678013, 0.0029015025306821903, 0.0030051729964965792, 0.003108843462310969, 0.003212513928125358, 0.003316184393939747, 0.0034198548597541363, 0.0035235253255685253, 0.0036271957913829142, 0.003730866257197304, 0.003834536723011693, 0.003938207188826082, 0.004041877654640471, 0.00414554812045486, 0.004249218586269249, 0.004352889052083638, 0.004456559517898027, 0.004560229983712416, 0.004663900449526807, 0.004767570915341196, 0.004871241381155585, 0.004974911846969974, 0.0050785823127843625, 0.0051822527785987515, 0.00528592324441314, 0.00538959371022753, 0.005493264176041919, 0.005596934641856308, 0.005700605107670698, 0.005804275573485086, 0.005907946039299476, 0.006011616505113866, 0.006115286970928254, 0.006218957436742644, 0.0063226279025570325, 0.0064262983683714215, 0.00652996883418581, 0.0066336393000002, 0.006737309765814588, 0.006840980231628978, 0.006944650697443368, 0.007048321163257756, 0.007151991629072146, 0.007255662094886535, 0.007359332560700924, 0.007463003026515313, 0.0075666734923297025, 0.007670343958144091, 0.00777401442395848, 0.00787768488977287, 0.007981355355587258, 0.008085025821401647, 0.008188696287216038, 0.008292366753030425, 0.008396037218844816, 0.008499707684659205, 0.008603378150473594, 0.008707048616287983, 0.008810719082102372, 0.00891438954791676, 0.00901806001373115, 0.00912173047954554, 0.009225400945359927, 0.009329071411174318, 0.009432741876988707, 0.009536412342803096, 0.009640082808617485, 0.009743753274431874, 0.009847423740246263, 0.009951094206060654, 0.010054764671875042, 0.01015843513768943, 0.01026210560350382, 0.01036577606931821, 0.010469446535132598, 0.010573117000946989, 0.010676787466761376, 0.010780457932575765, 0.010884128398390156, 0.010987798864204545, 0.011091469330018932, 0.011195139795833323, 0.011298810261647712, 0.0114024807274621, 0.011506151193276491, 0.011609821659090878, 0.011713492124905267, 0.011817162590719658, 0.011920833056534047, 0.012024503522348434, 0.012128173988162825, 0.012231844453977214, 0.012335514919791603, 0.012439185385605993, 0.01254285585142038, 0.01264652631723477, 0.01275019678304916, 0.01285386724886355, 0.012957537714677936, 0.013061208180492327, 0.013164878646306716, 0.013268549112121105, 0.013372219577935496, 0.013475890043749883, 0.013579560509564272, 0.013683230975378663, 0.013786901441193052, 0.013890571907007439, 0.01399424237282183, 0.014097912838636218, 0.014201583304450607, 0.014305253770264998, 0.014408924236079385, 0.014512594701893774, 0.014616265167708165, 0.014719935633522554, 0.014823606099336941, 0.014927276565151332, 0.01503094703096572, 0.01513461749678011, 0.0152382879625945, 0.015341958428408888, 0.015445628894223276, 0.015549299360037667, 0.015652969825852056, 0.015756640291666443, 0.015860310757480834, 0.015963981223295225, 0.016067651689109612, 0.016171322154924003, 0.01627499262073839, 0.01637866308655278, 0.016482333552367168, 0.01658600401818156, 0.016689674483995946, 0.016793344949810336, 0.016897015415624723, 0.017000685881439114, 0.017104356347253505, 0.017208026813067892, 0.01731169727888228, 0.017415367744696673, 0.01751903821051106, 0.017622708676325448, 0.017726379142139842, 0.01783004960795423, 0.017933720073768616, 0.018037390539583004, 0.018141061005397398, 0.018244731471211785, 0.018348401937026172, 0.018452072402840566, 0.018555742868654954, 0.01865941333446934, 0.018763083800283728, 0.018866754266098115, 0.01897042473191251, 0.019074095197726897, 0.019177765663541284, 0.019281436129355678, 0.019385106595170065, 0.019488777060984452, 0.019592447526798847, 0.019696117992613234, 0.01979978845842762, 0.019903458924242008, 0.020007129390056402, 0.02011079985587079, 0.020214470321685177, 0.02031814078749957, 0.020421811253313958, 0.020525481719128345, 0.02062915218494274, 0.02073282265075712, 0.020836493116571514, 0.0209401635823859, 0.02104383404820029, 0.021147504514014683, 0.02125117497982907, 0.021354845445643457, 0.02145851591145785, 0.02156218637727224, 0.021665856843086626, 0.021769527308901013, 0.021873197774715407, 0.021976868240529794, 0.02208053870634418, 0.022184209172158575, 0.022287879637972963, 0.02239155010378735, 0.022495220569601744, 0.022598891035416124, 0.02270256150123052, 0.022806231967044906, 0.022909902432859293, 0.023013572898673687, 0.023117243364488074, 0.02322091383030246, 0.023324584296116856, 0.023428254761931243, 0.02353192522774563, 0.023635595693560017, 0.02373926615937441, 0.0238429366251888, 0.023946607091003186, 0.02405027755681758, 0.024153948022631967, 0.024257618488446354, 0.02436128895426075, 0.02446495942007513, 0.024568629885889523, 0.02467230035170391, 0.024775970817518297, 0.02487964128333269, 0.02498331174914708, 0.025086982214961466, 0.02519065268077586, 0.025294323146590247, 0.025397993612404635, 0.025501664078219022, 0.025605334544033416, 0.025709005009847803, 0.02581267547566219, 0.025916345941476585, 0.026020016407290972, 0.02612368687310536, 0.026227357338919753, 0.026331027804734133, 0.026434698270548528, 0.026538368736362915, 0.026642039202177302, 0.026745709667991696, 0.026849380133806083, 0.02695305059962047, 0.027056721065434865, 0.027160391531249252, 0.02726406199706364, 0.027367732462878026, 0.02747140292869242, 0.027575073394506808, 0.027678743860321195, 0.02778241432613559, 0.027886084791949976, 0.027989755257764364, 0.028093425723578758, 0.028197096189393138, 0.028300766655207532, 0.02840443712102192, 0.028508107586836307, 0.0286117780526507, 0.028715448518465088, 0.028819118984279475, 0.02892278945009387, 0.029026459915908256, 0.029130130381722644, 0.02923380084753703, 0.029337471313351425, 0.029441141779165812, 0.0295448122449802, 0.029648482710794594, 0.02975215317660898, 0.029855823642423368, 0.029959494108237762, 0.030063164574052142, 0.030166835039866537, 0.030270505505680924, 0.03037417597149531, 0.030477846437309705, 0.030581516903124092, 0.03068518736893848, 0.030788857834752874, 0.03089252830056726, 0.030996198766381648, 0.031099869232196035, 0.03120353969801043, 0.03130721016382482, 0.031410880629639204, 0.0315145510954536, 0.031618221561267985, 0.03172189202708237, 0.03182556249289677, 0.03192923295871115, 0.03203290342452554, 0.03213657389033993, 0.032240244356154316, 0.03234391482196871, 0.0324475852877831, 0.032551255753597484, 0.03265492621941188, 0.032758596685226266, 0.03286226715104065, 0.03296593761685505, 0.033069608082669434, 0.03317327854848382, 0.03327694901429821, 0.0333806194801126, 0.03348428994592699, 0.033587960411741384, 0.03369163087755577, 0.03379530134337016, 0.03389897180918455, 0.03400264227499894, 0.03410631274081333, 0.034209983206627714, 0.0343136536724421, 0.03441732413825649, 0.03452099460407088, 0.03462466506988527, 0.03472833553569966, 0.03483200600151405, 0.03493567646732844, 0.035039346933142826, 0.03514301739895722, 0.03524668786477161, 0.035350358330585994, 0.03545402879640039, 0.035557699262214776, 0.03566136972802916, 0.03576504019384356, 0.035868710659657944, 0.03597238112547233, 0.03607605159128672, 0.036179722057101106, 0.03628339252291549, 0.03638706298872989, 0.036490733454544275, 0.03659440392035866, 0.036698074386173056, 0.03680174485198744, 0.03690541531780183, 0.037009085783616225, 0.03711275624943061, 0.037216426715245, 0.03732009718105939, 0.03742376764687378, 0.03752743811268817, 0.03763110857850256, 0.03773477904431695, 0.037838449510131336, 0.03794211997594573, 0.03804579044176011, 0.0381494609075745, 0.03825313137338889, 0.03835680183920328, 0.038460472305017666, 0.03856414277083206, 0.03866781323664645, 0.038771483702460835, 0.03887515416827523, 0.038978824634089616, 0.039082495099904004, 0.0391861655657184, 0.039289836031532785, 0.03939350649734717, 0.039497176963161566, 0.039600847428975954, 0.03970451789479034, 0.039808188360604735, 0.039911858826419115, 0.0400155292922335, 0.040119199758047897, 0.040222870223862284, 0.04032654068967667, 0.040430211155491065, 0.04053388162130545, 0.04063755208711984, 0.040741222552934234, 0.04084489301874862, 0.04094856348456301, 0.0410522339503774, 0.04115590441619179, 0.04125957488200618, 0.04136324534782057, 0.04146691581363496, 0.041570586279449345, 0.04167425674526374, 0.04177792721107812, 0.04188159767689251, 0.0419852681427069, 0.04208893860852129, 0.042192609074335675, 0.04229627954015007, 0.04239995000596446, 0.042503620471778844, 0.04260729093759324, 0.042710961403407625, 0.04281463186922201, 0.04291830233503641, 0.043021972800850794, 0.04312564326666518, 0.043229313732479575, 0.04333298419829396, 0.04343665466410835, 0.043540325129922744, 0.043643995595737124, 0.04374766606155151, 0.043851336527365906, 0.04395500699318029, 0.04405867745899468, 0.044162347924809074, 0.04426601839062346, 0.04436968885643785, 0.04447335932225224, 0.04457702978806663, 0.04468070025388102, 0.04478437071969541, 0.0448880411855098, 0.044991711651324186, 0.04509538211713858, 0.04519905258295297, 0.045302723048767354, 0.04540639351458175, 0.04551006398039613, 0.045613734446210516, 0.04571740491202491, 0.0458210753778393, 0.045924745843653685, 0.04602841630946808, 0.046132086775282466, 0.04623575724109685, 0.04633942770691125, 0.046443098172725635, 0.04654676863854002, 0.046650439104354416, 0.0467541095701688, 0.04685778003598319, 0.046961450501797584, 0.04706512096761197, 0.04716879143342636, 0.04727246189924075, 0.04737613236505513, 0.04747980283086952, 0.047583473296683915, 0.0476871437624983, 0.04779081422831269, 0.04789448469412708, 0.04799815515994147, 0.04810182562575586, 0.04820549609157025, 0.04830916655738464, 0.048412837023199026, 0.04851650748901342, 0.04862017795482781, 0.048723848420642195, 0.04882751888645659, 0.048931189352270976, 0.04903485981808536, 0.04913853028389976, 0.04924220074971414, 0.049345871215528525, 0.04944954168134292, 0.049553212147157306, 0.049656882612971694, 0.04976055307878609, 0.049864223544600475, 0.04996789401041486, 0.050071564476229256, 0.050175234942043644, 0.05027890540785803, 0.050382575873672425, 0.05048624633948681, 0.0505899168053012, 0.050693587271115594, 0.05079725773692998, 0.05090092820274437, 0.05100459866855876, 0.05110826913437314, 0.05121193960018753, 0.051315610066001924, 0.05141928053181631, 0.0515229509976307, 0.05162662146344509, 0.05173029192925948, 0.05183396239507387, 0.05193763286088826, 0.05204130332670265, 0.052144973792517035, 0.05224864425833143, 0.05235231472414582, 0.052455985189960204, 0.0525596556557746, 0.052663326121588985, 0.05276699658740337, 0.05287066705321777, 0.05297433751903215, 0.053078007984846534, 0.05318167845066093])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_3570cff0b11d4056838c3dcbfc96d892.x = d3.scale.linear()
              .domain([0.0014501160092807424, 0.05318167845066093])
              .range([0, 400]);

    color_map_3570cff0b11d4056838c3dcbfc96d892.legend = L.control({position: 'topright'});
    color_map_3570cff0b11d4056838c3dcbfc96d892.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_3570cff0b11d4056838c3dcbfc96d892.legend.addTo(map_f935f4e079db4d2f8da0e15522506dfa);

    color_map_3570cff0b11d4056838c3dcbfc96d892.xAxis = d3.svg.axis()
        .scale(color_map_3570cff0b11d4056838c3dcbfc96d892.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0014501160092807424, 0.010072043082844106, 0.018693970156407468, 0.027315897229970833, 0.0359378243035342, 0.04455975137709756, 0.05318167845066093]);

    color_map_3570cff0b11d4056838c3dcbfc96d892.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_3570cff0b11d4056838c3dcbfc96d892.g = color_map_3570cff0b11d4056838c3dcbfc96d892.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_3570cff0b11d4056838c3dcbfc96d892.g.selectAll("rect")
        .data(color_map_3570cff0b11d4056838c3dcbfc96d892.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_3570cff0b11d4056838c3dcbfc96d892.x(color_map_3570cff0b11d4056838c3dcbfc96d892.color.domain()[i - 1]) : color_map_3570cff0b11d4056838c3dcbfc96d892.x.range()[0],
            x1: i < color_map_3570cff0b11d4056838c3dcbfc96d892.color.domain().length ? color_map_3570cff0b11d4056838c3dcbfc96d892.x(color_map_3570cff0b11d4056838c3dcbfc96d892.color.domain()[i]) : color_map_3570cff0b11d4056838c3dcbfc96d892.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_3570cff0b11d4056838c3dcbfc96d892.g.call(color_map_3570cff0b11d4056838c3dcbfc96d892.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('5077_TALIRIA PETRONE SOARES');

