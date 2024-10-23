import {insertDB, saveDB, getDB} from './db.js'

export const newNote = async (note, tags) => {
    const data = {
      tags,
      content: note,
      id: Date.now(),
    }
    await insertDB(data)
    return data
  }

export const getAllNotes = async() => {
    const { notes } = await getDB()
    return notes
}

export const filterNotes = async(filter) => {
    const { notes } = await getDB()
    console.log(notes)
    return notes.filter(note => note.content.toLowerCase().includes(filter.toLowerCase()))
}

export const removeNotes = async(id) => {
    const { notes } = await getDB()
    const match = notes.find(note => note.id === id)

    if(match){
        const newNotes = notes.filter(notes => notes.id != id)
        await saveDB( {notes: newNotes} )
        return id
    }
}

export const removeAllNotes = () => saveDB({notes:[]})