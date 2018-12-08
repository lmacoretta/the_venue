import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../utils/MyButton';

class Discount extends Component {

   state = {
      discountStart: 0,
      discountEnd: 30
   }

   porcentage = () => {
      if (this.state.discountStart < this.state.discountEnd) {
         this.setState({
            discountStart: this.state.discountStart + 1
         })
      }
   }

   componentDidUpdate() {
      setTimeout(() => {
         this.porcentage();
      }, 30);
   }


   render() {
      return (
         <div className="center_wrapper">
            <div className="discount_wrapper">

               <Fade
                  onReveal={() => this.porcentage()}
               >
                  <div className="discount_porcentage">
                     <span>{this.state.discountStart}%</span>
                     <span>Off</span>
                  </div>
               </Fade>

               <Slide right>
                  <div className="discount_description">
                     <h3>Purchase ticket before 20th JUNE</h3>
                     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat explicabo id quod, praesentium fugit porro impedit vel nulla dignissimos minus adipisci quibusdam obcaecati illum maxime minima. Corrupti quis est vitae.</p>

                     <div>
                        <MyButton
                           text="Purchase tickets"
                           bck="#ffa800"
                           color="#fff"
                           link="https://www.google.com/"
                        />
                     </div>
                  </div>
               </Slide>

            </div>
         </div>
      );
   }
}

export default Discount;