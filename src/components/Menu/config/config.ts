import { MenuItemsType, DropdownMenuItemType } from '@doodaswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Home'),
    href: '/',
    icon: 'Home',
    showItemsOnMobile: false,
    items: [],
  },
  {
    label: t('Dashboard'),
    href: '/dashboard',
    icon: 'Dashboard',
    showItemsOnMobile: false,
    items: [],
  },
  {
    label: t('Trade'),
    href: '/swap',
    icon: 'Swap',
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
    ],
  },
  {
    label: t('Farms'),
    href: '/farms',
    icon: 'Farms',
    items: [],
  },
  {
    label: t('Pools'),
    href: '/pools',
    icon: 'Pools',
    items: [],
  },
  {
    label: 'IDO',
    href: '#',
    icon: 'ifo',
    items: [],
  },
  {
    label: 'NFA',
    href: '/collectibles',
    icon: 'collectibles',
    items: [],
  },
  {
    label: 'sDOODA',
    href: '#',
    icon: 'sdooda',
    items: [],
  },
]

export default config
