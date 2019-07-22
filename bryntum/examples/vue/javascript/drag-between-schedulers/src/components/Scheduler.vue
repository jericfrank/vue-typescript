<!-- 
/**
 * @author Saki
 * @date 2019-03-25 14:52:47
 * @Last Modified by: Saki
 * @Last Modified time: 2019-03-31 18:56:51
 *
 * Modified vue-cli/src/components/Scheduler.vue
 * 
 * cSpell: ignore divs, unassign
 */
-->
<template>
    <div class="b-scheduler-container"></div>
</template>

<script>
    import Scheduler from '../lib/PartnerScheduler.js';

    // Defines a Vue component that wraps Bryntum Scheduler
    export default {

        name  : 'scheduler',
        props : {
            // Configs
            autoHeight                     : Boolean,
            barMargin                      : {
                default : 2,
                type    : Number
            },
            columns                        : Array,
            emptyText                      : String,
            eventBodyTemplate              : Function,
            eventColor                     : {
                default : 'green',
                type    : String
            },
            eventLayout                    : String,
            eventRenderer                  : Function,
            eventStyle                     : {
                default : 'plain',
                type    : String
            },
            endDate                        : Date,
            fillTicks                      : Boolean,
            forceFit                       : {
                default : false,
                type    : Boolean
            },
            hideHeaders                    : Boolean,
            id                             : String,
            milestoneCharWidth             : Number,
            milestoneLayoutMode            : String,
            multiEventSelect               : Boolean,
            readOnly                       : Boolean,
            responsiveLevels               : {
                default : undefined,
                type    : Object
            },
            rowHeight                      : Number,
            showRemoveEventInContextMenu   : Boolean,
            showRemoveRowInContextMenu     : Boolean,
            showUnassignEventInContextMenu : Boolean,
            startDate                      : Date,
            viewPreset                     : {
                default : 'hourAndDay',
                type    : [String, Object]
            },

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
            cellEditFeature          : {type : [Boolean, Object], default : true},
            columnLinesFeature       : {type : Boolean, default : true},
            dependenciesFeature      : [Boolean, Object],
            eventContextMenuFeature  : {type : [Boolean, Object], default : true},
            eventDragCreateFeature   : {type : [Boolean, Object], default : true},
            eventDragFeature         : {type : [Boolean, Object], default : true},
            eventEditFeature         : {type : [Boolean, Object], default : true},
            eventFilterFeature       : {type : [Boolean, Object], default : true},
            eventResizeFeature       : {type : [Boolean, Object], default : true},
            eventTooltipFeature      : {type : [Boolean, Object], default : true},
            groupFeature             : [Boolean, Object, String],
            groupSummaryFeature      : [Boolean, Object],
            headerContextMenuFeature : {type : [Boolean, Object], default : true},
            labelsFeature            : [Boolean, Object],
            nonWorkingTimeFeature    : [Boolean, Object],
            regionResizeFeature      : Boolean,
            scheduleTooltipFeature   : {type : [Boolean, Object], default : true},
            sortFeature              : [Boolean, Object, String, Array],
            stripeFeature            : Boolean,
            summaryToolbarFeature    : [Boolean, Object],
            timeRangesFeature        : {type : [Boolean, Object], default : true},
            treeFeature              : Boolean,
            listeners                : Object,
            partner                  : [Object, String],
            flex                     : String
        },

        // runs after the component is attached to DOM (mounted)
        mounted() {
            const propKeys = Object.keys(this.$props),
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

            // console.log('config=', config, 'props=', this.$props);
            
            // Create a Bryntum Grid with props as configs
            const engine = this.schedulerEngine = new Scheduler(config);

            engine.eventStore && engine.eventStore.relayAll(engine, 'events');
            engine.resourceStore && engine.resourceStore.relayAll(engine, 'resources');
            engine.assignmentStore && engine.assignmentStore.relayAll(engine, 'assignments');
            engine.dependencyStore && engine.dependencyStore.relayAll(engine, 'dependencies');

        }, // eo function mounted

        // cleanup before destroy
        beforeDestroy() {
            // Make sure Bryntum Grid is destroyed when vue component is
            this.schedulerEngine.destroy();
        }, // eo function beforeDestroy

        methods : {

        } // eo methods

    }; // eo scheduler export
    
</script>

<!-- eof -->
