import React from 'react'
import ChooseUserIndex from '../../modules/ChooseUser'
import { useAuthRedirect } from '../../hooks/useAuthRedirect'

export default function Choose() {
  useAuthRedirect();
  return <ChooseUserIndex />
}
