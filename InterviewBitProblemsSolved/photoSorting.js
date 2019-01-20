original = 'photo.jpg, Warsaw, 2013-09-05 14:08:15\njohn.png, London, 2015-06-20 15:13:22\nmyFriends.png, Warsaw, 2013-09-05 14:07:13\nEiffel.jpg, Paris, 2015-07-23 08:03:02\npisatower.jpg, Paris, 2015-07-22 23:59:59\nBOB.jpg, London, 2015-08-05 00:02:03\nnotredame.png, Paris, 2015-09-01 12:00:00\nme.jpg, Warsaw, 2013-09-06 15:40:22\na.png, Warsaw, 2016-02-13 13:33:50\nb.jpg, Warsaw, 2016-01-02 15:12:22\nc.jpg, Warsaw, 2016-01-02 14:34:30\nd.jpg, Warsaw, 2016-01-02 15:15:01\ne.png, Warsaw, 2016-01-02 09:49:09\nf.png, Warsaw, 2016-01-02 10:55:32\ng.jpg, Warsaw, 2016-02-29 22:13:11'
var 	result = ''
namedHash = {}
sec = {}
keyValue = {}

Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {s = "0" + s;}
  return s;
}

function sortHash(hash, cb){
	            var o = {};

	Object.keys(hash).sort((a, b) => a.localeCompare(b)).map(function (i) {
            o[i] = hash[i];
            
            
            // return o;
	});
	cb(o)
}

// find name  = original[i].split(',')[2] in sorted -- new(name+(namedHash[name]+1))

function solution(S) {
	hash = {}
    // console.log(typeof(S));

    arrPhotoData = S.split('\n');

    arrPhotoData.forEach(function(Photo){
        temp = Photo.split(',');
        hash[temp[2]] = Photo
    })

    m = sortHash(hash, function(t){
    	Object.keys(t).forEach(function(key){
    		// console.log('t', key)
    		updateKey = t[key].split(',')[1]
    		// console.log("updateKey", updateKey)
    		if(namedHash[updateKey]){
    			namedHash[updateKey] = namedHash[updateKey]+1;
    		} 
    		else{
    			namedHash[updateKey]= 1;
    		}
    		sec[key] = {name: t[key].split(',')[1], value:namedHash[updateKey]};
    		if(keyValue[t[key].split(',')[1]] && keyValue[t[key].split(',')[1]] < namedHash[updateKey])
    			keyValue[t[key].split(',')[1]] = namedHash[updateKey];
    		else{
    			keyValue[t[key].split(',')[1]] = namedHash[updateKey];
    		}

    		// console.log('sec',sec);

    		// console.log("namedHash", namedHash)

    	})


    	// namedHash[[t].split(',')[2]] = 0;
    	// console.log("namedHash", namedHash)

    	// maxvalue = 0;
    	// sec.forEach(function(key){
    	// 	key
    	// })

    	arrPhotoData.forEach(function(Photo){
    		ans = Photo.split(',')
    		p = (keyValue[sec[ans[2]].name]);
    		// p = (p/10>=1? p/10+1:0)
    		console.log('p', p/10>=1? p/10+1:1);
    		p = p/10>=1? p/10+1:1
    		padded = (sec[ans[2]].value).pad(p).toString()
    		result = result+sec[ans[2]].name
    		+ padded
    		// +Number(sec[ans[2]].value).pad(p/10)
    		// +(sec[ans[2]].value)
    		+'.'
    		+ ans[0].split('.')[1]+'\n'

    		namedHash[ans[1]] = namedHash[ans[1]]-1
    	})
    	console.log(keyValue)
    })
console.log(result)
}

solution(original);