document.querySelectorAll('details.music-player').forEach(item => {
    item.addEventListener('toggle', function () {
        if (this.open) { // 仅当展开时加载
            const container = this.querySelector('.player-container');
            const playerUrl = container.dataset.src;

            // 如果尚未加载过
            if (!container.innerHTML) {
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
        }
    });
});