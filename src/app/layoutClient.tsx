'use client'
import React, {ReactNode, useEffect} from 'react'
import {DivWrapperContentSC, DivWrapperLayoutSC} from './layoutClient.styles';
import {GlobalStyle} from './global.styles';
import Header from './components/header';
import {useSession} from "next-auth/react";
import {redirect, usePathname, useRouter} from "next/navigation";

interface IProps {
        children: ReactNode
    }

const LayoutClient = (props: IProps) => {
	const router = useRouter();
	const pathname = usePathname()
	const { children } = props;

	// useEffect(() => {
	// 	let token = sessionStorage.getItem('token');
	// 	if(!token) {
	// 		router.push('/auth')
	// 	}
	// 	else  {
	// 		if (pathname === '/auth') {
	// 			redirect(`/`)
	// 		}
	// 	}
	// }, [pathname]);
		return (
			<DivWrapperLayoutSC>
				<GlobalStyle />
				 <Header />
				<DivWrapperContentSC>
					{children}
				</DivWrapperContentSC>
			</DivWrapperLayoutSC>
		)
}

export default LayoutClient
