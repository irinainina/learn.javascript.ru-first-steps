/* Задание 6

Найдите положительные числа

Создайте регэксп, который ищет все положительные числа, в том числе и с десятичной точкой.

Пример использования:

var re = /* ваш регэксп */

var str = "1.5 0 12. 123.4.";

alert( str.match(re) );   // 1.5, 0, 12, 123.4

https://learn.javascript.ru/task/find-decimal-positive-numbers
*//

//Решение
    
var re = /\b\d+(\.\d+)?/g
var str = "1.5 0 12. 123.4.";
str.match(re);   // 1.5, 0, 12, 123.4
