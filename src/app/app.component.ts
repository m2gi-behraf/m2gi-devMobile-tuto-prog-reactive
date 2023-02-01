import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataUser, GithubApiService } from './github-api.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  readonly usersObs: Observable<DataUser[]>;
  readonly Ldeleted: Observable<DataUser[]>;

  constructor(private s: GithubApiService) {
    this.usersObs = s.usersObs;
    this.Ldeleted = s.Ldeleted;
  }

  refresh(): void {
    this.s.refresh();
  }

  delete(u: DataUser): void {
    this.s.deleteUser(u);
  }
}
