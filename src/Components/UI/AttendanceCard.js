import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import {cardColorTheme} from '../ColorTheme'
import { Progress } from 'react-sweet-progress'
import "react-sweet-progress/lib/style.css"


const AttendanceCard = ({ data }) => {

  const palette = cardColorTheme[localStorage.getItem("theme")];

  const required=Math.ceil(Math.abs(3*data["Hours Conducted"]-4*(data["Hours Conducted"]-data["Hours Absent"])))  
  const bunks=Math.floor(Math.abs(((4*(data["Hours Conducted"]-data["Hours Absent"]))/3)-data["Hours Conducted"]))
  return (
    <div
      className="card"
      style={Object.assign(
        {},
        palette.fontColor,
        palette.frontCard,
        parseInt(data["%"]) < 50
          ? palette.danger
          : parseInt(data["%"]) < 75
          ? palette.warning
          : parseInt(data["%"]) < 100
          ? palette.safe
          : palette.safest
      )}
    >
      <div
        className="card-content"
        style={Object.assign({}, palette.fontColor, {
          padding: "1px 8px 4px 8px",
        })}
      >
        <h5 className="center-align truncate">{data["Course Title"]}</h5>
        <div className="center-align">
          <span>{data["Course Code"]}</span>
        </div>
      </div>
      <div
        className="card-action"
        style={Object.assign({}, palette.fontColor, {
          backgroundColor: "rgba(0,0,0,0)",
        })}
      >
        <div className="row">
          <div className="col s3 center" style={palette.fontColor}>
            <span>Conducted</span>
            <br />
            <span>{parseInt(data["Hours Conducted"])}</span>
          </div>
          <div className="col s3 center" style={palette.fontColor}>
            <span>Present </span>
            <br />
            <span>
              {parseInt(data["Hours Conducted"]) - parseInt(data["Hours Absent"])}
            </span>
          </div>
          <div className="col s2 center" style={palette.fontColor}>
            <span>Absent</span>
            <br />
            <span>{data["Hours Absent"]}</span>
          </div>
          <div className="col s2 center" style={palette.fontColor}>
            <span className="bold">{data["%"]<75?"Required":"Bunk"}</span>
            <br />
            <span>
              {data["%"]<75?required:bunks}
            </span>
          </div>
          <div className="col s2 center" style={palette.fontColor}>
            <span>{data["Room No"]}</span>
            <br />
            <span className="hide-on-med-and-up">-</span>
          </div>
        </div>
        <div className="row" style={{ marginBottom: "0" }}>
          <Progress
            className="col s10"
            style={{ color: "white" }}
            percent={data["%"]}
            theme={{
              success: {
                symbol: " ",
                color: "#FCC709",
              },
              active: {
                symbol: " ",
                color: "#6970DD",
              },
              default: {
                symbol: "😱",
                color: "#4565D3",
              },
            }}
          />
          <div className="col s2 percent" style={palette.fontColor}>
            {data["%"]}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceCard;
