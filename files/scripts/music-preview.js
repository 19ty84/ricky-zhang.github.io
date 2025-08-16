document.querySelectorAll('details.music-player').forEach(item => {
    item.addEventListener('toggle', function () {
        if (this.open) { // 仅当展开时加载
            const container = this.querySelector('.player-container');
            const playerUrl = container.dataset.src;
            container.innerHTML = `
              <iframe 
                frameborder="no"
                border="0"
                marginwidth="0"
                marginheight="0"
                width=298
                height=52
                src="${playerUrl}" 
              ></iframe>
            `;
        }
        if (!this.open) { // 销毁
            this.querySelector('.player-container').innerHTML = '';
        }
    });
});