/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar"; 
import liked from "./images/like.png"
import loved from "./images/love.png";
import laughed from "./images/laugh.png";
import axios from "axios";
import search from "./images/search.png";
import Footer from "./Footer";
import Post from "./Post";
import Heading from "./Heading";

const Reactions = () => {

    let { username,id } = useParams();
    var [like,setlike] = useState(false);
    var [love,setlove] = useState(false);
    var [laugh,setlaugh] = useState(false);
    var [searchContent,setsearchContent] = useState("");
    var [reactions,setreactions] = useState([]);
    var [allreactions,setallreactions] = useState([]);
    var [tempreactions,settempreactions] = useState([]);
    var [post,setPost] = useState({author:"", title:"", content:"", comments:[], comment_count:0, like:0, love:0, laugh:0, imageUrl:""});

    useEffect(() => {
        const fetch = async() => {
            try {
                const response = await axios.get(`/posts/${id}`);
                setallreactions(response.data[0].reacts.reverse());
                setreactions(response.data[0].reacts.reverse());
                settempreactions(response.data[0].reacts.reverse());
                setPost(response.data[0]);
            }
            catch(error) {
                console.log(error);
            }
        }
        fetch();
    },[id]);

    const changeLike = () => {
        if(!like) {
            setlike(true);    
            setlove(false);
            setlaugh(false);
            setreactions(allreactions.filter(function(reaction) {
                return (reaction.type === "like");
            }));
            settempreactions(allreactions.filter(function(reaction) {
                return (reaction.type === "like");
            }));
        }
    }
    const changeLove = () => {
        if(!love) {
            setlike(false);    
            setlove(true);
            setlaugh(false);
            setreactions(allreactions.filter(function(reaction) {
                return (reaction.type === "love");
            }));
            settempreactions(allreactions.filter(function(reaction) {
                return (reaction.type === "love");
            }));
        }
    }
    const changeLaugh = () => {
        if(!laugh) {
            setlike(false);    
            setlove(false);
            setlaugh(true);
            setreactions(allreactions.filter(function(reaction) {
                return (reaction.type === "laugh");
            }));
            settempreactions(allreactions.filter(function(reaction) {
                return (reaction.type === "laugh");
            }));
        }
    }

    const changeAll = () => {
        setlike(false);    
        setlove(false);
        setlaugh(false);
        setreactions(allreactions);
        settempreactions(allreactions);
    }

    const change = (event) => {
        setsearchContent(event.target.value);
    }

    const renderUsers = (props, index) => {
        return (<div className="container user" key={index}>
            <li> {props.name} </li>
        </div>);
    }

    const searchIt = (event) => {
        event.preventDefault();
        setreactions(tempreactions.filter(function(reaction) {
            return (reaction.name.indexOf(searchContent) !== -1);
        }));
    }

    const changepost = (event, post) => {
        const drop = async() => {
            try {
                const response = await axios.post(`/posts/update/${event.target.name}/${post.name}`, post);
                console.log(response.data);
            }
            catch(error) {
                console.log(error);
            }
        }
        drop();
    }

    var style1 = (like) ? {backgroundColor: "white"}:{backgroundColor: "rgb(211, 115, 36)"}
    var style2 = (love) ? {backgroundColor: "white"}:{backgroundColor: "rgb(211, 115, 36)"}
    var style3 = (laugh) ? {backgroundColor: "white"}:{backgroundColor: "rgb(211, 115, 36)"}
    var style4 = (!like && !love && !laugh) ? {backgroundColor: "white"}:{backgroundColor: "rgb(211, 115, 36)"} 

    return(<div>
        <Navbar 
            name={username}
            page="reactions"
        />
        <Heading />
        <div className="container">
        <Post 
                key = {post._id}
                name = {username}
                _id = {post._id}
                author = {post.author}
                title = {post.title}
                content = {post.content}
                category = {post.category}
                like = {post.like}
                love = {post.love}
                laugh = {post.laugh}
                comment_count = {post.comments.length}
                change = {changepost}
                show_comments = {true}
                imageUrl = {post.imageUrl}
        />
        <div className="center-text">
        <h2 className="margin"> Users who Reacted: </h2>
            <div>
                <button className="btn expand margin one allbtn" onClick={changeAll} style={style4}> All </button> 
                <button className="btn expand margin one" onClick={changeLike} style={style1}> <img src={liked} name="like" className="expand"/> </button> 
                <button className="btn expand margin one" onClick={changeLove} style={style2}> <img src={loved} name="love" className="expand"/> </button> 
                <button className="btn expand margin one" onClick={changeLaugh} style={style3}> <img src={laughed} name="laugh" className="expand"/> </button> 
            </div>
            <div>
                <input type="text" value={searchContent} onChange={change} className="width" placeholder="Search" autoComplete="off"/>
                <button className="btn expand" onClick={searchIt}> <img src={search} /> </button>
            </div>
        </div>    
        </div>
        <div className="margin">
            {reactions.map(renderUsers)}    
        </div>
        <div className="space"></div>
        <Footer />
    </div>);
}

export default Reactions;