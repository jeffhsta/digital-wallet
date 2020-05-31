import Signup, { SignupStatus } from "@src/types/singup";

const insert = async (_singup: Signup): Promise<void> => {
  throw new Error("Not implemented");
};

const updateStatus = async (_singup: Signup, _newStatus: SignupStatus): Promise<Signup> => {
  throw new Error("Not implemented");
};

const getByToken = async (_token: string): Promise<Signup> => {
  throw new Error("Not implemented");
};

export default {
  insert,
  updateStatus,
  getByToken,
};
