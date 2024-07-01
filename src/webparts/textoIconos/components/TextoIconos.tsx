import * as React from 'react';
import styles from './TextoIconos.module.scss';
import type { ITextoIconosProps } from './ITextoIconosProps';
import { FontIcon } from '@fluentui/react/lib/Icon';
import { escape } from '@microsoft/sp-lodash-subset';

export default class TextoIconos extends React.Component<ITextoIconosProps, {}> {
  public render(): React.ReactElement<ITextoIconosProps> {
    const {
      titulo1,
      description1,
      iconPicker1,
      titulo2,
      description2,
      iconPicker2,
      titulo3,
      description3,
      iconPicker3,
      titulo4,
      description4,
      iconPicker4,
      titulo5,
      description5,
      iconPicker5,
      titulo6,
      description6,
      iconPicker6
    } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.singleListContent}>
          <div className={styles.singleListIcon}>
            <FontIcon iconName={iconPicker1} className={styles.iconPicker} />
          </div>
          <h2>{escape(titulo1)}</h2>
          <p>{escape(description1)}</p>
        </div>
        <div className={styles.singleListContent}>
          <div className={styles.singleListIcon}>
            <FontIcon iconName={iconPicker2} className={styles.iconPicker} />
          </div>
          <h2>{escape(titulo2)}</h2>
          <p>{escape(description2)}</p>
        </div>
        <div className={styles.singleListContent}>
          <div className={styles.singleListIcon}>
            <FontIcon iconName={iconPicker3} className={styles.iconPicker} />
          </div>
          <h2>{escape(titulo3)}</h2>
          <p>{escape(description3)}</p>
        </div>
        <div className={styles.singleListContent}>
          <div className={styles.singleListIcon}>
            <FontIcon iconName={iconPicker4} className={styles.iconPicker} />
          </div>
          <h2>{escape(titulo4)}</h2>
          <p>{escape(description4)}</p>
        </div>

        <div className={styles.singleListContent}>
          <div className={styles.singleListIcon}>
            <FontIcon iconName={iconPicker5} className={styles.iconPicker} />
          </div>
          <h2>{escape(titulo5)}</h2>
          <p>{escape(description5)}</p>
        </div>
        <div className={styles.singleListContent}>
          <div className={styles.singleListIcon}>
            <FontIcon iconName={iconPicker6} className={styles.iconPicker} />
          </div>
          <h2>{escape(titulo6)}</h2>
          <p>{escape(description6)}</p>
        </div>
      </div>
    );
  }
}
