import { Component, Inject, OnInit } from '@angular/core';
import { QuoteAPIService } from '../quotes/quote-api.service';
import { NgIf, NgFor, NgStyle } from '@angular/common';

@Component({
  selector: 'app-quote-list',
  standalone: true,
  imports: [NgIf, NgFor, NgStyle],
  templateUrl: './quote-list.component.html',
  styleUrl: './quote-list.component.css',
})
export class QuoteListComponent implements OnInit {
  private quoteService: QuoteAPIService;

  public isLoading: boolean;
  public quote: any | null;

  constructor(quoteService: QuoteAPIService) {
    this.isLoading = true;
    this.quoteService = quoteService;
    this.quote = null;
  }

  ngOnInit(): void {
    this.refetchQuote();
  }

  public refetchQuote(): void {
    this.isLoading = true;
    this.quoteService.fetchQuote().then((quote) => {
      this.isLoading = false;
      console.log('quote', quote);
      this.quote = quote;
    });
  }

  // Function to generate a random gradient
  getRandomGradient(): string {
    const colors = Array.from({ length: 3 }, () =>
      this.getRandomHSLColor()
    ).join(', ');
    return `linear-gradient(90deg, ${colors})`;
  }

  // Helper function to generate a random HSL color
  getRandomHSLColor(): string {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 100%, 40%)`;
  }
}
