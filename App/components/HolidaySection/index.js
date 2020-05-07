import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const HolidaySection = ({data}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.summeryText}>{data.summary}</Text>
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{data.start}</Text>
        <Text style={styles.dateText}>{data.start}</Text>
      </View>
    </View>
  );
};

// Specifies the default values for props:
HolidaySection.defaultProps = {};

HolidaySection.propTypes = {
  data: PropTypes.object.isRequired,
};

export default HolidaySection;
