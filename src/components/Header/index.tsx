import Image from 'next/image';
import Link from 'next/link';

import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import styles from './styles.module.scss';

import Logo from '../../../public/logo.svg'

export function Header() {

  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR
  });

  return (
    <header className={styles.headerContainer}>
      <Link href="/">
        <Image src={Logo} alt="Podcastr" />
      </Link>
      <p>O melhor para você ouvir, sempre</p>
      <span>{currentDate}</span>
    </header>
  )
}