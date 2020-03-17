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