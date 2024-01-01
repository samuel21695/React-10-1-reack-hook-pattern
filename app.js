import { useState } from "react";

function ReactTenDashOne() {
  const stateWork = [];
  stateWork.length = 10;
  stateWork.fill(false);
  console.log(stateWork); // false로 10개의 원소가 채워진 배열 stateWork
  const [packs, setPacks] = useState(stateWork); // 각 팩의 열림 상태를 관리
}