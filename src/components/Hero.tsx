    function Hero() {
    return (
        <section className="min-h-screen bg-slate-950 text-white flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-20">

            <p className="text-blue-400 font-medium mb-4">
            HELLO, I AM
            </p>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            M. Sabbir Hasnat Shaon
            </h1>

            <h2 className="text-2xl md:text-4xl text-slate-400 mt-6">
            Computer Science Student & Full-Stack Developer
            </h2>

            <p className="text-slate-400 max-w-2xl mt-6 text-lg leading-relaxed">
            I build intelligent, scalable and impactful software solutions
            using modern web technologies, artificial intelligence and
            emerging technologies.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

            <a
                href="#projects"
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition"
            >
                View My Work
            </a>

            <a
                href="#contact"
                className="border border-slate-600 hover:border-blue-500 px-6 py-3 rounded-lg font-medium transition"
            >
                Contact Me
            </a>

            </div>

        </div>
        </section>
    )
    }

    export default Hero