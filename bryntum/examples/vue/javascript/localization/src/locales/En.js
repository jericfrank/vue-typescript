import { LocaleManager } from 'bryntum-scheduler';
import gridLocale from './GridEn';

// extends locale from grid
//const locale = Object.assign(gridLocale, {
const locale = {

    ExcelExporter : {
        'No resource assigned' : 'No resource assigned'
    },

    Dependencies : {
        from        : 'From',
        to          : 'To',
        valid       : 'Valid',
        invalid     : 'Invalid',
        'Checking…' : 'Checking…'
    },

    EventEdit : {
        Name         : 'Name',
        Resource     : 'Resource',
        Start        : 'Start',
        End          : 'End',
        Save         : 'Save',
        Delete       : 'Delete',
        Cancel       : 'Cancel',
        'Edit event' : 'Edit event'
    },

    Scheduler : {
        'Add event'      : 'Add event',
        'Delete event'   : 'Delete event',
        'Unassign event' : 'Unassign event'
    },

    HeaderContextMenu : {
        pickZoomLevel   : 'Zoom',
        activeDateRange : 'Date range',
        startText       : 'Start date',
        endText         : 'End date',
        todayText       : 'Today'
    },

    EventFilter : {
        filterEvents : 'Filter tasks',
        byName       : 'By name'
    },

    TimeRanges : {
        showCurrentTimeLine : 'Show current timeline'
    },

    PresetManager : {
        minuteAndHour : {
            topDateFormat : 'ddd MM/DD, hA'
        },
        hourAndDay : {
            topDateFormat : 'ddd MM/DD'
        },
        weekAndDay : {
            displayDateFormat : 'hh:mm A'
        }
    }

};

// cannot use Object.assign above in IE11. also dont want to have polyfill in locale
for (let i in gridLocale) {
    locale[i] = gridLocale[i];
}

export default locale;

LocaleManager.registerLocale('En', { desc : 'English', locale : locale });
