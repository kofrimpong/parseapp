import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/routes/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() title: string;
  @Output() back = new EventEmitter<Event>();
  @Input() showBackButton = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  backClicked(event) {
    this.back.emit(event);
  }
  logout() {
    this.authService.logout().then(res => {
      this.router.navigate(['/login']);
    });
  }
}
