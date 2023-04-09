class ContentPage {
    constructor(data) {
        this.data = data;
    }

    getContent = (contentName) => {
        return this.data.content[contentName];
    }
}

export default ContentPage;