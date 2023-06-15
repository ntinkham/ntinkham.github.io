function seeMore(){
    let seeMoreP = document.getElementById("see-more");
    if (seeMoreP.classList.contains("hidden")) {
        seeMoreP.classList.remove("hidden");
        button.innerHTML = "See Less" ;
    }
    
    else {
        seeMoreP.classList.add("hidden");
        button.innerHTML = "See More" ;
    }
}

function secondSeeMore(){
    let seeMoreP = document.getElementById("see-again");
    if (seeMoreP.classList.contains("hidden")) {
        seeMoreP.classList.remove("hidden");
        click.innerHTML = "See Less" ;
    }
    
    else {
        seeMoreP.classList.add("hidden");
        click.innerHTML = "See More" ;
    }
}

function displayResults(){
    let questionOne=document.getElementById("one").value;
    let questionTwo=document.getElementById("two").value;
    let questionThree=document.getElementById("three").value;
    let questionFour=document.getElementById("four").value;
    
    let button=document.getElementById("submit").click;
    
    let resultsDiv=document.getElementById("results");
    resultsDiv.classList.remove("hidden");
    score = 0;
    
    if (questionOne == "image") {
        resultsDiv.innerHTML += "<p>" + "Question  1 - " + "Correct";
        score = score + 1;
    }
    
    else {
        resultsDiv.innerHTML += "<p>" + "Question  1 - " + "Incorrect";
    }
    
    if (questionTwo == "para") {
        resultsDiv.innerHTML += "<p>" + "Question  2 - " + "Correct";
        score = score + 1;
    }
    
    else {
        resultsDiv.innerHTML += "<p>" + "Question  2 - " + "Incorrect";
    }
    
    if (questionThree == "cascading") {
        resultsDiv.innerHTML += "<p>" + "Question  3 - " + "Correct";
        score = score + 1;
    }
    
    else {
        resultsDiv.innerHTML += "<p>" + "Question  3 - " + "Incorrect";
    }
    
    if (questionFour == "align") {
        resultsDiv.innerHTML += "<p>" + "Question  4 - " + "Correct";
        score = score + 1;
    }
    
    else {
        resultsDiv.innerHTML += "<p>" + "Question  4 - " + "Incorrect";
    }
    
    resultsDiv.innerHTML += "Score: " + score + "/4;"
}

function changeSlide() {
    let slideshow= document.getElementById("slideshow");
    let change = ["images/clyde.jpg", "images/friends.jpg", "images/grace.jpg", "images/mexico.jpg"];
    
    slideshow.src= change[num];
    num++;
    
    if(num == change.length) {
        num=0;
    }
}

setInterval(changeSlide, 1000);