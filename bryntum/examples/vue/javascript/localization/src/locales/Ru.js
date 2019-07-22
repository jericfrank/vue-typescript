import { LocaleManager } from 'bryntum-scheduler';
import gridLocale from './GridRu';

// extends locale from grid
//const locale = Object.assign(gridLocale, {
const locale = {

    ExcelExporter : {
        'No resource assigned' : 'Ресурс не назначен'
    },

    Dependencies : {
        from        : 'От',
        to          : 'К',
        valid       : 'Верная',
        invalid     : 'Неверная',
        'Checking…' : 'Проверяю…'
    },

    EventEdit : {
        Name         : 'Название',
        Resource     : 'Ресурс',
        Start        : 'Начало',
        End          : 'Конец',
        Save         : 'Сохранить',
        Delete       : 'Удалить',
        Cancel       : 'Отмена',
        'Edit event' : 'Изменить событие'
    },

    Scheduler : {
        addEvent      : 'Добавить событие',
        deleteEvent   : 'Удалить событие',
        unassignEvent : 'Убрать назначение с события'
    },

    HeaderContextMenu : {
        pickZoomLevel   : 'Выберите масштаб',
        activeDateRange : 'Диапазон дат',
        startText       : 'Начало',
        endText         : 'Конец',
        todayText       : 'Сегодня'
    },

    EventFilter : {
        filterEvents : 'Фильтровать задачи',
        byName       : 'По имени'
    },

    TimeRanges : {
        showCurrentTimeLine : 'Показать текущую шкалу времени'
    },

    PresetManager : {
        minuteAndHour : {
            topDateFormat : 'ddd DD/MM, HH:mm'
        },
        hourAndDay : {
            topDateFormat : 'ddd DD/MM'
        },
        weekAndDay : {
            displayDateFormat : 'HH:mm'
        }
    }

};

// cannot use Object.assign above in IE11. also dont want to have polyfill in locale
for (let i in gridLocale) {
    locale[i] = gridLocale[i];
}

export default locale;

LocaleManager.registerLocale('Ru', { desc : 'Русский', locale : locale });
