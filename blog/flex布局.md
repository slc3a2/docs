## flex布局概念  
> `flex`布局通常被叫做`flex box`，也叫`弹性盒子`或`容器`，是一种一维的`布局模型`，它能子元素(`flex item`)之间提供了强大的空间分布和对齐能力。   
   
![v2-54a0fc96ef4f455aefb8ee4bc133291b_720w.png](https://i.loli.net/2020/10/15/WBQ8RSuH7norCs4.png)    

`flex容器`中存在两个轴，一个`水平方向`main axis，一个`竖直方向`cross axis，这是`flex`布局最重要的点，内部元素`flex item`都是根据这个轴来排列对齐的。  

## flex布局好处    
在一个`html元素`和内部`多个子元`的组合中。要实现子元素有序的，高度自定义的布局，在传统布局方式中，会使用`position`，`float`方式实现，比较困难，比如多个字元素在父元素中`垂直水平居中`。使用`flex`布局简单几句代码就可以优雅的实现。    

## flex容器属性    
> 设置一个盒子为`flex`容器，首先设置`display: flex`;  

 - flex-direcation
 - flex-wrap
 - justify-content
 - align-items
 - align-content  
 
### flex-direcation   
`flex-direcation`属性规定所有`flex item`在`flex`容器排列方式，设置主轴
  
```css  
flex-direcation: row(默认) | row-reverse | column | column-reverse
```  
**row**： 从左往右水平展示    
**row-reverse**： 从右向左(反向)水平展示    
**column**： 从上往下垂直展示  
**column-reverse**： 从下往上(反向)垂直展示

### flex-wrap   
`flex-wrap`属性规定`flex`容器内所有`flex item`总宽度超出`flex`容器时换行方式    

```css  
flex-wrap: nowrap(默认) | wrap | wrap-reverse
```  
**nowrap**： 不换行，只展示一行
**wrap**： 换行，向下换行
**wrap-reverse**： 以相反方向换行，向上换行
   
### justify-content  
`justify-content`属性规定所有`flex item`整体在`flex`容器在主轴(默认为水平轴，通过`flex-direcation`设置)上的排列方式

```css  
justify-content: flex-start(默认值) | flex-end | center | space-between | space-around
```  
**flex-start**： 整体位于容器开头
**flex-end**： 整体位于容器结尾  
**center**： 整体位于容器中心  
**space-between**： 每个`flex item`平均分布在容器内； `第一个item`和`容器开头`，`最后一个item`和`容器结尾`都无间距  
**space-around**： 每个`flex item`平均分布在容器内， `第一个item`和`容器开头`，`最后一个item`和`容器结尾`的间距都为`每个item`间距的一半    

### align-items 
`align-items`属性规定所有`flex item`整体在`flex`容器在副轴(非主轴，和`justify-content`对应)上的排列方式

```css  
align-items: stretch(默认值) | center | flex-start | flex-end | baseline
```  
**stretch**： 整体占满整个容器的高度
**center**： 整体位于容器中心  
**flex-start**： 整体位于容器开头
**flex-end**： 整体位于容器结尾  
**baseline**： 整体位于`item`中第一行文字基线对齐
## flex item属性  
 - order
 - flex-basis
 - flex-glow
 - flex-shrink
 - align-shrink
 - align-self    
 
## 扩展一道面试题  
  
持续更新...