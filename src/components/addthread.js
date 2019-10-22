import React from "react"
import { numberLiteralTypeAnnotation } from "@babel/types";

export class AddThread extends React.Component{
    constructor(){
        super()
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        
    	const name = e.target.elements.name.value;
        const title = e.target.elements.title.value;
        const question = e.target.elements.question.value;
		const threads ={
            date: Number(new Date()),
			name: name,
			title : title,
			question : question,
		}
		if (name && title && question ){
			this.props.onAddThread(threads)
		}
		e.target.elements.name.value ="";
        e.target.elements.title.value = "";
        e.target.elements.question.value ="";
    }


    render(){
        return(
            <div>
                <h1 className="thread-header">Add your question to know the answer</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Name" name="name" required/>
                    {/* <input type="text" placeholder="Address" name="address"/> */}
                    <input type="text" placeholder="Title" name="title" required/>
                    <input type="text" placeholder="Enter your question" name="question" required/>
                  
                    <button>submit</button>

                   
                </form>
             
            </div>
        )
    }
}