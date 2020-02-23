import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public message: string = null;
  public sum = null;
  public isValidAge = false;
  constructor() { }

  ngOnInit() {
  }

  public saysHello() {
    this.message = "Hello world!";
  }

  public add(a, b) {
    this.sum = a + b;
  }

  public isValid(age) {
    if(age >= 18) {
      this.isValidAge = true;
    }
  }

  public test(): Promise<boolean> {
    return Promise.resolve(true);
  }

  private async getRes() {
    const res = await this.test();
    console.log(res);
  }

}
