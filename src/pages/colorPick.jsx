/*
 * @Author: wj77998
 * @Date:   2017-06-20 19:21:54
 * @Email:  wj77998@qq.com
 * @Last Modified by:   wj77998
 * @Last Modified time: 2017-06-20 19:22:21
 */

'use strict';


import React, { Component, PropTypes } from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'
import colors from './../lib/colors'

export default class ColorPick extends Component {
    constructor(props) {
        super(props);
        let deColor = props.defaultValue || '';
        let color = '',_color = '';
        if(deColor){
        	color = this.hexToRgb(deColor);
        	_color = this.getRGBA(color);
        }
        
        this.state = {
            displayColorPicker: false,
            color: _color
        }
    }
    componentWillReceiveProps(nextProps){
    	let deColor = nextProps.defaultValue || '';
        let color = '',_color = '';
        if(deColor){
        	color = this.hexToRgb(deColor);
        	_color = this.getRGBA(color);
        }
        this.setState({
        	color : _color
        });
    }
    getRGBA(color) { //获取rgba值
        const CSSINTEGER = "[-\\+]?\\d+%?";
        const CSSNUMBER = "[-\\+]?\\d*\\.\\d+%?";
        const CSSUNIT = "(?:" + CSSNUMBER + ")|(?:" + CSSINTEGER + ")";
        const rgb = new RegExp(`rgb[\\s|\\(]+(${CSSUNIT})[,|\\s]+(${CSSUNIT})[,|\\s]+(${CSSUNIT})\\s*\\)?`);
        const rgba = new RegExp(`rgba[\\s|\\(]+(${CSSUNIT})[,|\\s]+(${CSSUNIT})[,|\\s]+(${CSSUNIT})[,|\\s]+(${CSSUNIT})\\s*\\)?`);
        let _color = {
            r: 0,
            g: 0,
            b: 0,
            a: 1
        }
        const _rgb = rgb.exec(color);
        const _rgba = rgba.exec(color);
        if (_rgb !== null) {
            _color.r = parseFloat(_rgb[1]);
            _color.g = parseFloat(_rgb[2]);
            _color.b = parseFloat(_rgb[3]);
        }
        if (_rgba !== null) {
            _color.r = parseFloat(_rgba[1]);
            _color.g = parseFloat(_rgba[2]);
            _color.b = parseFloat(_rgba[3]);
            _color.a = parseFloat(_rgba[4]);
        }
        return _color;
    }
    getStringColor(color) { //获取单词字符串颜色
        for (var prop in colors) {
            if (colors.hasOwnProperty(prop)) {
                if (prop == color) {
                    return `#${colors[prop]}`
                }
            }
        }
        return color;
    }
    hexToRgb(color) { //hex值转rgb  
        const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
        let sColor = color.toLowerCase();
        sColor = this.getStringColor(sColor);
        if (sColor && reg.test(sColor)) {
            if (sColor.length === 4) {
                let sColorNew = "#";
                for (let i = 1; i < 4; i += 1) {
                    sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
                }
                sColor = sColorNew;
            }
            //处理六位的颜色值  
            let sColorChange = [];
            for (let i = 1; i < 7; i += 2) {
                sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
            }
            return "rgb(" + sColorChange.join(",") + ")";
        } else {
            return sColor;
        }
    }
    handleClick = () => {
        this.setState({
            displayColorPicker: !this.state.displayColorPicker
        })
    };

    handleClose = () => {
        this.setState({
            displayColorPicker: false
        })
    };

    handleChange = (color) => {
        this.setState({
            color: color.rgb
        });
        this.props.onChange(`rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`)
    };

    render() {
        const { color } = this.state;
        const _renderColor = color == "" ? "transparent" : `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`
        const styles = reactCSS({
            'default': {
            	sppreview : {
            		position: "relative",
				    width: "25px",
				    height: "20px",
				    border: "solid 1px #222",
				    marginRight: "5px",
				    float: "left",
				    zIndex: 0,
				    backgroundImage: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==)"
            	},
                color: {
                    display: "block",
				    position: "absolute",
				    top: 0,
				    left: 0,
				    bottom: 0,
				    right: 0,
                    background: `${_renderColor}`
                },
                swatch: {
                    margin: 0,
				    overflow: 'hidden',
				    cursor: 'pointer',
				    padding: '4px',
				    display: 'inline-block',
				    border: 'solid 1px #91765d',
				    background: '#eee',
				    color: '#333',
				    verticalAlign: 'middle',
                },
                popover: {
                    position: 'absolute',
                    zIndex: '2',
                },
                cover: {
                    position: 'fixed',
                    top: '0px',
                    right: '0px',
                    bottom: '0px',
                    left: '0px',
                },
                spdd : {
                	padding: "2px 0",
				    height: "16px",
				    lineHeight: "16px",
				    float: "left",
				    fontSize: "10px"
                }
            },
        });

        return ( 
        	<div>
		        <div style={ styles.swatch } onClick={ this.handleClick }>
		        	<div style={styles.sppreview}>
		          		<div style={ styles.color } />
		          	</div>
		          	<div style={ styles.spdd }>▼</div>
		        </div>
		        { this.state.displayColorPicker ? <div style={ styles.popover }>
		          	<div style={ styles.cover } onClick={ this.handleClose }/>
		          	<SketchPicker color={ color } presetColors={["transparent","white","#f42f34","black","yellow","green","blue","pink"]} onChange={ this.handleChange } />
		        </div> : null }

		    </div>
            )
        }
    }
