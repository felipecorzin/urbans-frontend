import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Actividad } from '../interfaces/actividades.interface';


@Injectable({
  providedIn: 'root'
})
export class AcitividadesService {

  private actividades: Actividad[] = [
    {
        id: 1,
        title: "Bachata",
        desc_1: "Som un col·lectiu de gent urbanita, gent del barri que desitja fer activitats culturals per a tothom, per a totes les edats. Sigui la que sigui.Amb fonaments únics-transmetre la nostra experiència motivació i felicitat a tots.",
        desc_2: "Tal com ara no disposem d’una estructura molt forta ja que es creada molt recentment, però contem amb una avantatjosa experiència. Oferim: Suport i col·laboració a altres entitats sense ànim de lucre aportant coneixements, diversificació i formació. Suport a projectes ecològics mediambientals. Formació cultural de ball i entreteniment. Creació de diversos tallers creatius i culturals d'una manera mediàtica i multi generacional. Formació tecnològica. Atenció i formació a discapacitats (formadors titulats). Tenim moltes necessitats d’espais, de talleristes, de voluntaris i gent amb ganes de fer coses adapten nos a la nova normalitat",
        img: "actividades/bachata.png"
    },
    {
        id: 2,
        title: "Butifarrada",
        desc_1: "Som un col·lectiu de gent urbanita, gent del barri que desitja fer activitats culturals per a tothom, per a totes les edats. Sigui la que sigui.Amb fonaments únics-transmetre la nostra experiència motivació i felicitat a tots.",
        desc_2: "Tal com ara no disposem d’una estructura molt forta ja que es creada molt recentment, però contem amb una avantatjosa experiència. Oferim: Suport i col·laboració a altres entitats sense ànim de lucre aportant coneixements, diversificació i formació. Suport a projectes ecològics mediambientals. Formació cultural de ball i entreteniment. Creació de diversos tallers creatius i culturals d'una manera mediàtica i multi generacional. Formació tecnològica. Atenció i formació a discapacitats (formadors titulats). Tenim moltes necessitats d’espais, de talleristes, de voluntaris i gent amb ganes de fer coses adapten nos a la nova normalitat",
          "img": "actividades/butifarrada-2024.png"
    },
    {
        id: 3,
        title: "Fem Teatre",
        desc_1: "Som un col·lectiu de gent urbanita, gent del barri que desitja fer activitats culturals per a tothom, per a totes les edats. Sigui la que sigui.Amb fonaments únics-transmetre la nostra experiència motivació i felicitat a tots.",
        desc_2: "Tal com ara no disposem d’una estructura molt forta ja que es creada molt recentment, però contem amb una avantatjosa experiència. Oferim: Suport i col·laboració a altres entitats sense ànim de lucre aportant coneixements, diversificació i formació. Suport a projectes ecològics mediambientals. Formació cultural de ball i entreteniment. Creació de diversos tallers creatius i culturals d'una manera mediàtica i multi generacional. Formació tecnològica. Atenció i formació a discapacitats (formadors titulats). Tenim moltes necessitats d’espais, de talleristes, de voluntaris i gent amb ganes de fer coses adapten nos a la nova normalitat",
          "img": "actividades/fem-teatre.png"
    },
    {
        id: 4,
        title: "Flamenco",
        desc_1: "Som un col·lectiu de gent urbanita, gent del barri que desitja fer activitats culturals per a tothom, per a totes les edats. Sigui la que sigui.Amb fonaments únics-transmetre la nostra experiència motivació i felicitat a tots.",
        desc_2: "Tal com ara no disposem d’una estructura molt forta ja que es creada molt recentment, però contem amb una avantatjosa experiència. Oferim: Suport i col·laboració a altres entitats sense ànim de lucre aportant coneixements, diversificació i formació. Suport a projectes ecològics mediambientals. Formació cultural de ball i entreteniment. Creació de diversos tallers creatius i culturals d'una manera mediàtica i multi generacional. Formació tecnològica. Atenció i formació a discapacitats (formadors titulats). Tenim moltes necessitats d’espais, de talleristes, de voluntaris i gent amb ganes de fer coses adapten nos a la nova normalitat",
          "img": "actividades/flamenco.bmp"
    },
    {
        id: 5,
        title: "LineDance",
        desc_1: "Som un col·lectiu de gent urbanita, gent del barri que desitja fer activitats culturals per a tothom, per a totes les edats. Sigui la que sigui.Amb fonaments únics-transmetre la nostra experiència motivació i felicitat a tots.",
        desc_2: "Tal com ara no disposem d’una estructura molt forta ja que es creada molt recentment, però contem amb una avantatjosa experiència. Oferim: Suport i col·laboració a altres entitats sense ànim de lucre aportant coneixements, diversificació i formació. Suport a projectes ecològics mediambientals. Formació cultural de ball i entreteniment. Creació de diversos tallers creatius i culturals d'una manera mediàtica i multi generacional. Formació tecnològica. Atenció i formació a discapacitats (formadors titulats). Tenim moltes necessitats d’espais, de talleristes, de voluntaris i gent amb ganes de fer coses adapten nos a la nova normalitat",
          "img": "actividades/linedance.png"
    },
    {
        id: 6,
        title: "Vermutada",
        desc_1: "Som un col·lectiu de gent urbanita, gent del barri que desitja fer activitats culturals per a tothom, per a totes les edats. Sigui la que sigui.Amb fonaments únics-transmetre la nostra experiència motivació i felicitat a tots.",
        desc_2: "Tal com ara no disposem d’una estructura molt forta ja que es creada molt recentment, però contem amb una avantatjosa experiència. Oferim: Suport i col·laboració a altres entitats sense ànim de lucre aportant coneixements, diversificació i formació. Suport a projectes ecològics mediambientals. Formació cultural de ball i entreteniment. Creació de diversos tallers creatius i culturals d'una manera mediàtica i multi generacional. Formació tecnològica. Atenció i formació a discapacitats (formadors titulats). Tenim moltes necessitats d’espais, de talleristes, de voluntaris i gent amb ganes de fer coses adapten nos a la nova normalitat",
          "img": "actividades/vermutada.png"
    }
  ];
  constructor() { }

  getActividades() {
    return this.actividades;
  }

  getActividad(id: any) {
    return this.actividades[id];
  }

}


/*

getActividades(): Observable<Actividad[]> {
    return this.http.get<Actividad[]>(`${ this.baseUrl }/actividades`);
  }

  getActividadPorId( id: string ):Observable<Actividad> {
    return this.http.get<Actividad>(`${ this.baseUrl }/actividades/${ id }`);
}*/
