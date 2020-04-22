export default function isMobile() {
  const userAgent = navigator.userAgent;
  const android = /Android/.test(userAgent);
  const iOS = /(iPhone)/.test(userAgent);
  const wp = /Windows Phone/.test(userAgent);
  const RN = window.hasOwnProperty('ReactNativeWebView');

  return !RN && (android || iOS || wp);
}
