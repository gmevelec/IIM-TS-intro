const getThem = (): Array<number[]> => {
  const array1: Array<number[]> = []
  this.theList.forEach((x) => {
    if (x[0] === 4)
      array1.push(x)
  })
  return array1
}