/**
 * @author Saki
 * @date 2019-03-25 21:10:12
 * @Last Modified by: Saki
 * @Last Modified time: 2019-03-29 11:08:56
 * 
 * Configuration for the scheduler 
 * 
 * cSpell: ignore prio, divs
 */
import { Scheduler, StringHelper } from 'bryntum-scheduler';

export default {
    minHeight  : '20em',
    eventColor : null,
    barMargin  : 1,
    rowHeight  : 50,
    startDate  : new Date(2017, 1, 7, 8),
    endDate    : new Date(2017, 1, 7, 18),
    viewPreset : 'hourAndDay',

    useInitialAnimation : 'slide-from-left', 

    columns    : [
        { type : 'resourceInfo', imagePath : 'users/', text : 'Staff', field : 'name', width : 150 },
        {
            text       : 'Task color',
            field      : 'eventColor',
            width      : 90,
            htmlEncode : false,
            renderer   : ({ record }) => `<div class="color-box b-sch-${record.eventColor}"></div>${StringHelper.capitalizeFirstLetter(record.eventColor)}`,
            editor     : {
                type        : 'combo',
                items       : Scheduler.eventColors,
                editable    : false,
                listItemTpl : item => `<div class="color-box b-sch-${item.value}"></div><div>${item.value}</div>`
            }
        }
    ],

    timeRangesFeature : true,

    crudManager : {
        autoLoad  : true,
        transport : {
            load : {
                url : 'data/data.json'
            }
        }
    },
    
} // eo schedulerConfig

// eof
