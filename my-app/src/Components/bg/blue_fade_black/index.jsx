import React from 'react';
import './index.css';

class BlueFadeBlack extends React.Component {
	render() {
		return (
      <BottomFade />
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
  constructor() {
    super();
    this.state = {
      svg: {
        class:"blueBlackFadeSvg",
        id:"btmBlackFadeSvg",
        defs: {
          linearGradient: {
            id:"bottomFade",
            gradient:"rotate(90)",
            stop: [
              {
                offset:"0%",
                color:"#000e2c",
                opacity:"0.9"
              },
              {
                offset:"95%",
                color:"#000000",
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
          fill:"url('#bottomFade')"
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