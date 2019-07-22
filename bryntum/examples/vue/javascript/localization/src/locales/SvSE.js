import { LocaleManager } from 'bryntum-scheduler';
import gridLocale from './GridSvSE';

// extends locale from grid
//const locale = Object.assign(gridLocale, {
const locale = {

    ExcelExporter : {
        'No resource assigned' : 'Ingen resurs tilldelad'
    },

    Dependencies : {
        from        : 'Från',
        to          : 'Till',
        valid       : 'Giltig',
        invalid     : 'Ogiltig',
        'Checking…' : 'Hämning…'
    },

    EventEdit : {
        Name         : 'Namn',
        Resource     : 'Resurs',
        Start        : 'Start',
        End          : 'Slut',
        Save         : 'Spara',
        Delete       : 'Ta bort',
        Cancel       : 'Avbryt',
        'Edit event' : 'Redigera bokning'
    },

    Scheduler : {
        addEvent      : 'Lägg till bokning',
        deleteEvent   : 'Ta bort bokning',
        unassignEvent : 'Ta bort resurskoppling'
    },

    HeaderContextMenu : {
        pickZoomLevel   : 'Välj zoomnivå',
        activeDateRange : 'Aktivt datumintervall',
        startText       : 'Start datum',
        endText         : 'Slut datum',
        todayText       : 'I dag'
    },

    EventFilter : {
        filterEvents : 'Filtrera händelser',
        byName       : 'Med namn'
    },

    TimeRanges : {
        showCurrentTimeLine : 'Visa aktuell tidslinje'
    },

    PresetManager : {
        minuteAndHour : {
            topDateFormat : 'ddd, hh/DD'
        }
    }

};

// cannot use Object.assign above in IE11. also dont want to have polyfill in locale
for (let i in gridLocale) {
    locale[i] = gridLocale[i];
}

export default locale;

LocaleManager.registerLocale('SvSE', { desc : 'Svenska', locale : locale });
