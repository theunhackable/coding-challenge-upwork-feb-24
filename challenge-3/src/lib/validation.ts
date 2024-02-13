
export function validatePassword(password: string) {
  if(password.length === 0) return "Password required.";
  if (password.length < 8) {
    return "Password must be at least 8 characters long.";
  }
  
  return null;
}

export function validateEmail(email: string) {
  if(email.length === 0) return 'Email required.'
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return "Invalid email address.";
  }

  return null;
}
