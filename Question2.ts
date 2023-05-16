let list: any[] = [
  [1, 3],
  [true, "5"],
];
let temp: any = [];

function parentfn(list: any) {
  for (let i = 0; i < list.length; i++) {
    transformDoodles(list[i], 0);
  }
  return temp;
}
parentfn(list);

function transformDoodles(array: any[], index: any): any {
  if (array.length == index) {
    return temp;
  } else {
    temp.push(array[index]);
    index = index + 1;
    transformDoodles(array, index);
  }
}
