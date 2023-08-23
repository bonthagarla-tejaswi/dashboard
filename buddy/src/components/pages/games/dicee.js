import {  useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



export default function Dicee(){
    const nav = useNavigate();
    if(localStorage.getItem("token")==null){
        nav("/login");
     }
    const [player1name, setplayer1name] = useState("");
    const [player2name, setplayer2name] = useState("");
    const [player3name, setplayer3name] = useState("");
    const [player4name, setplayer4name] = useState("");
    const totalgames = 7;
    const[randomnum1 , setrandomnum1] = useState(0);
    const [randomnum2 , setrandomnum2] = useState(0);
    const [randomnum3 , setrandomnum3] = useState(0);
    const [randomnum4 , setrandomnum4] = useState(0);
    const [player1,setplayer1] = useState(0);
    const [player2,setplayer2] = useState(0);
    const [player3,setplayer3] = useState(0);
    const [player4,setplayer4] = useState(0);
    const [gamesplayed,setgamesplayed] = useState(0);
    const [fakesplayed,setfakesplayed] = useState(0);
    
        function getdata(){
            try{
            alert(
                "instructions: " +
                  " 1. enter names of player1 ,player2 , player3 and player4, then total no of rounds you want to play  2.this game is available only in offline mode 3.anter all values properly "
              );
            setplayer1name(prompt("enter player 1 name ").toUpperCase());
            setplayer2name(prompt("enter player 2 name ").toUpperCase());
            setplayer3name(prompt("enter player 3 name ").toUpperCase());
            setplayer4name(prompt("enter player 4 name ").toUpperCase());
            
            alert("roll the dicee to start the game have fun "); 
            }catch(e){
                console.log(" caught exception");
               
            }
        }
        useEffect(()=>{
            setInterval(() => {
                getdata();
            }, 10*60*60*60);
        });
        let result = "404";
       function Restart(){
          setrandomnum1(0)
          setrandomnum2(0)
          setplayer1(0);
          setplayer2(0)
          setrandomnum3(0);
          setrandomnum4(0);
          setplayer3(0);
          setplayer4(0);
          setgamesplayed(0);
          setfakesplayed(0);
          var audio = new Audio("green.mp3");
          audio.play();
          document.getElementById("mybtn1").disabled = false;
          document.getElementById("mybtn2").disabled = false;
          document.getElementById("mybtn3").disabled = false;
          document.getElementById("mybtn4").disabled = false;
          document.getElementById("here2").hidden = false;
          document.getElementById("here1").hidden = false;
          document.getElementById("here3").hidden = false;
          document.getElementById("here4").hidden = false;
          document.getElementById("result").innerHTML = "play again  &#128521;";
          document.getElementById("restart").hidden = true;
          gameover();
        }
        function reload1() {
          setrandomnum1(Math.floor(Math.random() * (6 - 0)) + 1);          
          document.getElementById("demo1").src = "dice" + randomnum1 + ".png";
          document.getElementById("demo2").src = "favicon.png";
          document.getElementById("demo3").src = "favicon.png";
          document.getElementById("demo4").src = "favicon.png";
          setgamesplayed(gamesplayed + 0.25);
          setfakesplayed(fakesplayed + 1);
          setplayer1(player1 + randomnum1);
          document.getElementById("mybtn1").disabled = true;
          document.getElementById("mybtn2").disabled = false;
          document.getElementById("mybtn3").disabled = true;
          document.getElementById("mybtn4").disabled = true;
          document.getElementById("here1").hidden = true;
          document.getElementById("here2").hidden = false;
          document.getElementById("here3").hidden = true;
          document.getElementById("here4").hidden = true;
          var audio = new Audio("blue.mp3");
          audio.play();
          gameover();
        }
        function reload2() {
          setrandomnum2(Math.floor(Math.random() * (6 - 0)) + 1);
          document.getElementById("demo1").src = "favicon.png";
          document.getElementById("demo2").src = "dice" + randomnum2 + ".png";
          document.getElementById("demo3").src = "favicon.png";
          document.getElementById("demo4").src = "favicon.png";
          setplayer2(player2 + randomnum2);
          setgamesplayed(gamesplayed + 0.25);
          document.getElementById("mybtn1").disabled = true;
          document.getElementById("mybtn2").disabled = true;
          document.getElementById("mybtn3").disabled = false;
          document.getElementById("mybtn4").disabled = true;
          document.getElementById("here1").hidden = true;
          document.getElementById("here2").hidden = true;
          document.getElementById("here3").hidden = false;
          document.getElementById("here4").hidden = true;
          var audio = new Audio("blue.mp3");
          audio.play();
          gameover();
        }
        function reload3() {  
          setrandomnum3(Math.floor(Math.random() * (6 - 0)) + 1);
          document.getElementById("demo1").src = "favicon.png";
          document.getElementById("demo2").src = "favicon.png";
          document.getElementById("demo3").src = "dice" + randomnum3 + ".png";
          document.getElementById("demo4").src = "favicon.png";
          setgamesplayed(gamesplayed + 0.25);
          setplayer3(player3 + randomnum3);
          document.getElementById("mybtn1").disabled = true;
          document.getElementById("mybtn2").disabled = true;
          document.getElementById("mybtn3").disabled = true;
          document.getElementById("mybtn4").disabled = false;
          document.getElementById("here1").hidden = true;
          document.getElementById("here2").hidden = true;
          document.getElementById("here3").hidden = true;
          document.getElementById("here4").hidden = false;
          var audio = new Audio("blue.mp3");
          audio.play();
          gameover();
        }
        function reload4() {
          setrandomnum4(Math.floor(Math.random() * (6 - 0)) + 1);
          document.getElementById("demo1").src = "favicon.png";
        document.getElementById("demo2").src = "favicon.png";
        document.getElementById("demo3").src = "favicon.png";
          document.getElementById("demo4").src = "dice" + randomnum4 + ".png";
          setgamesplayed(gamesplayed + 0.25);
          setplayer4(player4 + randomnum4);
          document.getElementById("mybtn1").disabled = false;
          document.getElementById("mybtn2").disabled = true;
          document.getElementById("mybtn3").disabled = true;
          document.getElementById("mybtn4").disabled = true;
          document.getElementById("here1").hidden = false;
          document.getElementById("here2").hidden = true;
          document.getElementById("here3").hidden = true;
          document.getElementById("here4").hidden = true;
          var audio = new Audio("blue.mp3");
          audio.play();
          gameover();
        }
        function gameover() {
          if (gamesplayed === totalgames-0.25) {
            var audio = new Audio("wrong.mp3");
            if (player1 > player2 && player1 > player3 &&player1 > player4) {
              result =player1name + " won the game ";
              setTimeout(() => {
                audio.play();
              }, 500);
            } else if (player2 > player1 && player2 > player3 &&player2 > player4) {
              result = player2name + " won the game";
              setTimeout(() => {
                audio.play();
                audio.play();
                audio.play();
              }, 500);
            } else if (player3 > player1 && player3 > player2 &&player3 > player4) {
                result = player3name + " won the game";
                setTimeout(() => {
                  audio.play();
                  audio.play();
                  audio.play();
                }, 500);
              } else if(player1=== player2 || player1=== player3 || player2=== player3 || player3=== player4 || player1===player4 ||player2 ===player4){
                result = "match tie between one another";
              setTimeout(() => {
                audio.play();
                audio.play();
              }, 500);
              }else {
              result = player4name + " won the game ";
              setTimeout(() => {
                audio.play();
                audio.play();
              }, 500);
            }
            document.getElementById("result").innerHTML = result;
            document.getElementById("mybtn1").disabled = true;
            document.getElementById("mybtn2").disabled = true;
            document.getElementById("mybtn3").disabled = true;
            document.getElementById("mybtn4").disabled = true;
            document.getElementById("here2").hidden = true;
            document.getElementById("here1").hidden = true;
            document.getElementById("here3").hidden = true;
            document.getElementById("here4").hidden = true;
            document.getElementById("restart").hidden = false;
            document.getElementById("demo1").src = "favicon.png";
            document.getElementById("demo2").src = "favicon.png";
            document.getElementById("demo3").src = "favicon.png";
            document.getElementById("demo4").src = "favicon.png"; 
          }
        }
    return(
        <>
        <div className="container-fluid">
            <div className="text-center">
                <h1 id="result" className="text-center hbolder">play again
                    &#128521;</h1>
                <div><hr/></div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6 heights">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 text-center">
                        <h3>rounds played</h3><p>{fakesplayed}/{totalgames}</p>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-md-6">
                        <h3>{player1name} score</h3>
                        <p>{player1}</p>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-md-6">
                        <h3 >{player2name} score</h3>
                        <p>{player2}</p>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-md-6">
                        <h3 >{player3name} score </h3>
                        <p >{player3}</p>
                       </div>
                        <div className="col-lg-6 col-sm-6 col-md-6">
                        <h3 >{player4name} score</h3>
                        <p >{player4}</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6">
                    <div className="dice">
                        <p >{player1name}</p>
                        <img alt=""className="img1" id="demo1" src="favicon.png"/>
                    </div>

                    <div className="dice">
                        <p>{player2name}</p>
                        <img alt=""className="img1" id="demo2" src="favicon.png"/>
                    </div>
                    <div className="dice">
                        <p>{player3name}</p>
                        <img alt=""className="img1" id="demo3" src="favicon.png"/>
                    </div>

                    <div className="dice">
                        <p>{player4name}</p>
                        <img alt=""className="img1" id="demo4" src="favicon.png"/>
                    </div>
                </div>
                <div className="empty"></div>
                <div className="col-sm-12 col-md-12">
                    <div className="col-sm-3 col-lg-3 col-md-3 dice">
                        <div className="column">
                          <div  className="bolded">{player1name}</div>
                          <div>
                            <button onClick={reload1} id="mybtn1" ><img alt=""
                               src="dice.gif"/></button>
                          </div>
                          <div>
                            <img alt="" src="source.gif" className="here" id="here1"></img>
                          </div>
                        </div>
                    </div>
                     <div className="col-sm-3 dice">
                        <div className="column">
                          <div  className="bolded">{player2name}</div>
                          <div>
                            <button onClick={reload2} id="mybtn2" ><img alt=""
                               src="dice.gif" /></button>
                          </div>
                          <div>
                            <img alt="" src="source.gif"  className="here" id="here2"></img>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-2 dice">
                        <div className="column">
                          <div className="bolded">{player3name}</div>
                          <div>
                            <button onClick={reload3} id="mybtn3" ><img alt=""
                               src="dice.gif" /></button>
                          </div>
                          <div>
                            <img alt="" src="source.gif" className="here" id="here3"></img>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3 dice">
                        <div className="column">
                          <div className="bolded">{player4name}</div>
                          <div>
                            <button onClick={reload4} id="mybtn4" ><img alt=""
                              src="dice.gif" /></button>
                          </div>
                          <div>
                            <img alt="" src="source.gif" className="here" id="here4"></img>
                          </div>
                        </div>
                      </div>
                    </div>
            </div>
            <br/><br/>
            <div className="text-center">
                <button onClick={Restart} className="btn btn-success text-center " id="restart" hidden="true"><i className="bolded">Restart</i></button>
            </div> 
        </div>
        <br />
        </>
    )
}