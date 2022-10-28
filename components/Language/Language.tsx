/**********************************************************************
*
*   Component generated by Quest
*
*   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts. 
*   To preseve that abilty, always export from Quest to regenerate this file.
*   To setup props, bindings and actions, use the Quest editor
*   Code Logic goes in the hook associated with this component
*
*   For help and further details refer to: https://www.quest.ai/docs
*
*
**********************************************************************/

import React from 'react';
import { styled } from '@mui/material/styles';
import { LanguageProps } from 'types';
import useLanguage from 'components/Language/useLanguage';
 
const RatedG: any = styled("div")(({ theme }: any) =>({  
  backgroundColor: theme.palette["Primary"]["Contrast"],  
  border: `1px solid theme.customShadows["Light"]["Text"]["Disabled"].color`,  
  boxSizing: `border-box`,  
  borderRadius: `4px`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `center`,  
  alignItems: `center`,  
  padding: `4px 6px`,  
  width: "100%",  
}));
  
const Lang: any = styled("div")(({ theme }: any) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: theme.palette["Text"]["Disabled"],  
  fontStyle: `normal`,  
  fontFamily: `Roboto`,  
  fontWeight: `400`,  
  fontSize: `10px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  margin: `0px`,  
}));
  
const Language1: any = styled("div")(({ theme }: any) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: theme.palette["Text"]["Primary"],  
  fontStyle: `normal`,  
  fontFamily: `Roboto`,  
  fontWeight: `600`,  
  fontSize: `14px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  margin: `0px 0px 0px 4px`,  
}));
 
function Language(props: LanguageProps): JSX.Element {
  const {data} = useLanguage();
    return (
    <RatedG  className={props.className}   >
      <Lang >
        {`Lang:`}
          </Lang>
      <Language1 >
        {data.movie.language}
          </Language1>
    </RatedG>
  );
}

export default Language;