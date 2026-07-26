    import { projects } from "../data/projects"

    function Projects() {
    return (
        <section
        id="projects"
        className="bg-slate-900 text-white py-24"
        >

        <div className="max-w-7xl mx-auto px-6">

            <p className="text-blue-400 font-medium mb-3">
            SELECTED WORK
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Projects I've Built
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

            {projects.map((project) => (

                <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition"
                >

                <h3 className="text-2xl font-semibold mb-4">
                    {project.title}
                </h3>

                <p className="text-slate-400 leading-relaxed mb-6">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2">

                    {project.technologies.map((technology) => (

                    <span
                        key={technology}
                        className="text-sm bg-slate-800 text-blue-400 px-3 py-1 rounded-full"
                    >
                        {technology}
                    </span>

                    ))}

                </div>

                </a>

            ))}

            </div>

        </div>

        </section>
    )
    }

    export default Projects