import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import icon from '../public/icon.png'

const Header = () => {
      const [offset, setOffset] = useState(0);

      useEffect(() => {
            window.onscroll = () => {
                  setOffset(window.pageYOffset)
                  console.log(offset);
            }
      }, []);




      return (


            <Headercontainer YOffset={offset}>
                  <MenuContainer>
                        <Image src={icon} alt="Vercel Logo" width={48} height={60} />
                        <ul>
                              <li>
                                    <Link href='/'>Home</Link>
                              </li>
                              <li>
                                    <Link href='/'>Services</Link>
                              </li>
                              <li>
                                    <Link href='/'>Home</Link>
                              </li>
                              <li>
                                    <Link href='/'>Home</Link>
                              </li>
                              <li>
                                    <Link href='/about'>About</Link>
                              </li>
                        </ul>
                  </MenuContainer>
            </Headercontainer>
      )

}

export default Header

const Headercontainer = styled.header`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      
      ${({ YOffset }) => YOffset > 200 ?
            `height: 4rem; 
            color: white;
            background-color: #00000087;
            box-shadow: 0px 2px 5px rgb(0 0 0 / 10%);
            `
            :
            `height: 7rem; 
            color: black;
            background-color: #00000000;
            box-shadow: 0;
            `
      }
      transition: all .5s ease-in-out;




      /*  */
      position: fixed;
      overflow: visible;
      z-index: 1001;
      /* background-color: #fff; */
      
      
      ul { 
            display: flex;
            justify-content:center;
            text-align: center;
            align-items: center;
            list-style-type: none;
            li {
                  padding: 0px 10px;
            }
            
      }
`
const MenuContainer = styled.div`
      display: flex;
      justify-content: space-between;
      width: 60%;
      height: 4rem;
`


