/*=====================
phil@affinio.com
@phil_renaud
March 2016
=====================*/


/*=======================================================
ESTABLISH OUR GLOBAL VARIABLES
=======================================================*/
// Making a small modifications
// Changing Data from export to import 
// Let Pull data https://www.census.gov/foreign-trade/statistics/product/enduse/imports/index.html

// Import Data ================================

var importsToCanada = [{"id":"Value 2006","stats":[{"name":"food","value":15033904},{"name":"industrial","value":147294130},{"name":"capital_goods","value":35338372},{"name":"automative","value":70280670},{"name":"consumer_goods","value":19803816},{"name":"other_goods","value":14686966}]},{"id":"Value 2007","stats":[{"name":"food","value":16643737},{"name":"industrial","value":157382987},{"name":"capital_goods","value":38101122},{"name":"automative","value":69129720},{"name":"consumer_goods","value":20887916},{"name":"other_goods","value":14911278}]},{"id":"Value 2008","stats":[{"name":"food","value":19080251},{"name":"industrial","value":192482362},{"name":"capital_goods","value":37125748},{"name":"automative","value":54484624},{"name":"consumer_goods","value":21014439},{"name":"other_goods","value":15304003}]},{"id":"Value 2009","stats":[{"name":"food","value":15917330},{"name":"industrial","value":115003216},{"name":"capital_goods","value":28368025},{"name":"automative","value":36902359},{"name":"consumer_goods","value":18291762},{"name":"other_goods","value":11765760}]},{"id":"Value 2010","stats":[{"name":"food","value":17606124},{"name":"industrial","value":149136878},{"name":"capital_goods","value":29506527},{"name":"automative","value":52175098},{"name":"consumer_goods","value":17888331},{"name":"other_goods","value":11323773}]},{"id":"Value 2011","stats":[{"name":"food","value":20053620},{"name":"industrial","value":175316239},{"name":"capital_goods","value":33684297},{"name":"automative","value":56272729},{"name":"consumer_goods","value":18066189},{"name":"other_goods","value":11931676}]},{"id":"Value 2012","stats":[{"name":"food","value":21414039},{"name":"industrial","value":172897917},{"name":"capital_goods","value":35286155},{"name":"automative","value":64379220},{"name":"consumer_goods","value":17630157},{"name":"other_goods","value":12655526}]},{"id":"Value 2013","stats":[{"name":"food","value":23172139},{"name":"industrial","value":181063662},{"name":"capital_goods","value":35383600},{"name":"automative","value":61934233},{"name":"consumer_goods","value":17902250},{"name":"other_goods","value":13101919}]},{"id":"Value 2014","stats":[{"name":"food","value":24480042},{"name":"industrial","value":190340072},{"name":"capital_goods","value":37469054},{"name":"automative","value":62835882},{"name":"consumer_goods","value":17926433},{"name":"other_goods","value":14746507}]},{"id":"Value 2015","stats":[{"name":"food","value":23580485},{"name":"industrial","value":137955662},{"name":"capital_goods","value":36423474},{"name":"automative","value":62082939},{"name":"consumer_goods","value":18678741},{"name":"other_goods","value":16469008}]}];
var importsToMexico = [{"id":"Value 2006","stats":[{"name":"food","value":10296561},{"name":"industrial","value":50386275},{"name":"capital_goods","value":43473660},{"name":"automative","value":50891072},{"name":"consumer_goods","value":36459201},{"name":"other_goods","value":6746387}]},{"id":"Value 2007","stats":[{"name":"food","value":11165891},{"name":"industrial","value":51489031},{"name":"capital_goods","value":47028199},{"name":"automative","value":52552822},{"name":"consumer_goods","value":41128783},{"name":"other_goods","value":7349241}]},{"id":"Value 2008","stats":[{"name":"food","value":11847767},{"name":"industrial","value":60514714},{"name":"capital_goods","value":46327734},{"name":"automative","value":48230532},{"name":"consumer_goods","value":41634603},{"name":"other_goods","value":7386269}]},{"id":"Value 2009","stats":[{"name":"food","value":12242598},{"name":"industrial","value":40596548},{"name":"capital_goods","value":41220683},{"name":"automative","value":38319380},{"name":"consumer_goods","value":37955226},{"name":"other_goods","value":6319938}]},{"id":"Value 2010","stats":[{"name":"food","value":14458881},{"name":"industrial","value":53800774},{"name":"capital_goods","value":56290654},{"name":"automative","value":57798595},{"name":"consumer_goods","value":40644233},{"name":"other_goods","value":6992489}]},{"id":"Value 2011","stats":[{"name":"food","value":16850395},{"name":"industrial","value":70088356},{"name":"capital_goods","value":62896153},{"name":"automative","value":67080330},{"name":"consumer_goods","value":39177326},{"name":"other_goods","value":6781037}]},{"id":"Value 2012","stats":[{"name":"food","value":17411323},{"name":"industrial","value":66351295},{"name":"capital_goods","value":69798898},{"name":"automative","value":77557934},{"name":"consumer_goods","value":39166384},{"name":"other_goods","value":7307804}]},{"id":"Value 2013","stats":[{"name":"food","value":18748347},{"name":"industrial","value":58723059},{"name":"capital_goods","value":71302116},{"name":"automative","value":85866017},{"name":"consumer_goods","value":38486977},{"name":"other_goods","value":7428648}]},{"id":"Value 2014","stats":[{"name":"food","value":20615904},{"name":"industrial","value":54487603},{"name":"capital_goods","value":76270867},{"name":"automative","value":97119181},{"name":"consumer_goods","value":37185592},{"name":"other_goods","value":8394907}]},{"id":"Value 2015","stats":[{"name":"food","value":22392274},{"name":"industrial","value":36281712},{"name":"capital_goods","value":83472140},{"name":"automative","value":105282711},{"name":"consumer_goods","value":38763694},{"name":"other_goods","value":8548577}]}];
var importsToChina = [{"id":"Value 2006","stats":[{"name":"food","value":3752259},{"name":"industrial","value":28450945},{"name":"capital_goods","value":89138585},{"name":"automative","value":7343472},{"name":"consumer_goods","value":155663021},{"name":"other_goods","value":3426071}]},{"id":"Value 2007","stats":[{"name":"food","value":4425614},{"name":"industrial","value":29551651},{"name":"capital_goods","value":103283713},{"name":"automative","value":9041882},{"name":"consumer_goods","value":171249457},{"name":"other_goods","value":3890548}]},{"id":"Value 2008","stats":[{"name":"food","value":5132725},{"name":"industrial","value":35197822},{"name":"capital_goods","value":109984105},{"name":"automative","value":9166400},{"name":"consumer_goods","value":174226741},{"name":"other_goods","value":4064836}]},{"id":"Value 2009","stats":[{"name":"food","value":4413333},{"name":"industrial","value":23335292},{"name":"capital_goods","value":97523012},{"name":"automative","value":7506641},{"name":"consumer_goods","value":159920312},{"name":"other_goods","value":3675295}]},{"id":"Value 2010","stats":[{"name":"food","value":5076701},{"name":"industrial","value":29430729},{"name":"capital_goods","value":130213276},{"name":"automative","value":10098659},{"name":"consumer_goods","value":186218920},{"name":"other_goods","value":3914344}]},{"id":"Value 2011","stats":[{"name":"food","value":5847193},{"name":"industrial","value":35617645},{"name":"capital_goods","value":148591941},{"name":"automative","value":12446331},{"name":"consumer_goods","value":192742993},{"name":"other_goods","value":4125133}]},{"id":"Value 2012","stats":[{"name":"food","value":6271027},{"name":"industrial","value":38134752},{"name":"capital_goods","value":154351150},{"name":"automative","value":14957209},{"name":"consumer_goods","value":207494534},{"name":"other_goods","value":4410412}]},{"id":"Value 2013","stats":[{"name":"food","value":6173032},{"name":"industrial","value":39493037},{"name":"capital_goods","value":158648781},{"name":"automative","value":16265808},{"name":"consumer_goods","value":215269904},{"name":"other_goods","value":4583774}]},{"id":"Value 2014","stats":[{"name":"food","value":6130482},{"name":"industrial","value":44348496},{"name":"capital_goods","value":167783343},{"name":"automative","value":18809038},{"name":"consumer_goods","value":225185450},{"name":"other_goods","value":4497643}]},{"id":"Value 2015","stats":[{"name":"food","value":5880998},{"name":"industrial","value":44645921},{"name":"capital_goods","value":172579165},{"name":"automative","value":19536177},{"name":"consumer_goods","value":234435291},{"name":"other_goods","value":4803211}]}];
var importsToJapan = [{"id":"Value 2006","stats":[{"name":"food","value":539361},{"name":"industrial","value":15010206},{"name":"capital_goods","value":51647441},{"name":"automative","value":60163622},{"name":"consumer_goods","value":16275688},{"name":"other_goods","value":4544459}]},{"id":"Value 2007","stats":[{"name":"food","value":572746},{"name":"industrial","value":15181656},{"name":"capital_goods","value":49920563},{"name":"automative","value":59260710},{"name":"consumer_goods","value":16253410},{"name":"other_goods","value":4274253}]},{"id":"Value 2008","stats":[{"name":"food","value":668328},{"name":"industrial","value":14878946},{"name":"capital_goods","value":49789246},{"name":"automative","value":55366962},{"name":"consumer_goods","value":14899740},{"name":"other_goods","value":3658985}]},{"id":"Value 2009","stats":[{"name":"food","value":689108},{"name":"industrial","value":11125839},{"name":"capital_goods","value":36191481},{"name":"automative","value":33756586},{"name":"consumer_goods","value":10944847},{"name":"other_goods","value":3095827}]},{"id":"Value 2010","stats":[{"name":"food","value":701204},{"name":"industrial","value":14353535},{"name":"capital_goods","value":44654626},{"name":"automative","value":45604403},{"name":"consumer_goods","value":11842657},{"name":"other_goods","value":3395717}]},{"id":"Value 2011","stats":[{"name":"food","value":745652},{"name":"industrial","value":15987233},{"name":"capital_goods","value":52293788},{"name":"automative","value":45339491},{"name":"consumer_goods","value":11478667},{"name":"other_goods","value":3083062}]},{"id":"Value 2012","stats":[{"name":"food","value":765299},{"name":"industrial","value":16994690},{"name":"capital_goods","value":57193010},{"name":"automative","value":56408006},{"name":"consumer_goods","value":11265894},{"name":"other_goods","value":3804797}]},{"id":"Value 2013","stats":[{"name":"food","value":752327},{"name":"industrial","value":16758475},{"name":"capital_goods","value":53451767},{"name":"automative","value":54205376},{"name":"consumer_goods","value":9832097},{"name":"other_goods","value":3574367}]},{"id":"Value 2014","stats":[{"name":"food","value":773546},{"name":"industrial","value":16888203},{"name":"capital_goods","value":53760685},{"name":"automative","value":49887331},{"name":"consumer_goods","value":9187718},{"name":"other_goods","value":3506231}]},{"id":"Value 2015","stats":[{"name":"food","value":805827},{"name":"industrial","value":14847328},{"name":"capital_goods","value":51725635},{"name":"automative","value":50576119},{"name":"consumer_goods","value":9565159},{"name":"other_goods","value":3599680}]}];
var importsToFrance = [{"id":"Value 2006","stats":[{"name":"food","value":3307359},{"name":"industrial","value":7027348},{"name":"capital_goods","value":13706092},{"name":"automative","value":1347659},{"name":"consumer_goods","value":9977652},{"name":"other_goods","value":1673518}]},{"id":"Value 2007","stats":[{"name":"food","value":3760650},{"name":"industrial","value":7348217},{"name":"capital_goods","value":16046208},{"name":"automative","value":1340711},{"name":"consumer_goods","value":11315322},{"name":"other_goods","value":1741602}]},{"id":"Value 2008","stats":[{"name":"food","value":3757001},{"name":"industrial","value":8726338},{"name":"capital_goods","value":16085856},{"name":"automative","value":1614694},{"name":"consumer_goods","value":11871517},{"name":"other_goods","value":1993924}]},{"id":"Value 2009","stats":[{"name":"food","value":2981006},{"name":"industrial","value":5211882},{"name":"capital_goods","value":13244987},{"name":"automative","value":1154567},{"name":"consumer_goods","value":9191282},{"name":"other_goods","value":2452320}]},{"id":"Value 2010","stats":[{"name":"food","value":3306337},{"name":"industrial","value":5724603},{"name":"capital_goods","value":14683718},{"name":"automative","value":939150},{"name":"consumer_goods","value":11077158},{"name":"other_goods","value":2624526}]},{"id":"Value 2011","stats":[{"name":"food","value":3860978},{"name":"industrial","value":6776230},{"name":"capital_goods","value":15746756},{"name":"automative","value":1059069},{"name":"consumer_goods","value":10150725},{"name":"other_goods","value":2455288}]},{"id":"Value 2012","stats":[{"name":"food","value":4104045},{"name":"industrial","value":7017945},{"name":"capital_goods","value":17119479},{"name":"automative","value":892673},{"name":"consumer_goods","value":9684827},{"name":"other_goods","value":2827154}]},{"id":"Value 2013","stats":[{"name":"food","value":4291061},{"name":"industrial","value":7352127},{"name":"capital_goods","value":18904251},{"name":"automative","value":965174},{"name":"consumer_goods","value":10795552},{"name":"other_goods","value":3398126}]},{"id":"Value 2014","stats":[{"name":"food","value":4472406},{"name":"industrial","value":7409506},{"name":"capital_goods","value":19734897},{"name":"automative","value":1146882},{"name":"consumer_goods","value":10758226},{"name":"other_goods","value":3352032}]},{"id":"Value 2015","stats":[{"name":"food","value":4634218},{"name":"industrial","value":6379029},{"name":"capital_goods","value":19676439},{"name":"automative","value":1098733},{"name":"consumer_goods","value":12052115},{"name":"other_goods","value":3803683}]}]
var importsToSaudiArabia = [{"id":"Value 2006","stats":[{"name":"food","value":4736},{"name":"industrial","value":31606179},{"name":"capital_goods","value":10660},{"name":"automative","value":1905},{"name":"consumer_goods","value":15985},{"name":"other_goods","value":49561}]},{"id":"Value 2007","stats":[{"name":"food","value":3302},{"name":"industrial","value":35503791},{"name":"capital_goods","value":11131},{"name":"automative","value":2468},{"name":"consumer_goods","value":17219},{"name":"other_goods","value":88072}]},{"id":"Value 2008","stats":[{"name":"food","value":3003},{"name":"industrial","value":54632719},{"name":"capital_goods","value":16052},{"name":"automative","value":7037},{"name":"consumer_goods","value":20905},{"name":"other_goods","value":67739}]},{"id":"Value 2009","stats":[{"name":"food","value":2255},{"name":"industrial","value":21930088},{"name":"capital_goods","value":10710},{"name":"automative","value":1945},{"name":"consumer_goods","value":15814},{"name":"other_goods","value":92334}]},{"id":"Value 2010","stats":[{"name":"food","value":6951},{"name":"industrial","value":31224593},{"name":"capital_goods","value":41384},{"name":"automative","value":5575},{"name":"consumer_goods","value":19163},{"name":"other_goods","value":115161}]},{"id":"Value 2011","stats":[{"name":"food","value":5450},{"name":"industrial","value":47199348},{"name":"capital_goods","value":120935},{"name":"automative","value":4121},{"name":"consumer_goods","value":17820},{"name":"other_goods","value":128663}]},{"id":"Value 2012","stats":[{"name":"food","value":4745},{"name":"industrial","value":55333706},{"name":"capital_goods","value":134719},{"name":"automative","value":9659},{"name":"consumer_goods","value":14533},{"name":"other_goods","value":169587}]},{"id":"Value 2013","stats":[{"name":"food","value":2775},{"name":"industrial","value":51471648},{"name":"capital_goods","value":146874},{"name":"automative","value":14898},{"name":"consumer_goods","value":6792},{"name":"other_goods","value":163714}]},{"id":"Value 2014","stats":[{"name":"food","value":3341},{"name":"industrial","value":46702796},{"name":"capital_goods","value":151497},{"name":"automative","value":4698},{"name":"consumer_goods","value":5901},{"name":"other_goods","value":172564}]},{"id":"Value 2015","stats":[{"name":"food","value":4890},{"name":"industrial","value":21476564},{"name":"capital_goods","value":147405},{"name":"automative","value":8348},{"name":"consumer_goods","value":7989},{"name":"other_goods","value":435312}]}]
var importsToIsrael = [{"id":"Value 2006","stats":[{"name":"food","value":145283},{"name":"industrial","value":1385979},{"name":"capital_goods","value":4524380},{"name":"automative","value":130064},{"name":"consumer_goods","value":12244843},{"name":"other_goods","value":736206}]},{"id":"Value 2007","stats":[{"name":"food","value":166558},{"name":"industrial","value":1397215},{"name":"capital_goods","value":5018182},{"name":"automative","value":174325},{"name":"consumer_goods","value":13203912},{"name":"other_goods","value":834221}]},{"id":"Value 2008","stats":[{"name":"food","value":186649},{"name":"industrial","value":1838249},{"name":"capital_goods","value":4842637},{"name":"automative","value":263633},{"name":"consumer_goods","value":14304746},{"name":"other_goods","value":899922}]},{"id":"Value 2009","stats":[{"name":"food","value":206477},{"name":"industrial","value":1279508},{"name":"capital_goods","value":5727864},{"name":"automative","value":205366},{"name":"consumer_goods","value":10282744},{"name":"other_goods","value":1042403}]},{"id":"Value 2010","stats":[{"name":"food","value":222731},{"name":"industrial","value":1607422},{"name":"capital_goods","value":3981942},{"name":"automative","value":213217},{"name":"consumer_goods","value":13892060},{"name":"other_goods","value":1067388}]},{"id":"Value 2011","stats":[{"name":"food","value":236869},{"name":"industrial","value":1634307},{"name":"capital_goods","value":4235921},{"name":"automative","value":129202},{"name":"consumer_goods","value":15889923},{"name":"other_goods","value":920385}]},{"id":"Value 2012","stats":[{"name":"food","value":263537},{"name":"industrial","value":1654378},{"name":"capital_goods","value":4567398},{"name":"automative","value":88595},{"name":"consumer_goods","value":14713040},{"name":"other_goods","value":844158}]},{"id":"Value 2013","stats":[{"name":"food","value":262084},{"name":"industrial","value":1515811},{"name":"capital_goods","value":4701496},{"name":"automative","value":61539},{"name":"consumer_goods","value":15398531},{"name":"other_goods","value":843770}]},{"id":"Value 2014","stats":[{"name":"food","value":290489},{"name":"industrial","value":1849449},{"name":"capital_goods","value":5093102},{"name":"automative","value":61632},{"name":"consumer_goods","value":14770076},{"name":"other_goods","value":897463}]},{"id":"Value 2015","stats":[{"name":"food","value":288836},{"name":"industrial","value":1763499},{"name":"capital_goods","value":5813562},{"name":"automative","value":59605},{"name":"consumer_goods","value":15368747},{"name":"other_goods","value":1158181}]}];
var importsToArgentina = [{"id":"Value 2006","stats":[{"name":"food","value":875183},{"name":"industrial","value":2492806},{"name":"capital_goods","value":173289},{"name":"automative","value":187833},{"name":"consumer_goods","value":187509},{"name":"other_goods","value":62371}]},{"id":"Value 2007","stats":[{"name":"food","value":960514},{"name":"industrial","value":2870023},{"name":"capital_goods","value":237245},{"name":"automative","value":185260},{"name":"consumer_goods","value":151935},{"name":"other_goods","value":81977}]},{"id":"Value 2008","stats":[{"name":"food","value":1056480},{"name":"industrial","value":4016000},{"name":"capital_goods","value":374784},{"name":"automative","value":145325},{"name":"consumer_goods","value":129468},{"name":"other_goods","value":100007}]},{"id":"Value 2009","stats":[{"name":"food","value":932045},{"name":"industrial","value":2452318},{"name":"capital_goods","value":212796},{"name":"automative","value":89318},{"name":"consumer_goods","value":89516},{"name":"other_goods","value":114119}]},{"id":"Value 2010","stats":[{"name":"food","value":1060637},{"name":"industrial","value":2180000},{"name":"capital_goods","value":274852},{"name":"automative","value":104138},{"name":"consumer_goods","value":86418},{"name":"other_goods","value":96708}]},{"id":"Value 2011","stats":[{"name":"food","value":1485746},{"name":"industrial","value":2300717},{"name":"capital_goods","value":400836},{"name":"automative","value":109551},{"name":"consumer_goods","value":97648},{"name":"other_goods","value":108382}]},{"id":"Value 2012","stats":[{"name":"food","value":1584552},{"name":"industrial","value":2001893},{"name":"capital_goods","value":443406},{"name":"automative","value":93033},{"name":"consumer_goods","value":91855},{"name":"other_goods","value":135677}]},{"id":"Value 2013","stats":[{"name":"food","value":1543857},{"name":"industrial","value":2123823},{"name":"capital_goods","value":463463},{"name":"automative","value":57723},{"name":"consumer_goods","value":100090},{"name":"other_goods","value":353359}]},{"id":"Value 2014","stats":[{"name":"food","value":1404298},{"name":"industrial","value":2153531},{"name":"capital_goods","value":408094},{"name":"automative","value":51126},{"name":"consumer_goods","value":87098},{"name":"other_goods","value":138915}]},{"id":"Value 2015","stats":[{"name":"food","value":1476113},{"name":"industrial","value":1862132},{"name":"capital_goods","value":253860},{"name":"automative","value":45141},{"name":"consumer_goods","value":110812},{"name":"other_goods","value":200274}]}];
var importsToIraq = [{"id":"Value 2006","stats":[{"name":"food","value":102},{"name":"industrial","value":11147732},{"name":"capital_goods","value":1337},{"name":"automative","value":0},{"name":"consumer_goods","value":931},{"name":"other_goods","value":395725}]},{"id":"Value 2007","stats":[{"name":"food","value":8},{"name":"industrial","value":10881685},{"name":"capital_goods","value":168},{"name":"automative","value":23},{"name":"consumer_goods","value":1023},{"name":"other_goods","value":512662}]},{"id":"Value 2008","stats":[{"name":"food","value":0},{"name":"industrial","value":21717597},{"name":"capital_goods","value":134},{"name":"automative","value":147},{"name":"consumer_goods","value":3161},{"name":"other_goods","value":358766}]},{"id":"Value 2009","stats":[{"name":"food","value":70},{"name":"industrial","value":9135328},{"name":"capital_goods","value":2142},{"name":"automative","value":0},{"name":"consumer_goods","value":2190},{"name":"other_goods","value":123551}]},{"id":"Value 2010","stats":[{"name":"food","value":21},{"name":"industrial","value":12132110},{"name":"capital_goods","value":2427},{"name":"automative","value":111},{"name":"consumer_goods","value":3809},{"name":"other_goods","value":4784}]},{"id":"Value 2011","stats":[{"name":"food","value":71},{"name":"industrial","value":16941350},{"name":"capital_goods","value":286},{"name":"automative","value":2},{"name":"consumer_goods","value":8367},{"name":"other_goods","value":9705}]},{"id":"Value 2012","stats":[{"name":"food","value":96},{"name":"industrial","value":19259678},{"name":"capital_goods","value":95},{"name":"automative","value":0},{"name":"consumer_goods","value":1582},{"name":"other_goods","value":3901}]},{"id":"Value 2013","stats":[{"name":"food","value":40},{"name":"industrial","value":13295703},{"name":"capital_goods","value":110},{"name":"automative","value":12},{"name":"consumer_goods","value":7345},{"name":"other_goods","value":2529}]},{"id":"Value 2014","stats":[{"name":"food","value":158},{"name":"industrial","value":13703246},{"name":"capital_goods","value":95},{"name":"automative","value":467},{"name":"consumer_goods","value":5447},{"name":"other_goods","value":117621}]},{"id":"Value 2015","stats":[{"name":"food","value":153},{"name":"industrial","value":4340312},{"name":"capital_goods","value":169},{"name":"automative","value":0},{"name":"consumer_goods","value":1744},{"name":"other_goods","value":10217}]}];
var importsToPakistan = [{"id":"Value 2006","stats":[{"name":"food","value":36930},{"name":"industrial","value":472876},{"name":"capital_goods","value":52823},{"name":"automative","value":2951},{"name":"consumer_goods","value":3089083},{"name":"other_goods","value":17563}]},{"id":"Value 2007","stats":[{"name":"food","value":44145},{"name":"industrial","value":289981},{"name":"capital_goods","value":61560},{"name":"automative","value":7273},{"name":"consumer_goods","value":3159354},{"name":"other_goods","value":15332}]},{"id":"Value 2008","stats":[{"name":"food","value":70164},{"name":"industrial","value":273999},{"name":"capital_goods","value":71929},{"name":"automative","value":3182},{"name":"consumer_goods","value":3156904},{"name":"other_goods","value":14888}]},{"id":"Value 2009","stats":[{"name":"food","value":55263},{"name":"industrial","value":186189},{"name":"capital_goods","value":66121},{"name":"automative","value":2227},{"name":"consumer_goods","value":2836966},{"name":"other_goods","value":16050}]},{"id":"Value 2010","stats":[{"name":"food","value":59822},{"name":"industrial","value":216495},{"name":"capital_goods","value":65406},{"name":"automative","value":3388},{"name":"consumer_goods","value":3130789},{"name":"other_goods","value":33168}]},{"id":"Value 2011","stats":[{"name":"food","value":64272},{"name":"industrial","value":298123},{"name":"capital_goods","value":78676},{"name":"automative","value":5006},{"name":"consumer_goods","value":3370499},{"name":"other_goods","value":15541}]},{"id":"Value 2012","stats":[{"name":"food","value":79579},{"name":"industrial","value":343645},{"name":"capital_goods","value":88116},{"name":"automative","value":4081},{"name":"consumer_goods","value":3090277},{"name":"other_goods","value":21853}]},{"id":"Value 2013","stats":[{"name":"food","value":98270},{"name":"industrial","value":288951},{"name":"capital_goods","value":87960},{"name":"automative","value":2987},{"name":"consumer_goods","value":3187186},{"name":"other_goods","value":22939}]},{"id":"Value 2014","stats":[{"name":"food","value":110377},{"name":"industrial","value":269912},{"name":"capital_goods","value":93020},{"name":"automative","value":2729},{"name":"consumer_goods","value":3165171},{"name":"other_goods","value":30522}]},{"id":"Value 2015","stats":[{"name":"food","value":124121},{"name":"industrial","value":260229},{"name":"capital_goods","value":107523},{"name":"automative","value":2312},{"name":"consumer_goods","value":3168052},{"name":"other_goods","value":33913}]}];
var importsToHaiti = [{"id":"Value 2006","stats":[{"name":"food","value":15335},{"name":"industrial","value":8304},{"name":"capital_goods","value":1994},{"name":"automative","value":302},{"name":"consumer_goods","value":454121},{"name":"other_goods","value":16053}]},{"id":"Value 2007","stats":[{"name":"food","value":15791},{"name":"industrial","value":5623},{"name":"capital_goods","value":3474},{"name":"automative","value":207},{"name":"consumer_goods","value":456858},{"name":"other_goods","value":5814}]},{"id":"Value 2008","stats":[{"name":"food","value":20161},{"name":"industrial","value":3889},{"name":"capital_goods","value":2896},{"name":"automative","value":62},{"name":"consumer_goods","value":417378},{"name":"other_goods","value":5696}]},{"id":"Value 2009","stats":[{"name":"food","value":19400},{"name":"industrial","value":2769},{"name":"capital_goods","value":2475},{"name":"automative","value":10},{"name":"consumer_goods","value":518731},{"name":"other_goods","value":8705}]},{"id":"Value 2010","stats":[{"name":"food","value":14755},{"name":"industrial","value":5506},{"name":"capital_goods","value":3088},{"name":"automative","value":100},{"name":"consumer_goods","value":522844},{"name":"other_goods","value":4618}]},{"id":"Value 2011","stats":[{"name":"food","value":20745},{"name":"industrial","value":5592},{"name":"capital_goods","value":3672},{"name":"automative","value":348},{"name":"consumer_goods","value":707039},{"name":"other_goods","value":4786}]},{"id":"Value 2012","stats":[{"name":"food","value":22338},{"name":"industrial","value":7099},{"name":"capital_goods","value":3317},{"name":"automative","value":194},{"name":"consumer_goods","value":738181},{"name":"other_goods","value":3609}]},{"id":"Value 2013","stats":[{"name":"food","value":21241},{"name":"industrial","value":4069},{"name":"capital_goods","value":2651},{"name":"automative","value":102},{"name":"consumer_goods","value":813664},{"name":"other_goods","value":5329}]},{"id":"Value 2014","stats":[{"name":"food","value":23690},{"name":"industrial","value":6089},{"name":"capital_goods","value":2927},{"name":"automative","value":463},{"name":"consumer_goods","value":866384},{"name":"other_goods","value":8564}]},{"id":"Value 2015","stats":[{"name":"food","value":24178},{"name":"industrial","value":6516},{"name":"capital_goods","value":3385},{"name":"automative","value":279},{"name":"consumer_goods","value":906825},{"name":"other_goods","value":9096}]}];
var global = [{"id":"Canada","stats":[{"name":"food","value":23172139},{"name":"industrial","value":181063662},{"name":"capital_goods","value":35383600},{"name":"automative","value":61934233},{"name":"consumer_goods","value":17902250},{"name":"other_goods","value":13101919}]},{"id":"Mexico","stats":[{"name":"food","value":18748347},{"name":"industrial","value":58723059},{"name":"capital_goods","value":71302116},{"name":"automative","value":85866017},{"name":"consumer_goods","value":38486977},{"name":"other_goods","value":7428648}]},{"id":"China","stats":[{"name":"food","value":6173032,"normalizedValue":74055731.49808809},{"name":"industrial","value":39493037,"normalizedValue":72254699.91667707},{"name":"capital_goods","value":158648781,"normalizedValue":75872264.73354773},{"name":"automative","value":16265808,"normalizedValue":82785058.60408096},{"name":"consumer_goods","value":215269904,"normalizedValue":71337887.5094975},{"name":"other_goods","value":4583774,"normalizedValue":70549941.49071579}]},{"id":"Japan","stats":[{"name":"food","value":752327},{"name":"industrial","value":16758475},{"name":"capital_goods","value":53451767},{"name":"automative","value":54205376},{"name":"consumer_goods","value":9832097},{"name":"other_goods","value":3574367}]},{"id":"France","stats":[{"name":"food","value":4291061},{"name":"industrial","value":7352127},{"name":"capital_goods","value":18904251},{"name":"automative","value":965174},{"name":"consumer_goods","value":10795552},{"name":"other_goods","value":3398126}]},{"id":"SaudiArabia","stats":[{"name":"food","value":2775},{"name":"industrial","value":51471648},{"name":"capital_goods","value":146874},{"name":"automative","value":14898},{"name":"consumer_goods","value":6792},{"name":"other_goods","value":163714}]},{"id":"Israel","stats":[{"name":"food","value":262084},{"name":"industrial","value":1515811},{"name":"capital_goods","value":4701496},{"name":"automative","value":61539},{"name":"consumer_goods","value":15398531},{"name":"other_goods","value":843770}]},{"id":"Argentina","stats":[{"name":"food","value":1543857},{"name":"industrial","value":2123823},{"name":"capital_goods","value":463463},{"name":"automative","value":57723},{"name":"consumer_goods","value":100090},{"name":"other_goods","value":353359}]},{"id":"Iraq","stats":[{"name":"food","value":40},{"name":"industrial","value":13295703},{"name":"capital_goods","value":110},{"name":"automative","value":12},{"name":"consumer_goods","value":7345},{"name":"other_goods","value":2529}]},{"id":"Pakistan","stats":[{"name":"food","value":98270},{"name":"industrial","value":288951},{"name":"capital_goods","value":87960},{"name":"automative","value":2987},{"name":"consumer_goods","value":3187186},{"name":"other_goods","value":22939}]},{"id":"Haiti","stats":[{"name":"food","value":21241},{"name":"industrial","value":4069},{"name":"capital_goods","value":2651},{"name":"automative","value":102},{"name":"consumer_goods","value":813664},{"name":"other_goods","value":5329}]}];



// Set ourArray to the data you'd like to use for this experiment, and title your chart to match
//ToDo: Change for imports 
var ourArray = global;
$('h4.bar-chart-title').text('Global imports 2013');










/*=======================================================
INITIALIZATION
=======================================================*/

// jQuery has a $(document).ready() function that fires when your page is ready to go.
// let's use it to kick things off.
$(document).ready(function(){
  universalController();
}); //document.ready


// Think of universalController() as our Table of Contents
function universalController(){

  console.log('Universal Controller - ready to run your functions!');

////// STEP 1: Draw a bar for each year of our data.
    initializeBars(ourArray);

////// STEP 2: Allow for user interaction with our visualization
    initializeControls();

////// STEP 3: Advanced interaction through a click and hold interface
     handleTouch();

}; //universalController










/*=======================================================
STEP 1: STATIC BAR GRAPH
=======================================================*/

function initializeBars(comparable) {
// We create a new element using jQuery. We can style it in CSS using the .bar-chart class.
  $('.sandbox').append('<div class="bar-chart"></div>');

// We reduce our comparable to yearly totals
  yearTotals = _.map(comparable, function(obj,iter){
    var valueArray = _.pluck(obj.stats, "value");
    return _.reduce(valueArray, function(memo,num) { return memo + num });
  }); //_.map

// For each of this yearly totals, create a bar in our new bar chart.
  $.each(yearTotals, function(key,value){
    $('.bar-chart').append('<div class="bar" data-index="'+comparable[key].id+'" data-value="'+value+'"><span><em>' + comparable[key].id + ':</em> <strong>' + commafy(value) + '</strong></span></div>');
  }); //each yearTotals

//////// Step 1A: Make the length of each bar relative to its $ spent
    relativeBarWidths();

//////// Step 1B: Drop another level of metrics in: a breakdown of the yearly spend
    createLegend(comparable);
    applyCategories(comparable);

//////// Step 1C: Make the width of each category proportional to 
    setCategoryWidths();
    setCategoryRatios(comparable);

}; //initializeBars




/*=======================================================
STEP 1A: RELATIVE BAR WIDTHS
=======================================================*/

// Each bar should have its width proportional to the relative max
function relativeBarWidths(){
  var max = _.max(yearTotals);
  $('.bar').each(function(){
    $(this).css({'width': $(this).attr('data-value') / max * 100 + "%"})
  }); //each bar
}; //relativeBarWidths




/*=======================================================
STEP 1B: SPEND-BY-CATEGORY LEVEL OF DATA
=======================================================*/

function createLegend(comparable) {
  var colorRange = d3.scale.category10().domain(d3.range(11).reverse());
  $('.bar-chart').after('<div class="legend"></div>');
  var categories = _.pluck(comparable[0].stats, 'name');
  $.each(categories, function(key,value){
    var span = $('<span>'+value+'</span>');
    span.css({'border-color': d3.rgb(colorRange(key)).brighter(1)});
    span.css({'background-color': d3.rgb(colorRange(key)).darker(1)});
    $('.legend').append(span);
  })
}; //createLegend

function applyCategories(comparable) {
  var colorRange = d3.scale.category10().domain(d3.range(11).reverse());
  $('.bar').each(function(){
    var bar = $(this);
    bar.append('<div class="statsblock"></div>');
    var index = bar.attr('data-index');
    var relevantStats = _.findWhere(comparable, {'id':index})['stats'];
    $.each(relevantStats, function(key,value) {
      var stat = $('<span class="stat" data-index="'+value['name']+'" data-value="'+value['value']+'"></span>');
      stat.css({'background-color': colorRange(key)});
      bar.children('.statsblock').append(stat);
    }); //each relevantStats
  }); //each bar
}; //applyCategories




/*=======================================================
STEP 1C: CATEGORY LEVEL WIDTHS AS PROPORATION OF SPEND
=======================================================*/

function setCategoryWidths(){
  $('.bar').each(function(){
    var bar = $(this);
    var index = bar.attr('data-index');
    var relevantStats = _.findWhere(ourArray, {'id':index})['stats'];
    var barTotal = _.reduce(_.pluck(relevantStats, 'value'), function(memo,num){ return memo + num });
    $.each($(this).find('.stat'), function(stat_id,stat){
      $(stat).css({'width': $(stat).attr('data-value') / barTotal * 100 + "%"});
    })
  })  
}

// ratios of each spending category, will be used later to normalize by category spending
function setCategoryRatios(comparable) {
  var categoryTotals = _.map(comparable[0]['stats'], function(obj,iter){
    return _.reduce(_.map(comparable, function(obj2,iter2){
      return _.find(obj2.stats, function(obj3,iter3){
        return obj3.name == obj.name;
      }).value;
    }), function(memo,num){
      return memo+num
    }); //reduce
  }); //categoryTotals
  var average = _.reduce(categoryTotals, function(memo, num){ return memo + num; }, 0) / categoryTotals.length;

// Setting categoryRatios as a global variable that we can access later
  categoryRatios = [];
  $.each(categoryTotals, function(i){
    categoryRatios[i] = 1/(categoryTotals[i] / average);
  })
  categoryRatios = _.object(_.pluck(global[0]['stats'], 'name'), categoryRatios);

// storing the categoryRatios on the comparable object and ourArray
  comparable = _.map(comparable, function(obj,iter){
    var stats = _.map(obj.stats, function(obj2,iter2){
      obj2.normalizedValue = categoryRatios[obj2.name] * obj2.value;
      return obj2;
    }); //innermap
    obj.stats = stats;
    return obj;
  }); //map
  ourArray = comparable;
}; //setCategoryRatios



















/*=======================================================
STEP 2: User Interface Controls
=======================================================*/

function initializeControls(){
// Set up a controls box that can be style with css with .controls{}
  $('#world-container').after('<div class="controls"><h5>Controls</h5></div>');
  $('.controls').append('<div><h6>Categories Full Height:</h6><a class="cat_full_height_on">On</a><a class="cat_full_height_off">Off</a></div>')
  $('.controls').append('<div><h6>Normalize by Annual Volume ("what is the % of annual spend?"):</h6><a class="norm_tv_on">On</a><a class="norm_tv_off">Off</a></div>')
  $('.controls').append('<div><h6>Normalize by Category Size: ("what year made the biggest impact to a given category?")</h6><a class="norm_cs_on">On</a><a class="norm_cs_off">Off</a></div>')

// Set the initial state of our on/off switches
  $('.norm_tv_off').addClass('active');
  $('.norm_cs_off').addClass('active');
  $('.cat_full_height_off').addClass('active');

// Category heights
  $(document).on('click', '.cat_full_height_on', function(){
    $('.statsblock').css({'height':'100%'});
    $('.cat_full_height_on').addClass('active').siblings().removeClass('active');
  })
  $(document).on('click', '.cat_full_height_off', function(){
    $('.statsblock').css({'height':'3px'});
    $('.cat_full_height_off').addClass('active').siblings().removeClass('active');
  })

// Normalized Annual Volume
  $(document).on('click', '.norm_tv_on', function(){
    $('.bar').css({'width':'100%'});
    $('.norm_tv_on').addClass('active').siblings().removeClass('active');
  })
  $(document).on('click', '.norm_tv_off', function(){
    relativeBarWidths();
    $('.norm_tv_off').addClass('active').siblings().removeClass('active');
  })

// Normalized Category Size
  $(document).on('click', '.norm_cs_on', function(){
    normalizeCategories();
    $('.norm_cs_on').addClass('active').siblings().removeClass('active');
  })
  $(document).on('click', '.norm_cs_off', function(){
    setCategoryWidths();
    $('.norm_cs_off').addClass('active').siblings().removeClass('active');
  })
}; //initializeControls


function normalizeCategories(){
  $('.bar').each(function(){
    var bar = $(this);
    var index = bar.attr('data-index');
    var relevantStats = _.findWhere(ourArray, {'id':index})['stats'];
    var normalizedBarTotal = _.reduce(_.pluck(relevantStats, 'normalizedValue'), function(memo,num){ return memo + num });
    $.each($(this).find('.stat'), function(stat_id,stat){
      $(stat).css({'width': $(stat).attr('data-value') * categoryRatios[$(stat).attr('data-index')] / normalizedBarTotal * 100 + "%"});
    }); //each stat (category) in the bar
  }); //each bar
}; //normalizeCategories










/*=======================================================
STEP 3: HANDLE ADVANCED INTERACTION
=======================================================*/

function handleTouch(){
// Observe the "mousedown" (click + hold) event on all of our category color-bars
  $(document).on('mousedown', '.stat', function(evt){
    var self = this;
    var globaloffset = $(this).position().left;
    $('.statsblock').each(function(){
      $(this).css({'height': '100%'});
      var blockoffset = $(this).children('[data-index="'+$(self).attr('data-index')+'"]').position().left;
      $(this).animate({'left': globaloffset-blockoffset}, 200);
      $(this).parents('.bar').children('span').children('strong').text(commafy($(this).children('[data-index="'+$(self).attr('data-index')+'"]').attr('data-value')));
    }); //each

// Fade out all bars not of the category you clicked
    $('.stat:not("[data-index='+$(self).attr('data-index')+']")').css({'opacity':0.2});
    $('.stat[data-index='+$(self).attr('data-index')+']').addClass('active');
    $('.bar').css({'background-color':'transparent'});

////// OPTIONAL: Sort bars based on order
    // var barHeight = $('.bar').height() + 11;
    // var sorted = _.sortBy($('.stat[data-index="'+$(self).attr('data-index')+'"]'), function(obj,iter){
    //   return $(obj).width();
    // }); //sorted
    // _.map(sorted, function(obj,iter){
    //   var startHeight = barHeight * (iter) - $(obj).parents('.bar').position().top + 20;
    //   $(obj).parents('.bar').css({'top':startHeight}).attr('which', iter);
    // })

// Reset the position of everything wehn you release your mouse
    $(document).on('mouseup', function(){
      $('.statsblock').animate({'left':'0px', 'height': $('.cat_full_height_on').is('.active') ? '100%' : '3px'}, 200);
      $('.stat').css({'opacity':'1'}).removeClass('active');
      $('.bar').css({'top':'0px', 'background-color': 'rgba(0,0,0,0.1)'});
      $('.bar').each(function(){
        $(this).children('span').children('strong').text(commafy($(this).attr('data-value')));
      })
      $(document).off('mouseup');
    }); //documnet on mouseup
    return false;
  }) //click

}; //handleTouch

















// Make big numbers into pretty numbers
function commafy(num) {
  if (num){
    var str = num.toString().split('.');
    if (str[0].length >= 4) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    return str.join('.');
  }
}; //commafy
