let yourGrade = parseInt(prompt("Enter your grade: "));

switch (true) {
  case yourGrade > 95:
    console.log("Good shit you got an A+");
    break;
  case yourGrade > 88 && yourGrade <= 94:
    console.log("Your grade is a A");
    break;
  case yourGrade > 84 && yourGrade <= 87:
    console.log("Your grade is a B+");
    break;
  case yourGrade > 77 && yourGrade <= 83:
    console.log("Your grade is a B");
    break;
  case yourGrade > 70 && yourGrade <= 76:
    console.log("Your grade is a C+");
    break;
  case yourGrade > 67 && yourGrade <= 69:
    console.log("Your grade is a C");
    break;
    console.log("Your grade is a D+");
  case yourGrade > 64 && yourGrade <= 66:
    console.log("Your grade is a D");
    break;
  case yourGrade <= 64:
    console.log("Your grade is a F");
    break;
}
