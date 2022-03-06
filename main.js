Webcam.set({
width:350,
height:300,
image_format:'png',png_quality:90
});
c1=document.getElementById("camera");
Webcam.attach(c1);

function takephoto(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="myimg" src="'+data_uri+'"/>';
}
    );
}

console.log("ml5 version:",ml5.version)
myModel=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/N-9PXCJ1s/model.json",modelLoaded)
function modelLoaded()
{
console.log("Model Loaded")


}

function speak()
{
var synth=window.speechSynthesis;
speak_data_1="The first prediction is"+ prediction_1;
speak_data_2="The second prediction is"+ prediction_2;
var utterThis=new SpeechSynthesisUtterance (speak_data_1 + speak_data_2)
synth.speak(utterThis);
}

function predict()
{
i1=document.getElementById("myimg");
myModel.classify(i1,gotResult)
}

function gotResult(error,results)
{
if(error)
{
console.log(error);
}
else{
console.log(results);
document.getElementById("result_emotion_name").innerHTML=results[0].label;
document.getElementById("result_emotion_name2").innerHTML=results[1].label;
prediction_1=results[0].label;
prediction_2=results[1].label;
speak();
if(results[0].label == "Happy"){
document.getElementById("update_emoji").innerHTML="&#128522;";
}
if(results[0].label == "Sad"){
document.getElementById("update_emoji").innerHTML="&#128532;";
}
if(results[0].label == "Angry"){
document.getElementById("update_emoji").innerHTML="&#128545;";
}
if(results[0].label == "Surprise"){
document.getElementById("update_emoji").innerHTML="&#128562;";
}

if(results[1].label == "Happy"){
    document.getElementById("update_emoji2").innerHTML="&#128522;";
    }
    if(results[1].label == "Sad"){
    document.getElementById("update_emoji2").innerHTML="&#128532;";
    }
    if(results[1].label == "Angry"){
    document.getElementById("update_emoji2").innerHTML="&#128545;";
    }
    if(results[1].label == "Surprise"){
    document.getElementById("update_emoji2").innerHTML="&#128562;";
    }

}
};
