import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'shopping-cart-outline',
    link: '/dashboard',
    home: true,
  },
  {
    title: 'CHỨC NĂNG',
    group: true,
  },
  {
    title: 'Quản lý Log',
    icon: 'file-text',
    children: [
      {
        title: 'Danh sách',
        link: '/pages/logs/',
      },
    ],
  },
];
