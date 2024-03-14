import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  // styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pageTitle = 'Login';

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute, 
  ) {

  }

  ngOnInit(): void {
    this.route
    .data
    .subscribe(v => {
      this.pageTitle = v['title'];
    });
  }



}

