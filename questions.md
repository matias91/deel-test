1. The main difference between them is a PureComponent handles the "shouldComponentUpdate" method doing shallow comparison when props or state changes.
In this simple test I couldn't find a way to break it with the PureComponent, but in a complex project we could have issues when mutating the props instead of returning new values.

2. The only thing I can think of is components using `Context` will re-render every time something changes. So if we combine it with `ShouldComponentUpdate` we should be careful not to stop all re-renders.

3.
  - With a callback passed through the props.
  - With an state manager, so the children can updates the information the parent is consuming.

4. We can use `shouldComponentUpdate` or `React.memo`.

5. React provides us the Fragment element to be used as a container, when a component needs to return multiple children, without adding unneeded extra tags.

6.
  - Redux `connect` is a HoC.
  - React-i18next has a HoC: `withTranslation`

7.

8. `setState` takes two arguments: the state elements to update and a callback that it's fired after the state is updated. Is asynchronous to improve performance, so the component can mutate all pending requests.

9.
  - Change component declaration `class SomeComponent extends Component` to `function SomeComponent()`
  - Remove `constructor` method and replace the state variables with `useState`.
  - Delete every `this.state` reference in the component.
  - Remove any life-cycle method and use `useEffect` instead.
  - Define internal functions with `const` and remove the `this` before using them.
  - `Render` method isn't necessary in Function Components, so it should be removed and put the content directly in the component scope.

10. I'm not sure if I understand the question, but:
 - You can use inline styles, though is not the best.
 - The styles can be imported from a different file.
 - You can set specific styles depending props or states values.
 - We can use styled-components dependency.

11. We can use `dangerouslySetInnerHTML` to render HTML strings.
