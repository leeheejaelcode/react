import clsx from 'clsx';
import { string } from 'prop-types';
import { NavLink } from 'react-router-dom';

AppNavLink.propTypes = {
  className: string,
};

function AppNavLink({ className, ...restProps }) {
  const baseNavClasses = clsx(
    'text-sm py-2 px-4 text-indigo-800/70 rounded-full hover:text-indigo-800',
    className
  );

  return (
    <NavLink
      className={({ isActive }) => {
        return isActive
          ? clsx(
              baseNavClasses,
              'text-indigo-900 bg-indigo-100/40 border border-indigo-100/70 font-semibold'
            )
          : baseNavClasses;
      }}
      {...restProps}
    />
  );
}

export default AppNavLink;
