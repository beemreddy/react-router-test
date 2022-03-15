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
    expandAriaLabel: 'Expand Tomatoes section',
    collapseAriaLabel: 'Collapse Tomatoes section',
    links: tomatoVarieties
  },
  {
    name: 'Radish',
    expandAriaLabel: 'Expand Radish section',
    collapseAriaLabel: 'Collapse Radish section',
    links: radishVarieties
  },
  {
    name: 'Spinach',
    expandAriaLabel: 'Expand Spinach section',
    collapseAriaLabel: 'Collapse Spinach section',
    links: spinachVarieties
  },
];

export const NavFabricDemoAppExample: React.FunctionComponent = () => {
  return (
    <Nav styles={navStyles} ariaLabel="Navigation menu for video categories and videos" groups={navLinkGroups} />
  );
};
