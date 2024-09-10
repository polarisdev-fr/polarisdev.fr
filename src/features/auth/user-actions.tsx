import { prisma } from "@/prisma"
import { signOut } from "@/auth/auth";


export async function deleteUserAccount(userId: string) {
    await signOut().then(() => {
        prisma.user.delete({
            where: {
                id: userId
            }
        });
    });
}