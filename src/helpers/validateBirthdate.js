function validateBirthdate(date) {
  if (!date) return false;

  let ninetyYearsAgo = new Date();
  ninetyYearsAgo = ninetyYearsAgo.setFullYear(
    ninetyYearsAgo.getFullYear() - 90,
  );

  let eighteenYearsAgo = new Date();
  eighteenYearsAgo = eighteenYearsAgo.setFullYear(
    eighteenYearsAgo.getFullYear() - 18,
  );

  if (date >= ninetyYearsAgo && date <= eighteenYearsAgo) return true;

  return false;
}

export default validateBirthdate;
