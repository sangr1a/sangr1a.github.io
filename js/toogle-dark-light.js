const btn = document.getElementById('btn');
const img = document.getElementById('backgrnd')
//устанавливает тему
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
//переключает темы в зависимости от установленной ранее
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-light'){
        setTheme('theme-dark');
        img.innerHTML = '<img src="img/logo.png" style="height: 36px; width: 130px; alt="">';
        document.getElementById("favicon").href = 'img\\favicon.png';
    } else {
        setTheme('theme-light');
        img.innerHTML = '<img src="img/black_logo.png" style="height: 36px; width: 130px; alt="">';
        document.getElementById("favicon").href = 'img\\favicon-white.png';
    }
}
//изменяет символ иконки кнопки переключения тем
btn.addEventListener('click', function handleClick() {
    if (localStorage.getItem('theme') === 'theme-dark'){
        btn.innerHTML = `<i class="fa fa-moon-o"></i>`;
    }
    else {
        btn.innerHTML=`<i class="fa fa-sun-o"></i>`;
    }
});
//функция по умолчанию, работает при входе на сайт
(function () {
    if (localStorage.getItem('theme') === 'theme-light'){
        setTheme('theme-light');
        img.innerHTML = '<img src="img/black_logo.png" style="height: 36px; width: 130px; alt="">';
        document.getElementById("favicon").href = 'img\\favicon-white.png';
    } else {
        setTheme('theme-dark');
        img.innerHTML = '<img src="img/logo.png" style="height: 36px; width: 130px; alt="">';
        document.getElementById("favicon").href = 'img\\favicon.png';
    }
})();