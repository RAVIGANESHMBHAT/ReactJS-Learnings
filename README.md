## Pure Component

#### If we extend a class with Pure Component, there is no need for shouldComponentUpdate() Lifecycle Method. ReactJS Pure Component Class compares current state and props with new props and states to decide whether the React component should re-render itself or Not. In simple words, If the previous value of state or props and the new value of state or props is the same, the component will not re-render itself. Since Pure Components restricts the re-rendering when there is no use of re-rendering of the component.

#### The PureComponent will rerender the class component only when there is a difference in the shallow comparision of props and states.

## React.memo()

#### We can use the Pure Components in Class Component. To provide the same functionality in Function Component, we use, export default React.memo(FunctionComponentName) in the Function Component.
