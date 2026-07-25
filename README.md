# CHOBOREUM Portfolio

운영 경험을 바탕으로 서비스 흐름을 이해하고, 그 흐름을 API와 데이터 구조로 구현하는 개발자 포트폴리오입니다.

## 구성

- `src/App.jsx`: React 기반 메인 포트폴리오
- `css/portfolio.css`: 공통 스타일
- `projects/erumpay/`: ErumPay Case Study 상세 페이지
- `resume/`: 기술경력서
- `guide/`: 퍼블리싱 가이드
- `legacy/`: 기존 퍼블리싱 작업물

## 주요 방향

- 메인은 사람, 경력, 대표 프로젝트를 빠르게 이해할 수 있는 소개 페이지로 구성했습니다.
- ErumPay는 별도 Case Study 페이지로 분리해 문제 정의, 구조 선택, 구현 범위, 트러블슈팅을 깊게 보여줍니다.
- AI 면접 플랫폼, MyBill, ErumPay는 `Development Journey`로 묶어 Frontend에서 Backend/MSA로 확장한 흐름을 보여줍니다.
- 퍼블리싱/운영 경력은 억지로 개발 프로젝트처럼 포장하지 않고 경력기술서형으로 유지했습니다.

## 실행

```bash
npm install
npm run dev
```

기본 개발 서버:

```text
http://localhost:5173/
```

## 빌드

```bash
npm run build
```

빌드 결과물은 `dist/`에 생성됩니다.  
Cafe24에 배포할 때는 `dist/` 안의 파일과 폴더를 `/www` 기준으로 업로드합니다.

## 배포 포함 폴더

`npm run build` 실행 후 아래 정적 폴더가 `dist/`로 함께 복사됩니다.

- `resume/`
- `guide/`
- `legacy/`
- `projects/`

## 보안 메모

- `.env`는 커밋하지 않습니다.
- WordPress 원본 파일은 로컬 보관용이며 배포/커밋 대상에서 제외합니다.
- DB 접속 정보나 실서비스 인증 정보는 저장소에 올리지 않습니다.

## 확인할 링크

Contact 영역의 GitHub, Velog, Email, Resume 링크는 실제 지원 전에 한 번 더 확인합니다.
