import Image from 'next/image';

import styles from './styles.module.scss';

import Playing from '../../../public/playing.svg'
import Shuffle from '../../../public/shuffle.svg'
import PlayPrevious from '../../../public/play-previous.svg'
import Play from '../../../public/play.svg'
import PlayNext from '../../../public/play-next.svg'
import Repeat from '../../../public/repeat.svg'

export function Player() {

  return (
    <div className={styles.playerContainer}>
      <header>
        <Image src={Playing} alt="Tocando agora" />
        <strong>Tocando agora</strong>
      </header>

      <div className={styles.emptyPlayer}>
        <strong>Selecione um podcast para ouvir</strong>
      </div>

      <footer className={styles.empty}>
        <div className={styles.progress}>
          <span>00:00</span>
          <div className={styles.slider}>
            <div className={styles.emptySlider} />
          </div>
          <span>00:00</span>
        </div>

        <div className={styles.buttons}>
          <button type="button">
            <Image src={Shuffle} alt="Embaralhar" />
          </button>
          <button type="button">
            <Image src={PlayPrevious} alt="Tocar anterior" />
          </button>
          <button type="button" className={styles.playButton}>
            <Image src={Play} alt="Tocar" />
          </button>
          <button type="button">
            <Image src={PlayNext} alt="Tocar próxima" />
          </button>
          <button type="button">
            <Image src={Repeat} alt="Repetir" />
          </button>
        </div>
      </footer>
    </div>
  )
}