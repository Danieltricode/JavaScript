let num = [3, 5, 2, 4, 7, 9, 6, 8, 0]
// num[10] = 1
num.push(1)
num.sort()
// num.push(1)
for (let pos = 0;pos < num.length;pos++) {
    console.log(num[pos])
}
// console.log(num)