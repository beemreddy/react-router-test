import * as React from 'react';
import { Nav, INavStyles, INavLinkGroup } from '@fluentui/react/lib/Nav';
import { getTomatoVarieties } from './data/tomatodata';
import { getRadishVarieties } from './data/radishdata';
import { getSpinachVarieties } from './data/spinachdata';

const navStyles: Partial<INavStyles> = { root: { width: 300 } };

const tomatoVarieties = getTomatoVarieties();
const radishVarieties = getRadishVarieties();
const spinachVarieties = getSpinachVarieties();

const navLinkGroups: INavLinkGroup[] = [
  {
    name: 'Tomatoes',
    expandAriaLabel: 'Expand Basic components section',
    collapseAriaLabel: 'Collapse Basic components section',
    links: tomatoVarieties
  },
  {
    name: 'Radish',
    expandAriaLabel: 'Expand Extended components section',
    collapseAriaLabel: 'Collapse Extended components section',
    links: radishVarieties
  },
  {
    name: 'Spinach',
    expandAriaLabel: 'Expand Utilities section',
    collapseAriaLabel: 'Collapse Utilities section',
    links: spinachVarieties
  },
];

export const NavFabricDemoAppExample: React.FunctionComponent = () => {
  return (
    <Nav styles={navStyles} ariaLabel="Nav example similar to one found in this demo page" groups={navLinkGroups} />
  );
};
