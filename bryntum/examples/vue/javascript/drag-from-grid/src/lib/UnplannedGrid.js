/**
 * @author Saki
 * @date 2019-03-07 21:53:45
 * @Last Modified by: Saki
 * @Last Modified time: 2019-04-01 21:14:54
 *
 * Taken from the original dragfromgrid example
 */
// we import scheduler.umd for IE11 compatibility only. If you don't use IE import:
import { Grid } from 'bryntum-scheduler';
// import { Grid } from 'bryntum-scheduler/scheduler.umd';

export default class UnplannedGrid extends Grid {
    static get defaultConfig() {
        return {
            features : {
                stripe : true,
                sort   : 'name'
            },

            columns : [{
                text       : 'Unassigned tasks',
                flex       : 1,
                field      : 'name',
                htmlEncode : false,
                renderer   : (data) => `<i class="${data.record.iconCls}"></i>${data.record.name}`
            }, {
                text     : 'Duration',
                width    : 100,
                align    : 'right',
                editor   : false,
                field    : 'duration',
                renderer : (data) => `${data.record.duration} ${data.record.durationUnit}`
            }],

            rowHeight : 50
        };
    } // eo function get defaultConfig

    construct(config) {
        super.construct(config);

        this.eventStore.on({
            // When a task is updated, check if it was unassigned and if so - move it back to the unplanned tasks grid
            update  : ({ record, changes }) => {
                if ('resourceId' in changes && !record.resourceId) {
                    this.eventStore.remove(record);
                    this.store.add(record);
                }
            },
            thisObj : this
        });
    } // eo function construct

} // eo export class UnplannedGrid

// eof
