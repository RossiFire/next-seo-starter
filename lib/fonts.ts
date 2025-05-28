import { Cherry_Bomb_One, DM_Sans, Oi } from 'next/font/google'

const cherryBombOne = Cherry_Bomb_One({ 
    weight: '400', 
    subsets: ['latin'],
    variable: '--font-oi'
})
const dmSans = DM_Sans({ 
    weight: '700', 
    subsets: ['latin'],
    variable: '--font-sans-bold'
})


const cherryBombOneFont = cherryBombOne.className;
const dmSansFont = dmSans.className;

export {
    cherryBombOneFont,
    dmSansFont
}