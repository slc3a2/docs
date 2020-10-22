function observe (data) {
  if (typeof data !== 'object' || !data){
    return;
  }
  Object.keys(data).forEach((key)=> {
    defineReactive(data, key, data[key]);
  })
}

function defineReactive(data, key, val){
  // 继续检测子属性
  // 更多参数：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
  observe(val);
  Object.defineProperty(data, key, {
    enumerable: true, 
    configurable: false,
    get: function() { // 获取属性值时调用，默认为undefined
      console.log('获取了值')
      return val
    },
    set: function(newV) { // 修改属性值时调用，默认为undefined
      console.log(`值被修改${val} ===> ${newV}`)
      val = newV
    }
  })
}

// 测试
let data = {name: '12345'}
observe(data);
data.name = '54321'