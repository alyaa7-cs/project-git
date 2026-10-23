import { promises } from "dns"

type CoursesPageProps = {
    params: Promise<{
        slug: string
    }>
}


const CoursesPage = async ({ params }: CoursesPageProps) => {
    const { slug } = await params;
    return (
        <>
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

                <h1>Courses details</h1>
                <p>courses : {slug}</p>
            </main>
        </>
    )
}
export default CoursesPage