import JSX_Markup from './jsx-markup';
import ScrollUpAndDown from './scroll-up-and-down';

function Learn() {
  return (
    <div className="Learn">
      <Headline />
      <hr />
      <JSX_Markup />
      <ScrollUpAndDown />
    </div>
  );
}

export default Learn;

function Headline() {
  const abbrs = {
    html: '하이퍼 텍스트 마크업 랭귀지',
    jsx: {
      abbr: 'javascript extension for ECMAScript',
      text: 'jsx',
    },
  };
  return (
    <h1>
      <abbr title={abbrs.html}>HTML</abbr> vs.{' '}
      <abbr title={abbrs.jsx.abbr}>{abbrs.jsx.text}</abbr> 마크업
    </h1>
  );
}
