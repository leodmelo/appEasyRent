
import { StyleSheet, TextInput } from 'react-native';

const Input = (props) => {
  return (
      <TextInput 
        style={styles.input}
        {...props}      
      />)
    ;
};

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 50,
    borderRadius: 17,
    borderColor: 'orange',
    backgroundColor: 'white',
    paddingHorizontal: 8,
    color: 'gray',
  },
});

export default Input;