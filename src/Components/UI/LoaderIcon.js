import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import {cardColorTheme} from '../ColorTheme'
import { Progress } from 'react-sweet-progress'
import "react-sweet-progress/lib/style.css"
import Loader from 'react-loader-spinner'

const LoaderIcon = ({ data }) => {

  const palette = cardColorTheme[localStorage.getItem("theme")];

  return (
    <center><Loader
    	type="ThreeDots"
    	color={palette.heading.color}
    	height={50}
    	width={50}
    /></center>
  );
};

export default LoaderIcon;
