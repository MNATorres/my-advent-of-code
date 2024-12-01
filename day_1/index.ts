import fs from "fs/promises";
import path from "path";

const filePath = path.join(__dirname, "input_day_1.txt");

async function readFile() {
  const data = await fs.readFile(filePath, "utf-8");
  return data;
}

async function loadData(arr_a: number[], arr_b: number[]) {
  let data = await readFile();
  const lines = data.trim().split("\n");
  lines.forEach((line) => {
    const [left, right] = line.trim().split(/\s+/).map(Number);
    arr_a.push(left);
    arr_b.push(right);
  });
}

function displayData(arr_a: number[], arr_b: number[]) {
  console.log("| Mostrar Datos |");
  for (let i = 0; i < arr_a.length; i++) {
    console.log(`| ${arr_a[i]} | ${arr_b[i]} |`);
  }
}

function sortLists(arr_a: number[], arr_b: number[]) {
  arr_a.sort((a, b) => a - b);
  arr_b.sort((a, b) => a - b);
}

function calcular_distancia(arr_a: number[], arr_b: number[]): number {
  let distance = 0;
  for (let i = 0; i < arr_a.length; i++) {
    if (arr_a[i] > arr_b[i]) {
      const dif = arr_a[i] - arr_b[i];
      distance += dif;
    } else {
      const dif = arr_b[i] - arr_a[i];
      distance += dif;
    }
  }
  return distance;
}

const arr_a: number[] = [];
const arr_b: number[] = [];

(async () => {
  await loadData(arr_a, arr_b);
  displayData(arr_a, arr_b);
  sortLists(arr_a, arr_b);
  displayData(arr_a, arr_b);
  const distance = calcular_distancia(arr_a, arr_b);
  console.log(`La distancia entre los números es ${distance}`);
  // result 1590491
})();
