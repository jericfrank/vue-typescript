<!-- 
/**
 * @author Saki
 * @date 2019-03-29 20:45:55
 * @Last Modified by: Saki
 * @Last Modified time: 2019-05-01 19:50:13
 * 
 * Application implementation
 */
 -->
<template>
    <div id="app">
        <demo-header title="Dependencies Vue demo"></demo-header>

        <scheduler
            ref                  = "scheduler"
            :eventColor          = "schedulerConfig.eventColor"
            :eventStyle          = "schedulerConfig.eventStyle"
            :columns             = "schedulerConfig.columns"
            :minHeight           = "schedulerConfig.minHeight"
            :startDate           = "schedulerConfig.startDate"
            :endDate             = "schedulerConfig.endDate"
            :viewPreset          = "schedulerConfig.viewPreset"
            :rowHeight           = "schedulerConfig.rowHeight"
            :barMargin           = "schedulerConfig.barMargin"
            :crudManager         = "schedulerConfig.crudManager"
            :timeRangesFeature   = "schedulerConfig.timeRangesFeature"
            :stripeFeature       = "schedulerConfig.stripeFeature"
            :dependenciesFeature = "schedulerConfig.dependenciesFeature"
            :eventDragFeature    = "schedulerConfig.eventDragFeature"
            :eventRenderer       = "schedulerConfig.eventRenderer"
        ></scheduler>
    </div>
</template>

<script>
    // header
    import DemoHeader from './components/Header.vue';

    // scheduler and its config
    import Scheduler from 'bryntum-vue-shared/src/Scheduler.vue';
    import schedulerConfig from './components/schedulerConfig.js';

    // we need to import it here because it comes from the package
    import 'bryntum-scheduler/scheduler.stockholm.css';

    // App 
    export default {
        name: 'app',

        // local components
        components: {
            DemoHeader,
            Scheduler
        },

        // function that returns data
        data() {
            return {
                schedulerConfig
            }
        } // eo function data
    } // eo export App

</script>

<style lang="scss">
    @import './App.scss';
</style>

<!-- eof -->
