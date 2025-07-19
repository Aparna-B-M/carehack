import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlphabetSoundBubblesComponent } from './alphabet-sound-bubbles/alphabet-sound-bubbles.component';


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,AlphabetSoundBubblesComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('inclusive-games');
}
