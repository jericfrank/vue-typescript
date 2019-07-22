<!-- 
/**
 * @author Saki
 * @date 2019-04-01 14:44:00
 * @Last Modified by: Saki
 * @Last Modified time: 2019-04-02 18:54:11
 */
-->
<template>
    <div class="grid-container"></div>
</template>

<script>
    import Grid from '../lib/EquipmentGrid';

    // export Grid
    export default {
        props: {
            config : Object
        },

        // runs once when component attached to DOM
        mounted() {
            const config = {
                ...this.config,
                appendTo   : this.$el,
                eventStore : this.$parent.$refs.scheduler.schedulerEngine.eventStore
            }
            
            this.grid = new Grid(config);
        } // eo function mounted

    } // export the Grid
    
</script>

<!-- eof -->
