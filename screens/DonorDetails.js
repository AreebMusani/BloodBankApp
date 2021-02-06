import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet,Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

var width = Dimensions.get('window').width; //full width

const DonorDetails = (props) => {
    const donorProfile = props.route.params?.details;
    return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.head}>Donor's information</Text>
            
            <Text style={styles.text}>Personal</Text>
            <View style={styles.item}>
                <Text style={styles.field}>UserName:</Text>
                <Text style={styles.values}>{donorProfile.UserName}</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.field}>Email:</Text>
                <Text style={styles.values}>{donorProfile.Email}</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.field}>Contact No:</Text>
                <Text style={styles.values}>{donorProfile.Phone}</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.field}>Address:</Text>
                <Text style={styles.values}>{donorProfile.Address}</Text>
            </View>

            <Text style={styles.text}>Blood Information</Text>
            
            <View style={styles.item}>
                <Text style={styles.field}>Blood Group:</Text>
                <Text style={styles.values}>{donorProfile.Blood.substr(0,donorProfile.Blood.length - 1)}</Text>
            </View> 

            <View style={styles.item}>
                <Text style={styles.field}>RH Factor:</Text>
                <Text style={styles.values}>{donorProfile.Blood.substr(donorProfile.Blood.length - 1)}</Text>
            </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#36485f',
      alignItems: 'center',
      paddingVertical: 10
    },
    head: {
        fontWeight: "bold",
        color: '#fd4602',
        fontSize: 35,
        textAlign: "center",
        marginVertical: 20,
        borderBottomColor: 'red',
        borderBottomWidth: 2,
    },
    text:{
        fontSize: 25,
        color: '#02fd41',
        alignSelf: "flex-start",
        marginLeft: 10,
        fontWeight: "bold",
        borderBottomColor: '#fd02c0',
        borderBottomWidth: 2,
        opacity: 0.5,
        marginTop: 20     
    },
    item:{
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        //paddingVertical: 15,
        //paddingHorizontal:10,
        borderBottomWidth: 2,
        width:width - 20,
        marginTop:10,
        borderBottomColor: '#fff',
        paddingHorizontal:5,
        paddingVertical:10
    },
    field:{
        flexBasis:'30%',
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#fff'
    },
    values:{
        fontWeight:'bold',
        fontSize: 20,
        flexBasis: '70%',
        flexWrap: 'wrap',
        alignSelf: 'center',
        color: '#f5f5f5',       
    }
})
export default DonorDetails
