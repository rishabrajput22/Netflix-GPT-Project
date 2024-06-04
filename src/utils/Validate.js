export const checkValidation = (email, password, fullname) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const isFullName =
    /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(
      fullname
    );

  if (!isFullName && !isEmailValid && !isPasswordValid)
    return "Name & Email & Password are Incorrect";
  if (!isEmailValid && !isPasswordValid)
    return "Email & Password are Incorrect";
  if (!isEmailValid) return "Email ID is not Valid";
  if (!isPasswordValid) return "Password is not Valid";
  if (!isFullName) return "Write a Valid Full Name";

  return null;
};
