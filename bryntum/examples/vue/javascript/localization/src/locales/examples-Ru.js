import { LocaleManager } from 'bryntum-scheduler';
// import '../../lib/Scheduler/localization/Ru.js';

const examplesLocale = {
    extends : 'Ru',

    Column : {
        'Name'             : 'Имя',
        'Staff'            : 'Персонал',
        'Machines'         : 'Машины',
        'Type'             : 'Тип',
        'Task color'       : 'Цвет задачи',
        'Employment type'  : 'Тип занятости',
        'Capacity'         : 'Вместительность',
        'Production line'  : 'Производственная линия',
        'Company'          : 'Компания',
        'Start'            : 'Начало',
        'End'              : 'Конец',
        'Role'             : 'Роль',
        'Id'               : '№',
        'First name'       : 'Имя',
        'Surname'          : 'Фамилия',
        'Score'            : 'Счет',
        'Rating'           : 'Рейтинг',
        'Nbr tasks'        : 'Кол-во задач',
        'Unassigned tasks' : 'Неназначенные задачи',
        'Duration'         : 'Продолжительность'
    },

    Shared : {
        'Locale changed' : 'Язык изменен'
    }
};

export default examplesLocale;

LocaleManager.extendLocale('Ru', examplesLocale);
