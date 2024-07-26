import AVFoundation
import AVKit
import React
import Foundation
import Promises
import MediaPlayer


final class RCTVideoControlCenter: NSObject {
    private var playingInfoCenter: MPNowPlayingInfoCenter? = nil
    private var player: RCTVideo?
    
    func configureNowPlayingInfoCenter(config: MediaInfoParams) {
        self.playingInfoCenter = MPNowPlayingInfoCenter.default()
        var nextPlayingInfo: [String : Any] = [:]

        nextPlayingInfo[MPMediaItemPropertyTitle] = config.title
        nextPlayingInfo[MPMediaItemPropertyAlbumTitle] = config.albumTitle
        nextPlayingInfo[MPMediaItemPropertyArtist] = config.artist
        nextPlayingInfo[MPMediaItemPropertyPlaybackDuration] = config.duration
        self.playingInfoCenter?.nowPlayingInfo = nextPlayingInfo
        
        loadArtwork(artworkUrl: config.artwork) { albumArt in
            nextPlayingInfo[MPMediaItemPropertyArtwork] = albumArt
            self.playingInfoCenter?.nowPlayingInfo = nextPlayingInfo
        }

        UIApplication.shared.beginReceivingRemoteControlEvents()
        player?.becomeFirstResponder()
    }

    private func loadArtwork(artworkUrl: String, completion: @escaping (MPMediaItemArtwork) -> Void) {
        guard let url = URL(string: artworkUrl) else {
            return
        }
        
        DispatchQueue.global().async {
            if let data = try? Data(contentsOf: url),
               let artworkImage = UIImage(data: data) {
               let albumArt = MPMediaItemArtwork(boundsSize: artworkImage.size, requestHandler: { _ in
                   return artworkImage
               })
                
                completion(albumArt)
           }
        }
    }
    
    func setupCommandEvent(player: RCTVideo) {
        if self.player != nil {
            self.releaseMediaPlayer()
        }
        self.player = player
        let remoteCommandCenter = MPRemoteCommandCenter.shared()
        remoteCommandCenter.playCommand.isEnabled = true
        remoteCommandCenter.playCommand.addTarget(handler: self.handlePlayCommandEvent)
        remoteCommandCenter.pauseCommand.isEnabled = true
        remoteCommandCenter.pauseCommand.addTarget(handler: self.handlePauseCommandEvent)

        if self.player?.onPressPrevious != nil {
            remoteCommandCenter.previousTrackCommand.isEnabled = true
        } else {
            remoteCommandCenter.previousTrackCommand.isEnabled = false
        }
        remoteCommandCenter.previousTrackCommand.addTarget(handler: self.handlePreviousTrackCommandEvent)

        if self.player?.onPressNext != nil {
            remoteCommandCenter.nextTrackCommand.isEnabled = true
        } else {
            remoteCommandCenter.nextTrackCommand.isEnabled = false
        }
        remoteCommandCenter.nextTrackCommand.addTarget(handler: self.handleNextTrackCommandEvent)
        
        remoteCommandCenter.changePlaybackPositionCommand.isEnabled = true
        remoteCommandCenter.changePlaybackPositionCommand.addTarget(self, action: #selector(handlePlaybackPositionCommandEvent(changePositionEvent:)))
    }

    func releaseMediaPlayer() {
        self.playingInfoCenter?.nowPlayingInfo = nil
        UIApplication.shared.endReceivingRemoteControlEvents()
        player?.resignFirstResponder()
        self.player = nil
    }
    
    func updateNowPlayingInfo(time: NSNumber, rate: Float) {
        self.playingInfoCenter?.nowPlayingInfo?[MPNowPlayingInfoPropertyElapsedPlaybackTime] = time
        self.playingInfoCenter?.nowPlayingInfo?[MPNowPlayingInfoPropertyPlaybackRate] = rate
    }
        
    func handlePlayCommandEvent(_ event: MPRemoteCommandEvent) -> MPRemoteCommandHandlerStatus {
        self.player?.setPaused(false)
        self.player?.onVideoExternalPlaybackChange?(["isExternalPlaybackActive": NSNumber(value: true)])
        return .success
    }
            
    func handlePauseCommandEvent(_ event: MPRemoteCommandEvent) -> MPRemoteCommandHandlerStatus {
        self.player?.setPaused(true)
        self.player?.onVideoExternalPlaybackChange?(["isExternalPlaybackActive": NSNumber(value: false)])
        return .success
    }
        
    func handlePreviousTrackCommandEvent(_ event: MPRemoteCommandEvent) -> MPRemoteCommandHandlerStatus {
        self.player?.onPressPrevious?([:])
        return .success
    }
    
    func handleNextTrackCommandEvent(_ event: MPRemoteCommandEvent) -> MPRemoteCommandHandlerStatus {
        self.player?.onPressNext?([:])
        return .success
    }

    @objc
    func handlePlaybackPositionCommandEvent(changePositionEvent: MPChangePlaybackPositionCommandEvent) -> MPRemoteCommandHandlerStatus {
        self.player?.setCurrentTime(Float(changePositionEvent.positionTime))
        return .success
    }
}
