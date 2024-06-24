// 백엔드 API 기본 URL 설정

let backendHost;

const hostname = window && window.location && window.location.hostname;

if (hostname === "localhost") {
  backendHost = "https://devdoc-backend-a9c04f690ebd.herokuapp.com";
}

export const API_BASE_URL = `${backendHost}`;
