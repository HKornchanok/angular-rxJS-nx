import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AthleteService } from '../../services/athlete.service';
import { Athlete } from '../../models/athlete.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="leaderboard">
      <table>
        <thead>
          <tr>
            <th>Position</th>
            <th>Color</th>
            <th>Name</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let athlete of athletes$ | async">
            <td>{{ athlete.position }}</td>
            <td>
              <div class="color-box" [style.background-color]="athlete.color"></div>
            </td>
            <td>{{ athlete.name }}</td>
            <td>{{ athlete.time }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styles: [`
    .leaderboard {
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      padding: 1rem;
    }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    th, td {
      padding: 1rem;
      text-align: left;
      border-bottom: 1px solid #eee;
    }

    th {
      font-weight: 600;
      color: #666;
    }

    .color-box {
      width: 24px;
      height: 24px;
      border-radius: 4px;
      border: 1px solid rgba(0, 0, 0, 0.1);
    }

    tr:hover {
      background-color: #f8f9fa;
    }
  `]
})
export class LeaderboardComponent {
  athletes$: Observable<Athlete[]>;

  constructor(private athleteService: AthleteService) {
    this.athletes$ = this.athleteService.getAthletes();
  }
} 