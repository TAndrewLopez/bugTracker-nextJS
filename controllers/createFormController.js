export const validateCreateForm = (form) => {
  //check is pass and confirm match
  if (form.password !== form.confirm) {
    console.error("Password do not match.");
    return false;
  }
  //make sure all fields are available
  for (const key in form) {
    if (Object.hasOwnProperty.call(form, key)) {
      const element = form[key];
      if (!element) {
        console.error("Field was left empty");
        return false;
      }
    }
  }
  return true;
};
