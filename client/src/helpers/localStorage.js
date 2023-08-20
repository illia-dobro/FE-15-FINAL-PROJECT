export const getLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('tokenDanIT');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('tokenDanIT', serializedState);
  } catch {
    // ignore write errors
  }
};
