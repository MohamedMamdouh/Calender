import React, {useEffect} from 'react';
import {View, FlatList, ActivityIndicator, Alert} from 'react-native';
import HomeActions from '../../redux/HomeRedux';
import HolidaySection from '../../components/HolidaySection';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';

const countryCode = 'polish';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const {holidaysRequest} = HomeActions;
  const isFetching = useSelector((state) => state.home.fetching);
  const data = useSelector((state) => state.home.data);

  useEffect(() => {
    dispatch(holidaysRequest(countryCode));
  }, [dispatch, holidaysRequest]);

  return (
    <View style={styles.container}>
      <View style={styles.listConainer}>
        {isFetching ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            renderItem={({item}) => <HolidaySection data={item} />}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    </View>
  );
};

export default HomeScreen;
