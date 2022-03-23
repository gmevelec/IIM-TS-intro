const fizzBuzz = (n: number): string => {
  if (n % 15 === 0) return 'FizzBuzz'
  return n % 3 === 0 ? 'Fizz' : n % 5 === 0 ? 'Buzz' : n.toString()
}

describe('FizzBuzz',() => {
  it('should return 1 when 1 is given', () => {
    expect(fizzBuzz(1)).toBe('1')
  })

  it('should return 2 when 2 is given', () => {
    expect(fizzBuzz(2)).toBe('2')
  })

  it('should return fizz when 3 is given', () => {
    expect(fizzBuzz(3)).toBe('Fizz')
  })

  it('should return fizz when 6 is given', () => {
    expect(fizzBuzz(6)).toBe('Fizz')
  })

  it('should return buzz when 5 is given', () => {
    expect(fizzBuzz(5)).toBe('Buzz')
  })

  it('should return buzz when 10 is given', () => {
    expect(fizzBuzz(10)).toBe('Buzz')
  })

  it('should return fizzbuzz when 15 is given', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz')
  })

  it('should return fizzbuzz when 30 is given', () => {
    expect(fizzBuzz(30)).toBe('FizzBuzz')
  })
})
