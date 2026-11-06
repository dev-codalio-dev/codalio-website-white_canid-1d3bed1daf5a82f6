import { ArrowDown, PawPrint } from "lucide-react";
import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

function LandingSection0() {
  return (
    <section className="grid items-center gap-12 lg:grid-cols-2 min-h-[50vh] py-12 lg:py-16">
      <div className="flex flex-col items-start gap-6">
        <p className="text-xs font-semibold tracking-[0.22em] text-primary">WHITE CANID</p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.08]">A fresh start.</h1>
        <p className="text-lg text-muted-foreground">Welcome to white_canid.</p>
        <Button asChild size="lg" className="mt-2 gap-3 rounded-full px-6 bg-primary text-primary-foreground"><a href="#about">Explore the page<ArrowDown className="h-4 w-4" /></a></Button>
      </div>
      <div aria-hidden="true" className="relative flex items-center justify-center aspect-square w-full max-w-sm mx-auto">
        <div className="absolute inset-0 rounded-full border border-primary/15" />
        <div className="absolute inset-5 rounded-full border border-primary/20" />
        <div className="absolute inset-10 rounded-full bg-secondary flex items-center justify-center"><div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-primary flex items-center justify-center text-primary-foreground"><PawPrint className="w-20 h-20 sm:w-24 sm:h-24" strokeWidth={1.2} /></div></div>
      </div>
    </section>
  );
}

function LandingSection1() {
  return (
    <section id="about" className="scroll-mt-24"><Card className="rounded-xl border-border bg-card text-card-foreground shadow-none gap-0 py-0"><CardHeader className="p-6 sm:p-10 pb-0 sm:pb-0 max-w-2xl"><CardTitle className="text-2xl sm:text-3xl font-semibold tracking-tight">An open canvas.</CardTitle></CardHeader><CardContent className="p-6 sm:p-10 pt-3 sm:pt-3 max-w-2xl"><p className="text-base leading-relaxed text-muted-foreground">white_canid is taking shape. This is the starting point for what comes next.</p></CardContent></Card></section>
  );
}

export default function Landing() {
  return (
    <div className="w-full min-w-0 overflow-x-hidden">
      <div className="flex flex-col gap-12 lg:gap-16 w-full min-w-0">
        <LandingSection0 />
        <LandingSection1 />
      </div>
    </div>
  );
}
