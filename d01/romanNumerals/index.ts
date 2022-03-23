const romans: Map<number, string> = new Map([
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I'],
])

export const numeralToRoman = (n: number): string => {
  let res = ''
  romans.forEach((romanNumber: string, numeralNumber: number) => {
    while (n >= numeralNumber) {
      res += romanNumber
      n -= numeralNumber
    }
  })
  return res
}
