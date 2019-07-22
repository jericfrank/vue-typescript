<!-- 
/**
 * @author Saki
 * @date 2019-06-14 11:29:19
 * @Last Modified by: Saki
 * @Last Modified time: 2019-06-14 12:43:34
 */
-->
<template>
        <div></div>
    </template> 
    
    <script>
        import { Combo, LocaleManager } from 'bryntum-scheduler';
    
        export default {
            name : 'locale-combo',
            mounted() {
                const config = {
                    type       : 'combo',
                    label      : 'Select language',
                    width      : 240,
                    labelWidth : 120,
                    height     : '2.7em',
                    editable   : false,
                    onChange   : this.onLocaleChange,
                    value      : (localStorage && localStorage.i18nextLng) || 'en',
                    store      : [
                        { id : 'en', text : 'English' },
                        { id : 'se', text : 'Swedish' },
                        { id : 'ru', text : 'Russian' },
                    ],
                    appendTo : this.$el
                }
                
                this.combo = new Combo(config);
                this.onLocaleChange({ value : this.combo.value });
            },
            methods : {
                onLocaleChange({value : lng}) {
                    const lang = 'en-US' === lng ? 'en' : lng;
                    
                    this.$i18n.i18next.changeLanguage(lang);
                    
                    this.combo.label = this.$i18n.t('selectLanguage');
                    document.title = this.$i18n.t('title');
                    this.applySchedulerLocale(lang);
                    this.localValue = lang;
                },
                
                // applies scheduler locale
                applySchedulerLocale(lng) {
                    let locale = lng;
                    switch (lng) {
                        case 'se' :
                            locale = 'SvSE';
                            break ;
    
                        case 'ru' :
                            locale = 'Ru';
                            break;
    
                        default :
                            locale = 'En';
                            break;
                    }
                    LocaleManager.locale = locale;
                } // eo function applySchedulerLocale
    
            } // eo methods
        } // eo export default
    
    </script>
    
    <!-- eof -->