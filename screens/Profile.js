import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Dimensions } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import Firebase from '../Firebase'

var width = Dimensions.get('window').width; //full width

const Profile = () => {
    const [myprofile, setmyprofile] = useState([])

    useEffect(() => {
        const uid = Firebase.auth().currentUser.uid;
        Firebase.database().ref('User/' + uid + '/MyProfile').once("value", (datasnap) => {
            const data = datasnap.val();
            setmyprofile(data);
        })
    }, [])

    return (
        <View style={styles.container}>
            <Image source={require('../assets/Profile-Male-PNG.png')} style={{ width: 200, height: 200, marginVertical: 25 }} />
            <ScrollView>
                <View>
                    <View style={styles.item}>
                        <Text style={styles.field}>UserName:</Text>
                        <Text style={styles.values}>{myprofile.UserName}</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.field}>Email:</Text>
                        <Text style={styles.values}>{myprofile.Email}</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.field}>Contact No:</Text>
                        <Text style={styles.values}>{myprofile.Phone}</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.field}>Address:</Text>
                        <Text style={styles.values}>{myprofile.Address}</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.field}>Blood Group:</Text>
                        <Text style={styles.values}>{myprofile.Blood}</Text>
                    </View>

                    <View style={styles.item}>
                        <Text style={styles.field}>Region:</Text>
                        <Text style={styles.values}>{myprofile.City}, {myprofile.Country}</Text>
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#36485f',
        alignItems: 'center',
    },
    item: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        //paddingVertical: 15,
        //paddingHorizontal:10,
        borderBottomWidth: 2,
        width: width - 20,
        marginTop: 10,
        borderBottomColor: '#fff',
        paddingHorizontal: 5,
        paddingVertical: 10
    },
    field: {
        flexBasis: '30%',
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#fff'
    },
    values: {
        fontWeight: 'bold',
        fontSize: 20,
        flexBasis: '70%',
        flexWrap: 'wrap',
        alignSelf: 'center',
        color: '#f5f5f5',
    }
});

export default Profile
