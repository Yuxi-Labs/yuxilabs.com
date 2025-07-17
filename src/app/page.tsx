import Image from "next/image";
import yuxiLogo from "../../public/images/logos/yuxi-labs-logo.png";

export default function Home() {
    return (
        <div className="font-sans grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-6 sm:p-12 lg:p-24 gap-12">
            <main className="row-start-2 text-center space-y-6 max-w-4xl w-full px-4">
                <div className="flex justify-center">
                    <Image
                        src={yuxiLogo}
                        alt="Yuxi Labs Logo"
                        width={160}
                        height={160}
                        priority
                    />
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl">
                    Human–Computer Interaction Research
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300">
                    We study how people interact with digital media and develop tools and systems to improve those interactions.
                </p>
            </main>

            <footer className="row-start-3 text-xs text-gray-500 dark:text-gray-400 text-center px-4">
                &copy; {new Date().getFullYear()} Yuxi Labs. All rights reserved.
            </footer>
        </div>
    );
}
