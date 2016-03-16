var global = [];

var canada = _.findWhere(importsToCanada, {'id':'Value 2013'});
canada.id = 'Canada';
global.push(canada);

var Mexico = _.findWhere(importsToMexico, {'id':'Value 2013'});
Mexico.id = 'Mexico';
global.push(Mexico);

var china = _.findWhere(importsToChina, {'id':'Value 2013'});
china.id = 'China';
global.push(china);

var Japan = _.findWhere(importsToJapan, {'id':'Value 2013'});
Japan.id = 'Japan';
global.push(Japan);

var France = _.findWhere(importsToFrance, {'id':'Value 2013'});
France.id = 'France';
global.push(France);

var SaudiArabia = _.findWhere(importsToSaudiArabia, {'id':'Value 2013'});
SaudiArabia.id = 'SaudiArabia';
global.push(SaudiArabia);

var israel = _.findWhere(importsToIsrael, {'id':'Value 2013'});
israel.id = 'Israel';
global.push(israel);

var Argentina = _.findWhere(importsToArgentina, {'id':'Value 2013'});
Argentina.id = 'Argentina';
global.push(Argentina);

var Iraq = _.findWhere(importsToIraq, {'id':'Value 2013'});
Iraq.id = 'Iraq';
global.push(Iraq);

var Pakistan = _.findWhere(importsToPakistan, {'id':'Value 2013'});
Pakistan.id = 'Pakistan';
global.push(Pakistan);

var haiti = _.findWhere(importsToHaiti, {'id':'Value 2013'});
haiti.id = 'Haiti';
global.push(haiti);

/*
// Not included
// Reason: Some commodities are not present
var cuba = _.findWhere(exportsToCuba, {'id':'Value 2013'});
cuba.id = 'Cuba';
global.push(cuba);

var SierraLeone = _.findWhere(exportsToSierraLeone, {'id':'Value 2013'});
SierraLeone.id = 'SierraLeone';
global.push(SierraLeone);

var VaticanCity = _.findWhere(exportsToVaticanCity, {'id':'Value 2013'});
VaticanCity.id = 'VaticanCity';
global.push(VaticanCity);
*/

