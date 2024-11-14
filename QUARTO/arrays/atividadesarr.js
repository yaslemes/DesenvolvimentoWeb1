// Exercício 1: Somar Elementos do Array
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
  // Exercício 2: Encontrar o Maior Número
  function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  
  // Exercício 3: Contar Ocorrências de um Elemento
  function countOccurrences(arr, element) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === element) {
        count++;
      }
    }
    return count;
  }
  
  // Exercício 4: Verificar se Todos os Elementos São Iguais
  function allEquals(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== arr[0]) {
        return false;
      }
    }
    return true;
  }
  
  // Exercício 5: Remover Duplicatas
  function removeDuplicates(arr) {
    let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
      let isDuplicate = false;
      for (let j = 0; j < uniqueArray.length; j++) {
        if (arr[i] === uniqueArray[j]) {
          isDuplicate = true;
          break;
        }
      }
      if (!isDuplicate) {
        uniqueArray.push(arr[i]);
      }
    }
    return uniqueArray;
  }
  
  // Exercício 6: Encontrar a Média dos Elementos
  function average(arr) {
    if (arr.length === 0) return 0;
    let sum = sumArray(arr); // Reutilizando a função do Exercício 1
    return sum / arr.length;
  }
  
  // Exercício 7: Mesclar Dois Arrays
  function mergeArrays(arr1, arr2) {
    let mergedArray = [];
    for (let i = 0; i < arr1.length; i++) {
      mergedArray.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
      mergedArray.push(arr2[i]);
    }
    return mergedArray;
  }
  
  // Exercício 8: Retornar Elementos Pares
  function getEvenNumbers(arr) {
    let evenNumbers = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evenNumbers.push(arr[i]);
      }
    }
    return evenNumbers;
  }
  
  // Exercício 9: Reverter um Array
  function reverseArray(arr) {
    let reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArray.push(arr[i]);
    }
    return reversedArray;
  }
  
  // Exercício 10: Encontrar o Índice de um Elemento
  function findIndex(arr, element) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === element) {
        return i;
      }
    }
    return -1;
  }  