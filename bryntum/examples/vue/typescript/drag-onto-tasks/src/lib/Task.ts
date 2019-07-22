import { EventModel } from "bryntum-scheduler";

export default class TaskModel extends EventModel {
    static get defaults() {
        return {
            // in this demo, default duration for tasks will be hours (instead of days)
            durationUnit : "h",
            equipment    : []
        };
    }
}
