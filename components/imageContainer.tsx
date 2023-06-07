import { clsx } from 'clsx';

import styles from './imageContainer.module.css';

interface Props {
  children: React.ReactNode;
  withBorder?: boolean;
}

export function ImageContainer(props: Props) {
  return (
    <div className={clsx(styles.wrapper, props.withBorder && styles.withBorder)}>
      {props.children}
    </div>
  );
}
