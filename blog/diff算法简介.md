## diff算法和virtual dom

![WechatIMG3177.png](https://i.loli.net/2020/11/05/HrGjhDp8ebSt62R.png)  

在现代`mvvm`框架`react`和`vue`中，因为直接操作dom相对是要耗费更多性能的，所以`react`和`vue`都使用了`virtual dom`来替代处理dom，大致的过程是：按照dom结构生成一份`virtual dom`为`js`对象树状格式。如果数据有更新，需要表现在dom上，那么先把变化表现在`virtual dom`，再通过`diff`算法比对数据更新前后两次`virtual dom`找到差别。最后把仅仅改变的这部分更新到dom上，不用重新渲染整个页面。  

总结：`diff`算法就是找到两个`virtual dom`树结构的不同  

## diff原理 
> 在vue中，实现diff的是patch函数 

前后两次新旧`VNode`比对顺序:  

**是否值得比较(同一个标签)** >> **比较标签每个属性** >> **比较标签内容** >> **递归比较子标签重复这些步骤**
#### 是否是同一个标签：  

diff会先比对新旧`vnode`的标签是否一致。一致就按照上步骤，继续往下处理。如不一致，直接用新元素**直接替换**到旧元素，并设置`vnode`的`el`指向真实dom(没经历这步骤之前是`vnode.el = null`)

伪代码：  

```javascript  
function sameVnode(oldVnode, vnode){
	//  key代表当前节点数据的key属性，大概的意思就是div和span为不同标签。p.class1和p.class2为不同标签
	return vnode.key === oldVnode.key && vnode.sel === oldVnode.sel
}
```  
#### 比较标签每个属性

如果通过上一步比较新旧`vnode`的结果是一致的。那么就比较标签每个属性，vue中使用`patchVnode`函数来实现这个步骤

持续更新中...