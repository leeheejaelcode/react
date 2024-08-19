import { useRouteError, Link } from 'react-router-dom';

function ErrorPage() {
  const { status, statusText, error } = useRouteError();

  return (
    <>
      <h1>
        {status} {statusText}
      </h1>
      <p>{error.message}</p>
      <p>
        <Link to="/">홈</Link>으로 이동하세요
      </p>
    </>
  );
}

export default ErrorPage;
