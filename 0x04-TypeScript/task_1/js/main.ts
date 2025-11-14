interface Teacher {
  readonly firstName: string; // non-modifiable property
  readonly lastName: string; // non-modifiable property
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // optional property
  location: string;
  [key: string]: any; // allowance for any additional properties
}

// Extending the Teacher interface to create a Director interface
interface Director extends Teacher {
  numberOfReports: number;
}

// Function interface for printing teacher's name
interface printTeacherFunction {
  ({ firstName, lastName }: { firstName: string; lastName: string }): string;
}

function printTeacher({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}
// Implementation of the printTeacher function
// const printTeacher: printTeacherFunction = (firstName, lastName) => {
//   return `${firstName}. ${lastName}`;
// };

interface constructorInterface {
  new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
  displayName(): string;
  workOnHomework(): string;
}

//  can be used to create StudentClass
// class StudentClass implements StudentClassInterface {}

// Writing a class
class StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}
