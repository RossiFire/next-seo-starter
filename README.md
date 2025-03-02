
![GitHub repo size](https://img.shields.io/github/repo-size/rossifire/next-seo-starter) ![GitHub Repo stars](https://img.shields.io/github/stars/rossifire/next-seo-starter)

  
  
  

## Next SEO Starter Template

 
__Now supporting Next.js 15, React 19 and the brand new Tailwindcss 4 🎆🎆__

  

Lightweight starter project to build multi page SEO-Friendly Websites using Next.js, Typescript and Tailwindcss. Next.js is used with App Router.

The goal of this project is both having a ready-to-use template, but also providing you resources and articles to make your development with Nextjs easier and faster.

  

Feel free to contribute with pull requests.

If you're still searching for Next 14 and React 18 starter, you can find it ![here](https://github.com/RossiFire/next-seo-starter/tree/next14-react18)

  

## 🚀 Key Features

- Metadata stuctured

- Opengraph/Twitter/Apple image

- Sitemap, robots.txt ans Manifest

- Tailwindcss already in place

- Framer Motion for beautiful animations already installed

  
  

## 📕Table of contents

- [Getting started](#getting-started)

- [Metadata setup](#metadata-setup)

- [Opengraph/Twitter/Apple image](#opengraphtwitterapple-image)

- [Tailwind configuration](#tailwind-configuration)

- [Framer Motion](#framer-motion)

- [Sitemap, robots.txt and Manifest](#sitemap---robotstxt---manifest)

- [Resources](#resources)

	- [UI Kit](#ui-kit)

  

## Getting started

To get ready click "use this template" button on github to create a new repository, clone it on you pc, install the dependencies and than run the project

```bash
cd  next-seo-starter
npm  i
npm  run  dev
```

Also, add an _.env_ file, setting at least **NEXT_PUBLIC_BASE_URL="http://localhost:3000"** since this variable is already used in some files

  

Now you're ready to go! 🎆🎆

  

## Metadata setup

The app layout contains root metadata, used across the application

  

```typescript
// app/layout.tsx
import  type { Metadata } from  'next'

export  const  metadata: Metadata = {
    metadataBase:  new  URL(process.env.NEXT_PUBLIC_BASE_URL!),
    title: {
        default:  'My Website',
        template:  'My Website - %s'
    },
    description:  '',
    keywords: [],
    twitter:{
    card:  'summary_large_image'
    }
}

```

I suggest you to edit title, description and keywords, based on your needs. The _title_ is an object containing the template prefix inherited by sub-routes. So than in the other pages you can just set the relavite title

  

```typescript
// e.g. app/(routes)/contact/layout.tsx

export  const  metadata: Metadata = {
    title:  'Contact'  // Final result: My Website - Contact
}

```

If you need to generate dynamic metadata for a page, you have to add this function in its layout file

```typescript
import { Metadata, ResolvingMetadata } from  "next";

export  async  function  generateMetadata( { params }: PageProps , parent: ResolvingMetadata): Promise<Metadata> {

const  product = await yourRequestToServer(params.id);
    return {
        title:  product.name,
        description:  product.description,
        openGraph:{
            images:[
                'product.image.url'
            ]
        },
        twitter:{
            images:[
                'product.image.url'
            ]
        }
    }
}

```

Instead if you need a more complex or custom og/twitter image generation, i recommend you [this article](https://cruip.com/generate-dynamic-open-graph-and-twitter-images-in-next-js/)

  

## Opengraph/Twitter/Apple image

The project already includes placeholders for these images. If you need static ones, just replace them with your images **without changing the file names** (you can still change the format). If you need dynamic images, follow the metadata setup as explained above. Here some recommendation about the images:

  

-  **Opengraph**: Aspect ratio of 1.91:1 (usually 1200 × 630 px) - less than 8MB

-  **Twitter**: Aspect ratio of 2:1 - less than 5MB

-  **Apple**: Aspect ratio of 1:1 (usually 180 × 180 px)

  

Remember to change the _favicon.ico_ as well!

  

## Tailwind configuration

The project is delivered with tailwind already in place.

  

**If you want to remove it**, Follow these step.

  

Remove dependencies from package.json

```json
"tailwindcss",
"tailwindcss-animate",
"tailwind-merge",
"@tailwindcss/postcss",
"postcss",
"clsx"
```

than delete these files, since they'll not be needed anymore

```bash
postcss.config.js
lib/utils.ts
```

  

finally remove these lines of code from _globals.css_

```css
@import  'tailwindcss';
@plugin 'tailwindcss-animate';
@variant dark (&:is(.dark *));
```

  

and you're done!

  

## Framer Motion

Library to build awesome website animations. You can find additional information on their [**website**](https://www.framer.com/motion/). Since this library doesn't need any type of configuration, if you don't need it just remove it from package.json

  

## Sitemap - Robots.txt - Manifest

The _robot.ts_ file doesn't need changes. The _sitemap.ts_ instead needs to be edited with your routes. here's an example

```typescript
// sitemap.ts

import { MetadataRoute } from  "next";

export  default  async  function  sitemap(): Promise<MetadataRoute.Sitemap> {
    const  staticRoutes = [
        { url:  `${process.env.NEXT_PUBLIC_BASE_URL}`, lastModified:  new  Date(), priority:  1 },
        { url:  `${process.env.NEXT_PUBLIC_BASE_URL}/contact`, lastModified:  new  Date() }, // Example route
        { url:  `${process.env.NEXT_PUBLIC_BASE_URL}/about`, lastModified:  new  Date() }, // Example route
    ]

    const  myArticles = await  getAllDataFromServer();

    const  dynamicRoutes: MetadataRoute.Sitemap = myArticles.map(article  => ({ url :  `${process.env.NEXT_PUBLIC_BASE_URL}/article/${article.name}`}) )
    
    return [...staticRoutes, ...dynamicRoutes];
}
```

In this way, you'll expose all possible website URLs to the search engine crawlers.

  

About the manifest, you need to change _name_, _short_name_, description and _background/theme color_ (and _start_url_ if needed)

```typescript
// manifest.ts

import { MetadataRoute } from  'next'
export  default  function  manifest(): MetadataRoute.Manifest {
    return {
    name:  'My App',
    short_name:  'My App',
    description:  'My App Description',
    start_url:  '/',
    display:  'standalone',
    background_color:  '#fff',
    theme_color:  '#fff',
    }
}
```

  

## Resources

- Here is the official blog article about [**Tailwindcss 4**](https://tailwindcss.com/blog/tailwindcss-v4)

- Official Next documentation about metadata and more [**here**](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/manifest)

- "Generate Dynamic Open Graph and Twitter Images in Next.js" article [**here**](https://cruip.com/generate-dynamic-open-graph-and-twitter-images-in-next-js/)

- To check your Opengraph and Twitter images i recommend you [**this website**](https://www.opengraph.xyz/)

- To check your website SEO i recommend you [**this website**](https://www.seotesteronline.com/)

  

## UI Kit

If you're looking for beautiful UI Kit for your website, i reccomend you these websites:

- (**shadcn/ui**)[https://ui.shadcn.com/]

- (**Reactbits**)[https://www.reactbits.dev]

- (**Acernity UI**)[https://ui.aceternity.com]

- (**CuiCui**)[https://cuicui.day/]

- (**Origin UI**)[https://originui.com/]

- (**Radix UI**)[https://www.radix-ui.com/]

- (**Hover.dev**)[https://www.hover.dev]