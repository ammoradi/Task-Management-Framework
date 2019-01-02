enum AttachmentType { IMAGE = 'Image', PDF = 'PDF', DOC = 'DOC' }

class Attachment {
    private id: Number
    private url: String
    private type: AttachmentType

    constructor(url: String, type: AttachmentType) {
        this.id = 0
        this.type = type
        this.url = url
    }

    public getType(): AttachmentType {
        return this.type
    }

    public getUrl(): String {
        return this.url
    }
}

export default Attachment