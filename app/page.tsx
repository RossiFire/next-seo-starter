import { cn } from "@/lib/utils";
import { cherryBombOneFont, dmSansFont } from "@/lib/fonts";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <h1 className={cn("text-7xl tracking-widest", cherryBombOneFont)}>NESS</h1>
      <h2 className={cn("text-xl tracking-widest", dmSansFont)}>Next.Js Seo Friendly Starter Template</h2>
    </div>
  )
}
