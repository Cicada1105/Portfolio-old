import React from 'react';
import './index.css';

class Canvas extends React.Component {
  constructor() {
    super();
    
    this.cvsRef = React.createRef();
    this.state = {
      id:"blueFade",
      colorStop:[
        {
          stop:0,
          color:"#00b8d4"
        },
        {
          stop:1,
          color:"#000080"
        }
      ],
    }
  }
  componentDidMount() {
    this.drawBlueFade();
  }
  drawBlueFade = () => {
    let blueFadeCvs = this.cvsRef.current;
    let blueFadeCtx = blueFadeCvs.getContext('2d');

    let grd = blueFadeCtx.createLinearGradient(0,0,0,150);
    this.state.colorStop.map(stop => {
      return grd.addColorStop(stop.stop, stop.color);
    });
    

    blueFadeCtx.fillStyle = grd;
    blueFadeCtx.fillRect(0,0,300,150);
  }

	render() {
		return (
      <canvas id={ this.state.id } ref={ this.cvsRef }></canvas>
		);
	}
}

export { Canvas }