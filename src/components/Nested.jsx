const users = [
    {
        name : "Anisul Islam",
        age : 27,
        phones : [
            {mobile : "017xxxxxxxx"},
            {whatsapp : "018xxxxxxxx"}
        ]
    },
    {
        name : "Mahbub Hasan",
        age : 26,
        phones : [
            {mobile : "014xxxxxxxx"},
            {whatsapp : "015xxxxxxxx"}
        ]
    },
]

const Nested = () => {
  return (
    <div>
      <h1> Nested List </h1>
      {
        users.map((user, index) => (
            <article key={index} className="bg-yellow-400 m-3 p-3">
                <h2> Name: {user.name} </h2>
                <p> Age: {user.age} </p>
                {user.phones.map((phone, index2) => (
                    <div key={index2}>
                        {phone.mobile && <p> Phone : {phone.mobile} </p> }
                        {phone.whatsapp && <p> Mobile : {phone.whatsapp} </p> }
                    </div>
                ))}
            </article>
        ))
      }
    </div>
  )
}

export default Nested
