
import { types, onSnapshot, getSnapshot, flow } from "mobx-state-tree"
import axios from 'axios';


const person = types.model("person", {

    name: types.optional(types.string, ""),

    dob: types.optional(types.string, ""),

    age: types.optional(types.string, ""),

    education: types.optional(types.string, ""),

    date: types.optional(types.string, "")
}).actions((self) => ({

    updateProperty(e) {
        //console.log('key'+event.target.name+'value'+event.target.value)
        self[event.target.name] = event.target.value
    },

    saveForm: flow(function* saveForm(e) {
        e.preventDefault();
        var headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Credentials': 'true'
        }
        console.log('Sending form', JSON.stringify(getSnapshot(self)))
        try {
            axios.post('http://localhost:7070/appbook/addperson', JSON.stringify(getSnapshot(self)),{headers: headers} ).then(res => {
                console.log(res);
                console.log(res.data);
            })


        } catch (e) {

            throw (e)
        }
    })



})).views((value) => ({

    getstatus() {


    }



}))
export default person;