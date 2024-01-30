// index.js
Page({
    data: {
        tableItems: [
            { id: 1, text: 'Heeseung', url: '/pages/hs' },
            { id: 2, text: 'Jay', url: '/pages/jay' },
        ]
    },

    onTableItemTap: function(event) {
        const url = event.currentTarget.dataset.url;
        wx.navigateTo({
            url: url
        });
    }
});
