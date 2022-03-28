import { database } from './database.js'

export class Hero {
    constructor(query){
        query.name == undefined ? this.name = 'undefined' : this.name = query.name 
        query.strength == undefined ? this.strength = 'undefined' : this.strength = query.strength 
        query.intelligence == undefined ? this.intelligence = 'undefined' : this.intelligence = query.intelligence 
        query.agility == undefined ? this.agility = 'undefined' : this.agility = query.agility 
        query.origin == undefined ? this.origin = 'undefined' : this.origin = query.origin 
        this.class_name = 'hero'
    }

    async create(){   
    
        let obj = JSON.parse(JSON.stringify(this))
        new database().create(this.class_name, this.name, obj)
    }
    
    async read(){
        await new database().read(this.class_name, this.email)
    }
    
    async update(){
        await new database().update(this.class_name, this.email, obj)
    }
}    