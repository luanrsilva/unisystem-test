import { FormGroup } from '@angular/forms';

export function validatePassword(formGroup: FormGroup) {
  const password = formGroup.get('password')?.value ?? '';
  const confirmPassword = formGroup.get('confirmPassword')?.value ?? '';

  if (confirmPassword.trim() + password.trim()) {
    return confirmPassword === password ? null : { passwordNotComfirmed: true };
  } else {
    return null;
  }
}
