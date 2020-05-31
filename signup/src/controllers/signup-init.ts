import Signup, { SignupInitParams } from "@src/types/singup";
import { uuid } from "uuidv4";
import signupRepo from "@src/ports/repos/signup";

export default async (signupInitParams: SignupInitParams): Promise<Signup> => {
  const signup: Signup = {
    token: uuid(),
    initParams: signupInitParams,
    status: "IN_PROGRESS"
  };

  await signupRepo.insert(signup);
  return signup;
};
