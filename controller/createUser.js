const User = require("../model/createUser");

const createUser = async (req, res, next) => {
  const { name, lastName, email, password, contact } = req.body;

  // Helper functions for validation
  function isFirstLetterUppercase(str) {
    return str && str[0] === str[0].toUpperCase();
  }

  function containsUppercase(str) {
    const regex = /[A-Z]/;
    return regex.test(str);
  }

  function containsSpecialCharacter(str) {
    const regex = /[!@#$%^&*(),.?":{}|<>]/;
    return regex.test(str);
  }

  function containsNumericCharacter(str) {
    const regex = /\d/;
    return regex.test(str);
  }

  // Validation checks
  if (!isFirstLetterUppercase(name)) {
    return next(new Error("First letter of name should be capital"));
  }
  
  if (!isFirstLetterUppercase(lastName)) {
    return next(new Error("First letter of LastName should be capital"));
  }
  
  if (contact.length !== 10 || !/^\d{10}$/.test(contact)) {
    return next(new Error("Phone number should be 10 digits"));
  }
  
  if (!email.includes("@")) {
    return next(new Error("Email should contain @"));
  }
  
  if (password.length < 8) {
    return next(new Error("Password should be at least 8 characters long"));
  }
  
  if (!containsUppercase(password)) {
    return next(new Error("Password should contain at least one uppercase letter"));
  }
  
  if (!containsSpecialCharacter(password)) {
    return next(new Error("Password should contain at least one special character"));
  }
  
  if (!containsNumericCharacter(password)) {
    return next(new Error("Password should contain at least one numeric character"));
  }

  // If all validations pass, create the user
  try {
    const newlyInsertedData = await User.create(req.body);
    res.status(201).json({
      success: true,
      message: "Data added",
      data: newlyInsertedData
    });
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    res.status(500).json({
      success: false,
      message: "Something went wrong, please try again later",
    });
  }
};

module.exports = createUser;
