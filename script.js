const btn = document.getElementById('theme');
btn.onclick = () => {
  document.body.classList.toggle('dark');
  const dark = document.body.classList.contains('dark');
  btn.textContent = dark ? '☀️ 라이트모드' : '🌙 다크모드';
};
document.querySelectorAll('.card').forEach((c, i) => {
  setTimeout(() => c.classList.add('show'), 300 + i * 200);
});
