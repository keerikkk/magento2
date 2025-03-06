define(['jquery', 'mage/translate'], function($, $t) {
    'use strict';

    return function(targetWidget) {
        $.validator.addMethod(
            'validate-text-field',
            (value) => /^[а-яА-ЯёЁ\s-]+$/i.test(value),
            $t('Поле може містити тільки кирилицю і знак дефіса')
        )
        return targetWidget;
    }
});
