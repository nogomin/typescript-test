### eslint & prettier 설치
> ts가 깔려있음을 전제
1. npm init -y
2. npm i -D typescript eslint prettier
3. npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser 
4. npm i -D eslint-config-prettier eslint-plugin-prettier 
5. npm i -D eslint-config-airbnb-base # 리액트 관련 규칙 X

### package-lock.json이란?
package.json은 버전 정보를 저장할때 ^(캐럿)을 사용해서 version range를 표시한다.
예) ^1.0.2 : >=1.0.2 <2.0
^1.0 : >=1.0.0 <2.0
^1 : >=1.0.0 <2.0
> npm 버전 의미 : {MAJOR}.{MINOR}.{PATCH}
MAJOR: 하위 호환성이 보장되지 않는 변경사항 발생시
MINOR: 하위 호환성 보장하면서 기능 추가
PATCH: 하위 호환성 보장하면서 버그 수정 

협업시, 다른사람이 npm install을 치면 package.json을 토대로 node_modules트리가 생성되는데, 만약 그 사이에 새로운 버전의 패키지가 배포되었을 경우
최신버전으로 설치된다. 즉, 내가 진행했던 환경과 다른분의 환경이(버전이) 다른 것이다.

이 불행한 상황을 피하기 위해 사용되는 것이 package-lock.json 파일이다. package-lock은 정확한 버전명이 적혀있다. 그래서 package-lock 파일을 같이 올려주면
npm install을 할때 저 파일을 토대로 정확한 버전의 패키지들이 설치된다.

그렇다면 왜 package.json에서 정확한 버전명을 넣으면 되지 그렇게 하지않는것인가?
이유는 간단하다. 개발하는 환경에서 버전을 정확히 명시해놓으면 중요한 패키지의 버그수정이 이뤄질때마다 package.json도 수정해줘야하기 때문이다. 크고 작은 패키지가 엄청 많이 깔릴텐데
이 과정을 몹시 귀찮다. 그걸 version range가 해결해주고 있었던 것이다.

참고) node_modules가 없는 환경(즉, 다른사람이 올린 package.json을 처음 설치할때)에서 `npm install` 명령어가 아닌 `npm ci`를 입력하면 2배이상 빠르게 설치된다. npm@5.7.1부터 지원 