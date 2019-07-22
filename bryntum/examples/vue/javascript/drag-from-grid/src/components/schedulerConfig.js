/**
 * @author Saki
 * @date 2019-03-31 21:10:12
 * @Last Modified by: Saki
 * @Last Modified time: 2019-04-01 00:01:29
 * 
 * Configuration for the scheduler 
 * 
 */
import TaskStore from '../lib/TaskStore';

export default {
    rowHeight  : 50,
    barMargin  : 4,
    eventColor : 'indigo',
    startDate  : new Date(2025, 11, 1, 8),
    endDate    : new Date(2025, 11, 1, 18),
    columns : [
        {
            type           : 'resourceInfo',
            imagePath      : 'users/',
            text           : 'Name',
            width          : 200,
            showEventCount : false,
            showRole       : true
        },
        {
            text     : 'Nbr tasks',
            editor   : false,
            renderer : data => `${data.record.events.length || ''}`,
            align    : 'center',
            sortable : (a, b) => a.events.length < b.events.length ? -1 : 1,
            width    : 100
        }
    ],
    viewPreset : {
        name           : 'hourAndDay',
        tickWidth      : 20,
        columnLinesFor : 'top',
        headerConfig   : {
            top    : {
                unit       : 'd',
                align      : 'center',
                dateFormat : 'ddd DD MMM'
            },
            middle : {
                unit       : 'h',
                align      : 'center',
                dateFormat : 'HH'
            }
        }
    }, // eo viewPreset

    features : {
        stripe           : true,
        timeRanges       : true,
        eventContextMenu : {
            items : {
                // custom item with inline handler
                unassign : {
                    text   : 'Unassign',
                    icon   : 'b-fa b-fa-user-times',
                    weight : 200,
                    onItem : ({ eventRecord, resourceRecord }) => eventRecord.unassign(resourceRecord)
                }
            }
        }
    }, // eo features
    crudManager : {
        autoLoad   : true,
        eventStore : {
            storeClass : TaskStore
        },
        transport  : {
            load : {
                url : 'data/data.json'
            }
        }       
    }
} // eo schedulerConfig

// eof
