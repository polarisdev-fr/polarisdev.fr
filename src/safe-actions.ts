import { createSafeActionClient } from "next-safe-action";
import { currentUser } from "./auth/current-user";

export class ActionError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ActionError";
    }
}

const handleReturnedServerError = (error: Error) => {
    if (error instanceof ActionError) {
        throw error;
    }
    throw new ActionError("An error occurred while performing the action.");
}

export const action = createSafeActionClient({
    handleReturnedServerError: handleReturnedServerError,
})

export const userAction = createSafeActionClient({
    handleReturnedServerError: handleReturnedServerError,
    middleware: async () => {
        const user = await currentUser();

        if(!user) throw new ActionError('You must be logged in to perform this action');

        return { user };
    }
})