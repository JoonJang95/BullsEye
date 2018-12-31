// import React from 'react';
// import $ from 'jquery';
// import scrollTo from 'jquery.scrollto';

// class ViewHistory extends React.Component {
//   constructor(props) {
//     super(props);

//     this.renderScrollButtons = this.renderScrollButtons.bind(this);
//     this.removeScrollButtons = this.removeScrollButtons.bind(this);
//   }

//   renderScrollButtons() {
//     $('.scrollButton')
//       .css('border-color', '#666666')
//       .css('color', 'black');
//   }

//   removeScrollButtons() {
//     $('.scrollButton')
//       .css('border-color', 'transparent')
//       .css('color', 'transparent');
//   }

//   clickHandlerRight(e) {
//     $('#relatedItemsList').scrollTo('max', 425);
//   }

//   clickHandlerLeft(e) {
//     $('#relatedItemsList').scrollTo(0, 425);
//   }

//   render() {
//     return (<div id="recommendationsProducts">
//       <div
//         class="scrollDiv1"
//         onMouseOver={this.renderScrollButtons}
//         onMouseLeave={this.removeScrollButtons}
//       >
//         <button class="scrollButton" onClick={this.clickHandlerLeft}>
//           &#8249;
//         </button>
//       </div>

//       <div
//         class="scrollDiv2"
//         onMouseOver={this.renderScrollButtons}
//         onMouseLeave={this.removeScrollButtons}
//       >
//         <button class="scrollButton scrollRight" onClick={this.clickHandlerRight}>
//           &#8250;
//         </button>
//       </div>
//       {/* <div id="circles">
//           <div id="circleScroller" />
//           <div id="circleScroller" />
//         </div> */}
//     </div>
//   }
// }

// // export default ViewHistory;
