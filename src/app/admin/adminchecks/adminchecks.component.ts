import { Component } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Patron } from 'src/app/models/apiresponse';
import { PatronService } from 'src/app/services/patron.service';

@Component({
  selector: 'app-adminchecks',
  templateUrl: './adminchecks.component.html',
  styleUrls: ['./adminchecks.component.css'],
})
export class AdminchecksComponent {
  patron: Patron = {
    patronId: 0,
    personalInfo: {
      personalId: 0,
      fullName: '',
      gender: '',
      dob: '',
    },
    cardCredentials: {
      cardId: 0,
      cardNumber: '',
      cardValidity: '',
      cardType: '',
    },
    logCredentials: {
      loginId: 0,
      userName: '',
      password: '',
      email: '',
    },
    accessToken: {
      accessToken: '',
      tokenId: 0,
    },
  };

  cardNumber!: string;
  
  constructor(
    private patronService: PatronService,
    private ngxService: NgxUiLoaderService
  ) {
  
  }

  findUser() {
    if (this.cardNumber == null) {
      alert('Please Input Card Number');
    } else {
      this.patronService
        .getPatronByCard(this.cardNumber)
        .subscribe((data: Patron) => {
          if (data == null) {
            alert('User Not Found');
          } else {
            this.ngxService.start();
            setTimeout(() => {
              this.ngxService.stop();
            }, 2200);
            console.log(data);
            this.patron = data;
          }
        });
    }
  }

  checkIn() {
    alert(this.cardNumber);
  }
}
