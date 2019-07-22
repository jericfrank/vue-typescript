/**
 * @author Saki
 * @date 2019-03-09 19:19:05
 * @Last Modified by: Saki
 * @Last Modified time: 2019-04-02 19:12:35
 *
 * taken from the original example
 */
// we import scheduler.umd for IE11 compatibility only. If you don't use IE import:
import { DragHelper, WidgetHelper } from 'bryntum-scheduler';
// import { DragHelper, WidgetHelper } from 'bryntum-scheduler/scheduler.umd';

export default class Drag extends DragHelper {
    static get defaultConfig() {
        return {
            // Don't drag the actual cell element, clone it
            cloneTarget        : true,
            mode               : 'translateXY',
            // Only allow drops on scheduled tasks
            dropTargetSelector : '.b-sch-event',

            // Only allow dragging cell elements inside on the equipment grid
            targetSelector     : '.b-grid-cell'
        };
    } // eo function get defaultConfig

    construct(config) {
        const me = this;

        super.construct(config);

        me.on({
            dragstart : me.onEquipmentDragStart,
            drop      : me.onEquipmentDrop,
            thisObj   : me
        });
    } // eo function construct

    onEquipmentDragStart({ context }) {
        // save a reference to the equipment so we can access it later
        context.equipment = this.grid.getRecordFromElement(context.grabbed);

        // Prevent tooltips from showing while dragging
        this.schedule.element.classList.add('b-dragging-event');
    } // eo function onEquipmentDragStart

    onEquipmentDrop({ context }) {
        const me = this;

        if (context.valid) {
            const
                equipment = context.equipment,
                eventRecord = me.schedule.resolveEventRecord(context.target);

            eventRecord.equipment = eventRecord.equipment.concat(equipment);

            me.context.finalize();

            // Dropped on a scheduled event, display toast
            WidgetHelper.toast(`Added ${equipment.name} to ${eventRecord.name}`);
        }

        me.schedule.element.classList.remove('b-dragging-event');
        
    } // eo function onEquipmentDrop
    
} // eo export class Drag

// eof
