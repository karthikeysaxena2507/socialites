import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../helper/Footer";
import Heading from "../helper/Heading";
import { Howl } from "howler";
import music from "../../sounds/button.mp3";
import Loader from "../helper/Loader";
import { checkUser } from "../../api/userApis"
const countapi = require('countapi-js');
var sound = new Howl({src: [music]});

const Home = () => {

    var [visits, setVisits] = useState(0);
    var [loading, setLoading] = useState(true);
    useEffect(() => {
        countapi.visits().then((result) => {
            setVisits(result.value);
            setLoading(false);
        });  
        const check = async() => {
            try {
                const user = await checkUser();
                (user !== "INVALID") && (window.location = `/profile/${user.username}`)
                setLoading(false);
            }
            catch(err) {
                console.log(err);
            }
        }
        check();
    },[]);

    const guestLogin = () => {
        sound.play();
        localStorage.setItem("Guest", true);
    }

    return (loading) ? <Loader /> :
    <div>
        <div className="heading">
        <Heading />
            <h1> Welcome To the Socialites </h1>
            <Link to="/login">
                <div className="mt-1"> <button className="btn btn-lg expand" onClick={() => sound.play()}> Login </button> </div>
            </Link>
            <Link to="/register">
                <div className="mt-1"> <button className="btn btn-lg expand" onClick={() => sound.play()}> Register </button> </div>
            </Link>
            <h3> OR </h3>
            <Link to="/allposts">
                <div className="mt-1"> <button className="btn btn-lg expand" onClick={guestLogin}> Login as Guest </button> </div>
            </Link>
            <h4 className="mt-3"> No. of visits: {visits} </h4>
        </div>
        <Footer />
    </div>
}

export default Home;