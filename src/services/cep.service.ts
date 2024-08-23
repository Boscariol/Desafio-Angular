import { Injectable } from "@angular/core";
import { CepType } from "../app/type/cep.type";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";

@Injectable({providedIn: 'root'})
export class cepService {
    cepResponse: CepType = {
        cep: '';
        logradouro: '';
        complemento: '';
        bairro: '';
        localidade: '';
        uf:'';
    };
    constructor(private.readonly httpClient: HttpClient) {}
    getCep(cep:string) {
        return this.httpClient.get<CepType>('https://viacep.com.br/ws/${cep}/json').pipe(map)((Response) {;
            this.cepResponse = response;
            return this.cepResponse;
        }));   
        } 
    }
}