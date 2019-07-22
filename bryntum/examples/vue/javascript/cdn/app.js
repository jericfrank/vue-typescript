/* eslint-disable */

var vm = new Vue({
    el : '#app',

    data : {
        events            : [],
        resources         : [],
        timeRanges        : [],
        timeRangesFeature : true,
        barMargin         : 5,
        startDate         : new Date(2018, 1, 7, 8),
        endDate           : new Date(2018, 1, 7, 18),
        selectedEvent     : '',
        columns           : [
            {
                type      : 'resourceInfo',
                imagePath : '../../../_shared/images/users/',
                text      : 'Staff',
                width     : 130
            },
            {
                text   : 'Type',
                field  : 'role',
                width  : 110,
                editor : {
                    type     : 'combo',
                    items    : ['CEO', 'CTO', 'Sales', 'Tech Sales', 'Developer', 'Design & UX'],
                    editable : false
                }
            }
        ],
        eventRenderer : function(renderData) {
            return '' +
                '<div class="info">' +
                    '<div class="name">' + renderData.eventRecord.name + '</div>' +
                    '<div class="desc">' + (renderData.eventRecord.desc || '') + '</div>' +
                '</div>';
        }
    },

    methods : {
        getData : function() {
            var me = this;

            axios.get('./data/data.json').then(function(response) {
                var data = response.data;
                me.resources = data.resources.rows;
                me.events = data.events.rows;
                me.timeRanges = data.timeRanges.rows;
            });
        },

        addEvent : function() {
            this.$refs.scheduler.addEvent();
        },

        removeEvent : function() {
            this.$refs.scheduler.removeEvent();
            this.selectedEvent = '';
        },

        onEventSelectionChange : function(event) {
            if (event.selection.length) {
                this.selectedEvent = event.selection[0].name;
            }
            else {
                this.selectedEvent = '';
            }
        }
    },

    created : function() {
        this.getData();
    }
});
