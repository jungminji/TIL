function centuryFromYear(year) {
  return Number.isInteger(year / 100) ? parseInt(year / 100) : parseInt(year / 100) + 1;
}
