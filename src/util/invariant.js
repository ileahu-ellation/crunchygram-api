const invariant = (condition, message = 'Invalid value') => {
  if (!condition) {
    throw new Error(message);
  }
};

export default invariant;
