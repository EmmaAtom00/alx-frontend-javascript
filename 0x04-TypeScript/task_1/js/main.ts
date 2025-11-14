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
  ({ firstname, lastname }: { firstname: string; lastname: string }): string;
}

function printTeacherFunction(): printTeacherFunction {
  return function ({
    firstname,
    lastname,
  }: {
    firstname: string;
    lastname: string;
  }): string {
    return `${firstname.charAt(0)}. ${lastname}`;
  };
}
