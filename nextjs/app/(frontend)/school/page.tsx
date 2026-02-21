import { GraduationCap } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const education = [
    {
        school: "EPITECH",
        degree: "Master's in Computer Science",
        period: "2022 - 2024",
        description: "Specialization in web development and software engineering",
        location: "Paris, France",
    },
    {
        school: "EPITECH",
        degree: "Bachelor's in Computer Science",
        period: "2019 - 2022",
        description: "Fundamentals of programming and algorithms",
        location: "Paris, France",
    },
];

const certifications = [
    { name: "AWS Certified Developer", year: "2023" },
    { name: "React Advanced Patterns", year: "2023" },
    { name: "TypeScript Masterclass", year: "2022" },
];

export default function SchoolPage() {
    return (
        <div className="flex flex-col items-center gap-12 px-8 max-w-3xl mx-auto">
            <section className="flex flex-col items-center gap-4 text-center">
                <h1 className="text-5xl font-bold tracking-tight">Education</h1>
                <p className="text-xl text-muted-foreground">My academic journey</p>
            </section>

            <section className="flex flex-col gap-6 w-full">
                {education.map((edu) => (
                    <Card key={edu.school}>
                        <CardHeader>
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                                        <GraduationCap className="size-6 text-primary" />
                                    </div>
                                    <div>
                                        <CardTitle>{edu.school}</CardTitle>
                                        <CardDescription>{edu.degree}</CardDescription>
                                    </div>
                                </div>
                                <Badge variant="outline">{edu.period}</Badge>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{edu.description}</p>
                            <p className="text-sm text-muted-foreground mt-2">{edu.location}</p>
                        </CardContent>
                    </Card>
                ))}
            </section>

            <section className="w-full">
                <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
                <div className="flex flex-wrap gap-2">
                    {certifications.map((cert) => (
                        <Badge key={cert.name} variant="secondary" className="text-sm px-3 py-1">
                            {cert.name} ({cert.year})
                        </Badge>
                    ))}
                </div>
            </section>
        </div>
    );
}
