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

        console.log("Document created with ID: ", document);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }

    async read(collection, document) {
        const docRef = doc(this.db, collection, document);
        const docSnap = await getDoc(docRef);
    
        if (docSnap.exists()) {
          //console.log('Document data:', docSnap.data());
          return docSnap.data();
        } else {
          // doc.data() will be undefined in this case
          console.log('No such document!');
          return false;
        }
    }

    async update(collection, document, obj) {
      try {
        const docRef = doc(this.db, collection, document)
        const docsSnap = await updateDoc(docRef, obj);

        console.log("Document created with ID: ", document);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }

    async delete(collection, document) {
        try {
            const docRef = await deleteDoc(doc(this.db, collection, document));
            console.log("Document deleted with ID: ", document);
        } catch(e) {
            console.error("Error deleting document: ", e);
        }
    }
}

