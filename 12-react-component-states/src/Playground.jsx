import CounterFunc from '@/components/Counter';
import CounterClass from '@/components/Counter.class';

function Playground() {
  return (
    <>
      <CounterFunc />
      <CounterClass step={101} />
    </>
  );
}

export default Playground;
