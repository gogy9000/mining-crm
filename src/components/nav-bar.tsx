'use client'
import { ReactNode, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ArrowLeft, HomeIcon } from "lucide-react";
import { cn } from "@/lib/utils";
interface Props {
    outsideContent?: ReactNode
}
export function NavBar({ outsideContent }: Props) {
    const [colapse, setColapse] = useState(false)
    const toggleColapse = () => {
        setColapse(!colapse)
    }
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setColapse(true)
            } else {
                setColapse(false)
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }

    }, [])
    return (
        <div
            className={cn(" pl-2 flex-1 items-start grid grid-cols-1  sm:gap-6 sm:grid-cols-[240px_minmax(0,1fr)] gap-10 transition-all",
                colapse && "sm:grid-cols-[50px_minmax(0,1fr)]"
            )}>
            <div className="border-r border-border/90 mt-3 flex-col gap-3 fixed top-16 z-30 hidden h-[calc(100vh-3.5rem)] w-full sm:sticky sm:flex">
                {<Button
                    className="md:hidden"
                    onClick={toggleColapse}
                    variant={'outline'}
                    size={'icon'}
                >
                    <ArrowLeft />
                </Button>}
                <span className="items-center  overflow-hidden cursor-pointer gap-3 flex">
                    <HomeIcon className="m-2  shrink-0" />
                    <span className={cn(" leading-7 font-semibold sp", colapse && "hidden")}
                    >
                        КМУ
                    </span>

                </span>



            </div>
            <div>
                {outsideContent}
            </div>

        </div>
    )
}