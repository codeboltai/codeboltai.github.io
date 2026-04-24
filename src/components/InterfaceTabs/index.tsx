import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

interface InterfaceTabsProps {
  desktop: React.ReactNode;
  cli: React.ReactNode;
  tui: React.ReactNode;
}

/**
 * Top-level interface switcher — Desktop App / CLI / TUI.
 * All InterfaceTabs on the page sync when the user picks an interface.
 */
export function InterfaceTabs({ desktop, cli, tui }: InterfaceTabsProps) {
  return (
    <Tabs groupId="codebolt-interface">
      <TabItem value="desktop" label="Desktop App" default>
        {desktop}
      </TabItem>
      <TabItem value="cli" label="CLI">
        {cli}
      </TabItem>
      <TabItem value="tui" label="TUI">
        {tui}
      </TabItem>
    </Tabs>
  );
}
