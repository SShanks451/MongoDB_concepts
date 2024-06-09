// who has registered most recently?

[
  {
    $sort: {
      registered: -1,
    },
  },
  {
    $limit: 4,
  },
  {
    $project: {
      name: 1,
      registered: 1,
      favoriteFruit: 1,
    },
  },
];

// categorize users by their favourite fruits

[
  {
    $group: {
      _id: "$favoriteFruit",
      users: {
        $push: "$name",
      },
    },
  },
];

// how many users have 'ad' as the second tag in their list of tags?

[
  {
    $match: {
      "tags.1": "ad",
    },
  },
  {
    $count: "users",
  },
];

// find users who have both 'enim' and 'id' as their tags

[
  {
    $match: {
      tags: {
        $all: ["enim", "id"],
      },
    },
  },
];

// list all companies located in the USA with their corresponding user count.

[
  {
    $match: {
      "company.location.country": "USA",
    },
  },
  {
    $group: {
      _id: "$company.title",
      userCount: {
        $sum: 1,
      },
    },
  },
];
