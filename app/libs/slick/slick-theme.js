import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  charset: 'UTF-8',
  // Slider
  'slick-loading slick-list': {
    'background': '#fff url('./ajax-loader.gif') center center no-repeat'
  },
  // Icons
  'fontFace': {
    'fontFamily': ''slick'',
    'fontWeight': 'normal',
    'fontStyle': 'normal',
    'src': 'url('./fonts/slick.eot')',
    'src': 'url('./fonts/slick.eot?#iefix') format('embedded-opentype'), url('./fonts/slick.woff') format('woff'), url('./fonts/slick.ttf') format('truetype'), url('./fonts/slick.svg#slick') format('svg')'
  },
  // Arrows
  'slick-prev': {
    'fontSize': [{ 'unit': 'px', 'value': 0 }],
    'lineHeight': [{ 'unit': 'px', 'value': 0 }],
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 20 }],
    'height': [{ 'unit': 'px', 'value': 20 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'WebkitTransform': 'translate(0, -50%)',
    'MsTransform': 'translate(0, -50%)',
    'transform': 'translate(0, -50%)',
    'cursor': 'pointer',
    'color': 'transparent',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'outline': 'none',
    'background': 'transparent'
  },
  'slick-next': {
    'fontSize': [{ 'unit': 'px', 'value': 0 }],
    'lineHeight': [{ 'unit': 'px', 'value': 0 }],
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 20 }],
    'height': [{ 'unit': 'px', 'value': 20 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'WebkitTransform': 'translate(0, -50%)',
    'MsTransform': 'translate(0, -50%)',
    'transform': 'translate(0, -50%)',
    'cursor': 'pointer',
    'color': 'transparent',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'outline': 'none',
    'background': 'transparent'
  },
  'slick-prev:hover': {
    'color': 'transparent',
    'outline': 'none',
    'background': 'transparent'
  },
  'slick-prev:focus': {
    'color': 'transparent',
    'outline': 'none',
    'background': 'transparent'
  },
  'slick-next:hover': {
    'color': 'transparent',
    'outline': 'none',
    'background': 'transparent'
  },
  'slick-next:focus': {
    'color': 'transparent',
    'outline': 'none',
    'background': 'transparent'
  },
  'slick-prev:hover:before': {
    'opacity': '1'
  },
  'slick-prev:focus:before': {
    'opacity': '1'
  },
  'slick-next:hover:before': {
    'opacity': '1'
  },
  'slick-next:focus:before': {
    'opacity': '1'
  },
  'slick-prevslick-disabled:before': {
    'opacity': '.25'
  },
  'slick-nextslick-disabled:before': {
    'opacity': '.25'
  },
  'slick-prev:before': {
    'fontFamily': ''slick'',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'opacity': '.75',
    'color': 'white',
    'WebkitFontSmoothing': 'antialiased',
    'MozOsxFontSmoothing': 'grayscale'
  },
  'slick-next:before': {
    'fontFamily': ''slick'',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'opacity': '.75',
    'color': 'white',
    'WebkitFontSmoothing': 'antialiased',
    'MozOsxFontSmoothing': 'grayscale'
  },
  'slick-prev': {
    'left': [{ 'unit': 'px', 'value': -25 }]
  },
  '[dir='rtl'] slick-prev': {
    'right': [{ 'unit': 'px', 'value': -25 }],
    'left': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'slick-prev:before': {
    'content': ''←''
  },
  '[dir='rtl'] slick-prev:before': {
    'content': ''→''
  },
  'slick-next': {
    'right': [{ 'unit': 'px', 'value': -25 }]
  },
  '[dir='rtl'] slick-next': {
    'right': [{ 'unit': 'string', 'value': 'auto' }],
    'left': [{ 'unit': 'px', 'value': -25 }]
  },
  'slick-next:before': {
    'content': ''→''
  },
  '[dir='rtl'] slick-next:before': {
    'content': ''←''
  },
  // Dots
  'slick-dottedslick-slider': {
    'marginBottom': [{ 'unit': 'px', 'value': 30 }]
  },
  'slick-dots': {
    'position': 'absolute',
    'bottom': [{ 'unit': 'px', 'value': -25 }],
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'listStyle': 'none',
    'textAlign': 'center'
  },
  'slick-dots li': {
    // position: relative;

    display: inline-block;

    width: 20px;
    height: 20px;
    margin: 0 5px;
    padding: 0;

    cursor: pointer;
    'position': 'relative',
    'display': 'inline-block',
    'width': [{ 'unit': 'px', 'value': 20 }],
    'height': [{ 'unit': 'px', 'value': 20 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }],
    'padding': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }],
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }],
    'cursor': 'pointer',
    'borderRadius': '100%'
  },
  'slick-dots li button': {
    'fontSize': [{ 'unit': 'px', 'value': 0 }],
    'lineHeight': [{ 'unit': 'px', 'value': 0 }],
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 10 }],
    'height': [{ 'unit': 'px', 'value': 10 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'border': [{ 'unit': 'px', 'value': 0 }],
    'borderRadius': '100%',
    'cursor': 'pointer',
    'color': 'transparent',
    'outline': 'none',
    'background': 'transparent',
    // font-size: 0;
    line-height: 0;

    display: block;

    width: 20px;
    height: 20px;
    padding: 5px;

    cursor: pointer;

    color: transparent;
    border: 0;
    outline: none;
    background: transparent;
  },
  'slick-dots li button:hover': {
    'outline': 'none'
  },
  'slick-dots li button:focus': {
    'outline': 'none'
  },
  'slick-dots li button:hover:before': {
    'opacity': '0'
  },
  'slick-dots li button:focus:before': {
    'opacity': '0'
  },
  'slick-dots li button:before': {
    'fontFamily': ''slick'',
    'fontSize': [{ 'unit': 'px', 'value': 6 }],
    'lineHeight': [{ 'unit': 'px', 'value': 20 }],
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 20 }],
    'height': [{ 'unit': 'px', 'value': 20 }],
    'content': ''•'',
    'textAlign': 'center',
    'opacity': '0',
    'color': 'black',
    'WebkitFontSmoothing': 'antialiased',
    'MozOsxFontSmoothing': 'grayscale'
  },
  'slick-dots lislick-active button:before': {
    'opacity': '0',
    'color': 'black'
  },
  'slick-dots lislick-active button': {
    'background': '#fff'
  }
});
