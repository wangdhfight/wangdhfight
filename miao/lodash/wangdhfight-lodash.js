    var wangdhfight = function(){
        function chunk(ary,size) {
            var result = []
            if(size > ary.length){
                result = ary
            }else{
                var result1 = []
                var result2 = []
                for(var i = 0;i < size;i++){
                    result1.push(ary[i])
                }
                for(var i = size;i < ary.length; i++){
                    result2.push(ary[i])
                }
                result = [result1 , result2]
            }
            return result
        }
        function compact(ary){
            var result = []
            for(var i=0;i <= ary.length-1;i++){
                if(ary[i]){
                    result.push(ary[i])
                }
            }
            return result
        }
        function concat(ary){
            var result = []
            for(var i=0;i<ary.length)
        }
        return{
            chunk,
            compact,
        }
    }()
