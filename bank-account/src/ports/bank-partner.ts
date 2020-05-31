import User from "@src/types/user";
import BankAccount from "@src/types/bank-account";

const createAccount = async (_user: User): Promise<BankAccount> => {
  throw new Error("Not implemented");
};

export default {
  createAccount,
};
