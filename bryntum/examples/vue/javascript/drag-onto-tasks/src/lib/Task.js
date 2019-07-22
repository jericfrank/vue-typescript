/**
 * @author Saki
 * @date 2019-03-09 15:20:08
 * @Last Modified by: Saki
 * @Last Modified time: 2019-04-02 19:14:23
 *
 * taken from the original example
 */
// we import scheduler.umd for IE11 compatibility only. If you don't use IE import:
import { EventModel } from 'bryntum-scheduler';
// import { EventModel } from 'bryntum-scheduler/scheduler.umd';

export default class Task extends EventModel {
    static get defaults() {
        return {
            // in this demo, default duration for tasks will be hours (instead of days)
            durationUnit : 'h',
            equipment    : []
        };
    } // eo function get defaults

} // eo export class Task

// eof
