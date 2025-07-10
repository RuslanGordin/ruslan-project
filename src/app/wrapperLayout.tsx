'use client'
import React, { ReactNode, useEffect, useState } from 'react'
import LayoutClient from './layoutClient'

interface IProps {
	children: ReactNode
}

const WrapperLayout = (props: IProps) => {
	const { children } = props

	return (
                    <LayoutClient>{children}</LayoutClient>
	)
}

export default WrapperLayout