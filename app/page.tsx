import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Home() {
	return (
		<div className="h-screen grid grid-cols-12 gap-4">
			<div className="col-span-5 grid place-items-center">
				<div className="flex flex-col items-start justify-center gap-4">
					<h1
						className={cn(
							"text-base md:text-2xl lg:text-5xl tracking-widest text-gradient font-bbh-bartle"
						)}
					>
						NextJs SEO <br /> Starter
					</h1>
					<h2 className={cn("text-base md:text-xl tracking-widest font-dm-sans")}>
						Forget about the setup, and focus on coding. <br /> Get started in{" "}
						<strong>seconds</strong>.
					</h2>
					<Link
						href="https://github.com/RossiFire/next-seo-starter"
						className={cn(
							"text-primary text-xl font-medium hover:text-secondary transition-all duration-300 underline underline-offset-2 hover:underline-offset-4 font-dm-sans mt-12"
						)}
					>
						Get Started
					</Link>
				</div>
			</div>
			<div className="col-span-7">
				<ul
					className={cn(
						"text-sm md:text-base tracking-widest my-12 mx-auto px-4 md:px-0 font-dm-sans"
					)}
				>
					<li>
						<span className="text-green-700">&#10003;</span> Husky for shared Git hooks across the
						team.
					</li>
					<li>
						<span className="text-green-700">&#10003;</span> Lint-staged for running linting and
						formatting before committing.
					</li>
					<li>
						<span className="text-green-700">&#10003;</span> Conventinal commits to enforce commit
						messages convention.
					</li>
					<li>
						<span className="text-green-700">&#10003;</span> Biome for linting and formatting.
					</li>
					<li>
						<span className="text-green-700">&#10003;</span> SEO-Oriented with metadata and
						microdata.
					</li>
					<li>
						<span className="text-green-700">&#10003;</span> Sitemap, robots.txt and Manifest.
					</li>
					<li>
						<span className="text-green-700">&#10003;</span> Google Analytics natively integrated
						with Next.js.
					</li>
					<li>
						<span className="text-green-700">&#10003;</span> Tailwindcss for styling.
					</li>
					<li>
						<span className="text-green-700">&#10003;</span> Typescript; of course.
					</li>
					<li>
						<span className="text-green-700">&#10003;</span> Framer Motion for easy and stunning
						animations.
					</li>
					<li>
						<span className="text-green-700">&#10003;</span> Jest suite to TDD your code.
					</li>
				</ul>
			</div>
		</div>
	);
}
