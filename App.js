import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Firebase from './Firebase';
import Login from './screens/Login';
import Registration from './screens/Registration';
import Dashboard from './screens/Dashboard';
import DonorDetails from './screens/DonorDetails'

const RootStack = createStackNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(()=>{
    Firebase.auth().onAuthStateChanged(authUser => {
      authUser
        ? setIsAuthenticated(true)
        : setIsAuthenticated(false)
    })
  },[]);

  const handleSignIn = (email, password) => {
    Firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        alert("You are login Successfully")
        setIsAuthenticated(true);
      })
      .catch((error) => {
        alert(error)
      })
  };

  const handleSignUp = (Name,Gender,Email,contactNo,Address,Country,City,UserName,Password,Blood,isDonor) => {
    console.warn(Name,Gender,Email,contactNo,Address,Country,City,UserName,Password,Blood,isDonor);
    alert();
    
    Firebase.auth().createUserWithEmailAndPassword(Email, Password)
      .then((response) => {
        const uid = response.user.uid
        const data = {
          id: uid,
          Name: Name,
          Gender: Gender,
          Email: Email,
          Phone: contactNo,
          Address: Address,
          Country: Country,
          City: City,
          UserName: UserName,
          Password: Password,
          Blood: Blood,
          isDonor: isDonor
        };
        var updates = {};
        updates['User/' + uid + '/MyProfile'] = data;
        updates['/Donors/' + uid] = data;
        Firebase.database().ref().update(updates)
          .then(() => {
            alert("User Created Successfully!")
            setIsAuthenticated(true);
          }).catch((error) => {
            alert(error)
          })
      }).catch((error) => {
        alert(error)
      })
      
  };

  const handleSignOut = () => {
    Firebase.auth().signOut();
    setIsAuthenticated(false);
  };

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {isAuthenticated ? (
          <>
          <RootStack.Screen 
          name="Blood Bank" 
          component={Dashboard} 
          options={{
            headerStyle:{
            backgroundColor: 'red',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerRight: () => (
              <Button onPress={handleSignOut} title="Sign Out" />
            )
          }}/>
          <RootStack.Screen 
          name="Donor Details" 
          component={DonorDetails} 
          options={{
            headerStyle:{
            backgroundColor: 'red',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
          }}
            />
          </>
        ): (
          <>
        <RootStack.Screen
          name="Login"
          options={{
            animationTypeForReplace: 'pop',
            headerStyle: {
              backgroundColor: 'red',
            },
            headerLeftContainerStyle: {
              paddingLeft: 10
            },
            headerRightContainerStyle: {
              paddingRight: 10
            },
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
          }

          }>
          {(props) => (
            <Login {...props} onclick={handleSignIn} />
          )}
        </RootStack.Screen>
        <RootStack.Screen name="Registration" options={{
          headerStyle: {
            backgroundColor: 'red',
          },
          headerLeftContainerStyle: {
            paddingLeft: 10
          },
          headerRightContainerStyle: {
            paddingRight: 10
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
        }}>
          {(props) => (
            <Registration {...props} signup={handleSignUp} />
          )}
        </RootStack.Screen>
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
