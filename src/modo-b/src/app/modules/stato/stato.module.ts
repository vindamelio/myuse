//import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { Injectable } from '@angular/core';
import { State, Store, Select, Selector, Action, StateContext } from '@ngxs/store';
import { Observable, throwError } from 'rxjs';
import { withLatestFrom, catchError, tap } from 'rxjs/operators';
import { HttpErrorResponse } from "@angular/common/http";

import { User } from '../../models/user';
import { UserStatoModel, BozzaUserStatoModel, BozzaUserStatoModelRequest } from './stato-model.module';
import { GetUsers, GetUser, CreateUser, UpdateUser, DeleteUser, RemoveUser } from './stato-action.module';
import { UserProviderService } from '../../services/user-provider.service';

//@NgModule({
//  declarations: [],
//  imports: [
//    CommonModule
//  ]
//})

@State<UserStatoModel[]>({
  name: 'users',
  defaults: [
    {
      users:[],
      user:new User("","")
    }
  ]
})


@Injectable()
export class StatoModule { 
  //@Select((state: { animals: any; }) => state.animals) animals$: Observable<any> | undefined;
  //constructor(private store: Store) {}

  //getUsers(account: string) {
  //  this.store.dispatch(new GetUsers());
  //}

  //getUser(id: number) {
  //  this.store.dispatch(new GetUser(id));
  //}

  //createUser(user: User) {
  //  this.store.dispatch(new CreateUser(user));
  //}

  //deleteUser(id: number) {
  //  this.store.dispatch(new DeleteUser(id));
  //}


  constructor(private userProviderService: UserProviderService) {}

  @Selector()
  static getUserList(state: UserStatoModel) {
    return state.users;
  }

  @Selector()
  static getSelectedUser(state: UserStatoModel) {
    console.log("getSelectedUser!");
    return state.user;
  }

  



  @Action(GetUsers)
  getUsers({ getState, setState }: StateContext<UserStatoModel>) {
    return this.userProviderService.getUsers().pipe(
      tap(response => {
        const state = getState();
        setState({
          ...state,
          users: response
        });
      }),
      catchError((err: HttpErrorResponse) => {
        alert("Something happened. Please try again.");
        return throwError(new Error(err.message));
      })
    );
  }

  //@Action(GetUsers)  
  //getUserss(context: StateContext<UserStatoModel> , { }: GetUsers) {  
  //    const state = context.getState();  
  //    context.patchState({  
  //        users: [...state.users, ]  
  //    });  
  //    console.log(context.getState());  
  //}  



  @Action(GetUser)
  getUserByIdUser( { getState, setState, patchState }: StateContext<UserStatoModel>, { idUser }: GetUser ) {
    return this.userProviderService.getUser(idUser).pipe(
      tap(response => {
        const state = getState();
        patchState({
          ...state,
          user: response
        });
      }),
      catchError((err: HttpErrorResponse) => {
        alert("Something happened. Please try again.");
        return throwError(new Error(err.message));
      })
    );
  }

  //@Action(GetUser)  
  //getUserByIdd(context: StateContext<UserStatoModel> , { idUser}: GetUser) {  
  //    const state = context.getState();  
  //    context.patchState({  
  //        users: [...state.users, ]  
  //    });  
  //    console.log(context.getState());  
  //}  


  @Action(CreateUser)
  createUser( { getState, patchState }: StateContext<UserStatoModel>,  { user }: CreateUser  ) {
    return this.userProviderService.createUser(user).pipe(
      tap(response => {
        const state = getState();
        patchState({
          users: [...state.users, response]
        });
      }),
      catchError((err: HttpErrorResponse) => {
        alert("Something happened. Please try again.");
        return throwError(new Error(err.message));
      })
    );
  }


  //@Action(CreateUser)  
  //createUserr(context: StateContext<UserStatoModel> , { user }: CreateUser) {  
  //    const state = context.getState();  
  //    context.patchState({  
  //      users: [...state.users, user]  
  //    });  
  //    console.log(context.getState());  
  //}  


  @Action(UpdateUser)
  updateUser( { getState, setState }: StateContext<UserStatoModel>, { user }: UpdateUser ) {
    // Optimistic update
    const previousState = getState();
    const state = getState();
    const users = [...state.users];
    const index = users.findIndex(item => item.idUser === user.idUser);
    users[index] = user;
    setState({
      ...state,
      users
    });
    return this.userProviderService.updateUser(user).pipe(
      catchError((err: HttpErrorResponse) => {
        alert("Something happened. Please try again.");
        setState({
          ...state,
          users: previousState.users
        });
        return throwError(new Error(err.message));
      })
    );
  }

  //@Action(UpdateUser)  
  //updateUserr(context: StateContext<UserStatoModel> , { user }: UpdateUser) {  
  //    const state = context.getState();  
  //    context.patchState({  
  //      users: [...state.users, user]  
  //    });  
  //    console.log(context.getState());  
  //} 


  @Action(DeleteUser)
  deleteUser( { getState, setState }: StateContext<UserStatoModel>, { idUser }: DeleteUser ) {
    // Optimistic update
    const previousState = getState();
    const state = getState();
    const filteredArray = state.users.filter(h => h.idUser !== idUser);
    setState({
      ...state,
      users: filteredArray
    });
    return this.userProviderService.deleteUser(idUser).pipe(
      catchError((err: HttpErrorResponse) => {
        alert("Something happened. Please try again.");
        setState({
          ...state,
          users: previousState.users
        });
        return throwError(new Error(err.message));
      })
    );
  }

  //@Action(DeleteUser)  
  //deleteUserr(context: StateContext<UserStatoModel> , { idUser }: DeleteUser) {  
  //    const previousState = context.getState(); 
  //    const state = context.getState(); 
  //    context.patchState({  
  //      users: [...previousState.users]  
  //    });  
      //???
  //    console.log(context.getState());  
  //} 

  @Action(RemoveUser)  
  removeUser(  {getState, patchState }: StateContext<UserStatoModel>,  { payload: { idUser } }: RemoveUser) {  
      patchState({  
        users: getState().users.filter(a => a.idUser !== idUser)  

      });  
      console.log(idUser);  
      console.log(getState());  
  }  

}
