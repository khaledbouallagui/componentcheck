import React from 'react';

const Comments = () => {
    const Comments=[
        
{
    id:1,
name: "Ali Benamor",
email: "Alibenamor@gender.biz",
body: "Yes! A nice modern reactjs tutorial others were from 2 years ago!, straight to point and effective! THanks!"
},   



{
    id:2,
name: "Amira Benali",
email: "Amirabenali@gender.biz",
body: "It's a decent challenge to build everything myself, and I really enjoy it!",
Thanks  for the help, Teach!"
},

{
    id:3,
name: "Samir Kahlaoui",
email: "Samirkahlaoui@gender.biz",
body: "Im sure I can recreate this but I love coding along Thank you, jumping in soon"
},
    ];


  return (
    <div>
    {
      comment.map((commentaire)=>
<div>
<h5>{commentaire.name}</h5>
<h6>{commentaire.email}</h6>
<p>{commentaire.body}</p>
</div>
    
  )
}
</div>
)
}
export default Comments
