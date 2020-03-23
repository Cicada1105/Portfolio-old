import React from 'react';
import './index.css';
import hor_side_dots from './imgs/hor_side_dots.png';
import inner_dots from './imgs/inner_dots.png';
import vert_side_dots from './imgs/vert_side_dots.png';
import corner_dots from './imgs/corner_dots.png';
import city_1_dots from './imgs/city_1_dots.png';
import city_2_dots from './imgs/city_2_dots.png';

class Dots extends React.Component {
  constructor() {
    super();

    this.state = {
      cluster:[
        {
          id:"topLeftDots",
          class:"dot_child"
        },
        {
          id:"btmRightDots",
          class:"dot_child"
        }
      ],
      dots:[
        {
          city:city_1_dots,
          id:"building_1",
          class:"dot_child"
        },
        {
          city:city_2_dots,
          id:"building_2",
          class:"dot_child"
        },
        {
          city:city_1_dots,
          id:"building_3",
          class:"dot_child"
        },
        {
          city:city_1_dots,
          id:"building_4",
          class:"dot_child"
        }
      ]
    }
  }
	render() {
		return (
      <React.Fragment>
        {
          this.state.cluster.map((cluster, i) => 
            <DotCluster key={ i } id={ cluster.id } class={ cluster.class } />
          )
        }
        {
          this.state.dots.map((dot, i) => 
            <Dot key={ i } id={ dot.id } class={ dot.class } city={ dot.city } />
          )
        }
      </React.Fragment>
		);
	}
}

class DotCluster extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id:props.id,
      class:props.class
    }
  }
  render() {
    return (
      <div id={ this.state.id } className={ this.state.class }>
        <img src={ corner_dots } id='corner' alt="Corner Dots" />
        <img src={ inner_dots } id='inner' alt="Inner Dots" />
        <img src={ vert_side_dots } id='vert' alt="Vertical Dots" />
        <img src={ hor_side_dots } id='hor' alt="Horizontal Dots" />
      </div>
    );
  }
}

class Dot extends React.Component {
  render() {
    return (
      <img src={ this.props.city } id={ this.props.id } className={ this.props.class } alt="Dot Buildings"/>
    );
  }
}
/*
      <!--Top most layer of background-->
      <div id="dots">
        <div id="topLeftDots" class="dot_child">
          <img src="./imgs/corner_dots.png" id="corner"/>
          <img src="./imgs/inner_dots.png" id="inner"/>
          <img src="./imgs/vert_side_dots.png" id="vert"/>
          <img src="./imgs/hor_side_dots.png" id="hor"/>
        </div>
        <div id="btmRightDots" class="dot_child">
          <img src="./imgs/corner_dots.png" id="corner"/>
          <img src="./imgs/inner_dots.png" id="inner"/>
          <img src="./imgs/vert_side_dots.png" id="vert"/>
          <img src="./imgs/hor_side_dots.png" id="hor"/>
        </div>
          <img src="./imgs/city_1_dots.png" id="building_1" class="dot_child"/>
          <img src="./imgs/city_2_dots.png" id="building_2" class="dot_child"/>
          <img src="./imgs/city_1_dots.png" id="building_3" class="dot_child"/>
          <img src="./imgs/city_1_dots.png" id="building_4" class="dot_child"/>
      </div>
*/
export { Dots };