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
import { MovieCardProps } from 'types';

 
const Property1Default: any = styled("div")({  
  borderRadius: `9px`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  height: `180px`,  
  width: "100%",  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  overflow: `hidden`,  
});
  
const Pic: any = styled("div")({  
  backgroundImage: `url(assets/images/moviecard_pic.png)`,  
  backgroundPosition: `center`,  
  backgroundSize: `cover`,  
  backgroundRepeat: `no-repeat`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  alignSelf: `stretch`,  
  height: `138px`,  
  margin: `0px`,  
});
  
const About: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `center`,  
  padding: `8px 0px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  margin: `0px`,  
});
  
const AboutProduct: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  flexGrow: `1`,  
  margin: `0px`,  
});
  
const Text: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `2px 14px`,  
  boxSizing: `border-box`,  
  margin: `0px`,  
});
  
const Title: any = styled("div")(({ theme }: any) =>({  
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
  margin: `0px`,  
}));
 
function MovieCard(props: MovieCardProps): JSX.Element {
  return (
    <Property1Default  className={props.className}   >
      <Pic >
      </Pic>
      <About >
        <AboutProduct >
          <Text >
            <Title >
              {`Movie Title 1`}
                </Title>
          </Text>
        </AboutProduct>
      </About>
    </Property1Default>
  );
}

export default MovieCard;
