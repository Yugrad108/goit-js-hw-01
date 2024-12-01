'use strict';
function getElementWidth(content, padding, border) {

    const contentWidth = parseFloat(content);
    const paddingWidth = parseFloat(padding);
    const borderWidth = parseFloat(border);

    // 1 варіант
    // const width = contentWidth + (paddingWidth * 2) + (borderWidth * 2);
    // return width

    
    return contentWidth + 2 * paddingWidth + 2 * borderWidth;
    
    // Лаконичность:
    // Второй вариант возвращает результат непосредственно в строке return,
    // что делает код более компактным и легко читаемым.Это уменьшает количество строк кода без потери ясности.
    
    // Упрощение:
    // Упрощая код, вы уменьшаете вероятность ошибок. Если вам не нужно сохранять промежуточное значение (например, width),
    // то нет смысла создавать дополнительную переменную.

    // Читаемость:
    // Хотя оба варианта читаемы, второй вариант делает акцент на том, что функция сразу возвращает результат вычисления,
    // что может быть более привычно для опытных разработчиков.

    // Второй вариант функции является более предпочтительным из-за своей лаконичности и простоты.
    // Он выполняет ту же задачу с меньшим количеством строк кода и без необходимости создавать промежуточные переменные,
    // если они не нужны для дальнейшего использования.

}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200




// РАзница между Number.parseFloat() и parseFloat() в JavaScript В обоих случаях вывод будет одинаковым.

// Различия
// Область видимости:
// Использование Number.parseFloat() может быть более предпочтительным в контексте модульного кода
// или когда вы хотите явно указать, что используете метод из объекта Number.
// Это может улучшить читаемость кода, особенно для разработчиков,
// которые могут не знать о глобальной функции parseFloat().

// В то время как parseFloat() является глобальной функцией и доступен 
// в любом месте кода без необходимости ссылаться на объект.

// Совместимость:
// Метод Number.parseFloat() был введен в ECMAScript 2015 (ES6).
// Если вы работаете в среде, где поддержка ES6 не гарантирована,
// то вам может понадобиться использовать глобальный метод parseFloat().
// Производительность:
// С точки зрения производительности разница между двумя методами минимальна и обычно не является проблемой.
// Выбор между ними должен основываться скорее на предпочтениях по стилю кода и читаемости.

// Заключение
// Оба метода выполняют одну и ту же задачу, и выбор между ними зависит от ваших предпочтений
// и контекста использования.Если вы хотите явно указать, что используете метод из объекта Number,
// используйте Number.parseFloat().Если вам нужна простота и доступность, 
// используйте глобальную функцию parseFloat().
