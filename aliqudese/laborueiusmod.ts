interface Income {
  [key: string]: number;
}

const riyadIncome: Income = {
  // ... (income data goes here)
};

// Iterate over each key in the riyadIncome object
for (const key in riyadIncome) {
  if (riyadIncome.hasOwnProperty(key)) {
    // Use template literals and type assertion to log the key-value pair
    console.log(`${key}: ${riyadIncome[key as keyof Income]}`);
  }
}
