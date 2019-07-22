<!-- 
/**
 * @author Saki
 * @date 2019-03-28 22:56:21
 * @Last Modified by: Saki
 * @Last Modified time: 2019-05-02 10:40:32
 *
 * This is a simple wrapper around Bryntum button
 *
 * cSpell: ignore toggleable
 */ 
-->
<template><div></div></template>

<script>
    import { WidgetHelper } from 'bryntum-scheduler';

    // export the button
    export default {
        props : {
            text       : { type : String },
            tooltip    : String,
            icon       : String,
            color      : { type : String, default : 'b-orange b-raised' },
            action     : { type : String, default : 'action' },
            toggleable : { type : Boolean }
        },

        mounted() {
            var props = this.$props;
            
            const button = WidgetHelper.createWidget({
                type       : 'button',
                action     : props.action,
                appendTo   : this.$el,
                color      : props.color,
                icon       : props.icon,
                text       : props.text,
                tooltip    : props.tooltip,
                toggleable : props.toggleable,
                onAction   : ({source}) => {
                    this.$emit('click', source)
                }
            });

            this.button = button;
            
        } // eo function mounted

    } // eo Button export
    
</script>

<!-- eof -->
