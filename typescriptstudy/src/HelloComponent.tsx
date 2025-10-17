import HelloProps from "./types/types"; // dto 개념을 동일하게 사용가능

function HelloComponent({name, age}: HelloProps) { // 이건 객체 구조분해를 봐야함 (props : HelloProps) -> 이것도 가능
  return (
  <>
  Hello, {name}, you are {age} years old!
  </>
  );
}

export default HelloComponent;
