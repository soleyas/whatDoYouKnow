import { AsyncStorage } from 'react-native';

export default class Storage {
  STORAGE_KEY = 'players';
  getPlayersFromStorage = async () => {
    let value = [];
    try {
      value = await AsyncStorage.getItem(this.STORAGE_KEY);
    } catch (error) {}
    return value ? value : [];
  };

  setPlayersToStorage = async players => {
    await AsyncStorage.setItem(
      this.STORAGE_KEY,
      JSON.stringify(players)
    ).catch();
  };
}
