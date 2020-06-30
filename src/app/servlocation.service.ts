import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { environment } from '../../src/environments/environment';
const API_URL = environment.Api_key
@Injectable({
  providedIn: 'root'
})
export class ServlocationService {
  
  constructor(private http: HttpClient) { }



  postLocation(address: string) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    return this.http.get(`${API_URL}/?sensor=false&address=${address}`, { headers: this.headers() }).toPromise()
  }

  private headers() {
        return new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            
    
}
  // getlocation(lng,lat){
  //   // let params = new HttpParams().set("lng",lng).set("lat",lat)
  //   const httpHeaders = new HttpHeaders();
  //   httpHeaders.set('Content-Type', 'application/json');
  //   return this.http.get(this.url, { headers: httpHeaders })
  // }

  // getthelocation(addres:any){
  //   let params = new HttpParams().set('q',addres)
  //   return this.http.get(this.url,{params})
  // }

}
