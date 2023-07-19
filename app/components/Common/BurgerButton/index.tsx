'use client'
import React, { useState } from 'react'
import { Menu, MenuHandler, MenuItem, MenuList, Button } from '@/components/MUI'
import Image from 'next/image'
import BurgerIcon from '@/assets/icons/burger.svg'
import CloseIcon from '@/assets/icons/close.svg'
interface List {
  name: string
  url: string
}

export type Props = {
  list: Array<List>
}

export default function BurgerButton({ list }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 px-0.5 lg:ml-auto text-center"
        >
          <Image
            src={isMenuOpen ? CloseIcon : BurgerIcon}
            width="32"
            height="32"
            alt="Toggle Icon"
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1 bg-gray-400 text-white border-gray-400 p-0 min-w-[280px]">
        {list.map(({ name, url }, key) => {
          return (
            <MenuItem
              key={key}
              className="flex items-center rounded-none px-[32px] py-[23px] text-lg"
              style={{ borderBottom: 'outset 1px' }}
            >
              <a href={url} className="block w-[100%]">
                {name}
              </a>
            </MenuItem>
          )
        })}
      </MenuList>
    </Menu>
  )
}
