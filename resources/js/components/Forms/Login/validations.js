const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export default {
  email: value => {
    if (!value) {
      return 'Email address is required.';
    } else if (!emailRegex.test(value)) {
      return 'Email address is invalid.';
    }
  },
  password: value => value ? undefined : 'Password is required.',
}