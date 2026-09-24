"use client";

import { useMemo } from "react";
import { useLanguage } from "@/providers/language-provider";
import { BlurReveal } from "@/components/effects/blur-reveal";
import type { ProjectItem } from "@/types/project";

function formatCr(value: number): string {
    return `\u20b9${value.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} Cr`;
}

export default function Projects() {
    const { content, dict } = useLanguage();

    const projects: ProjectItem[] = content.projects || [];

    const totals = useMemo(() => {
        return projects.reduce((acc, p) => acc + (p.valueCr || 0), 0);
    }, [projects]);

    return (
        <section className="w-full container-void bg-background text-foreground overflow-hidden relative">
            <div className="container mx-auto px-container">

                <div className="flex flex-col gap-4 mb-12 lg:mb-16 max-w-3xl">
                    <BlurReveal>
                        <span className="title-counter">
                            [003]
                        </span>
                    </BlurReveal>

                    <BlurReveal>
                        <h2 className="title">
                            {dict.title.projects}
                        </h2>
                    </BlurReveal>

                    <BlurReveal>
                        <p className="text-lg mt-3 italic font-medium tracking-tight text-foreground/60">
                            {dict.projectsIntro}
                        </p>
                    </BlurReveal>
                </div>

                {projects.length === 0 ? (
                    <BlurReveal>
                        <div className="border-t border-border/50 py-16 text-muted-foreground text-lg">
                            Projects coming soon.
                        </div>
                    </BlurReveal>
                ) : (
                    <>
                        <BlurReveal>
                            <div className="grid grid-cols-2 gap-4 sm:gap-6 border-t border-b border-border/50 py-8 lg:py-10 mb-12 lg:mb-16 max-w-xl">
                                {/* <div className="flex flex-col gap-1">
                                    <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter text-foreground">
                                        {formatCr(totals)}
                                    </span>
                                    <span className="text-xs sm:text-sm font-mono tracking-widest uppercase text-muted-foreground">
                                        Cumulative Project Value
                                    </span>
                                </div> */}
                                <div className="flex flex-col gap-1">
                                    <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter text-foreground">
                                        {projects.length}
                                    </span>
                                    <span className="text-xs sm:text-sm font-mono tracking-widest uppercase text-muted-foreground">
                                        Projects Handled
                                    </span>
                                </div>
                            </div>
                        </BlurReveal>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                            {projects.map((item) => (
                                <BlurReveal key={item.id}>
                                    <div className="group flex flex-col gap-6 h-full rounded-3xl border border-border/50 p-6 lg:p-8 transition-all duration-500 hover:border-foreground/30 hover:-translate-y-1">

                                        <div className="flex items-center justify-between gap-3 text-xs font-mono tracking-widest uppercase text-muted-foreground">
                                            <span>{item.contractType}</span>
                                            <span>{item.period}</span>
                                        </div>

                                        <h3 className="text-xl lg:text-2xl font-semibold tracking-tight text-foreground leading-snug min-h-[3.5rem]">
                                            {item.title}
                                        </h3>

                                        <div className="mt-auto flex items-baseline justify-between gap-3 pt-4 border-t border-border/50">
                                            <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground">
                                                Project Value
                                            </span>
                                            <span className="text-xl lg:text-2xl font-bold tracking-tight text-foreground">
                                                {formatCr(item.valueCr)}
                                            </span>
                                        </div>

                                    </div>
                                </BlurReveal>
                            ))}
                        </div>
                    </>
                )}

            </div>
        </section>
    );
}
