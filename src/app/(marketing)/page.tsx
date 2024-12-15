import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export default function MessengerLanding() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 grid lg:grid-cols-2 place-items-center gap-12 px-6 py-12 lg:py-20 max-w-7xl mx-auto">
                <div className="flex flex-col justify-center">
                    <h1 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        A place for meaningful conversations
                    </h1>
                    <p className="mt-6 text-lg text-gray-600">
                        Connect with your friends and family, build your
                        community, and deepen your interests.
                    </p>
                    <div className="mt-8 space-y-4 max-w-2xl">
                        <Link href="/dashboard">
                            <Button className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-white text-xl">
                                Log in
                            </Button>
                        </Link>
                    </div>
                </div>
                <Image
                    src="/hero.png"
                    alt="Messenger interface"
                    width={500}
                    height={1000}
                    className="mx-auto rounded-3xl"
                />
            </main>

            <Footer />
        </div>
    );
}
