import * as React from 'react'
import Svg, { SvgProps, Defs, Path } from 'react-native-svg'


export const Remove = (props: SvgProps) => (
   <Svg
      width={24}
      height={24}
      id="Icons"
      {...props}
   >
       <Defs></Defs>
       <Path
          fill="white"
          d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10Z"
       />
       <Path
          fill="white"
          d="M16.707 7.293a1 1 0 0 0-1.414 0L12 10.586 8.707 7.293a1 1 0 1 0-1.414 1.414L10.586 12l-3.293 3.293a1 1 0 1 0 1.414 1.414L12 13.414l3.293 3.293a1 1 0 0 0 1.414-1.414L13.414 12l3.293-3.293a1 1 0 0 0 0-1.414Z"
       />
   </Svg>
)