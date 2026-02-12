export const validateEmail = (email) => {
  return /\S+@\S+\.\S+/.test(email);
};

export const validatePassword = (password) => {
  // Min 8 chars, at least one letter and one number (allows special chars)
  return /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(password);
};

export const validatePhone = (phone) => {
  // Nigerian format: starts with 0 or +234, 11-14 digits
  return /^(?:\+234|0)[789]\d{9}$/.test(phone);
};

export const validateName = (name) => {
  return /^[a-zA-Z\s]{2,}$/.test(name);
};

// A helper to run all validations at once for a specific form
export const validateAuthForm = (data, fields = []) => {
  const errors = {};

  if (fields.includes("name") && !validateName(data.name)) {
    errors.name = "Enter a valid name (letters only).";
  }
  if (fields.includes("email") && !validateEmail(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (fields.includes("phone") && !validatePhone(data.phone)) {
    errors.phone = "Enter a valid Nigerian phone number.";
  }
  if (fields.includes("password") && !validatePassword(data.password)) {
    errors.password =
      "Password must be 8+ characters with a letter and a number.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
