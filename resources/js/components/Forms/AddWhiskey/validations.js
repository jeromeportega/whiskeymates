export default {
  distillery: value => value ? undefined : 'Distillery is required.',
  age: value => value ? (value < 300 ? undefined : 'Age needs to be less than 300 years.') : undefined,
  type: value => value ? undefined : 'Type is required.',
}