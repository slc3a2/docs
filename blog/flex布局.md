## flex布局概念  
> `flex`布局通常被叫做`flex box`，也叫`弹性盒子`或`容器`，是一种一维的`布局模型`，它能子元素(`flex item`)之间提供了强大的空间分布和对齐能力。   
   
![v2-54a0fc96ef4f455aefb8ee4bc133291b_720w.png](https://i.loli.net/2020/10/15/WBQ8RSuH7norCs4.png)    

`flex容器`中存在两个轴，一个`水平方向`main axis，一个`竖直方向`cross axis，这是`flex`布局最重要的点，内部元素`flex item`都是根据这个轴来排列对齐的。  

## flex布局好处    
在一个`html元素`和内部`多个子元`的组合中。要实现子元素有序的，高度自定义的布局，在传统布局方式中，会使用`position`，`float`方式实现，比如多个子元素在父元素中`垂直水平居中`，比较困难。这个时候就可以用`flex`布局，只需要简单几句代码就可以优雅的实现。    

## flex容器属性    
> 设置一个盒子为`flex`容器，首先设置`display: flex`;  

 - flex-direction
 - flex-wrap
 - justify-content
 - align-items
 - align-content  
 
### flex-direction   
`flex-direction`属性规定所有`flex item`在`flex`容器从 **第一个元素** 开始的排列方式
  
```css  
flex-direction: row(默认) | row-reverse | column | column-reverse
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
**nowrap**： 不换行，只展示一行。如果容器不够宽，平均缩小每个`item`的宽度  
**wrap**： 换行，向下换行  
**wrap-reverse**： 以相反方向换行，向上换行
   
### justify-content  
`justify-content`属性规定所有`flex item`作为一个整体在`flex`容器在主轴(默认为水平轴，通过`flex-direcation`设置)上的排列方式

```css  
justify-content: flex-start(默认值) | flex-end | center | space-between | space-around
```  
**flex-start**： 整体位于容器开头  
**flex-end**： 整体位于容器结尾  
**center**： 整体位于容器中心  
**space-between**： 每个`flex item`平均分布在容器内； `第一个item`和`容器开头`，`最后一个item`和`容器结尾`都无间距  
**space-around**： 每个`flex item`平均分布在容器内， `第一个item`和`容器开头`，`最后一个item`和`容器结尾`的间距都为`每个item`间距的一半    

### align-items 
`align-items`属性规定所有`flex item`作为一个整体在`flex`容器在副轴(非主轴，和`justify-content`相反)上的排列方式

```css  
align-items: stretch(默认值) | center | flex-start | flex-end | baseline
```  
**stretch**： 整体占满整个容器的高度, 前提必须是你没有设置item的高度(宽度)，否则不生效  
**center**： 整体位于容器中心   
**flex-start**： 整体位于容器开头    
**flex-end**： 整体位于容器结尾  
**baseline**： 整体位于`item`中第一行文字 *基线* 对齐    

> 基线的概念：英文中大概就是一个小写字母 *x* 的最底部，*f* 的中下部；而中文大概就汉字中下部，不太准确，我没深入了解，有兴趣可以网上了解。
   
### align-content  
`align-content`属性规定了多条主轴的情况下(只有`item`换行了，才会产生多条主轴)，这些主轴作为一个整体在他们的排列方向中的排列方式；注意：只有一条主轴(`item`不换行)不生效

```css  
align-content: stretch(默认) | center | flex-start | flex-end | space-between | space-around
```  
**stretch**： 整体被拉伸以适应容器  
**center**： 整体内各个轴紧靠，并且位于容器中心，头尾留白   
**flex-start**： 整体内各个轴紧靠，并且位于容器头部    
**flex-end**： 整体内各个轴紧靠，并且位于容器尾部  
**space-between**： 整体平分，其中头尾和容器头尾紧靠，中间间隙平分  
**space-around**：  整体平分，其中头尾和容器头尾距离为中间item的空隙的一半，中间间隙平分 

## flex item属性  
 - order
 - flex-basis
 - flex-glow
 - flex-shrink
 - align-shrink
 - align-self    
 
## 扩展一道面试题  
  
持续更新...