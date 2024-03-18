import { registerUser } from "@/services/user-service";

export const userMutations = {
  registerUser: (
    _: unknown,
    { input }: { input: { email: string; password: string } }
  ) => registerUser(input),
};
