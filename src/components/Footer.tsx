    function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-8">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-4">

            <p>
            © 2026 M. Sabbir Hasnat Shaon
            </p>

            <div className="flex gap-6">

            <a
                href="https://github.com/5abbir"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
            >
                GitHub
            </a>

            <a
                href="https://www.linkedin.com/in/sabbirshaon/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
            >
                LinkedIn
            </a>

            </div>

        </div>

        </footer>
    )
    }

    export default Footer