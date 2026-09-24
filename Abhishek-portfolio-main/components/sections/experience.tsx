"use client";

import { useLanguage } from "@/providers/language-provider";
import { BlurReveal } from "@/components/effects/blur-reveal";
import type { ExperienceItem } from "@/types/experience";

function getPeriodYearSuffix(period: string): string {
    if (/present/i.test(period)) {
        return String(new Date().getFullYear()).slice(-2);
    }
    const years = period.match(/\d{4}/g);
    if (years && years.length > 0) {
        return years[years.length - 1].slice(-2);
    }
    return "";
}

export default function Experience() {
    const { content, dict } = useLanguage();

    const experience: ExperienceItem[] = content.experience || [];

    return (
        <section className="w-full container-void bg-background text-foreground overflow-hidden relative">
            <div className="container mx-auto px-container">

                <div className="flex flex-col gap-4 mb-16 lg:mb-24 max-w-3xl">
                    <BlurReveal>
                        <span className="title-counter">
                            [002]
                        </span>
                    </BlurReveal>

                    <BlurReveal>
                        <h2 className="title">
                            {dict.title.experience}
                        </h2>
                    </BlurReveal>

                    <BlurReveal>
                        <p className="text-lg mt-3 italic font-medium tracking-tight text-foreground/60">
                            {dict.experienceIntro}
                        </p>
                    </BlurReveal>
                </div>

                {experience.length === 0 ? (
                    <BlurReveal>
                        <div className="border-t border-border/50 py-16 text-muted-foreground text-lg">
                            Experience timeline coming soon.
                        </div>
                    </BlurReveal>
                ) : (
                    <div className="flex flex-col border-t border-border/50">
                        {experience.map((item, index) => (
                            <BlurReveal key={item.id}>
                                <div className="group relative flex flex-col md:flex-row gap-6 md:gap-12 py-12 md:py-16 border-b border-border/50 transition-all duration-700 hover:px-4 md:hover:px-8">

                                    <div className="flex md:flex-col items-baseline md:items-start gap-3 md:gap-2 md:w-32 shrink-0">
                                        <span className="text-sm font-mono tracking-widest text-muted-foreground">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <span className="text-sm font-mono tracking-widest text-muted-foreground uppercase">
                                            {item.period}
                                        </span>
                                    </div>

                                    <div className="flex-1 flex flex-col gap-4">
                                        <div className="flex flex-col gap-1">
                                            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
                                                {item.role}
                                            </h3>
                                            <span className="text-base md:text-lg text-muted-foreground">
                                                {item.company}
                                                {item.location ? ` — ${item.location}` : ""}
                                            </span>
                                        </div>

                                        <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-2xl">
                                            {item.description}
                                        </p>

                                        {item.tags && item.tags.length > 0 && (
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {item.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="text-xs font-mono tracking-wider uppercase text-muted-foreground border border-border/50 rounded-full px-3 py-1"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    <div className="hidden xl:block text-7xl font-bold text-foreground/20 select-none absolute right-0 top-1/2 -translate-y-1/2">
                                        {getPeriodYearSuffix(item.period)}
                                    </div>

                                </div>
                            </BlurReveal>
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
}
