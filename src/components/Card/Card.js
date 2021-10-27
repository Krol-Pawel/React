import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import {listData} from '../../data/dataStore';


class Card extends React.Component {
  static propTypes = {
    cards: PropTypes.node,

  }
  render() {
    const {title} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{this.props.title}</h3>
      </section>
    )
  }
}

export default Card;