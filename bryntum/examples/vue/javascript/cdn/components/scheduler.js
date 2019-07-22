/* eslint-disable */

// Defines a Vue component that wraps Bryntum Scheduler
Vue.component('scheduler', {

    props : {
        // Configs
        autoHeight : {
            default : true,
            type    : Boolean
        },
        barMargin  : {
            default : 2,
            type    : Number
        },
        columns    : Array,
        emptyText  : String,
        eventBodyTemplate : Function,
        eventColor : {
            default : 'green',
            type : String
        },
        eventLayout : String,
        eventRenderer : Function,
        eventStyle : {
            default : 'plain',
            type : String
        },
        endDate   : Date,
        fillTicks : Boolean,
        forceFit   : {
            default : false,
            type    : Boolean
        },
        hideHeaders : Boolean,
        id : String,
        milestoneCharWidth : Number,
        milestoneLayoutMode : String,
        multiEventSelect : Boolean,
        readOnly   : Boolean,
        responsiveLevels : {
            default : undefined,
            type : Object
        },
        rowHeight  : Number,
        showRemoveEventInContextMenu : Boolean,
        showRemoveRowInContextMenu : Boolean,
        showUnassignEventInContextMenu : Boolean,
        startDate  : Date,
        viewPreset : {
            default : 'hourAndDay',
            type    : [String, Object]
        },

        // Stores
        assignmentStore : Object,
        dependencyStore : Object,
        eventStore : Object,
        resourceStore : Object,

        crudManager : Object,

        // Data
        assignments : Array,
        dependencies : Array,
        events     : Array,
        resources  : Array,
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
        scheduleTooltipFeature   : { type    : [Boolean, Object], default : true },
        sortFeature              : [Boolean, Object, String, Array],
        stripeFeature            : Boolean,
        summaryToolbarFeature    : [Boolean, Object],
        timeRangesFeature        : { type : [Boolean, Object], default : true }
    },

    template : '<div id="container"></div>',

    mounted : function() {
        var propKeys      = Object.keys(this.$props),
            featureConfig = {};

        var config = {
            // Render grid to components element
            appendTo : this.$el,

            // Listeners, will relay events using $emit
            listeners : {
                catchAll : function(event) {
                    // Uncomment this line to log events being emitted to console
                    //console.log(event.type);
                    this.$emit(event.type, event);
                },

                thisObj : this
            },

            features : featureConfig
        };

        // Apply all props to grid config
        propKeys.forEach(function(prop) {
            if (prop.indexOf('Feature') > -1) {
                var featureName = prop.substr(0, prop.length - 'Feature'.length);
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
                this.$watch(prop, function(newValue) {
                    this.schedulerEngine[prop] = Array.isArray(newValue) ? newValue.slice() : newValue;
                });
            }
        }, this);

        // Create a Bryntum Grid with props as configs
        var engine = this.schedulerEngine = new bryntum.scheduler.Scheduler(config);

        engine.eventStore && engine.eventStore.relayAll(engine, 'events');
        engine.resourceStore && engine.resourceStore.relayAll(engine, 'resources');
        engine.assignmentStore && engine.assignmentStore.relayAll(engine, 'assignments');
        engine.dependencyStore && engine.dependencyStore.relayAll(engine, 'dependencies');
    },

    beforeDestroy : function() {
        // Make sure Bryntum Grid is destroyed when vue component is
        this.schedulerEngine.destroy();
    },

    methods : {
        removeEvent : function() {
            var scheduler = this.schedulerEngine;
            scheduler.eventStore.remove(scheduler.selectedEvents);
        },

        addEvent : function() {
            var scheduler = this.schedulerEngine,
                startDate = new Date(scheduler.startDate.getTime());

            const newTask = new scheduler.eventStore.modelClass({
                resourceId   : scheduler.resourceStore.first.id,
                startDate    : startDate,
                duration     : 2,
                durationUnit : 'h',
                name         : 'New task',
                iconCls      : 'b-fa b-fa-calendar',
                desc         : 'Task description',
                eventType    : 'Meeting'
            });

            scheduler.editEvent(newTask);
        }
    }
});
