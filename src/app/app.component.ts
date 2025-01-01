// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgFor, NgForOf} from "@angular/common";



interface Item {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports:[FormsModule,NgFor,NgForOf]
})
export class AppComponent implements OnInit {
  items: Item[] = [];
  newItem: Item = { id: 0, name: '' };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchItems();
  }

  fetchItems() {
    this.http.get<Item[]>('http://localhost:3000/api/items').subscribe(
      (data) => {
        this.items = data;
      },
      (error) => {
        console.error('Error fetching items:', error);
      }
    );
  }

  addItem() {
    this.http
      .post<Item>('http://localhost:3000/api/items', this.newItem)
      .subscribe(
        (data) => {
          this.items.push(data);
          this.newItem = { id: 0, name: '' }; //reset newItem
        },
        (error) => {
          console.error('Error adding item:', error);
        }
      );
  }
}