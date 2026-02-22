import { Section } from "@/components/layout/section";
import { SubSection } from "@/components/layout/sub-section";
import { SectionTitle } from "@/components/section-title";
import { User } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function AboutSection() {
    return (
        <Section id="about">
            <SubSection className="space-y-8 px-8 max-w-3xl mx-auto text-center">
                <SectionTitle>About Me</SectionTitle>
                <p className="text-xl text-muted-foreground">Get to know me better</p>
            </SubSection>

            <SubSection className="px-8 max-w-3xl mx-auto w-full">
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                            <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 shrink-0">
                                <User className="size-6 text-primary" />
                            </div>
                            <div className="flex flex-col gap-4">
                                <div>
                                    <h2 className="text-xl font-semibold">Who I Am</h2>
                                    <p className="text-muted-foreground mt-2">
                                        Hey! I'm Elias, a passionate full-stack developer based in France.
                                        I love building modern web applications and solving complex problems
                                        with clean, efficient code.
                                    </p>
                                </div>
                                <Separator />
                                <div>
                                    <h2 className="text-xl font-semibold">What I Do</h2>
                                    <p className="text-muted-foreground mt-2">
                                        I specialize in full-stack development using React, Next.js, and Node.js.
                                        I enjoy working on both the frontend and backend, creating seamless
                                        user experiences backed by robust APIs.
                                    </p>
                                </div>
                                <Separator />
                                <div>
                                    <h2 className="text-xl font-semibold">When I'm Not Coding</h2>
                                    <p className="text-muted-foreground mt-2">
                                        When I'm away from my keyboard, you can find me exploring new technologies,
                                        contributing to open-source projects, or enjoying the outdoors. I believe
                                        in continuous learning and staying curious.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </SubSection>
        </Section>
    );
}
