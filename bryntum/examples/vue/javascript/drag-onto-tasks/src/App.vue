<!-- 
/**
 * @author Saki
 * @date 2019-04-01 22:21:29
 * @Last Modified by: Saki
 * @Last Modified time: 2019-05-01 22:28:32
 */
 -->
<template>
    <div id="app">
        <demo-header title="Drag onto tasks Vue demo"></demo-header>
        <div class="content-container">
            <scheduler
                ref                      = "scheduler"
                :rowHeight               = "schedulerConfig.rowHeight"
                :barMargin               = "schedulerConfig.barMargin"
                :eventColor              = "schedulerConfig.eventColor"
                :startDate               = "schedulerConfig.startDate"
                :endDate                 = "schedulerConfig.endDate"
                :columns                 = "schedulerConfig.columns"
                :viewPreset              = "schedulerConfig.viewPreset"
                :crudManager             = "schedulerConfig.crudManager"
                :timeRangesFeature       = "schedulerConfig.features.timeRanges"
                :eventContextMenuFeature = "schedulerConfig.features.eventContextMenu"
                :eventEditFeature        = "schedulerConfig.features.eventEdit"
                :regionResizeFeature     = "schedulerConfig.features.regionResize"
                :eventBodyTemplate       = "schedulerConfig.eventBodyTemplate"
                :eventRenderer           = "schedulerConfig.eventRenderer"
                :onEquipmentStoreLoad    = "schedulerConfig.onEquipmentStoreLoad"
                :equipmentStore          = "schedulerConfig.equipmentStore"
            ></scheduler>
            
            <grid 
                ref     = "grid"
                :config = "gridConfig"
            ></grid>
        </div>
    </div>

</template>

<script>
    // App
    import DemoHeader from './components/Header.vue';

    // scheduler and its config and grid
    import Scheduler from 'bryntum-vue-shared/src/Scheduler.vue';
    import schedulerConfig from './components/schedulerConfig.js';

    // scheduler components
    import { AjaxStore, EventStore } from 'bryntum-scheduler';
    import Task from './lib/Task.js';
    import Grid from './components/Grid.vue';
    import Drag from './lib/Drag.js';
    
    // we need to import it here because it comes from the package
    import 'bryntum-scheduler/scheduler.stockholm.css';

    const 
        equipmentStore = new AjaxStore({
            modelClass : Task,
            readUrl    : 'data/equipment.json',
            sorters    : [
                { field : 'name', ascending : true }
            ]
        }),
        eventStore = new EventStore({
            modelClass : Task
        })
    ;

    // App
    export default {
        name: 'app',

        // local components
        components: {
            DemoHeader,
            Scheduler,
            Grid
        }, // eo components

        // function that returns data
        data() {
            // console.log(schedulerConfig);
            return {
                schedulerConfig,
                gridConfig : {
                    // Use a chained Store to avoid its filtering to interfere with Scheduler rendering
                    store : equipmentStore.makeChained(() => true)
                }
            }
        }, // eo function data

        mounted() {
            const 
                grid = this.$refs.grid.grid,
                schedule = this.$refs.scheduler.schedulerEngine,
                outerElement = grid.element
            ;

            new Drag({
                grid,
                schedule,
                outerElement
            });
            schedule.equipmentStore = equipmentStore;
            schedule.onEquipmentStoreLoad = schedulerConfig.onEquipmentStoreLoad;
            
            schedule.equipmentStore.on('load', schedule.onEquipmentStoreLoad.bind(schedule));

            equipmentStore.load();
            
        } // eo mounted

    } // eo export App

</script>

<style lang="scss">
    @import './App.scss';
</style>

<!-- eof -->
