// how many user have 'enim' in their tags?

[
  {
    $match: {
      tags: "enim",
    },
  },
  {
    $count: "userWithEnimTag",
  },
];

// what are the names and age of users who are inactive and have 'velit' as a tag?

[
  {
    $match: {
      isActive: false,
      tags: "velit",
    },
  },
  {
    $project: {
      name: 1,
      age: 1,
    },
  },
];

// how many users have a phone number starting with '+1 (940)'?

[
  {
    $match: {
      "company.phone": /^\+1 \(940\)/,
    },
  },
  {
    $count: "usersWithSpecialPhoneNo",
  },
];
