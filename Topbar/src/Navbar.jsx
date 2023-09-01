import React from 'react'

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
} from '@chakra-ui/react'

import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons'

import {FiUser,FiSearch} from 'react-icons/fi'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsCartCheck} from 'react-icons/bs'

const Navbar = () => {
    const { isOpen, onToggle } = useDisclosure()
  return (
    <>
    <Box bg={'black'} color={'white'} pt={2} pb={2} fontSize={"14px"} fontWeight={700}  w={"1518px"}>
        SEND THE LOVE SALE IS LIVE! UPTO 60% OFF
    </Box>
        <Box w={["1518px"]}  pt={"15px"} pb={"10px"} position="sticky" top={0}  bg={useColorModeValue('white', 'gray.800')} zIndex={1}>
      <Flex
        w={"90%"} m={'auto'}
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Box>
                <Image w={["169px"]} h={["69px"]} src="https://hypefly-assets.s3.ap-south-1.amazonaws.com/media/defaults/store_logo.webp" alt="hypefly"/>
            </Box>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10} align={"center"}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <FiSearch/>
          <FiUser/>
          <AiOutlineHeart/>
          <BsCartCheck/>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
    </>
    
  )
}

export default Navbar


const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')

  return (
    <Stack direction={'row'} spacing={6} align={"center"} ml={"100px"} >
        <Box fontWeight={700}  _hover={{color:"#4299e1"}}>SEND THE LOVE</Box>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
                <Flex align={"center"} _hover={{color:"#4299e1"}} >
              <Box
                as="a"
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'1rem'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color:  "#4299e1",
                }}>
                {navItem.label}
              </Box>
              <ChevronDownIcon _hover={{color:"#4299e1"}} ml={"-2"} mt={"1"}/>
              </Flex>
            </PopoverTrigger>
            

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                textAlign={'left'}
                minW={'sm'}>
                    
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Box
      as="a"
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'} >
        <Box >
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  )
}

const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? '#'}
        justifyContent="space-between"
        alignItems="center"
        display={"flex"}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}


const NAV_ITEMS = [
    {
        label: 'Sneakers',
        children: [
          {
            label: 'All Sneakers',
            subLabel: 'Shop from our entire collection of sneakers.',
            href: '#',
          },
          {
            label: 'Yeezys',
            subLabel: 'No one does it like Ye.',
            href: '#',
          },
          {
            label: 'Jordans',
            subLabel: 'Straight from the MJ collection..',
            href: '#',
          },
        ],
      },
  {
    label: 'Strretwear',
    children: [
      {
        label: 'Explore Design Work',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'New & Noteworthy',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
      {
        label: 'New & Noteworthy',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
    ],
  },
  {
    label: 'Accessories',
    children: [
      {
        label: 'Explore Design Work',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'New & Noteworthy',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
    ],
  },
  
  {
    label: 'Under 20K',
    href: '#',
  },
  {
    label: 'Sneaker Care',
    href: '#',
  },
]