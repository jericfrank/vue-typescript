<template>
    <div class="b-scheduler-container"></div>
</template>

<script>
import { Scheduler } from 'bryntum-scheduler';

// Defines a Vue component that wraps Bryntum Scheduler
export default {

    name : 'scheduler',

    props : {
        // Configs
        autoHeight : Boolean,
        barMargin  : {
            default : 2,
            type    : Number
        },
        columns           : Array,
        emptyText         : String,
        eventBodyTemplate : Function,
        eventColor        : {
            default : 'green',
            type    : String
        },
        eventLayout   : String,
        eventRenderer : Function,
        eventStyle    : {
            default : 'plain',
            type    : String
        },
        endDate   : Date,
        fillTicks : Boolean,
        forceFit  : {
            default : false,
            type    : Boolean
        },
        hideHeaders         : Boolean,
        id                  : String,
        milestoneCharWidth  : Number,
        milestoneLayoutMode : String,
        multiEventSelect    : Boolean,
        readOnly            : Boolean,
        responsiveLevels    : {
            default : undefined,
            type    : Object
        },
        rowHeight                      : Number,
        height                         : Number,
        showRemoveEventInContextMenu   : Boolean,
        showRemoveRowInContextMenu     : Boolean,
        showUnassignEventInContextMenu : Boolean,
        startDate                      : Date,
        viewPreset                     : {
            default : 'hourAndDay',
            type    : [String, Object]
        },

        zoomOnMouseWheel : Boolean,
        zoomOnTimeAxisDoubleClick : Boolean,

        // Stores
        assignmentStore : Object,
        dependencyStore : Object,
        eventStore      : Object,
        resourceStore   : Object,

        crudManager : Object,

        // Data
        assignments  : Array,
        dependencies : Array,
        events       : Array,
        resources    : Array,
        timeRanges   : Array,

        config : Object,

        // Features, only used for initialization
        cellEditFeature          : { type : [Boolean, Object], default : true },
        columnLinesFeature       : { type : Boolean, default : true },
        dependenciesFeature      : [Boolean, Object],
        eventContextMenuFeature  : { type : [Boolean, Object], default : true },
        eventDragCreateFeature   : { type : [Boolean, Object], default : true },
        eventDragFeature         : { type : [Boolean, Object], default : true },
        eventEditFeature         : { type : [Boolean, Object], default : true },
        eventFilterFeature       : { type : [Boolean, Object], default : true },
        eventResizeFeature       : { type : [Boolean, Object], default : true },
        eventTooltipFeature      : { type : [Boolean, Object], default : true },
        groupFeature             : [Boolean, Object, String],
        groupSummaryFeature      : [Boolean, Object],
        headerContextMenuFeature : { type : [Boolean, Object], default : true },
        labelsFeature            : [Boolean, Object],
        nonWorkingTimeFeature    : [Boolean, Object],
        regionResizeFeature      : Boolean,
        scheduleTooltipFeature   : { type : [Boolean, Object], default : true },
        sortFeature              : [Boolean, Object, String, Array],
        stripeFeature            : Boolean,
        summaryToolbarFeature    : [Boolean, Object],
        timeRangesFeature        : { type : [Boolean, Object], default : true }
    },

    mounted() {
        const propKeys      = Object.keys(this.$props),
            featureConfig = {};

        const config = {
            // Render grid to components element
            appendTo : this.$el,

            // Listeners, will relay events using $emit
            listeners : {
                catchAll(event) {
                    // Uncomment this line to log events being emitted to console
                    //console.log(event.type);
                    this.$emit(event.type, event);
                },

                thisObj : this
            },

            features : featureConfig
        };

        // Apply all props to grid config
        propKeys.forEach(prop => {
            if (prop.indexOf('Feature') > -1) {
                const featureName = prop.substr(0, prop.length - 'Feature'.length);
                // Prop is a feature config
                featureConfig[featureName] = this[prop];
            }
            else if (prop === 'config') {
                // Prop is a config object
                Object.assign(config, this[prop]);
            }
            else {
                // Prop is a config
                if (this[prop] !== undefined) config[prop] = this[prop];

                // Set up a watcher
                this.$watch(prop, newValue => {
                    this.schedulerEngine[prop] = Array.isArray(newValue) ? newValue.slice() : newValue;
                });
            }
        }, this);

        // Create a Bryntum Grid with props as configs
        const engine = this.schedulerEngine = new Scheduler(config);

        engine.eventStore && engine.eventStore.relayAll(engine, 'eventStore');
        engine.resourceStore && engine.resourceStore.relayAll(engine, 'resourceStore');
        engine.assignmentStore && engine.assignmentStore.relayAll(engine, 'assignmentStore');
        engine.dependencyStore && engine.dependencyStore.relayAll(engine, 'dependencyStore');
    },

    beforeDestroy() {
        // Make sure Bryntum Grid is destroyed when vue component is
        this.schedulerEngine.destroy();
    },

    methods : {
        removeEvent() {
            const scheduler = this.schedulerEngine;
            scheduler.eventStore.remove(scheduler.selectedEvents);
        },

        addEvent() {
            const scheduler = this.schedulerEngine,
                startDate = new Date(scheduler.startDate.getTime()),
                endDate   = new Date(startDate.getTime());

            endDate.setHours(endDate.getHours() + 1);

            scheduler.eventStore.add({
                resourceId : scheduler.resourceStore.first.id,
                startDate  : startDate,
                endDate    : endDate,
                name       : 'New task',
                desc       : 'Meeting'
            });
        }
    }
};
</script>
