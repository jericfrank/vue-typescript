<template>
    <scheduler
        ref="scheduler"
        id="schedule"
        :stripe-feature="true"
        :time-ranges-feature="true"
        :event-context-menu-feature="eventContextMenu"
        :rowHeight="50"
        :barMargin="4"
        eventColor="indigo"
        :columns="columns"
        :crud-manager="crudManager"
        :view-preset="viewPreset"
        :start-date="startDate"
        :end-date="endDate"
    >
    </scheduler>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";
    import Scheduler from "./wrappers/Scheduler.vue";
    import TaskStore from "@/lib/TaskStore";
    import { DateHelper, EventModel, ResourceModel, Scheduler as SchedulerEngine } from "bryntum-scheduler";

    @Component({
        components : {
            Scheduler
        }
    })
    export default class Schedule extends Vue {
        public engine!: SchedulerEngine;

        public $refs!: {
            scheduler: Scheduler
        };

        @Prop()
        public autoRescheduleTasks!: boolean;

        public startDate = new Date(2025, 11, 1, 8);
        public endDate = new Date(2025, 11, 1, 18);

        public eventContextMenu = {
            items : {
                // custom item with inline handler
                unassign : {
                    text   : "Unassign",
                    icon   : "b-fa b-fa-user-times",
                    weight : 200,
                    onItem : ({ eventRecord, resourceRecord }: { eventRecord: EventModel, resourceRecord: ResourceModel }) => eventRecord.unassign(resourceRecord)
                }
            }
        };

        public columns = [
            {
                type           : "resourceInfo",
                imagePath      : "images/users/",
                text           : "Name",
                width          : 200,
                showEventCount : false,
                showRole       : true
            },
            {
                text     : "Nbr tasks",
                editor   : false,
                renderer : ({ record }: { record: any }) => `${record.events.length || ""}`,
                align    : "center",
                sortable : (a: any, b: any) => a.events.length < b.events.length ? -1 : 1,
                width    : 100
            }
        ];

        // The crud manager will load all its data (resource + events) in one ajax request
        public crudManager = {
            autoLoad   : true,
            eventStore : {
                storeClass : TaskStore
            },
            transport  : {
                load : {
                    url : "data/data.json"
                }
            }
        };

        // Custom view preset with header configuration
        public viewPreset = {
            name           : "hourAndDay",
            tickWidth      : 20,
            columnLinesFor : "top",
            headerConfig   : {
                top    : {
                    unit       : "d",
                    align      : "center",
                    dateFormat : "ddd DD MMM"
                },
                middle : {
                    unit       : "h",
                    align      : "center",
                    dateFormat : "HH"
                }
            }
        };

        public onEventStoreUpdate({ record }: { record: EventModel }) {
            if (this.autoRescheduleTasks) {
                (this.engine.eventStore as TaskStore).rescheduleOverlappingTasks(record);
            }
        }

        public onEventStoreAdd({ records }: { records: EventModel[] }) {
            if (this.autoRescheduleTasks) {
                records.forEach((eventRecord: EventModel) => {
                    (this.engine.eventStore as TaskStore).rescheduleOverlappingTasks(eventRecord);
                });
            }
        }

        public mounted() {
            this.engine = this.$refs.scheduler.schedulerEngine as SchedulerEngine;

            this.engine.eventStore.on({
                update  : this.onEventStoreUpdate,
                add     : this.onEventStoreAdd,
                thisObj : this
            });
        }
    }
</script>

<style>
    #schedule {
        overflow : hidden;
    }

    .b-sch-event {
        border-radius : 3px;
        box-shadow    : 0 1px 1px 0 rgba(0, 0, 0, .25);
    }
</style>
