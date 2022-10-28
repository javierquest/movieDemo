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
import { RatedProps } from 'types';

 
const RatedG: any = styled("div", {
    shouldForwardProp: prop => !["props"].includes(prop.toString())
  })(({ theme, props }: any) =>({  
  backgroundColor: theme.palette["Primary"]["Contrast"],  
  border: `0.7008928656578064px solid theme.customShadows["Light"]["Text"]["Disabled"].color`,  
  boxSizing: `border-box`,  
  borderRadius: `2.8035714626312256px`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `center`,  
  alignItems: `center`,  
  padding: `4px 6px`,  
  width: props.rated=== 'PG' || (props.rated !== 'PG-13' && props.rated !== 'R') ? "unset" : props.rated === 'PG-13' ? "unset" : props.rated=== 'R' ? "unset" : "100%",  
}));
  
const Rated1: any = styled("div")(({ theme }: any) =>({  
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
  
const Rating: any = styled("div")(({ theme }: any) =>({  
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
 
function Rated(props: RatedProps): JSX.Element {
  return (
    <RatedG  className={props.className}   props={props} >
      <Rated1 >
        {`Rated:`}
          </Rated1>
      <Rating >
        {props.rated=== 'PG' || (props.rated !== 'PG-13' && props.rated !== 'R') ? `PG` : props.rated === 'PG-13' ? `PG-13` : props.rated=== 'R' ? `R` :  `G`}
          </Rating>
    </RatedG>
  );
}

export default Rated;
