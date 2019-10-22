import React from "react";
import "./main.css";
import { ForumThreads } from "./forumthreads";
import Modal from "react-modal";
import {AddThread} from "./addthread"
import {Link} from "react-router-dom"
import {SingleThread} from "./singlethread";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { FaBeer } from 'react-icons/fa';
import { MdAddCircle } from "react-icons/md"
import * as firebase from "firebase"
// import {DB_CONFIG} from "./config/config"
// import firebase from "firebase"
// import {database} from "./config/config"
// import {DB_CONFIG} from "./config/config"
// import firebase from 'firebase/app';
// import 'firebase/database';
// const customStyles = {
//   content: {
//     top: "57%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//     padding: "11px"
//   }
// };

var firebaseConfig = {
  apiKey: "AIzaSyAd8ehFCkejxdEBoSRmJibS5i0YkA9RW2g",
  authDomain: "he-charts-6a29b.firebaseapp.com",
  databaseURL: "https://he-charts-6a29b.firebaseio.com",
  projectId: "he-charts-6a29b",
  storageBucket: "he-charts-6a29b.appspot.com",
  messagingSenderId: "597622848633",
  appId: "1:597622848633:web:1271d69df697c908"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export class Main extends React.Component {
  constructor() {
    super();
   
    // this.db = DB_CONFIG.database().ref().child('threads')
   
    this.state = {
     
      threads: [],
        modalIsOpen: false,
        currentthread:[],
          comments:[]
      
    }
  }

  
	componentWillMount(){
		const previousStation = this.state.threads;
		const previousComment = this.state.comments
		const rootRef = firebase.database().ref();
		const stationRef = rootRef.child('threads');
		const commentsRef = rootRef.child('comments')

		stationRef.on('child_added', snap => {
			previousStation.push({
				id: snap.key,
				name: snap.val().name,
        title: snap.val().title,
        question: snap.val().question
			})
			
			this.setState({
				threads : previousStation
			})
		
		})

		stationRef.on('child_removed', snap => {
			for(var i=0; i < previousStation.length; i++){
			  if(previousStation[i].id === snap.key){
				previousStation.splice(i, 1);
			  }
			}

			this.setState({
				threads: previousStation
			  })
	  
		  
		  })

		  commentsRef.on('child_added', snap => {
			previousComment.push({
				id: snap.key,
				name: snap.val().name,
				comment: snap.val().comment,
				source: snap.val().source
			})
			
			this.setState({
				comments : previousComment
			})
		
		})

		commentsRef.on('child_removed', snap => {
			for(var i=0; i < previousComment.length; i++){
			  if(previousComment[i].id === snap.key){
				previousComment.splice(i, 1);
			  }
			}

			this.setState({
				comments: previousComment
			  })
	  
		  
		  })


	}

  // componentWillMount=()=>{
  //   const previousthreads = this.state.threads

  //   this.database.on('child_added', snap => {
  //     previousthreads.push({
  //       id: snap.key,
  //       title: snap.val().title,
  //       about: snap.value().about,
  //       author: snap.value().author,
  //       description: snap.value().description

  //     })
  //     this.setState({
  //       threads: previousthreads 
  //     })
  //   })
  // }

  // componentDidMount=()=>{
  //   this.database.on('value',snap => {
  //     this.setState({
  //       threads: snap.val()
  //     })
  //   })
  // }

  // componentDidMount=()=>{
  //   const threadRef = firebase.database().ref('threads');
  //   threadRef.on('value',(snapshot)=>{
  //     let threads = snapshot.val();
  //     let newState =[];
  //       for (let thread in threads){
  //         newState.push({
  //           id: thread,
  //           title: threads[thread].title,
  //           about: threads[thread].about,
  //           author: threads[thread].author,
  //           description: threads[thread].description,
  //           comments: threads[thread].comments

  //         });
  //         console.log(newState)
  //         this.setState({
  //           threads: newState
  //         })
  //       }
      
  //   })
  // }

  // getUserData = () => {
  //   let ref = firebase.database().ref("/");
  //   ref.on("value", snapshot => {
  //     const state = snapshot.val();
  //     console.log(state)
  //     this.setState(state);
  //   });
  // };

  // writeUserData = () => {
  //   firebase.database()
  //     .ref("/")
  //     .set(this.state);
  //   console.log("DATA SAVED");
  // };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  // afterOpenModal = () => {
  //   // references are now sync'd and can be accessed.
  //   this.subtitle.style.color = "#f00";
  // };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };


    
  

  addThread=(threadAdded)=>{
    const rootRef = firebase.database().ref();
		const threadsRef = rootRef.child('threads');
		
    threadsRef.push().set({ date:threadAdded.date, name : threadAdded.name , title: threadAdded.title, question : threadAdded.question})
    this.setState({
      modalIsOpen: false
    })
    
  }

  removeThreads = id => {
   
		const rootRef = firebase.database().ref();
		const stationRef = rootRef.child('threads');
		// const childRef = stationRef.child('-LnwSvhfAOkGBupKOv9M')
		// console.log(childRef)
		
		// childRef.remove();
		stationRef.child(id).remove();
		console.log(id)
    
  };

  threadClicked= clickedThread =>{
  	this.setState({currentthread: clickedThread})

    // for( var i=0; i<this.state.threads.length; i++){
    //   return  console.log(this.state.threads[i]);
     
    // }
    
  }

  addedComment = comments => {
		const rootRef = firebase.database().ref();
		const nodeRef = rootRef.child('comments')

		nodeRef.push().set({ source: comments.source, name: comments.name, comment: comments.comment })
  };


  removeComments = id => {
    const rootRef = firebase.database().ref();
		const commentRef = rootRef.child('comments');
		commentRef.child(id).remove();
		console.log(id)
    
  };



  componentDidUpdate=(prevProps,prevState)=>{
      console.log(prevState.threads)
      console.log(this.state)
     
  }
  render() {
    console.log(this.state.threads)
    console.log(this.state.currentthread)
    console.log(this.state.currentcomment)
    return (

  
      <div className="App">
        <h1 className="mediaclass" style={{fontFamily:"Trebuchet MS"}}> FORUM </h1>

        <div class="container">
          {/* this  is add button section */}
          <div class="row">
            {/* this is empty just placed to correct the alignment */}
            <div class="col-sm-4" />
            {/* this contains the add a thread  */}
            <div class="col-sm-8 col-sm-pull-8">
              {/* 2 of 2 */}
              <div
                class="row"
                style={{ marginTop: "20px", marginBottom: "20px" }}
              >
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
                  <div class="row addtitle-row" >
                    <div class="col-8 thread-top">
                      <h4 class="thread-header" style={{fontFamily:"Trebuchet MS",float:"left",color:"red",marginLeft:"20px"}}>Add Your Question?</h4>
                    </div>

                    <div
                      class="col-4 remove-button"
                      //   style={{ border: "2px solid yellow" }}
                    >
                      {/* <button className="btn btn-primary add-button">Add</button>{" "} */}
                      {/* modal starts here */}
                      <div>
                        {/* <button
                          className="btn btn-secondary add-button "
                          onClick={this.openModal}
                          to = "/addthread"
                        >
                          ADD
                        </button> */}
                        <button className="btn"  size="small" color="secondary" aria-label="add"  onClick={this.openModal}>
          <MdAddCircle className="add-thread-button" />
        </button>
        

                        <Modal
                          isOpen={this.state.modalIsOpen}
                          onAfterOpen={this.afterOpenModal}
                          onRequestClose={this.closeModal}
                          // style={customStyles}
                          contentLabel="Example Modal"
                          className="content "
                          
                        >
                           <button
                           className="btn btn-danger modal-cancel-button"
                          
                            onClick={this.closeModal}
                          
                          >
                           X
                          </button>
                          <AddThread onAddThread={(AddedThread) => {
                           this.addThread(AddedThread);
                          }}
                          /> 
                          {/* <button
                           className="btn btn-danger modal-cancel-button"
                   
                            onClick={this.closeModal}
                          
                          >
                            cancel
                          </button> */}
                        </Modal>
                      </div>
                      {/* modal ends here */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div
              class="col-sm-4 col-sm-push-4"
              style={{ boxShadow: "5px 10px 18px #888888" ,height:"max-content",borderRadius:"3px"}}
            >
              <ForumThreads
                
                removeThreads={(threadRemoved) => {
                  this.removeThreads(threadRemoved)
                }}
                threadClicked={(clickedThread) =>{
                  this.threadClicked(clickedThread)
                }}
              {...this.state}
                 
               
              />
            </div>

            <div
              class="col-sm-8 col-sm-pull-8"
              // style={{ border: "2px solid green" }}
            >
              {/* 2 of 2 */}
            <SingleThread threads={this.state.threads} {...this.state}  {...this.state}
                onAddComment={(commentAdded) => {
                  this.addedComment(commentAdded);
                 }}
                 removeComments ={(commentRemoved) => {
                  this.removeComments(commentRemoved);
                 }}
                 />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
