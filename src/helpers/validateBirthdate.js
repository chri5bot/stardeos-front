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

  let parsedDate;

  if (!isNaN(parseFloat(date)) && isFinite(date)) {
    parsedDate = date;
  } else {
    parsedDate = Date.parse(date);
  }

  if (parsedDate >= ninetyYearsAgo && parsedDate < eighteenYearsAgo) {
    return true;
  }

  return false;
}

export default validateBirthdate;
