    var wangdhfight = function(){
        function chunk(array,size) {
            var result = []
            if(size > array.length){
                result = array
            }else{
                var result1 = []
                var result2 = []
                for(var i = 0;i < size;i++){
                    result1.push(array[i])
                }
                for(var i = size;i < array.length; i++){
                    result2.push(array[i])
                }
                result = [result1 , result2]
            }
            return result
        }



        function compact(array){
            var result = []
            for(var i = 0 ; i <= array.length-1 ; i++){
                if(array[i]){
                    result.push(array[i])
                }
            }
            return result
        }

        function concat(array,...args){
            var result = array
            for(var i = 0;i < args.length;i++){
                if(Array.isArray(args[i])){
                    result.push(...args[i])
                }else{
                    result.push(args[i])
                }
            }
            return result
        }


        function difference(ary,...args){
            var res = []
            var c = concat(...args)
            for(var idx of ary){
                if(c.indexOf(idx) == -1){
                    res.push(idx)
                }
            }
            return res
        }



        function drop(array,n = 1){
            array.splice(0,n)
            return array
        }



        function dropRight(array,n = 1){
            var result= []
            for(var i = 0;i < array.length - n ; i++){
                result.push(array[i])
            }
            return result
        }


        function fill(array,value,start=0,end=array.length){
            for(var i = start;i < end;i++){
                array[i] = value
            }
            return array
        }

        function findIndex(array, f, fromIndex = 0) {
            if (typeof(f) == 'function') {
                for (let i = fromIndex; i < array.length; i++) {
                    if (f(array[i])) return i
                }
                return -1
            } else if (Array.isArray(f)) {
                for (let i = fromIndex; i < array.length; i++) {
                    for (let j in array[i]) {
                        if (f[0] == j && f[1] == array[i][j]) return i
                    }
                }
                return -1
            } else if (typeof(f) == 'object') {
                for (let i = fromIndex; i < array.length; i++) {
                    for (let j in array[i]) {
                        if (f[j] && array[i][j] == f[j]) return i
                    }
                }
                return -1
            } else if (typeof(f) == 'string') {
                for (let i = fromIndex; i < array.length; i++) {
                    for (let j in array[i]) {
                        if (array[i][f]) return i
                    }
                }
                return -1
            }
        }
        function findLastIndex(){

        }
        function flatten(){

        }
        function flattenDeep(){

        }
        function flattenDepth(){

        }
        function fromPairs(){

        }
        function head(){

        }
        function inital(){

        }
        function indexOf(array,value,fromindex = 0){
            for(var i = fromindex; i < array.length;i++){
                if(array[i] == value){
                    return i
                }
                return -1
            }
        }

        function reverse(){

        }
        
        function sortedIndex(){

        }
        function every(){

        }
        function find(array,f,fromIndex=0){
            if (typeof(f) == 'function') {
                for (let i = fromIndex; i < array.length; i++) {
                    if (f(array[i])) return array[i]
                }
                return -1
            } else if (Array.isArray(f)) {
                for (let i = fromIndex; i < array.length; i++) {
                    for (let j in array[i]) {
                        if (f[0] == j && f[1] == array[i][j]) return array[i]
                    }
                }
                return -1
            } else if (typeof(f) == 'object') {
                for (let i = fromIndex; i < array.length; i++) {
                    for (let j in array[i]) {
                        if (f[j] && array[i][j] == f[j]) return array[i]
                    }
                }
                return -1
            } else if (typeof(f) == 'string') {
                for (let i = fromIndex; i < array.length; i++) {
                    for (let j in array[i]) {
                        if (array[i][f]) return array[i]
                    }
                }
                return -1
            }
        }
        function filter(){

        }
        function toArray(){

        }
        function max(){

        }
        function maxBy(){

        }
        function min(){

        }
        function minBy(){

        }
        function sum(){

        }
        function sumBy(){

        }
        return{
            chunk,
            compact,
            concat,
            difference,
            drop,
            dropRight,
            fill,
            filter,
            indexOf,
            find,
            findIndex,
        }
    }()
