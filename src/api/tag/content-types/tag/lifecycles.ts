export default {
  beforeCreate(event) {
    const { data, where, select, populate } = event.params;

    console.log("beforeCreate", data, where, select, populate);
  },

  afterCreate(event) {
    const { result, params } = event;

    console.log("afterCreate", result, params);
  },

  beforeFindOne(event) {
    const { data, where, select, populate } = event.params;

    console.log("beforeFindOne", data, where, select, populate);
  },

  afterFindOne(event) {
    const { result, params } = event;

    result.name = result.name + " afterFindOne";

    console.log("afterFindOne", result, params);
  },

  beforeFindMany(event) {
    const { data, where, select, populate } = event.params;

    console.log("beforeFindMany", data, where, select, populate);
  },

  afterFindMany(event) {
    const { result, params } = event;

    console.log("afterFindMany", result, params);
  },
};
