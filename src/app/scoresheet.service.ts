import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Scoresheet } from './scoresheet';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScoresheetService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }


  public getScoresheets(): Observable<Scoresheet[]>{
    return this.http.get<Scoresheet[]>(`${this.apiServerUrl}/Bowling-Scorer/findAll`);
}

public addScoresheet(scoresheet: Scoresheet): Observable<Scoresheet>{
    return this.http.post<Scoresheet>(`${this.apiServerUrl}/Bowling-Scorer/add`, scoresheet);
}

public uppdateScoreSheet(scoresheet: Scoresheet): Observable<Scoresheet>{
    return this.http.put<Scoresheet>(`${this.apiServerUrl}/Bowling-Scolrer/update`, scoresheet);
}

public deleteScoresheet(scoresheetId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/Bowling-Scorer/delete/${scoresheetId}`);
}
}

