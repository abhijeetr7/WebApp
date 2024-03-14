import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { common } from './common';

@Injectable({
  providedIn: 'root'
})
export class LocalFileService {

      // private handleError!: HandleError;
  private url: String = common.s1;
  private customersUrl = this.url;
  private dbname: any = "BioPrime";

  constructor(private http: HttpClient) { }

  writeJSONLocally(data: any, fileName: string): void {
    const json = JSON.stringify(data);
    const blob = new Blob([json], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();

    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }
}
