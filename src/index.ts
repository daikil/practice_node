
if(true){
    var foo: number = 5;
}
console.log(foo);
if(true){
    const bar: number = 5;
}
//console.log(bar);
const a: number = 2;
const b: number = a * 2 + 1;
const less: boolean = a < b;
const equal = a === b;
console.log(`a=${a}b=${b}less=${less}equal=${equal}`);

type Obj = {
    foo: Foo,
    now: Date,
    func: any
}
type Foo = {
    bar: string
}
const obj: Obj = {
    foo: {
        bar: "baz"
    },
    now: new Date(),
    func: function():void {
        console.log("function");
    }
}
console.log(obj.foo.bar);
obj.foo.bar = "hello";
console.log(obj.foo.bar);
console.log(obj.func());
console.log(obj.now);

const add = (a: number, b: number):number => {
    return a + b;
}

setTimeout(():void => console.log("1s"), 1000);

(():void => console.log("executed"))();