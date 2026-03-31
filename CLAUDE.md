# LearnLangs - 외국어 생활회화 학습 웹서비스

## 프로젝트 개요
다국어 생활회화 학습 SPA. 현재 중국어(25단계) 지원, 스페인어 준비 중. GitHub Pages 배포, 백엔드 없는 정적 사이트.

## 기술 스택 (실제 서비스)
- **순수 정적 페이지**: `index.html` + `app.js` + `data.js` + `style.css`
- Vite/React (`src/`) 코드도 존재하지만 실제 서비스에는 사용되지 않음
- localStorage (학습 진도)
- GitHub Pages 배포 (GitHub Actions)

## 핵심 파일 구조
```
index.html          ← 엔트리 포인트
app.js              ← 라우팅, 렌더링, 퀴즈 로직 전체
data.js             ← 25개 레벨 데이터 (대화, 단어, 퀴즈)
style.css           ← 전체 스타일
src/                ← Vite/React 소스 (서비스 미사용, 참고용)
```

## 핵심 로직
- 퀴즈: 레벨당 20문제 풀에서 10문제 랜덤 선택
- 통과 기준: 10문제 중 8문제 이상 (80%)
- 레벨 해제: 모든 레벨 자유 접근 가능
- 통과한 레벨: 아이콘 위에 대각선 PASS 리본 표시
- HashRouter 사용 (`#/` 언어선택, `#/chinese` 중국어홈, `#/lesson/1`, `#/quiz/1`, `#/result/1?score=8&total=10`)

## 주의사항
- **변경 시 반드시 `app.js`, `data.js`, `style.css`를 직접 수정할 것**
- `src/` 폴더의 React 코드를 수정해도 배포에 반영되지 않음
- push하면 GitHub Actions가 자동 배포
