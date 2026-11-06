import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Moon, Sun, PawPrint } from "lucide-react";
import { Button } from "./ui/button";

export default function Layout() {
  const [dark, setDark] = useState(false);
  useEffect(() => { setDark(localStorage.getItem("white-canid-theme") === "dark"); }, []);
  useEffect(() => { document.documentElement.classList.toggle("dark", dark); }, [dark]);
  const toggleTheme = () => { const next = !dark; setDark(next); localStorage.setItem("white-canid-theme", next ? "dark" : "light"); };
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
    <header className="border-b border-border/70">
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
    <Link to="/" className="flex items-center gap-3 text-foreground" aria-label="white_canid home"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground"><PawPrint className="h-5 w-5" /></span><span className="font-heading text-lg font-semibold tracking-tight">white_canid</span></Link>
    <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label={dark ? "Switch to light theme" : "Switch to dark theme"} className="text-muted-foreground rounded-full">{dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}</Button>
    </div>
    </header>
    <main className="max-w-7xl mx-auto w-full min-w-0 px-4 sm:px-6 lg:px-8 py-6 lg:py-8 flex-1"><Outlet /></main>
    <footer className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8"><div className="h-px bg-border mb-6" /><p className="text-xs text-muted-foreground">white_canid</p></footer>
    </div>
  );
}

export { Layout };
