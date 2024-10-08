"use client"

import { AlertDialogAction, AlertDialogCancel } from "@/components/ui/alert-dialog"
import { deleteUserAccount } from "./user-actions"

export default function UserDeleteButton({user}: {user: any}) {
    return (
        <>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-red-700 text-destructive-foreground" onClick={() => deleteUserAccount(user?.id as string)}>
                  Delete Account
            </AlertDialogAction>
        </>
    )
}