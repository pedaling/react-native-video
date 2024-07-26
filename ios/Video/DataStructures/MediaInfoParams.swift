struct MediaInfoParams {
    let title: String
    let artist: String
    let duration: Int32
    let channelName: String
    let artwork: String
    let albumTitle: String?
      
    init(_ json: NSDictionary?) {
        self.title = json?["title"] as? String ?? ""
        self.artist = json?["artist"] as? String ?? ""
        self.duration = json?["duration"] as? Int32 ?? 0
        self.channelName = json?["channelName"] as? String ?? ""
        self.artwork = json?["artwork"] as? String ?? ""
        self.albumTitle = json?["albumTitle"] as? String ?? ""
    }
}
