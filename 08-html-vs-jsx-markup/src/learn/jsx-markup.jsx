import DataBinding from './data-binding';
import ConditionalDisplay from './condition-display';
import ConditionalRendering from './conditional-rendering';
import RenderLists from './render-lists';

function JSX_Markup() {
  return (
    <dl className="descriptionList">
      <DataBinding />
      <ConditionalDisplay />
      <ConditionalRendering />
      <RenderLists />
    </dl>
  );
}

export default JSX_Markup;
