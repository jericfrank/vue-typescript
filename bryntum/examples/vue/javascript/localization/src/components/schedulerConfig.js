/**
 * @author Saki
 * @date 2019-04-04 16:10:12
 * @Last Modified by: Saki
 * @Last Modified time: 2019-04-04 16:06:24
 * 
 * Configuration for the scheduler 
 */
import { Scheduler, StringHelper } from 'bryntum-scheduler';

export default {

    // Make grid grow to fit rows
    autoHeight : true,

    eventColor : null,
    features   : { timeRanges : true },

    barMargin : 1,
    rowHeight : 50,

    startDate : new Date(2017, 1, 7, 8),
    endDate   : new Date(2017, 1, 7, 18),

    viewPreset          : 'hourAndDay',
    useInitialAnimation : 'slide-from-left',

    crudManager : {
        autoLoad  : true,
        transport : {
            load : {
                url : 'data/data.json'
            }
        }
    },

    // Columns in scheduler
    columns : [
        { type : 'resourceInfo', imagePath : 'users/', text : 'Staff', field : 'name', width : 150 },
        {
            text       : 'Task color',
            field      : 'eventColor',
            width      : 120,
            htmlEncode : false,
            renderer   : ({ record }) => `<div class="color-box b-sch-${record.eventColor}"></div>${StringHelper.capitalizeFirstLetter(record.eventColor)}`,
            editor     : {
                type        : 'combo',
                items       : Scheduler.eventColors,
                editable    : false,
                listItemTpl : item => `<div class="color-box b-sch-${item.value}"></div><div>${item.value}</div>`
            }
        }
    ]

} // eo schedulerConfig

// eof
