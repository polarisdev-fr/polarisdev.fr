import { User } from "@prisma/client"
import { baseAuth, signIn } from "./auth"

export const currentUser = async () => {
    const session = await baseAuth();

    if(!session?.user) return null;

    const user = session.user as User;
    return user;
}

export const requiredCurrentUser = async () => {
    const user = await currentUser();

    if(!user) await signIn();

    return user;
}