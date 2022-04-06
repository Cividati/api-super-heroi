// Initialize Cloud Firestore through Firebase
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { doc, setDoc, getDoc, deleteDoc, updateDoc } from 'firebase/firestore';

export class database {
    constructor(){
      this.creds = {
        apiKey: process.env.apiKey,
        authDomain: process.env.authDomain,
        projectId: process.env.projectId
        }  
        
      initializeApp(this.creds)
      this.db = getFirestore();
    }

    async create(collection, document, obj) {    
      
      try {
        const docRef = doc(this.db, collection, document)
        const docsSnap = await setDoc(docRef, obj);

        // console.log("Document created with ID: ", document);
        return true

      } catch (e) {
        // console.error("Error adding document: ", e);
        return false
      }
    }

    async read(collection, document) {
        const docRef = doc(this.db, collection, document);
        const docSnap = await getDoc(docRef);
    
        if (docSnap.exists()) {
          //console.log('Document data:', docSnap.data());
          return docSnap.data();
        } else {
          // console.log('No such document!');
          return false;
        }
    }

    async update(collection, document, obj) {
      try {
        const docRef = doc(this.db, collection, document)
        const docsSnap = await updateDoc(docRef, obj);

        // console.log("Document updated with ID: ", document);
        return true 

      } catch (e) {
        // console.error("Error updating document: ", e);
        return false 
      }
    }

    async delete(collection, document) {
        try {
            const docRef = await deleteDoc(doc(this.db, collection, document));
            console.log("Document deleted with ID: ", document);
            return true

        } catch(e) {
            console.error("Error deleting document: ", e);
            return false
        }
    }
}

