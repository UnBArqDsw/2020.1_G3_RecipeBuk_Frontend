import { Injectable } from '@angular/core';
import  * as Firebase from 'firebase' ;

@Injectable({ providedIn: 'root' })
export class FirebaseService {
    public firebase = Firebase;
}