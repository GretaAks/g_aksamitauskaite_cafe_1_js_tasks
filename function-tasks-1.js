const numbers = [1,45,65,3,5,4,6];
console.groupCollapsed('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');

{
  function firstElement(arr){
    return arr[0];
  }
  console.log({
    numbers,
    result: firstElement(numbers)
  });
}
console.groupEnd();

console.groupCollapsed('2. Parašykite funkciją, kuri pašalina pirmą masyvo elementą ir jį grąžina.');
{
  function noFirstElement(arr){
    return arr.shift();
  }
  console.log({
    numbers,
    result: noFirstElement(numbers)
  });
}
console.groupEnd();

console.groupCollapsed('3. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
  function lastElement(arr){
    return arr[arr.length-1];
  }
  console.log({
    numbers,
    result: lastElement(numbers)
  });
}
console.groupEnd();

console.groupCollapsed('4. Parašykite funkciją, kuri pašalina paskutinį masyvo elementą ir jį grąžina.');
{
  function lastElement(arr){
    return arr.pop();
  }
  console.log(numbers);
}
console.groupEnd();

console.groupCollapsed('5. Parašykite funkciją, kuri grąžina elementų kiekį masyve');
{
  function elements(arr){
    return arr.length;
  }
  console.log({
    numbers,
    result: elements(numbers)
  });
}
console.groupEnd();

console.groupCollapsed('6. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
  function elements(arr){
    console.log(arr.length-1);
  }
  elements(numbers);
}
console.groupEnd();

console.groupCollapsed('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
  function elements (arr,i){
    for (let i = 0; i < arr.length; i++)console.log(i);
    }
    elements(numbers);
    }
console.groupEnd();

console.groupCollapsed('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
  function elements (arr,i){
    for (let i = 0; i < arr.length; i++)console.log(arr[i]);
    }
    elements(numbers);
}

console.groupEnd();


console.groupCollapsed('9. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
  function logArrayElements(arr,i) {
    for (let i = 0; i < arr.length; i++)console.log(`[${i}] => ${arr[i]}`);
    }
  logArrayElements(numbers);
}
console.groupEnd();

console.groupCollapsed('10. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
  for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
  }
}
console.groupEnd();

console.groupCollapsed('11. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
  function allElementsIndex(arr,i){
    const result= arr.map((_,i)=>i).join(' ');
    console.log(result);
  }
  allElementsIndex(numbers);
}
console.groupEnd();

console.groupCollapsed('12. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48');
{
function printArrInLine(arr) {
  const res = arr.join(' ');
  console.log(res);
  }
  printArrInLine(numbers);

}
console.groupEnd();

console.groupCollapsed('13. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17 [1]=>8 [2]=>88 ..
{
  function printArr(arr) {
    const res = arr.map((el,i) => `[${i}]=>${el}`).join(' ');
      console.log(res);
    }
  printArr(numbers);
}

console.groupEnd();
