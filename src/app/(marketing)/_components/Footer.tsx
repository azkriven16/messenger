import Image from "next/image";

export default function Footer() {
    return (
        <footer className="border-t py-6 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
                <div className="flex items-center space-x-4"></div>
                <div className="mt-4 md:mt-0 flex items-center space-x-2">
                    <Image
                        src="/from-meta.png"
                        alt="Meta"
                        width={60}
                        height={20}
                        className="h-10 w-52 object-contain"
                    />
                </div>
            </div>
        </footer>
    );
}
