/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryMap = {};

  // Step 1: Aggregate total spent for each category
  transactions.forEach(transaction => {
    const { category, price } = transaction;

    if (categoryMap[category]) {
      categoryMap[category] += price; // Add to existing total
    } else {
      categoryMap[category] = price; // Initialize total for this category
    }
  });

  // Step 2: Convert the map into an array of objects
  const result = Object.keys(categoryMap).map(category => {
    return {
      category: category,
      totalSpent: categoryMap[category]
    };
  });

  return result;
}

// Example usage
const transactions = [
  { id: 1, timestamp: 1656076800000, price: 10, category: 'Food', itemName: 'Pizza' },
  { id: 2, timestamp: 1656076800000, price: 20, category: 'Food', itemName: 'Burger' },
  { id: 3, timestamp: 1656076800000, price: 15, category: 'Transport', itemName: 'Taxi' },
  { id: 4, timestamp: 1656076800000, price: 5, category: 'Food', itemName: 'Soda' },
  { id: 5, timestamp: 1656076800000, price: 30, category: 'Transport', itemName: 'Bus' },
];

console.log(calculateTotalSpentByCategory(transactions));
