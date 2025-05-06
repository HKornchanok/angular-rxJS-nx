import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Athlete } from '../models/athlete.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class AthleteService {
  private athletes: Athlete[] = [
    { id: uuidv4(), name: 'Oscar Piastri', color: '#ffa500', time: '1:33.643' },
    { id: uuidv4(), name: 'George Russell', color: '#eeeeee', time: '1:33.892' },
    { id: uuidv4(), name: 'Lando Norris', color: '#ffa500', time: '1:34.251' },
    { id: uuidv4(), name: 'Max Verstappen', color: '#2244ff', time: '1:34.252' },
    { id: uuidv4(), name: 'Lewis Hamilton', color: '#dddddd', time: '1:34.280' },
    { id: uuidv4(), name: 'Alexander Albon', color: '#336aff', time: '1:34.604' },
  ];

  private athletesSubject = new BehaviorSubject<Athlete[]>(this.sortAthletes(this.athletes));
  athletes$ = this.athletesSubject.asObservable();

  constructor() {
    this.updatePositions();
  }

  private sortAthletes(athletes: Athlete[]): Athlete[] {
    return athletes.sort((a, b) => {
      const timeA = this.convertTimeToSeconds(a.time);
      const timeB = this.convertTimeToSeconds(b.time);
      return timeA - timeB;
    });
  }

  private convertTimeToSeconds(time: string): number {
    const [minutes, seconds] = time.split(':');
    return parseFloat(minutes) * 60 + parseFloat(seconds);
  }

  private updatePositions(): void {
    const sortedAthletes = this.sortAthletes([...this.athletes]);
    sortedAthletes.forEach((athlete, index) => {
      athlete.position = index + 1;
    });
    this.athletesSubject.next(sortedAthletes);
  }

  addAthlete(athlete: Omit<Athlete, 'id' | 'position'>): void {
    const newAthlete: Athlete = {
      ...athlete,
      id: uuidv4(),
    };
    this.athletes.push(newAthlete);
    this.updatePositions();
  }

  getAthletes(): Observable<Athlete[]> {
    return this.athletes$;
  }
} 