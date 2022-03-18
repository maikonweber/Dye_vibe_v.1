
import { extendTheme } from '@chakra-ui/react' 
import { createBreakpoints } from "@chakra-ui/theme-tools"

export const theme = extendTheme({
    styles:{
    global: {
        body: {
            bgGradient: 'linear(to-l, green.400, purple.300)',
            bg: 'blue.100',
            color: '#0B0B0D',
        },
        fonts : { body: 'Yanone',
        heading: 'Gluten',
        mono: 'Grechen'
               }           
    
    }}
})  


const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
})