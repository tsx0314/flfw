// index.js
Page({
    data: {
        tableItems: [
            { id: 1, text: 'Heeseung', url: '/pages/enhypen/hs' },
            { id: 2, text: 'Jay', url: '/pages/enhypen/jay' },
        ]
    },
    onTableItemTap: function(event) {
        // Retrieve the URL from the dataset of the clicked item
        const url = event.currentTarget.dataset.url;
        wx.navigateTo({
            url: url
        });
    }
});
