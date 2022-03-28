import { database } from './database.js'

export class hero {
    constructor(name, strength=0, intelligence=0, agility=0, origin=''){
        this.name = name
        this.strength = strength
        this.intelligence = intelligence
        this.agility = agility
        this.origin = origin
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