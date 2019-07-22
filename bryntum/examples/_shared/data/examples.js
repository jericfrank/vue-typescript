/**
 * folder  : example folder under ./examples
 * group   : browser page group
 * title   : example title
 * build   : true if example needs building
 * offline : true if example is not available online
 * since   : package version since example is available
 * ie      : false if not supported for IE
 * edge    : false if not supported for Edge
 */
// eslint-disable-next-line no-unused-vars
window.examples = [
    { folder : '3d-bars', group : 'Intermediate', title : '3D bars (styling)' },
    { folder : 'angular/angular-1', group : 'Integration/Angular', title : 'Integrate with Angular 1', build : true },
    { folder : 'angular/angular-2', group : 'Integration/Angular', title : 'Integrate with Angular 2', build : true, offline : true },
    { folder : 'angular/angular-4', group : 'Integration/Angular', title : 'Integrate with Angular 4', build : true },
    { folder : 'angular/angular-5', group : 'Integration/Angular', title : 'Integrate with Angular 5', build : true },
    { folder : 'angular/angular-6', group : 'Integration/Angular', title : 'Integrate with Angular 6', build : true },
    { folder : 'angular/angular-7', group : 'Integration/Angular', title : 'Integrate with Angular 7', build : true },
    { folder : 'angular/drag-from-grid', group : 'Integration/Angular', title : 'Drag Tasks from Grid', build : true, since : '2.0' },
    { folder : 'angular/drag-between-schedulers', group : 'Integration/Angular', title : 'Drag between Schedulers', build : true, since : '2.0' },
    { folder : 'angular/drag-onto-tasks', group : 'Integration/Angular', title : 'Drop Equipment onto Tasks', build : true, since : '2.0' },
    { folder : 'angular/basic', group : 'Integration/Angular', title : 'Angular Basic demo', build : true, since : '2.0' },
    { folder : 'angular/tasks', group : 'Integration/Angular', title : 'Angular Tasks demo', build : true, since : '2.0' },
    { folder : 'angular/dependencies', group : 'Integration/Angular', title : 'Angular Dependencies demo', build : true, since : '2.0' },
    { folder : 'angular/animations', group : 'Integration/Angular', title : 'Angular Animations demo', build : true, since : '2.0' },
    { folder : 'angular/localization', group : 'Integration/Angular', title : 'Angular Localization demo', build : true, since : '2.0' },
    { folder : 'angular/filtering', group : 'Integration/Angular', title : 'Angular Filtering demo', build : true, since : '2.0' },
    { folder : 'angular/advanced', group : 'Integration/Angular', title : 'Angular Routing + NgRx demo', build : true, since : '2.0' },
    { folder : 'animations', group : 'Basic', title : 'Animations' },
    { folder : 'basic', group : 'Basic', title : 'Basic' },
    { folder : 'bigdataset', group : 'Intermediate', title : 'Big data set' },
    { folder : 'columns', group : 'Intermediate', title : 'Columns', since : '2.0' },
    { folder : 'configuration', group : 'Basic', title : 'Configuration' },
    { folder : 'crudmanager', group : 'Integration', title : 'Backend in PHP + CrudManager' },
    /*  */
    { folder : 'customeventstyling', group : 'Basic', title : 'Custom event styling' },
    { folder : 'dependencies', group : 'Advanced', title : 'Dependencies' },
    { folder : 'drag-between-schedulers', group : 'Advanced', title : 'Drag drop tasks between different Scheduler instances', since : '1.2' },
    { folder : 'drag-onto-tasks', group : 'Advanced', title : 'Drag drop objects onto tasks' },
    { folder : 'dragfromgrid', group : 'Advanced', title : 'Drag drop from a grid' },
    { folder : 'dragselection', group : 'Basic', title : 'Drag drop selection mode', since : '2.0' },
    { folder : 'esmodule', group : 'Integration', title : 'Include using EcmaScript module' },
    { folder : 'eventcontextmenu', group : 'Intermediate', title : 'Customized event context menu', since : '1.2' },
    { folder : 'eventeditor', group : 'Intermediate', title : 'Event editor' },
    { folder : 'eventeditor-combos', group : 'Intermediate', title : 'Event editor with cascading combos' },
    { folder : 'eventstyles', group : 'Basic', title : 'Event styles' },
    { folder : 'exporttoexcel', group : 'Advanced', title : 'Export to Excel' },
    { folder : 'extjsmodern', group : 'Integration', title : 'Integrate with ExtJS Modern' },
    { folder : 'fillticks', group : 'Basic', title : 'Fill ticks' },
    { folder : 'filtering', group : 'Basic', title : 'Filtering' },
    { folder : 'grouping', group : 'Intermediate', title : 'Grouping' },
    { folder : 'groupsummary', group : 'Advanced', title : 'Group summary' },
    { folder : 'histogramsummary', group : 'Advanced', title : 'Summary with histogram' },
    { folder : 'icons', group : 'Intermediate', title : 'Icons' },
    { folder : 'ionic/ionic-4', group : 'Integration', title : 'Integrate with Ionic', since : '1.2.1' },
    { folder : 'labels', group : 'Intermediate', title : 'Labels' },
    { folder : 'layouts', group : 'Intermediate', title : 'Event layouts' },
    { folder : 'localization', group : 'Intermediate', title : 'Localization' },
    { folder : 'milestonelayout', group : 'Intermediate', title : 'Milestone layout' },
    { folder : 'multiassign', group : 'Intermediate', title : 'Multi assignment' },
    { folder : 'multiassign-with-dependencies', group : 'Advanced', title : 'Multi assignment + dependencies', since : '2.0' },
    { folder : 'multisummary', group : 'Advanced', title : 'Multi summary' },
    { folder : 'nestedevents', group : 'Intermediate', title : 'Nested events' },
    { folder : 'partners', group : 'Advanced', title : 'Partnered Schedulers' },
    { folder : 'php', group : 'Integration', title : 'Backend in PHP' },
    { folder : 'react/javascript/advanced', group : 'Integration/React', title : 'Advanced React + Redux demo', build : true, since : '2.0' },
    { folder : 'react/javascript/animations', group : 'Integration/React', title : 'React animations demo', build : true, since : '2.0' },
    { folder : 'react/javascript/cdn', group : 'Integration/React', title : 'Integrate with React CDN' },
    { folder : 'react/javascript/dependencies', group : 'Integration/React', title : 'React dependencies demo', build : true, since : '2.0' },
    { folder : 'react/javascript/drag-between-schedulers', group : 'Integration/React', title : 'React drag-between-schedulers demo', build : true, since : '2.0' },
    { folder : 'react/javascript/drag-from-grid', group : 'Integration/React', title : 'React drag-from-grid demo', build : true, since : '2.0' },
    { folder : 'react/javascript/drag-onto-tasks', group : 'Integration/React', title : 'React drag-onto-tasks demo', build : true, since : '2.0' },
    { folder : 'react/javascript/localization', group : 'Integration/React', title : 'React localization demo', build : true, since : '2.0' },
    { folder : 'react/javascript/simple', group : 'Integration/React', title : 'React simple demo', build : true, since : '2.0' },
    { folder : 'react/typescript/basic', group : 'Integration/React', title : 'Integrate with React and TypeScript', build : true, since : '1.2' },
    { folder : 'requirejs', group : 'Integration', title : 'Include using RequireJS' },
    { folder : 'resourcetimeranges', group : 'Basic', title : 'Resource time ranges', since : '1.2' },
    { folder : 'responsive', group : 'Intermediate', title : 'Responsive' },
    { folder : 'rough', group : 'Advanced', title : 'Custom styling with Rough.js', since : '2.0' },
    { folder : 'rowheight', group : 'Basic', title : 'Row height' },
    { folder : 'salesforce', group : 'Integration', title : 'Integrate with Salesforce Lightning (offline)', offline : true },
    { folder : 'scripttag', group : 'Integration', title : 'Include using script tag' },
    { folder : 'scrollto', group : 'Basic', title : 'Scrolling' },
    { folder : 'simpleeditor', group : 'Basic', title : 'Simple event editor', since : '2.0' },
    { folder : 'summary', group : 'Intermediate', title : 'Summary' },
    { folder : 'tasks', group : 'Advanced', title : 'Tasks application demo' },
    { folder : 'theme', group : 'Advanced', title : 'Custom theme' },
    { folder : 'timeaxis', group : 'Advanced', title : 'Non-continuous time axis', since : '2.0' },
    { folder : 'timeranges', group : 'Basic', title : 'Time ranges' },
    { folder : 'timeresolution', group : 'Basic', title : 'Time resolution' },
    { folder : 'tooltips', group : 'Basic', title : 'Tooltips' },
    { folder : 'tree', group : 'Intermediate', title : 'Tree' },
    { folder : 'undoredo', group : 'Advanced', title : 'Undo/Redo' },
    { folder : 'validation', group : 'Intermediate', title : 'Validation when dragging, creating or resizing tasks' },
    { folder : 'vue/javascript/simple', group : 'Integration/Vue', title : 'Simple Vue demo', build : true, since : '2.0.4' },
    { folder : 'vue/javascript/advanced', group : 'Integration/Vue', title : 'Advanced Vue demo', build : true, since : '2.0.4' },
    { folder : 'vue/javascript/animations', group : 'Integration/Vue', title : 'Animations Vue demo', build : true, since : '2.0.4' },
    { folder : 'vue/javascript/dependencies', group : 'Integration/Vue', title : 'Dependencies Vue demo', build : true, since : '2.0.4' },
    { folder : 'vue/javascript/drag-between-schedulers', group : 'Integration/Vue', title : 'Drag between Schedulers Vue demo', build : true, since : '2.0.4' },
    { folder : 'vue/javascript/drag-from-grid', group : 'Integration/Vue', title : 'Drag Tasks from grid Vue demo', build : true, since : '2.0.4' },
    { folder : 'vue/javascript/drag-onto-tasks', group : 'Integration/Vue', title : 'Drag onto Tasks Vue demo', build : true, since : '2.0.4' },
    { folder : 'vue/javascript/localization', group : 'Integration/Vue', title : 'Localization Vue demo', build : true, since : '2.0.4' },
    { folder : 'vue/javascript/tasks', group : 'Integration/Vue', title : 'Tasks Vue demo', build : true, since : '2.0.4' },
    { folder : 'vue/javascript/cdn', group : 'Integration/Vue', title : 'Integrate with Vue CDN' },
    { folder : 'vue/javascript/vuestic', group : 'Integration/Vue', title : 'Integrate Vuestic Admin', build : true, since : '2.0' },
    { folder : 'webcomponents', group : 'Integration', title : 'Use as web component (WebKit only)', ie : false, edge : false },
    { folder : 'websockets', group : 'Advanced', title : 'WebSockets online demo', build : true, ie : false, edge : false, since : '2.0' },
    { folder : 'workingtime', group : 'Intermediate', title : 'Working hours & days', since : '2.0' }
];

// Filter out demos by browser
const
    isIE11 = /rv:11/.test(navigator.userAgent),
    isEdge = /Edge/.test(navigator.userAgent),
    browser = isIE11 ? 'ie' : isEdge ? 'edge' : null;

if (browser) {
    window.examples = window.examples.filter(function(e) {
        return e[browser] !== false;
    });
}

// eslint-disable-next-line no-unused-vars
window.introWidget = {
    type       : 'scheduler',
    minHeight  : 250,
    readOnly   : true,
    startDate  : new Date(2018, 4, 13),
    endDate    : new Date(2018, 4, 27),
    viewPreset : 'weekAndDayLetter',
    rowHeight  : 50,
    columns    : [
        {
            type     : 'template',
            text     : 'Name',
            field    : 'name',
            cellCls  : 'name',
            template : data => `<img src="_shared/images/users/${data.record.name.toLowerCase()}.jpg" alt=""/><dl><dt>${data.record.name}</dt><dd>${data.record.events.length} task(s)</dd></dl>`,
            width    : 200
        }
    ],

    resources : [
        { id : 1, name : 'Henrik' },
        { id : 2, name : 'Linda' }
    ],
    events : [
        { resourceId : 1, startDate : new Date(2018, 4, 14), endDate : new Date(2018, 4, 20), name : 'Make coffee' },
        { resourceId : 2, startDate : new Date(2018, 4, 14), endDate : new Date(2018, 4, 17), name : 'Meeting' },
        { resourceId : 2, startDate : new Date(2018, 4, 20), endDate : new Date(2018, 4, 20) }
    ]
};
