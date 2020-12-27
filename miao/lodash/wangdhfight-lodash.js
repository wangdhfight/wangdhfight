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
        function findLastIndex(array, f, fromIndex = array.length -1 ){
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
        function flatten(ary){
            let result = []
            for(let x of ary){
                if(Array.isArray(x)){
                    for(let i = 0 ; i < x.length; i++){
                        result.push(x[i])
                    }
                }
                else{
                    result.push(x)
                }
            }
            return result
        }
        function flattenDeep(ary,result = []){
            for(var x of ary){
                if(Array.isArray(x)){
                    flattenDeep(x,result)
                }
                else{
                    result.push(x)
                }
            }
            return result
        }

        function flattenDepth(ary,depth = 1){
            if(depth === 0){
                return ary
            }
            let res = []
            ary.forEach((x) => {
                if(Array.isArray(x)){
                    res  = res.concat(x)
                }
                else{
                    res.push(x)
                }
            })
            return res
        }

        function fromPairs(ary){
                let res = {};
                for (let i = 0; i < ary.length; i++) {
                    res[ary[i][0]] = ary[i][1];
                }
                return res;
        }

        function head(ary){
            if(ary == []){
                return undefined
            }
            return ary.shift()
        }

        function initial(ary){
            let n = ary.length - 1
            return ary.slice(0,n)
        }

        function indexOf(ary,val,idx){//NaN判断不了
            if(val !== val){
                for(var i = idx; i < ary.length;i++){
                    if(ary[i] !== ary[i])
                    return i
                }
                return -1
            }
            for(var i = idx; i < ary.length ; i++){
                if(ary[i] === val) {//NaN !== NaN
                    return i
                }
            }
            return -1
        }

        function reverse(ary){
            function swap(ary,i,j){
                var temp = ary [i]
                ary[i] = ary [j]
                ary[j] = temp
            }
            for(let i = 0,n = ary.length - i - 1; i < Math.floor(ary.length >> 1); i++){
                swap(ary,i,n)
            }
            return ary
        }

        function sortedIndex(array, value) {
            for (i = 0; i < array.length; i++) {
                if (array[i] >= value) {
                    return i
                }
            }
            return array.length;
        }

        function every(arr, boolean) {
            if (boolean != Boolean) {
                if (findIndex(arr, boolean) != -1) return true
                return false
            }

            for (e of arr) {
                if (typeof e != "boolean") return false
            }
            return true
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
        function toArray(val){
            var res = []
            if(typeof(val) == 'object'){
                for (let x in val) {
                    res.push(val[x])
                }
            }
            if(typeof(val) == 'string'){
                return val.split('')
            }
            if(typeof(val) == 'number' || 'null'){
                res = []
            }
            return res
        }
        function max(ary){
            if(ary.length < 1) return undefined
            for(var i = 0 ; i <= ary.length-2; i++){
                var Max = (ary[i] > ary[i+1]) ? ary[i] : ary[i+1]
            }
            return Max
        }
        function maxBy(ary,f){
            if(ary.length < 1) return undefined
            if(typeof f == 'function'){
                for(let i in ary){
                    var Max = (f(ary[i]) > f(ary[i+1]))? f(ary[i]) : f(ary[i+1])
                }
            }else{
                for(let i in ary){
                    var Max = (ary[i] > ary[i+1]) ? ary[i] : ary[i+1]
                }
            }
            return Max
        }
        function min(ary){
            if(ary.lenght < 1) return undefined;
            for(var i = 0 ; i <= ary.length-2; i++){
                var Min = (ary[i] < ary[i+1]) ? ary[i] : ary[i+1]
            }
            return Min
        }
        function minBy(ary,f){
            if(ary.length < 1) return undefined
            if(typeof f == 'function'){
                for(let i in ary){
                    var Min = (f(ary[i]) < f(ary[i+1])) ? f(ary[i]) : f(ary[i+1])
                }
            }else{
                for(let i in ary){
                    var Min = (ary[i] < ary[i+1]) ? ary[i] : ary[i+1]
                }
            }
            return Min
        }
        function sum(ary){
            return ary.reduce((pre,cur)=>pre+cur,0)
        }
        function sumBy(ary,f){
            let res = 0
            if(typeof f == 'function'){
                for(let i in ary){
                    res += f(i)
                }
            }else{
                for(let i in ary){
                    res += f[i]
                }
            }
            return res
        }
        function isArray(ary){
            return Array.isArray(ary)
        }
        function forOwn(obj,iterator){
            var hasown = Object.prototype.hasOwnProperty
            for(var key in obj){
                if(hasown.call(obj,key)){
                    if(iterator(obj[key],key,obj) === false){
                        break
                    }
                }
            }
            return obj
        }
        function union(...ary){
            let set = new Set()
            ary.forEach((item)=>{
                item.forEach((jtem)=>{
                    set.add(jtem)
                })
            })
            return [...set.values()]
        }
        function map(collection,predicate = it => it){
            let res = []
            for(let i = 0; i < collection.length; i++){
                res.push(predicate(collection[i]))
            }
            return res
        }
        function reduce(collection,predicate = it => it,accumulator){
            let res = accumulator
            for(let i = 0;i < collection.length; i++){
                res = predicate(res,collection[i])
            }
            return res
        }
        function filter(collection, predicate = it => it) {
            let res = []
            for (let i = 0; i < collection.length; i++) {
                if (predicate(collection[i])){
                    res.push(collection[i])
                }
            }
            return res
        }
        function forEach(collection,predicate = it =>it){
            let res = []
            for(var i = 0; i < collection.length; i++){
                res.push(predicate(collection[i]))
            }
            return res
        }
        function iteratee(f){
            if(typeof(f)=='string'){
                return 
            }
        }
        function fromPairs(ary){
            let res = {}
            for(let i = 0; i < ary.length ; i++){
                res[ary[i][0]] = ary[i][1]
            }
            return res
        }
        function last(ary){
            return ary[ary.length-1]
        }
        function intersection(start, ...arr) {
            let res = [];
            for (let i of start) {
                let flag = true;
                for (let a of arr) {
                    if (!a.includes(i)) {
                        flag = false;
                        break;
                    }
                }
                flag && res.push(i);
            }
            return res;
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
            findLastIndex,
            flatten,
            flattenDeep,
            flattenDepth,
            fromPairs,
            head,
            initial,
            reverse,
            sortedIndex,
            every,
            toArray,
            isArray,
            forOwn,
            max,
            min,
            maxBy,
            minBy,
            sum,
            sumBy,
            union,
            map,
            reduce,
            forEach,
            iteratee,
            fromPairs,
            last,
            intersection,
            
        }
    }()
