import { useContext, useEffect, useRef } from 'react';
import Image from 'next/image';
import Slider from 'rc-slider';

import { PlayerContext } from '../../contexts/PlayerContext';

import Playing from '../../../public/playing.svg'
import Shuffle from '../../../public/shuffle.svg'
import PlayPrevious from '../../../public/play-previous.svg'
import PlayNext from '../../../public/play-next.svg'
import Repeat from '../../../public/repeat.svg'

import styles from './styles.module.scss';
import 'rc-slider/assets/index.css';

export function Player() {

  const audioRef = useRef<HTMLAudioElement>(null);

  const {
    episodeList,
    currentEpisodeIndex,
    isPlaying,
    togglePlay,
    setPlayingState
  } = useContext(PlayerContext);

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying])

  const episode = episodeList[currentEpisodeIndex];

  return (
    <div className={styles.playerContainer}>

      <header>
        <Image src={Playing} alt="Tocando agora" />
        <strong>Tocando agora</strong>
      </header>

      {episode ? (
        <div className={styles.currentEpisode}>
          <Image width={592} height={592} src={episode.thumbnail} objectFit="cover" />
          <strong>{episode.title}</strong>
          <span>{episode.members}</span>
        </div>
      ) : (
        <div className={styles.emptyPlayer}>
          <strong>Selecione um podcast para ouvir</strong>
        </div>
      )
      }

      <footer className={!episode ? styles.empty : ''}>

        <div className={styles.progress}>
          <span>00:00</span>
          <div className={styles.slider}>
            {episode ? (
              <Slider
                trackStyle={{ background: '#04d361' }}
                railStyle={{ background: '#9f75ff' }}
                handleStyle={{ borderColor: '#04d361', borderWidth: 4 }}
              />
            ) : (
              <div className={styles.emptySlider} />
            )}
          </div>
          <span>00:00</span>
        </div>

        {episode && (
          <audio
            src={episode.url}
            ref={audioRef}
            autoPlay
            onPlay={() => setPlayingState(true)}
            onPause={() => setPlayingState(false)}
          />
        )}

        <div className={styles.buttons}>
          <button type="button" disabled={!episode}>
            <Image src={Shuffle} alt="Embaralhar" />
          </button>
          <button type="button" disabled={!episode}>
            <Image src={PlayPrevious} alt="Tocar anterior" />
          </button>
          <button type="button" className={styles.playButton} disabled={!episode} onClick={() => togglePlay()}>
            {isPlaying ? (
              <img src="/pause.svg" alt="Pausar" />
            ) : (
              <img src="/play.svg" alt="Tocar" />
            )}
          </button>
          <button type="button" disabled={!episode}>
            <Image src={PlayNext} alt="Tocar próxima" />
          </button>
          <button type="button" disabled={!episode}>
            <Image src={Repeat} alt="Repetir" />
          </button>
        </div>

      </footer>

    </div >
  )
}