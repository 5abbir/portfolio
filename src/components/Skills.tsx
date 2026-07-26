    const skills = [
    "C",
    "C++",
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
    "Tailwindcss",
    "React",
    "Node.js",
    "HTML5",
    "CSS3",
    "SQL",
    "Git",
    "GitHub",
    "Linux",
    ]

    function Skills() {
    return (
        <section
        id="skills"
        className="bg-slate-950 text-white py-24"
        >

        <div className="max-w-7xl mx-auto px-6">

            <p className="text-blue-400 font-medium mb-3">
            MY TOOLKIT
            </p>

            <h2 className="text-4xl font-bold mb-12">
            Technologies I Work With
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">

            {skills.map((skill) => (

                <div
                key={skill}
                className="border border-slate-800 rounded-xl p-5 text-center text-slate-300 hover:border-blue-500 hover:text-blue-400 transition"
                >
                {skill}
                </div>

            ))}

            </div>

        </div>

        </section>
    )
    }

    export default Skills