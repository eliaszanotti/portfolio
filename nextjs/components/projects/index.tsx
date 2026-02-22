import Link from "next/link";

import { Section } from "@/components/layout/section";
import { SubSection } from "@/components/layout/sub-section";
import { SectionTitle } from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "Portfolio Website",
        description: "This portfolio built with Next.js and Payload CMS",
        tags: ["Next.js", "TypeScript", "Tailwind"],
        github: "https://github.com/eliaszanotti/portfolio",
        demo: "https://eliaszanotti.dev",
    },
    {
        title: "E-commerce Platform",
        description: "Full-stack e-commerce solution with payment integration",
        tags: ["React", "Node.js", "PostgreSQL"],
        github: "https://github.com/eliaszanotti/ecommerce",
        demo: null,
    },
    {
        title: "Task Management App",
        description: "Collaborative task manager with real-time updates",
        tags: ["Vue.js", "Firebase", "Tailwind"],
        github: "https://github.com/eliaszanotti/task-manager",
        demo: "https://tasks.eliaszanotti.dev",
    },
    {
        title: "Weather Dashboard",
        description: "Weather app with forecasts and historical data",
        tags: ["Next.js", "API", "Chart.js"],
        github: "https://github.com/eliaszanotti/weather-app",
        demo: null,
    },
];

export function ProjectsSection() {
    return (
        <Section id="projects">
            <SubSection className="space-y-8 px-8 max-w-5xl mx-auto text-center">
                <SectionTitle>Projects</SectionTitle>
                <p className="text-xl text-muted-foreground">
                    A selection of my recent work
                </p>
            </SubSection>

            <SubSection className="grid grid-cols-1 md:grid-cols-2 gap-6 px-8 max-w-5xl mx-auto w-full">
                {projects.map((project) => (
                    <Card key={project.title} className="flex flex-col">
                        <CardHeader>
                            <CardTitle>{project.title}</CardTitle>
                            <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <Badge key={tag} variant="secondary">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="gap-2">
                            <Button
                                variant="outline"
                                size="sm"
                                render={
                                    <Link href={project.github} target="_blank" rel="noopener noreferrer" />
                                }
                            >
                                <Github className="size-4" />
                                Code
                            </Button>
                            {project.demo && (
                                <Button
                                    size="sm"
                                    render={
                                        <Link href={project.demo} target="_blank" rel="noopener noreferrer" />
                                    }
                                >
                                    <ExternalLink className="size-4" />
                                    Demo
                                </Button>
                            )}
                        </CardFooter>
                    </Card>
                ))}
            </SubSection>
        </Section>
    );
}
