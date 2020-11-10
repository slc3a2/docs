## diff算法和virtual dom

![WechatIMG3177.png](https://i.loli.net/2020/11/05/HrGjhDp8ebSt62R.png)  

在现代`mvvm`框架`react`和`vue`中，因为直接操作dom相对是要耗费更多性能的，所以`react`和`vue`都使用了`virtual dom`来替代处理dom，大致的过程是：按照dom结构生成一份`virtual dom`为`js`对象树状格式。如果数据有更新，需要表现在dom上，那么先把变化表现在`virtual dom`，再通过`diff`算法比对数据更新前后两次`virtual dom`找到差别。最后把仅仅改变的这部分更新到dom上，不用重新渲染整个页面。  

总结：`diff`算法就是找到两个`virtual dom`结构的不同

持续更新中...