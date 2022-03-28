import { database } from './database.js'

export class Hero {
    constructor(query){
        query.name == undefined ? this.name = 'undefined' : this.name = query.name 
        query.strength == undefined ? this.strength = 'undefined' : this.strength = query.strength 
        query.intelligence == undefined ? this.intelligence = 'undefined' : this.intelligence = query.intelligence 
        query.agillity == undefined ? this.agillity = 'undefined' : this.agillity = query.agillity 
        query.origin == undefined ? this.origin = 'undefined' : this.origin = query.origin 
        this.class_name = 'hero'
    }

    async create(){   
    
        let obj = JSON.parse(JSON.stringify(this))
        new database().create(this.class_name, this.name, obj)
    }
    
    async read(){
        let _hero = await new database().read(this.class_name, this.name)
        console.log('hero:', _hero)
    }
    
    async update(){
        let obj = {}
        obj.name = this.name
        if (this.strength != 'undefined')
            obj.strength = parseFloat(this.strength)
        if (this.intelligence != 'undefined')
            obj.intelligence = parseFloat(this.intelligence)
        if (this.agillity != 'undefined')
            obj.agillity = parseFloat(this.agillity)
        if (this.origin != 'undefined')
            obj.origin = this.origin

        await new database().update(this.class_name, this.name, obj)
    }

    async delete(){
        await new database().delete(this.class_name, this.name)
    }
}    