export const getLevelCards = (state) => {
  switch (true) {
    case state === 1:
      return 3;
    case state === 2:
      return 6;
    case state === 3:
      return 9;
    case state === 4:
      return 12;
    case state === 5:
      return 15;
    case state === 6:
      return 18;
  }
};
