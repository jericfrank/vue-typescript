/**
 * @author Saki
 * @date 2019-03-07 21:39:22
 * @Last Modified by: Saki
 * @Last Modified time: 2019-04-01 21:13:26
 *
 * Taken from the original dragfromgrid example
 */
// we import scheduler.umd for IE11 compatibility only. If you don't use IE import:
import { EventModel } from 'bryntum-scheduler';
// import { EventModel } from 'bryntum-scheduler/scheduler.umd';

export default class Task extends EventModel {
    static get defaults() {
        return {
            // in this demo, default duration for tasks will be hours (instead of days)
            durationUnit : 'h'
        };
    }
} // eo export class Task

// eof
