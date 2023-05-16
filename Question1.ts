let array: any[] = [3, true, "bharath", false, "dinesh", 4, 6, 7, "selva"];
var result: any[] = [];
let sort: any = "desc";

function sortdoodles(array: any, sort_value: any) {
  let x: any = {};
  for (let i = 0; i < array.length; i++) {
    if (sort_value == "asc") {
      let y;
      y = typeof array[i];
      if (y == "boolean") {
        result.unshift(array[i]);
      } else if (y == "string") {
        result.push(array[i]);
      } else {
        if (result.length >= 0) {
          let index = 0;
          for (let i = 0; i < result.length; i++) {
            let s = typeof result[i];
            if (s == "string") {
              index = i - 1;
              break;
            }
          }
          index != 0
            ? result.splice(index, 0, array[i])
            : result.push(array[i]);
        } else {
          result.push(array[i]);
        }
      }
    } else {
      let y;
      y = typeof array[i];
      if (y == "boolean") {
        result.push(array[i]);
      } else if (y == "string") {
        result.unshift(array[i]);
      } else {
        if (result.length >= 0) {
          let index = 0;
          for (let i = 0; i < result.length; i++) {
            let s = typeof result[i];
            if (s == "boolean") {
              index = i - 1;
              break;
            }
          }
          index != 0
            ? result.splice(index, 0, array[i])
            : result.push(array[i]);
        } else {
          result.push(array[i]);
        }
      }
    }
  }
  console.log(result);
}

sortdoodles(array, sort);
