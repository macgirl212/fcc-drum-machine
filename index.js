const drumsInfo = [
    {
        number: 1,
        keyCode: 81,
        key: 'Q',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
        title: 'Chord 1'
    },
    {
        number: 2,
        keyCode: 87,
        key: 'W',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
        title: 'Chord 2'
    },
    {
        number: 3,
        keyCode: 69,
        key: 'E',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
        title: 'Chord 3'
    },
    {
        number: 4,
        keyCode: 65,
        key: 'A',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
        title: 'Shaker'
    },
    {
        number: 5,
        keyCode: 83,
        key: 'S',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
        title: 'Open High Hat'
    },
    {
        number: 6,
        keyCode: 68,
        key: 'D',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
        title: 'Closed High Hat'
    },
    {
        number: 7,
        keyCode: 90,
        key: 'Z',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
        title: 'Punchy Kick'
    },
    {
        number: 8,
        keyCode: 88,
        key: 'X',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
        title: 'Side Stick'
    },
    {
        number: 9,
        keyCode: 67,
        key: 'C',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
        title: 'Snare'
    }
]

const DrumPad = ({ play, sound: {key, url, number, keyCode, title} }) => {
    const keyDown = (event) => {
        if(event.keyCode === keyCode) {
            play(key, title)
        }
    }
    React.useEffect(() => {
        document.addEventListener('keydown', keyDown)
    }, [])
    return (
        <button className="drum-pad col-4" id={number} onClick={() => play(key, title)} >
            <audio className="clip" id={key} src={url} />
            {key}
        </button>
    )
}

const Drums = ({ play }) => {
    return drumsInfo.map((sound) => <DrumPad play={play} sound={sound} />)
}

const SoundTitle = ({ title }) => {
    return (
        <div className="sound-title">
            <h2 id="display">{title}</h2>
        </div>
    )
}

const App = () => {
    const [soundTitle, setSoundTitle] = React.useState('Drum Machine')
        const play = (key, title) => {
            setSoundTitle(title)
            const audio = document.getElementById(key)
            audio.currentTime = 0
            audio.play()
        }
        return (
            <div id="drum-machine">
                <SoundTitle title={soundTitle} />
                <Drums play={play} />
            </div>
        )
}

ReactDOM.render(<App />, document.getElementById('root'))