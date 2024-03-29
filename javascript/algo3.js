/*
백준 10872 문제

문제 : 
0보다 크거나 같은 정수 N이 주어진다. 이때, N!을 출력하는 프로그램을 작성하시오.

리뷰 : 
0인 경우가 계속 틀려서 수정했다.
*/

const input = Number(
  require("fs").readFileSync("/dev/stdin").toString().split("\n")[0]
);

/**
 *
 ** 재귀로 팩토리얼 구현한 함수
 *
 * @param input
 * @returns output
 */
const answer = (input) => {
  if (input === 0 || input === 1) return 1;
  if (input > 1) return input * answer(input - 1);
};

return console.log(answer(input));
