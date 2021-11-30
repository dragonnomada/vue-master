# Vue Getting Started

[https://v3.vuejs.org](https://v3.vuejs.org)

## Declarative Rendering

> Template using data

```html
<div id="counter">
  Counter: {{ counter }}
</div>
```

> Component focus on data

```js
export default {
  data() {
    return {
      counter: 0
    }
  }
}
```

> Data binding as props

```html
<span v-bind:title="message">
```

* **Shortcut:** `<span :title="message">`

> Data model of component

```js
data() {
  return {
    message: 'Welcome'
  }
}
```

## User input and events

> Binding events to methods

```html
<div>
  <p>{{ message }}</p>
  <button v-on:click="lowerCaseMessage">LowerCase Message</button>
</div>
```

* **Shortcut:** `<button @click="lowerCaseMessage">LowerCase Message</button>`

* **Note:** You can access to event object `@click="lowerCaseMessage($event)"`

* **Note:** You can pass arguments `@click="lowerCaseMessage('hello', 123)"`

> Handle events by methods

```js
export default {
  data() {
    return {
      message: 'Hello Vue.js!'
    }
  },
  methods: {
    lowerCaseMessage() {
      this.message = this.message.toLowerCase()
    }
  }
}
```

* **Note:** You can handle binding event object `lowerCaseMessage(event) { ... }`

* **Note:** You can handle binding arguments `lowerCaseMessage(message, id) { ... }`

## Conditionals and Loops

> Conditional view

```html
<span v-if="seen">Now you see me</span>
```

> Conditional data

```js
export default {
  data() {
    return {
      seen: true
    }
  }
}
```

> Repeated views

```html
<li v-for="todo in todos">
    {{ todo.text }}
</li>
```

> Loop data

```js
export default {
  data() {
    return {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
  }
}
```

## Composing with Components

> Composing other components

```html
<todo-item></todo-item>
```

> Import and register components

```js
import TodoItem from './TodoItem'

export default {
  components: {
    TodoItem // Register other component for use it
  },
}
```

---

[![Alan Badillo Salas](https://avatars.githubusercontent.com/u/79223578?s=40&v=4 "Alan Badillo Salas")](https://github.com/dragonnomada) Por [Alan Badillo Salas](https://github.com/dragonnomada)
