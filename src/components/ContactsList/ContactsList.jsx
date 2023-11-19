

export const ContactsList = ({ contacts , handleDelete }) => (
  <div>
  <ul>
    {contacts.map ((contact) => (
        <li key={contact.id}>{contact.name}: {contact.number} 
          <button type="submit" onClick={() => handleDelete(contact.id)}>Delete</button>
         </li>
    ))}
  </ul>
  </div>
);