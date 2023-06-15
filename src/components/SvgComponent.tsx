import React from "react";
import { SvgXml } from "react-native-svg";  
export default function SvgComponent(){  
  const svgMarkup = `
  <svg width="92" height="23" viewBox="0 0 92 23" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M0.830625 23C0.723958 23 0.670625 22.9467 0.670625 22.84L0.734625 0.855999C0.734625 0.770665 0.777292 0.727999 0.862625 0.727999L6.84663 0.695999C8.01996 0.674666 9.08663 0.952 10.0466 1.528C11.028 2.104 11.8066 2.88266 12.3826 3.864C12.9586 4.824 13.2466 5.89067 13.2466 7.064V16.248C13.2466 17.4853 12.948 18.616 12.3506 19.64C11.7533 20.6427 10.9533 21.4427 9.95063 22.04C8.94796 22.6373 7.81729 22.9467 6.55863 22.968L0.830625 23ZM4.57463 19.064H6.55863C7.34796 19.064 8.00929 18.7867 8.54263 18.232C9.09729 17.6773 9.37463 17.016 9.37463 16.248V7.032C9.37463 6.34933 9.11863 5.76267 8.60663 5.272C8.11596 4.76 7.52929 4.51467 6.84663 4.536L4.60663 4.568L4.57463 19.064ZM15.9244 23C15.8177 23 15.7644 22.9467 15.7644 22.84L15.7964 0.855999C15.7964 0.770665 15.839 0.727999 15.9244 0.727999H19.5084C19.5937 0.727999 19.6364 0.770665 19.6364 0.855999L19.6684 22.84C19.6684 22.9467 19.6257 23 19.5404 23H15.9244ZM25.4591 23C25.3951 23 25.3631 22.9573 25.3631 22.872L25.3951 13.784L21.1071 0.855999C21.0858 0.770665 21.1178 0.727999 21.2031 0.727999H24.7551C24.8618 0.727999 24.9258 0.770665 24.9471 0.855999L27.3151 9.464L29.7151 0.855999C29.7365 0.770665 29.7898 0.727999 29.8751 0.727999H33.4591C33.5445 0.727999 33.5765 0.770665 33.5551 0.855999L29.2351 13.656L29.2671 22.872C29.2671 22.9573 29.2245 23 29.1391 23H25.4591ZM35.6149 23C35.4442 23 35.3589 22.9253 35.3589 22.776L35.3269 0.983999C35.3269 0.813332 35.4122 0.727999 35.5829 0.727999H38.4629L43.8709 13.336L43.7109 0.983999C43.7109 0.813332 43.8069 0.727999 43.9989 0.727999H47.1669C47.2949 0.727999 47.3589 0.813332 47.3589 0.983999L47.3909 22.808C47.3909 22.936 47.3375 23 47.2309 23H44.4149L38.8789 11.224L39.1029 22.744C39.1029 22.9147 39.0069 23 38.8149 23H35.6149ZM50.4586 23C50.288 23 50.2026 22.9253 50.2026 22.776L50.1706 0.983999C50.1706 0.813332 50.256 0.727999 50.4266 0.727999H53.3066L58.7146 13.336L58.5546 0.983999C58.5546 0.813332 58.6506 0.727999 58.8426 0.727999H62.0106C62.1386 0.727999 62.2026 0.813332 62.2026 0.983999L62.2346 22.808C62.2346 22.936 62.1813 23 62.0746 23H59.2586L53.7226 11.224L53.9466 22.744C53.9466 22.9147 53.8506 23 53.6586 23H50.4586ZM65.1424 23C65.057 23 65.0144 22.9467 65.0144 22.84L65.0464 0.855999C65.0464 0.770665 65.089 0.727999 65.1744 0.727999H75.4464C75.5317 0.727999 75.5744 0.781332 75.5744 0.887999V4.472C75.5744 4.55733 75.5317 4.6 75.4464 4.6H68.8864V9.592H75.4464C75.5317 9.592 75.5744 9.63467 75.5744 9.72L75.6064 13.336C75.6064 13.4213 75.5637 13.464 75.4784 13.464H68.8864V19.064H75.4784C75.5637 19.064 75.6064 19.1173 75.6064 19.224V22.872C75.6064 22.9573 75.5637 23 75.4784 23H65.1424ZM78.5799 23C78.4945 23 78.4519 22.9467 78.4519 22.84L78.5159 0.855999C78.5159 0.770665 78.5585 0.727999 78.6439 0.727999H85.1079C86.2599 0.727999 87.3159 1.016 88.2759 1.592C89.2572 2.14667 90.0359 2.904 90.6119 3.864C91.1879 4.80267 91.4759 5.86933 91.4759 7.064C91.4759 7.85333 91.3585 8.568 91.1239 9.208C90.8892 9.82667 90.6119 10.36 90.2919 10.808C89.9719 11.2347 89.6839 11.5547 89.4279 11.768C90.5799 13.048 91.1559 14.552 91.1559 16.28L91.1879 22.84C91.1879 22.9467 91.1345 23 91.0279 23H87.4119C87.3265 23 87.2839 22.968 87.2839 22.904V16.28C87.2839 15.512 87.0065 14.8507 86.4519 14.296C85.9185 13.72 85.2572 13.432 84.4679 13.432H82.3559L82.3239 22.84C82.3239 22.9467 82.2812 23 82.1959 23H78.5799ZM82.3559 9.592H85.1079C85.7692 9.592 86.3559 9.34667 86.8679 8.856C87.3799 8.36533 87.6359 7.768 87.6359 7.064C87.6359 6.38133 87.3799 5.79467 86.8679 5.304C86.3772 4.81333 85.7905 4.568 85.1079 4.568H82.3559V9.592Z" fill="#313131"/>
	</svg>
  `;
  const SvgImage = () => <SvgXml xml={svgMarkup} width="94px" />;  

  return <SvgImage />;
}