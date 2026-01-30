import{j as z}from"./jsx-runtime-D_zvdyIk.js";var de=Object.defineProperty,o=(e,a)=>de(e,"name",{value:a,configurable:!0});function h(){return h=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)({}).hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},h.apply(null,arguments)}o(h,"_extends");function J(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}o(J,"_assertThisInitialized");function v(e,a){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,t){return r.__proto__=t,r},v(e,a)}o(v,"_setPrototypeOf");function K(e,a){e.prototype=Object.create(a.prototype),e.prototype.constructor=e,v(e,a)}o(K,"_inheritsLoose");function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(a){return a.__proto__||Object.getPrototypeOf(a)},k(e)}o(k,"_getPrototypeOf");function Q(e){try{return Function.toString.call(e).indexOf("[native code]")!==-1}catch{return typeof e=="function"}}o(Q,"_isNativeFunction");function A(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(A=o(function(){return!!e},"_isNativeReflectConstruct"))()}o(A,"_isNativeReflectConstruct");function X(e,a,r){if(A())return Reflect.construct.apply(null,arguments);var t=[null];t.push.apply(t,a);var n=new(e.bind.apply(e,t));return r&&v(n,r.prototype),n}o(X,"_construct");function F(e){var a=typeof Map=="function"?new Map:void 0;return F=o(function(r){if(r===null||!Q(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(a!==void 0){if(a.has(r))return a.get(r);a.set(r,t)}function t(){return X(r,arguments,k(this).constructor)}return o(t,"Wrapper"),t.prototype=Object.create(r.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),v(t,r)},"_wrapNativeSuper"),F(e)}o(F,"_wrapNativeSuper");var pe={1:`Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,2:`Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,3:`Passed an incorrect argument to a color function, please pass a string representation of a color.

`,4:`Couldn't generate valid rgb string from %s, it returned %s.

`,5:`Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,6:`Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,7:`Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,8:`Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,9:`Please provide a number of steps to the modularScale helper.

`,10:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,11:`Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,12:`Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,13:`Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,14:`Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,15:`Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,16:`You must provide a template to this method.

`,17:`You passed an unsupported selector state to this method.

`,18:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,19:`fromSize and toSize must be provided as stringified numbers with the same units.

`,20:`expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,21:"expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",22:"expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",23:`fontFace expects a name of a font-family.

`,24:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,25:`fontFace expects localFonts to be an array.

`,26:`fontFace expects fileFormats to be an array.

`,27:`radialGradient requries at least 2 color-stops to properly render.

`,28:`Please supply a filename to retinaImage() as the first argument.

`,29:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,30:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",31:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,32:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,33:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,34:`borderRadius expects a radius value as a string or number as the second argument.

`,35:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,36:`Property must be a string value.

`,37:`Syntax Error at %s.

`,38:`Formula contains a function that needs parentheses at %s.

`,39:`Formula is missing closing parenthesis at %s.

`,40:`Formula has too many closing parentheses at %s.

`,41:`All values in a formula must have the same unit or be unitless.

`,42:`Please provide a number of steps to the modularScale helper.

`,43:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,44:`Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,45:`Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,46:`Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,47:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,48:`fromSize and toSize must be provided as stringified numbers with the same units.

`,49:`Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,50:`Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,51:`Expects the first argument object to have the properties prop, fromSize, and toSize.

`,52:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,53:`fontFace expects localFonts to be an array.

`,54:`fontFace expects fileFormats to be an array.

`,55:`fontFace expects a name of a font-family.

`,56:`linearGradient requries at least 2 color-stops to properly render.

`,57:`radialGradient requries at least 2 color-stops to properly render.

`,58:`Please supply a filename to retinaImage() as the first argument.

`,59:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,60:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",61:`Property must be a string value.

`,62:`borderRadius expects a radius value as a string or number as the second argument.

`,63:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,64:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,65:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,66:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,67:`You must provide a template to this method.

`,68:`You passed an unsupported selector state to this method.

`,69:`Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,70:`Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,71:`Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,72:`Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,73:`Please provide a valid CSS variable.

`,74:`CSS variable not found and no default was provided.

`,75:`important requires a valid style object, got a %s instead.

`,76:`fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,77:`remToPx expects a value in "rem" but you provided it in "%s".

`,78:`base must be set in "px" or "%" but you set it in "%s".
`};function Z(){for(var e=arguments.length,a=new Array(e),r=0;r<e;r++)a[r]=arguments[r];var t=a[0],n=[],s;for(s=1;s<a.length;s+=1)n.push(a[s]);return n.forEach(function(i){t=t.replace(/%[a-z]/,i)}),t}o(Z,"format");var p=(function(e){K(a,e);function a(r){for(var t,n=arguments.length,s=new Array(n>1?n-1:0),i=1;i<n;i++)s[i-1]=arguments[i];return t=e.call(this,Z.apply(void 0,[pe[r]].concat(s)))||this,J(t)}return o(a,"PolishedError"),a})(F(Error));function w(e){return Math.round(e*255)}o(w,"colorToInt");function W(e,a,r){return w(e)+","+w(a)+","+w(r)}o(W,"convertToInt");function y(e,a,r,t){if(t===void 0&&(t=W),a===0)return t(r,r,r);var n=(e%360+360)%360/60,s=(1-Math.abs(2*r-1))*a,i=s*(1-Math.abs(n%2-1)),f=0,u=0,d=0;n>=0&&n<1?(f=s,u=i):n>=1&&n<2?(f=i,u=s):n>=2&&n<3?(u=s,d=i):n>=3&&n<4?(u=i,d=s):n>=4&&n<5?(f=i,d=s):n>=5&&n<6&&(f=s,d=i);var g=r-s/2,m=f+g,c=u+g,_=d+g;return t(m,c,_)}o(y,"hslToRgb");var L={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function ee(e){if(typeof e!="string")return e;var a=e.toLowerCase();return L[a]?"#"+L[a]:e}o(ee,"nameToHex");var ce=/^#[a-fA-F0-9]{6}$/,be=/^#[a-fA-F0-9]{8}$/,ge=/^#[a-fA-F0-9]{3}$/,me=/^#[a-fA-F0-9]{4}$/,E=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,he=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,ve=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,ye=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function T(e){if(typeof e!="string")throw new p(3);var a=ee(e);if(a.match(ce))return{red:parseInt(""+a[1]+a[2],16),green:parseInt(""+a[3]+a[4],16),blue:parseInt(""+a[5]+a[6],16)};if(a.match(be)){var r=parseFloat((parseInt(""+a[7]+a[8],16)/255).toFixed(2));return{red:parseInt(""+a[1]+a[2],16),green:parseInt(""+a[3]+a[4],16),blue:parseInt(""+a[5]+a[6],16),alpha:r}}if(a.match(ge))return{red:parseInt(""+a[1]+a[1],16),green:parseInt(""+a[2]+a[2],16),blue:parseInt(""+a[3]+a[3],16)};if(a.match(me)){var t=parseFloat((parseInt(""+a[4]+a[4],16)/255).toFixed(2));return{red:parseInt(""+a[1]+a[1],16),green:parseInt(""+a[2]+a[2],16),blue:parseInt(""+a[3]+a[3],16),alpha:t}}var n=E.exec(a);if(n)return{red:parseInt(""+n[1],10),green:parseInt(""+n[2],10),blue:parseInt(""+n[3],10)};var s=he.exec(a.substring(0,50));if(s)return{red:parseInt(""+s[1],10),green:parseInt(""+s[2],10),blue:parseInt(""+s[3],10),alpha:parseFloat(""+s[4])>1?parseFloat(""+s[4])/100:parseFloat(""+s[4])};var i=ve.exec(a);if(i){var f=parseInt(""+i[1],10),u=parseInt(""+i[2],10)/100,d=parseInt(""+i[3],10)/100,g="rgb("+y(f,u,d)+")",m=E.exec(g);if(!m)throw new p(4,a,g);return{red:parseInt(""+m[1],10),green:parseInt(""+m[2],10),blue:parseInt(""+m[3],10)}}var c=ye.exec(a.substring(0,50));if(c){var _=parseInt(""+c[1],10),fe=parseInt(""+c[2],10)/100,ue=parseInt(""+c[3],10)/100,G="rgb("+y(_,fe,ue)+")",S=E.exec(G);if(!S)throw new p(4,a,G);return{red:parseInt(""+S[1],10),green:parseInt(""+S[2],10),blue:parseInt(""+S[3],10),alpha:parseFloat(""+c[4])>1?parseFloat(""+c[4])/100:parseFloat(""+c[4])}}throw new p(5)}o(T,"parseToRgb");function ae(e){var a=e.red/255,r=e.green/255,t=e.blue/255,n=Math.max(a,r,t),s=Math.min(a,r,t),i=(n+s)/2;if(n===s)return e.alpha!==void 0?{hue:0,saturation:0,lightness:i,alpha:e.alpha}:{hue:0,saturation:0,lightness:i};var f,u=n-s,d=i>.5?u/(2-n-s):u/(n+s);switch(n){case a:f=(r-t)/u+(r<t?6:0);break;case r:f=(t-a)/u+2;break;default:f=(a-r)/u+4;break}return f*=60,e.alpha!==void 0?{hue:f,saturation:d,lightness:i,alpha:e.alpha}:{hue:f,saturation:d,lightness:i}}o(ae,"rgbToHsl");function N(e){return ae(T(e))}o(N,"parseToHsl");var Ce=o(function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},"reduceHexValue"),$=Ce;function b(e){var a=e.toString(16);return a.length===1?"0"+a:a}o(b,"numberToHex");function B(e){return b(Math.round(e*255))}o(B,"colorToHex");function re(e,a,r){return $("#"+B(e)+B(a)+B(r))}o(re,"convertToHex");function C(e,a,r){return y(e,a,r,re)}o(C,"hslToHex");function te(e,a,r){if(typeof e=="number"&&typeof a=="number"&&typeof r=="number")return C(e,a,r);if(typeof e=="object"&&a===void 0&&r===void 0)return C(e.hue,e.saturation,e.lightness);throw new p(1)}o(te,"hsl");function oe(e,a,r,t){if(typeof e=="number"&&typeof a=="number"&&typeof r=="number"&&typeof t=="number")return t>=1?C(e,a,r):"rgba("+y(e,a,r)+","+t+")";if(typeof e=="object"&&a===void 0&&r===void 0&&t===void 0)return e.alpha>=1?C(e.hue,e.saturation,e.lightness):"rgba("+y(e.hue,e.saturation,e.lightness)+","+e.alpha+")";throw new p(2)}o(oe,"hsla");function I(e,a,r){if(typeof e=="number"&&typeof a=="number"&&typeof r=="number")return $("#"+b(e)+b(a)+b(r));if(typeof e=="object"&&a===void 0&&r===void 0)return $("#"+b(e.red)+b(e.green)+b(e.blue));throw new p(6)}o(I,"rgb");function x(e,a,r,t){if(typeof e=="string"&&typeof a=="number"){var n=T(e);return"rgba("+n.red+","+n.green+","+n.blue+","+a+")"}else{if(typeof e=="number"&&typeof a=="number"&&typeof r=="number"&&typeof t=="number")return t>=1?I(e,a,r):"rgba("+e+","+a+","+r+","+t+")";if(typeof e=="object"&&a===void 0&&r===void 0&&t===void 0)return e.alpha>=1?I(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")"}throw new p(7)}o(x,"rgba");var xe=o(function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},"isRgb"),Se=o(function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&typeof e.alpha=="number"},"isRgba"),we=o(function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},"isHsl"),Be=o(function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&typeof e.alpha=="number"},"isHsla");function q(e){if(typeof e!="object")throw new p(8);if(Se(e))return x(e);if(xe(e))return I(e);if(Be(e))return oe(e);if(we(e))return te(e);throw new p(8)}o(q,"toColorString");function U(e,a,r){return o(function(){var t=r.concat(Array.prototype.slice.call(arguments));return t.length>=a?e.apply(this,t):U(e,a,t)},"fn")}o(U,"curried");function j(e){return U(e,e.length,[])}o(j,"curry");function R(e,a,r){return Math.max(e,Math.min(a,r))}o(R,"guard");function ne(e,a){if(a==="transparent")return a;var r=N(a);return q(h({},r,{lightness:R(0,1,r.lightness-parseFloat(e))}))}o(ne,"darken");var ke=j(ne),Fe=ke;function se(e,a){if(a==="transparent")return a;var r=N(a);return q(h({},r,{lightness:R(0,1,r.lightness+parseFloat(e))}))}o(se,"lighten");var Ie=j(se),Pe=Ie;function ie(e,a){if(a==="transparent")return a;var r=T(a),t=typeof r.alpha=="number"?r.alpha:1,n=h({},r,{alpha:R(0,1,+(t*100-parseFloat(e)*100).toFixed(2)/100)});return x(n)}o(ie,"transparentize");var Te=j(ie),je=Te,l={secondary:"#029CFD",lightest:"#FFFFFF",mediumlight:"#ECF4F9",medium:"#D9E8F2",mediumdark:"#73828C",dark:"#5C6870",darkest:"#2E3438",border:"hsla(203, 50%, 30%, 0.15)"},Y={app:"#F6F9FC",hoverable:je(.9,l.secondary)},P={fonts:{base:['"Nunito Sans"',"-apple-system",'".SFNSText-Regular"','"San Francisco"',"BlinkMacSystemFont",'"Segoe UI"','"Helvetica Neue"',"Helvetica","Arial","sans-serif"].join(", "),mono:["ui-monospace","Menlo","Monaco",'"Roboto Mono"','"Oxygen Mono"','"Ubuntu Monospace"','"Source Code Pro"','"Droid Sans Mono"','"Courier New"',"monospace"].join(", ")}},Re={base:"dark",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:"#222425",appContentBg:"#1B1C1D",appPreviewBg:l.lightest,appBorderColor:"rgba(255,255,255,.1)",appBorderRadius:4,fontBase:P.fonts.base,fontCode:P.fonts.mono,textColor:"#C9CDCF",textInverseColor:"#222425",textMutedColor:"#798186",barTextColor:l.mediumdark,barHoverColor:l.secondary,barSelectedColor:l.secondary,barBg:"#292C2E",buttonBg:"#222425",buttonBorder:"rgba(255,255,255,.1)",booleanBg:"#222425",booleanSelectedBg:"#2E3438",inputBg:"#1B1C1D",inputBorder:"rgba(255,255,255,.1)",inputTextColor:l.lightest,inputBorderRadius:4},Me=Re,_e={base:"light",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:Y.app,appContentBg:l.lightest,appPreviewBg:l.lightest,appBorderColor:l.border,appBorderRadius:4,fontBase:P.fonts.base,fontCode:P.fonts.mono,textColor:l.darkest,textInverseColor:l.lightest,textMutedColor:l.dark,barTextColor:l.mediumdark,barHoverColor:l.secondary,barSelectedColor:l.secondary,barBg:l.lightest,buttonBg:Y.app,buttonBorder:l.medium,booleanBg:l.mediumlight,booleanSelectedBg:l.lightest,inputBg:l.lightest,inputBorder:l.border,inputTextColor:l.darkest,inputBorderRadius:4},V=_e,ze=(()=>{let e;return typeof window<"u"?e=window:typeof globalThis<"u"?e=globalThis:typeof global<"u"?e=global:typeof self<"u"?e=self:e={},e})();const{logger:Ee}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var{window:O}=ze,Oe=o(e=>typeof e!="string"?(Ee.warn(`Color passed to theme object should be a string. Instead ${e}(${typeof e}) was passed.`),!1):!0,"isColorString"),De=o(e=>!/(gradient|var|calc)/.test(e),"isValidColorForPolished"),He=o((e,a)=>e==="darken"?x(`${Fe(1,a)}`,.95):e==="lighten"?x(`${Pe(1,a)}`,.95):a,"applyPolished"),le=o(e=>a=>{if(!Oe(a)||!De(a))return a;try{return He(e,a)}catch{return a}},"colorFactory");le("lighten");le("darken");var $e=o(()=>!O||!O.matchMedia?"light":O.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light","getPreferredColorScheme"),D={light:V,dark:Me,normal:V},H=$e(),M=o((e={base:H},a)=>{let r={...D[H],...D[e.base]||{},...e,base:D[e.base]?e.base:H};return{...a,...r,barSelectedColor:e.barSelectedColor||r.colorSecondary}},"create");M({base:"dark",brandTitle:"Privateers UI",brandUrl:"https://privateers-ui.vercel.app",brandTarget:"_self",fontBase:'"Figtree", ui-sans-serif, system-ui, sans-serif',fontCode:'"Geist Mono", ui-monospace, monospace',colorPrimary:"#818cf8",colorSecondary:"#6366f1",appBg:"#09090b",appContentBg:"#18181b",appPreviewBg:"#09090b",appBorderColor:"#27272a",appBorderRadius:8,textColor:"#fafafa",textInverseColor:"#09090b",textMutedColor:"#a1a1aa",barTextColor:"#a1a1aa",barSelectedColor:"#818cf8",barHoverColor:"#fafafa",barBg:"#18181b",inputBg:"#27272a",inputBorder:"#3f3f46",inputTextColor:"#fafafa",inputBorderRadius:6,booleanBg:"#27272a",booleanSelectedBg:"#6366f1",gridCellSize:10});const Ae=M({base:"light",brandTitle:"Privateers UI",brandUrl:"https://privateers-ui.vercel.app",brandTarget:"_self",fontBase:'"Figtree", ui-sans-serif, system-ui, sans-serif',fontCode:'"Geist Mono", ui-monospace, monospace',colorPrimary:"#6366f1",colorSecondary:"#4f46e5",appBg:"#fafafa",appContentBg:"#ffffff",appPreviewBg:"#ffffff",appBorderColor:"#e4e4e7",appBorderRadius:8,textColor:"#18181b",textInverseColor:"#fafafa",textMutedColor:"#71717a",barTextColor:"#71717a",barSelectedColor:"#6366f1",barHoverColor:"#18181b",barBg:"#fafafa",inputBg:"#ffffff",inputBorder:"#e4e4e7",inputTextColor:"#18181b",inputBorderRadius:6,booleanBg:"#e4e4e7",booleanSelectedBg:"#6366f1",gridCellSize:10});M({base:"light",brandTitle:"DIS/CREADIS Design System",brandUrl:"https://creadis.com",brandTarget:"_blank",fontBase:'"Inter", ui-sans-serif, system-ui, sans-serif',fontCode:'"JetBrains Mono", ui-monospace, monospace',colorPrimary:"#00A5A5",colorSecondary:"#003366",appBg:"#f8fafc",appContentBg:"#ffffff",appPreviewBg:"#ffffff",appBorderColor:"#e2e8f0",appBorderRadius:6,textColor:"#1e293b",textInverseColor:"#f8fafc",textMutedColor:"#64748b",barTextColor:"#64748b",barSelectedColor:"#003366",barHoverColor:"#1e293b",barBg:"#f8fafc",inputBg:"#ffffff",inputBorder:"#e2e8f0",inputTextColor:"#1e293b",inputBorderRadius:4,booleanBg:"#e2e8f0",booleanSelectedBg:"#003366",gridCellSize:10});M({base:"dark",brandTitle:"DIS/CREADIS Design System",brandUrl:"https://creadis.com",brandTarget:"_blank",fontBase:'"Inter", ui-sans-serif, system-ui, sans-serif',fontCode:'"JetBrains Mono", ui-monospace, monospace',colorPrimary:"#14b8a6",colorSecondary:"#4a90c2",appBg:"#0f172a",appContentBg:"#1e293b",appPreviewBg:"#0f172a",appBorderColor:"#334155",appBorderRadius:6,textColor:"#f1f5f9",textInverseColor:"#0f172a",textMutedColor:"#94a3b8",barTextColor:"#94a3b8",barSelectedColor:"#14b8a6",barHoverColor:"#f1f5f9",barBg:"#1e293b",inputBg:"#334155",inputBorder:"#475569",inputTextColor:"#f1f5f9",inputBorderRadius:4,booleanBg:"#334155",booleanSelectedBg:"#14b8a6",gridCellSize:10});const qe={parameters:{docs:{theme:Ae},backgrounds:{default:"light",values:[{name:"light",value:"#ffffff"},{name:"dark",value:"#09090b"},{name:"dis-light",value:"#f8fafc"},{name:"dis-dark",value:"#0f172a"}]},controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},layout:"centered"},decorators:[(e,a)=>{const r=a.globals.theme??"light",t=a.globals.brand??"privateers",n=r==="dark",s=t==="dis-creadis"?"brand-dis-creadis":"";return z.jsx("div",{className:`${n?"dark":""} ${s}`.trim(),children:z.jsx("div",{className:"bg-background text-foreground p-4 min-h-[100px]",children:z.jsx(e,{})})})}],globalTypes:{brand:{name:"Brand",description:"Brand theme",defaultValue:"privateers",toolbar:{icon:"paintbrush",items:[{value:"privateers",title:"Privateers"},{value:"dis-creadis",title:"DIS/CREADIS"}],showName:!0,dynamicTitle:!0}},theme:{name:"Theme",description:"Color theme",defaultValue:"light",toolbar:{icon:"circlehollow",items:[{value:"light",icon:"sun",title:"Light"},{value:"dark",icon:"moon",title:"Dark"}],showName:!0,dynamicTitle:!0}}}};export{qe as default};
