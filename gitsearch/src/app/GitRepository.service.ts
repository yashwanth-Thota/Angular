import { Injectable } from '@angular/core'
import {Observable} from 'rxjs'
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class GitRepositoryService {

  repos:Array<any>=[]
  constructor(private _http:HttpClient) { }

  fetchRepos=(
              searchKey:String,
              searchText:string,
              pageNumber:number,
              pageCount:number
            )
            :Observable<any>=>
            {
              let uri:string="https://api.github.com/search/"+searchKey
                              +"?q="+searchText+"+language:angular&per_page="
                              +pageCount+"&page="+pageNumber
              return this._http.get(uri)
            }
}