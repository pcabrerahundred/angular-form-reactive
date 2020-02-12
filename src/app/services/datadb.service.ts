import { Injectable } from '@angular/core';
//
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs'
import { IMessage } from '../models/message.interface'

@Injectable({
  providedIn: 'root'
})
export class DatadbService {
  private contactCollection: AngularFirestoreCollection<IMessage>;
  constructor(private afs: AngularFirestore) { 
    this.contactCollection = afs.collection<IMessage>('contacts');
  }

  saveMessage(newContact: IMessage): void {
    this.contactCollection.add(newContact);
  }
}
