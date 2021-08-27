let arr = [1, 2, 4, 6, 13, 46, 16, 156, 44, 8, 12],
  divFour = [];
otherNum = [];

for (i = 0; i < arr.length; i++) {
  if (arr[i] % 4 == 0) {
    divFour.push(arr[i]);
  } else {
    otherNum.push(arr[i]);
  }
}
