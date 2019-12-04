import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'user',
  template:`
    <div class="card shadow p-3 mb-5 bg-white rounded" style="width:12vw;margin-left: 1vw">
      <div class="card-body">
        <h5 class="card-title">{{user.name}}</h5>
        <img src={{user.owner.avatar_url}} class="card-img-top" alt="...">
        <a href={{user.owner.html_url}} target="_new" class="card-link float-let">{{user.owner.login}}</a>
        <a href={{user.html_url}} target="_new" class="card-link float-righ">{{user.name}}</a>
      </div>
    </div>
  `,
  styles:[``]
})

export class UsercardComponent implements OnInit {

  constructor() { }

  @Input() user:any
  
  ngOnInit() {
  }

}