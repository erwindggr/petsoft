import BackgroundPattern from "@/components/background-pattern";
import AppHeader from "@/components/app-header";
import AppFooter from "@/components/app-footer";
import PetContextProvider from "@/contexts/pet-context-provider";

export default async function Layout({ children }: { children: React.ReactNode }) {
    const response = await fetch("https://bytegrad.com/course-assets/projects/petsoft/api/pets");
    if (!response.ok) {
        throw new Error("Failed to fetch pet list");
    };
    const data = await response.json();

    return (
        <>
            <BackgroundPattern />
            <div className="flex flex-col min-h-screen max-w-[1050px] mx-auto px-4">
                <AppHeader />
                <PetContextProvider data={data}>
                    {children}
                </PetContextProvider>
                <AppFooter />
            </div>
        </>
    )
}