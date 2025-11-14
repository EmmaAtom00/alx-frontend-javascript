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
  (firstName: string, lastName: string): string;
}
// Implementation of the printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName}. ${lastName}`;
};
