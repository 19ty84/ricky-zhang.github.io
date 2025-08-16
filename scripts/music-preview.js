document.querySelectorAll('details.music-player').forEach(item => {
  item.addEventListener('toggle', function () {
    if (this.open) { // 仅当展开时加载
      const container = this.querySelector('.player-container');
      const playerUrl = container.dataset.src;
      container.innerHTML = `
        <audio controls preload="none">
          <source src="${playerUrl}" type="audio/wav">
          您的浏览器不支持该 audio 预览。
        </audio>
      `;
    }
    if (!this.open) { // 销毁
      this.querySelector('.player-container').innerHTML = '';
    }
  });
});