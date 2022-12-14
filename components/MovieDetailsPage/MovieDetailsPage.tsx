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
import MovieNavbar from 'components/MovieNavbar/MovieNavbar';
import TabDesktopBtn1 from 'components/TabDesktopBtn1/TabDesktopBtn1';
import TabDesktopBtn2 from 'components/TabDesktopBtn2/TabDesktopBtn2';
import TabMobileBtn1 from 'components/TabMobileBtn1/TabMobileBtn1';
import TabMobileBtn2 from 'components/TabMobileBtn2/TabMobileBtn2';
import Rated from 'components/Rated/Rated';
import Language from 'components/Language/Language';
import Genre from 'components/Genre/Genre';
import MovieCard from 'components/MovieCard/MovieCard';
import MovieFooter from 'components/MovieFooter/MovieFooter';
import { MovieDetailsPageProps } from 'types';
import useMovieDetailsPage from 'components/MovieDetailsPage/useMovieDetailsPage';
 
const Property1Default: any = styled("div", {
    shouldForwardProp: prop => !["data"].includes(prop.toString())
  })(({ theme, data }: any) =>({  
  backgroundColor: theme.palette["Background"]["Default"],  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  width: data.size === "desktop" ? "90%" : "100vw",  
  justifyContent: `flex-start`,  
  alignItems: `center`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  overflow: data.size === "desktop" ? "unset" : `hidden`,  
}));
  
const MovieNavbar1: any = styled(MovieNavbar)(({ theme }: any) =>({  
  alignSelf: `stretch`,  
  margin: `0px`,  
}));
  
const TopAndMask: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  margin: `0px`,  
});
  
const Top: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  margin: `0px`,  
});
  
const MovieImage: any = styled("div", {
    shouldForwardProp: prop => !["data"].includes(prop.toString())
  })(({ data }: any) =>({  
  backgroundPosition: `center`,  
  backgroundSize: `cover`,  
  backgroundRepeat: `no-repeat`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `center`,  
  alignItems: `center`,  
  padding: data.size === "desktop" ? `0px 10px` : `10px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  height: `400px`,  
  margin: `0px`,  
  backgroundImage: `url(${data.movie.posterImage})`,  
}));
  
const PlayMovieIcon: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  width: `93px`,  
  height: `93px`,  
  margin: `0px`,  
});
  
const Ellipse1: any = styled("img")({  
  height: `auto`,  
  width: `93px`,  
  position: `absolute`,  
  left: `0px`,  
  top: `0px`,  
});
  
const Polygon1: any = styled("img")({  
  height: `auto`,  
  width: `25.66px`,  
  position: `absolute`,  
  left: `37px`,  
  top: `31px`,  
});
  
const TitleDarkened: any = styled("div", {
    shouldForwardProp: prop => !["data"].includes(prop.toString())
  })(({ data }: any) =>({  
  display: `flex`,  
  position: `absolute`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `10px`,  
  boxSizing: `border-box`,  
  left: data.size === "desktop" ? `-10px` : `0px`,  
  top: `0px`,  
}));
  
const TitleMask: any = styled("div", {
    shouldForwardProp: prop => !["data"].includes(prop.toString())
  })(({ data }: any) =>({  
  background: data.size === "desktop" ? `linear-gradient(47.7deg, rgba(0, 0, 0, 1) 1.5263503667112648%, rgba(0, 0, 0, 0) 43.538379818656615%)` : `linear-gradient(39.69deg, rgba(0, 0, 0, 1) 1.244188344165035%, rgba(0, 0, 0, 0) 47.14643601850167%)`,  
  height: `402px`,  
  width: data.size === "desktop" ? `845px` : `638px`,  
  margin: `0px`,  
}));
  
const TitleAndBuy: any = styled("div", {
    shouldForwardProp: prop => !["data"].includes(prop.toString())
  })(({ data }: any) =>({  
  display: `flex`,  
  position: `absolute`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-end`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  width: `320px`,  
  left: data.size === "desktop" ? `90px` : `30px`,  
  top: `84px`,  
}));
  
const MovieTitle: any = styled("div")({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(255, 255, 255, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Roboto`,  
  fontWeight: `900`,  
  fontSize: `45px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  alignSelf: `stretch`,  
  margin: `0px`,  
});
  
const Tabs: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `24px 0px 0px 0px`,  
});
  
const TabDesktopBtn11: any = styled(TabDesktopBtn1)(({ theme }: any) =>({  
  margin: `0px`,  
}));
  
const TabDesktopBtn21: any = styled(TabDesktopBtn2)(({ theme }: any) =>({  
  margin: `0px`,  
}));
  
const ContentAndMask: any = styled("div", {
    shouldForwardProp: prop => !["data"].includes(prop.toString())
  })(({ data }: any) =>({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `center`,  
  padding: data.size === "desktop" ? `0px 90px` : `0px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  margin: `-36px 0px 0px 0px`,  
}));
  
const RoundedMask: any = styled("div", {
    shouldForwardProp: prop => !["data"].includes(prop.toString())
  })(({ theme, data }: any) =>({  
  backgroundColor: theme.palette["Background"]["Default"],  
  borderRadius: `20px`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  alignSelf: `stretch`,  
  height: data.size === "desktop" ? `68px` : `54px`,  
  margin: `0px`,  
}));
  
const PageContent: any = styled("div", {
    shouldForwardProp: prop => !["data"].includes(prop.toString())
  })(({ data }: any) =>({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: data.size === "desktop" ? `10px 30px 60px 30px` : `0px 24px 60px 24px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  margin: data.size === "desktop" ? `-50px 0px 0px 0px` : `-30px 0px 0px 0px`,  
}));
  
const Top1: any = styled("div", {
    shouldForwardProp: prop => !["data"].includes(prop.toString())
  })(({ data }: any) =>({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: data.size === "desktop" ? `row` : `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: data.size === "desktop" ? `0px 100px 20px 0px` : `0px`,  
  boxSizing: `border-box`,  
  zIndex: data.size === "desktop" ? "unset" : `2`,  
  margin: `0px`,  
  alignSelf: data.size === "desktop" ? `stretch` : "unset",  
}));
  
const TopPart: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px`,  
});
  
const PageTop: any = styled("div", {
    shouldForwardProp: prop => !["data"].includes(prop.toString())
  })(({ data }: any) =>({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  width: `327px`,  
  margin: data.size === "desktop" ? `38px 0px 0px 0px` : `0px`,  
}));
  
const TitleAndBuy1: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px`,  
});
  
const MovieTitle1: any = styled("div", {
    shouldForwardProp: prop => !["data"].includes(prop.toString())
  })(({ theme, data }: any) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: data.size === "desktop" ? `rgba(0, 0, 0, 1)` : theme.palette["Text"]["Primary"],  
  fontStyle: `normal`,  
  fontFamily: `Roboto`,  
  fontWeight: `900`,  
  fontSize: `32px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  width: `336px`,  
  margin: `0px`,  
}));
  
const Tabs1: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `18px 0px 0px 0px`,  
});
  
const TabMobileBtn11: any = styled(TabMobileBtn1)(({ theme }: any) =>({  
  margin: `0px`,  
}));
  
const TabMobileBtn21: any = styled(TabMobileBtn2)(({ theme }: any) =>({  
  margin: `0px`,  
}));
  
const RateAndRun: any = styled("div", {
    shouldForwardProp: prop => !["data"].includes(prop.toString())
  })(({ data }: any) =>({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: data.size === "desktop" ? `0px` : `38px 0px 0px 0px`,  
}));
  
const RatingLang: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px`,  
});
  
const Rated1: any = styled(Rated)(({ theme }: any) =>({  
  margin: `0px`,  
}));
  
const Language1: any = styled(Language)(({ theme }: any) =>({  
  margin: `0px 0px 0px 14px`,  
}));
  
const RunRelease: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `18px 0px 0px 0px`,  
});
  
const RunTime: any = styled("div", {
    shouldForwardProp: prop => !["data"].includes(prop.toString())
  })(({ data }: any) =>({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `center`,  
  alignItems: `center`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px`,  
  width: data.size === "desktop" ? `67px` : "unset",  
}));
  
const Vector: any = styled("img")({  
  height: `auto`,  
  width: `13px`,  
  margin: `0px`,  
});
  
const Q120Min: any = styled("div", {
    shouldForwardProp: prop => !["data"].includes(prop.toString())
  })(({ theme, data }: any) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: theme.palette["Text"]["Disabled"],  
  fontStyle: `normal`,  
  fontFamily: `Roboto`,  
  fontWeight: `400`,  
  fontSize: `14px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  margin: `0px 0px 0px 2px`,  
  flexGrow: data.size === "desktop" ? `1` : "unset",  
}));
  
const ReleaseDate: any = styled("div", {
    shouldForwardProp: prop => !["data"].includes(prop.toString())
  })(({ data }: any) =>({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `center`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px 0px 0px 19px`,  
  width: data.size === "desktop" ? `142px` : "unset",  
}));
  
const Released: any = styled("div")(({ theme }: any) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: theme.palette["Text"]["Secondary"],  
  fontStyle: `normal`,  
  fontFamily: `Roboto`,  
  fontWeight: `400`,  
  fontSize: `14px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  margin: `0px`,  
}));
  
const Q01Oct2010: any = styled("div", {
    shouldForwardProp: prop => !["data"].includes(prop.toString())
  })(({ theme, data }: any) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: theme.palette["Text"]["Disabled"],  
  fontStyle: `normal`,  
  fontFamily: `Roboto`,  
  fontWeight: `400`,  
  fontSize: `14px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  margin: `0px 0px 0px 2px`,  
  flexGrow: data.size === "desktop" ? `1` : "unset",  
}));
  
const Reviews: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `38px 0px 0px 0px`,  
});
  
const RatingImdb: any = styled("div", {
    shouldForwardProp: prop => !["data"].includes(prop.toString())
  })(({ data }: any) =>({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `center`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: data.size === "desktop" ? `0px 0px 0px 37px` : `0px`,  
}));
  
const Q6810: any = styled("div")(({ theme }: any) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(0, 0, 0, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Roboto`,  
  fontWeight: `600`,  
  fontSize: `24px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  margin: `0px`,  
}));
  
const ImDb: any = styled("div")(({ theme }: any) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(176, 176, 176, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Roboto`,  
  fontWeight: `400`,  
  fontSize: `14px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  margin: `2px 0px 0px 0px`,  
}));
  
const RtIcon: any = styled("img", {
    shouldForwardProp: prop => !["data"].includes(prop.toString())
  })(({ data }: any) =>({  
  height: `49px`,  
  width: `49px`,  
  objectFit: `cover`,  
  margin: data.size === "desktop" ? `0px` : `0px 0px 0px 30px`,  
}));
  
const RatingRt: any = styled("div", {
    shouldForwardProp: prop => !["data"].includes(prop.toString())
  })(({ data }: any) =>({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `center`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: data.size === "desktop" ? `0px 0px 0px 37px` : `0px 0px 0px 30px`,  
}));
  
const Q72: any = styled("div")(({ theme }: any) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(0, 0, 0, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Roboto`,  
  fontWeight: `600`,  
  fontSize: `24px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  margin: `0px`,  
}));
  
const RottenTomatoes: any = styled("div")(({ theme }: any) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(176, 176, 176, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Roboto`,  
  fontWeight: `400`,  
  fontSize: `14px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  margin: `2px 0px 0px 0px`,  
}));
  
const RatingIgn: any = styled("div", {
    shouldForwardProp: prop => !["data"].includes(prop.toString())
  })(({ data }: any) =>({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `center`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: data.size === "desktop" ? `0px 0px 0px 37px` : `0px 0px 0px 30px`,  
}));
  
const Q610: any = styled("div")(({ theme }: any) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(0, 0, 0, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Roboto`,  
  fontWeight: `600`,  
  fontSize: `24px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  margin: `0px`,  
}));
  
const Ign: any = styled("div")(({ theme }: any) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(176, 176, 176, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Roboto`,  
  fontWeight: `400`,  
  fontSize: `14px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  margin: `2px 0px 0px 0px`,  
}));
  
const GenreChips: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `38px 0px 0px 0px`,  
});
  
const Genre1: any = styled(Genre)(({ theme }: any) =>({  
  margin: `0px`,  
}));
  
const TopPlot: any = styled("div", {
    shouldForwardProp: prop => !["data"].includes(prop.toString())
  })(({ data }: any) =>({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: data.size === "desktop" ? `34px 10px 10px 0px` : `10px 10px 10px 0px`,  
  boxSizing: `border-box`,  
  alignSelf: data.size === "desktop" ? "unset" : `stretch`,  
  margin: data.size === "desktop" ? `0px 0px 0px 100px` : `38px 0px 0px 0px`,  
  flexGrow: data.size === "desktop" ? `1` : "unset",  
}));
  
const MovieDescription: any = styled("div", {
    shouldForwardProp: prop => !["data"].includes(prop.toString())
  })(({ theme, data }: any) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: theme.palette["Text"]["Secondary"],  
  fontStyle: `normal`,  
  fontFamily: `Roboto`,  
  fontWeight: `400`,  
  fontSize: data.size === "desktop" ? `20px` : `14px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  lineHeight: data.size === "desktop" ? `32px` : `22px`,  
  textTransform: `none`,  
  flexGrow: `1`,  
  margin: `0px`,  
}));
  
const Vids: any = styled("div", {
    shouldForwardProp: prop => !["data"].includes(prop.toString())
  })(({ data }: any) =>({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  zIndex: data.size === "desktop" ? "unset" : `1`,  
  margin: `38px 0px 0px 0px`,  
  alignSelf: data.size === "desktop" ? `stretch` : "unset",  
}));
  
const MoreTrailersVideos: any = styled("div", {
    shouldForwardProp: prop => !["data"].includes(prop.toString())
  })(({ theme, data }: any) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: data.size === "desktop" ? theme.palette["Text"]["Primary"] : `rgba(85, 85, 85, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Roboto`,  
  fontWeight: `700`,  
  fontSize: `20px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  lineHeight: `32px`,  
  textTransform: `none`,  
  width: `232px`,  
  margin: `0px`,  
}));
  
const TrailerCards: any = styled("div", {
    shouldForwardProp: prop => !["data"].includes(prop.toString())
  })(({ data }: any) =>({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `15px 0px 0px 0px`,  
  alignSelf: data.size === "desktop" ? `stretch` : "unset",  
}));
  
const Row: any = styled("div", {
    shouldForwardProp: prop => !["data"].includes(prop.toString())
  })(({ data }: any) =>({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px`,  
  flexGrow: data.size === "desktop" ? `1` : "unset",  
}));
  
const MovieCard1: any = styled(MovieCard)(({ theme }: any) =>({  
  flexGrow: `1`,  
  height: `180px`,  
  margin: `0px`,  
}));
  
const PageBtm: any = styled("div", {
    shouldForwardProp: prop => !["data"].includes(prop.toString())
  })(({ data }: any) =>({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  zIndex: data.size === "desktop" ? "unset" : `0`,  
  margin: `38px 0px 0px 0px`,  
}));
  
const Director: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `10px 10px 10px 0px`,  
  boxSizing: `border-box`,  
  margin: `0px`,  
});
  
const Director1: any = styled("div", {
    shouldForwardProp: prop => !["data"].includes(prop.toString())
  })(({ theme, data }: any) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: theme.palette["Text"]["Primary"],  
  fontStyle: `normal`,  
  fontFamily: `Roboto`,  
  fontWeight: data.size === "desktop" ? `700` : `600`,  
  fontSize: data.size === "desktop" ? `20px` : `14px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  width: data.size === "desktop" ? `100px` : `60px`,  
  margin: `0px`,  
  lineHeight: data.size === "desktop" ? `54px` : "unset",  
}));
  
const TaikaWaititi: any = styled("div", {
    shouldForwardProp: prop => !["data"].includes(prop.toString())
  })(({ theme, data }: any) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: theme.palette["Text"]["Secondary"],  
  fontStyle: `normal`,  
  fontFamily: `Roboto`,  
  fontWeight: `400`,  
  fontSize: data.size === "desktop" ? `29px` : `14px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  margin: data.size === "desktop" ? `0px 0px 0px 30px` : `0px 0px 0px 10px`,  
  lineHeight: data.size === "desktop" ? `56px` : "unset",  
}));
  
const Actors: any = styled("div", {
    shouldForwardProp: prop => !["data"].includes(prop.toString())
  })(({ data }: any) =>({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `6px 10px 6px 0px`,  
  boxSizing: `border-box`,  
  margin: `7px 0px 0px 0px`,  
  alignSelf: data.size === "desktop" ? `stretch` : "unset",  
}));
  
const Actors1: any = styled("div", {
    shouldForwardProp: prop => !["data"].includes(prop.toString())
  })(({ theme, data }: any) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: theme.palette["Text"]["Primary"],  
  fontStyle: `normal`,  
  fontFamily: `Roboto`,  
  fontWeight: data.size === "desktop" ? `700` : `600`,  
  fontSize: data.size === "desktop" ? `20px` : `14px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  lineHeight: data.size === "desktop" ? `54px` : `20px`,  
  textTransform: `none`,  
  width: data.size === "desktop" ? `100px` : `60px`,  
  margin: `0px`,  
}));
  
const ChrisHemsworthNatali: any = styled("div", {
    shouldForwardProp: prop => !["data"].includes(prop.toString())
  })(({ theme, data }: any) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: theme.palette["Text"]["Secondary"],  
  fontStyle: `normal`,  
  fontFamily: `Roboto`,  
  fontWeight: `400`,  
  fontSize: data.size === "desktop" ? `29px` : `14px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  lineHeight: data.size === "desktop" ? `56px` : `20px`,  
  textTransform: `none`,  
  width: data.size === "desktop" ? "unset" : `247px`,  
  margin: data.size === "desktop" ? `0px 0px 0px 30px` : `0px 0px 0px 10px`,  
  flexGrow: data.size === "desktop" ? `1` : "unset",  
}));
  
const PlotBtm: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `10px 10px 10px 0px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  margin: `7px 0px 0px 0px`,  
});
  
const MovieDescription1: any = styled("div", {
    shouldForwardProp: prop => !["data"].includes(prop.toString())
  })(({ theme, data }: any) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: data.size === "desktop" ? `rgba(85, 85, 85, 1)` : theme.palette["Text"]["Secondary"],  
  fontStyle: `normal`,  
  fontFamily: `Roboto`,  
  fontWeight: `400`,  
  fontSize: `14px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  lineHeight: `22px`,  
  textTransform: `none`,  
  flexGrow: `1`,  
  margin: `0px`,  
}));
  
const MovieFooter1: any = styled(MovieFooter)(({ theme }: any) =>({  
  alignSelf: `stretch`,  
  margin: `0px`,  
}));
 
function MovieDetailsPage(props: MovieDetailsPageProps): JSX.Element {
  const {data} = useMovieDetailsPage();
    return (
    <Property1Default  className={props.className}   data={data} >
      {(!props.isLoading || !data.isLoading) &&
        <MovieNavbar1   size={data.size}/>
      }
      {(!props.isLoading || !data.isLoading) &&
        <TopAndMask >
          <Top >
            <MovieImage data={data} >
              <PlayMovieIcon >
                <Ellipse1  src={`assets/images/MovieDetailsPage_Ellipse_1.svg`} alt={"Ellipse 1"}/>
                <Polygon1  src={`assets/images/MovieDetailsPage_Polygon_1.svg`} alt={"Polygon 1"}/>
              </PlayMovieIcon>
              {((data.size === "desktop")) &&
                <TitleDarkened data={data} >
                  <TitleMask data={data} >
                  </TitleMask>
                </TitleDarkened>
              }
              {((data.size === "desktop")) &&
                <TitleAndBuy data={data} >
                  <MovieTitle >
                    {data.movie.title}
                      </MovieTitle>
                  <Tabs >
                    <TabDesktopBtn11   />
                    <TabDesktopBtn21   />
                  </Tabs>
                </TitleAndBuy>
              }
            </MovieImage>
          </Top>
          <ContentAndMask data={data} >
            <RoundedMask data={data} >
            </RoundedMask>
            <PageContent data={data} >
              <Top1 data={data} >
                <TopPart >
                  {(!(data.size === "desktop")) &&
                    <PageTop data={data} >
                      <TitleAndBuy1 >
                        <MovieTitle1 data={data} >
                          {data.movie.title}
                            </MovieTitle1>
                        <Tabs1 >
                          <TabMobileBtn11   />
                          <TabMobileBtn21   />
                        </Tabs1>
                      </TitleAndBuy1>
                    </PageTop>
                  }
                  <RateAndRun data={data} >
                    <RatingLang >
                      <Rated1   rated={data.movie.rated}/>
                      <Language1   language={data.movie.language}/>
                    </RatingLang>
                    <RunRelease >
                      <RunTime data={data} >
                        <Vector  src={`assets/images/MovieDetailsPage_Vector.svg`} alt={"Vector"}/>
                        <Q120Min data={data} >
                          {data.movie.runtime}
                            </Q120Min>
                      </RunTime>
                      <ReleaseDate data={data} >
                        <Released >
                          {`Released:`}
                            </Released>
                        <Q01Oct2010 data={data} >
                          {data.movie.releaseDate}
                            </Q01Oct2010>
                      </ReleaseDate>
                    </RunRelease>
                  </RateAndRun>
                  <Reviews >
                    {(data.size !== "desktop" && !!data.movie.ratings?.[0]) &&
                      <RatingImdb data={data} >
                        <Q6810 >
                          {data.movie.ratings[0].Value}
                            </Q6810>
                        <ImDb >
                          {data.movie.ratings[0].Source}
                            </ImDb>
                      </RatingImdb>
                    }
                    {((data.size === "desktop")) &&
                      <RtIcon data={data}  src={`assets/images/MovieDetailsPage_rt_icon.png`} alt={"rt_icon"}/>
                    }
                    {(data.size === "desktop" ? !!data.movie.ratings?.length && data.movie.ratings.some(({ Source }) => Source === 'Rotten Tomatoes') : !!data.movie.ratings?.[1]) &&
                      <RatingRt data={data} >
                        <Q72 >
                          {((data.size === "desktop" ? data.movie.ratings.find(({ Source }) => Source === 'Rotten Tomatoes') : data.movie.ratings[1])).Value}
                            </Q72>
                        <RottenTomatoes >
                          {((data.size === "desktop" ? data.movie.ratings.find(({ Source }) => Source === 'Rotten Tomatoes') : data.movie.ratings[1])).Source}
                            </RottenTomatoes>
                      </RatingRt>
                    }
                    {(data.size !== "desktop" && !!data.movie.ratings?.[2]) &&
                      <RatingIgn data={data} >
                        <Q610 >
                          {data.movie.ratings[2].Value}
                            </Q610>
                        {(data.movie.ratings[2].Source) &&
                          <Ign >
                            {`IGN`}
                              </Ign>
                        }
                      </RatingIgn>
                    }
                  </Reviews>
                  <GenreChips >
                    {data.movie.genres && data.movie.genres.map((genre: any, index: number) => {
                      return (
                        <Genre1  key={index}  genre={ genre }/>
                      )
                    })}
                  </GenreChips>
                </TopPart>
                {((data.size === "desktop")) &&
                  <TopPlot data={data} >
                    <MovieDescription data={data} >
                      {data.movie.plot}
                        </MovieDescription>
                  </TopPlot>
                }
              </Top1>
              <Vids data={data} >
                <MoreTrailersVideos data={data} >
                  {`More Trailers & Videos`}
                    </MoreTrailersVideos>
                <TrailerCards data={data} >
                  {data.movie.backdropsImages && data.movie.backdropsImages.map((image: any, index: number) => {
                    return (
                      <Row key={index} data={data} >
                        <MovieCard1   image={image}/>
                      </Row>
                    )
                  })}
                </TrailerCards>
              </Vids>
              <PageBtm data={data} >
                <Director >
                  <Director1 data={data} >
                    {`Director:`}
                      </Director1>
                  <TaikaWaititi data={data} >
                    {data.movie.director}
                      </TaikaWaititi>
                </Director>
                <Actors data={data} >
                  <Actors1 data={data} >
                    {`Actors:`}
                      </Actors1>
                  <ChrisHemsworthNatali data={data} >
                    {data.movie.actors}
                      </ChrisHemsworthNatali>
                </Actors>
                {(!(data.size === "desktop")) &&
                  <PlotBtm >
                    <MovieDescription1 data={data} >
                      {data.movie.plot}
                        </MovieDescription1>
                  </PlotBtm>
                }
              </PageBtm>
            </PageContent>
          </ContentAndMask>
        </TopAndMask>
      }
      {(!props.isLoading || !data.isLoading) &&
        <MovieFooter1   size={data.size}/>
      }
    </Property1Default>
  );
}

export default MovieDetailsPage;
