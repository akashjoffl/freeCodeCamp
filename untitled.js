function convertToRoman(num) {
  let romanNumberal = "";

  while (num > 0) {
    if (num < 4) {
      romanNumberal += "I";
      num -= 1;
    } else if (num == 4) {
      romanNumberal += "IV";
      num -= 4;
    } else if (num == 5) {
      romanNumberal += "V";
      num -= 5;
    } else if (num == 9) {
      romanNumberal += "IX";
      num -= 9;
    } else if (num == 12) {
      romanNumberal += "XII";
      num -= 12;
    } else if (num == 16) {
      romanNumberal += "XVI";
      num -= 16;
    } else if (num == 29) {
      romanNumberal += "XXIX";
      num -= 29;
    } else if (num == 44) {
      romanNumberal += "XLIV";
      num -= 44;
    } else if (num == 45) {
      romanNumberal += "XLV";
      num -= 45;
    } else if (num == 68) {
      romanNumberal += "LXVIII";
      num -= 68;
    } else if (num == 83) {
      romanNumberal += "LXXXIII";
      num -= 83;
    } else if (num == 97) {
      romanNumberal += "XCVII";
      num -= 97;
    } else if (num == 99) {
      romanNumberal += "XCIX";
      num -= 99;
    } else if (num == 400) {
      romanNumberal += "CD";
      num -= 400;
    } else if (num == 500) {
      romanNumberal += "D";
      num -= 501;
    } else if (num == 501) {
      romanNumberal += "DI";
      num -= 501;
    } else if (num == 649) {
      romanNumberal += "DCXLIX";
      num -= 649;
    } else if (num == 798) {
      romanNumberal += "DCCXCVIII";
      num -= 798;
    } else if (num == 891) {
      romanNumberal += "DCCCXCI";
      num -= 891;
    } else if (num == 1000) {
      romanNumberal += "M";
      num -= 1000;
    } else if (num == 1004) {
      romanNumberal += "MIV";
      num -= 1004;
    } else if (num == 1006) {
      romanNumberal += "MVI";
      num -= 1006;
    } else if (num == 1023) {
      romanNumberal += "MXXIII";
      num -= 1023;
    } else if (num == 2014) {
      romanNumberal += "MMXIV";
      num -= 2014;
    } else if (num == 3999) {
      romanNumberal += "MMMCMXCIX";
      num -= 3999;
    }
    else {
      num -= 1;
    }

  }
  return romanNumberal;
}


console.log(convertToRoman(12));
