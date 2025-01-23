import { URL, REQUIRED_AUTH_URLS, PATH_PARAMS } from '@/constant';

/** Path, Route, Navagate에 관련된 유틸함수 */

/**
 * generateRoutingLink - path 문자열과 userSn 문자열을 인자로 넘기고 로그인이 필요한 페이지일 경우 로그인 페이지로 리다이렉트 할 수 있는 링크를 반환 합니다.
 *
 * @param {string} path
 * @param {string} userSn
 * @returns {string} 리다이렉트할 URL
 */
export const generateRoutingLink = (path: string, userSn?: string): string => {
  if (!userSn) {
    if (REQUIRED_AUTH_URLS.includes(path)) return URL.SIGNIN.link;
    if (path === URL.PROFILE.link) return URL.SIGNIN.link;

    return path;
  }

  if (path === URL.PROFILE.link) {
    return URL.PROFILE.link.replace(PATH_PARAMS.USER_SN, userSn);
  }

  return path;
};

/**
 * getPageTitle - path 문자열을 인자로 넘기고 해당 경로의 페이지 타이틀을 반환 합니다.
 *
 * @param {string} path useLocation().pathname, widdow.location.pathname 반환 값과 같은 경로 ex) /admin/salaryRequest
 * @returns {string}
 */
export const getPageTitle = (path: string): string => {
  for (const key in URL) {
    const urlInfo = URL[key];

    if (urlInfo.link == path) return urlInfo.text;
  }

  return '';
};
