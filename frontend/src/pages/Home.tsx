import React from "react";

type Props = {};

export default function Home({}: Props) {
  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <div>꿈해몽</div>
        <div>매번 찾아보기 귀찮은 꿈해몽. 편하게 문장으로 써서 찾아보세요.</div>
      </div>
      <textarea name="" id="" cols={50} rows={4} value={"쓰셈"} />
      <div>
        <button>해석하기</button>
      </div>
      <hr />
      {/* 여기부터 해석 결과 컴포넌트 */}
      <div>
        <div>해석 결과</div>
        <textarea name="" id="" cols={30} rows={10} value={"이러함"} />
        <div>
          <div>공유하기</div>
          <div>
            <li>카톡 공유</li>
            <li>인스타 이이콘</li>
          </div>
          <div>
            <button>다시하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}
