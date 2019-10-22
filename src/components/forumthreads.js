import React from "react";
import { Threads } from "./threads";

export class ForumThreads extends React.Component {
  render() {

    // console.log(this.props.currentthread)
    var fireobj = this.props.threads
    console.log(fireobj)
    return (
      <div className="forum-threads">
        <h2>TOPICS</h2>
        {fireobj
        // .sort(function(x,y) {
        //   return y.idx - x.idx
        // })
        
        .map((value, idx) => (
        
          <Threads key={idx} threads1={value}  removeThreads={(threadRemoved) => {
            this.removeComments(threadRemoved)
          }} 
          threadClicked={(clickedThread) =>{
            this.threadClicked(clickedThread)
          }} currentcomment={this.props.currentcomment} 
          
          {...this.props}
          />
        

        )).reverse()
        
        }

        {/* {Object.values(fireobj)
        .sort(function(x,y) {
          return y.id - x.id
        })
        
        .map((value,idx) => {
          return(
            <Threads key={idx} threads1={value}  removeThreads={(threadRemoved) => {
              this.removeComments(threadRemoved)
            }} 
            threadClicked={(clickedThread) =>{
              this.threadClicked(clickedThread)
            }} currentcomment={this.props.currentcomment} 
            
            {...this.props} */}
            
          
        
      </div>
    )
  }
}
