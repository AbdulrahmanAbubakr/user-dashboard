import { Component } from '@angular/core';
import { ApiService } from '../../Services/api.service';
import { IUser } from '../../dataTypes/users';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent {
  user: IUser | undefined;

  constructor(private _apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit() :void{
    const userId = this.route.snapshot.paramMap.get('id');
    if(userId){
      this._apiService.getUserById(+userId).subscribe({
        next:res =>{
          console.log(res)
          this.user = res.data
        },
        error: err => console.log(err)
      })
    }
  }

}
