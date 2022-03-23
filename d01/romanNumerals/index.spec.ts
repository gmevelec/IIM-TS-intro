import { numeralToRoman } from './index'

describe('Numeral to roman', () => {
  describe('Basic romans', () => {
    it('should return I when 1 is given', () => {
      expect(numeralToRoman(1)).toBe('I')
    })

    it('should return V when 5 is given', () => {
      expect(numeralToRoman(5)).toBe('V')
    })

    it('should return X when 10 is given', () => {
      expect(numeralToRoman(10)).toBe('X')
    })

    it('should return L when 50 is given', () => {
      expect(numeralToRoman(50)).toBe('L')
    })

    it('should return C when 100 is given', () => {
      expect(numeralToRoman(100)).toBe('C')
    })
  })
  describe('Multiple basic', () => {
    it('should return II when 2 is given', () => {
      expect(numeralToRoman(2)).toBe('II')
    })

    it('should return III when 3 is given', () => {
      expect(numeralToRoman(3)).toBe('III')
    })

    it('should return VI when 6 is given', () => {
      expect(numeralToRoman(6)).toBe('VI')
    })

    it('should return XI when 11 is given', () => {
      expect(numeralToRoman(11)).toBe('XI')
    })
  })

  describe('Edge cases', () => {
    it('should return IV when 4 is given', () => {
      expect(numeralToRoman(4)).toBe('IV')
    })

    it('should return IX when 9 is given', () => {
      expect(numeralToRoman(9)).toBe('IX')
    })

    it('should return XIV when 14 is given', () => {
      expect(numeralToRoman(14)).toBe('XIV')
    })

    it('should return XL when 40 is given', () => {
      expect(numeralToRoman(40)).toBe('XL')
    })

    it('should return XC when 90 is given', () => {
      expect(numeralToRoman(90)).toBe('XC')
    })
  })

  describe('Acceptance', () => {
    it('should return LXVIII when 68 is given', () => {
      expect(numeralToRoman(68)).toBe('LXVIII')
    })

    it('should return XLII when 42 is given', () => {
      expect(numeralToRoman(42)).toBe('XLII')
    })

    it('should return LXXXVII when 87 is given', () => {
      expect(numeralToRoman(87)).toBe('LXXXVII')
    })

    it('should return XCIV when 94 is given', () => {
      expect(numeralToRoman(94)).toBe('XCIV')
    })
  })
})
