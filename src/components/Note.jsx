

const Note = ({notes}) => {
  return (
    <div>
     {notes.map(note => 
      
        <div key={note.id} className="note">
          <h2>{note.title}</h2>
          <p>{note.content}</p>
        </div>
           )} 
    </div>
  )
}

export default Note