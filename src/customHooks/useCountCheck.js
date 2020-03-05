import React, { useEffect } from 'react'

export default function useCountCheck(count) {
    useEffect(() => {
        console.log(`${count} is a dope number`)
    })
}