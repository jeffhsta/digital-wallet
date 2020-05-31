export interface UserParams {
  readonly fullname: string;
}

export interface UserBankAccount {
  readonly id: string;
  readonly userId: string;
  readonly bankCode: string;
  readonly accountBranch: string;
  readonly accountNumber: string;
}

export default interface User {
  readonly id: string; 
  readonly fullname: string;
}
