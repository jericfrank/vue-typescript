/**
 * @author Saki
 * @date 2019-03-31 21:10:12
 * @Last Modified by: Saki
 * @Last Modified time: 2019-04-02 19:21:24
 *
 * Configuration for the scheduler
 */
import { DateHelper } from 'bryntum-scheduler';

export default {
    rowHeight  : 100,
    barMargin  : 4,
    eventColor : 'indigo',
    startDate : new Date(2017, 11, 1, 8),
    endDate   : new Date(2017, 11, 1, 18),

    columns  : [
        {
            type           : 'resourceInfo',
            imagePath      : 'users/',
            text           : 'Name',
            width          : 200,
            showEventCount : false,
            showRole       : true
        }
    ], // eo columns

    viewPreset : {
        name           : 'hourAndDay',
        tickWidth      : 10,
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
        timeRanges       : true,
        regionResize     : true,
        eventContextMenu : {
            items : [
                // custom item with inline handler
                {
                    text   : 'Remove all equipment',
                    icon   : 'b-fa b-fa-times',
                    weight : 200,
                    onItem : ({ eventRecord }) => eventRecord.equipment = []
                }
            ]
        },
        eventEdit        : {
            // Add an extra combo box to the editor to select equipment
            extraItems : [
                {
                    type         : 'combo',
                    editable     : false,
                    multiSelect  : true,
                    valueField   : 'id',
                    displayField : 'name',
                    name         : 'equipment',
                    label        : 'Equipment',
                    items        : []
                }
            ]
        }
    }, // eo features

    crudManager : {
        autoLoad   : true,
        transport  : {
            load : {
                url : 'data/data.json'
            }
        }
    }, // eo crudManager

    // Render some extra elements for the assignment equipment items
    eventBodyTemplate : data => `
        <div class = "b-sch-event-header">${data.date} - ${data.name}</div>
        <ul  class = "b-sch-event-footer">
            ${data.equipment.map((item) => `<li title="${item.name}" class="${item.iconCls}"></li>`).join('')}
        </ul>
    `,

    // taken from the original example
    eventRenderer({ eventRecord }) {
        return {
            date      : DateHelper.format(eventRecord.startDate, 'LT'),
            name      : eventRecord.name || '',
            equipment : this.equipmentStore ? eventRecord.equipment.map((itemId) => this.equipmentStore.getById(itemId) || {}) : []
        };
    }, // eo function eventRenderer

    // taken from the original example
    onEquipmentStoreLoad({ source : store }) {
        // Setup the data for the equipment combo inside the event editor
        const equipmentCombo = this.features.eventEdit.getEditor().query((item) => item.name === 'equipment');
        equipmentCombo.items = store.getRange();
        this._equipmentStore = store;

        // Since the event bars contain icons for equipment, we need to refresh rows once equipment store is available
        this.refreshRows();
    } // eo function onEquipmentStoreLoad

} // eo schedulerConfig

// eof
