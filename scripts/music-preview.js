document.querySelectorAll('details.music-player').forEach(item => {
  item.addEventListener('toggle', function () {
    const container = this.querySelector('.player-container');
    const playerUrl = container.dataset.src;
    if (this.open && container.innerHTML.length < 20) { // 仅当展开时加载
      container.innerHTML = `
        <audio controls preload="auto">
          <source src="${playerUrl}" type="audio/wav">
          您的浏览器不支持该 audio 预览。
        </audio>
      `;
    }
    // if (!this.open) { // 销毁
    //   this.querySelector('.player-container').innerHTML = '';
    // }
  });
});