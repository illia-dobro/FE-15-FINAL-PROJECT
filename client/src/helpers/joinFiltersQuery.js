export const joinFiltersQuery = (filters) => {
  let query = "";

  for (const property in filters) {
    query += `&${property}=${filters[property]}`;
  }
  return query;
};
