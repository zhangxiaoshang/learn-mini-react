# Day 1

下面代码是 React 官网提供的一段 Demo, 展示了 React 的基本使用. [阅读文档](https://react.docschina.org/learn/installation#try-react-locally)

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Hello World</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <!-- Don't use this in production: -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
      function MyApp() {
        return <h1>Hello, world!</h1>;
      }

      const container = document.getElementById("root");
      const root = ReactDOM.createRoot(container);
      root.render(<MyApp />);
    </script>
  </body>
</html>
```

## 目标

使用 React 的方式在页面呈现一段文本

### 目标拆解

1. 使用原生 JS 在页面渲染一段文本
2. 根据上面对实现,构造虚拟 dom 对象(vdom)
3. 使用 js + vdom 对象实现文本渲染
4. 依照 React 的 API 对以上实现进行封装
