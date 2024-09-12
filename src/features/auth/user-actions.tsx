import { prisma } from "@/prisma"
import { signOut } from "@/auth/auth";
import { stripe } from "@/stripe";


export async function deleteUserAccount(userId: string) {
    await stripe.customers.del(userId);
    await signOut().then(() => {
        prisma.user.delete({
            where: {
                id: userId
            }
        });
        prisma.$disconnect();
    });
}