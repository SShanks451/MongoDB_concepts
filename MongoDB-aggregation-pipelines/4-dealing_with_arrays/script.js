// what is the average number of tags per user?

[
  {
    $unwind: {
      path: "$tags",
    },
  },
  {
    $group: {
      _id: "$_id",
      numberofTags: {
        $sum: 1,
      },
    },
  },
  {
    $group: {
      _id: null,
      averageNumberOfTags: {
        $avg: "$numberofTags",
      },
    },
  },
];

// Or

[
  {
    $addFields: {
      numberOfTags: {
        $size: { $ifNull: ["$tags", []] },
      },
    },
  },
  {
    $group: {
      _id: null,
      averageNumberOfTags: {
        $avg: "$numberOfTags",
      },
    },
  },
];
