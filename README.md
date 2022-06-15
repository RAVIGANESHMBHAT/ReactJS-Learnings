## Pure Component

#### If we extend a class with Pure Component, there is no need for shouldComponentUpdate() Lifecycle Method. ReactJS Pure Component Class compares current state and props with new props and states to decide whether the React component should re-render itself or Not. In simple words, If the previous value of state or props and the new value of state or props is the same, the component will not re-render itself. Since Pure Components restricts the re-rendering when there is no use of re-rendering of the component.

#### The PureComponent will rerender the class component only when there is a difference in the shallow comparision of props and states.

## React.memo()

#### We can use the Pure Components in Class Component. To provide the same functionality in Functional Component, we use, export default React.memo(FunctionComponentName) in the Functional Component.

## Refs

#### Note: Refs cannot be attached to Functional Components. It can only be attached to Class Components.

## Forwarding Refs

#### The process of automatically passing ref to one of it's children.
#### Current commit has passing Ref between Class Component and Functional Component

## Portals

#### It provides a way to render children into a DOM node that exists outside the DOM Hierarchy of the parent component. In index.html we have, <div id="root"></div> and in index.js we have, ReactDOM.render(<App />, document.getElementById('root'));. In this case every single React component falls under the root element. The current commit has the implementation of adding a component outside the root.
