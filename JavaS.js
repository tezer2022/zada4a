// Одномерные массивы. Решение задач.

// Задача.
// Сформировать реверсированный массив.

// 1. Объявление массивов
var A1 = [] // исходный массив
var A2 = [] // результирующий массив

// 2. Задать количество элементов в массиве A1
A1.length = prompt("n = ")

// 3. Ввести элементы массива A1 в цикле
for (var i=0; i<A1.length; i++)
  A1[i] = prompt("A1[" + i + "] = ")

// 4. Вывести n и массив A1
document.write("n = " + A1.length + "<br>")

document.write("A1:<br>")
for (var i=0; i<A1.length; i++)
  document.write(A1[i]+" ")
document.write("<br>")

// 4. Сформировать реверсированный массив A2

for (var i=A1.length-1; i>=0; i--)
  A2[A1.length-i-1] = A1[i];

// 5. Вывести массив A2
document.write("A2:<br>")
for (var i=0; i<A2.length; i++)
  document.write(A2[i] + " ")
document.write("<br>")