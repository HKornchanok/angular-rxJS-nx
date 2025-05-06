import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { AthleteFormComponent } from './components/athlete-form/athlete-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LeaderboardComponent, AthleteFormComponent],
  template: `
    <div class="app-container">
      <h1>Formula 1 Live Leaderboard</h1>
      <div class="content">
        <app-leaderboard></app-leaderboard>
        <app-athlete-form></app-athlete-form>
      </div>
    </div>
  `,
  styles: [`
    .app-container {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    h1 {
      text-align: center;
      color: #333;
      margin-bottom: 2rem;
    }

    .content {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 2rem;
    }

    @media (max-width: 768px) {
      .content {
        grid-template-columns: 1fr;
      }
    }
  `],
})
export class AppComponent {
  title = 'leaderboard';
}
