export default {
  responses: {
    privateAttributes: ["createdAt", "updatedAt"],
  },
  rest: {
    defaultLimit: 25,
    maxLimit: 100,
    withCount: true,
  },
};
