import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Home() {
	return (
		<div className="h-screen grid grid-cols-12 gap-4">
			<div className="col-span-5 grid place-items-center">
				<div className="flex flex-col items-start justify-center gap-4">
					<h1
						className={cn(
							"text-base md:text-2xl lg:text-5xl tracking-widest text-transparent bg-clip-text bg-linear-to-r from-primary via-gray-950 to-secondary font-bbh-bartle"
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
			<div className="col-span-7 grid place-items-center">
				<div className="flex flex-col items-start justify-center gap-6">
					<h2 className="text-transparent bg-clip-text bg-linear-to-r from-primary via-gray-950 to-secondary font-bbh-bartle text-xl">Features</h2>
					<div className="flex flex-col gap-2">
						<span className="text-sm font-dm-sans font-medium text-gray-600">Core</span>
						<ul className={cn("text-sm md:text-base tracking-widest font-dm-sans")}>
							<li>
								<span className="text-green-700">&#10003;</span> <strong>Next.js</strong> always up to date.
							</li>
							<li>
								<span className="text-green-700">&#10003;</span> <strong>Tailwind CSS</strong> for styling.
							</li>
							<li>
								<span className="text-green-700">&#10003;</span> <strong>Docker</strong> setup, for easy deployment.
							</li>
							<li>
								<span className="text-green-700">&#10003;</span> <strong>Framer Motion</strong> for easy and stunning
								animations.
							</li>
							<li>
								<span className="text-green-700">&#10003;</span> <strong>Jest</strong> suite to TDD your code.
							</li>
						</ul>
					</div>
					<div className="flex flex-col gap-2">
						<span className="text-sm font-dm-sans font-medium text-gray-600">Workflow</span>
						<ul className={cn("text-sm md:text-base tracking-widest font-dm-sans")}>
							<li>
								<span className="text-green-700">&#10003;</span> <strong>Husky</strong> for shared Git hooks across the
								team.
							</li>
							<li>
								<span className="text-green-700">&#10003;</span> <strong>Lint-staged</strong> for linting and
								formatting committed files.
							</li>
							<li>
								<span className="text-green-700">&#10003;</span> <strong>Conventional commits</strong> to enforce commit
								messages convention.
							</li>
							<li>
								<span className="text-green-700">&#10003;</span> <strong>Biome</strong> for linting and formatting. <i className="text-xs">(~35x faster than Prettier)</i>
							</li>
						</ul>
					</div>
					<div className="flex flex-col gap-2">
						<span className="text-sm font-dm-sans font-medium text-gray-600">SEO & Analytics</span>
						<ul className={cn("text-sm md:text-base tracking-widest font-dm-sans")}>
							<li>
								<span className="text-green-700">&#10003;</span> <strong>Metadata</strong> and <strong>Microdata</strong> utilities for SEO.
							</li>
							<li>
								<span className="text-green-700">&#10003;</span> <strong>Sitemap.xml</strong>, <strong>robots.txt</strong> and <strong>Manifest.xml</strong>.
							</li>
							<li>
								<span className="text-green-700">&#10003;</span> <strong>Google Analytics</strong> natively integrated with Next.js.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
