import React from 'react';

export default function Explanation() {
   return(
       <p className =  'about-header'　style = {{
           fontWeight: 'bold',
           lineHeight:  1.6,
           marginTop: '30px',
           textAlign: 'center',
           letterspacing:  '.05em',
           border:"4px solid #333"
       }}>
           <span style = {{display: 'inline-block'}}>
               レースを通じて、
           </span>
           <span style = {{display: 'inline-block'}}>
               ”つよく”　”たくましく”　”健康な”
           </span>
           <span style = {{display: 'inline-block'}}>
               子供へと成長する
           </span>
       </p>
   )
};