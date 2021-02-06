import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, Picker, TouchableOpacity, Image, ScrollView, CheckBox } from 'react-native'
import { FlatList, State } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import Firebase from '../Firebase'

const Registration = (props) => {
    const [colors, setcolor] = useState('grey');

    const [Name, setName] = useState('');
    const [Gender, setGender] = useState('');
    const [Email, setEmail] = useState('');
    const [contactNo, setcontactNo] = useState(0);
    const [Address, setAddress] = useState('');
    const [Country, setCountry] = useState('');
    const [City, setCity] = useState('');
    const [UserName, setUserName] = useState('');
    const [Password, setPassword] = useState('');
    const [Blood, setBlood] = useState('');
    const [isDonor, setisDonor] = useState(false);

    const bloodGrouds = [
        {ID : 1, Name: 'A+'},
        {ID : 2, Name: 'A-'},
        {ID : 3, Name: 'B+'},
        {ID : 4, Name: 'B-'},
        {ID : 5, Name: 'AB+'},
        {ID : 6, Name: 'AB-'},
        {ID : 7, Name: 'O+'},
        {ID : 8, Name: 'O-'}
    ]

    const dropdown = (text) => {
        setGender(text);
        (text == "") ? setcolor('red') : setcolor('#fff');
    }
    
    const Blooddropdown = (text) => {
        setBlood(text);
        (text == "") ? setcolor('red') : setcolor('#fff');
    }

    const pickerItem = bloodGrouds.map((i,k)=>{
        return(
            <Picker.Item key={k} label={i.Name} value={i.Name} />
        )
    });

    return (
        <View style={styles.container}>
            <View style={styles.register}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.registerHead}>Registeration</Text>
                    <TextInput value={Name} onChangeText={(text) => setName(text)} placeholder="Name" placeholderTextColor='grey'
                        style={styles.input} autoFocus={true} />
                    <Picker onValueChange={dropdown} selectedValue={Gender} style={styles.input, { color: colors }} >
                        <Picker.Item label="Select a Gender" value="" color="red" />
                        <Picker.Item label="Male" value="Male" />
                        <Picker.Item label="Female" value="Female" />
                        <Picker.Item label="Others" value="Others" />
                    </Picker>
                    <TextInput value={Email} onChangeText={(text) => { setEmail(text) }} placeholder="Email" keyboardType='email-address'
                        placeholderTextColor='grey' style={styles.input} autoFocus={false} />
                    <TextInput value={contactNo} onChangeText={(text) => setcontactNo(text)} placeholder="Phone" placeholderTextColor='grey'
                        style={styles.input} keyboardType='number-pad' autoFocus={false} />
                    <TextInput value={Address} onChangeText={(text) => setAddress(text)} multiline={true} numberOfLines={4} placeholder="Address" placeholderTextColor='grey' style={styles.input} />
                    <TextInput value={Country} onChangeText={(text) => { setCountry(text) }} placeholder="Country"
                        placeholderTextColor='grey' style={styles.input} autoFocus={false} />
                    <TextInput value={City} onChangeText={(text) => { setCity(text) }} placeholder="City"
                        placeholderTextColor='grey' style={styles.input} autoFocus={false} />
                    <TextInput value={UserName} onChangeText={(text) => { setUserName(text) }} placeholder="UserName"
                        placeholderTextColor='grey' style={styles.input} autoFocus={false} />
                    <TextInput value={Password} onChangeText={(text) => setPassword(text)} placeholder="Password" placeholderTextColor='grey'
                        style={styles.input} secureTextEntry={true} autoFocus={false} />
                    <Picker onValueChange={Blooddropdown} selectedValue={Blood} style={styles.input, { color: colors }} >
                        <Picker.Item label="Select Blood Group" value="" color="red" />
                        {pickerItem}
                    </Picker>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            value={isDonor}
                            onValueChange={setisDonor}
                            style={styles.checkbox}
                        />
                        <Text style={styles.label}>Do you want to become a Donor?</Text>
                    </View>

                    <TouchableOpacity style={styles.btn} onPress={()=> props.signup(Name,Gender,Email,contactNo,Address,Country,City,UserName,Password,Blood,isDonor)}>
                        <Text style={styles.paragraph}>Sign Up</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#36485f',
    },
    register: {
        alignSelf: 'stretch',
        paddingHorizontal: 30
    },
    registerHead: {
        color: '#fff',
        fontSize: 30,
        borderBottomColor: 'red',
        borderBottomWidth: 2,
        paddingBottom: 10,
        marginVertical: 20
    },
    checkboxContainer: {
        flex: 1,
        flexDirection: "row",
        marginVertical: 15
    },
    checkbox: {
        alignSelf: "center"
    },
    label: {
        margin: 8,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },

    input: {
        padding: 10,
        marginVertical: 10,
        fontSize: 20,
        color: '#fff'
    },
    btn: {
        padding: 15,
        backgroundColor: 'red',
        borderRadius: 8,
        marginTop: 20
    },
    paragraph: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
    },
});

export default Registration
