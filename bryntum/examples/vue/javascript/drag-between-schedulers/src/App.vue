<!-- 
/**
 * @author Saki
 * @date 2019-03-31 18:08:21
 * @Last Modified by: Saki
 * @Last Modified time: 2019-05-01 20:56:53
 */
 -->

<template>
    <div id="app">
        <demo-header title="Drag between schedulers Vue demo"></demo-header>
        
        <!-- top scheduler -->
        <scheduler
            ref = "scheduler1"
            :id = "scheduler1Config.id"
            :minHeight = "scheduler1Config.minHeight"
            :startDate = "scheduler1Config.startDate"
            :endDate = "scheduler1Config.endDate"
            :viewPreset = "scheduler1Config.viewPreset"
            :barMargin = "scheduler1Config.barMargin"
            :stripeFeature = "scheduler1Config.features.stripe"
            :sortFeature = "scheduler1Config.features.sort"
            :eventDragFeature = "scheduler1Config.features.eventDrag"
            :columns = "scheduler1Config.columns"
            :resources = "scheduler1Config.resources"
            :events = "scheduler1Config.events"
        >
        </scheduler>

        <!-- bottom scheduler -->
        <scheduler
            ref = "scheduler2"
            :partner = "scheduler2Config.partner"
            :id = "scheduler2Config.id"
            :minHeight = "scheduler2Config.minHeight"
            :barMargin = "scheduler2Config.barMargin"
            :stripeFeature = "scheduler2Config.features.stripe"
            :sortFeature = "scheduler2Config.features.sort"
            :eventDragFeature = "scheduler2Config.features.eventDrag"
            :columns = "scheduler2Config.columns"
            :resources = "scheduler2Config.resources"
            :events = "scheduler2Config.events"
        >
        </scheduler>
    </div>
</template>

<script>
    // header
    import DemoHeader from './components/Header.vue';

    // scheduler and its configs
    import Scheduler from './components/Scheduler.vue';
    import scheduler1Config from './components/scheduler1Config.js';
    import scheduler2Config from './components/scheduler2Config.js';

    // we need to import it here because it comes from the package
    import 'bryntum-scheduler/scheduler.stockholm.css';

    // export App
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
                scheduler1Config,
                scheduler2Config
            }
        }
    }
</script>

<style lang="scss">
    @import './App.scss';
</style>

<!-- eof -->
