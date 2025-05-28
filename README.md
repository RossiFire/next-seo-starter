
![GitHub repo size](https://img.shields.io/github/repo-size/rossifire/next-seo-starter) ![GitHub Repo stars](https://img.shields.io/github/stars/rossifire/next-seo-starter)

  
## NESS - Next Seo Starter Template

 
__Now supporting Next.Js 15, React 19 and the brand new Tailwindcss 4 🎆🎆__


## Why NESS?
This project aims to be your complete guide to create a multi page SEO-Friendly Websites, production ready. Moreover, I want to provide you a lightweight starter project, using Next.js (App Router), Typescript and Tailwindcss.

In this repository you'll find a ready-to-use template, but also resources and articles to make your development with Nextjs easier and faster.

  

Feel free to contribute with pull requests.

If you're still searching for Next 14 and React 18 version, you can find it [here](https://github.com/RossiFire/next-seo-starter/tree/next14-react18)

  

## 🚀 Features

- Static and Dynamic Metadata management
- Microdata implementation
- Sitemap, robots.txt ans Manifest to improve SEO ranking and website indexing
- Opengraph/Twitter/Apple image
- Tailwindcss, to manage style with...style 🥴
- **NEW** Google Analytics to track your website usage
- Framer Motion for beautiful animations
- Path aliases to improve your imports

  
  

## 📕Table of contents

- [Getting started](#getting-started)
- [Sitemap, robots.txt and Manifest](#sitemap---robotstxt---manifest)
- [Metadata setup](#metadata-setup)
- [Microdata setup](#microdata-setup)
- [Opengraph/Twitter/Apple image](#opengraphtwitterapple-image)
- [Tailwind configuration](#tailwind-configuration)
- [Framer Motion](#framer-motion)
- [Google Analytics](#google-analytics)
- [Resources](#resources)
	- [UI Kit](#ui-kit)

  

## Getting started

### 1. Clone the repository

Click "use this template" button on github to create a new repository, clone it on you pc, install the dependencies and than run the project
```bash
cd  next-seo-starter
npm  i
```

### 2. Environment file
Create a new file called _.env_ on root folder, and paste the following variables:
```bash
NEXT_PUBLIC_BASE_URL = "http://localhost:3000"
GOOGLE_ANALYTICS_TAG = "your-google-tag"
```

Now you're ready to go! start the server with:
```bash
npm run dev
```

## Sitemap - Robots.txt - Manifest
The _robots.ts_ file is useful to decide what pages Web Crawlers can see and what they can't. It doesn't need changes.
The _sitemap.ts_ file is a list of URLs, useful to make Web Crawlers aware of your Website structure, improving page scanning and inxeding. This file instead needs to be edited with your routes. here's an example:
```typescript
// sitemap.ts

import { MetadataRoute } from  "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const currentDate = new Date();

    
    const staticRoutes: MetadataRoute.Sitemap = [
        { 
            url: `${baseUrl}`, 
            lastModified: currentDate, 
            changeFrequency: "never" as const,
            priority: 1 
        },
        { 
            url: `${baseUrl}/about`, 
            lastModified: currentDate, 
            changeFrequency: "never" as const,
            priority: 0.9
        },
        //changeFrequency: "daily", for pages that are updated daily
        //changeFrequency: "weekly", for pages that are updated weekly
        //changeFrequency: "yearly", for pages that are updated yearly
        //changeFrequency: "never", for pages that are never updated

        //priority: 1, for pages that are the most important
        //priority: 0.9, for pages that are less important
        //priority: 0.8, for pages that are even less important
    ]
    
    const  myPosts = await  getPostsFromServer();

    const  dynamicRoutes: MetadataRoute.Sitemap = myPosts.map(post  => ({ 
        url :  `${process.env.NEXT_PUBLIC_BASE_URL}/post/${post.slug}`}),
        priority: 0.5, // as an example
        lastModified: post.updatedAt
    )
    
    return [...staticRoutes, ...dynamicRoutes];

}
```

In this way, you'll expose all possible website URLs to the search engine crawlers.

The _manifest.ts_ instead, gives to the browser general information about the application. It's very important if you're developing a Progressive Web App (PWA), since the browser will use those information to get logo, colors, etc... So I recommend you to edit this file based on your needs.
  
## Metadata setup

### 1. Base setup
This is the base setup included in the starter
```typescript
// app/layout.tsx
import  type { Metadata } from  'next'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
  title: {
    default: "NESS",
    template: "NESS - %s",
  },
  description:
    "NESS is a Next.Js Starter Template, SEO friendly, ready-to-use, production ready and other bunch of business words",
  keywords: [
    "NESS"
  ],
  authors: [{ name: "NESS" }],
  creator: "NESS",
  publisher: "NESS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL,
  },
};
```
Edit metadata based on your needs. Here's some suggestions to have a good SEO score:
- The title should be 30-50 characters
- The description should be 120-150 characters
- Keywords shouldn't be too short. Use "Ecommerce to sell shoe and shoe accessories" instead of "Shoe Ecommerce"
- Also make sure the words you write in the keywords are also in the related page. 

About the _title_ property, it's an object containing the template prefix inherited by sub-routes. So than in the other pages you can just set the relavite title

```typescript
// e.g. app/(routes)/contact/layout.tsx

export  const  metadata: Metadata = {
    title:  'Contact'  // Final result: NESS - Contact
}
```

### 2. Dynamic metadata
If you need to generate dynamic metadata for a page (for example for a blog post page), you need to add this function in that layout file

```typescript
// e.g. app/(routes)/post/[id]

import { Metadata, ResolvingMetadata } from  "next";

export async function generateMetadata( { params }: PageProps , parent: ResolvingMetadata): Promise<Metadata> {

const product = await yourRequestToServer(params.id);
    return {
        title: product.name,
        description: product.description,
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
        ...
    }
}

export function PostPage(){
    ...
}
```

## Microdata setup

Microdata are sets of information provided by us to Search Engines (SE), to make them aware about what kind of information or entities we're displaying in the page. To better know what kind of data SE need, the community built over the years a vocabulary that you can check at this [link](https://schema.org/).

In Next.Js we can declare microdata in _layout.tsx_ files. I built a utility function and a custom Script component to easly integrate microdata in every page. In the root layout you can find an example.

## Opengraph/Twitter/Apple image

The project already includes placeholders for these images. If you need static ones, just replace them with your images **without changing the file names** (you can still change the format). Here some recommendation about the images:

-  **Opengraph**: Aspect ratio of 1.91:1 (usually 1200 × 630 px) - less than 8MB

-  **Twitter**: Aspect ratio of 2:1 - less than 5MB

-  **Apple**: Aspect ratio of 1:1 (usually 180 × 180 px)

Remember to change the _favicon.ico_ as well!

If you need a more complex or custom og/twitter image generation instead, i recommend you [this article](https://cruip.com/generate-dynamic-open-graph-and-twitter-images-in-next-js/)

  

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
  
## Google Analytics
Google analytics is an essential tool if you want to track website usage, but not only. It has a lot of analytics stuff and more. We're using the new vercel library [@next/third-parties](https://nextjs.org/docs/app/guides/) to easly implement it in the project. If you don't need it, you can just uninstall the _@next/third-parties_ package, and remove it from layout.tsx
```html
<GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_TAG!} />
```

## Resources

- Here is the official blog article about [**Tailwindcss 4**](https://tailwindcss.com/blog/tailwindcss-v4)

- Official Next documentation about metadata and more [**here**](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/manifest)

- "Generate Dynamic Open Graph and Twitter Images in Next.js" article [**here**](https://cruip.com/generate-dynamic-open-graph-and-twitter-images-in-next-js/)

- To check your Opengraph and Twitter images i recommend you [**this website**](https://www.opengraph.xyz/)

- To check your website SEO i recommend you [**this website**](https://www.seotesteronline.com/)

  

## UI Kit

If you're looking for beautiful UI Kit for your website, i reccomend you these websites:

- [**shadcn/ui**](https://ui.shadcn.com/)

- [**Reactbits**](https://www.reactbits.dev)

- [**Acernity UI**](https://ui.aceternity.com)

- [**CuiCui**](https://cuicui.day/)

- [**Origin UI**](https://originui.com/)

- [**Radix UI**](https://www.radix-ui.com/)

- [**Hover.dev**](https://www.hover.dev)
