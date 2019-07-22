/**
 * @author Saki
 * @date 2019-04-04 16:10:12
 * @Last Modified by: Saki
 * @Last Modified time: 2019-04-12 19:38:57
 *
 * Configuration for the scheduler
 */
import { Scheduler } from 'bryntum-scheduler';

export default {

    minHeight        : '20em',
    startDate        : new Date(2017, 0, 1, 6),
    endDate          : new Date(2017, 0, 1, 20),
    viewPreset       : 'hourAndDay',
    barMargin        : 5,
    rowHeight        : 50,
    multiEventSelect : true,

    features : {
        cellEdit  : false,
        eventDrag : {
            constrainDragToResource : true
        },
        eventEdit : {
            showNameField     : false,
            showResourceField : false,
            extraItems        : [
                {
                    type     : 'combo',
                    label    : 'Style',
                    name     : 'eventStyle',
                    editable : false,
                    index    : 0,
                    items    : Scheduler.eventStyles
                },
                {
                    type     : 'combo',
                    label    : 'Color',
                    name     : 'eventColor',
                    editable : false,
                    index    : 1,
                    listItemTpl : item => `<div class="color-box b-sch-${item.value}"></div><div>${item.value}</div>`,
                    items    : Scheduler.eventColors
                }
            ]
        }
    },

    columns : [
        {
            text       : 'Name',
            field      : 'name',
            htmlEncode : false,
            width      : 130,
            renderer   : ({ record }) => `<div class="color-box b-sch-${record.name.toLowerCase()}"></div>${record.name}`
        }
    ],

    crudManager : {
        autoLoad  : true,
        transport : {
            load : {
                url : 'data/data.json'
            }
        }
    },

    eventRenderer({ eventRecord, resourceRecord, tplData }) {
        return eventRecord.eventStyle;
    }


} // eo schedulerConfig

// eof
