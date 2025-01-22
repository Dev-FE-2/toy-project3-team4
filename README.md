# 0. Getting Started (시작하기)

```bash
$ npm i
$ npm run dev
```

[서비스 링크](https:\)

<br/>
<br/>

# 1. Project Overview (프로젝트 개요)

- 프로젝트 이름: Pet Moment
- 프로젝트 설명: 동물들의 특별한 순간을 공유하는 공간 SNS 플랫폼 개발

<br/>
<br/>

# 2. Team Members (팀원 및 팀 소개)

### 팀 명 : V.M (Video Message)

|                                          김금란                                           |                                          양명규                                           |                                           이민태                                           |
| :---------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/u/31915107?v=4" alt="김금란" width="150"> | <img src="https://avatars.githubusercontent.com/u/50770004?v=4" alt="양명규" width="150"> | <img  src="https://avatars.githubusercontent.com/u/92559779?v=4" alt="이민태" width="150"> |
|                                            FE                                             |                                            FE                                             |                                             FE                                             |
|                          [GitHub](https://github.com/goldegg127)                          |                           [GitHub](https://github.com/mgYang53)                           |                           [GitHub](https://github.com/laivastia)                           |
|                                      고양이 좋아함😻                                      |                                      고양이 좋아함😻                                      |                                      강아지 좋아함🐶                                       |

<br/>

# 3. Key Features (주요 기능)

- **회원가입**:
  - 사용자는 소셜 로그인(Google)을 통해 계정을 생성할 수 있다.
- **로그인/로그아웃**:
  - 사용자는 소셜 로그인을 통해 간편하게 로그인할 수 있다.
  - 사용자는 로그아웃을 통해 서비스를 탈출 할 수 있다.
- **프로필 관리**:
  - 사용자는 자신의 프로필 사진, 닉네임, 소개 글을 수정할 수 있다.
  - 사용자는 자신의 관심사를 정할 수 있다.
- **좋아요**:
  - 사용자는 플레이리스트에 대해 좋아요를 누르거나 제거할 수 있다.
- **공유**:
  - 사용자는 플레이리스트를 클립보드를 복사하여 공유할 수 있다.
- **플레이리스트 CRUD**:
  - 사용자는 플레이 리스트를 생성하고, 리스트의 영상 링크를 추가하거나 제거하여 확인할 수 있다.
- **플레이리스트 구독**:
  - 다른 사용자가 공개한 플레이 리스트를 구독하거나 구독을 취소할 수 있다.
- 검색
  - 사용자는 창작자, 해시 태그, 플레이리스트 제목을 키워드로 공개된 모든 플레이리스트를 검색할 수 있다.

<br/>
<br/>

# 4. Tasks & Responsibilities (작업 및 역할 분담)

|        |                                                                                           |                                                                                                                                                                              |
| ------ | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 김금란 | <img src="https://avatars.githubusercontent.com/u/31915107?v=4" alt="김금란" width="100"> | <ul><li>컨텐츠 피드 목록 조회</li><li>반응형 레이아웃 구현</li><li>프로젝트 구조, lint, 디자인 토큰 등의 설정</li></ul>                                                      |
| 양명규 | <img src="https://avatars.githubusercontent.com/u/50770004?v=4" alt="양명규" width="100"> | <ul><li>로그인, 로그아웃, 회원가입 등 인증 처리</li><li>유저 관심사 선택 기능 구현</li><li>플레이리스트 생성/수정 기능 구현</li><li>firebase 설정 및 유틸함수 생성</li></ul> |
| 이민태 | <img src="https://avatars.githubusercontent.com/u/92559779?v=4" alt="이민태" width="100"> | <ul><li>사용자 정보 수정 기능 구현</li><li>플레이리스트 검색 기능 구현</li><li>생성 내역, 구독 내역 조회 기능 구현</li><li>공용 컴포넌트 개발</li></ul>                      |

<br/>
<br/>

# 5. Technology Stack (기술 스택)

## 5.1 Language

|            |                                                                                                                                                           |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HTML5      | <img src="https://github.com/user-attachments/assets/2e122e74-a28b-4ce7-aff6-382959216d31" alt="HTML5" width="100">                                       |
| CSS3       | <img src="https://github.com/user-attachments/assets/c531b03d-55a3-40bf-9195-9ff8c4688f13" alt="CSS3" width="100">                                        |
| Typescript | <img src="https://i.namu.wiki/i/EY559r31H-um8uTtptPIbCZoBGxsumSlwEH0T_rA6WmxQq1UwqyAf3cJQJXN7Fv5CoEz0kv5CBXzjkkPU_XWig.svg" alt="Typescript" width="100"> |

<br/>

## 5.2 Frotend

|                  |                                                                                                                                         |         |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| React            | <img src="https://github.com/user-attachments/assets/e3b49dbb-981b-4804-acf9-012c854a2fd2" alt="React" width="100">                     | 18.3.1  |
| Zustand          | <img src="https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg" alt="Redux" width="100"> | 5.0     |
| StyledComponents | <img src="https://github.com/user-attachments/assets/c9b26078-5d79-40cc-b120-69d9b3882786" alt="StyledComponents" width="100">          | 6.1.14  |
| Tanstack Query   | <img src="https://tanstack.com/_build/assets/logo-color-600w-Er4SOkq1.png" alt="StyledComponents" width="100">                          | 5.62.15 |

<br/>

## 5.3 Backend

|          |                                                                                                                        |        |
| -------- | ---------------------------------------------------------------------------------------------------------------------- | ------ |
| Firebase | <img src="https://github.com/user-attachments/assets/1694e458-9bb0-4a0b-8fe6-8efc6e675fa1" alt="Firebase" width="100"> | 11.0.2 |

<br/>

## 5.4 CI/CD

|        |                                                                                                                       |     |
| ------ | --------------------------------------------------------------------------------------------------------------------- | --- |
| Vercel | <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkAuKrVgOa4BJxUnH4gdJ5TV0m2IFEMjLJ2g&s" width="100"> | R37 |

<br/>

## 5.5 Cooperation

|        |                                                                                                                      |
| ------ | -------------------------------------------------------------------------------------------------------------------- |
| Git    | <img src="https://github.com/user-attachments/assets/483abc38-ed4d-487c-b43a-3963b33430e6" alt="git" width="100">    |
| Notion | <img src="https://github.com/user-attachments/assets/34141eb9-deca-416a-a83f-ff9543cc2f9a" alt="Notion" width="100"> |
| Slack  | <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" alt="Notion" width="100">         |
| Zoom   | <img src="https://logos-world.net/wp-content/uploads/2021/03/Zoom-Logo.png" alt="Notion" width="100">                |

<br/>

# 6. Project Structure (프로젝트 구조)

```plaintext
project/
├── public                   # 로고 및 정적 파일
│   ├── favicon.ico
│   ├── logo_petmoment.svg
│
├── src/
|   |── api/                 # API 호출 함수 및 관련 로직
|   |   └── firebase/        # 파이어스토어 설정 및 초기화
|   |   └── service/         # 내부 api 함수
|   |   └── external/        # 외부 api 함수
│   ├── assets/              # 이미지 아이콘 폰트 등 리소스
│   ├── components/          # 재사용 가능한 UI 컴포넌트
|   |   └── atom/            # atom 컴포넌트
|   |   └── 기능 단위/         # 기능별 컴포넌트 그룹화
|   |       └── index.ts
|   |       └── 컴포넌트
|   |── constant/            # 프로젝트에서 사용하는 상수값 모음 (예: URL, 키값 등)
|   |── context/             # Context API 관련 설정
│   ├── hooks/               # 커스텀 훅 모음
|   |── layout/              # 레이아웃 관련 UI
│   ├── pages/               # 각 페이지컴포넌트와 해당 페이지에서만 사용하는 컴포넌트
│   ├── provider/            # React Provider 컴포넌트 정의
|   |── routes/              # 경로 설정 화면 라우팅과 URL 직접 접근 차단
|   |── store/               # 전역 상태 관리를 위한 로직 (Zustand, user 상태 관리 관련 코드)
|   ├── styles/              # reset.css 및 디자인 토큰 정의
|   |   └── token/
|   |   └── reset.css
|   |   └── index.ts
|   ├── types/               # api 스키마와 프로젝트에서 사용하는 type 정의
|   ├── utils/               # 다양한 곳에서 사용하는 유틸 함수 정의
│   ├── App.tsx              # 메인 애플리케이션 컴포넌트
│   ├── main.tsx             # 엔트리 포인트 파일
│   ├── GlobalStyle.ts       # 전역 스타일 정의
├── .commitlintrc.json       # 커밋 메시지 스타일을 정의하는 규칙 파일
├── .stylelintrc.json        # css 설정 파일
├── .prettierrc              # 코드 포매팅 규칙 파일
├── eslint.config.js         # ESLint 설정 파일
├── index.html               # 애플리케이션의 HTML 템플릿
├── package-lock.json        # 정확한 종속성 버전이 기록된 파일로, 일관된 빌드를 보장
├── package.json             # 프로젝트 종속성 및 스크립트 정의
├── .gitignore               # Git 무시 파일 목록
├── README.md                # 프로젝트 개요 및 사용법
├── tsconfig.json            # TypeScript 설정 파일
└── vite.config.ts           # Vite 설정 파일
```

### 컴포넌트 설계

```markdown
- components
  |- core : atom(버튼, 인풋), 공용 기능 컴포넌트(탭, 아코디언, 드롭다운...)
  |- modal
  |- index.ts
  |- Modal.tsx
  |- historyModal
  |-index.ts
  |-HistoryModal.tsx
  |-HistoryModal.styles.ts
  |- SalaryModal.tsx => 도메인별
  |- Component3.tsx => 도메인별
  |- Component4.tsx
  |- 기능
  |- 기능
  |- 기능
  |- 기능
```

<br/>
<br/>

# 7. Development Workflow (개발 워크플로우)

## 브랜치 전략 (Branch Strategy)

우리의 브랜치 전략은 Git Flow를 기반으로 하며, 다음과 같은 브랜치를 사용합니다.

- Main Branch

  - 배포 가능한 상태의 코드를 유지합니다.

- develop Branch

  - 페이지 및 기능 개발 상태의 코드를 유지합니다.

- feature Branch
  - feature 단위로 개발하거나 설정, 수정 등의 목적별로 상태 코드를 유지합니다.

<br/>
<br/>

# 8. Coding Convention

## 코드 포맷팅

### ESLint, PrettierLint, StyleLint

<br/>

## 명명 규칙

- 상수 : 영문 대문자(SNAKE_CASE)
  ```tsx
  const SNAKE_CASE;
  ```
- 클래스 네임 : kebab-case
  ```HTML
  <div className = "kebab-case">
  ```
- 변수 & 함수 : camelCase

- 컴포넌트 명 : PascalCase

      - 컴포넌트 명과 디렉토리 명(`directory/index.tsx`) 동일
      - 파일 하나당 컴포넌트 하나(단일 책임 원칙)

      ```tsx
      // index.ts

      export { default as SomeComponent } from 'SomeComponent';
      ```

      ```tsx
      // SomeComponent.tsx

      import * as S from './NavBar.styles';

      const SomeComponent = () => {

          return (
          <S.SomeComponent>
              <S.ComponentHeader>이름</S.ComponentHeader>
              <S.ComponentBody>
              <Children userInfoArr={userInfo.info} userQueArr={userInfo.question} />
              </S.ComponentBody>
          </S.SomeComponent>
          );
      };

      export default SomeComponent;
      ```

  <br/>

## 스타일드 컴포넌트 명 : S.PascalCase

- 컴포넌트명.styles.ts 파일

  ```tsx
  // SomeComponent.styles.ts

  export const SomeComponent = styled.article`
    background: #efefef;
  `;
  export const ComponentHeader = styled.div`
    background: #aaa;
  `;
  export const ComponentBody = styled.div`
    padding: 70px 0;
  `;
  ```

<br/>

## 함수

```tsx
함수는 함수 표현식을 사용하며, 화살표 함수를 사용한다.
// Good
const fnName = () => {};

// Bad
function fnName() {};
```

<br/>

## 폴더 네이밍

카멜 케이스를 기본으로 하며, 컴포넌트 폴더일 경우에만 파스칼 케이스로 사용한다.

```tsx
// 카멜 케이스
camelCase;

// 파스칼 케이스
PascalCase;
```

<br/>

## 파일 네이밍

컴포넌트일 경우만 `.tsx` 확장자를 사용한다 (그 외에는 `.ts`)
<br/>
customHook을 사용하는 경우 : `use + 함수명`

<br/>
<br/>

# 9. 커밋 컨벤션

## 기본 구조

```bash
prefix : subject (#issueNumber)
```

<br/>

## issue 규칙

- ISSUE 하나당 - branch 하나, PR 하나
  - 이슈 제목
    - `[prefix] 구체적인 내용`
  - PR 제목
    - `이슈 제목과 동일`
  - 브랜치 컨벤션
    - `prefix/function-issueNumber`
  - 커밋 메시지 컨벤션
    - `prefix: subject (#issueNumber)`
  - 사용하는 prefix
    - `feature` : 새로운 기능 추가
      - 커밋 메세지는 `feat` 사용
    - `fix` : 버그 수정
    - `hotfix` : 긴급한 버그 수정
    - `docs` : 문서 수정
    - `style` : 코드 스타일 변경 (코드 로직에 영향을 주지 않는 변경)
    - `refactor` : 코드 리팩토링
    - `perf` : (Performance) 성능 개선
    - `design` : UI 디자인 변경 또는 css 관련 작업
    - `test` : 테스트 작업 관련
    - `settings` : 프로젝트 설정 관련 변경
    - `build` : 빌드 시스템이나 외부 종속성에 대한 변경
    - `ci` : CI 설정 파일 및 스크립트 변경
    - `chore` : 기타 작업 (ex. .gitignore 수정)
    - `comment` : 주석 추가 또는 수정
    - `rename` : 파일 또는 폴더명 변경
    - `remove` : 파일 삭제
    - `revert` : 이전 커밋 되돌리기

<br/>

# 10. 데이터베이스 구조

# 11. 화면
