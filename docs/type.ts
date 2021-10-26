let str: string = 'str'

let num: number = 123

let boo: boolean = false

let arr_number: number[] = [1, 2, 3]

let arr_string: string[] = ["php", "java"]

let arr_anthor: Array<number> = [1, 2, 3]

// tuple 元组 可以理解长度固定，若数组中每个item类型相同，那么即是数组
let tuple: [string, number, boolean] = ["ts", 123, false]

// enum 枚举, 不赋值默认是下标
enum Flag {
  success,
  error = 5,
  finally
}
function flag(a:Flag) {
  return Flag.success
}


// | undefined;用于不赋值的时候不报错，相关的还有｜ null ｜ any
let a_var:number | undefined;
console.log(a_var)

// void表示没有任何值，常常用于规定函数返回值
function run():void {
  console.log('run')
}

// 定义函数
let fun1: (a:number, b: number) => number
// 匿名函数
// let fun0: ():void => 
let fun2 = function():number{
  return 123
}
let fun3 = function(age: number):string{
  return `${age}`
}
// name?:为可选参数，可以不传，且只能设置最后一个值为可选参数
let fun4 = function(age: number,name?: string):string{
  return `${age}`
}
// 剩余参数
function sum(a,...b:number[]) {
  
}

// 函数重载,两个或以上同名函数，但参数不同，es5会下面会把上面的覆盖，ts中不覆盖。就是重载 
function css(config: any):any {

}

// 对象
let obj1: {name: string} = {name: 'str'}

// [propName: string] 表示key， any为value
let obj2: {name: string, [propName: string] : any} = {name: 'str'}


// 联合类型 ｜ &
let j1: {n: string} & {age: number}
let j2: {n: string} | {age: number}

// 别名 描述一个对象的结构
type mytype = {
  name: string,
  age: number
}

// 接口 定义一个类的结构， 多个interface会自动合并 可以被用extend继承 
// 和抽象类的区别是，抽象类可以有实际值，interface不可以仅仅描述结构
type interface = {
  name: string,
  age: number
}

// 属性修饰
// public 默认值
// readonly 只可读
// private 私有属性
// proteched 受包含属性，只在类或者继承的子类使用

// 泛型
// 其中a可作为泛型
function fu(a:number):number{
  return a
}
// <T>
function fu1<T>(a:T):T{
  return a
}
// 调用
fu1(123)
fu1<number>(123)

// declare用于编写被暴露的类型
// declare interface Article {
//   title: string
//   content: string
// }


// 抽象类
// absract 用于给别人继承的 不能自己执行 不能有实值
// absract class Animal
// 抽象方法, 子类必须重写
// absract xxx():vid
// 调用
// class Dog extends Animal
