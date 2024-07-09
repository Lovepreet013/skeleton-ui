import { RoughNotation } from "react-rough-notation";
import { Button } from "@/components/ui/button"

const App = () => {
    return (
        <div className="tracking-tight w-full">
            <div className="w-full sticky top-0">
                <nav className="flex items-center justify-between max-w-5xl mx-auto rounded-full bg-white bg-opacity-50 backdrop-blur-md">
                    <h1 className="font-bold text-2xl cursor-pointer my-4 mx-3">Skeleton Ui</h1>
                    <h1 className="cursor-pointer mx-3">Github</h1>
                </nav>
            </div>

            <main className="mt-32 text-center max-w-5xl mx-auto">
                <h1 className="text-7xl font-[600]">Transform Your Code to
                    <RoughNotation show={true} type="underline">
                        {` Skeleton `}
                    </RoughNotation>
                    Effortlessly!
                 </h1>
                 <p className="mt-8 text-xl text-gray-500">Instantly Generate Clean, Minimalist UI Previews for Your Code.</p>

                <Button className="mt-4 py-6 px-8 text-xl">Get Started</Button>
            </main>
        </div>
    )
}

export default App