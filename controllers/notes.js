let notes = [
    {
        id: "db0754cf2281bcdffe4dce1b68c6a215",
        title:"First Note",
        body:"First Note Entered",
        dateCreated: new Date("2022-11-30T16:47:31.390Z"),
        important: true
    },
    {
        id: "db0754cf2281bcdffe4dce1b68c6a215",
        title:"First Note",
        body:"First Note Entered",
        dateCreated: new Date("2022-11-30T16:47:31.390Z"),
        important: false
    },
    {
        id: "db0754cf2281bcdffe4dce1b68c6a215",
        title:"Second Note",
        body:"Second Note Entered",
        dateCreated: new Date("2022-11-30T16:48:56.884Z"),
        important: true
    },
    {
        id: "665a0c68d8f1786cbfb06e6f7eb596ba",
        title:"Third Note",
        body:"Third Note Entered",
        dateCreated: new Date("2022-05-30T16:48:07.800Z"),
        important: false
    }
]

exports.userNotes = (req, res)=>{
    let userNotes = notes.filter(note=> {return req.params.id === note.id})
    res.status(200).json(userNotes)
}
exports.getNote = (req, res)=>{
    let note = notes.filter(note=> { return new Date(req.params.dateCreated).getTime() === note.dateCreated.getTime()})
    res.status(200).json(note)
}

exports.addNote = (req, res)=>{
    let note = {
        id: req.params.id,
        title: req.body.title,
        body: req.body.body,
        important: req.body.important,
        dateCreated: new Date()
    }
    notes.push(note)
    res.status(200).json("note has been entered")
}

exports.editNote = (req, res)=>{
    let note = notes.filter(note=> { return new Date(req.params.dateCreated).getTime() === note.dateCreated.getTime()})
    console.log(note)
    note[0].id = note[0].id,
    note[0].title = req.body.title,
    note[0].body = req.body.body,
    note[0].important = req.body.important,
    note[0].dateCreated = note[0].dateCreated
    console.log(note[0])
    res.status(200).json(notes)
}

exports.deleteNote = (req, res)=>{
    for(let i =0; i< notes.length; i++){
        if(notes[i].dateCreated.getTime() === new Date(req.params.dateCreated).getTime()){
            notes.splice(i, 1)
        }
    }
    res.status(200).json(notes)

}



