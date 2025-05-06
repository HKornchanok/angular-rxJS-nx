import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AthleteService } from '../../services/athlete.service';

@Component({
  selector: 'app-athlete-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="athlete-form">
      <h2>Add New Entry</h2>
      <form (ngSubmit)="onSubmit()" #athleteForm="ngForm">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            [(ngModel)]="formData.name"
            required
            #name="ngModel"
            class="form-control"
          />
          <div *ngIf="name.invalid && (name.dirty || name.touched)" class="error-message">
            Name is required
          </div>
        </div>

        <div class="form-group">
          <label for="color">Color</label>
          <input
            type="color"
            id="color"
            name="color"
            [(ngModel)]="formData.color"
            required
            #color="ngModel"
            class="form-control"
          />
        </div>

        <div class="form-group">
          <label for="time">Time (mm:ss.SSS)</label>
          <input
            type="text"
            id="time"
            name="time"
            [(ngModel)]="formData.time"
            required
            pattern="^\\d{1,2}:\\d{2}\\.\\d{3}$"
            #time="ngModel"
            class="form-control"
          />
          <div *ngIf="time.invalid && (time.dirty || time.touched)" class="error-message">
            <div *ngIf="time.errors?.['required']">Time is required</div>
            <div *ngIf="time.errors?.['pattern']">Time must be in format mm:ss.SSS</div>
          </div>
        </div>

        <button type="submit" [disabled]="!athleteForm.form.valid">Add Entry</button>
      </form>
    </div>
  `,
  styles: [`
    .athlete-form {
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      padding: 1.5rem;
    }

    h2 {
      margin: 0 0 1.5rem;
      color: #333;
    }

    .form-group {
      margin-bottom: 1rem;
    }

    label {
      display: block;
      margin-bottom: 0.5rem;
      color: #666;
      font-weight: 500;
    }

    .form-control {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1rem;
    }

    input[type="color"] {
      height: 40px;
      padding: 0;
    }

    .error-message {
      color: #dc3545;
      font-size: 0.875rem;
      margin-top: 0.25rem;
    }

    button {
      background: #007bff;
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      font-size: 1rem;
      cursor: pointer;
      width: 100%;
      margin-top: 1rem;
    }

    button:disabled {
      background: #ccc;
      cursor: not-allowed;
    }

    button:hover:not(:disabled) {
      background: #0056b3;
    }
  `]
})
export class AthleteFormComponent {
  formData = {
    name: '',
    color: '#000000',
    time: ''
  };

  constructor(private athleteService: AthleteService) {}

  onSubmit(): void {
    if (this.formData.name && this.formData.color && this.formData.time) {
      this.athleteService.addAthlete(this.formData);
      this.formData = {
        name: '',
        color: '#000000',
        time: ''
      };
    }
  }
} 