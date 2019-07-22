/**
 * @author Saki
 * @date 2019-03-09 17:05:18
 * @Last Modified by: Saki
 * @Last Modified time: 2019-04-02 19:13:23
 *
 * taken from the original example
 */
// we import scheduler.umd for IE11 compatibility only. If you don't use IE import:
import { Grid } from 'bryntum-scheduler';
// import { Grid } from 'bryntum-scheduler/scheduler.umd';

export default class EquipmentGrid extends Grid {
    static get defaultConfig() {
        return {
            features : {
                filterBar : true,
                cellEdit  : false
            },

            rowHeight : 100,

            columns : [{
                text       : '',
                field      : 'name',
                htmlEncode : false,
                cellCls    : 'b-equipment',
                renderer   : (data) => `<i class="${data.record.iconCls}"></i>${data.record.name}`
            }]
        };
    } // eo function get defaultConfig
    
} // eo class EquipmentGrid

// eof
