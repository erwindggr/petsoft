import H1 from "@/components/h1";
import ContentBlock from "@/components/content-block";

export default function Page() {
    return (
        <main>
            <H1 className="my-8 text-white">Your account</H1>

            <ContentBlock className="h-[500px] flex justify-center items-center">
                <p>Logged in as ...</p>
            </ContentBlock>
        </main>
    )
}