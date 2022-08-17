export const state = () => ({
  foodData: [],
});

export const mutations = {
  updateFoodData: (state, data) => {
    state.foodData = data;
  },
};

export const actions = {
  async getFoodData({ state, commit }) {
    if (state.foodData.length) return;
    try {
      await fetch(
        "https://dva9vm8f1h.execute-api.us-east-2.amazonaws.com/production/restaurants",
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.AWS_API_KEY,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          commit("updateFoodData", data);
        });
    } catch (err) {
      console.log(err);
    }
  },
};
