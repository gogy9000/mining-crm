import { ThemeToggler } from "./theme-toggler";

export function AppBar() {
    return (
        <header className='sticky w-full flex justify-between px-10 py-1 top-0 z-50 border-b border-border/90 bg-background/10 backdrop-blur supports-[backdrop-filter]:bg-background/10'>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">CRM</h1>
            <ThemeToggler />
        </header>
    )
}