import { Badge } from "@/components/ui/badge";

const skills = {
    frontend: [
        { name: "React", level: "Expert" },
        { name: "Next.js", level: "Expert" },
        { name: "TypeScript", level: "Advanced" },
        { name: "Tailwind CSS", level: "Expert" },
        { name: "Vue.js", level: "Intermediate" },
    ],
    backend: [
        { name: "Node.js", level: "Advanced" },
        { name: "Python", level: "Intermediate" },
        { name: "PostgreSQL", level: "Advanced" },
        { name: "MongoDB", level: "Intermediate" },
    ],
    tools: [
        { name: "Git", level: "Expert" },
        { name: "Docker", level: "Intermediate" },
        { name: "AWS", level: "Intermediate" },
        { name: "Figma", level: "Intermediate" },
    ],
};

const levelColors = {
    Expert: "bg-green-500/10 text-green-500 border-green-500/20",
    Advanced: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    Intermediate: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
};

export function SkillsSection() {
    return (
        <div id="skills" className="min-h-screen flex flex-col gap-16 items-center pt-48">
            <section className="space-y-8 px-8 max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-bold tracking-tight">Skills & Stack</h1>
                <p className="text-xl text-muted-foreground">
                    Technologies and tools I work with
                </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 max-w-4xl mx-auto w-full">
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category} className="flex flex-col gap-4">
                        <h2 className="text-2xl font-semibold capitalize">{category}</h2>
                        <div className="flex flex-col gap-2">
                            {items.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="flex items-center justify-between p-3 rounded-lg border bg-card"
                                >
                                    <span className="font-medium">{skill.name}</span>
                                    <Badge
                                        variant="outline"
                                        className={levelColors[skill.level as keyof typeof levelColors]}
                                    >
                                        {skill.level}
                                    </Badge>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}
