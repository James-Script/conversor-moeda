import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private apiUrl = 'http://localhost:8080/conversao'; // backend local

  constructor(private http: HttpClient) {}

  getSupportedCurrencies(): string[] {
    return ['USD', 'EUR', 'BRL', 'GBP', 'JPY']; // pode melhorar depois
  }

  async convert(amount: number, fromCurrency: string, toCurrency: string): Promise<number> {
    const payload = {
      moedaOrigem: fromCurrency,
      moedaDestino: toCurrency,
      valor: amount
    };

    try {
      const response: any = await lastValueFrom(this.http.post(this.apiUrl, payload));
      return response.valorConvertido;
    } catch (error) {
      console.error('Erro ao chamar o backend de conversão:', error);
      throw error;
    }
  }
}
