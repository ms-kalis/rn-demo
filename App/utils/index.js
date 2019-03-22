export const isInArr = (string, arr) => {
  const index = arr.indexOf(string);
  if (index < 0) {
    return false;
  }
  return true;
};

export const not = res => !res;
