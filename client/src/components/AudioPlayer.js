
function AudioPlayer({ audioTrack }){


    return(
        <div>
            {audioTrack === "Let It Be/The Beatles STUDIO BLOOPERS" ? <p>(No Audio for this Track, enjoy some Beatles Bloopers!)</p> : null}
            <audio controls src={require(`../assets/${audioTrack}.mp3`).default}></audio>
        </div>
    )
}

export default AudioPlayer;