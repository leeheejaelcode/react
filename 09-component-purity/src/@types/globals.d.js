import { string, exact, oneOf, number } from 'prop-types';

export const UserType = exact({
  id: string.isRequired,
  name: string.isRequired,
  photo: string.isRequired,
  status: oneOf(['offline', 'online', 'away', 'dont-disturb']),
  size: number,
});
