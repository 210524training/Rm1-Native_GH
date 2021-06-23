import React, {useState} from 'react';
import { StyleSheet, View, Text} from "react-native";
// import { Nav } from 'react-native-bootstrap';
type Props = {
}

const Navbar: React.FC<Props> = (props) => {

//   const history = useHistory();
//   const dispatch = useAppDispatch();
//   // We "Select" the User data from the state
  const user = useState("us");

//   const handleLogout = () => {
//     dispatch(logout());

//     history.push('/');
//   }

  return (
    <View>
      <View style={styles.nav}>      
        <View style={styles.nav}>
          <Text><Text style={styles.navT}>GrubDash</Text></Text>
          <Text > <Text style={styles.lis}>Restaurants</Text></Text>
          <Text ><Text style={styles.lis}>Clicker</Text></Text>
          <Text><Text style={styles.lis}>Login</Text></Text>
          <Text ><Text style={styles.lis}>Register</Text></Text>
        { !user && (
          <>
              <input type='submit' value='Logout' />
          </>
          )
        }
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    nav: {
      flexDirection: "row",
      height: 100,
      padding: 10,
    },
    lis: {
        flexDirection: "row",
        padding: 10,
      },
    navT: {
        padding: 15,
        fontSize: 20,
    },

  });

export default Navbar;