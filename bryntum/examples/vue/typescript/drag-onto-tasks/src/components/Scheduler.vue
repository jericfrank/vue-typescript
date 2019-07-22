<template>
    <scheduler
        ref="scheduler"
        :time-ranges-feature="true"
        :stripe-feature="true"
        :event-edit-feature="eventEdit"
        :event-context-menu-feature="eventContextMenu"
        :columns="columns"
        :row-height="rowHeight"
        :bar-margin="barMargin"
        :crud-manager="crudManager"
        :time-ranges="timeRanges"
        :start-date="startDate"
        :end-date="endDate"
        :event-renderer="eventRenderer"
        :event-body-template="eventBodyTemplate"
        :view-preset="viewPreset"
        :equipment-store="equipmentStore"
        :event-color="eventColor"
    ></scheduler>
</template>

<script lang="ts">
    import {
        Scheduler as SchedulerEngine,
        Store,
        CrudManager,
        ResourceModel,
        DateHelper,
        SchedulerTag
    } from "bryntum-scheduler";
    import { Component, Vue, Prop } from "vue-property-decorator";
    import Scheduler from "./wrappers/Scheduler.vue";
    import Task from "@/lib/Task";

    // Defines a Vue component that wraps Bryntum Scheduler
    @Component({
        components : {
            Scheduler
        }
    })
    export default class SchedulerComponent extends Vue {
        public name = "scheduler";

        public schedulerEngine!: SchedulerEngine;

        @Prop()
        public crudManager: CrudManager;

        @Prop()
        public equipmentStore: Store;

        public $refs!: {
            scheduler: Scheduler
        };

        public data() {
            return {
                timeRanges        : [],
                timeRangesFeature : true,
                barMargin         : 5,
                rowHeight         : 80,
                eventColor        : "indigo",
                startDate         : new Date(2017, 11, 1, 8),
                endDate           : new Date(2017, 11, 1, 18),
                selectedEvent     : "",

                columns           : [
                    {
                        type           : "resourceInfo",
                        imagePath      : "images/users/",
                        text           : "Name",
                        width          : 200,
                        showEventCount : false,
                        showRole       : true
                    }
                ],

                viewPreset        : {
                    name           : "hourAndDay",
                    tickWidth      : 10,
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
                },

                eventEdit         : {
                    // Add an extra combo box to the editor to select equipment
                    extraItems : [
                        {
                            type         : "combo",
                            editable     : false,
                            multiSelect  : true,
                            valueField   : "id",
                            displayField : "name",
                            name         : "equipment",
                            label        : "Equipment",
                            items        : []
                        }
                    ]
                },

                eventContextMenu  : {
                    items : [
                        // custom item with inline handler
                        {
                            text   : "Remove all equipment",
                            icon   : "b-fa b-fa-times",
                            weight : 200,
                            onItem({ eventRecord }: { eventRecord: any }) {
                                eventRecord.equipment = [];
                            }
                        }
                    ]
                },

                eventRenderer : ({ eventRecord }: { eventRecord: Task }) => {
                    return {
                        date : DateHelper.format(eventRecord.startDate as Date, "LT"),
                        name : eventRecord.name || "",

                        equipment : this.equipmentStore
                            ? (eventRecord as any).equipment.map(
                                (itemId: any) => this.equipmentStore.getById(itemId) || {}
                            )
                            : []
                    };
                },

                eventBodyTemplate : (data: any) => `
                    <div class="b-sch-event-header">${data.date} - ${data.name}</div>
                    <ul class="b-sch-event-footer">
                        ${(data.equipment || []).map((item: any) =>
                            `<li title="${item.name}" class="${item.iconCls}"></li>`
                        ).join("")}
                    </ul>`
            };
        }

        public mounted() {
            this.schedulerEngine = this.$refs.scheduler.schedulerEngine;
        }

        public onEquipmentStoreLoad() {
            const scheduler = this.schedulerEngine;

            // Setup the data for the equipment combo inside the event editor
            const equipmentCombo = (scheduler.features as any).eventEdit
                .getEditor()
                .query((item: any) => item.name === "equipment");

            equipmentCombo.items = this.$props.equipmentStore.getRange();

            // Since the event bars contain icons for equipment, we need to refresh rows once equipment store is available
            scheduler.refreshRows();
        }

        private beforeDestroy() {
            // Make sure Bryntum Grid is destroyed when vue component is
            this.schedulerEngine.destroy();
        }
    }
</script>

<style lang="scss">
    .scheduler-container {
        .b-sch-event {
            border-radius   : 3px;
            box-shadow      : 0 1px 1px 0 rgba(0, 0, 0, 0.25);
            flex-direction  : column;
            align-items     : start;
            justify-content : space-around;
        }

        .b-sch-event-header,
        .b-sch-event-footer {
            display     : flex;
            flex        : 1;
            align-items : center;
        }

        .b-sch-event-footer {
            padding : 0;
            margin  : 0;
        }
    }
</style>
