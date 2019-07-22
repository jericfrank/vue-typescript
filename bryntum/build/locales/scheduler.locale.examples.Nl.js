/*

Bryntum Scheduler (TRIAL VERSION) 2.1.3
Copyright(c) 2019 Bryntum AB
https://bryntum.com/contact
https://bryntum.com/license

*/
!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("examples.Nl",[],n):"object"==typeof exports?exports["examples.Nl"]=n():(e.bryntum=e.bryntum||{},e.bryntum.locales=e.bryntum.locales||{},e.bryntum.locales["examples.Nl"]=n())}(window,function(){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(r,a,function(n){return e[n]}.bind(null,a));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=3)}([function(e,n,t){"use strict";t.r(n);var r={localeName:"Nl",localeDesc:"Nederlands",TemplateColumn:{noTemplate:"TemplateColumn heeft een template nodig",noFunction:"TemplateColumn.template moet een functie zijn"},ColumnStore:{columnTypeNotFound:function(e){return"Kolom type '".concat(e.type,"' is niet geregistreerd")}},InstancePlugin:{fnMissing:function(e){return"Het lukt niet fn ".concat(e.plugIntoName,"#").concat(e.fnName," te schakelen, de plugin fn ").concat(e.pluginName,"#").concat(e.fnName," bestaat niet")},overrideFnMissing:function(e){return"Het lukt niet fn te overerven ".concat(e.plugIntoName,"#").concat(e.fnName,", de plugin fn ").concat(e.pluginName,"#").concat(e.fnName," bestaat niet")}},ColumnPicker:{columnsMenu:"Kolommen",hideColumn:"Verberg Kolom",hideColumnShort:"Verberg"},Filter:{applyFilter:"Pas filter toe",filter:"Filter",editFilter:"Wijzig filter",on:"Aan",before:"Voor",after:"Na",equals:"Is gelijk",lessThan:"Minder dan",moreThan:"Meer dan",removeFilter:"Verwijder filter"},FilterBar:{enableFilterBar:"Maak filterbalk zichtbaar",disableFilterBar:"Verberg filterbalk"},Group:{groupAscending:"Groepeer oplopend",groupDescending:"Groepeer aflopend",groupAscendingShort:"Oplopend",groupDescendingShort:"Aflopend",stopGrouping:"Maak groepering ongedaan",stopGroupingShort:"Maak ongedaan"},Search:{searchForValue:"Zoek op term"},Sort:{sortAscending:"Sorteer oplopend",sortDescending:"Sorteer aflopend",multiSort:"Meerdere sorteringen",removeSorter:"Verwijder sortering",addSortAscending:"Voeg oplopende sortering toe",addSortDescending:"Voeg aflopende sortering toe",toggleSortAscending:"Sorteer oplopend",toggleSortDescending:"Sorteer aflopend",sortAscendingShort:"Oplopend",sortDescendingShort:"Aflopend",removeSorterShort:"Verwijder",addSortAscendingShort:"+ Oplopend",addSortDescendingShort:"+ Aflopend"},Tree:{noTreeColumn:"Om de boomstructuur (tree) eigenschap te kunnen gebruiken zet, tree: true"},Grid:{featureNotFound:function(e){return"Eigenschap '".concat(e,"' is niet beschikbaar, controleer of u de optie geimporteerd heeft")},invalidFeatureNameFormat:function(e){return"Ongeldige functienaam '".concat(e,"', moet beginnen met een kleine letter")},removeRow:"Verwijder rij",removeRows:"Verwijder rijen",loadMask:"Laden...",loadFailedMessage:"Laden mislukt.",moveColumnLeft:"Plaats naar het linker kader",moveColumnRight:"Plaats naar het rechter kader"},Field:{invalidValue:"Ongeldige veldwaarde",minimumValueViolation:"Minimale waarde schending",maximumValueViolation:"Maximale waarde schending",fieldRequired:"Dit veld is verplicht",validateFilter:"Waarde moet worden geselecteerd in de lijst"},DateField:{invalidDate:"Ongeldige datuminvoer"},TimeField:{invalidTime:"Ongeldige tijdsinvoer"},DateHelper:{locale:"nl",shortWeek:"w",shortQuarter:"kw",week:"Week",weekStartDay:1,unitNames:[{single:"ms",plural:"ms",abbrev:"ms"},{single:"seconde",plural:"seconden",abbrev:"s"},{single:"minuut",plural:"minuten",abbrev:"m"},{single:"uur",plural:"uren",abbrev:"u"},{single:"dag",plural:"dagen",abbrev:"d"},{single:"week",plural:"weken",abbrev:"w"},{single:"maand",plural:"maanden",abbrev:"ma"},{single:"kwartaal",plural:"kwartalen",abbrev:"kw"},{single:"jaar",plural:"jaren",abbrev:"j"}],unitAbbreviations:[["mil"],["s","sec"],["m","min"],["u"],["d"],["w","wk"],["ma","mnd","m"],["k","kwar","kwt","kw"],["j","jr"]],parsers:{L:"DD-MM-YYYY",LT:"HH:mm"}},BooleanCombo:{Yes:"Ja",No:"Nee"}},a={ExcelExporter:{"No resource assigned":"Geen resource toegewezen"},ResourceInfoColumn:{eventCountText:function(e){return e+" evenement"+(1!==e?"en":"")}},Dependencies:{from:"Van",to:"Naar",valid:"Geldig",invalid:"Ongeldig",Checking:"Controleren…"},EventEdit:{Name:"Naam",Resource:"Resource",Start:"Start",End:"Eind",Save:"Bewaar",Delete:"Verwijder",Cancel:"Annuleer","Edit Event":"Wijzig item"},DependencyEdit:{From:"Van",To:"Tot",Type:"Type",Lag:"Achterstand","Edit dependency":"Afhankelijkheid bewerken",Save:"Bewaar",Delete:"Verwijder",Cancel:"Annuleer",StartToStart:"Begin-Tot-Begin",StartToEnd:"Begin-Tot-Einde",EndToStart:"Einde-Tot-Start",EndToEnd:"Einde-Tot-Einde"},Scheduler:{"Add event":"Voeg evenement toe","Delete event":"Verwijder item","Unassign event":"Gebeurtenis ongedaan maken"},HeaderContextMenu:{pickZoomLevel:"Zoom in",activeDateRange:"Datum bereik",startText:"Start datum",endText:"Eind datum",todayText:"Vandaag"},EventFilter:{filterEvents:"Filter items",byName:"Op naam"},TimeRanges:{showCurrentTimeLine:"Maak huidige tijdlijn zichtbaar"}};for(var o in r)a[o]=r[o];n.default=a},,,function(e,n,t){"use strict";t.r(n);t(0);n.default={extends:"Nl",Column:{Name:"Naam",City:"Stad",Role:"Rol",Staff:"Personeel",Machines:"Machines",Type:"Type","Task color":"Taakkleur","Employment type":"Type werkgeverschap",Capacity:"Capaciteit","Production line":"Productielijn",Company:"Bedrijf",Start:"Begin",End:"Einde","Nbr tasks":"Numerieke taken","Unassigned tasks":"Niet-toegewezen taken",Duration:"Looptijd"},Shared:{"Locale changed":"Taal is veranderd"},EventEdit:{Location:"Plaats"}}}]).default});