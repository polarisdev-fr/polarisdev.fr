import { Role, User } from "@prisma/client"
import { baseAuth, signIn } from "./auth"
import { prisma } from "@/prisma";

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

export const fetchUsers = async () => {
    try {
        const users = await prisma.user.findMany();
        return users;
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

export const checkUserRole = async (userId: string, role: Role[]) => {
    try {
      // Fetch the user with the given ID
      const user = await prisma.user.findUnique({
        where: {
          id: userId,  // Assuming ID is a string
        },
      });
  
      // Check if the user has the required role
      if (user && role.includes(user.role)) {
        return true;
      }
    } catch (error) {
      console.error("Error checking user role:", error);
      return false;
    }
}

export const getUserById = async (userId: string) => {
    try {
      // Fetch the user with the given ID
      const user = await prisma.user.findUnique({
        where: {
          id: userId,  // Assuming ID is a string
        },
      });
  
      // Return the user, or null if not found
      return user;
    } catch (error) {
      console.error("Error fetching user by ID:", error);
      return null;
    }
};    