<template>
    <div class="scheduler-tab">
        <vuestic-date-picker
            ref="startDatePicker"
            :value="startDate"
            @input="onStartDatePickerInput"
        >
        </vuestic-date-picker>

        <!--<vuestic-date-picker ref="endDatePicker" :value="endDate" @input="onEndDatePickerInput"></vuestic-date-picker>-->

        <scheduler
            ref="scheduler"
            :zoom-on-mouse-wheel="false"
            :zoom-on-time-axis-double-click="false"
            :time-ranges-feature="true"
            :columns="columns"
            :row-height=60
            :height=384
            :bar-margin="barMargin"
            :events="events"
            :resources="resources"
            :time-ranges="timeRanges"
            :start-date="startDate"
            :end-date="endDate"
            :event-renderer="eventRenderer"
            :column-lines-feature="false"
            :force-fit="true"
            :view-preset="viewPreset"
            event-style="colored"
            @eventselectionchange="onEventSelectionChange"
        >
        </scheduler>
    </div>
</template>

<script>
import Scheduler from './Scheduler.vue';
import { AjaxHelper, DateHelper } from 'bryntum-scheduler';
import VuesticDatePicker from '../../../vuestic-theme/vuestic-components/vuestic-date-picker/VuesticDatePicker.vue';

export default {
    name : 'scheduler-tab',

    components : {
        Scheduler,
        VuesticDatePicker
    },

    data() {
        return {
            timeRangesFeature : true,

            events     : [],
            resources  : [],
            timeRanges : [],

            barMargin     : 5,
            startDate     : new Date(2018, 1, 7, 8),
            endDate       : new Date(2018, 1, 7, 18),
            selectedEvent : '',
            columns       : [
                {
                    text       : 'Staff',
                    width      : 130,
                    field      : 'name',
                    editor     : false,
                    htmlEncode : false,
                    renderer({ value, grid, record, cellElement }) {
                        const count = record.events.length,
                            image = value ? value.toLowerCase() + '.jpg' : 'none.png';

                        return `
                            <div class="b-resource-info">
                                <img alt="${value}" src="users/${image}" />
                                <dl>
                                <dt>${value}</dt>
                                <dd class="b-resource-events">${count} event${count !== 1 ? 's' : ''}</dd>
                                </dl>
                            </div>
                        `;
                    }
                },
                {
                    text   : 'Type',
                    field  : 'role',
                    width  : 110,
                    editor : {
                        type     : 'combo',
                        items    : ['CEO', 'CTO', 'Sales', 'Tech Sales', 'Developer', 'Design & UX'],
                        editable : false
                    },
                    responsiveLevels : {
                        medium : { hidden : true },
                        large  : { hidden : false }
                    }
                }
            ],

            viewPreset : {
                name         : 'hourAndDay',
                headerConfig : {
                    middle : {
                        unit       : 'hour',
                        align      : 'center',
                        dateFormat : 'H:mm',
                        renderer   : function(start) {
                            return `
                                <div class="b-sch-header-hours">${DateHelper.format(start, 'H')}</div>
                                <div class="b-sch-header-minutes">${DateHelper.format(start, 'mm')}</div>
                            `;
                        }
                    },
                    top : {
                        unit       : 'day',
                        align      : 'center',
                        dateFormat : 'dddd DD/MM/YY'
                    }
                }
            },

            eventRenderer : ({ eventRecord }) => {
                return `
                    <div class="info">
                        <div class="name">${eventRecord.name}</div>
                        <div class="desc">${eventRecord.desc}</div>
                    </div>
                    `;
            }
        };
    },

    methods : {
        getData() {
            AjaxHelper.get('./data/data.json', { parseJson : true }).then(response => {
                // Response has { resources, events, timeRanges }, can be applied directly
                Object.assign(this, response.parsedJson);
            });
        },

        addEvent() {
            this.$refs.scheduler.addEvent();
        },

        removeEvent() {
            this.$refs.scheduler.removeEvent();
            this.selectedEvent = '';
        },

        onStartDatePickerInput(value) {
            const startDate = this.$refs.scheduler.schedulerEngine.startDate;

            // convert string value to date object
            value = DateHelper.parse(value, 'YYYY-MM-DD');

            this.$refs.scheduler.schedulerEngine.startDate = new Date(
                value.getFullYear(),
                value.getMonth(),
                value.getDate(),
                // apply start/end time from previous date value
                startDate.getHours(),
                startDate.getMinutes(),
                startDate.getSeconds()
            );
        },

        onEndDatePickerInput(value) {
            value = DateHelper.parse(value, 'Y-m-d');
            this.$refs.scheduler.schedulerEngine.endDate = value;
        },

        onEventSelectionChange({ selection }) {
            if (selection.length) {
                this.selectedEvent = selection[0].name;
            }
            else {
                this.selectedEvent = '';
            }
        }
    },

    created() {
        this.getData();
    }
};

</script>

<style>
    @import '~bryntum-scheduler/scheduler.light.css';

    .b-grid-header-container {
        border-bottom    : 2px solid #555;
        background-color : #fff;
    }

    .b-grid-header-text-content {
        display         : flex;
        justify-content : center;
    }

    .b-grid-header,
    .b-sch-header-timeaxis-cell {
        background     : #fff;
        color          : #34495e;
        text-transform : uppercase;
        border-right   : none;
    }

    .b-sch-header-timeaxis-cell {
        border-bottom : 1px solid #999;
        align-items   : flex-start;
    }

    .b-sch-header-hours,
    .b-sch-header-minutes {
        line-height : 1em;
    }

    .b-sch-header-minutes {
        font-size : 0.5em;
    }

    .b-responsive-small .b-sch-header-minutes {
        display : none;
    }

    .b-resource-info dl {
        margin : 0;
    }

    .b-grid-vertical-overflow .b-grid-header-scroller:last-child,
    .b-columnlines .b-grid-cell:not(:last-child),
    .b-grid-cell {
        border-right : none;
    }

    .b-grid-row {
        border-bottom : 2px solid #eff4f5;
    }

    .b-grid-cell {
        color : #34495e;
    }

    .b-resource-info dd {
        color : #adb3b9;
    }

    .b-grid-splitter {
        background : transparent;
    }

    .b-sch-style-colored.b-sch-color-blue.b-sch-event:not(.b-sch-event-milestone),
    .b-sch-style-colored.b-sch-color-blue .b-sch-event:not(.b-sch-event-milestone) {
        color : #4ab2e3;
    }

    .b-sch-style-colored.b-sch-color-green.b-sch-event:not(.b-sch-event-milestone),
    .b-sch-style-colored.b-sch-color-green .b-sch-event:not(.b-sch-event-milestone) {
        color : #4ae387;
    }

    .b-sch-style-colored.b-sch-color-red.b-sch-event:not(.b-sch-event-milestone),
    .b-sch-style-colored.b-sch-color-red .b-sch-event:not(.b-sch-event-milestone) {
        color : #e34a4a;
    }

</style>
