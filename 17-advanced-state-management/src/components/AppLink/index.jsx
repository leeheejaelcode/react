import { node, bool } from 'prop-types';
import S from './style.module.css';

AppLink.propTypes = {
  children: node.isRequired,
  isExternal: bool,
};
export default function AppLink({ children, isExternal, ...restProps }) {
  const externalProps = {};

  if (isExternal) {
    externalProps.target = '_blank';
    externalProps.rel = 'noopener noreferrer';
  }

  return (
    <a className={S.component} {...externalProps} {...restProps}>
      {children}
    </a>
  );
}
