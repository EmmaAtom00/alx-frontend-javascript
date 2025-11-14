interface Teacher {
  readonly firstName: string; // non-modifiable property
  readonly lastName: string; // non-modifiable property
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // optional property
  location: string;
  [key: string]: any; // allowance for any additional properties
}

interface Director extends Teacher {
  numberOfReports: number;
}
