import { bool, func } from 'prop-types';

InstantSearchSwitch.propTypes = {
  isInstantSearch: bool,
  onToggle: func,
};

function InstantSearchSwitch({ isInstantSearch = false, onToggle }) {
  return (
    <div className="formControl">
      <label style={{ userSelect: 'none' }}>
        {/* checked를 설정하면 onChange가 필수로 전달이 돼야하고
        처음에만 값을 할당하겠다고 하면 defaultChecked로 사용하기
        */}
        <input type="checkbox" checked={isInstantSearch} onChange={onToggle} />{' '}
        인스턴트 서치
      </label>
    </div>
  );
}

export default InstantSearchSwitch;
