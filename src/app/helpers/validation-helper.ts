const zeroCharCode = 48;
const nineCharCode = 57;
const dotCharCode = 190;

export class ValidationHelper {
    inputValidation(k: number) {   
        return (
          (k >= zeroCharCode && k <= nineCharCode) ||
          k == dotCharCode)
      }
}