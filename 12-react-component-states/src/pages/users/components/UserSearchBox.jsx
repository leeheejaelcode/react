import { useId } from 'react';
import { string, func, bool } from 'prop-types';
import './UserSearchBox.css';

UserSearchBox.propTypes = {
  searchTerm: string.isRequired,
  onSearch: func, // optional
  onReset: func, // optional
  isInstantSearch: bool, // optional
};

function UserSearchBox({
  searchTerm,
  onSearch,
  onReset,
  isInstantSearch = false,
}) {
  const id = useId();

  const handleSearch = (e) => {
    e.preventDefault();
    // Side Effects
    // DOM 접근, 속성 값 읽기
    const input = document.getElementById(id);
    const button = input.closest('form').querySelector('[type="submit"]');
    const value = input.value.trim();

    onSearch?.(value);
    if (value.length > 0) {
      onSearch?.(value);
      input.value = '';
      button.focus();
      // 버튼 요소에 초점 이동
    } else {
      alert('검색어를 입력해주세요.');
      input.focus();
    }
  };

  const handleResetUsersList = () => {
    onReset?.();
    const input = document.getElementById(id);
    input.value = '';
  };

  const handleChange = isInstantSearch
    ? (e) => {
        onSearch?.(e.target.value);
      }
    : null;

  const debounce = (callback, limit = 1000) => {
    let timeout;
    return function (e) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        callback.call(this, e);
      }, limit);
    };
  };

  return (
    <form
      className="UserSearchBox"
      onSubmit={handleSearch}
      onReset={handleResetUsersList}
      onChange={debounce(handleChange)}
    >
      <div className="control">
        <label htmlFor={id}>사용자 검색</label>
        <input
          id={id}
          type="search"
          placeholder="사용자 정보 입력"
          defaultValue={searchTerm}
          // value={searchTerm}
          // onChange={handleChange}
          // readOnly
        />
      </div>
      <button type="submit" hidden={isInstantSearch} onClick={handleSearch}>
        찾기
      </button>
      <button type="reset" hidden={isInstantSearch}>
        목록 초기화
      </button>
      {/* 밑에 코드는 렌더링 비용이 많이 듬 */}
      {/* {isInstantSearch ? null : (
        <>
          <button type="submit" onClick={handleSearch}>
            찾기
          </button>
          <button type="reset">목록 초기화</button>
        </>
      )} */}
    </form>
  );
}

export default UserSearchBox;
