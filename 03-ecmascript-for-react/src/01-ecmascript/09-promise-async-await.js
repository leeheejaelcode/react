// --------------------------------------------------------------------------
// Promise, Async await

function practice() {
  console.log("start!");

  // callback hell
  // 참고: https://bit.ly/3r5iUfe
  delay(() => {
    console.log("1s");
    delay(() => {
      console.log("2s");
      delay(() => {
        console.log("3s");
        delay(() => {
          console.log("4s");
          console.log("end!");
        });
      });
    });
  });
}

function delay(callback, time = 1000) {
  setTimeout(callback, time);
}

// practice();

// --------------------------------------------------------------------------

// Promise
// 참고: https://mzl.la/3d1He5h
// 🔶 delayPromise 함수를 작성합니다.
const delayPromise = (timeout = 1000) => {
  // Promise 클래스 promise 인스턴스 생성
  const promise = new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });

  return promise;
};

function practice2() {
  console.log("start!");
  delayPromise()
    .then(() => {
      console.log("1s");
      return delayPromise();
    })
    .then(() => {
      console.log("2s");
      return delayPromise();
    })
    .then(() => {
      console.log("3s");
      return delayPromise();
    })
    .then(() => {
      console.log("4s");
      return delayPromise();
    })
    .then(() => {
      console.log("end");
    });

  // 🔶 delayPromise 함수를 사용해 1초마다 로그를 남기도록 작성합니다.
}

// practice2();

// Async Await
// 참고: https://mzl.la/49EvJxn

async function practice3() {
  // 🔶 비동기 함수를 사용해 delayPromise 함수가 1초마다 로그를 남기도록 작성합니다.
  await delayPromise();
  console.log("1s");
  await delayPromise();
  console.log("2s");
  await delayPromise();
  console.log("3s");
  await delayPromise();
  console.log("4s");
  await delayPromise();
  console.log("end");
}

// practice3();

// --------------------------------------------------------------------------
// Promise.all, Promise.race

const MAX_TIMEOUT = 3000;

const promise1 = () =>
  new Promise((resolve) => {
    const timeout = Math.random() * MAX_TIMEOUT;
    setTimeout(resolve, timeout, {
      value: "X",
      timeout: `${timeout.toFixed(2)}s`,
    });
  });

const promise2 = () =>
  new Promise((resolve) => {
    const timeout = Math.random() * MAX_TIMEOUT;
    setTimeout(resolve, timeout, {
      value: "Y",
      timeout: `${timeout.toFixed(2)}s`,
    });
  });

const promise3 = () => Promise.reject("❌ 오류 발생!");

// Promise.all
// 참고: https://mzl.la/49EvJxn
// 🔶 Promise.all 메서드를 사용해 모든 Promise가 실행된 이후 콜백되도록 실습을 진행합니다.
Promise.all([promise1(), promise2()])
  .then((res) => {
    console.log(res); // [res1, res2]
  })
  .catch((err) => {
    console.log(err);
  });

// Promise.race
// 참고: https://mzl.la/49EvJxn
// 🔶 Promise.race 메서드를 사용해 응답이 가장 빠른 Promise 값만 출력되도록 실습을 진행합니다.
Promise.race([promise1(), promise2()])
  .then((winner) => {
    console.log(winner); // winner
  })
  .catch((err) => {
    console.log(err);
  });
