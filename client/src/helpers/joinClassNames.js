export const joinClassNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};
