import { Metadata } from "next";


export const metadata: Metadata = {
    title: "rasie up",
    description: "raiseup learn soulution"
}


async  function UsersPage() {
    const response = await fetch(" https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }
    const users = await response.json();
    return (
       
       <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <link href="/">home</link> | <link href="/courses">courses</link>   | <link href="/about">about</link> 
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

            <h1>
                Hello From user page
            </h1>

            {users.map((user: any) => (
                <div key={user.id}>
                    <h2>{user.firstName} {user.lastName}</h2>
                    <p>{user.email}</p>
                </div>
            ))}
            </main>
        </div>
    );
}
export default UsersPage