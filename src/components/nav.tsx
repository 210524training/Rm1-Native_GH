import React, {useState} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
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
          <NavLink to="/"><Text style={styles.navT}>GrubDash</Text></NavLink>
          <NavLink to="/restaurants"> <Text style={styles.lis}>Restaurants</Text></NavLink>
          <NavLink to="/clicker"><Text style={styles.lis}>Clicker</Text></NavLink>
          <NavLink to="/login"><Text style={styles.lis}>Login</Text></NavLink>
          <NavLink to="/register"><Text style={styles.lis}>Register</Text></NavLink>
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
        float: "right",
        textDecoration: "none",
      },
    navT: {
        padding: 15,
        textDecoration: "none",
        fontSize: 20,
    },

  });

export default Navbar;