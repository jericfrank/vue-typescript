/**
 * @author Saki
 * @date 2019-03-07 21:32:11
 * @Last Modified by: Saki
 * @Last Modified time: 2019-04-01 21:13:47
 *
 * Taken from the original dragfromgrid example
 */
// we import scheduler.umd for IE11 compatibility only. If you don't use IE import:
import {  DateHelper, EventStore  } from 'bryntum-scheduler';
// import { DateHelper, EventStore } from 'bryntum-scheduler/scheduler.umd';
import Task from './Task';

export default class TaskStore extends EventStore {
    static get defaultConfig() {
        return {
            modelClass : Task
        };
    }

    rescheduleOverlappingTasks(eventRecord) {
        if (eventRecord.resource) {
            const
                futureEvents = [],
                earlierEvents = [];

            // Split tasks into future and earlier tasks, ignoring tasks in the past
            eventRecord.resource.events.forEach((ev) => {
                // Don't modify events in the past
                if (ev.endDate > Date.now() && ev !== eventRecord) {
                    if (ev.startDate >= eventRecord.startDate) {
                        futureEvents.push(ev);
                    }
                    else {
                        earlierEvents.push(ev);
                    }
                }
            });

            futureEvents.sort((a, b) => a.startDate > b.startDate ? 1 : -1);
            earlierEvents.sort((a, b) => a.startDate > b.startDate ? -1 : 1);

            this.beginBatch();

            futureEvents.forEach((ev, i) => {
                const prev = futureEvents[i - 1] || eventRecord;

                ev.startDate = DateHelper.max(prev.endDate, ev.startDate);
            });

            // Walk backwards and remove any overlap
            [eventRecord, ...earlierEvents].forEach((ev, i, all) => {
                const prev = all[i - 1];

                if (ev.endDate > Date.now() && ev !== eventRecord && prev) {
                    ev.setEndDate(DateHelper.min(prev.startDate, ev.endDate), true);
                }
            });

            this.endBatch();
        }
    }
} // eo class TaskStore

// eof
