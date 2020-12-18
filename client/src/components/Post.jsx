/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import like from "./images/like.png";
import love from "./images/love.png";
import laugh from "./images/laugh.png";
import all from "./images/all.png";
import axios from "axios";

function Post(props) {

    var [comment, setComment] = useState({name:props.name, content:""});

    function change(event) {
        var {name, value} = event.target;

        setComment((prevPost) => {
        return {
          ...prevPost,
          [name]: value
        };
      });
    }

    function addComment(event) {
        axios.post("/posts/add/" + props._id, comment)
            .then((response) => {
                console.log(response.data);
                window.location = "/complete/" + props.name + "/" + props._id;
            })
            .catch((response) => {
                console.log(response);
            });
    }

    function changePost(event) {
        props.change(event, props);
    }        

    function SeeAll() {
        window.location = "/post/" + props.name + "/" + props._id;
    }

    function SeeComplete() {
        window.location = "/complete/" + props.name + "/" + props._id;
    }

    var visibility = (props.show_comments) ? {visibility: "visible"}:{visibility: "hidden"}
    
    return(<div className="container margin post"> 
        <div className="post-title"> <h2> {props.title} </h2>  by {props.author} </div>
        <div className="post-content"> {props.content} </div>
        <div className="post-info"> 
            <span className="one">
             <img
                src={like} 
                name="like" 
                onClick={changePost} 
                className="expand one"/>
                <span onClick={SeeAll} > {props.like} </span>
            </span>
            <span className="one">
             <img 
                src={love} 
                name="love" 
                onClick={changePost} 
                className="expand one"/>
                <span onClick={SeeAll} > {props.love} </span>
            </span>
            <span className="one">
             <img 
                src={laugh} 
                name="laugh" 
                onClick={changePost} 
                className="expand one"/>
                <span onClick={SeeAll} > {props.laugh} </span>
            </span>
            <span>
                <span onClick={SeeAll} className="expand one all"> See All </span> 
            </span>
            <span className="move-right">
             <img 
                src={all} 
                name="arrow" 
                onClick={SeeAll} 
                className="expand"/> 
                <span onClick={SeeAll} > {props.laugh + props.love + props.like} </span>
            </span>
            <div className="margin">
                <input type="text" onChange={change} name="content" value={comment.content} placeholder="Add a Comment"/>
            </div>
            <div className="comment">
                <span onClick={SeeComplete} style={visibility} > See All {props.comment_count} comments </span>
                <button onClick={addComment} className="move-right btn-dark expand"> Add Comment </button>
            </div>
        </div>
    </div>);
}

export default Post;