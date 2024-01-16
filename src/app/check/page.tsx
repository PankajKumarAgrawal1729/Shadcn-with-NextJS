// no need to make routing it is automatically done by folder name
// we can use any name for folder(except api)

import { Button } from "@/components/ui/button";

function TestPage(){
    return (
        <main className="h-full flex justify-center items-center flex-col">
            <div>Testing Page</div>
            <button className="px-6 py-2 bg-blue-500 rounded my-3 hover:bg-blue-700">Test button</button>
            <Button variant="test" size='sm'>Shadcn Button</Button>
        </main>
    )
}

export default TestPage;