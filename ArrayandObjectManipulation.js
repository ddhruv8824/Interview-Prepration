const users = [
    { id: 1, name: "Alice", age: 17, city: "New York" },
    { id: 2, name: "Bob", age: 25, city: "Los Angeles" },
    { id: 3, name: "Charlie", age: 30, city: "New York" },
    { id: 4, name: "Diana", age: 22, city: "Chicago" }
  ];
  
  // 1. Returns an array of users whose age is 18 or above.
  function filterAdults(users) {
    return users.filter(user => user.age >= 18);
  }
  
  // 2. Returns an array of names extracted from the user objects.
  function mapUserNames(users) {
    return users.map(user => user.name);
  }
  
  // 3. Returns an object where each key is a city, and its value is an array of users from that city.
  function groupUsersByCity(users) {
    return users.reduce((grouped, user) => {
      if (!grouped[user.city]) {
        grouped[user.city] = [];
      }
      grouped[user.city].push(user);
      return grouped;
    }, {});
  }
  
  // Example Usage:
  console.log("Adults:", filterAdults(users));
  // Output: [
  //   { id: 2, name: "Bob", age: 25, city: "Los Angeles" },
  //   { id: 3, name: "Charlie", age: 30, city: "New York" },
  //   { id: 4, name: "Diana", age: 22, city: "Chicago" }
  // ]
  
  console.log("User Names:", mapUserNames(users));
  // Output: ["Alice", "Bob", "Charlie", "Diana"]
  
  console.log("Grouped by City:", groupUsersByCity(users));
  // Output:
  // {
  //   "New York": [
  //     { id: 1, name: "Alice", age: 17, city: "New York" },
  //     { id: 3, name: "Charlie", age: 30, city: "New York" }
  //   ],
  //   "Los Angeles": [{ id: 2, name: "Bob", age: 25, city: "Los Angeles" }],
  //   "Chicago": [{ id: 4, name: "Diana", age: 22, city: "Chicago" }]
  // }
  