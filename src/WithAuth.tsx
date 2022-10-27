import { Flex } from '@chakra-ui/react'
import React from 'react'
import LoginPage from './pages/signin'
import { useGetUserQuery } from './redux/services/auth.service'

export const WithAuth = (C: any) => {
    const getUser: any = useGetUserQuery(undefined, { refetchOnFocus: true, refetchOnReconnect: true })
    if (getUser?.isFetching) {
        return (<Flex w={'full'} h={'100vh'} alignItems={'center'} justifyContent={'center'} color={'rgba(100, 116, 139, 1)'}> <C /></Flex>)
    }

    if (getUser?.error?.data?.status == 401) {
        // appAlert.warning('Session Expired, please sign in again')
        return (<LoginPage />)
    }
    return (
        <C />
    )
}

