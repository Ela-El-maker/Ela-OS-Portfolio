import React from 'react';
import * as Styled from './MusicPlayer.styles';

const MusicPlayer = (): JSX.Element => {
    // You can replace this ID with your own favorite Spotify Playlist ID
    const PLAYLIST_ID = '37i9dQZF1DX8UebRE9wcaT'; // "Deep Focus" Playlist

    return (
        <Styled.Container>
            <Styled.IframeWrapper>
                <iframe
                    src={`https://open.spotify.com/embed/playlist/${PLAYLIST_ID}?utm_source=generator&theme=0`}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title="Ela-OS Spotify Player"
                    style={{ borderRadius: '12px' }}
                />
            </Styled.IframeWrapper>

            <Styled.FooterNote>
                <span>Ela-OS Media Engine v1.0</span>
                <div className="status-dot" />
            </Styled.FooterNote>
        </Styled.Container>
    );
};

export default MusicPlayer;