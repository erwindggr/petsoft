import BackgroundPattern from "@/components/background-pattern";
import AppHeader from "@/components/app-header";
import AppFooter from "@/components/app-footer";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <BackgroundPattern />
            <div className="flex flex-col min-h-screen max-w-[1050px] mx-auto px-4">
                <AppHeader />
                {children}
                <AppFooter />
            </div>
        </>
    )
}