// --------------------------------------------------------------------------
// ✅ Counter 컴포넌트
// --------------------------------------------------------------------------
// - [ ] `count` 속성(prop)을 전달받아 화면에 표시
// - [ ] `step` 속성(기본 값: 1)을 전달받아 버튼 레이블에 표시
// - [ ] `min` 속성(기본 값: 1) 보다 `count` 값이 크거나 같아야 함
// - [ ] `max` 속성(기본 값: 1000) 보다 `count` 값이 작거나 같아야 함
// - [ ] 사용자가 감소 버튼을 클릭하면 `count` 감소 (step 만큼)
// - [ ] 사용자가 증가 버튼을 클릭하면 `count` 증가 (step 만큼)
// - [ ] 사용자가 감소 버튼을 클릭했을 때 `count` 값이 `min` 보다 작을 경우 감소 버튼 비활성화
// - [ ] 사용자가 증가 버튼을 클릭했을 때 `count` 값이 `max` 보다 클 경우 증가 버튼 비활성화
// --------------------------------------------------------------------------

import { Component } from 'react';
import { number } from 'prop-types';

class Counter extends Component {
  static propTypes = {
    count: number,
    step: number,
    min: number,
    max: number,
  };

  static defaultProps = {
    count: 1,
    step: 1,
    min: 1,
    max: 1000,
  };

  constructor(props) {
    super(props);
    const { count: initialCount, min, max } = props;
    if (initialCount < min || initialCount > max) {
      throw new Error('count값이 min보다 작거나 max보다 큽니다.');
    }
    this.state = {
      count: initialCount,
    };
    // arrow function 이전 방법
    // this.handleDecrease = this.handleDecrease.bind(this);
    // this.handleIncrease = this.handleIncrease.bind(this);
  }

  render() {
    const { count } = this.state;
    const { step, min, max } = this.props;

    const isDisabledDecrease = count <= min;
    const isDisabledIncrease = count >= max;
    return (
      <div className="Counter">
        <button
          type="button"
          onClick={this.handleDecrease}
          disabled={isDisabledDecrease}
        >
          ➖{step}
        </button>
        <p>Count : {this.state.count}</p>
        <button
          type="button"
          onClick={this.handleIncrease}
          disabled={isDisabledIncrease}
        >
          ➕{step}
        </button>
      </div>
    );
  }

  // class Fields(arrow function)
  handleDecrease = () => {
    const nextCount = this.state.count - this.props.step;
    this.setState({ count: nextCount });
  };
  handleIncrease = () => {
    const nextCount = this.state.count + this.props.step;
    this.setState({ count: nextCount });
  };
}

Counter.displayName = 'CounterClass';

export default Counter;
