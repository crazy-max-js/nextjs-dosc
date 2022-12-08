# 使用Next.js构建表单

web表单具有**客户-服务器**关系。它们用于发送由web服务器处理的数据以进行处理和存储。表单本身是客户端，服务器是任何存储机制，可用于存储、检索和在需要时发送数据。

本指南将教你如何使用Next.js创建一个web表单。

## 第1部分:HTML表单

HTML表单是使用`<form>`标签构建的。它使用一组属性和字段来构造表单的特性，如文本字段、复选框、下拉菜单、按钮、单选按钮等。

下面是HTML表单的语法:

```html
<!-- Basic HTML Form -->
<form action="/send-data-here" method="post">
  <label for="first">First name:</label>
  <input type="text" id="first" name="first" />
  <label for="last">Last name:</label>
  <input type="text" id="last" name="last" />
  <button type="submit">Submit</button>
</form>
```

前端是这样的:



HTML的`<form>`标签作为不同的`<input>`元素的容器，如`text`字段和提交`button`。让我们来研究一下这些元素:

- `action`:指定提交表单时将表单数据发送到何处的属性。它通常是一个URL(绝对URL或相对URL)。
- `method`:指定[HTTP方法](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)，即`GET`或`POST`，用于在提交表单时发送数据。
- `<label>`:为其他表单元素定义标签的元素。标签有助于阅读，特别是对于屏幕阅读器。
- `<input>`:广泛用于构造表单字段的表单元素。它在很大程度上取决于`type`属性的值。输入类型可以是`text`,`checkbox`,`email`,`radio`等等。
- `<button>`:表示用于提交表单数据的可单击按钮。

### Form Validation

检查用户提供的信息是否正确的进程。表单验证还确保所提供的信息是正确的格式(例如，在电子邮件字段中有一个@)。这有两种类型:

- **客户端**:验证在浏览器中完成
- **服务器端**:验证在服务器上完成

虽然这两种类型同样重要，但本指南只关注客户端验证。

客户端验证进一步分为:

- **Built-in**:使用基于html的属性，如`required`,`type`,`minLength`,`maxLength`,`pattern`等。
- **JavaScript-based**:用JavaScript编写的验证。

### 内置表单验证使用required, type, minLength, maxLength

- `required`:指定在提交表单之前必须填写哪些字段。
- `type`:指定数据类型(即数字、电子邮件地址、字符串等)。
- `minLength`:指定文本数据字符串的最小长度。
- `maxLength`:指定文本数据字符串的最大长度。

因此，使用这些属性的表单可能是这样的:

```html
<!-- HTML Form with Built-in Validation -->
<form action="/send-data-here" method="post">
  <label for="roll">Roll Number</label>
  <input
    type="text"
    id="roll"
    name="roll"
    required
    minlength="10"
    maxlength="20"
  />
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required />
  <button type="submit">Submit</button>
</form>
```

有了这些验证检查，当用户试图为Name提交一个空字段时，就会在表单字段中弹出一个错误。类似地，滚动号只有在长度为10-20个字符时才能输入。



### 基于javascript的表单验证

表单验证对于确保用户以正确的格式提交了正确的数据非常重要。JavaScript与客户端上的HTML原生表单属性一起提供了额外级别的验证。开发人员通常更喜欢通过JavaScript验证表单数据，因为与服务器端验证相比，JavaScript的数据处理速度更快，但在某些情况下，前端验证可能不太安全，因为恶意用户总是会将格式错误的数据发送到服务器。

下面的例子展示了如何使用JavaScript验证表单:

```html
<form onsubmit="validateFormWithJS()">
  <label for="rollNumber">Roll Number:</label>
  <input type="text" name="rollNumber" id="rollNumber" />

  <label for="name">Name:</label>
  <input type="text" name="name" id="name" />

  <button type="submit">Submit</button>
</form>

<script>
  function validateFormWithJS() {
    const name = document.querySelector('#name').value
    const rollNumber = document.querySelector('#rollNumber').value

    if (!name) {
      alert('Please enter your name.')
      return false
    }

    if (rollNumber.length < 3) {
      alert('Roll Number should be at least 3 digits long.')
      return false
    }
  }
</script>
```

HTML[script](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)标记用于嵌入任何客户端JavaScript。它既可以包含内联脚本语句(如上面的示例所示)，也可以通过`src`属性指向外部脚本文件。
此示例验证用户的名称和卷号。`validateFormWithJS()`函数不允许空名称字段，并且滚动号必须至少有三位数字长。在单击Submit按钮时执行验证。在给定值正确之前，您不会被重定向到下一页。



#### 使用正则表达式进行表单验证

使用正则表达式的JavaScript验证使用`pattern`HTML属性。正则表达式(通常称为RegEx)是描述字符模式的对象。您只能将`pattern`属性应用于`<input>`元素。这样，您可以通过定义自己的规则，使用正则表达式(RegEx)验证输入值。同样，如果值与定义的模式不匹配，输入将给出错误。
下面的例子展示了在`input`元素上使用`pattern`属性:

```html
<form action="/action_page.php">
  <label for="pswrd">Password:</label>
  <input
    type="password"
    id="pswrd"
    name="pswrd"
    pattern="[a-z0-9]{1,15}"
    title="Password should be digits (0 to 9) or alphabets (a to z)."
  />

  <button type="submit">Submit</button>
</form>
```

密码表单字段必须只包含数字(0到9)，小写字母(a到z)，长度不得超过15个字符。不允许使用其他字符(#、$、&等)。RegEx中的规则被写成`[a-z0-9]{1,15}`。



> 要了解更多关于HTML表单的知识，请查看[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/Forms).

## 第2部分:项目设置

在下一节中，您将使用Next.js在React中创建表单。

创建一个新的Next.js应用程序。您可以使用[create-next-app](getting-started#setup)快速开始。在命令行终端中执行以下命令:

```
npx create-next-app
```

回答问题来创建你的项目，并给它一个名字，这个例子使用[`next-forms`](https://github.com/vercel/next.js/tree/canary/examples/next-forms)。下一个`cd`到这个目录，并运行`npm run dev`或`yarn dev`命令启动开发服务器。

打开打印在终端上的URL，以确保您的应用程序正在成功运行。

## 第3部分:设置Next.js表单API路由

客户端和服务器都将使用Next.js构建。对于服务器部分，创建一个API端点，您将在其中发送表单数据。

Next.js提供了一个基于文件的路由系统，它建立在[页面的概念](/guide/basic-features/pages)之上。`pages/api`文件夹中的任何文件都将映射到`/api/*`，并将被视为api端点而不是页面。这个[API端点](/guide/api-routes/introduction)将仅是服务器端。

转到`pages/api`，创建一个名为`form.js`的文件，并粘贴以下用Node.js编写的代码:

```js
export default function handler(req, res) {
  // Get data submitted in request's body.
  const body = req.body

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log('body: ', body)

  // Guard clause checks for first and last name,
  // and returns early if they are not found
  if (!body.first || !body.last) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: 'First or last name not found' })
  }

  // Found the name.
  // Sends a HTTP success code
  res.status(200).json({ data: `${body.first} ${body.last}` })
}
```

这个表单`handler`函数将接收来自客户端的请求`req`(即提交的表单数据)。作为回报，它会以JSON的形式发送一个响应`res`它会有姓和名。您可以在`http://localhost:3000/api/form`上访问此API端点，或者在部署时将本地主机URL替换为实际的Vercel部署。

> 此外，您还可以将此API附加到MongoDB或谷歌Sheets等数据库。这样，您提交的表单数据将被安全地存储以供以后使用。对于本指南，不使用数据库。相反，将相同的数据返回给用户以演示如何执行。

### 无需JavaScript的表单提交

你现在可以在表单的`action`属性中使用`/api/form`相对端点。当表单通过`POST`HTTP方法(用于发送数据)提交时，您正在向服务器发送表单数据。

```html
<form action="/api/form" method="post">
  <label for="first">First name:</label>
  <input type="text" id="first" name="first" />
  <label for="last">Last name:</label>
  <input type="text" id="last" name="last" />
  <button type="submit">Submit</button>
</form>
```

如果你提交了这个表单，它会将数据提交到表单API端点`/api/form`。然后服务器响应，通常处理数据并加载action属性定义的URL，从而加载一个新页面。因此，在这种情况下，您将被重定向到`http://localhost:3000/api/form`，并收到服务器的以下响应。



## 第四部分:在Next.js中配置表单

你已经为表单提交创建了一个Next.js API Route。现在是时候在Next.js中使用React配置客户端(表单本身)了。第一步将扩展您的HTML表单知识并将其转换为React(使用[JSX](https://reactjs.org/docs/introducing-jsx.html)).

下面是使用[JSX](https://reactjs.org/docs/introducing-jsx.html)编写的[React函数组件](https://reactjs.org/docs/components-and-props.html)中的相同形式

```js
export default function Form() {
  return (
    <form action="/api/form" method="post">
      <label htmlFor="first">First Name</label>
      <input type="text" id="first" name="first" required />

      <label htmlFor="last">Last Name</label>
      <input type="text" id="last" name="last" required />

      <button type="submit">Submit</button>
    </form>
  )
}
```

变化如下:

- `for`属性更改为`htmlFor`。(因为`for`是JavaScript中与"for" 循环相关联的关键字，React元素使用`htmlFor`代替。)
- `action`属性现在有一个相对URL，它是表单API端点。

这就完成了基于next .js的表单的基本结构。

> 您可以查看我们在这里创建的[next-forms](https://github.com/vercel/next.js/tree/canary/examples/next-forms)example repo的完整源代码，作为一个工作示例。
> 请随意克隆它，并立即开始。这个演示是用create-next-app构建的，你可以预览`/styles/global.css`文件中的基本表单CSS样式。



## Part 5: Form Submission without JavaScript

JavaScript为我们的web应用程序带来了交互性，但有时你需要控制JavaScript包，防止它太大，否则你的网站访问者可能会禁用JavaScript。

用户禁用JavaScript有以下几个原因:

- 解决带宽限制
- 增加设备(手机或笔记本电脑)的电池寿命
- 保护隐私，这样他们就不会被分析脚本跟踪

不管原因是什么，禁用JavaScript会部分影响站点功能，如果不是完全影响的话。

接下来打开`next-forms`目录。在`/pages`目录中，创建一个文件`no-js-form.js`。

> **快速提示** :在Next.js中，页面是一个从`.js`,`.jsx`,`.ts`或`.tsx`文件在pages目录。
每个页面都根据其文件名与路由相关联。例如:如果你创建了`pages/no-js-form.js`，它将可以在`your-domain.tld/no-js-form`访问。

让我们使用上面相同的代码:

```js
export default function PageWithoutJSbasedForm() {
  return (
    <form action="/api/form" method="post">
      <label htmlFor="first">First Name</label>
      <input type="text" id="first" name="first" required />

      <label htmlFor="last">Last Name</label>
      <input type="text" id="last" name="last" required />

      <button type="submit">Submit</button>
    </form>
  )
}
```

当JavaScript被禁用时，当你点击提交按钮时，一个事件被触发，它收集表单数据并将其发送到我们的表单API端点，如在`action`属性中定义的，并使用`POST`HTTP`method`。你将被重定向到`/api/form`端点，因为这就是`action`的工作方式。

表单数据将在服务器上作为请求`req`提交给上面写的表单处理函数。它将处理数据并返回一个JSON字符串作为响应`res`，其中包括您提交的名称。

> 为了改善这里的体验，作为响应，您可以将用户重定向到一个页面，并感谢他们提交表单。

## 第6部分:启用JavaScript的表单提交

在`/pages`中，你将创建另一个名为`js-form.js`的文件。这将在你的Next.js应用程序上创建一个`/js-form`页面。

现在，只要提交了表单，我们就可以防止表单的默认行为重新加载页面。我们将获取表单数据，将其转换为JSON字符串，并将其发送到我们的服务器，即API端点。最后，我们的服务器将以提交的名称进行响应。所有这些都是通过一个基本的JavaScript实现的`handleSubmit()`的函数。

这就是这个函数的样子。你可以很好地理解每个步骤:

```js
export default function PageWithJSbasedForm() {
  // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Get data from the form.
    const data = {
      first: event.target.first.value,
      last: event.target.last.value,
    }

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)

    // API endpoint where we send form data.
    const endpoint = '/api/form'

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    alert(`Is this your full name: ${result.data}`)
  }
  return (
    // We pass the event to the handleSubmit() function on submit.
    <form onSubmit={handleSubmit}>
      <label htmlFor="first">First Name</label>
      <input type="text" id="first" name="first" required />

      <label htmlFor="last">Last Name</label>
      <input type="text" id="last" name="last" required />

      <button type="submit">Submit</button>
    </form>
  )
}
```

这是一个Next.js页面，带有一个名为`PageWithJSbasedForm`的React函数组件，带有一个用JSX编写的`<form>`元素。在`<form>`元素上没有任何操作。相反，我们使用`onSubmit`事件处理程序将数据发送到我们的`{handleSubmit}`函数。

`handleSubmit()`函数通过一系列步骤处理表单数据:

- `event.preventDefault()`阻止`<form>`元素刷新整个页面。
- 我们用表单中的`first`和`last`值创建了一个名为`data`的JavaScript对象。
- JSON是一种与语言无关的数据传输格式。因此，我们使用`JSON.stringify(data)`将数据转换为JSON。
- 然后我们使用`fetch()`将数据发送到我们的`/api/form`端点，使用JSON和HTTP`POST`方法。
- 服务器返回带有已提交名称的响应。 Woohoo! 🥳

## 结论

本指南涵盖了以下内容:

- 基本的HTML`form`元素
- 用React.js理解表单
- 使用JavaScript和不使用JavaScript验证表单数据
- 使用Next.js API Routes来处理来自客户端和服务器端的`req`和`res`

欲了解更多细节，请参阅[Next.js学习课程](/learn/basics/create-nextjs-app).
