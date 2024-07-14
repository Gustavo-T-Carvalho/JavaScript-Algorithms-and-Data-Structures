class HashTable {
    constructor(size = 11){
        this.keyMap = new Array(size);
    }

    _hash(key){
         let sum = 0;
        let primeSalt = 17;
        for(let i = 0; i< Math.min(key.length, 100); i++){
            let value = (key.charCodeAt(i) - 96)
            sum = (sum * primeSalt + value) % this.keyMap.length;
        }
        return sum;
    }

    set(key, value){
        let index = this._hash(key);
        
        if(!this.keyMap[index]){
            this.keyMap[index] = [];
        } 
        
        this.keyMap[index].push([key, value]);
        
    }

    get(key){
        let index = this._hash(key);
        if(!this.keyMap[index]){
            return undefined;
        } 

        const searchResult =  this.keyMap[index].find(entry => {
                return entry[0] === key;
        })

        return searchResult ? searchResult[1] : undefined;
    }

    keys(unique = true){
        const keys = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]){
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if(!unique || !keys.includes(this.keyMap[i][j][0])){
                        keys.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }

        return keys;
    }

     values(unique = true){
        const values = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]){
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if(!unique || !values.includes(this.keyMap[i][j][1])){
                        values.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        return values;
    }
}

const hashTable = new HashTable(11);
hashTable.set("blue", 1)
hashTable.set("pink", 1)
hashTable.set("orange", 1)
hashTable.set("orange", 2)