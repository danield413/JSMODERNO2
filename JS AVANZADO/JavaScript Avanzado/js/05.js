//JAVASCRIPT EVENT LOOP

console.log('yo me mostrare primero');

setTimeout(function(){
    console.log('yo me mostrare segundo');
}, 0)


console.log('yo me mostrare tercero');

setTimeout(function(){
    console.log('yo  cuarto');
}, 0)

new Promise(function(res){
    res('Yo soy un promise')
}).then(console.log)

console.log('yo quinto');

