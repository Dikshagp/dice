var randomnumber = Math.floor(Math.random() *6)+1;
console.log(randomnumber);

var randomimage = "images/dice"+randomnumber+".png" ;


var img1 = document.querySelectorAll("img")[0].setAttribute("src", randomimage);


// create second random number

var random2 = Math.floor(Math.random()*6)+1;

var randomImage2 = "images/dice"+random2+ ".png";


var img2 = document.querySelectorAll("img")[1].setAttribute("src", randomImage2);


                        //winnner between player 1 or 2

                        
                            if(randomnumber>random2)
                                {
                                    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
                                }

                                else if (randomnumber<random2)
                                {

                                    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
                                }
                                else
                                {
                                    document.querySelector("h1").innerHTML = "There is a Draw";
                                }