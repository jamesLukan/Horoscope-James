




function onSubmit(){
    var month = document.getElementById("month").value
    var day = document.getElementById("day").value
    var name = document.getElementById("name").value
    var sign = findSign(month, day)


    document.getElementById("sign").innerHTML = signs[sign];

    document.getElementById("description").innerHTML = name + horoscopes[sign];



    document.getElementById("img").src = images[sign];






}



    var horoscopes =[" be kind to others, as a Capricorn you can navigate your way through social situations, so be supportive for all your friends.",
    " your creativity rubs off on others, so don't be afraid to bring your energy to those around you and lift their spirits.",
    " bold and ambitious as you might be, take your time to be sensitive to others and be aware your surroundings.",
    ", as a Taurus, r-e-l-a-x, take some time for yourself and enjoy mother nature.",
    ", as a Gemini, your ambition may lead you to unwanted stress, take a break from your constant work ethic.",
    ", as a Cancer, you can always pick up the vibe in a room, expect plenty of positive energy to come your way.",
    ", as a Leo, you march to beat of your own drum, don't let anyones negative energy bring you down.",
    " follow your ambitions, good news and fotunate events are coming your way soon.",
    " you are one of the most cunning zodiac signs, allow your intelligence to guide you.",
    " don't get yourself down when obstacles are presented in front of you, work to overcome them.",
    " be yourself, set a goal, and accomplish it.",
    " don't be too arrogant there is always room to improve, never settle",
    ""]
    var signs = ["Capricorn", "Aquarius", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Sagittarius", "Libra", "Scorpio", "Pisces", "Not a valid date",]
    var images =["img/Capricorn.jpeg", "img/Aquarius.jpeg", "img/Aries.jpg", "img/Taurus.jpeg", "img/Gemini.jpeg", "img/Cancer.jpg", "img/Leo.jpg", "img/Virgo.jpeg", "img/Sagittarius.jpeg", "img/Libra.jpg", "img/Scorpio.jpeg", "img/Pisces.jpeg", "img/Error.jpeg",]







function findSign(month, day){
    if(month == 1){
        if(day <= 19){
            return 0
        }
        if(day >= 20){
            return 1
        }
    }
    if(month == 2){
        if(day <= 18){
            return 1
        }
        if(day >= 19 && day < 30){
            return 11
        }
        if(day >= 30){
            return 12
        }
    }
    if(month == 3){
        if(day <= 20){
            return 11
        }
        if(day >= 21){
            return 2
        }
    }
    if(month == 4){
        if(day <= 19){
            return 2
        }
        if(day >= 20){
            return 3
        }
    }
    if(month == 5){
        if(day <= 20){
            return 3
        }
        if(day >= 21){
            return 4
        }
    }
    if(month == 6){
        if(day <= 20){
            return 4
        }
        if(day >= 21){
            return 5
        }
    }
    if(month == 7){
        if(day <= 22){
            return 5
        }
        if(day >= 23){
            return 6
        }
    }
    if(month == 8){
        if(day <= 22){
            return 6
        }
        if(day >= 23){
            return 7
        }
    }
    if(month == 9){
        if(day <= 22){
            return 7
        }
        if(day >= 23){
            return 9
        }
    }
    if(month == 10){
        if(day <= 22){
            return 9
        }
        if(day >= 23){
            return 10
        }
    }
    if(month == 11){
        if(day <= 21){
            return 10
        }
        if(day >= 22){
            return 8
        }
    }
    if(month == 12){
        if(day <= 21){
            return 8
        }
        if(day >= 22){
            return 0
        }
    }


}

