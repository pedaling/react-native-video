(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[233],{6389:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/component/methods",function(){return n(9437)}])},9437:function(e,s,n){"use strict";n.r(s),n.d(s,{__toc:function(){return t}});var r=n(5893),i=n(2673),l=n(2643),o=n(3410);let t=[{depth:3,value:"dismissFullscreenPlayer",id:"dismissfullscreenplayer"},{depth:3,value:"pause",id:"pause"},{depth:3,value:"presentFullscreenPlayer",id:"presentfullscreenplayer"},{depth:3,value:"resume",id:"resume"},{depth:3,value:"restoreUserInterfaceForPictureInPictureStopCompleted",id:"restoreuserinterfaceforpictureinpicturestopcompleted"},{depth:3,value:"save",id:"save"},{depth:3,value:"seek",id:"seek"},{depth:4,value:"Exact seek",id:"exact-seek"},{depth:3,value:"setVolume",id:"setvolume"},{depth:3,value:"getCurrentPosition",id:"getcurrentposition"},{depth:3,value:"setSource",id:"setsource"},{depth:3,value:"setFullScreen",id:"setfullscreen"},{depth:3,value:"nativeHtmlVideoRef",id:"nativehtmlvideoref"},{depth:3,value:"Example Usage",id:"example-usage"},{depth:2,value:"Static methods",id:"static-methods"},{depth:3,value:"getWidevineLevel",id:"getwidevinelevel"},{depth:3,value:"isCodecSupported",id:"iscodecsupported"},{depth:3,value:"isHEVCSupported",id:"ishevcsupported"},{depth:3,value:"Example Usage",id:"example-usage-1"}];function c(e){let s=Object.assign({h1:"h1",p:"p",h3:"h3",code:"code",blockquote:"blockquote",a:"a",ul:"ul",li:"li",h4:"h4",pre:"pre",span:"span",h2:"h2"},(0,l.a)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{children:"Methods"}),"\n",(0,r.jsx)(s.p,{children:"This page shows the list of available methods"}),"\n",(0,r.jsx)(s.h3,{id:"dismissfullscreenplayer",children:(0,r.jsx)(s.code,{children:"dismissFullscreenPlayer"})}),"\n",(0,r.jsx)(o.Z,{types:["Android","iOS","web"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"dismissFullscreenPlayer(): Promise<void>"})}),"\n",(0,r.jsx)(s.p,{children:"Take the player out of fullscreen mode."}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"[!WARNING]\ndeprecated, use setFullScreen method instead"}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"pause",children:(0,r.jsx)(s.code,{children:"pause"})}),"\n",(0,r.jsx)(o.Z,{types:["Android","iOS","web"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"pause(): Promise<void>"})}),"\n",(0,r.jsx)(s.p,{children:"Pause the video."}),"\n",(0,r.jsx)(s.h3,{id:"presentfullscreenplayer",children:(0,r.jsx)(s.code,{children:"presentFullscreenPlayer"})}),"\n",(0,r.jsx)(o.Z,{types:["Android","iOS","web"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"presentFullscreenPlayer(): Promise<void>"})}),"\n",(0,r.jsx)(s.p,{children:"Put the player in fullscreen mode."}),"\n",(0,r.jsx)(s.p,{children:"On iOS, this displays the video in a fullscreen view controller with controls."}),"\n",(0,r.jsx)(s.p,{children:"On Android, this puts the navigation controls in fullscreen mode. It is not a complete fullscreen implementation, so you will still need to apply a style that makes the width and height match your screen dimensions to get a fullscreen video."}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"[!WARNING]\ndeprecated, use setFullScreen method instead"}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"resume",children:(0,r.jsx)(s.code,{children:"resume"})}),"\n",(0,r.jsx)(o.Z,{types:["Android","iOS","web"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"resume(): Promise<void>"})}),"\n",(0,r.jsx)(s.p,{children:"Resume the video."}),"\n",(0,r.jsx)(s.h3,{id:"restoreuserinterfaceforpictureinpicturestopcompleted",children:(0,r.jsx)(s.code,{children:"restoreUserInterfaceForPictureInPictureStopCompleted"})}),"\n",(0,r.jsx)(o.Z,{types:["iOS"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"restoreUserInterfaceForPictureInPictureStopCompleted(restored)"})}),"\n",(0,r.jsxs)(s.p,{children:["This function corresponds to the completion handler in Apple's ",(0,r.jsx)(s.a,{href:"https://developer.apple.com/documentation/avkit/avpictureinpicturecontrollerdelegate/1614703-pictureinpicturecontroller?language=objc",children:"restoreUserInterfaceForPictureInPictureStop"}),". IMPORTANT: This function must be called after ",(0,r.jsx)(s.code,{children:"onRestoreUserInterfaceForPictureInPictureStop"})," is called."]}),"\n",(0,r.jsx)(s.h3,{id:"save",children:(0,r.jsx)(s.code,{children:"save"})}),"\n",(0,r.jsx)(o.Z,{types:["iOS"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"save(): Promise<{ uri: string }>"})}),"\n",(0,r.jsx)(s.p,{children:"Save video to your Photos with current filter prop. Returns promise."}),"\n",(0,r.jsx)(s.p,{children:"Notes:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Currently only supports highest quality export"}),"\n",(0,r.jsx)(s.li,{children:"Currently only supports MP4 export"}),"\n",(0,r.jsx)(s.li,{children:"Currently only supports exporting to user's cache directory with a generated UUID filename."}),"\n",(0,r.jsx)(s.li,{children:"User will need to remove the saved video through their Photos app"}),"\n",(0,r.jsx)(s.li,{children:"Works with cached videos as well. (Checkout video-caching example)"}),"\n",(0,r.jsx)(s.li,{children:"If the video is has not began buffering (e.g. there is no internet connection) then the save function will throw an error."}),"\n",(0,r.jsx)(s.li,{children:"If the video is buffering then the save function promise will return after the video has finished buffering and processing."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Future:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Will support multiple qualities through options"}),"\n",(0,r.jsx)(s.li,{children:"Will support more formats in the future through options"}),"\n",(0,r.jsx)(s.li,{children:"Will support custom directory and file name through options"}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"seek",children:(0,r.jsx)(s.code,{children:"seek"})}),"\n",(0,r.jsx)(o.Z,{types:["All"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"seek(seconds)"})}),"\n",(0,r.jsx)(s.p,{children:"Seek to the specified position represented by seconds. seconds is a float value."}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"seek()"})," can only be called after the ",(0,r.jsx)(s.code,{children:"onLoad"})," event has fired. Once completed, the ",(0,r.jsx)(s.a,{href:"./events#onseek",children:"onSeek"})," event will be called."]}),"\n",(0,r.jsx)(s.h4,{id:"exact-seek",children:"Exact seek"}),"\n",(0,r.jsx)(o.Z,{types:["iOS"]}),"\n",(0,r.jsx)(s.p,{children:"By default iOS seeks within 100 milliseconds of the target position. If you need more accuracy, you can use the seek with tolerance method:"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"seek(seconds, tolerance)"})}),"\n",(0,r.jsx)(s.p,{children:"tolerance is the max distance in milliseconds from the seconds position that's allowed. Using a more exact tolerance can cause seeks to take longer. If you want to seek exactly, set tolerance to 0."}),"\n",(0,r.jsx)(s.h3,{id:"setvolume",children:(0,r.jsx)(s.code,{children:"setVolume"})}),"\n",(0,r.jsx)(o.Z,{types:["Android","iOS","web"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"setVolume(value): Promise<void>"})}),"\n",(0,r.jsxs)(s.p,{children:["This function will change the volume exactly like ",(0,r.jsx)(s.a,{href:"./props#volume",children:"volume"})," property. default value and range are the same then."]}),"\n",(0,r.jsx)(s.h3,{id:"getcurrentposition",children:(0,r.jsx)(s.code,{children:"getCurrentPosition"})}),"\n",(0,r.jsx)(o.Z,{types:["Android","iOS","web"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"getCurrentPosition(): Promise<number>"})}),"\n",(0,r.jsx)(s.p,{children:"This function retrieves and returns the precise current position of the video playback, measured in seconds.\nThis function will throw an error if player is not initialized."}),"\n",(0,r.jsx)(s.h3,{id:"setsource",children:(0,r.jsx)(s.code,{children:"setSource"})}),"\n",(0,r.jsx)(o.Z,{types:["Android","iOS"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"setSource(source: ReactVideoSource): Promise<void>"})}),"\n",(0,r.jsxs)(s.p,{children:["This function will change the source exactly like ",(0,r.jsx)(s.a,{href:"./props#source",children:"source"})," property.\nChanging source with this function will overide source provided as props."]}),"\n",(0,r.jsx)(s.h3,{id:"setfullscreen",children:(0,r.jsx)(s.code,{children:"setFullScreen"})}),"\n",(0,r.jsx)(o.Z,{types:["Android","iOS","web"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"setFullScreen(fullscreen): Promise<void>"})}),"\n",(0,r.jsxs)(s.p,{children:["If you set it to ",(0,r.jsx)(s.code,{children:"true"}),", the player enters fullscreen mode. If you set it to ",(0,r.jsx)(s.code,{children:"false"}),", the player exits fullscreen mode."]}),"\n",(0,r.jsx)(s.p,{children:"On iOS, this displays the video in a fullscreen view controller with controls."}),"\n",(0,r.jsx)(s.p,{children:"On Android, this puts the navigation controls in fullscreen mode. It is not a complete fullscreen implementation, so you will still need to apply a style that makes the width and height match your screen dimensions to get a fullscreen video."}),"\n",(0,r.jsx)(s.h3,{id:"nativehtmlvideoref",children:(0,r.jsx)(s.code,{children:"nativeHtmlVideoRef"})}),"\n",(0,r.jsx)(o.Z,{types:["web"]}),"\n",(0,r.jsx)(s.p,{children:"A ref to the underlying html video element. This can be used if you need to integrate a 3d party, web only video library (like hls.js, shaka, video.js...)."}),"\n",(0,r.jsx)(s.h3,{id:"example-usage",children:"Example Usage"}),"\n",(0,r.jsx)(s.pre,{"data-language":"tsx","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"tsx","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"videoRef"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"useRef"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"VideoRef"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"null"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"someCoolFunctions"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"async"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" () "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"!"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"videoRef"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:".current) {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// present or dismiss fullscreen player"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"videoRef"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"current"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".presentFullscreenPlayer"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"videoRef"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"current"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".dismissFullscreenPlayer"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// pause or resume the video"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"videoRef"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"current"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".pause"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"videoRef"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"current"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".resume"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// save video to your Photos with current filter prop"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"response"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"videoRef"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"current"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".save"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"path"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"response"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:".uri;"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// seek to the specified position represented by seconds"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"videoRef"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"current"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".seek"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"200"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// or on iOS you can seek with tolerance"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"videoRef"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"current"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".seek"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"200"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"10"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"Video"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"ref"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{videoRef}"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"source"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{{uri"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'https://www.w3schools.com/html/mov_bbb.mp4'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}}"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  />"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:");"})})]})}),"\n",(0,r.jsx)(s.h2,{id:"static-methods",children:"Static methods"}),"\n",(0,r.jsx)(s.h3,{id:"getwidevinelevel",children:(0,r.jsx)(s.code,{children:"getWidevineLevel"})}),"\n",(0,r.jsx)(o.Z,{types:["Android"]}),"\n",(0,r.jsx)(s.p,{children:"Indicates whether the widevine level supported by device."}),"\n",(0,r.jsx)(s.p,{children:"Possible values are:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"0 - unable to determine widevine support (typically not supported)"}),"\n",(0,r.jsx)(s.li,{children:"1, 2, 3 - Widevine level supported"}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"iscodecsupported",children:(0,r.jsx)(s.code,{children:"isCodecSupported"})}),"\n",(0,r.jsx)(o.Z,{types:["Android","web"]}),"\n",(0,r.jsx)(s.p,{children:"Indicates whether the provided codec is supported level supported by device."}),"\n",(0,r.jsx)(s.p,{children:"parameters:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"mimetype"}),": mime type of codec to query"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"width"}),", ",(0,r.jsx)(s.code,{children:"height"}),": resolution to query"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Possible results:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"hardware"})," - codec is supported by hardware"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"software"})," - codec is supported by software only"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"unsupported"})," - codec is not supported"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"ishevcsupported",children:(0,r.jsx)(s.code,{children:"isHEVCSupported"})}),"\n",(0,r.jsx)(o.Z,{types:["Android"]}),"\n",(0,r.jsx)(s.p,{children:"Helper which Indicates whether the provided HEVC/1920*1080 is supported level supported by device. It uses isCodecSupported internally."}),"\n",(0,r.jsx)(s.h3,{id:"example-usage-1",children:"Example Usage"}),"\n",(0,r.jsx)(s.pre,{"data-language":"tsx","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"tsx","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { VideoDecoderProperties } "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'react-native-video'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"VideoDecoderProperties"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".getWidevineLevel"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"()"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".then"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"((level) "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"VideoDecoderProperties"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".isCodecSupported"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'video/hevc'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1920"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1080"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".then"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"((support) "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"VideoDecoderProperties"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".isHEVCSupported"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"()"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".then"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"((support) "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"});"})})]})})]})}s.default=(0,i.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,l.a)(),e.components);return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/component/methods.mdx",route:"/component/methods",timestamp:1734967705e3,title:"Methods",headings:t},pageNextRoute:"/component/methods"})},3410:function(e,s,n){"use strict";var r=n(5893);n(7294);var i=n(9701),l=n.n(i);s.Z=function(e){let{types:s}=e;return(0,r.jsxs)("p",{className:l().paragraphStyle,children:[1!==s.length||s.includes("All")?"Platforms:":"Platform:",(0,r.jsx)("span",{className:l().spanStyle,children:" "+s.join(" | ")})]})}},9701:function(e){e.exports={paragraphStyle:"PlatformsList_paragraphStyle__v_l36",spanStyle:"PlatformsList_spanStyle__ISLBH"}}},function(e){e.O(0,[673,888,774,179],function(){return e(e.s=6389)}),_N_E=e.O()}]);