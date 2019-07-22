<!-- 
/**
 * @author Saki
 * @date 2019-04-12 19:28:22
 * @Last Modified by: Saki
 * @Last Modified time: 2019-05-01 18:27:08
 */
 -->

<template>
    <div class="home">
        <scheduler 
            ref="scheduler"
            :config="schedulerConfig"
        />
    </div>
</template>

<script>
    // @ is an alias to /src
    // import Scheduler from '@/components/scheduler/Scheduler.vue';
    import Scheduler from 'bryntum-vue-shared/src/Scheduler.vue';
    import schedulerConfig from '@/components/scheduler/schedulerConfig.js';

    // export home view
    export default {
        name: 'home',
        data() {
            return {
                schedulerConfig,
                storedOriginalColors : false,
                storedOriginalStyles : false
            }
        },
        components: {
            Scheduler
        }, // eo components

        mounted() {
            this.$store.subscribe(this.handleMutation)
        },
        methods : {
            handleMutation(mutation) {
                this[mutation.type](mutation.payload);
            },

            setEventColor(color) {
                const eventStore = this.$refs.scheduler.schedulerEngine.eventStore;

                eventStore.forEach(eventRecord => {
                    if (!this.storedOriginalColors) {
                        eventRecord.originalColor = eventRecord.eventColor;
                    }

                    if (color === 'mixed') {
                        eventRecord.eventColor = eventRecord.originalColor;
                    }
                    else {
                        eventRecord.eventColor = color;
                    }
                });

                this.storedOriginalColors = true;

            }, // eo function setEventColor

            setEventStyle(style) {
                const eventStore = this.$refs.scheduler.schedulerEngine.eventStore;

                eventStore.forEach(eventRecord => {
                    if (!this.storedOriginalStyles) {
                        eventRecord.originalStyle = eventRecord.eventStyle;
                    }

                    if (style === 'mixed') {
                        eventRecord.eventStyle = eventRecord.originalStyle;
                    }
                    else {
                        eventRecord.eventStyle = style;
                    }
                });

                this.storedOriginalStyles = true;

            }, // eo function setEventStyle
        }
    } // eo export default

</script>

<!-- eof -->
