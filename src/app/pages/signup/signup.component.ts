import { Component, OnInit } from '@angular/core';
import * as Parse from 'parse';
import { UserModel } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  model = new UserModel()
  user;
  errorMsg = '';
  parseFile: Parse.File;

  constructor(private router: Router) {
    this.user = new Parse.User();
  }

  ngOnInit() {
  }

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      var file = event.target.files[0];
      this.parseFile = new Parse.File(file.name, file);
    }
  }

  onSubmit() {
    this.user.set("username", this.model.email);
    this.user.set("password", this.model.password);
    this.user.set("email", this.model.email);
    this.user.set("lastName", this.model.lastName);
    this.user.set("firstName", this.model.firstName);
    this.saveFile().then(() => {
      this.user.signUp().then(() => {
        this.router.navigate(['/event'])
      })
    }).catch((error) => {
      this.errorMsg = error.message;
    });
  }
  private saveFile() {
    if (this.parseFile) {
      return this.parseFile.save().then(() => {
        this.user.set('image', this.parseFile);
      }).catch(error => {
        console.log(error)
        return Promise.resolve();
      });
    }
    return Promise.resolve();
  }
}
