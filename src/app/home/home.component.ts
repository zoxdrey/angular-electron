import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) {
  }

  ngOnInit(): void {
    console.log('HomeComponent INIT');
    this.http.get('http://localhost:3000/test').subscribe((data: any) => console.log(data));
  }

}
