ProjectName : Total Auth Login Solution

// 사용 라이브러리
axios, Js-Cookie, Jsonwebtoken, Momet, Momet-Timezone, React-router-dom React-toastify, React-kakako-login, React-facebook-login, React-google-login react-login-by-naver

// 프로젝트 상세
- 메일인증 후 회원가입 및 SNS연동 로그인, 문자발송을 통한 본인인증 후 회원가입 및 로그인
- 중복가입을 방지하기위해 중복시 toast메세지를 통해 사용자에게 알림기능
- 가입된 회원정보를 js-cookie 쿠키생성 및 jsonwebtoken으로 DB에 decode처리 사용자
  개인정보를 암호화로 저장하는 기능 구현
- SNS 연동을 통해 회원가입및 로그인 간편화

// To Do List
- ARS를 이용하여 사용자 ARS전화인증 기능추가
- 비밀번호 변경시 보안을 위해 이전비밀번호와 중복되는 문자가 있을 경우 경고 메세지 후
중복되지 않도록 신규비밀번호 변경안내
