import React, { Component } from "react";

import chairList from "../../data/danhSachGhe.json";
import Chair from "./Chair";

import "./style.scss";

export default class BaiTapDatGhe extends Component {
  renderContent = () => {
    return chairList.map((ele) => {
      return (
        <div key={ele.hang}>
          <div className="seat">{ele.hang}</div>
          {ele.danhSachGhe.map((chair, idx) => {
            return (
              <Chair
                key={chair.soGhe}
                hang={ele.hang}
                name={idx + 1}
                dangChon={chair.dangChon}
                daDat={chair.daDat}
              />
            );
          })}
        </div>
      );
    });
  };

  render() {
    return <div>{this.renderContent()}</div>;
  }
}
