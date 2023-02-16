// Validation Utils for maintaining any validation that is used throughout the app.

export function isValidEmail(value: string) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return value.match(mailformat);
}

export function isValidPassword(value: string) {
  var passwordPattern = /^(?=.{8,}$)/;
  return passwordPattern.test(value);
}

export function confirmPasswordValidation(
  password: string,
  confirmPassword: string,
): boolean {
  return password === confirmPassword;
}
