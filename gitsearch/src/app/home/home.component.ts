import { Component, OnInit  } from '@angular/core';
import {GitRepositoryService} from '../GitRepository.service'

@Component({
  selector: 'app-home',
  template:`
  <div class="m-5">
      <form class=" form-inline mr-sm-2 ">
              <div class="form-group">
                      <label for="searchText"> Enter query:</label>
                      <input class="form-control" [(ngModel)]='searchText' name='searchText'/>
              </div>
              <div class="form-group">
                      <label for="searchKey">Search in:</label>
                      <select #searchKey class="form-control" name='searchKey'>
                          <option value="repositories">Repository</option>
                          <option value="users">Users</option>
                      </select>
              </div>
          <button class="form-control btn btn-primary" (click)='fetchRepos(searchKey.value)'>SEARCH</button>
      </form>
      <div *ngIf='count&&count>0'>Showing {{count}} results<span>({{pageCount}} per page)
          </span> <button (click)='nextPage()'>NEXT</button>
          <div class="form-group">
          <label for="pageCount"> Items per page:</label>
          <input class='form-control' type="number" (change)='fetchRepos(searchKey.value)' name='pageCount' min="12" [(ngModel)]='pageCount' step="6"/>
          
          </div>
      </div><br/><br/>
      
      <div #view style="display: grid;grid-template-columns: auto auto auto auto auto auto;grid-gap: 2vw 3vh"  >
          <div *ngIf="searchKey=='users';then repositories else users"></div>
          <ng-template #users><user *ngFor="let item of data" [user]='item'></user></ng-template>
          <ng-template #repositories><repo *ngFor="let item of data" [repo]='item'></repo></ng-template>
      </div>
      <div class="modal form-inline fade spinner-border text-secondary" role="status">
          <span class="sr-only">Loading...</span>
      </div>
  </div>
  `,
})
export class HomeComponent implements OnInit {

  constructor(private service:GitRepositoryService) {

  }
  searchKey:string
  searchText:string
  data:Array<any>=[]
  page:number=0
  count:number
  numberOfpages:number=0
  pageCount:number=12
  name:string='test'
  ngOnInit() {
  }
  fetchRepos(searchKey:string){
    
    this.service.fetchRepos(searchKey,this.searchText,this.page,this.pageCount).subscribe({
      next:data=>{
        this.data=data.items;
        this.numberOfpages=this.data.length/this.pageCount
        this.count=data.total_count
        if(this.page==0) this.page=1
        this.searchKey=searchKey},
      error:err=>console.log(err)
    })
  }
  nextPage(){
    this.page+=1
    this.fetchRepos(this.searchKey)
  }
  prevPage(){
    this.page-=1
    this.fetchRepos(this.searchKey)
  }
}
