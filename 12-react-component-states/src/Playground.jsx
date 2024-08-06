// import { UsersPage } from '@/pages/users';
import Counter from '@/components/Counter';
import CounterClass from '@/components/Counter.class';

function Playground() {
  return (
    <div style={styles}>
      <Counter></Counter>
      <CounterClass></CounterClass>
      {/* <UsersPage></UsersPage> */}
    </div>
  );
}

const styles = {
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
};

export default Playground;
