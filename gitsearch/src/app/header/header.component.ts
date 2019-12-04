import { Component, OnInit } from '@angular/core';
import {GitRepositoryService} from '../GitRepository.service'

@Component({
  selector: 'app-header',
  template:`
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item"><a class="nav-link" routerLink="">Home</a></li>
            <li class="nav-item"><a class="nav-link" routerLink="/contact" routerLinkActive='active'>Contact</a></li>
            <li class="nav-item"><a class="nav-link" routerLink="/about" routerLinkActive='active'>About</a></li>
        </ul>
    </div>
    <div class='form-inline col-xs-4 col-sm-0'>
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" [(ngModel)]='searchText'>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit" (click)='fetchRepos()'>Search</button>
    </div>  
  </nav>
  `
})
export class HeaderComponent implements OnInit {

  constructor(private service:GitRepositoryService) { }
  
  searchKey:string='repositories'
  searchText:string
  ngOnInit() {
  }
  fetchRepos(){
   // this.service.fetchRepos(this.searchKey,this.searchText)
  }
}
