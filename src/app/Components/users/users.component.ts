import { Component } from '@angular/core';
import { IUser } from '../../dataTypes/users';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  users: IUser[] = [];

  /* =========== pagination=================== */
  currentPage: number = 1;
  totalPages: number = 0;
  totalPagesArray: number[] = [];

  /* =========== pagination end =================== */

/* Search functionality start */
searchText:number | undefined
/* Search functionality end */


  constructor(private _apiService: ApiService ) {
    this.iGetAllUsers(this.currentPage); 
  }
  // Get all Users
  iGetAllUsers(page: number = 1) {
    this._apiService.getAllUsers(page).subscribe({
      next: (res) => {        
        this.users = res.data;
        this.currentPage = res.page;
        this.totalPages = res.total_pages;
      },
      error: (err) => console.log(err.message),
    });
  }

  // function for pagination
  onPageChange(page: number) {
    this.currentPage = page;
    this.iGetAllUsers(page);
  }
}
