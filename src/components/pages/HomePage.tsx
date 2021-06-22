import React from 'react';
import { StyleSheet, View, Text} from "react-native";

const HomePage: React.FC<unknown> = (props) => {
    return (
        <View>
            <h1 className='whiteText'>GrubDash</h1><br/>
            <br/>
            <h2 className='whiteText'>Restaurants and more, </h2>
            <h2 className='whiteText'>delivered to your door</h2>
            <br/>
            <input className="input1" placeholder="Your Address"/> <input value="Search" className="input2" type='submit'/>
        </View>
    )
}
export default HomePage;