import { PasswordLength } from '../consts';

export const isPasswordValid = (pass: string) =>
  pass.length > PasswordLength &&
  /[A-Z]/.test(pass) &&
  /[a-z]/.test(pass) &&
  /[\!#$%&\\(\)@\_\.]/.test(pass);
