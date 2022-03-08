import * as React from 'react';
import { Nav, INavStyles, INavLinkGroup } from '@fluentui/react/lib/Nav';

const navStyles: Partial<INavStyles> = { root: { width: 300 } };

const navLinkGroups: INavLinkGroup[] = [
  {
    name: 'Tomatoes',
    expandAriaLabel: 'Expand Basic components section',
    collapseAriaLabel: 'Collapse Basic components section',
    links: [
      {
        key: 'AgRedCherry',
        name: 'Red Cherry',
        url: '/tomato/ag-red-cherry',
      },
      {
        key: 'TinyTim',
        name: 'Tiny Tim',
        url: '/tomato/tiny-tim',
      },
      {
        key: '42Day',
        name: '42 day',
        url: '/tomato/42-day',
      },
      {
        key: 'VenusMicroDwarf',
        name: 'Venus Micro Dwarf',
        url: '/tomato/venus-micro-dwarf',
      },
      {
        key: 'YellowMicroDwarf',
        name: 'Yellow Micro Dwarf',
        url: '/tomato/yellow-micro-dwarf',
      },
      {
        key: 'Wherokowhai',
        name: 'Wherokowhai',
        url: '/tomato/wherokowhai',
      }
    ],
  },
  {
    name: 'Extended components',
    expandAriaLabel: 'Expand Extended components section',
    collapseAriaLabel: 'Collapse Extended components section',
    links: [
      {
        key: 'ColorPicker',
        name: 'ColorPicker',
        url: '#/examples/colorpicker',
      },
      {
        key: 'ExtendedPeoplePicker',
        name: 'ExtendedPeoplePicker',
        url: '#/examples/extendedpeoplepicker',
      },
      {
        key: 'GroupedList',
        name: 'GroupedList',
        url: '#/examples/groupedlist',
      },
    ],
  },
  {
    name: 'Utilities',
    expandAriaLabel: 'Expand Utilities section',
    collapseAriaLabel: 'Collapse Utilities section',
    links: [
      {
        key: 'FocusTrapZone',
        name: 'FocusTrapZone',
        url: '#/examples/focustrapzone',
      },
      {
        key: 'FocusZone',
        name: 'FocusZone',
        url: '#/examples/focuszone',
      },
      {
        key: 'MarqueeSelection',
        name: 'MarqueeSelection',
        url: '#/examples/marqueeselection',
      },
    ],
  },
];

export const NavFabricDemoAppExample: React.FunctionComponent = () => {
  return (
    <Nav styles={navStyles} ariaLabel="Nav example similar to one found in this demo page" groups={navLinkGroups} />
  );
};
