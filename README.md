<h1 align="center">
  next-ts
</h1>
<p align="center">
  A Production-Ready and Scalable Next.js Template Starter. Stop wasting time setting up your <i>next</i> big project, with next-ts it's all ready to go!
</p>

## 💫 Features
- 🌐 Next.js: With App router and always up to date.
- 💨 Tailwind CSS v4: Style fast and efficiently with the latest version of Tailwind CSS.
- 🐳 Docker: Docker compose and Dockerfile, for scalable and easy deployment.
- 🐶 Husky: Automatically lint your commit messages, code, and run tests upon committing or pushing.
- 🔹 Biome: Fast linting and formatter tool (~35x faster than Prettier)
- ➿ Conventional Commits: Define commit messages convention in your project
- 💡 SEO: Metadata, Microdata, Sitemap, robots.txt and Manifest. Having an online presence has never been easier
- 📊 Google Analytics: Natively integrated with Next.js
- 🔨 Jest: Last but not least, make Test Driven Development your standard 

## 📕Table of contents

- [Getting started](#getting-started)
- [Development Tools](#development-tools)
    - [🐶 Husky](#-husky)
    - [🔹 Biome](#-biome)
    - [➿ Conventional Commits](#-conventional-commits)
    - [🐳 Docker](#-docker)
- [SEO & Analytics](#seo--analytics)
    - [Sitemap, robots.txt and Manifest](#sitemap-robotstxt-and-manifest)
    - [Metadata & Microdata](#metadata--microdata)
    - [Google Analytics](#google-analytics)
- [Opengraph/Twitter/Apple image](#opengraphtwitterapple-image)
- [Framer Motion](#framer-motion)
- [Resources](#resources)
  - [Useful](#useful)
	- [UI Kit](#ui-kit)

## Getting started

### 1. Installation


```bash
npx create-next-app@latest -e https://github.com/RossiFire/next-seo-starter
```
Then:
```bash
cd next-ts
npm i
```

### 2. Environment file
Rename the _.env.example_ to _.env_, it looks like this:
```bash
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
GOOGLE_ANALYTICS_TAG="GA-example-code"
```

Now you're ready to go! start the server with:
```bash
npm run dev
```

## Development Tools

### 🐶 Husky

Husky is configured to run Git hooks. The `pre-commit` hook runs lint-staged, and the `commit-msg` hook validates commit messages with commitlint.

Hooks are located in `.husky/`:
- `pre-commit`: Runs `lint-staged` to format and lint staged files
- `commit-msg`: Validates commit messages using commitlint

To customize hooks, edit the files in `.husky/`. To disable Husky, remove the `.husky` directory and uninstall the package.

Here's the [Official Husky documentation](https://typicode.github.io/husky).

### 🔹 Biome

Biome handles linting and formatting. Configuration is in `biome.json`.

**Usage:**
- Install the [Biome plugin](https://biomejs.dev/guides/editors/first-party-extensions/) in your favourite editor
- `npm run lint` - Check for issues
- `npm run format` - Format files

**Customization:**
Edit `biome.json` to adjust rules, formatting options, or file patterns. The default config includes Next.js-specific rules and accessibility checks.
For further rules and options, I recommend you to check the [Official Biome documentation](https://biomejs.dev/guides/configure-biome).

**Lint-staged integration:**
Configured in `package.json` to run Biome on staged files before commits. Modify the `lint-staged` field to change file patterns or add additional checks.

### ➿ Conventional Commits

Commitlint enforces the [Conventional Commits](https://www.conventionalcommits.org/) specification. Configuration is in `commitlint.config.ts`.

**Allowed types:**
- `feat`, `fix`, `test`, `ref`, `refactor`, `revert`, `security`, `build`, `ci`, `docs`, `perf`

**Customization:**
Edit `commitlint.config.ts` to:
- Add/remove commit types in the `type-enum` rule
- Modify header length limit
- Add custom rules

Example commit: `feat(login-page): add SSO authentication`

## 🐳 Docker
The project includes a _docker-compose.prod.yml_. This file is intented to be the one used for deployments.
It includes a base configuration. Of course you can change it to integrate additional applications.

## SEO & Analytics

### Sitemap, robots.txt and Manifest

**Sitemap** (`app/sitemap.ts`): Generates XML sitemap for search engines. Add static routes to `staticRoutes` array. For dynamic routes, fetch data and map to sitemap entries:

```typescript
const dynamicRoutes = posts.map(post => ({
  url: `${baseUrl}/post/${post.slug}`,
  lastModified: post.updatedAt,
  changeFrequency: "weekly" as const,
  priority: 0.8
}));
```

**Robots** (`app/robots.ts`): Controls crawler access. Modify `rules` array to allow/disallow paths. Currently blocks GPTBot and CCBot - remove those rules if needed.

**Manifest** (`app/manifest.ts`): PWA configuration. Update `name`, `short_name`, `description`, colors, and icon paths for your app.

### Metadata & Microdata

**Metadata** is configured in `app/layout.tsx` via the `metaData` export. The `title.template` property creates a prefix for child pages (e.g., "NEXT-TS - Contact").

For dynamic metadata, export `generateMetadata` in page/layout files:

```typescript
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const data = await fetchData(params.id);
  return {
    title: data.title,
    description: data.description,
  };
}
```

**Microdata** uses Schema.org vocabulary. The `microdata()` utility in `lib/microdata.ts` creates typed schema objects. Use `MicrodataScript` component to inject JSON-LD:

```typescript
const schema = microdata(
  "WebSite", 
  { 
    name: "My Site", 
    url: baseUrl 
  }
);

<MicrodataScript id="site-schema" microdata={schema} />
```

See [schema.org](https://schema.org/docs/gs.html) for properties.

### Google Analytics

Implemented using `@next/third-parties/google`. The `GoogleAnalytics` component is conditionally rendered in `app/layout.tsx` when `GOOGLE_ANALYTICS_TAG` is set.

**Setup:**
1. Add `GOOGLE_ANALYTICS_TAG` to `.env` with your GA4 measurement ID
2. Component automatically loads when env var is present

**Removal:**
Uninstall `@next/third-parties` and remove the component from `app/layout.tsx`.

## Opengraph/Twitter/Apple image

Static image files in `app/`:
- `opengraph-image.png` - 1.91:1 ratio (1200×630px recommended, <8MB)
- `twitter-image.png` - 2:1 ratio (<5MB)
- `apple-icon.png` - 1:1 ratio (180×180px recommended)

Replace these files with your images (keep filenames, format can change). Also update `favicon.ico`.

For dynamic image generation, use Next.js ImageResponse API. See [this guide](https://cruip.com/generate-dynamic-open-graph-and-twitter-images-in-next-js/).

## Framer Motion

Animation library included. No configuration required. Import and use components:

```typescript
import { motion } from "framer-motion";
```

Remove from `package.json` if not needed.

## Resources

### Useful

- Next documentation about metadata and more [**here**](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/manifest)

- "Generate Dynamic Open Graph and Twitter Images in Next.js" article [**here**](https://cruip.com/generate-dynamic-open-graph-and-twitter-images-in-next-js/)

- To check your Opengraph and Twitter images i recommend you [www.opengraph.xyz](https://www.opengraph.xyz/)

- To check your website SEO i recommend you [www.seotesteronline.com](https://www.seotesteronline.com/)

  
### UI Kit

If you're looking for beautiful UI Kit for your website, i reccomend you these websites:

- [**shadcn/ui**](https://ui.shadcn.com/)

- [**Reactbits**](https://www.reactbits.dev)

- [**Acernity UI**](https://ui.aceternity.com)

- [**CuiCui**](https://cuicui.day/)

- [**Origin UI**](https://originui.com/)

- [**Radix UI**](https://www.radix-ui.com/)

- [**Hover.dev**](https://www.hover.dev)
