import Image from "next/image";

const DocumentationPage = () => {
    return (
        <main className="flex flex-col items-center gap-12 px-4 py-8">
            {/* ERD Section */}
            <section className="flex flex-col items-center gap-6 max-w-4xl w-full">
                <h1 className="text-3xl font-bold text-center">
                    Prisma Documentation: <span className="text-blue-600">prisma-erd-generator</span>
                </h1>
                <Image
                    className="rounded-lg shadow-lg"
                    unoptimized
                    priority
                    src="/assets/ERD.svg"
                    width={500}
                    height={600}
                    alt="Entity Relationship Diagram"
                />
            </section>

            {/* Docs Section */}
            <section className="flex flex-col gap-6 w-full max-w-screen-xl">
                <h2 className="text-3xl font-bold text-center">
                    Prisma Documentation: <span className="text-blue-600">prisma-docs-generator</span>
                </h2>
                <div className="w-full h-[80vh] border rounded-xl overflow-hidden shadow">
                    <iframe
                        src="/docs/index.html"
                        className="w-full h-full"
                        title="Prisma Documentation"
                        loading="lazy"
                        allowFullScreen
                        sandbox="allow-same-origin allow-scripts"
                    />
                </div>
            </section>
        </main>
    );
};

export default DocumentationPage;
