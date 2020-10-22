class Mvvm {
  constructor(options) {
    const {el, data, methods} = options;
    console.log(el, data, methods)
    this.methods = methods;
    this.target = null;
    this.observe(data);
    this.compile(document.querySelector(el))
  }

  // 监听对象
  observe(data) {
    Object.keys(data).forEach((key)=> {
      this.defineReactive(data, key, data[key]);
    })
  }

  // 监听方法  
  defineReactive(data, key, val){
    console.log('进入defineReactive')
    console.log(typeof val)
    if(typeof val === 'object'){
      return this.observe(val)
    }
    const dispatcher = new Dispatcher();
    console.log(data, key, val)
    Object.defineProperty(data, key, {
      enumerable: true, 
      configurable: false,
      get: function() { // 获取属性值时调用，默认为undefined
        console.log('获取了值')
        // 发起订阅
        dispatcher.add(this.target)
        return val
      },
      set: function(newV) { // 修改属性值时调用，默认为undefined
        console.log(`值被修改${val} ===> ${newV}`)
        if(newV === val){return;}
        val = newV;
        // 通知更新
        dep.notify(newV)
      }
    })
  }
  // html模板编译
  compile(dom) {
    // console.log(dom.childNodes)
    const childs = dom.childNodes;
    for (const node of childs) {
      // console.log(node)
      // nodeType 参考 https://www.w3school.com.cn/jsref/prop_node_nodetype.asp
      if(node.nodeType === 1) {
        const attrs = node.attributes;
        for(const attr of attrs) {
          if(attr.name === 'v-model') {
            const name = attr.value;
            node.addEventListener('input', (e) => {
              this[name] = e.target.value;
            });
            this.target = new Watcher(node, 'input');
            console.log(this.target)
            this[name];
            this['v']
          }
          if(attr.name === '@click') {
            const name = attr.value;
            node.addEventListener('click', this.methods[name].bind(this))
          }
        }
      }
      // nodeType 参考 https://www.w3school.com.cn/jsref/prop_node_nodetype.asp
      if(node.nodeType === 3){
        const reg = /\{\{(.*)\}\}/;
        const match = node.nodeValue.match(reg);
        // console.log(match)
        if(match) {
          const name = match[1].trim();
          console.log(name)
          console.log(node)
          console.log(this)
          this.target = new Watcher(node, 'text');
          this[name];
        }
      }
    }
  }
}


// 派发者
class Dispatcher {
  constructor() {
    this.watchers = new Array();
  }

  // 增加订阅者
  add(watcher) {
    this.watchers.push(watcher)
  }

  // 通知所有订阅者更新
  notify(value){
    this.watchers.forEach((item)=> {
      item.update(value)
    })
  }
}

// 订阅者
class Watcher {
  constructor(node, type) {
    this.node = node;
    this.type = type;
  }
  update(value) {
    if (this.type === 'input') {
      this.node.value = value;
    }
    if (this.type === 'text') {
      console.log(111)
      this.node.nodeValue = value;
    }
  }
}