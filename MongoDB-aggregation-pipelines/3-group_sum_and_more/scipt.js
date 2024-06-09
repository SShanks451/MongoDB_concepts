// find the total number of males and females

[
  {
    $group: {
      _id: "$gender",
      gender_count: {
        $sum: 1,
      },
    },
  },
];

// which country has the number of registered users?

[
  {
    $group: {
      _id: "$company.location.country",
      userCount: {
        $sum: 1,
      },
    },
  },
  {
    $sort: {
      userCount: -1,
    },
  },
  {
    $limit: 1,
  },
];

// list all unique eye colour present in the collection

[
  {
    $group: {
      _id: "$eyeColor",
    },
  },
];
