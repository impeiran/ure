import isImage from '../src/reg/isImage'
import isEmail from '../src/reg/isEmail'
import isNumber from '../src/reg/isNumber'
import isPhone from '../src/reg/isPhone'

describe('REG_MODULE', () => {
  test('test image reg', () => {
    expect(isImage('tracy.png')).toBe(true)
    expect(isImage('tracy.bmp')).toBe(true)
    expect(isImage('tracy.jpg')).toBe(true)
    expect(isImage('tracy.jpeg')).toBe(true)
    expect(isImage('interview.pdf')).toBe(false)
  })

  test('test email reg', () => {
    expect(isEmail('jafv@.c')).toBe(false)
    expect(isEmail('micheal@163.com')).toBe(true)
  })

  test('test number reg', () => {
    expect(isNumber('0.7')).toBe(true)
    expect(isNumber('17')).toBe(true)
    expect(isNumber(17)).toBe(true)
    expect(isNumber('aa')).toBe(false)
  })
  
  
  test('test phone reg', () => {
    expect(isPhone('020-86601234')).toBe(true);
    expect(isPhone('020-866012342')).toBe(false);
  
    expect(isPhone('13247479090')).toBe(true);
    expect(isPhone('+86 13247479090')).toBe(true);
    expect(isPhone('86 13247479090')).toBe(true);
  
    expect(isPhone('86 1324740')).toBe(false);
  })
})
