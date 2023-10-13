import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
 
 //constructor(private ruta: Router){}
  //let ruta: Router= new Router()
 
 
  let acceso = localStorage.getItem('login');
  //let acceso = "true";

  if (acceso === "true") {
    return true;
  } else {
    let ruta: Router= new Router()
    ruta.navigate(['/publica'])
    return false;
  }


};
