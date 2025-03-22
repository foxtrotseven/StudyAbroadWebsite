function showAlert()
{

   let ans1=document.querySelector("#check1").checked
   let ans2=document.querySelector("#check2").checked
   let ans3=document.querySelector("#check3").checked
   let ans4=document.querySelector("#check4").checked
   let ans5=document.querySelector("#check5").checked
   let ans6=document.querySelector("#check6").checked
   let ans7=document.querySelector("#check7").checked
   let ans8=document.querySelector("#check8").checked
   let ans9=document.querySelector("#check9").checked
   let ans10=document.querySelector("#check10").checked
   if(ans1&&ans2&&ans3&&ans4&&ans5&&ans6&&ans7&&ans8&&ans9&&ans10==true){
    alert("Elegible")
   }
   else{
    alert("Not Elegible")
   }


    // alert("Elegible")

}