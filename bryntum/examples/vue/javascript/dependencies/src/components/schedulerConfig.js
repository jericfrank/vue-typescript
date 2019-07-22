/**
 * @author Saki
 * @date 2019-03-25 21:10:12
 * @Last Modified by: Saki
 * @Last Modified time: 2019-03-29 21:37:08
 * 
 * Configuration for the scheduler 
 * 
 */

export default {
    minHeight  : '20em',
    eventStyle : null,
    eventColor : null,
    rowHeight  : 50,
    barMargin  : 8,
    startDate  : new Date(2017, 11, 1),
    endDate    : new Date(2017, 11, 3),
    
    viewPreset : {
        name           : 'hourAndDay',
        tickWidth      : 25,
        columnLinesFor : 'top',
        headerConfig   : {
            top : {
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
    },

    columns : [
        {
            text  : 'Production line',
            width : 150,
            field : 'name'
        }
    ],

    timeRangesFeature   : true,
    stripeFeature       : true,
    dependenciesFeature : true,
    eventDragFeature    : {
        constrainDragToResource : true
    },

    crudManager : {
        autoLoad  : true,
        transport : {
            load : {
                url : 'data/data.json'
            }
        }
    },
    
    eventRenderer({ eventRecord, resourceRecord, tplData }) {
        const bgColor = resourceRecord.bg || '';

        tplData.style = `background:${bgColor};border-color:${bgColor};color:${resourceRecord.textColor}`;
        tplData.iconCls.add('b-fa', `b-fa-${resourceRecord.icon}`);

        return eventRecord.name;
    }

} // eo schedulerConfig

// eof
