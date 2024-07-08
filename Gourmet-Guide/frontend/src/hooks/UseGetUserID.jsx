import React from 'react'

function UseGetUserID() {
  return window.localStorage.getItem("userID");
}

export default UseGetUserID