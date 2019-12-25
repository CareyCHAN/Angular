import { Component, OnInit } from '@angular/core';

import { cuisineList } from 'src/app/cuisine-list.const';
import { cuisineList2 } from 'src/app/cuisine-list2.const';
import { cuisineList3 } from 'src/app/cuisine-list3.const';
import { cuisineList4 } from 'src/app/cuisine-list4.const';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  list = cuisineList;
  list2 = cuisineList2;
  list3 = cuisineList3;
  list4 = cuisineList4;

  constructor() { }

  ngOnInit() {
  }

}
