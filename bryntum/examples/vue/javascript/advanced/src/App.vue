<!--
/**
 * @author Saki
 * @date 2019-04-08 17:47:26
 * @Last Modified by: Saki
 * @Last Modified time: 2019-04-12 20:08:51
 */
 -->
<template>
    <div id="app">
        <demo-header title="Advanced Vue demo" />
        <keep-alive>
            <router-view/>
        </keep-alive>
  </div>
</template>

<script>
    // Stockholm theme
    import 'bryntum-scheduler/scheduler.stockholm.css';
    import 'bootstrap/scss/bootstrap.scss';

    import DemoHeader from './components/header/Header';
    
    export default {        
        components : {
            DemoHeader
        }
    }
</script>

<style lang="scss">
    @import './App.scss';
</style>

<!-- eof -->
