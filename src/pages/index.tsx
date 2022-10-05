/**
 * This is a Next.js page.
 */

import {
  Box,
  Container,
  Divider,
  FormControl,
  Grid,
  IconButton,
  List,
  Paper,
  TextField,
  Typography,
  ListItem,
  ListItemText,
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import { Fragment, useEffect, useState } from 'react'
import { trpc } from '../utils/trpc'
import Bar from '../components/Bar'
import { IMessage } from '../interfaces/message'
import { useRouter } from 'next/router'

export default function IndexPage() {
  // 💡 Tip: CMD+Click (or CTRL+Click) on `greeting` to go to the server definition

  const [inputMessage, setInputMessage] = useState<string>('')

  let allMessages = trpc.getMessages.useQuery()

  const mutation = trpc.addMessage.useMutation()

  const router = useRouter()

  const handleSubmit = async () => {
    if (inputMessage.length === 0) return
    mutation.mutate({ text: inputMessage })
    setInputMessage('')
    router.reload()
  }

  if (!allMessages.data) {
    return (
      <div style={styles}>
        <h1>Loading...</h1>
      </div>
    )
  }

  const showMessages = allMessages.data.messages!.map((msg) => {
    let newDate = new Date().toDateString().slice(0, -5)

    const hours = new Date(msg.createdAt!).getHours()
    let minutes = new Date(msg.createdAt!).getMinutes().toString()
    if (minutes.toString().length === 1) {
      minutes += '0'
    }
    newDate = newDate + ', ' + hours + ':' + minutes

    return {
      ...msg,
      createdAt: newDate,
    }
  })

  return (
    <div>
      <Bar />
      <Fragment>
        <Container sx={{ mb: 4 }}>
          <Paper elevation={5}>
            <Box p={3}>
              <Typography variant='h4' gutterBottom>
                Public Chat
              </Typography>
              <Divider />
              <Grid container spacing={4} alignItems='center'>
                <Grid sx={{ height: '20rem' }} xs={12} item>
                  <List
                    sx={{
                      height: '18rem',
                      overflow: 'auto',
                      backgroundColor: 'whitesmoke',
                      fontSize: '1.05rem',
                    }}
                  >
                    {showMessages?.map((msg) => (
                      <ListItem
                        key={msg._id}
                        sx={{
                          borderRadius: '1.15rem',
                          lineHeight: '1.5',
                          maxWidth: '100%',
                          minWidth: '50%',
                          padding: ' 0.5rem .875rem',
                          position: 'relative',
                        }}
                      >
                        <Grid xs={4}>
                          <ListItemText
                            sx={{
                              backgroundColor: 'paleturquoise',
                              borderRadius: '5px',
                              padding: '5px',
                              paddingLeft: '7px',
                            }}
                          >
                            <ListItemText primary={`${msg.text}`} />
                            <ListItemText secondary={`${msg.createdAt}`} />
                          </ListItemText>
                        </Grid>
                      </ListItem>
                    ))}
                  </List>
                </Grid>

                <Grid xs={11} item>
                  <FormControl fullWidth>
                    <TextField
                      onChange={({ target }) => setInputMessage(target.value)}
                      value={inputMessage}
                      label='Type your message...'
                      variant='outlined'
                    />
                  </FormControl>
                </Grid>
                <Grid xs={1} item>
                  <IconButton
                    onClick={handleSubmit}
                    aria-label='send'
                    color='primary'
                  >
                    <SendIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Container>
      </Fragment>
    </div>
  )
}

const styles = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}
