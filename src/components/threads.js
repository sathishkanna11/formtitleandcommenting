import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom"
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { MdDelete } from "react-icons/md"
import { GoComment } from "react-icons/go";




export class Threads extends React.Component {
  
  render() {
    const comments = this.props.currentcomment
    const threads = this.props.threads1;
    console.log(threads)
    var one = threads.id
   var   newArray = this.props.comments.filter(function (el){
     return el.source === one
   })
  
    return (
      <div class="row" >
        <div class="col-8 ">
          <h4 className="row container topic" style={{color:"red",fontFamily:"Trebuchet MS",textTransform:"capitalize"}}>
          {threads.name}</h4>
          <div className="">
          <Link onClick={()=>{
            this.props.threadClicked(threads)
          }} className="topic row container" style={{textAlign:"justify",fontFamily:"Trebuchet MS",color:"gray",textTransform:"capitalize"}}>{threads.title}
          {/* {threads.title.substr(0,45)} */}
          </Link>
          </div>
          
          <hr />
        </div>
        <div className="col-2" style={{margin:"auto"}}>
          
        <div className="speech-bubble" ><span className="speech-bubble-text">{newArray.length}</span></div>
        </div>
        <div class="col-2 remove-button">
          {/* <button className="btn btn-primary remove-button" style={{fontSize:"10px",marginBottom:"20px"}}
          onClick ={()=>{
            this.props.removeThreads(threads)
          }}
          >remove</button> */}
              
               <button onClick={()=>{
            this.props.removeThreads(threads.id)
          }} className="btn " style={{float:"right",display:"flex"}} aria-label="delete">
          <MdDelete className="delete-btn-threads"  />
        </button>
  
        </div>
        
      </div>
    );
  }
}

