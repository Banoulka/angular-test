import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuoteAPIService {
  constructor() {}

  public async fetchQuote() {
    const res = await fetch('https://api.quotable.io/random');
    const data = await res.json();
    return data;
  }
}
