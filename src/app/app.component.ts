import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'travelApp';
}
window.onload = function () {
  var backgroundImg=[ "../assets/mountain.jpg",
                      "../assets/beach.jpg",
                      "../assets/boat.jpg",
                      "../assets/venice.jpg",
                      "../assets/jungle.jpg",
                      "../assets/sunrise.jpg",
  ]
  var base = "../assets/background.jpg"
  document.body.style.backgroundImage = "url('../assets/background.jpg')";
  backgroundImg.forEach(function(img){
    new Image().src = base + img; 

    setInterval(changeImage, 5000);
   function changeImage() {   
    var i = Math.floor((Math.random() * 2));
    
    document.body.style.backgroundImage = "url('"+backgroundImg[i]+"')";
    
  }
})}