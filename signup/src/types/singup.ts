export interface SignupInitParams {
  readonly fullname: string;
  readonly dateOfBirth: string;
  readonly address: string;
}

export type SignupStatus = "IN_PROGRESS" | "COMPLETE";

export default interface Signup {
  readonly token: string;
  readonly status: SignupStatus;
  readonly initParams: SignupInitParams;
  readonly selfie?: string;
  readonly frontDocumentPicture?: string;
  readonly backDocumentPicture?: string;
}
