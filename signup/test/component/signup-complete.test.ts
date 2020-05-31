import { expect } from "chai";
import signupComplete from "@src/controllers/signup-complete";
import { SinonStub, stub, restore } from "sinon";
import signupRepo from "@src/ports/repos/signup";
import Signup from "@src/types/singup";
import signupNotifier from "@src/ports/notifiers/signup";

let getByTokenSignup: SinonStub;
let updateStatusSignup: SinonStub;
let completeNotificationSignup: SinonStub;

describe("Signup complete", () => {
  beforeEach(() => {
    getByTokenSignup = stub(signupRepo, "getByToken");
    updateStatusSignup = stub(signupRepo, "updateStatus");
    completeNotificationSignup = stub(signupNotifier, "complete");
  });

  afterEach(() => restore());

  it("update signup status to complete", async () => {
    const token = "some-token";
    getByTokenSignup.resolves(signup);

    await signupComplete(token);

    expect(updateStatusSignup).to.have.been.calledWith(signup, "COMPLETE");
  });

  it("send a notification when a signup is completed", async () => {
    const token = "some-token";
    getByTokenSignup.resolves(signup);

    await signupComplete(token);

    expect(completeNotificationSignup).to.have.been.calledOnce;
  });
});

const signup: Signup = {
  token: "some-token",
  status: "IN_PROGRESS",
  initParams: {
    fullname: "Some Body",
    dateOfBirth: "1990-01-01",
    address: "Some place, 123"
  },
};
