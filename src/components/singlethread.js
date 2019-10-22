import React from "react";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { IoIosTrash } from "react-icons/io";
import { GoComment } from "react-icons/go";



export class SingleThread extends React.Component {


  handleSubmit=(e)=>{
    e.preventDefault();
    const station = this.props.currentthread
		const id = station.id
		const name = e.target.elements.commentname.value;
		const comment = e.target.elements.commentcomment.value;
		const comments ={
            source : id,
            name : name,
            comment : comment
            
        }
        if ( name && comment){
            this.props.onAddComment(comments)
        }
        e.target.elements.commentname.value ="";
        e.target.elements.commentcomment.value ="";
        console.log(comments)
}



  render() {
    const threads = this.props.currentthread
    // console.log(threads)
    var currenthreadshasvalue = (this.props.currentthread == "")
    // console.log(currenthreadshasvalue)
    // const threads2 = this.props.currentthread.id
    
    // const threads1 = this.props.currentcomment.forEach(element => {
    //   return element.id == threads2
    // });
    // console.log(threads1.length);
    // const arrayleng = threads1.length;
    // var lucky = threads1.filter(function(number){
    //   return number == threads2
    // });
    // console.log(threads);
    // console.log(this.props.currentcomment);
    // console.log(this.props.threads[0]);
    // var map = this.props.currentcomment.reduce(function(prev, cur) {
    //   prev[cur] = (prev[cur] || 0) + 1;
    //   return prev;
    // }, {});
  //   var thread1 = this.props.currentthread.id
  //  const map = this.props.currentcomment.map(comment => comment.filter(function(value){
  //     return value == thread1
  // })).length   ;            
  var one = this.props.currentthread.id 
   var   newArray = this.props.comments.filter(function (el){
     return el.titleid === one
   })
    // console.log(newArray.length)

    var commentscount = (newArray.length == 0)
    // console.log(commentscount)
    // var commentsthere ;
    // if ( newArray.length == 0){
    //   return "Be first to comment"
    // }
    // else{
    //   return "Comments:"
    // }
    // console.log(commentsthere)

    return (
      //   <div>
      //     {threads.map((threads, idx) => {
      //       return (
      //         <div class="row">
      //           <div
      //             class="col-sm-11"
      //             style={{
      //               // border: "2px solid #d3d3d3",
      //               marginLeft: "auto",
      //               marginRight: "auto",
      //               boxShadow: "0px 5px 10px grey",
      //               marginTop: "20px"
      //             }}
      //           >
      //             <h6 key={idx}>{threads.title}</h6>
      //             <hr />
      //             <p>COMMENTS</p>
      //             <hr />
      //             <p>
      //               {threads.comments.map((comment, idx) => {
      //                 return (
      //                   <div>
      //                     <ul>
      //                       <li>{comment.name}</li>
      //                       <li>{comment.comment}</li>
      //                     </ul>
      //                     <hr />

      //                   </div>
      //                 );
      //               })}
      //               <form>
      //                       <input type="text" placeholder="name" />
      //                       <input type="text" placeholder="waiting for your comment" />
      //                       <button>comment</button>
      //                     </form>
      //             </p>
      //           </div>
      //         </div>
      //       );
      //     })}
      //   </div>

      <div>
        { currenthreadshasvalue ? <p style={{color:"gray",marginTop:"70px",fontSize:"25px"}}>Go ahead and click a thread or create one</p> :
        <div class="row">
          
          <div
            class="col-sm-11"
            style={{
              // border: "2px solid #d3d3d3",
              marginLeft: "auto",
              marginRight: "auto",
              boxShadow: "0px 5px 10px grey",
              marginTop: "20px",
              borderRadius:"3px"
            }}
          >
            <h2></h2>
           
              
            <h4 className="singlethread-title" style={{padding:"10px",fontFamily:"Trebuchet MS",textTransform:"uppercase"}}>  {threads.title}</h4>
            <p className="singlethread-authorname" style={{fontFamily:"Trebuchet MS",textTransform:"capitalize",color:"Red"}}>
              <span style={{color:"gray"}}>Written By: </span>{threads.author}
            </p>
            <hr/>
            <p className="singlethread-description"style={{fontFamily:"Trebuchet MS",color:"black",textTransform:"initial",width:"95%",margin:"auto"}}>{threads.description}</p>
            <hr />

            <p  className="row singlethread-commenttitle" style={{fontFamily:"Trebuchet MS",width:"100%",marginLeft:"20px",color:"gray"}}>
              {/* COMMENTS: */}
            {commentscount ? "BE FIRST TO COMMENT:" : "COMMENTS:"}
            
            </p>
            <hr/>
           
           
            <div>
            {/* <GoComment style={{fontSize:"30px"}}></GoComment> */}
           
            </div>
            
            {/* <p>{newArray.length}</p> */}
            {/* <p>{datacnt}</p> */}
           
          
            {/* {this.props.currentthread.comments.map((thread)=>{
              console.log(thread);
            })} */}
              
         
             {this.props.comments.map((comment) => {if (comment.source == this.props.currentthread.id) {
              // console.log("1",Object.keys(comment.name).length);
              // console.log(this.props.currentcomment)
              //  console.log((comment.comment).length);
              // console.log(comment.titleid.length);

                      return (
                        <div className="singlethread-comments" style={{display:"table", margin:"auto auto", width:"90%",fontFamily:"Trebuchet MS"}} >
                            <div className="row">
                              <div className="col-10" style={{}}>
                              <p style={{float:"left",color:"red",textTransform:"uppercase"}}> {comment.name}</p>
                              </div>
                           
                            <button  className="btn col-2" aria-label="delete" onClick ={()=>{
            this.props.removeComments(comment.id)
          }} >
          <IoIosTrash className="delete-comments-button"/>
        </button>
                            </div>
                            <div className="row">
                            <p className="col-12" style={{display:"flex",textTransform:"initial"}}>{comment.comment}</p>
                            {/* <button className="btn btn-primary" onClick ={()=>{
            this.props.removeComments(comment)
          }}>remove</button> */}
                                
        
                            </div>
              
                         <hr/>
                        </div>
                        
                      
                      );}
                    })}
            
            {/* {threads.comments.map((comment, idx) => {
                      return (
                        <div key ={idx} style={{display:"table", margin:"auto auto", width:"80%"}} >
                            <div >
                            <p className="row">name || {comment.name}</p>
                        
                            </div>
                            <div >
                            <p className="row">{comment.comment}</p>
                        
                            </div>
              
                         <hr/>
                        </div>
                        
                      
                      );
                    })} */}
                       {/* <hr/>
              <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="name for comment" name="namecomment"  />
              <input type="text" placeholder="comment for comment" name="commentcomment"/>
                <button>comment</button>
              </form> */}
            
          </div>
        </div>
        }
       { currenthreadshasvalue ? ""
       
       :
       <div class="row">
          <div
            class="col-sm-11"
            style={{
              // border: "2px solid #d3d3d3",
              marginLeft: "auto",
              marginRight: "auto",
              boxShadow: "0px 5px 10px grey",
              marginTop: "20px",
              marginBottom: "20px",
              borderRadius:"3px"
            
            }}
          >
             

              <form onSubmit={this.handleSubmit} style={{fontFamily:"Trebuchet MS"}}>
              <input type="text" placeholder="Name " name="commentname"  />
              <input type="text" placeholder="Your Comment" name="commentcomment"/>
                <button>comment</button>
              </form>
           
          </div>
        </div>
      
   
      }
       
        
      </div>
      );
  }
}
