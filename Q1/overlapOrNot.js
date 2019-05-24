const isOverlapping = (a, b) => {
  //Checking for undefined values
  if (!a || !b) {
    throw "Some values are missing";
  }

  //Input Validation for correct format
  if (Array.isArray(a) && Array.isArray(b) && a.length == 2 && b.length == 2) {
    const [x1, x2] = a;
    const [x3, x4] = b;

    //Sorting in ascending order for easy comparision later
    if (x1 > x2) {
      [x1, x2] = [x2, x1];
    }

    //Sorting in ascending order for easy comparision later
    if (x3 > x4) {
      [x3, x4] = [x4, x3];
    }

    // Check for Overlapping
    if ((x3 >= x1 && x3 <= x2) || (x4 >= x1 && x4 <= x2)) {
      return true;
    }

    return false;
  } else {
    throw "Values are not passed correctly";
  }
};

module.exports = isOverlapping;
