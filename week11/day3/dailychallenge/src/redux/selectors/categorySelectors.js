export const selectCategories = (state) => state.categories.categories;

export const selectCategoryById = (state, categoryId) => {
  const categories = selectCategories(state);
  return categories.find((category) => category.id === categoryId);
};
