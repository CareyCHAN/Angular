import { Component, OnInit } from '@angular/core';

import { cuisineList } from 'src/app/cuisine-list.const';
import { cuisineList2 } from 'src/app/cuisine-list2.const';
import { cuisineList3 } from 'src/app/cuisine-list3.const';
import { cuisineList4 } from 'src/app/cuisine-list4.const';
import { Message } from '../message';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.css']
})
export class RankComponent implements OnInit {
  name = '';
  content = '';
  list = cuisineList;
  list2 = cuisineList2;
  list3 = cuisineList3;
  list4 = cuisineList4;
  messages: Message[] = [];



  constructor() { }

  ngOnInit() {
  }

  like(i: any) {
    this.list[i]['like']++;
  }

  like2(i: any) {
    this.list2[i]['like']++;
  }

  like3(i: any) {
    this.list3[i]['like']++;
  }

  like4(i: any) {
    this.list4[i]['like']++;
  }

  addMessage(): void {
    this.name = 'cola0521'
    // 防呆，避免名稱或內容是空值時也可以留言
     if (
       !this.name.trim() ||
       !this.content.trim()
     ) {
       return;
     }

     // 用名稱跟內容產生一個留言的資料物件
     const message = new Message(this.name, this.content);

     // 將留言的資料物件放進容器裡
     this.messages.push(message);

     // 清空內容
     this.content = '';

   }



}
