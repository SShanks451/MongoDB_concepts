// -----------------------------------------------------------these are MongoDB codes

// these collections are used for aggregation pipeline analysis :- https://gist.github.com/hiteshchoudhary/a80d86b50a5d9c591198a23d79e1e467

// how many users are active?
[
  {
    $match: {
      isActive: true,
    },
  },
  {
    $count: "activeUsers",
  },
];
