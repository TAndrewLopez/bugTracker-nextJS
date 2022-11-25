export const validateCreateForm = (form) => {
  //make sure all fields are available
  for (const key in form) {
    if (Object.hasOwnProperty.call(form, key)) {
      const element = form[key];
      if (!element) {
        console.error(`${key} field was left empty`);
        return false;
      }
    }
  }

  //check is pass and confirm match
  if (form.password !== form.confirm) {
    console.error("Password do not match.");
    return false;
  }
  return true;
};
