import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from "rxjs";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class InicioDcnService {

  urlServicos = 'http://localhost:3000/inicio';

  constructor(private http: HttpClient) { }


}
