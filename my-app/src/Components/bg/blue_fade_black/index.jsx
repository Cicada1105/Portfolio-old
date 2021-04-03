import React from 'react';
import './index.css';

class BlueFadeBlack extends React.Component {
	render() {
		return (
      <React.Fragment>
        <BottomFade svgID="btmBlackFadeSvg_1" gradientID="bottomFade_1" from="#021131" to="#010d31"/>
        <BottomFade svgID="btmBlackFadeSvg_2" gradientID="bottomFade_2" from="#010d31" to="#010a24" />
        <BottomFade svgID="btmBlackFadeSvg_3" gradientID="bottomFade_3" from="#010a24" to="#010617" />
      </React.Fragment>
		);
	}
}

class Fade extends React.Component {
  render() {
    return (
      <svg className={ this.props.svg.class } id={ this.props.svg.id }>
        <defs>
          <linearGradient id={ this.props.svg.defs.linearGradient.id } gradientTransform={ this.props.svg.defs.linearGradient.gradient }>
            { this.props.svg.defs.linearGradient.stop.map((stopEl, i) => 
                <stop key={ i } offset={ stopEl.offset } stopColor={ stopEl.color } stopOpacity={ stopEl.opacity } />
              )
            }
          </linearGradient>
        </defs>
        <rect id={ this.props.svg.rect.id } x={ this.props.svg.rect.x } y={ this.props.svg.rect.y } 
          width={ this.props.svg.rect.width } height={ this.props.svg.rect.height } fill={ this.props.svg.rect.fill } />
      </svg>
    );
  }
}

class BottomFade extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      svg: {
        class:"blueBlackFadeSvg",
        id:props.svgID,
        defs: {
          linearGradient: {
            id:props.gradientID,
            gradient:"rotate(90)",
            stop: [
              {
                offset:"0%",
                color:props.from,
                opacity:"0.9"
              },
              {
                offset:"95%",
                color:props.to,
                opacity:"1"
              }
            ]
          }
        },
        rect: {
          id:"bottomBlueBlackFade",
          x:"0",
          y:"0",
          width:"100%",
          height:"100%",
          fill:"url(#" + props.gradientID + ")"
        }
      }
    }
  }
  render() {
    return (
      <Fade svg={ this.state.svg } />
    );
  }
};

export { BlueFadeBlack };