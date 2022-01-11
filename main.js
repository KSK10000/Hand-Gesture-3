Prediction1="";
Prediction2="";
Webcam.set({
    width:300,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function captureimg(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML='<img id="img" src="'+data_uri+'"/>';

    });
}
console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/94SE68g9-/model.json',Modelloaded);
function Modelloaded(){
    console.log("Your Model Is Successfully Loaded");
}
function speak(){
    var Synth=window.speechSynthesis;
    Speak_1="The First Prediction Is"+Prediction1;
    Speak_2="The Second Prediction Is"+Prediction2;
    var utterthis=new SpeechSynthesisUtterance(Speak_1+Speak_2);
    Synth.speak(utterthis);
}
function check(){
    Pic=document.getElementById("img");
    classifier.classify(Pic,got_results);
}
function got_results(error,results){
    if (error){
        console.log("Error");
    }
    else{
        console.log(results);
        Prediction1=results[0].label;
        Prediction2=results[1].label;
        document.getElementById("result_emotion_name").innerHTML=Prediction1;
        document.getElementById("result_emotion_name2").innerHTML=Prediction2;
        speak();
        if(Prediction1=="Amazing"){
            document.getElementById("update_emoji").innerHTML="&#128076;"
        }
        if(Prediction1=="Thumbs Up"){
            document.getElementById("update_emoji").innerHTML="&#128077;"
        }
        if(Prediction1=="Victory"){
            document.getElementById("update_emoji").innerHTML="&#9996;"
        }
        if(Prediction2=="Amazing"){
            document.getElementById("update_emoji2").innerHTML="&#128076;"
        }
        if(Prediction2=="Thumbs Up"){
            document.getElementById("update_emoji2").innerHTML="&#128077;"
        }
        if(Prediction2=="Victory"){
            document.getElementById("update_emoji2").innerHTML="&#9996;"
        }
    }
}
