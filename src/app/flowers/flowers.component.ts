import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flowers',
  templateUrl: './flowers.component.html',
  styleUrls: ['./flowers.component.scss']
})
export class FlowersComponent  implements OnInit {

  ngOnInit(): void {
    this.reproducir()
  }
  reproducir() {
    const audio = new Audio('/assets/floresamarillas.mp3');
    console.log("audio",audio);    
    audio.play();
}


}
