import Footer from "@/components/main/footer";
import { Navbar } from "@/components/main/menu";

export default function AuthLayout({children}: {children: React.ReactNode}) {
    return (
        <div>
            {children}
        </div>
    )
}