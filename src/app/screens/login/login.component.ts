import { Component } from '@angular/core';
import { GuardsCheckStart, Router } from '@angular/router';
import { NickService } from 'src/app/services/nick.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor( private servicio: NickService, private ruta: Router){}

  guardarJSON( nick :string, pass: string  ){
    const temp={
      id: nick,
      pass: pass
    }
    return temp;
  }

  user:any=""
  ngOnInit(){
    this.servicio.getNick().subscribe(data=>{
      this.user=data
    })
  }

  login( nick: string, pass: string){
   const aux = this.guardarJSON( nick, pass)
      for( const  item of this.user){
        console.log(item)
        
        if( JSON.stringify(item) ==  JSON.stringify(aux) ){
          console.log("Encontrado")
          //alert("Encontrado")
          localStorage.setItem('login', 'true');
          this.ruta.navigate(['/acceso'])
          break;

        }else{
          console.log("No Encontrado")
          //alert("No encontrado")
          localStorage.setItem('login', 'false')

        } 
      } 
  }
}
