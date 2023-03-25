export class person {
  id: number;
  name: string;
  gender: number;
  dateOfBirth: Date;
  identityCard: string;
  phoneNumber: string;
  email: string;

  constructor(
    id: number,
    name: string,
    gender: number,
    dateOfBirth: Date,
    identityCard: string,
    phoneNumber: string,
    email: string
    ) {
      this.id = id;
      this.name = name;
      this.gender = gender;
      this.dateOfBirth = dateOfBirth;
      this.identityCard = identityCard;
      this.phoneNumber = phoneNumber;
      this.email = email;
    }
  }
  
  // gender: number,
  // this.gender = gender;
  // public gender: number;