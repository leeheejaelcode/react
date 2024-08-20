import useFetch from '@/hooks/useFetch';

export default function DataFetchingUsingUseFetchHook() {
  const {
    status: userStatus,
    error: userError,
    data: userData,
  } = useFetch('https://koreanjson.com/users');
  const {
    status: postStatus,
    error: postError,
    data: postData,
  } = useFetch('https://koreanjson.com/posts');
  return (
    <main id="page">
      <h1 className="headline">useFetch() 훅을 사용해 데이터 패칭</h1>
      <div className="description">
        <p>useFetch() 훅을 사용해 데이터 패칭</p>
        <div>
          {userStatus === 'loading' && <div>로딩중</div>}
          {userStatus === 'error' && (
            <div role="alert">{userError.message}</div>
          )}
          {userStatus === 'success' && (
            <ul>
              {userData.map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
          )}
        </div>
        <div>
          {postStatus === 'loading' && <div>로딩중</div>}
          {postStatus === 'error' && (
            <div role="alert">{postError.message}</div>
          )}
          {postStatus === 'success' && (
            <ul>
              {postData.map((post) => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
}
