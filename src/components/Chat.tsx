import { getAuth } from "firebase/auth"
import {useAuthState} from 'react-firebase-hooks/auth'
import {collection, addDoc, getDocs} from "firebase/firestore"
import { Button, Container, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import {useCollectionData} from 'react-firebase-hooks/firestore'
import { db } from "..";

function Chat() {
    const auth = getAuth();
    const [user]:any = useAuthState(auth)
    const [value, setValue] = useState('')
    const [messages, setMessages]:any = useState([]);
    const [layout, setLayout]:any = useState('');
    //     getDocs(collection(db, 'messages')).then(r =>)
    // )

    const fetchPost = async () => {
        await getDocs(collection(db, "messages"))
        .then((querySnapshot)=>{
            const msg:any = querySnapshot.docs   
            setMessages(msg)    
            // console.log(msg[0]._document.data.value.mapValue.fields.author.stringValue);               
            // console.log(setMessages);
        })
        await render()
    }

    const render = () => { 
        console.log(messages)
        messages.forEach((e:any) => {
            setLayout((el:string) => el + e._document.data.value.mapValue.fields.author.stringValue)
            console.log(e._document.data.value.mapValue.fields.author.stringValue)

        })
        return messages.map((message:any) => { 
        <div>
            <Grid
            container>
                <div>{message._document.data.value.mapValue.fields.author.stringValue}</div>
                {/* {message.text} */}
            </Grid>
        </div>
    })}

    const sendMessage = async () => {
        console.log(user.displayName)
        await addDoc(collection(db, "messages"), {
            text: value,
            author: user.displayName
        })
        setValue('')
    }

    useEffect(() => {
        fetchPost()
        // console.log(render())
    }, [])

    return (
        <Container>
            <Grid
            justifyContent={'center'}
            style={{height: window.innerHeight - 50, marginTop: '5px'}}>
                <div style={{width: '80%', height: '70vh', border: '1px solid gray', overflowY: 'auto'}}>
                
                <div>
                     <Grid
                     container>
                    <div>{layout}</div>
                {/* {message.text} */}
                  </Grid>
                 </div>
                </div>
                <Grid
                    container
                    direction={'column'}
                    alignItems={'flex-end'}
                    style={{width: '80%', marginTop: '5px'}}
                    >


                        <TextField variant="outlined"
                        fullWidth
                        maxRows={2}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}/>
                        <Button onClick={sendMessage} variant="outlined" style={{marginTop: '2px'}}>Send</Button>

                    </Grid>
            </Grid>
        </Container>
    )
}

export default Chat