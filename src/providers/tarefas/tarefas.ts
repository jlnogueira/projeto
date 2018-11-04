import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AuthProvider } from '../../providers/auth/auth'
import { Tarefas } from '../../models/tarefas'

@Injectable()
export class TarefasProvider {
  // Definição do caminho onde será salvo os dados
  // dos usuários
  private caminho: string = '';

  // Coleção de tarefas
  private tarefasColllection: AngularFirestoreCollection<Tarefas>;

  // Lista de tarefas
  tasks: Observable<Tarefas[]>;


  constructor(public http: HttpClient,private afs: AngularFirestore, private auth: AuthProvider) {

    // Verificando ser o usuário está logado para criarmos o caminho
    this.auth.user.subscribe(auth => {

      // Verifica se está logado e adiciona o caminho, usaremos o email
      // como caminho para ficar mais fácil identificar as tarefas de cada usuário
      if(auth != null)
      {
        this.caminho = '/' + auth.email;
        this.tarefasColllection = afs.collection<Tarefas>(this.caminho, ref => {
          return ref;
        });

      } else {
        this.caminho = '';
      }
    });
    console.log('Hello TarefasProvider Provider');
  }
// Método usado para adicionar uma tarefa
adicionar(tarefa: Tarefas) {
  this.tarefasColllection.add(tarefa);
}
}
