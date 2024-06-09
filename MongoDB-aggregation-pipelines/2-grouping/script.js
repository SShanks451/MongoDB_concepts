// find the average age of all users

[
  {
    $group: {
      _id: null,
      averageAge: {
        $avg: "$age",
      },
    },
  },
];

// list the top 2 most common favourite fruits among users

[
  {
    $group: {
      _id: "$favoriteFruit",
      count: {
        $sum: 1,
      },
    },
  },
  {
    $sort: {
      count: -1,
    },
  },
  {
    $limit: 2,
  },
];
