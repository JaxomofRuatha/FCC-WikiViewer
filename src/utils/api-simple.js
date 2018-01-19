export default function apiSimple(url, options) {
  fetch(url, options).then((res) => {
    res.json();
  });
}
