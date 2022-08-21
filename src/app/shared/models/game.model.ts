export class Game{

     name: string;
     bundle: string;
     owner: string;
     file: File;

    constructor(name: string, bundle: string, owner:string, file: File){
        this.name=name;
        this.bundle=bundle;
        this.owner=owner;
        this.file=file;
    }

}