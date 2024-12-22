function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: string | number): number {
  const bNum = typeof b === 'string' ? parseFloat(b) : b
  return a + bNum;
}

let result1 = add(1, 2); // Correct: both are numbers
let result2 = addSafe(1, "2"); // Correct: handles string conversion
let result3 = addSafe(1, 3); // Correct: handles numbers directly