import React, { Fragment, useState } from 'react'
interface Iuser {
  id: number,
  name: string
}
const userList: Iuser[] = []
for (let index = 0; index < 10; index++) {
  userList.push(
    {
      id: index,
      name: `userName${index}`
    }
  )


}

const DeleteUser: React.FC<{ user: Iuser, onDelete: (user: Iuser) => void; }> = ({ user, onDelete }) => {
  function deleteUser() {
    // userList.splice(user.id,1)
    onDelete(user)
  }
  return <>
    <button onClick={deleteUser}>删除</button>
  </>
}

const Example2 = () => {
  const [myUserList, setMyUserList] = useState<Iuser[]>(userList)
  const deleteUser = (user: Iuser) => {
    setMyUserList(myUserList.filter(item => item.id !== user.id))
  }
  return (
    <Fragment>
      <ul>
        {myUserList.map(user => (
          <li key={user.id}>{user.name}   <DeleteUser user={user} onDelete={deleteUser}></DeleteUser></li>
        ))}
      </ul>
    </Fragment>

  );
}
export default Example2;

