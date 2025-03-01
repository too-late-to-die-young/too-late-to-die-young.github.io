document.addEventListener("DOMContentLoaded", function() {
    // 等待页面加载完毕后执行
    var searchInput = document.querySelector('.md-search__input');
    if (searchInput) {
        // 修改搜索框的占位符文字
        searchInput.setAttribute('placeholder', '任意关键词搜索');
    }
});